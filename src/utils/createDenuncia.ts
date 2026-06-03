import type { denuncia } from "../models/denuncia";
import { supabase } from "../services/supabase.service";

interface AttachedFile {
  id: string;
  name: string;
  size: number;
  type: string;
  data: string;
}

export async function createDenuncia(form: any, activeTab: string, adjuntos: AttachedFile[] ) {
   let payload: denuncia = {
    cedula: form.cedula || null,
    telefono: form.telefono || null,
    correo: form.correo,
    empleado_edm: form.esEmpleado,
    denuncia: form.denuncia,
   }

    if (activeTab === "anonima") {
      // ===== DENUNCIA ANÓNIMA =====
      payload = {
        ...payload,
        tipo_denuncia: "anonima"
      };
    } else {
      payload = {
        ...payload,
        nombre: form.nombre,
        apellido: form.apellido,  
        tipo_denuncia: "publica"
      };
    }

    console.log(`📩 Denuncia preparada para tabla:`, payload);

    // 1) Subir adjuntos al bucket
    const urls = await uploadFiles(adjuntos, activeTab)

    // 2) Insertar en la tabla correcta según el tipo
    const { error: insertError } = await supabase
      .from("denuncias_form")
      .insert({
        ...payload,
        adjuntos_path: urls,
    });

    if (insertError) throw insertError;
    try{
      const denunca = await sendMail(form)
      console.log(denunca)
    } catch(e){
      console.error("Error enviando correo:", e);
    }
    
    
  };

export async function uploadFiles(
  adjuntos: AttachedFile[],
  activeTab: string
): Promise<string[]> {

  // 1) Subir archivos al bucket "denuncias-adjuntos"
  const uploadedFilesUrls: string[] = [];
  const subFolder = activeTab === "anonima" ? "anonimas" : "publicas";

  for (const file of adjuntos) {
    const blob = await (await fetch(file.data)).blob();
    const path = `${subFolder}/${Date.now()}-${file.name}`;
    const { error: uploadError } = await supabase.storage
      .from("denuncias-adjuntos")
      .upload(path, blob);
    
    if (uploadError) throw uploadError;
    const { data: urlData } = supabase.storage
      .from("denuncias-adjuntos")
      .getPublicUrl(path);
      uploadedFilesUrls.push(urlData.publicUrl);
  }

  return uploadedFilesUrls
};

export async function sendMail(form: any,) {

  //TODO: Poner el nuevo url de funcion envio correos
  return await fetch('http://localhost:4141/mail/send', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(form),
  }) 
}

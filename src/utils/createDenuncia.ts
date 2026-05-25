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

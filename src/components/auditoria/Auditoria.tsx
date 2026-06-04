import { useState } from "react";
import "./Auditoria.css";
import React from "react";
import { supabase } from "../../services/supabase.service";
import AttachmentsModal from "./Attachments/Attachments";

function formatDate(date: string) {
  return new Intl.DateTimeFormat("es-CO", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).format(new Date(date));
}

export default function Auditoria() {
  const [denuncias, setDenuncias] = React.useState<any[]>([])
  const [selectedRecord, setSelectedRecord] = useState<any | null>(null);

  React.useEffect(() => {
    async function getDenuncias() {
      const { data, error } = await supabase.from('denuncias_form').select()
      
      if (error) {
        console.error("Error fetching denuncias:", error)
        return
      }


      if (data) {
        console.log("Denuncias data:", data)
        setDenuncias(data)
      }
    }

    getDenuncias()
  }, [])  


  return (
    <main className="auditoria">
      <div className="auditoria__shell">
        <section className="auditoria__hero">
          <div>
            <p className="auditoria__eyebrow">Panel protegido</p>
            <h1 className="auditoria__title">Auditoria operativa.</h1>
          </div>
        </section>

        <section className="auditoria__panel">
          <div className="auditoria__table-wrap">
            <table className="auditoria__table">
              <thead>
                <tr>
                  <th>Tipo denuncia</th>
                  <th>Fecha de denuncia</th>
                  <th>Cedula</th>
                  <th>Nombre</th>
                  <th>Teléfono</th>
                  <th>Correo electónico</th>
                  <th>Denuncia</th>
                  <th>Adjuntos</th>
                </tr>
              </thead>
              <tbody>
                {denuncias.length ? (
                  denuncias.map((record) => (
                    <tr key={record.id}>
                      <td>{record.tipo_denuncia}</td>
                      <td>{formatDate(record.created_at)}</td>
                      <td>{record.cedula ?? "Anonimo"}</td>
                      <td>{record.nombre ?? "Anonimo"} {record.apellido}</td>
                      <td>{record.telefono ?? "Anonimo"} </td>
                      <td>{record.correo ?? "Anonimo"}</td>
                      <td>{record.denuncia}</td>  
                      <td>
                        {record.adjuntos_path?.length > 0 && record.adjuntos_path !== "[]" ?
                          <button
                            type="button"
                            className="auditoria__attachments-button"
                            onClick={() => setSelectedRecord(record)}
                          >
                            Ver adjuntos
                          </button> : "Sin adjuntos"
                        }
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={6} className="auditoria__empty">
                      No hay registros que coincidan con los filtros actuales.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </section>
      </div>

      {selectedRecord ? (
        <AttachmentsModal selectedRecord={selectedRecord} onClose={() => setSelectedRecord(null)}/>
      ) : null}
    </main>
  );
}
 

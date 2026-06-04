import "../Auditoria.css"
import React from "react";
import { supabase } from "../../../services/supabase.service";

type AttachmentsModalProps = {
  selectedRecord: any;
  onClose: () => void;
};

type AttachmentItem = {
  path: string;
  url: string;
  name: string;
};

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

export default function AttachmentsModal({ selectedRecord, onClose }: AttachmentsModalProps) {
  const [attachments, setAttachments] = React.useState<AttachmentItem[]>([])
  const bucket = supabase.storage.from("denuncias-adjuntos")

  React.useEffect(() => {
    const loadAttachments = async () => {
      console.log("Selected record for attachments:", selectedRecord)

      if (!selectedRecord?.adjuntos_path) {
        setAttachments([])
        return
      }

      let parsedAttachments: unknown = selectedRecord.adjuntos_path

      if (typeof parsedAttachments === "string") {
        try {
          parsedAttachments = JSON.parse(parsedAttachments)
        } catch (error) {
          console.error("No se pudo parsear adjuntos_path:", error)
          setAttachments([])
          return
        }
      }

      if (!Array.isArray(parsedAttachments)) {
        setAttachments([])
        return
      }

      const paths = parsedAttachments
        .filter((item): item is string => typeof item === "string" && item.length > 0)
      if (!paths.length) {
        setAttachments([])
        return
      }

      const signedAttachments = await Promise.all(
        paths.map(async (path) => {
          const { data, error } = await bucket.createSignedUrl(path, 60 * 10)

          if (error || !data?.signedUrl) {
            console.error(`No se pudo generar la signed URL para ${path}:`, error)
            return null
          }

          return {
            path,
            url: data.signedUrl,
            name: decodeURIComponent(path.split("/").pop() || "archivo"),
          }
        })
      )

      const normalizedAttachments = signedAttachments.filter(
        (attachment): attachment is AttachmentItem => attachment !== null
      )

      console.log("Adjuntos cargados:", normalizedAttachments.length)
      setAttachments(normalizedAttachments)
    }

    loadAttachments()
  }, [selectedRecord])

  React.useEffect(() => {
    console.log("Attachments state updated:", attachments)
  }, [attachments])

  const getFileKind = (fileName: string) => {
    const extension = fileName.split(".").pop()?.toUpperCase() || ""

    if (!extension) {
      return "FILE"
    }

    if (extension.length <= 4) {
      return extension
    }

    return "FILE"
  }

  return (
    <div className="auditoria-modal" role="dialog" aria-modal="true" aria-labelledby="auditoria-adjuntos-title">
      <div className="auditoria-modal__backdrop" onClick={onClose} />
      <section className="auditoria-modal__content">
        <button type="button" className="auditoria-modal__close" aria-label="Cerrar modal de adjuntos" onClick={onClose}>
          ×
        </button>

        <div className="auditoria-modal__header">
          <p className="auditoria-modal__eyebrow">Adjuntos del bucket</p>
          <h2 id="auditoria-adjuntos-title" className="auditoria-modal__title">
            Archivos asociados a la denuncia
          </h2>
        </div>

        <div className="auditoria-modal__summary">
          <div>
            <span className="auditoria-modal__label">Denunciante</span>
            <strong>{selectedRecord.nombre} {selectedRecord.apellido}</strong>
          </div>
          <div>
            <span className="auditoria-modal__label">Tipo</span>
            <strong>{selectedRecord.tipo_denuncia}</strong>
          </div>
          <div>
            <span className="auditoria-modal__label">Fecha</span>
            <strong>{formatDate(selectedRecord.created_at)}</strong>
          </div>
        </div>

        <div className="auditoria-modal__list">
          {attachments.length ? (
            attachments.map((attachment) => (
              <article className="auditoria-modal__file" key={attachment.path}>
                <div className="auditoria-modal__file-icon" aria-hidden="true">
                  {getFileKind(attachment.name)}
                </div>
                <div className="auditoria-modal__file-body">
                  <h3>{attachment.name}</h3>
                  <p>Archivo adjunto almacenado en el bucket de denuncias.</p>
                </div>
                <a
                  href={attachment.url}
                  target="_blank"
                  rel="noreferrer"
                  className="auditoria-modal__file-action"
                >
                  Ver archivo
                </a>
              </article>
            ))
          ) : (
            <article className="auditoria-modal__file">
              <div className="auditoria-modal__file-icon" aria-hidden="true">
                INFO
              </div>
              <div className="auditoria-modal__file-body">
                <h3>Sin adjuntos disponibles</h3>
                <p>Esta denuncia no tiene archivos adjuntos almacenados.</p>
              </div>
            </article>
          )}
        </div>
      </section>
    </div>
  )
}

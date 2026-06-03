import { useMemo, useState } from "react";
import "./Auditoria.css";

type AuditStatus = "Cerrado" | "En revision" | "Pendiente";

type AuditRecord = {
  id: string;
  fecha: string;
  modulo: string;
  evento: string;
  usuario: string;
  detalle: string;
  estado: AuditStatus;
};

const AUDIT_RECORDS: AuditRecord[] = [
  {
    id: "AUD-1048",
    fecha: "2026-06-01",
    modulo: "Linea etica",
    evento: "Actualizacion de reporte",
    usuario: "ana.morales@empresa.com",
    detalle: "Se adjuntaron soportes y se cambio el estado del caso.",
    estado: "En revision",
  },
  {
    id: "AUD-1043",
    fecha: "2026-05-29",
    modulo: "Formularios",
    evento: "Creacion de denuncia",
    usuario: "carlos.ruiz@empresa.com",
    detalle: "Registro inicial con envio de evidencias.",
    estado: "Pendiente",
  },
  {
    id: "AUD-1038",
    fecha: "2026-05-27",
    modulo: "Microsoft Graph",
    evento: "Inicio de sesion",
    usuario: "laura.mejia@empresa.com",
    detalle: "Acceso autorizado al panel de auditoria.",
    estado: "Cerrado",
  },
  {
    id: "AUD-1031",
    fecha: "2026-05-22",
    modulo: "Notificaciones",
    evento: "Envio de correo",
    usuario: "julian.torres@empresa.com",
    detalle: "Notificacion judicial enviada al destinatario principal.",
    estado: "Cerrado",
  },
  {
    id: "AUD-1026",
    fecha: "2026-05-19",
    modulo: "Linea etica",
    evento: "Cambio de responsable",
    usuario: "paula.gomez@empresa.com",
    detalle: "Se reasigno el seguimiento del caso al equipo legal.",
    estado: "En revision",
  },
];

function formatDate(date: string) {
  return new Intl.DateTimeFormat("es-CO", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(new Date(`${date}T00:00:00`));
}

export default function Auditoria() {
  const [search, setSearch] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const filteredRecords = useMemo(() => {
    const term = search.trim().toLowerCase();

    return AUDIT_RECORDS.filter((record) => {
      const matchesText =
        !term ||
        [record.id, record.modulo, record.evento, record.usuario, record.detalle, record.estado]
          .join(" ")
          .toLowerCase()
          .includes(term);

      const matchesStart = !startDate || record.fecha >= startDate;
      const matchesEnd = !endDate || record.fecha <= endDate;

      return matchesText && matchesStart && matchesEnd;
    });
  }, [endDate, search, startDate]);

  const stats = useMemo(() => {
    const pending = filteredRecords.filter((record) => record.estado === "Pendiente").length;
    const reviewing = filteredRecords.filter((record) => record.estado === "En revision").length;

    return {
      total: filteredRecords.length,
      pending,
      reviewing,
    };
  }, [filteredRecords]);

  return (
    <main className="auditoria">
      <div className="auditoria__shell">
        <section className="auditoria__hero">
          <div>
            <p className="auditoria__eyebrow">Panel protegido</p>
            <h1 className="auditoria__title">Auditoria operativa.</h1>
          </div>
          <p className="auditoria__copy">
            Consulta movimientos recientes, filtra por fecha o texto y mantén una vista clara del
            seguimiento en los procesos clave de la aplicación.
          </p>

          <div className="auditoria__stats">
            <article className="auditoria__stat">
              <span className="auditoria__stat-label">Registros visibles</span>
              <span className="auditoria__stat-value">{stats.total}</span>
            </article>
            <article className="auditoria__stat">
              <span className="auditoria__stat-label">Pendientes</span>
              <span className="auditoria__stat-value">{stats.pending}</span>
            </article>
            <article className="auditoria__stat">
              <span className="auditoria__stat-label">En revision</span>
              <span className="auditoria__stat-value">{stats.reviewing}</span>
            </article>
          </div>
        </section>

        <section className="auditoria__panel">
          <div className="auditoria__filters">
            <div className="auditoria__field">
              <label htmlFor="audit-search">Buscar por texto</label>
              <input
                id="audit-search"
                className="auditoria__input"
                type="text"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="ID, modulo, usuario o detalle"
              />
            </div>

            <div className="auditoria__field">
              <label htmlFor="audit-start-date">Fecha desde</label>
              <input
                id="audit-start-date"
                className="auditoria__input"
                type="date"
                value={startDate}
                onChange={(event) => setStartDate(event.target.value)}
              />
            </div>

            <div className="auditoria__field">
              <label htmlFor="audit-end-date">Fecha hasta</label>
              <input
                id="audit-end-date"
                className="auditoria__input"
                type="date"
                value={endDate}
                onChange={(event) => setEndDate(event.target.value)}
              />
            </div>
          </div>

          <div className="auditoria__chips" aria-label="Resumen de filtros">
            <span className="auditoria__chip">Resultados: {filteredRecords.length}</span>
            <span className="auditoria__chip">Texto: {search.trim() || "Todos"}</span>
            <span className="auditoria__chip">Desde: {startDate || "Sin limite"}</span>
            <span className="auditoria__chip">Hasta: {endDate || "Sin limite"}</span>
          </div>
        </section>

        <section className="auditoria__panel">
          <div className="auditoria__table-wrap">
            <table className="auditoria__table">
              <thead>
                <tr>
                  <th>ID / Evento</th>
                  <th>Fecha</th>
                  <th>Modulo</th>
                  <th>Usuario</th>
                  <th>Estado</th>
                </tr>
              </thead>
              <tbody>
                {filteredRecords.length ? (
                  filteredRecords.map((record) => (
                    <tr key={record.id}>
                      <td>
                        <span className="auditoria__record-title">{record.id}</span>
                        <span className="auditoria__record-subtitle">
                          {record.evento}. {record.detalle}
                        </span>
                      </td>
                      <td>{formatDate(record.fecha)}</td>
                      <td>{record.modulo}</td>
                      <td>{record.usuario}</td>
                      <td>
                        <span
                          className={`auditoria__badge auditoria__badge--${record.estado
                            .toLowerCase()
                            .replace(/\s+/g, "")}`}
                        >
                          {record.estado}
                        </span>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={5} className="auditoria__empty">
                      No hay registros que coincidan con los filtros actuales.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </main>
  );
}

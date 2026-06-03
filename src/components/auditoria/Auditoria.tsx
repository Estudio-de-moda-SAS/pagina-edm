import { useMemo, useState } from "react";
import "./Auditoria.css";
import React from "react";
import { supabase } from "../../services/supabase.service";

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
  const [search, setSearch] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [denuncias, setDenuncias] = React.useState<any[]>([])

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

  const filteredRecords = useMemo(() => {
    const term = search.trim().toLowerCase();

    return denuncias.filter((record) => {
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
                  <th>Tipo denuncia</th>
                  <th>Fecha de denuncia</th>
                  <th>Denuncia</th>
                  <th>Nombre</th>
                  <th>Cedula</th>
                </tr>
              </thead>
              <tbody>
                {denuncias.length ? (
                  denuncias.map((record) => (
                    <tr key={record.id}>
                      <td>{record.tipo_denuncia}</td>
                      <td>{formatDate(record.created_at)}</td>
                      <td>{record.denuncia}</td>
                      <td>{record.nombre} {record.apellido}</td>
                      <td>{record.cedula}</td>
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
 
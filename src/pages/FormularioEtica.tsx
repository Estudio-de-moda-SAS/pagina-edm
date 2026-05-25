import { useState, useEffect, useRef } from "react";
import "./FormularioEtica.css";
import { createDenuncia } from "../utils/createDenuncia";

type TabKey = "publica" | "anonima";

interface FormData {
  nombre: string;
  apellido: string;
  cedula: string;
  telefono: string;
  correo: string;
  esEmpleado: boolean;
  denuncia: string;
}

interface AttachedFile {
  id: string;
  name: string;
  size: number;
  type: string;
  // Guardamos como base64 para que persista en localStorage
  data: string;
}

const INITIAL_FORM: FormData = {
  nombre: "",
  apellido: "",
  cedula: "",
  telefono: "",
  correo: "",
  esEmpleado: false,
  denuncia: "",
};

// Claves de localStorage por tipo de tab
const STORAGE_KEYS: Record<TabKey, { form: string; files: string }> = {
  publica: {
    form: "etica_form_publica",
    files: "etica_files_publica",
  },
  anonima: {
    form: "etica_form_anonima",
    files: "etica_files_anonima",
  },
};

// Tamaño máximo por archivo: 5 MB
const MAX_FILE_SIZE = 5 * 1024 * 1024;
// Cantidad máxima de archivos
const MAX_FILES = 5;

export default function FormularioEtica() {
  const [activeTab, setActiveTab] = useState<TabKey>("publica");
  const [form, setForm] = useState<FormData>(INITIAL_FORM);
  const [files, setFiles] = useState<AttachedFile[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [fileError, setFileError] = useState<string>("");
  const [submitError, setSubmitError] = useState<string>("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  /* ===========================================================
     LOCALSTORAGE — Restaurar datos al montar / cambiar tab
     =========================================================== */
  useEffect(() => {
    const keys = STORAGE_KEYS[activeTab];

    // Restaurar campos del form
    try {
      const savedForm = localStorage.getItem(keys.form);
      if (savedForm) {
        setForm({ ...INITIAL_FORM, ...JSON.parse(savedForm) });
      } else {
        setForm(INITIAL_FORM);
      }
    } catch {
      setForm(INITIAL_FORM);
    }

    // Restaurar archivos
    try {
      const savedFiles = localStorage.getItem(keys.files);
      if (savedFiles) {
        setFiles(JSON.parse(savedFiles));
      } else {
        setFiles([]);
      }
    } catch {
      setFiles([]);
    }

    setFileError("");
  }, [activeTab]);

  /* ===========================================================
     LOCALSTORAGE — Persistir cambios del form
     =========================================================== */
  useEffect(() => {
    if (submitted) return; // No guardar después de enviar exitosamente
    const keys = STORAGE_KEYS[activeTab];
    try {
      localStorage.setItem(keys.form, JSON.stringify(form));
    } catch {
      // localStorage lleno o no disponible: silenciar
    }
  }, [form, activeTab, submitted]);

  /* ===========================================================
     LOCALSTORAGE — Persistir archivos
     =========================================================== */
  useEffect(() => {
    if (submitted) return;
    const keys = STORAGE_KEYS[activeTab];
    try {
      localStorage.setItem(keys.files, JSON.stringify(files));
    } catch {
      // Si los archivos son muy pesados, localStorage podría rebotar
      console.warn("No se pudieron persistir los archivos en localStorage");
    }
  }, [files, activeTab, submitted]);

  /* ===========================================================
     HANDLERS DE CAMPOS
     =========================================================== */
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const target = e.target as HTMLInputElement;
    const value =
      target.type === "checkbox" ? target.checked : target.value;
    setForm((prev) => ({ ...prev, [target.name]: value }));
  };

  /* ===========================================================
     HANDLERS DE ARCHIVOS
     =========================================================== */
  const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setFileError("");
    const selected = Array.from(e.target.files || []);
    if (selected.length === 0) return;

    // Validar cantidad
    if (files.length + selected.length > MAX_FILES) {
      setFileError(`Solo puedes adjuntar hasta ${MAX_FILES} archivos.`);
      return;
    }

    // Validar tamaño y convertir a base64
    const newFiles: AttachedFile[] = [];
    for (const file of selected) {
      if (file.size > MAX_FILE_SIZE) {
        setFileError(
          `El archivo "${file.name}" supera el límite de 5 MB.`
        );
        continue;
      }
      try {
        const base64 = await fileToBase64(file);
        newFiles.push({
          id: `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`,
          name: file.name,
          size: file.size,
          type: file.type,
          data: base64,
        });
      } catch {
        setFileError(`No se pudo procesar "${file.name}".`);
      }
    }

    setFiles((prev) => [...prev, ...newFiles]);
    // Reset input para permitir volver a seleccionar el mismo archivo
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const removeFile = (id: string) => {
    setFiles((prev) => prev.filter((f) => f.id !== id));
    setFileError("");
  };

  const fileToBase64 = (file: File): Promise<string> =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });

  const formatBytes = (bytes: number): string => {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
  };

  /* ===========================================================
     SUBMIT
     =========================================================== */
  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitError("");

    try {
      await createDenuncia(form, activeTab, files);

      // Limpiar localStorage al enviar exitosamente
      const keys = STORAGE_KEYS[activeTab];
      localStorage.removeItem(keys.form);
      localStorage.removeItem(keys.files);
      setSubmitted(true);
    } catch {
      setSubmitted(false);
      setSubmitError("No pudimos enviar tu denuncia. Intenta nuevamente.");
    } finally {
      setSubmitting(false);
    }
  };

  const resetForm = () => {
    setForm(INITIAL_FORM);
    setFiles([]);
    setFileError("");
    setSubmitError("");
    setSubmitted(false);
  };

  const handleTabChange = (tab: TabKey) => {
    setActiveTab(tab);
    setSubmitted(false);
    setFileError("");
    setSubmitError("");
  };

  const isAnonymous = activeTab === "anonima";

  return (
    <main className="etica-form">
      <section className="etica-form__hero">
        <div className="etica-form__container">
          {/* Header */}
          <div className="etica-form__header">
            <span className="etica-form__kicker">Línea Ética</span>
            <h1 className="etica-form__title">Radica tu denuncia</h1>
            <p className="etica-form__subtitle">
              Selecciona el tipo de denuncia que deseas radicar. Garantizamos total
              confidencialidad sobre la información reportada.
            </p>
          </div>

          {/* Tabs */}
          <div className="etica-tabs" role="tablist">
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === "publica"}
              className={`etica-tab ${
                activeTab === "publica" ? "etica-tab--active" : ""
              }`}
              onClick={() => handleTabChange("publica")}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
              <span>Línea Ética</span>
            </button>

            <button
              type="button"
              role="tab"
              aria-selected={activeTab === "anonima"}
              className={`etica-tab ${
                activeTab === "anonima" ? "etica-tab--active" : ""
              }`}
              onClick={() => handleTabChange("anonima")}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="12" />
                <line x1="12" y1="16" x2="12.01" y2="16" />
              </svg>
              <span>Línea Ética Anónima</span>
            </button>
          </div>

          {/* Contenido */}
          <div className="etica-content">
            {/* Info informativa arriba */}
            <div className="etica-info">
              <p>
                En <strong>EDM</strong> estamos comprometidos con la transparencia en
                todos nuestros procesos y proyectos, por eso hemos creado nuestra línea
                ética, la cual es nuestro canal de comunicación para remitir denuncias.
              </p>
              <p>
                Este canal es de uso <strong>exclusivo</strong> para la radicación de
                Denuncias por Actos de Soborno, corrupción, fraude, lavado de activos,
                financiación del terrorismo y financiación de la proliferación de armas
                de destrucción masiva y malversación de activos que sean encontrados por
                cualquier persona o empresa, donde un tercero relacionado con nuestra
                compañía pueda verse involucrado.
              </p>
              <p className="etica-info__warning">
                No es un canal de servicio de atención al cliente, ni denuncias de Acoso
                Laboral, ni Notificaciones Judiciales, no es un canal ni una herramienta
                para radicar PQRS (Peticiones, quejas y reclamos).
              </p>
              <p>
                Si deseas ampliar tu denuncia puedes escribir al correo electrónico{" "}
                <a
                  href="mailto:lineaetica@estudiodemoda.com.co"
                  className="etica-info__email"
                >
                  lineaetica@estudiodemoda.com.co
                </a>
              </p>
            </div>

            {/* Formulario o mensaje de éxito */}
            <div className="etica-form-wrapper">
              {submitted ? (
                <div className="etica-success">
                  <div className="etica-success__icon" aria-hidden="true">
                    <svg
                      width="44"
                      height="44"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <h2 className="etica-success__title">
                    Tu denuncia fue registrada
                  </h2>
                  <p className="etica-success__text">
                    Hemos recibido tu reporte y será revisado con total confidencialidad
                    por nuestro equipo de Línea Ética. Si dejaste tus datos, podríamos
                    contactarte para más información.
                  </p>
                  <button
                    type="button"
                    className="etica-success__button"
                    onClick={resetForm}
                  >
                    Radicar otra denuncia
                  </button>
                </div>
              ) : (
                <>
                  {isAnonymous && (
                    <div className="etica-anon-notice">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      </svg>
                      <span>
                        Estás radicando una denuncia <strong>anónima</strong>. Tu nombre
                        no será solicitado.
                      </span>
                    </div>
                  )}

                  <form className="etica-form-fields" onSubmit={handleSubmit} noValidate>
                    {/* Nombre y Apellido — solo en form público */}
                    {!isAnonymous && (
                      <div className="field-row">
                        <div className="field-group">
                          <label htmlFor="nombre" className="field-label">
                            Nombre <span className="field-required">*</span>
                          </label>
                          <input
                            type="text"
                            id="nombre"
                            name="nombre"
                            className="field-input"
                            value={form.nombre}
                            onChange={handleChange}
                            required
                            placeholder="Ej: María"
                            autoComplete="given-name"
                          />
                        </div>

                        <div className="field-group">
                          <label htmlFor="apellido" className="field-label">
                            Apellido <span className="field-required">*</span>
                          </label>
                          <input
                            type="text"
                            id="apellido"
                            name="apellido"
                            className="field-input"
                            value={form.apellido}
                            onChange={handleChange}
                            required
                            placeholder="Ej: González"
                            autoComplete="family-name"
                          />
                        </div>
                      </div>
                    )}

                    {/* Cédula y Teléfono — opcionales en ambos forms */}
                    <div className="field-row">
                      <div className="field-group">
                        <label htmlFor="cedula" className="field-label">
                          Cédula <span className="field-optional">(opcional)</span>
                        </label>
                        <input
                          type="text"
                          id="cedula"
                          name="cedula"
                          className="field-input"
                          value={form.cedula}
                          onChange={handleChange}
                          pattern="[0-9]*"
                          inputMode="numeric"
                          placeholder="Solo números"
                        />
                      </div>

                      <div className="field-group">
                        <label htmlFor="telefono" className="field-label">
                          Teléfono <span className="field-optional">(opcional)</span>
                        </label>
                        <input
                          type="tel"
                          id="telefono"
                          name="telefono"
                          className="field-input"
                          value={form.telefono}
                          onChange={handleChange}
                          placeholder="Ej: 3001234567"
                          autoComplete="tel"
                        />
                      </div>
                    </div>

                    {/* Correo — requerido en form público, opcional en anónimo */}
                    <div className="field-group">
                      <label htmlFor="correo" className="field-label">
                        Correo electrónico{" "}
                        {isAnonymous
                          ? <span className="field-optional">(opcional)</span>
                          : <span className="field-required">*</span>
                        }
                      </label>
                      <input
                        type="email"
                        id="correo"
                        name="correo"
                        className="field-input"
                        value={form.correo}
                        onChange={handleChange}
                        required={!isAnonymous}
                        placeholder="ejemplo@correo.com"
                        autoComplete="email"
                      />
                    </div>

                    {/* Pregunta: empleado de la empresa */}
                    <div className="field-group">
                      <span className="field-label">
                        ¿Eres empleado de la empresa?{" "}
                        <span className="field-required">*</span>
                      </span>
                      <div className="field-checkbox-row">
                        <label className="field-checkbox">
                          <input
                            type="checkbox"
                            checked={form.esEmpleado === true}
                            onChange={() =>
                              setForm((prev) => ({ ...prev, esEmpleado: true }))
                            }
                          />
                          <span className="field-checkbox__box" aria-hidden="true">
                            <svg
                              width="14"
                              height="14"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="3"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <polyline points="20 6 9 17 4 12" />
                            </svg>
                          </span>
                          <span className="field-checkbox__text">Sí</span>
                        </label>

                        <label className="field-checkbox">
                          <input
                            type="checkbox"
                            checked={form.esEmpleado === false}
                            onChange={() =>
                              setForm((prev) => ({ ...prev, esEmpleado: false }))
                            }
                          />
                          <span className="field-checkbox__box" aria-hidden="true">
                            <svg
                              width="14"
                              height="14"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="3"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <polyline points="20 6 9 17 4 12" />
                            </svg>
                          </span>
                          <span className="field-checkbox__text">No</span>
                        </label>
                      </div>
                    </div>

                    {/* Denuncia */}
                    <div className="field-group">
                      <label htmlFor="denuncia" className="field-label">
                        Denuncia <span className="field-required">*</span>
                      </label>
                      <textarea
                        id="denuncia"
                        name="denuncia"
                        className="field-input field-textarea"
                        value={form.denuncia}
                        onChange={handleChange}
                        required
                        rows={6}
                        minLength={20}
                        maxLength={2000}
                        placeholder="Describe con el mayor detalle posible la situación que deseas reportar..."
                      />
                      <span className="field-hint">
                        {form.denuncia.length} / 2000 caracteres
                      </span>
                    </div>

                    {/* Archivos adjuntos */}
                    <div className="field-group">
                      <label className="field-label">
                        Archivos adjuntos{" "}
                        <span className="field-optional">(opcional)</span>
                      </label>

                      <label className="field-upload">
                        <input
                          ref={fileInputRef}
                          type="file"
                          multiple
                          onChange={handleFileSelect}
                          className="field-upload__input"
                          accept="image/*,application/pdf,.doc,.docx,.xls,.xlsx,.txt"
                        />
                        <svg
                          width="22"
                          height="22"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48" />
                        </svg>
                        <div className="field-upload__content">
                          <span className="field-upload__title">
                            Selecciona o arrastra tus archivos
                          </span>
                          <span className="field-upload__hint">
                            Máx. 5 archivos · 5 MB c/u · PDF, imágenes, Word, Excel
                          </span>
                        </div>
                      </label>

                      {fileError && (
                        <div className="field-file-error">{fileError}</div>
                      )}

                      {files.length > 0 && (
                        <ul className="field-files">
                          {files.map((file) => (
                            <li key={file.id} className="field-files__item">
                              <svg
                                width="18"
                                height="18"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                aria-hidden="true"
                              >
                                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                                <polyline points="14 2 14 8 20 8" />
                              </svg>
                              <div className="field-files__info">
                                <span className="field-files__name">{file.name}</span>
                                <span className="field-files__size">
                                  {formatBytes(file.size)}
                                </span>
                              </div>
                              <button
                                type="button"
                                className="field-files__remove"
                                onClick={() => removeFile(file.id)}
                                aria-label={`Eliminar ${file.name}`}
                              >
                                <svg
                                  width="16"
                                  height="16"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                >
                                  <line x1="18" y1="6" x2="6" y2="18" />
                                  <line x1="6" y1="6" x2="18" y2="18" />
                                </svg>
                              </button>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>

                    {/* Acciones */}
                    <div className="field-actions">
                      {submitError && (
                        <div className="field-file-error">{submitError}</div>
                      )}
                      <button
                        type="submit"
                        className="field-submit"
                        disabled={submitting}
                      >
                        {submitting ? (
                          <>
                            <span className="field-submit__spinner" aria-hidden="true" />
                            <span>Enviando...</span>
                          </>
                        ) : (
                          <>
                            <span>Enviar denuncia</span>
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              aria-hidden="true"
                            >
                              <line x1="22" y1="2" x2="11" y2="13" />
                              <polygon points="22 2 15 22 11 13 2 9 22 2" />
                            </svg>
                          </>
                        )}
                      </button>
                      <p className="field-disclaimer">
                        Al enviar, aceptas que la información será tratada conforme a
                        nuestra Política de Tratamiento de Datos.
                      </p>
                    </div>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

"use client";

/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useEffect, useState } from "react";

// Contenido tomado del "Catálogo de Calibraciones 2025" (Laboratorio de
// Metrología SICA, acreditado ante la ema). Cada magnitud corresponde a un
// alcance de calibración con su clave interna.

interface Scope {
  label: string;
  range?: string;
}

interface Magnitude {
  code: string;
  name: string;
  icon: string;
  image: string;
  blurb: string;
  scopes: Scope[];
  // Notas adicionales (tipos de instrumento, marcas compatibles, etc.).
  notes?: string[];
  // Modalidad de servicio.
  onSite: boolean;
  inLab: boolean;
}

const magnitudes: Magnitude[] = [
  {
    code: "FL-01",
    name: "Flujo",
    icon: "💧",
    image: "/images/metro-flujo.png",
    blurb:
      "Calibración de medidores de flujo de líquidos, másico y de gas natural, y evaluación de la conformidad de sistemas de medición de caudal.",
    scopes: [
      {
        label: "Medidores de flujo de líquidos — flujo volumétrico",
        range: "0.5 a 31 000 L/min",
      },
      {
        label: "Medidores de flujo másico — flujo másico",
        range: "0.5 a 23 200 kg/min",
      },
      {
        label: "Medidor de flujo de gas natural — flujo volumétrico de gas",
        range: "18.45 a 6 202.27",
      },
      {
        label:
          "Evaluación de la conformidad — sistemas de medición de caudal tipo presión diferencial con placa de orificio",
        range: "75 a 1 000 mm de diámetro en la tubería",
      },
    ],
    onSite: true,
    inLab: true,
  },
  {
    code: "T-68",
    name: "Temperatura",
    icon: "🌡️",
    image: "/images/metro-temperatura.png",
    blurb:
      "Calibración de termómetros de lectura directa, de líquido en vidrio, de resistencia de platino, bimetálicos y sistemas de medición de temperatura.",
    scopes: [
      { label: "Termómetros de lectura directa", range: "-35 a 419 °C" },
      { label: "Termómetro de líquido en vidrio", range: "-35 a 419 °C" },
      { label: "Termómetro de resistencia de platino", range: "-38 a 420 °C" },
      { label: "Termómetros bimetálicos" },
      { label: "Sistemas de medición de temperatura (conjunto sensor + indicador)" },
    ],
    notes: ["Medios: mercurio y líquido orgánico."],
    onSite: true,
    inLab: true,
  },
  {
    code: "P-84",
    name: "Presión",
    icon: "⏲️",
    image: "/images/metro-presion.png",
    blurb:
      "Calibración de manómetros, barómetros y vacuómetros de presión absoluta, relativa y diferencial, además de indicadores y transmisores de presión.",
    scopes: [
      { label: "Manómetros, presión absoluta", range: "0.06 a 159.9 kPa" },
      { label: "Barómetros, presión absoluta", range: "65 a 110 kPa" },
      { label: "Manómetros, presión relativa", range: "10.3 kPa a 68.93 MPa" },
      { label: "Vacuómetros, presión relativa", range: "-69.92 a 6.98 kPa" },
      { label: "Manómetros, presión diferencial", range: "1.4 kPa a 6.89 MPa" },
    ],
    notes: [
      "Indicadores de presión: barómetros, carátulas de presión, manómetros y transmisores (relativa, positiva y absoluta), manovacuómetros, vacuómetros y transmisores (presión negativa), transmisores y medidores de presión diferencial.",
    ],
    onSite: true,
    inLab: true,
  },
  {
    code: "DEN-07",
    name: "Densidad",
    icon: "⚗️",
    image: "/images/metro-densidad.png",
    blurb:
      "Calibración de densímetros digitales de tubo oscilatorio, picnómetros y medidores de densidad en línea.",
    scopes: [
      {
        label:
          "Densímetro digital de tubo oscilatorio (medición dinámica con densímetro digital patrón)",
        range: "0.94 a 998.21 kg/m³",
      },
      {
        label: "Picnómetro esférico de doble cámara",
        range: "500 a 998 kg/m³",
      },
      {
        label: "Manómetros, presión diferencial",
        range: "1.4 kPa a 6.89 MPa",
      },
    ],
    notes: [
      "Medidores de densidad en línea: densímetros específicos y medidores de flujo másico. Marcas compatibles: MicroMotion, Schlumberger, Solartron, Sarasota, Foxboro, Krohne, entre otras.",
    ],
    onSite: true,
    inLab: true,
  },
  {
    code: "D-152",
    name: "Dimensional",
    icon: "📏",
    image: "/images/metro-dimensional.png",
    blurb:
      "Calibración de medidores automáticos de nivel en tanques de almacenamiento y patrones de longitud (cintas, flexómetros y reglas).",
    scopes: [
      {
        label:
          "Medidores automáticos de nivel (flotador, servo-operado y radar) en tanques de almacenamiento",
        range: "0 a 20 000 mm",
      },
      {
        label: "Medición de parámetros geométricos en tanques de almacenamiento",
        range: "1 000 a 28 000 mm",
      },
      { label: "Longitud — cintas métricas", range: "0 a 300 m" },
      { label: "Longitud — flexómetros", range: "0 a 10 m" },
      { label: "Longitud — reglas", range: "0 a 5 m" },
    ],
    onSite: true,
    inLab: true,
  },
  {
    code: "V-45",
    name: "Volumen",
    icon: "🛢️",
    image: "/images/metro-volumen.png",
    blurb:
      "Cubicación de tanques de almacenamiento verticales, horizontales, esféricos, móviles y en buques, además de probadores y medidas volumétricas.",
    scopes: [
      {
        label: "Probadores bidireccionales, unidireccionales y compactos",
        range: "0.05 a 30 m³",
      },
      {
        label:
          "Cubicación de tanques verticales por transferencia volumétrica",
        range: "0.5 a 210 m³",
      },
      {
        label:
          "Cubicación de tanques verticales por método geométrico (API 2.2A, 2.2B, 2.2G)",
        range: "5 a 111 291 m³",
      },
      {
        label:
          "Cubicación de tanques en buques y barcazas (API 2.8A, 2.7)",
        range: "5 a 5 700 m³",
      },
      {
        label: "Cubicación de tanques especiales (cuadrados)",
        range: "5 a 5 700 m³",
      },
      { label: "Tanques móviles (autotanques)", range: "0.5 a 50 m³" },
      {
        label:
          "Tanques cilíndricos horizontales atmosféricos y presurizados (externo o confinado)",
        range: "5 a 640 m³",
      },
      {
        label: "Tanques esféricos por método geométrico",
        range: "2 a 5 000 m³",
      },
      {
        label: "Medida volumétrica de cuello graduado para entregar",
        range: "2 a 3 500 m³",
      },
    ],
    onSite: true,
    inLab: false,
  },
];

// Sistema de Administración de la Metrología (SAM).
const samFeatures = [
  "Consulta de certificados digitales en menos tiempo.",
  "Sincronización en tiempo real en todos tus dispositivos.",
  "Historial de mediciones y certificados accesible en cualquier momento.",
  "Tabletas a prueba de explosiones con nuestro software SAMCampo.",
  "Desglose de cada calibración con datos estadísticos para exportar y analizar.",
  "Sistema personalizable y automatizado, accesible desde cualquier dispositivo.",
];

// Servicios metrológicos complementarios.
const extraServices = [
  {
    title: "Sistema de Gestión de las Mediciones",
    text: "Diseño e implementación de Sistemas de Gestión de las Mediciones (SGM) de acuerdo con la norma ISO 10012.",
  },
  {
    title: "Auditorías y confirmaciones metrológicas",
    text: "Determinamos el grado de cumplimiento de los sistemas de medición con las normas oficiales, internacionales u otras, según las necesidades del cliente.",
  },
  {
    title: "Estudios de incertidumbre",
    text: "Estimación de la incertidumbre en la medición de hidrocarburos (carga, descarga, almacenamiento y balance), considerando las variables principales involucradas.",
  },
  {
    title: "Verificaciones",
    text: "Evaluación del cumplimiento o conformidad de un instrumento de medición.",
  },
];

const industries = [
  "Alimentos y bebidas",
  "Agua",
  "Medio Ambiente",
  "Farmacéutica",
  "Gas natural",
  "Gas LP",
  "Petroquímica",
  "Refinación",
];

export default function Metrologia() {
  const [selected, setSelected] = useState<Magnitude | null>(null);

  // Cerrar modal con ESC y bloquear scroll de fondo.
  useEffect(() => {
    if (!selected) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelected(null);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [selected]);

  const serviceLabel = (m: Magnitude) =>
    [m.onSite && "En sitio", m.inLab && "En laboratorio"]
      .filter(Boolean)
      .join(" · ");

  return (
    <>
      <div className="topbar" />

      <header className="hero">
        <Link className="hero-home-link" href="/">
          <span aria-hidden="true">←</span> Inicio
        </Link>
        <div className="hero-brand">
          <div className="hero-titles" style={{ textAlign: "center" }}>
            <h1>Metrología y Calibraciones</h1>
            <p style={{ margin: "0 auto" }}>
              Laboratorio de Metrología acreditado ante la ema. Mediciones
              exactas con trazabilidad al CENAM y al PTB.
            </p>
          </div>
        </div>
      </header>

      <main>
        {/* Presentación */}
        <section className="home-section">
          <div className="home-container">
            <span className="home-eyebrow">Laboratorio de Metrología</span>
            <h2 className="home-h2">
              Servicios de calibración acreditados y de alta precisión
            </h2>
            <p className="home-lead">
              Nuestro Laboratorio de Metrología ofrece servicios de calibración
              acreditados ante la ema. Bajo las normas ISO 9001:2015 e ISO
              17025:2017 entregamos resultados confiables y exactos, con
              trazabilidad al CENAM y al PTB, tanto en sitio como en nuestro
              laboratorio.
            </p>
            <div className="home-badges">
              <span className="home-badge">Acreditado ante la ema</span>
              <span className="home-badge">ISO 9001:2015</span>
              <span className="home-badge">ISO 17025:2017</span>
              <span className="home-badge">Trazabilidad CENAM y PTB</span>
            </div>
          </div>
        </section>

        {/* Magnitudes / alcances de calibración */}
        <section className="home-section home-section--tint">
          <div className="home-container">
            <span className="home-eyebrow">Alcances de calibración</span>
            <h2 className="home-h2">Magnitudes que calibramos</h2>
            <p className="home-lead">
              Selecciona una magnitud para ver los instrumentos, alcances y
              modalidad de servicio.
            </p>
            <div className="metro-grid">
              {magnitudes.map((m) => (
                <button
                  className="metro-card"
                  key={m.code}
                  onClick={() => setSelected(m)}
                >
                  <span className="metro-card-img">
                    <img loading="lazy" src={m.image} alt={`Calibración de ${m.name}`} />
                    <span className="metro-card-code">{m.code}</span>
                  </span>
                  <span className="metro-card-body">
                    <h3 className="metro-card-name">{m.name}</h3>
                    <p className="metro-card-blurb">{m.blurb}</p>
                    <span className="metro-card-service">{serviceLabel(m)}</span>
                    <span className="metro-card-more">Ver alcance →</span>
                  </span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Sistema SAM */}
        <section className="home-section">
          <div className="home-container">
            <span className="home-eyebrow">Tecnología</span>
            <h2 className="home-h2">
              SAM — Sistema de Administración de la Metrología
            </h2>
            <p className="home-lead">
              Plataforma web que automatiza procesos, ahorra tiempo y lleva el
              registro y control de todas tus calibraciones. El SAM reúne tus
              certificados en un único lugar centralizado: los buscas con
              facilidad y se sincronizan en todos tus dispositivos para que
              accedas a ellos en cualquier momento, estés donde estés.
            </p>
            <div className="home-grid home-grid--3">
              {samFeatures.map((f) => (
                <div className="home-service" key={f}>
                  <p className="home-card-text">{f}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Servicios complementarios */}
        <section className="home-section home-section--tint">
          <div className="home-container">
            <span className="home-eyebrow">Servicios metrológicos</span>
            <h2 className="home-h2">Más allá de la calibración</h2>
            <div className="home-grid home-grid--4">
              {extraServices.map((s) => (
                <div className="home-strength" key={s.title}>
                  <h3 className="home-card-title">{s.title}</h3>
                  <p className="home-card-text">{s.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Valor agregado */}
        <section className="home-section">
          <div className="home-container">
            <span className="home-eyebrow">Valor agregado</span>
            <h2 className="home-h2">Atención personalizada</h2>
            <p className="home-lead">
              Visitamos a nuestros clientes para brindar servicio a la medida de
              los requerimientos de cada industria.
            </p>
          </div>
        </section>

        {/* Industrias */}
        <section className="home-section home-section--tint">
          <div className="home-container">
            <span className="home-eyebrow">Industrias que atendemos</span>
            <h2 className="home-h2">Presentes en cada sector clave</h2>
            <div className="home-industries">
              {industries.map((i) => (
                <span className="home-industry" key={i}>
                  {i}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* CTA al catálogo */}
        <section className="home-section">
          <div className="home-container">
            <div className="home-catalog-cta">
              <div>
                <span className="home-eyebrow home-eyebrow--light">
                  Catálogo
                </span>
                <h2 className="home-h2 home-h2--light">
                  ¿Buscas equipos de medición y análisis?
                </h2>
                <p className="home-lead home-lead--light">
                  Explora nuestro catálogo de equipos de laboratorio y
                  analizadores de proceso por categoría, sector y marca.
                </p>
              </div>
              <Link
                className="contact-btn contact-btn--green home-catalog-btn"
                href="/catalogo"
              >
                Ir al catálogo <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Modal de detalle de la magnitud */}
      {selected && (
        <div
          className="modal-overlay"
          onClick={() => setSelected(null)}
          role="dialog"
          aria-modal="true"
        >
          <div className="metro-modal" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close"
              onClick={() => setSelected(null)}
              aria-label="Cerrar"
            >
              ×
            </button>
            <div className="metro-modal-img">
              <img
                src={selected.image}
                alt={`Calibración de ${selected.name}`}
              />
            </div>
            <div className="metro-modal-head">
              <span className="metro-modal-icon" aria-hidden="true">
                {selected.icon}
              </span>
              <div>
                <span className="modal-brand">{selected.code}</span>
                <h3 className="modal-name">Calibración de {selected.name}</h3>
              </div>
            </div>
            <p className="modal-desc">{selected.blurb}</p>

            <span className="metro-modal-label">Alcance de calibración</span>
            <ul className="metro-scope-list">
              {selected.scopes.map((s) => (
                <li className="metro-scope" key={s.label}>
                  <span className="metro-scope-label">{s.label}</span>
                  {s.range && (
                    <span className="metro-scope-range">{s.range}</span>
                  )}
                </li>
              ))}
            </ul>

            {selected.notes?.map((n) => (
              <p className="metro-modal-note" key={n}>
                {n}
              </p>
            ))}

            <div className="metro-modal-tags">
              {selected.onSite && (
                <span className="metro-tag">Servicio en sitio</span>
              )}
              {selected.inLab && (
                <span className="metro-tag">Servicio en laboratorio</span>
              )}
            </div>

            <div className="modal-request">
              <span className="modal-request-title">
                ¿Necesitas este servicio de calibración? Solicita información:
              </span>
              <div className="modal-request-btns">
                <a
                  className="contact-btn contact-btn--green"
                  href={`https://wa.me/5215580615457?text=${encodeURIComponent(
                    `Hola, me interesa el servicio de calibración de ${selected.name} (${selected.code}) del Laboratorio de Metrología SICA.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span aria-hidden="true">💬</span> Solicitar por WhatsApp
                </a>
                <a
                  className="contact-btn contact-btn--navy"
                  href={`mailto:contacto@sicamedicion.com.mx?subject=${encodeURIComponent(
                    `Servicio de calibración: ${selected.name} (${selected.code})`
                  )}&body=${encodeURIComponent(
                    `Hola,\n\nMe interesa solicitar información sobre el servicio de calibración de ${selected.name} (${selected.code}) del Laboratorio de Metrología SICA.\n\nGracias.`
                  )}`}
                >
                  <span aria-hidden="true">✉️</span> Solicitar por correo
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      <section className="contact-band">
        <img className="footer-logo" src="/logo.png" alt="SICA Mediciones" />
        <h2 className="contact-title">
          ¿Interesado en nuestros servicios de metrología? Contáctanos
        </h2>
        <div className="footer-contact">
          <a
            className="contact-btn contact-btn--green"
            href="https://wa.me/5215580615457?text=Hola%2C%20me%20interesa%20recibir%20informaci%C3%B3n%20sobre%20sus%20servicios%20de%20metrolog%C3%ADa%20y%20calibraci%C3%B3n%20SICA%20Mediciones."
            target="_blank"
            rel="noopener noreferrer"
          >
            <span aria-hidden="true">💬</span> WhatsApp: +52 55 8061 5457
          </a>
          <a
            className="contact-btn contact-btn--navy"
            href="mailto:contacto@sicamedicion.com.mx"
          >
            <span aria-hidden="true">✉️</span> contacto@sicamedicion.com.mx
          </a>
        </div>
        <p className="home-contact-note">
          www.sicamedicion.com.mx · México y Centroamérica
        </p>
      </section>

      <footer>
        <div className="footer-note">
          Laboratorio de Metrología SICA Mediciones · Acreditado ante la ema ·
          Trazabilidad al CENAM y al PTB.
        </div>
      </footer>
    </>
  );
}

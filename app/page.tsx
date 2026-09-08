/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import HomeQuickNav from "./components/HomeQuickNav";
import StatCounter from "./components/StatCounter";
import { brandSlug, catalog, type Sector } from "@/data/catalog";

// Datos tomados del Folleto Corporativo SICA Medición.
const strengths = [
  {
    n: "01",
    title: "Tecnología de punta",
    text: "Equipos con innovación y calidad garantizada.",
  },
  {
    n: "02",
    title: "Atención personalizada",
    text: "Servicios de mantenimiento y acompañamiento a cada cliente.",
  },
  {
    n: "03",
    title: "Mediciones confiables",
    text: "Comparamos tus mediciones y corregimos los errores.",
  },
  {
    n: "04",
    title: "Análisis especializado",
    text: "Análisis de hidrocarburos, materia orgánica y más.",
  },
];

const services = [
  {
    title: "Calibraciones",
    text: "Servicios acreditados y de alta precisión en Temperatura, Flujo, Densidad, Presión, Volumen y Nivel.",
  },
  {
    title: "Servicios de Análisis",
    text: "Pruebas de control para gasolineras, análisis de octano y análisis para importadores, distribuidores y almacenistas, respaldados por un laboratorio acreditado ante la EMA.",
  },
  {
    title: "Mantenimiento",
    text: "Servicios de mantenimiento preventivo, calibración, correctivo y verificación, con atención personalizada durante todo el año.",
  },
];

const industries = [
  "Petrolera y Refinación",
  "Petroquímica",
  "Química",
  "Aceites y Lubricantes",
  "Gas Natural y LP",
  "Automotriz",
  "Alimentos y Bebidas",
  "Agua y Medio Ambiente",
  "Farmacéutica",
  "Minería",
  "Energía",
  "Investigación",
];

const brands = [
  "Advanced Sensors",
  "Alcor",
  "Alpha Omega Instruments",
  "Analytical Controls",
  "Antek",
  "Aqua Science",
  "ASI Standards",
  "Cambridge Viscosity",
  "CFR",
  "COSA XENTAUR",
  "EXTREL",
  "Gerhardt",
  "Guided Wave",
  "Guided Wave - Analect",
  "Herzog",
  "HORIBA",
  "ILUDEST",
  "ISL",
  "KEM",
  "King Refrigeration",
  "KPM Analytics",
  "LAR",
  "LAUDA",
  "LAUDA Scientific",
  "MBW Calibration",
  "NIC",
  "PAC",
  "PCS Instruments",
  "PetroSpec",
  "Phase Technology",
  "Servomex",
  "Stanhope Seta",
  "Tannas",
  "Tiger Optics",
];

// Relaciona cada industria del folleto con su sector equivalente en el
// catálogo, para poder saltar directo a los equipos de esa industria.
const industrySectorMap: Record<string, Sector> = {
  "Petrolera y Refinación": "Petróleo/Gas",
  "Petroquímica": "Petróleo/Gas",
  "Química": "Química",
  "Aceites y Lubricantes": "Lubricantes",
  "Gas Natural y LP": "Petróleo/Gas",
  "Automotriz": "Automotriz",
  "Alimentos y Bebidas": "Alimentos",
  "Agua y Medio Ambiente": "Medio Ambiente",
  "Farmacéutica": "Farmacéutica",
  "Minería": "Minería",
  "Energía": "Energía",
  "Investigación": "Académico",
};

// Sólo enlazamos a sectores que realmente tienen marcas asignadas como
// sector prioritario principal en el catálogo, para no llevar al visitante
// a una vista vacía.
const sectorsWithBrands = new Set(catalog.map((b) => b.sectors[0]));

// Relaciona el nombre comercial (folleto) con el nombre exacto de la marca
// en el catálogo, para enlazar directo a su ficha técnica.
const brandCatalogMap: Record<string, string> = {
  Alcor: "ALCOR (PAC)",
  "Analytical Controls": "AC ANALYTICAL CONTROL B.V. (AC / PAC)",
  Antek: "ANTEK (PAC)",
  "Aqua Science": "AQUA SCIENCE",
  CFR: "CFR ENGINES INC.",
  "COSA XENTAUR": "COSA XENTAUR",
  EXTREL: "EXTREL (Process Insights)",
  Gerhardt: "GERHARDT",
  Herzog: "HERZOG (PAC)",
  HORIBA: "HORIBA",
  ISL: "ISL (Instrumentation Scientifique de Laboratoire — PAC)",
  KEM: "KEM (Kyoto Electronics Manufacturing)",
  "King Refrigeration": "KING REFRIGERATION",
  "KPM Analytics": "KPM Analytics",
  LAR: "LAR (Process Insights)",
  LAUDA: "LAUDA — TERMOSTATOS",
  "LAUDA Scientific": "LAUDA SCIENTIFIC",
  NIC: "NIPPON INSTRUMENTS CORPORATION (NIC)",
  PAC: "PAC (Petroleum Analyzer Company)",
  "PCS Instruments": "PCS INSTRUMENTS",
  "Phase Technology": "PHASE TECHNOLOGY (PAC)",
  Servomex: "SERVOMEX",
  "Stanhope Seta": "STANHOPE-SETA",
  Tannas: "TANNAS",
};
const catalogBrandNames = new Set(catalog.map((b) => b.name));

// Excepciones al slug automático de logo (archivo en /public/logos con un
// nombre distinto al de la marca actual, ej. tras un cambio de nombre).
const brandLogoOverrides: Record<string, string> = {
  "KPM Analytics": "ams-alliance",
};

// Convierte el nombre comercial de la marca en el slug de su archivo de
// logo en /public/logos (ej. "Alpha Omega Instruments" -> "alpha-omega-instruments").
const brandLogoSlug = (name: string) =>
  brandLogoOverrides[name] ??
  name
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

export default function Home() {
  return (
    <>
      <HomeQuickNav />
      <div className="topbar" />

      {/* Encabezado / Hero corporativo */}
      <header className="home-hero">
        <div className="home-hero-inner">
          <span className="home-hero-logo-wrap">
            <img
              className="home-hero-logo"
              src="/logo.png"
              alt="SICA Mediciones"
            />
          </span>
          <p className="home-hero-tagline">
            Servicio, Ingeniería y Control Avanzado
          </p>
          <h1 className="home-hero-title">
            Instrumentación analítica, metrología y servicios de medición
          </h1>
          <p className="home-hero-sub">
            Certificada bajo las normas ISO 9001:2015 e ISO 17025:2017, SICA
            ofrece soluciones para la medición y control de la calidad a través
            de venta de equipo, mantenimiento, servicios de calibración y
            análisis en México y Centroamérica.
          </p>
          <div className="home-stats">
            <StatCounter value={30} suffix="+" label="Años de experiencia" />
            <StatCounter value={catalog.length} suffix="+" label="Marcas representadas" />
            <StatCounter value={industries.length} label="Industrias atendidas" />
            <StatCounter value={2} label="Normas ISO certificadas" />
          </div>
          <div className="home-hero-cta">
            <Link className="contact-btn contact-btn--green" href="/catalogo">
              Ver catálogo de equipos <span aria-hidden="true">→</span>
            </Link>
            <Link className="contact-btn contact-btn--teal" href="/metrologia">
              Ver metrología y calibración <span aria-hidden="true">→</span>
            </Link>
            <a
              className="contact-btn contact-btn--outline"
              href="https://wa.me/5215580615457?text=Hola%2C%20me%20interesa%20recibir%20informaci%C3%B3n%20sobre%20sus%20equipos%20y%20servicios%20SICA%20Mediciones."
              target="_blank"
              rel="noopener noreferrer"
            >
              <span aria-hidden="true">💬</span> Contáctanos
            </a>
          </div>
        </div>
      </header>

      <main>
        {/* ¿Quiénes somos? */}
        <section className="home-section" id="nosotros">
          <div className="home-container">
            <span className="home-eyebrow">¿Quiénes somos?</span>
            <h2 className="home-h2">
              Más de 30 años midiendo con precisión
            </h2>
            <p className="home-lead">
              SICA — Servicio, Ingeniería y Control Avanzado — distribuye
              instrumentos y analizadores en México y Centroamérica desde hace
              más de 30 años. Brindamos servicios de mantenimiento anuales, así
              como Servicios de Análisis en nuestro laboratorio acreditado ante
              la EMA y Servicios de Calibraciones acreditados y de gran
              precisión.
            </p>
            <p className="home-lead">
              Nuestro motor es ayudar a nuestros clientes a encontrar los
              instrumentos y analizadores que necesitan para el control de
              procesos en plantas industriales, laboratorios y terminales de
              almacenamiento y distribución.
            </p>
            <div className="home-badges">
              <span className="home-badge">ISO 9001:2015</span>
              <span className="home-badge">ISO 17025:2017</span>
              <span className="home-badge">Laboratorio acreditado ante la EMA</span>
            </div>
          </div>
        </section>

        {/* Fortalezas */}
        <section className="home-section home-section--tint" id="fortalezas">
          <div className="home-container">
            <span className="home-eyebrow">Fortalezas de SICA</span>
            <h2 className="home-h2">Por qué elegirnos</h2>
            <div className="home-grid home-grid--4">
              {strengths.map((s) => (
                <div className="home-strength" key={s.n}>
                  <span className="home-strength-n">{s.n}</span>
                  <h3 className="home-card-title">{s.title}</h3>
                  <p className="home-card-text">{s.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Servicios */}
        <section className="home-section" id="servicios">
          <div className="home-container">
            <span className="home-eyebrow">Nuestros servicios</span>
            <h2 className="home-h2">
              Acompañamos todo el ciclo de vida de tus equipos
            </h2>
            <p className="home-lead">
              Desde la selección e instalación del instrumento adecuado, hasta
              su mantenimiento, calibración y verificación continua.
            </p>
            <div className="home-grid home-grid--3">
              {services.map((s) => (
                <div className="home-service" key={s.title}>
                  <h3 className="home-card-title">{s.title}</h3>
                  <p className="home-card-text">{s.text}</p>
                </div>
              ))}
            </div>
            <div className="home-services-cta">
              <Link
                className="contact-btn contact-btn--green"
                href="/metrologia"
              >
                Ver servicios de metrología y calibración{" "}
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Industrias */}
        <section className="home-section home-section--tint" id="industrias">
          <div className="home-container">
            <span className="home-eyebrow">Industrias que atendemos</span>
            <h2 className="home-h2">Presentes en cada sector clave</h2>
            <p className="home-lead">
              Haz clic en una industria para ver el equipo relacionado en el
              catálogo.
            </p>
            <div className="home-industries">
              {industries.map((i) => {
                const sector = industrySectorMap[i];
                const linked = sector && sectorsWithBrands.has(sector);
                if (!linked) {
                  return (
                    <span className="home-industry" key={i}>
                      {i}
                    </span>
                  );
                }
                return (
                  <Link
                    className="home-industry home-industry--linked"
                    href={`/catalogo?sector=${encodeURIComponent(sector)}`}
                    key={i}
                  >
                    {i} <span aria-hidden="true">→</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* Marcas */}
        <section className="home-section home-section--tint" id="marcas">
          <div className="home-container">
            <span className="home-eyebrow">Marcas representadas</span>
            <h2 className="home-h2">Más de 30 marcas líderes a nivel mundial</h2>
            <p className="home-lead">
              Contamos con la representación de marcas líderes en
              instrumentación analítica y de proceso. Los logos con enlace
              llevan directo a su ficha en el catálogo:
            </p>
            <div className="home-brands">
              {brands.map((b) => {
                const catalogName = brandCatalogMap[b];
                const linked = catalogName && catalogBrandNames.has(catalogName);
                const content = (
                  <>
                    <img
                      className="home-brand-logo"
                      src={`/logos/${brandLogoSlug(b)}.png`}
                      alt={b}
                      loading="lazy"
                    />
                    <span className="home-brand-name">{b}</span>
                  </>
                );
                if (!linked) {
                  return (
                    <span className="home-brand" key={b}>
                      {content}
                    </span>
                  );
                }
                return (
                  <Link
                    className="home-brand home-brand--linked"
                    href={`/catalogo#${brandSlug(catalogName)}`}
                    key={b}
                  >
                    {content}
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      {/* Banda de contacto */}
      <section className="contact-band" id="contacto">
        <img className="footer-logo" src="/logo.png" alt="SICA Mediciones" />
        <h2 className="contact-title">Contáctanos</h2>
        <div className="footer-contact">
          <a
            className="contact-btn contact-btn--green"
            href="https://wa.me/5215580615457?text=Hola%2C%20me%20interesa%20recibir%20informaci%C3%B3n%20sobre%20sus%20equipos%20SICA%20Mediciones."
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
          SICA Mediciones · Servicio, Ingeniería y Control Avanzado · Calidad y
          satisfacción como resultado.
        </div>
      </footer>
    </>
  );
}

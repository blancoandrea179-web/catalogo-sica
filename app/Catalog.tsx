"use client";

/* eslint-disable @next/next/no-img-element */
import { useEffect, useMemo, useState } from "react";
import type { Brand, Category, Product } from "@/data/catalog";
import { categoryOrder } from "@/data/catalog";

interface Props {
  brands: Brand[];
  totalProducts: number;
}

interface Selected {
  product: Product;
  brand: string;
}

// Descripción breve de cada categoría (según la matriz de responsables).
const categoryBlurb: Record<Category, string> = {
  "Laboratorio + Proceso": "Equipos de laboratorio y analizadores de proceso",
  Laboratorio: "Equipos de laboratorio",
  Proceso: "Analizadores de proceso en línea",
  "Nueva Marca": "Nuevas representaciones",
};

// Ancla estable por marca para el menú desplegable de navegación.
const brandSlug = (name: string) =>
  "brand-" +
  name
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

export default function Catalog({ brands }: Props) {
  const [query, setQuery] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);
  const [category, setCategory] = useState<Category | null>(null);
  const [selected, setSelected] = useState<Selected | null>(null);

  // Todas las marcas en orden alfabético (para el menú desplegable).
  const sortedBrands = useMemo(
    () => [...brands].sort((a, b) => a.name.localeCompare(b.name, "es")),
    [brands]
  );

  // Categorías presentes en el catálogo, en el orden definido por la matriz.
  const availableCategories = useMemo(
    () => categoryOrder.filter((c) => brands.some((b) => b.category === c)),
    [brands]
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return brands
      .filter((b) => !category || b.category === category)
      .map((b) => {
        if (!q) return b;
        const brandMatches = b.name.toLowerCase().includes(q);
        const products = brandMatches
          ? b.products
          : b.products.filter(
              (p) =>
                p.name.toLowerCase().includes(q) ||
                p.description.toLowerCase().includes(q)
            );
        return { ...b, products };
      })
      .filter((b) => b.products.length > 0);
  }, [brands, query, category]);

  // Agrupar las marcas filtradas por categoría, respetando el orden de la matriz.
  const groups = useMemo(() => {
    const byCat = new Map<Category, Brand[]>();
    for (const b of filtered) {
      const list = byCat.get(b.category);
      if (list) list.push(b);
      else byCat.set(b.category, [b]);
    }
    return categoryOrder
      .filter((c) => byCat.has(c))
      .map((c) => ({ category: c, brands: byCat.get(c)! }));
  }, [filtered]);

  const shownProducts = filtered.reduce((n, b) => n + b.products.length, 0);

  // Cerrar modal con ESC y bloquear scroll de fondo
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

  return (
    <>
      <div className="topbar" />
      <header className="hero">
        <div className="hero-brand">
          <span className="hero-logo-wrap">
            <img className="hero-logo" src="/logo.png" alt="SICA Mediciones" />
          </span>
          <div className="hero-titles">
            <h1>Catálogo de Equipos</h1>
            <p>
              Ficha técnica de equipos de laboratorio y analizadores de proceso,
              organizados por categoría y marca.
            </p>
          </div>
        </div>
      </header>

      {/* Barra fija: filtro por categoría + ir a la marca + búsqueda */}
      <nav className="brandnav">
        <div className="brandnav-inner">
          {/* Botones de categoría (según la matriz) */}
          <div className="catfilter">
            <button
              className={`chip ${!category ? "chip--active" : ""}`}
              onClick={() => setCategory(null)}
            >
              Todas
            </button>
            {availableCategories.map((c) => (
              <button
                key={c}
                className={`chip ${category === c ? "chip--active" : ""}`}
                onClick={() => setCategory((prev) => (prev === c ? null : c))}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="navtools">
          <label className="brand-select-label" htmlFor="brand-select">
            Ir a la marca
          </label>
          <select
            id="brand-select"
            className="brand-select"
            value=""
            onChange={(e) => {
              const slug = e.target.value;
              if (!slug) return;
              setQuery("");
              requestAnimationFrame(() => {
                document
                  .getElementById(slug)
                  ?.scrollIntoView({ behavior: "smooth", block: "start" });
              });
            }}
          >
            <option value="">Selecciona una marca…</option>
            {sortedBrands.map((b) => (
              <option key={b.name} value={brandSlug(b.name)}>
                {b.name}
              </option>
            ))}
          </select>

          {/* Botón de búsqueda en la esquina (se despliega al hacer clic) */}
          <div className={`navsearch ${searchOpen ? "navsearch--open" : ""}`}>
            <input
              className="navsearch-input"
              type="search"
              placeholder="Buscar equipo, marca o descripción…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              aria-label="Buscar en el catálogo"
              aria-hidden={!searchOpen}
              tabIndex={searchOpen ? 0 : -1}
              onKeyDown={(e) => {
                if (e.key === "Escape") {
                  setQuery("");
                  setSearchOpen(false);
                }
              }}
            />
            <button
              className="navsearch-btn"
              aria-label={searchOpen ? "Cerrar búsqueda" : "Buscar"}
              aria-expanded={searchOpen}
              onClick={() => {
                if (searchOpen) {
                  setQuery("");
                  setSearchOpen(false);
                } else {
                  setSearchOpen(true);
                  requestAnimationFrame(() => {
                    document
                      .querySelector<HTMLInputElement>(".navsearch-input")
                      ?.focus();
                  });
                }
              }}
            >
              {searchOpen ? "×" : "🔍"}
            </button>
          </div>
          </div>
        </div>
      </nav>

      <main className="wrap">
        {filtered.length === 0 && (
          <p className="empty-msg">
            No se encontraron equipos
            {query.trim() ? ` para «${query}»` : ""}.
          </p>
        )}

        {query.trim() && filtered.length > 0 && (
          <p className="result-count">
            {shownProducts} resultado{shownProducts !== 1 ? "s" : ""} para «
            {query}»
          </p>
        )}

        {(() => {
          let brandIndex = 0;
          return groups.map((group) => {
            const brandCount = group.brands.length;
            const equipCount = group.brands.reduce(
              (n, b) => n + b.products.length,
              0
            );
            return (
              <div className="catgroup" key={group.category}>
                <div className="cat-head">
                  <h2 className="cat-title">{group.category}</h2>
                  <p className="cat-sub">{categoryBlurb[group.category]}</p>
                  <span className="cat-count">
                    {brandCount} marca{brandCount !== 1 ? "s" : ""} ·{" "}
                    {equipCount} equipo{equipCount !== 1 ? "s" : ""}
                  </span>
                </div>

                {group.brands.map((brand) => {
                  const i = brandIndex++;
                  return (
                    <section
                      className="brand"
                      id={brandSlug(brand.name)}
                      key={brand.name}
                    >
                      <div className="brand-head">
                        <span className="brand-index">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <h3 className="brand-title">{brand.name}</h3>
                        <span className="brand-count">
                          {brand.products.length} equipo
                          {brand.products.length !== 1 ? "s" : ""}
                        </span>
                      </div>
                      <div className="grid">
                        {brand.products.map((p) => (
                          <div
                            className="card"
                            key={p.name}
                            role="button"
                            tabIndex={0}
                            onClick={() =>
                              setSelected({ product: p, brand: brand.name })
                            }
                            onKeyDown={(e) => {
                              if (e.key === "Enter" || e.key === " ") {
                                e.preventDefault();
                                setSelected({ product: p, brand: brand.name });
                              }
                            }}
                          >
                            <div className="ph">
                              {p.image ? (
                                <img loading="lazy" src={p.image} alt={p.name} />
                              ) : (
                                <span className="ph--empty">Sin imagen</span>
                              )}
                              <span className="ph-hint">Ver detalles</span>
                            </div>
                            <div className="card-body">
                              <h3 className="prod-name">{p.name}</h3>
                              <span className="prod-brand">{brand.name}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </section>
                  );
                })}
              </div>
            );
          });
        })()}
      </main>

      {/* Modal de detalle */}
      {selected && (
        <div
          className="modal-overlay"
          onClick={() => setSelected(null)}
          role="dialog"
          aria-modal="true"
        >
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close"
              onClick={() => setSelected(null)}
              aria-label="Cerrar"
            >
              ×
            </button>
            <div className="modal-img">
              {selected.product.image ? (
                <img src={selected.product.image} alt={selected.product.name} />
              ) : (
                <span className="ph--empty">Sin imagen</span>
              )}
            </div>
            <div className="modal-info">
              <span className="modal-brand">{selected.brand}</span>
              <h3 className="modal-name">{selected.product.name}</h3>
              <p className="modal-desc">{selected.product.description}</p>

              <div className="modal-request">
                <span className="modal-request-title">
                  ¿Te interesa este equipo? Solicita información:
                </span>
                <div className="modal-request-btns">
                  <a
                    className="contact-btn contact-btn--green"
                    href={`https://wa.me/5215580615457?text=${encodeURIComponent(
                      `Hola, me interesa solicitar información sobre el equipo "${selected.product.name}" (${selected.brand}) del catálogo SICA Mediciones.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span aria-hidden="true">💬</span> Solicitar por WhatsApp
                  </a>
                  <a
                    className="contact-btn contact-btn--navy"
                    href={`mailto:contacto@sicamedicion.com.mx?subject=${encodeURIComponent(
                      `Solicitud de información: ${selected.product.name}`
                    )}&body=${encodeURIComponent(
                      `Hola,\n\nMe interesa solicitar información sobre el equipo "${selected.product.name}" (${selected.brand}) del catálogo SICA Mediciones.\n\nGracias.`
                    )}`}
                  >
                    <span aria-hidden="true">✉️</span> Solicitar por correo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <section className="contact-band">
        <img className="footer-logo" src="/logo.png" alt="SICA Mediciones" />
        <h2 className="contact-title">¿Interesado en algún equipo? Contáctanos</h2>
        <div className="footer-contact">
          <a
            className="contact-btn contact-btn--green"
            href="https://wa.me/5215580615457?text=Hola%2C%20me%20interesa%20recibir%20informaci%C3%B3n%20sobre%20sus%20equipos%20SICA%20Mediciones."
            target="_blank"
            rel="noopener noreferrer"
          >
            <span aria-hidden="true">💬</span> WhatsApp: +52 1 55 8061 5457
          </a>
          <a
            className="contact-btn contact-btn--navy"
            href="mailto:contacto@sicamedicion.com.mx"
          >
            <span aria-hidden="true">✉️</span> contacto@sicamedicion.com.mx
          </a>
        </div>
      </section>

      <footer>
        <div className="footer-note">
          Catálogo de equipos SICA Mediciones · Para más información contacte a
          su representante de ventas.
        </div>
      </footer>
    </>
  );
}

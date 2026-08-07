"use client";

/* eslint-disable @next/next/no-img-element */
import { useEffect, useMemo, useState } from "react";
import type { Brand, Product } from "@/data/catalog";

interface Props {
  brands: Brand[];
  totalProducts: number;
}

interface Selected {
  product: Product;
  brand: string;
}

export default function Catalog({ brands, totalProducts }: Props) {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<Selected | null>(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return brands;
    return brands
      .map((b) => {
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
  }, [brands, query]);

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
              organizados por marca.
            </p>
          </div>
        </div>
        <div className="kpis">
          <div className="kpi">
            <b>{brands.length}</b>
            <span>Marcas</span>
          </div>
          <div className="kpi">
            <b>{totalProducts}</b>
            <span>Equipos</span>
          </div>
        </div>
      </header>

      {/* Buscador (debajo de la sección azul) */}
      <div className="searchbar">
        <div className="searchbar-inner">
          <span className="search-icon" aria-hidden="true">
            🔍
          </span>
          <input
            className="search"
            type="search"
            placeholder="Buscar equipo, marca o descripción…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            aria-label="Buscar en el catálogo"
          />
        </div>
      </div>

      {/* Menú de marcas */}
      <nav className="brandnav">
        <div className="brandnav-inner">
          <button
            className={`chip ${!query.trim() ? "chip--active" : ""}`}
            onClick={() => setQuery("")}
          >
            Todas
          </button>
          {filtered.map((b, i) => (
            <a className="chip" key={b.name} href={`#brand-${i}`}>
              {b.name}
            </a>
          ))}
        </div>
      </nav>

      <main className="wrap">
        {filtered.length === 0 && (
          <p className="empty-msg">No se encontraron equipos para «{query}».</p>
        )}

        {query.trim() && filtered.length > 0 && (
          <p className="result-count">
            {shownProducts} resultado{shownProducts !== 1 ? "s" : ""} para «
            {query}»
          </p>
        )}

        {filtered.map((brand, i) => (
          <section className="brand" id={`brand-${i}`} key={brand.name}>
            <div className="brand-head">
              <span className="brand-index">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h2 className="brand-title">{brand.name}</h2>
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
                  onClick={() => setSelected({ product: p, brand: brand.name })}
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
        ))}
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
            </div>
          </div>
        </div>
      )}

      <section className="contact-band">
        <img className="footer-logo" src="/logo.png" alt="SICA Mediciones" />
        <h2 className="contact-title">¿Interesado en algún equipo? Contáctanos</h2>
        <div className="footer-contact">
          <a className="contact-btn contact-btn--green" href="tel:+525580615457">
            <span aria-hidden="true">📞</span> +52 1 55 8061 5457
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

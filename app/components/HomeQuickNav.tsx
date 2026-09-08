"use client";

import { useEffect, useState } from "react";

const sections = [
  { id: "nosotros", label: "Nosotros" },
  { id: "fortalezas", label: "Fortalezas" },
  { id: "servicios", label: "Servicios" },
  { id: "industrias", label: "Industrias" },
  { id: "marcas", label: "Marcas" },
  { id: "contacto", label: "Contacto" },
];

// Menú de navegación rápida entre secciones de la página de inicio, con
// resaltado de la sección visible mientras se hace scroll.
export default function HomeQuickNav() {
  const [active, setActive] = useState(sections[0].id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="homenav" aria-label="Navegación rápida de la página">
      <div className="homenav-inner">
        {sections.map((s) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            className={`homenav-link ${
              active === s.id ? "homenav-link--active" : ""
            }`}
          >
            {s.label}
          </a>
        ))}
      </div>
    </nav>
  );
}

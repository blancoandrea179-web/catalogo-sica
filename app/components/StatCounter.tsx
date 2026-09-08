"use client";

import { useEffect, useRef, useState } from "react";

interface Props {
  value: number;
  label: string;
  prefix?: string;
  suffix?: string;
}

// Contador animado que arranca cuando la cifra entra en pantalla.
export default function StatCounter({ value, label, prefix = "", suffix = "" }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Sin soporte de IntersectionObserver, o si el usuario prefiere menos
    // movimiento: mostrar la cifra final directamente, sin animar.
    if (
      typeof IntersectionObserver === "undefined" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setCount(value);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry.isIntersecting) return;
        observer.disconnect();

        const duration = 1100;
        const start = performance.now();
        const tick = (now: number) => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setCount(Math.round(value * eased));
          if (progress < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div className="home-stat" ref={ref}>
      <b className="home-stat-num">
        {prefix}
        {count}
        {suffix}
      </b>
      <span className="home-stat-label">{label}</span>
    </div>
  );
}

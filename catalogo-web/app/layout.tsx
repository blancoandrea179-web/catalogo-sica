import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Catálogo de Equipos — SICA Mediciones",
  description:
    "Catálogo de equipos de laboratorio y analizadores de proceso de SICA Mediciones, organizados por marca.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}

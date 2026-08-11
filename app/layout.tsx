import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SICA Mediciones — Servicio, Ingeniería y Control Avanzado",
  description:
    "Instrumentación analítica, metrología y servicios de medición en México y Centroamérica. Venta de equipo, calibración, análisis y mantenimiento, certificados ISO 9001:2015 e ISO 17025:2017.",
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

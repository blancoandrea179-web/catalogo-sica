import type { Metadata } from "next";
import Metrologia from "./Metrologia";

export const metadata: Metadata = {
  title: "Metrología y Calibraciones — SICA Mediciones",
  description:
    "Laboratorio de Metrología acreditado ante la ema. Servicios de calibración de flujo, temperatura, presión, densidad, dimensional y volumen, con trazabilidad al CENAM y al PTB, en sitio y en laboratorio.",
};

export default function MetrologiaPage() {
  return <Metrologia />;
}

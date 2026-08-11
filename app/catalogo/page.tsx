import type { Metadata } from "next";
import { catalog, totalProducts } from "@/data/catalog";
import Catalog from "../Catalog";

export const metadata: Metadata = {
  title: "Catálogo de Equipos — SICA Mediciones",
  description:
    "Catálogo de equipos de laboratorio y analizadores de proceso de SICA Mediciones, organizados por marca.",
};

export default function CatalogPage() {
  return <Catalog brands={catalog} totalProducts={totalProducts} />;
}

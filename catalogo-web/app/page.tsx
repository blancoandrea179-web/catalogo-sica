import { catalog, totalProducts } from "@/data/catalog";
import Catalog from "./Catalog";

export default function Home() {
  return <Catalog brands={catalog} totalProducts={totalProducts} />;
}

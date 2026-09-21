import { jsPDF } from "jspdf";
import type { Brand } from "@/data/catalog";

const PAGE_W = 210;
const PAGE_H = 297;
const MARGIN = 15;
const CONTENT_W = PAGE_W - MARGIN * 2;
const IMG_BOX_W = 55;
const IMG_BOX_H = 42;

const NAVY: [number, number, number] = [2, 58, 86];

interface LoadedImage {
  dataUrl: string;
  format: string;
  width: number;
  height: number;
}

// La fuente estándar de jsPDF (Helvetica/WinAnsi) no tiene glifos para
// símbolos griegos, matemáticos ni sub/superíndices: al encontrarlos rompe
// el cálculo de ancho de las letras siguientes y el texto sale con
// espaciado irregular. Se normalizan a un equivalente ASCII antes de
// medir/dibujar cualquier texto en el PDF.
const PDF_CHAR_MAP: Record<string, string> = {
  "μ": "µ",
  "≥": ">=",
  "≤": "<=",
  "Ω": "ohm",
  "Δ": "Delta ",
};
const SUPERSCRIPT_DIGITS: Record<string, string> = {
  "⁰": "^0", "¹": "^1", "²": "^2", "³": "^3", "⁴": "^4",
  "⁵": "^5", "⁶": "^6", "⁷": "^7", "⁸": "^8", "⁹": "^9",
};
const SUBSCRIPT_DIGITS: Record<string, string> = {
  "₀": "0", "₁": "1", "₂": "2", "₃": "3", "₄": "4",
  "₅": "5", "₆": "6", "₇": "7", "₈": "8", "₉": "9",
};

function sanitizeForPdf(text: string): string {
  return text
    .replace(
      /[μ≥≤ΩΔ⁰¹²³⁴⁵⁶⁷⁸⁹₀₁₂₃₄₅₆₇₈₉]/g,
      (ch) => PDF_CHAR_MAP[ch] ?? SUPERSCRIPT_DIGITS[ch] ?? SUBSCRIPT_DIGITS[ch] ?? ch
    )
    .replace(/ {2,}/g, " ");
}

// Descarga una imagen del catálogo y la convierte a data URL, obteniendo sus
// dimensiones reales para poder respetar la relación de aspecto en el PDF.
async function loadImage(src: string): Promise<LoadedImage | null> {
  try {
    const res = await fetch(src);
    if (!res.ok) return null;
    const blob = await res.blob();
    const dataUrl = await new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = () => reject(reader.error);
      reader.readAsDataURL(blob);
    });
    const { width, height } = await new Promise<{ width: number; height: number }>(
      (resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve({ width: img.naturalWidth, height: img.naturalHeight });
        img.onerror = () => reject(new Error("no se pudo decodificar la imagen"));
        img.src = dataUrl;
      }
    );
    const format = dataUrl.slice(dataUrl.indexOf("/") + 1, dataUrl.indexOf(";")).toUpperCase();
    return { dataUrl, format: format || "JPEG", width, height };
  } catch {
    return null;
  }
}

// Genera y descarga un PDF con el catálogo completo (imagen, nombre,
// descripción y marca de cada equipo), agrupado por marca.
export async function downloadCatalogPdf(
  brands: Brand[],
  onProgress?: (done: number, total: number) => void
) {
  const totalProducts = brands.reduce((n, b) => n + b.products.length, 0);
  const doc = new jsPDF({ unit: "mm", format: "a4" });

  // Portada
  doc.setFillColor(...NAVY);
  doc.rect(0, 0, PAGE_W, PAGE_H, "F");
  doc.setTextColor(255, 255, 255);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(28);
  doc.text("Catálogo de Equipos", PAGE_W / 2, 128, { align: "center" });
  doc.setFont("helvetica", "normal");
  doc.setFontSize(15);
  doc.text("SICA Mediciones", PAGE_W / 2, 140, { align: "center" });
  doc.setFontSize(11);
  doc.text(`${brands.length} marcas · ${totalProducts} equipos`, PAGE_W / 2, 152, {
    align: "center",
  });
  doc.setFontSize(9.5);
  doc.setTextColor(210, 225, 232);
  doc.text(
    new Date().toLocaleDateString("es-MX", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
    PAGE_W / 2,
    162,
    { align: "center" }
  );

  doc.addPage();
  let y = MARGIN;

  const ensureSpace = (needed: number) => {
    if (y + needed > PAGE_H - MARGIN) {
      doc.addPage();
      y = MARGIN;
    }
  };

  let done = 0;

  for (const brand of brands) {
    const brandName = sanitizeForPdf(brand.name);
    ensureSpace(9 + 6);
    doc.setFillColor(...NAVY);
    doc.rect(MARGIN, y, CONTENT_W, 9, "F");
    doc.setTextColor(255, 255, 255);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(11);
    doc.text(brandName, MARGIN + 3, y + 6.2);
    y += 9 + 6;

    for (const product of brand.products) {
      const textX = MARGIN + IMG_BOX_W + 6;
      const textW = CONTENT_W - IMG_BOX_W - 6;
      const productName = sanitizeForPdf(product.name);
      const productDescription = sanitizeForPdf(product.description);

      doc.setFont("helvetica", "bold");
      doc.setFontSize(10.5);
      const nameLines: string[] = doc.splitTextToSize(productName, textW);
      doc.setFont("helvetica", "normal");
      doc.setFontSize(8.5);
      const descLines: string[] = doc.splitTextToSize(productDescription, textW);

      const textBlockH = nameLines.length * 5 + 5 + descLines.length * 4.2;
      const blockH = Math.max(IMG_BOX_H, textBlockH) + 10;

      ensureSpace(blockH + 6);
      const top = y;

      doc.setDrawColor(220, 220, 220);
      doc.rect(MARGIN, top, CONTENT_W, blockH, "S");

      const img = product.image ? await loadImage(product.image) : null;
      const imgX = MARGIN + 4;
      const imgY = top + (blockH - IMG_BOX_H) / 2;
      if (img) {
        const aspect = img.width / img.height;
        let w = IMG_BOX_W - 4;
        let h = w / aspect;
        if (h > IMG_BOX_H) {
          h = IMG_BOX_H;
          w = h * aspect;
        }
        const offX = imgX + (IMG_BOX_W - 4 - w) / 2;
        const offY = imgY + (IMG_BOX_H - h) / 2;
        try {
          doc.addImage(img.dataUrl, img.format, offX, offY, w, h);
        } catch {
          // Imagen corrupta o formato no soportado: se omite en silencio.
        }
      } else {
        doc.setDrawColor(225, 225, 225);
        doc.setFillColor(245, 247, 248);
        doc.rect(imgX, imgY, IMG_BOX_W - 4, IMG_BOX_H, "FD");
        doc.setTextColor(150, 150, 150);
        doc.setFont("helvetica", "italic");
        doc.setFontSize(8);
        doc.text("Imagen no disponible", imgX + (IMG_BOX_W - 4) / 2, imgY + IMG_BOX_H / 2, {
          align: "center",
        });
      }

      let ty = top + 6;
      doc.setFont("helvetica", "bold");
      doc.setFontSize(10.5);
      doc.setTextColor(...NAVY);
      for (const line of nameLines) {
        doc.text(line, textX, ty);
        ty += 5;
      }
      doc.setFont("helvetica", "italic");
      doc.setFontSize(8.5);
      doc.setTextColor(130, 130, 130);
      doc.text(brandName, textX, ty);
      ty += 5;
      doc.setFont("helvetica", "normal");
      doc.setFontSize(8.5);
      doc.setTextColor(50, 50, 50);
      for (const line of descLines) {
        doc.text(line, textX, ty);
        ty += 4.2;
      }

      y = top + blockH + 6;
      done++;
      onProgress?.(done, totalProducts);
    }
  }

  doc.save("catalogo-sica-mediciones.pdf");
}

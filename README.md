# Catálogo de Equipos

Catálogo web de equipos de laboratorio y analizadores de proceso, organizados por
marca. Construido con **Next.js + TypeScript**, listo para desplegar en **Vercel**.

## Requisitos

- [Node.js](https://nodejs.org/) 18.18 o superior

## Desarrollo local

```bash
npm install      # instala dependencias (solo la primera vez)
npm run dev      # inicia el servidor de desarrollo
```

Abre <http://localhost:3000> en tu navegador.

## Estructura

```
catalogo-web/
├── app/
│   ├── layout.tsx      # Estructura HTML y metadatos
│   ├── page.tsx        # Página principal
│   ├── Catalog.tsx     # Componente con buscador y navegación
│   └── globals.css     # Estilos
├── data/
│   └── catalog.ts      # ← Datos del catálogo (marcas, productos, descripciones)
├── public/
│   └── images/         # Imágenes de los equipos
└── package.json
```

## Cómo actualizar el catálogo

- **Textos, productos o descripciones:** edita `data/catalog.ts`.
- **Imágenes:** reemplaza los archivos en `public/images/` (mismo nombre) o agrega
  nuevos y referencia la ruta `/images/archivo.jpg` en `data/catalog.ts`.

## Desplegar en Vercel

### Opción A — desde GitHub (recomendada)

1. Sube esta carpeta a un repositorio de GitHub.
2. Entra a <https://vercel.com>, inicia sesión y pulsa **Add New → Project**.
3. Importa el repositorio. Vercel detecta Next.js automáticamente (sin configurar nada).
4. Pulsa **Deploy**. Al terminar tendrás una URL pública para compartir con clientes.

Cada vez que hagas `git push`, Vercel vuelve a desplegar automáticamente.

### Opción B — desde la terminal (Vercel CLI)

```bash
npm i -g vercel
vercel           # sigue las instrucciones; la primera vez pide iniciar sesión
vercel --prod    # publica a producción
```

## Notas

- Todas las imágenes ya están optimizadas (máx. 760 px, JPEG) para carga rápida.
- El sitio es estático: rápido, seguro y económico de alojar.

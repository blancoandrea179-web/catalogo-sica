// Datos del catálogo generados a partir de la Ficha Técnica de Equipos.
// Editar aquí para actualizar productos, descripciones o imágenes.

export interface Product {
  name: string;
  description: string;
  image: string | null;
}

// Categorías definidas en la matriz de responsables (columna CATEGORÍA).
export type Category =
  | "Laboratorio + Proceso"
  | "Laboratorio"
  | "Proceso"
  | "Nueva Marca";

// Orden de despliegue de las categorías en el catálogo.
export const categoryOrder: Category[] = [
  "Laboratorio + Proceso",
  "Laboratorio",
  "Proceso",
  "Nueva Marca",
];

// Prioridad de línea definida en la matriz de responsables
// (última columna "PRIORIDAD DE LÍNEA", expresada en estrellas ★).
export type Priority = 5 | 4 | 3 | 2 | 1;

// Orden de despliegue de las prioridades (de mayor a menor).
export const priorityOrder: Priority[] = [5, 4, 3, 2, 1];

// Etiqueta y estrellas de cada nivel de prioridad.
export const priorityMeta: Record<
  Priority,
  { label: string; stars: string }
> = {
  5: { label: "Prioridad máxima", stars: "★★★★★" },
  4: { label: "Prioridad alta", stars: "★★★★" },
  3: { label: "Prioridad media", stars: "★★★" },
  2: { label: "Prioridad baja", stars: "★★" },
  1: { label: "Prioridad mínima", stars: "★" },
};

// Sectores prioritarios definidos en la matriz de responsables
// (columna "SECTORES PRIORITARIOS", ordenados de mayor a menor por marca).
export type Sector =
  | "Petróleo/Gas"
  | "Farmacéutica"
  | "Alimentos"
  | "Automotriz"
  | "Lubricantes"
  | "Energía"
  | "Química"
  | "Polímeros"
  | "Minería"
  | "Medio Ambiente"
  | "Académico";

// Orden de despliegue de las secciones por sector.
export const sectorOrder: Sector[] = [
  "Petróleo/Gas",
  "Farmacéutica",
  "Alimentos",
  "Automotriz",
  "Lubricantes",
  "Energía",
  "Química",
  "Polímeros",
  "Minería",
  "Medio Ambiente",
  "Académico",
];

// Descripción breve de cada sector para el encabezado de sección.
export const sectorBlurb: Record<Sector, string> = {
  "Petróleo/Gas": "Refinación, petroquímica y gas",
  "Farmacéutica": "Industria farmacéutica y biotecnología",
  "Alimentos": "Alimentos, bebidas y agroindustria",
  "Automotriz": "Automotriz y OEM",
  "Lubricantes": "Lubricantes y tribología",
  "Energía": "Generación y transición energética",
  "Química": "Industria química",
  "Polímeros": "Polímeros y plásticos",
  "Minería": "Minería y metales",
  "Medio Ambiente": "Monitoreo ambiental",
  "Académico": "Investigación y academia",
};

export interface Brand {
  name: string;
  category: Category;
  // Prioridad tomada de la matriz de responsables (última columna).
  priority: Priority;
  // Sectores prioritarios, ordenados de mayor a menor (el 1° es el principal).
  sectors: Sector[];
  products: Product[];
}

export const catalog: Brand[] = [
  {
    "name": "AC ANALYTICAL CONTROL B.V. (AC / PAC)",
    "category": "Laboratorio + Proceso",
    "priority": 5,
    "sectors": ["Petróleo/Gas", "Lubricantes", "Automotriz", "Energía"],
    "products": [
      {
        "name": "PIONA Prefac",
        "description": "El PIONA Prefac de AC Analytical Controls (PAC) es un sistema de caracterización multidimensional por tipo de grupo para gasolina, integrado en el Reformulyzer M4. Genera reportes de perfil en porcentaje en peso y en volumen, agrupando naftenos, iso- y n-parafinas, iso- y n-olefinas y aromáticos por número de carbono, en conformidad con los métodos EN ISO 22854 y ASTM D6839. Mediante el uso de columnas capilares y micro-empacadas junto con trampas especializadas, el Reformulyzer M4 entrega resultados confiables en modo PIONA en tan solo 55 minutos.",
        "image": "/images/image1.jpg"
      }
    ]
  },
  {
    "name": "ALCOR (PAC)",
    "category": "Laboratorio + Proceso",
    "priority": 5,
    "sectors": ["Petróleo/Gas", "Lubricantes", "Automotriz", "Energía"],
    "products": [
      {
        "name": "JFTOT® 230 Mark IV / 102401",
        "description": "El JFTOT® 230 Mark IV es el analizador de oxidación térmica de combustibles de aviación (Jet Fuel Thermal Oxidation Tester) de Alcor, líder mundial en este tipo de pruebas con más de 1,000 instalaciones en el mundo. Cumple con ASTM D3241, IP 323 e ISO 6249, e incorpora mejoras de seguridad respecto a generaciones anteriores (contenedores de muestra y residuos que minimizan la exposición a vapores, puerta deslizante que protege del tubo caliente) y automatización que reduce el tiempo de preparación de la prueba de ~50 a solo 10 minutos.",
        "image": "/images/image2.jpg"
      },
      {
        "name": "MCRT-160, 120V",
        "description": "El MCRT-160 (Micro Carbon Residue Tester) de Alcor mide de forma segura la tendencia de productos derivados del petróleo a degradarse térmicamente y formar coque, conforme a ASTM D4530, con resultados equivalentes al método de Carbono Conradson (ASTM D189) pero con mucho menos esfuerzo operativo. Controla digitalmente todas las etapas del ensayo, procesa hasta 12 muestras simultáneas y permite programar perfiles de tiempo-temperatura personalizados.",
        "image": "/images/image3.jpg"
      }
    ]
  },
  {
    "name": "AMS (Alliance / KPM Analytics)",
    "category": "Laboratorio",
    "priority": 3,
    "sectors": ["Alimentos", "Académico"],
    "products": [
      {
        "name": "Analizador de flujo continuo NexaFlo 460",
        "description": "El NexaFlo® es un analizador automatizado de flujo continuo (segmentado) de KPM Analytics (antes AMS/Alliance), utilizado en laboratorios para el análisis de parámetros clave en agua potable, residual, de mar y extractos de suelo, entre ellos amonio, nitratos/nitritos, fósforo total, MBAS, fenol y cianuro. Cuenta con pantalla táctil integrada, bomba peristáltica de alta precisión, muestreador automático y protocolos de limpieza y arranque totalmente automatizados.",
        "image": "/images/image4.jpg"
      },
      {
        "name": "Smartchem 450 Analizador Discreto para Química Automatizada",
        "description": "El analizador discreto SmartChem® 450 es un equipo de química húmeda totalmente automatizado, diseñado para realizar análisis fotométricos y electroquímicos eficientes con un rendimiento de hasta 450 pruebas por hora. Con capacidad para procesar hasta 100 muestras, controles y calibradores, además de 72 reactivos diferentes, incorpora módulos opcionales para la preparación de muestras destinados a la medición de pH, conductividad, ORP y nitratos. Su software intuitivo, combinado con lectores de códigos de barras opcionales y reactivos listos para usar, simplifica el manejo, minimiza la intervención manual, reduce el error humano y aumenta considerablemente la productividad del laboratorio.",
        "image": "/images/image5.jpg"
      },
      {
        "name": "Icinac — Detección Multiparamétrica de Fermentos Lácticos",
        "description": "El Icinac de AMS Alliance (KPM Analytics) es una solución diseñada específicamente para monitorear y analizar la actividad de acidificación de los fermentos lácticos, mediante la medición de pH con múltiples sondas y el análisis de bacterias del ácido láctico (LAB). Es ideal para el desarrollo y control de cultivos iniciadores, funcionales, bioprotectores y probióticos.",
        "image": "/images/image100.jpg"
      },
      {
        "name": "SmartChem 200 Analizador Discreto",
        "description": "El SmartChem 200 de AMS Alliance (KPM Analytics) es un analizador discreto de química húmeda por fotometría, totalmente automatizado, con capacidad de hasta 200 pruebas por hora y dilución automática final e inicial. Su diseño compacto integra el lavado y filtrado, siendo idóneo para el análisis ambiental y agroindustrial de aguas, fertilizantes y suelos.",
        "image": "/images/image101.jpg"
      },
      {
        "name": "SmartChem 600 Analizador Discreto",
        "description": "El SmartChem 600 de AMS Alliance (KPM Analytics) es el analizador discreto de química húmeda de mayor capacidad de la gama, con un rendimiento de hasta 600 pruebas por hora, carga de 200 posiciones y 3 brazos de muestreo para máxima eficiencia. Realiza análisis fotométricos multiparamétricos automatizados para laboratorios de alta demanda.",
        "image": "/images/image102.jpg"
      },
      {
        "name": "Futura 3 Analizador de Flujo Continuo",
        "description": "El Futura 3 de AMS Alliance (KPM Analytics) es un analizador automatizado de química húmeda de flujo continuo, dedicado a identificar y medir contaminantes en agua y suelo (fenoles, cianuros, detergentes, fósforo total, nitrógeno total, entre otros), con automuestreo continuo de efluente de hasta 120 análisis por hora. Es compatible con LIMS y cumple normas ISO, EPA, AFNOR y COFRAC.",
        "image": "/images/image103.jpg"
      }
    ]
  },
  {
    "name": "ANTEK (PAC)",
    "category": "Laboratorio + Proceso",
    "priority": 5,
    "sectors": ["Petróleo/Gas", "Lubricantes", "Automotriz", "Energía"],
    "products": [
      {
        "name": "ElemeNtS",
        "description": "El ElemeNtS de Antek (PAC) es un sistema analítico modular avanzado para la detección de azufre total y/o nitrógeno total mediante fluorescencia ultravioleta (UVF) y quimioluminiscencia (CLD), en muestras sólidas, líquidas, gaseosas y GLP. Cumple ASTM D5453 (azufre total en hidrocarburos ligeros, gasolina, diésel y aceite de motor), entre otros métodos, e incorpora pantalla táctil de 10 pulgadas y configuración horizontal con entrada tipo bote para muestras sólidas y líquidos viscosos.",
        "image": "/images/image6.jpg"
      }
    ]
  },
  {
    "name": "AQUA SCIENCE",
    "category": "Laboratorio",
    "priority": 4,
    "sectors": ["Farmacéutica", "Académico", "Medio Ambiente", "Alimentos"],
    "products": [
      {
        "name": "BioLight Toxy – Modelo de Banco",
        "description": "El BioLight Toxy es un luminómetro de Aqua Science para pruebas rápidas de toxicidad aguda basadas en la bacteria bioluminiscente Aliivibrio fischeri, disponible en versión portátil de campo o de banco. La versión de banco incluye pozo de lectura y de reactivo refrigerados y un bloque de enfriamiento independiente para mantener las muestras a temperatura adecuada; mide la diferencia de luz emitida antes y después de la exposición a una muestra potencialmente tóxica, cumpliendo normas como ISO 11348-3 e ISO 21338.",
        "image": "/images/image7.jpg"
      }
    ]
  },
  {
    "name": "CFR ENGINES INC.",
    "category": "Laboratorio + Proceso",
    "priority": 4,
    "sectors": ["Petróleo/Gas", "Automotriz", "Energía"],
    "products": [
      {
        "name": "Máquina Certificadora de Octano CFR",
        "description": "El motor CFR F-1/F-2 es el estándar mundial reconocido para determinar y certificar las propiedades antidetonantes de combustibles de motor (gasolinas, componentes de combustible y combustibles alternativos), realizando los métodos Research (RON, ASTM D2699) y Motor (MON, ASTM D2700). Un sistema completo incluye el motor monocilíndrico de relación de compresión variable, el Sistema de Control de Aire del Motor, la tecnología XCP® de instrumentación digital y un tanque de oleaje de escape CFR.",
        "image": "/images/image8.jpg"
      },
      {
        "name": "Máquina Certificadora de Cetano",
        "description": "CFR Engines fabrica el sistema de calificación de cetano F-5, utilizado para evaluar la calidad de ignición de combustibles diésel y biodiésel conforme al método ASTM D613",
        "image": "/images/image9.jpg"
      }
    ]
  },
  {
    "name": "COSA XENTAUR",
    "category": "Laboratorio + Proceso",
    "priority": 4,
    "sectors": ["Petróleo/Gas", "Alimentos", "Química", "Polímeros"],
    "products": [
      {
        "name": "Analizador de Porcentaje de Oxígeno, Alpha Omega Serie 2000",
        "description": "El Alpha Omega Instruments Series 2000 (marca de COSA Xentaur / Process Insights) es un analizador de oxígeno porcentual robusto y controlado por microprocesador, para medición continua o intermitente en rangos de 0-1% a 0-100%. Incorpora un sensor de electrolito mejorado (EES) de vida extendida que resiste la exposición a CO₂, pantalla LCD de 4½ dígitos y opera con alimentación de 115/230 VAC o 18-32 VDC; está disponible en configuración de banco, montaje en pared o en panel.",
        "image": "/images/image10.jpg"
      }
    ]
  },
  {
    "name": "EMCEE",
    "category": "Laboratorio",
    "priority": 3,
    "sectors": ["Petróleo/Gas"],
    "products": [
      {
        "name": "EMCEE – Modelo 1140 MK X Microsep",
        "description": "El Microsep® Mark X (Modelo 1140) es un instrumento electromecánico portátil de diseño de estado sólido que realiza cuatro pruebas para combustibles de aviación y diésel: ASTM D3948, D7224 y D7261 (características de separación de agua mediante un turbidímetro y un filtro coalescente desechable) y D4860 (prueba “claro y brillante” que detecta agua libre y contaminación particulada). Utiliza cartuchos coalescentes intercambiables (“Six Packs”) según el tipo de combustible y método requerido.",
        "image": "/images/image11.jpg"
      }
    ]
  },
  {
    "name": "EXTREL (Process Insights)",
    "category": "Laboratorio + Proceso",
    "priority": 4,
    "sectors": ["Petróleo/Gas", "Alimentos", "Química", "Polímeros"],
    "products": [
      {
        "name": "MAX300-RTG 2.0 Espectrómetro de Masas Industrial",
        "description": "El Extrel MAX300-RTG 2.0 es un espectrómetro de masas cuadrupolo industrial de tiempo real para monitoreo continuo de la composición de corrientes de gas en aplicaciones de control de proceso, cumplimiento ambiental y monitoreo de aire ambiental. Utiliza el filtro cuadrupolo Extrel de 19 mm de referencia en la industria, ofrece pantalla táctil de 15 pulgadas con software Questor® 5, selector de flujo multipuerto para más de 160 muestras y rango de detección desde 5 ppb hasta 100%.",
        "image": "/images/image12.jpg"
      }
    ]
  },
  {
    "name": "GERHARDT",
    "category": "Laboratorio",
    "priority": 4,
    "sectors": ["Alimentos", "Académico", "Farmacéutica"],
    "products": [
      {
        "name": "SOXTHERM",
        "description": "El SOXTHERM SOX416 de C. Gerhardt es un sistema de extracción rápida sólido-líquido totalmente automatizado (hasta 4 veces más rápido que el método Soxhlet convencional) usado principalmente para determinación de grasa/materia grasa en alimentos y piensos, así como en análisis de residuos y medioambientales. Permite extraer hasta 24 muestras distintas en menos de 2 horas, con recuperación integrada de solvente y construcción a prueba de explosión para operación desatendida.",
        "image": "/images/image13.jpg"
      },
      {
        "name": "FIBRETHERM®",
        "description": "El FIBRETHERM FT12 de Gerhardt automatiza completamente los pasos de ebullición, lavado, enjuague y filtración para la determinación de fibra cruda, ADF, ADFOM, NDF, NDFOM y aNDFOM en piensos y alimentos, procesando 12 muestras simultáneas mediante la tecnología de bolsas de filtro FibreBag desarrollada por Gerhardt, la cual sustituye al método clásico de crisoles y fritas.",
        "image": "/images/image14.jpg"
      },
      {
        "name": "KJELDATHERM®",
        "description": "El sistema de digestión en bloque KJELDATHERM KT 8s de Gerhardt permite la digestión Kjeldahl de hasta 8 muestras simultáneas con alta precisión y reproducibilidad para la determinación de nitrógeno/proteína. Cuenta con calentamiento regulable para muestras muy espumantes, ajuste flexible de volumen de ácido y una unidad de control removible que permite operar fuera de la zona de peligro (campana de extracción), cumpliendo requisitos de ISO 17025.",
        "image": "/images/image15.jpg"
      },
      {
        "name": "N-Realyzer",
        "description": "El N-Realyzer de Gerhardt es un analizador de nitrógeno/proteína totalmente automático basado en el método Dumas, capaz de procesar en serie hasta 100 muestras sólidas o líquidas con cualquier contenido de nitrógeno. Su autosampler patentado permite insertar muestras urgentes de forma flexible sin desordenar la secuencia, cuenta con separación de agua en dos etapas y una interfaz de usuario intuitiva (REAL-OS) que indica el estado operativo mediante un sistema de colores.",
        "image": "/images/image16.jpg"
      },
      {
        "name": "DUMATHERM®",
        "description": "El DUMATHERM de Gerhardt es un analizador para la determinación automática del contenido de nitrógeno y proteína mediante el método de combustión Dumas, que entrega resultados en tan solo 3 a 5 minutos con un consumo de oxígeno hasta 10 veces menor que equipos similares. Es ideal para el análisis de proteína en alimentos, piensos y fertilizantes con mínima intervención del operador.",
        "image": "/images/image87.jpg"
      },
      {
        "name": "VAPODEST®",
        "description": "El VAPODEST de Gerhardt es un destilador automático por arrastre de vapor para la determinación del contenido de nitrógeno y proteína por el método Kjeldahl, así como de amonio en muestras sólidas y líquidas. Incorpora la función Softstart de inicio gradual para muestras difíciles y un ajuste delicado de la potencia de vapor que garantiza destilaciones seguras y reproducibles.",
        "image": "/images/image88.jpg"
      },
      {
        "name": "HYDROTHERM®",
        "description": "El HYDROTHERM de Gerhardt automatiza la hidrólisis ácida previa a la determinación de grasa total según el método de Weibull-Stoldt, procesando hasta 6 muestras simultáneas en menos de 2 horas. Combinado con el sistema de extracción SOXTHERM, permite un flujo de trabajo completo y seguro para el análisis de grasa total en alimentos y piensos.",
        "image": "/images/image89.jpg"
      }
    ]
  },
  {
    "name": "HERZOG (PAC)",
    "category": "Laboratorio + Proceso",
    "priority": 5,
    "sectors": ["Petróleo/Gas", "Lubricantes", "Automotriz", "Energía"],
    "products": [
      {
        "name": "Analizador automático de punto de inflamación Pensky-Martens",
        "description": "PAC Powered by Herzog fabrica analizadores automáticos de punto de inflamación mediante el método de copa cerrada Pensky-Martens (línea HFP/OptiFlash), que detectan el punto de inflamación de productos derivados del petróleo conforme a ASTM D93 y normas equivalentes (ISO 2719, IP 34), con control de calentamiento electrónico, detección térmica precisa que evita interferencias de agua o silicona, y pantalla gráfica que corrige automáticamente por presión barométrica estándar.",
        "image": "/images/image17.jpg"
      },
      {
        "name": "Equipo para Presión de Vapor",
        "description": "El HVP 972 de PAC Powered by Herzog es un analizador de presión de vapor que ofrece resultados rápidos y precisos hasta 1,000 kPa (145 psi) en un rango de temperatura de 0° a 100°C, empleado en el control de calidad de gasolinas y otros combustibles volátiles.",
        "image": "/images/image18.jpg"
      },
      {
        "name": "Viscosímetro 445",
        "description": "El HVM 472 de Herzog (PAC) determina automáticamente la viscosidad cinemática de líquidos transparentes y opacos conforme a ASTM D445 (IP 71) e ISO 3104, con un desempeño en precisión y exactitud que supera los requisitos declarados por dichas normas, empleado ampliamente en laboratorios de análisis de combustibles y lubricantes.",
        "image": "/images/image19.jpg"
      }
    ]
  },
  {
    "name": "HORIBA",
    "category": "Laboratorio + Proceso",
    "priority": 5,
    "sectors": ["Petróleo/Gas", "Automotriz", "Farmacéutica", "Medio Ambiente", "Académico"],
    "products": [
      {
        "name": "Analizador de azufre — Modelo MESA-7220V2 (ASTM D7220)",
        "description": "El HORIBA MESA-7220V2 mide simultáneamente azufre y cloro en productos derivados del petróleo mediante fluorescencia de rayos X de dispersión de energía monocromática (EDXRF), lo que le permite alcanzar límites de detección muy bajos en ambos elementos. Está diseñado para cubrir tanto niveles de ppm en combustibles terminados como niveles de porcentaje en crudo, en cumplimiento del método ASTM D7220.",
        "image": "/images/image20.jpg"
      },
      {
        "name": "Analizador de azufre total — Modelo SLFA 6800 (ASTM D4294)",
        "description": "El HORIBA SLFA-6800 es un analizador compacto de fluorescencia de rayos X de dispersión de energía (EDXRF) que mide azufre en aceite en un rango de 5 ppm a 9.9999%, cumpliendo ASTM D4294, ISO 8754 y JIS K2541/B7995. Cuenta con carrusel de hasta 8 posiciones de muestra, pantalla a color, salida USB y blindaje de obturador para prevenir fugas de rayos X.",
        "image": "/images/image21.jpg"
      },
      {
        "name": "XPLORER — Analizador Elemental de Cloruro Orgánico",
        "description": "El XPLORER de HORIBA (Trace Elemental Instruments) es un analizador elemental para la determinación de cloruro orgánico —así como azufre y nitrógeno— mediante combustión pirolítica seguida de microcoulometría. Es un sistema compacto y muy preciso, con software intuitivo, utilizado en el control de contaminantes en productos petroquímicos y químicos.",
        "image": "/images/image96.jpg"
      }
    ]
  },
  {
    "name": "HOBRÉ",
    "category": "Proceso",
    "priority": 4,
    "sectors": ["Petróleo/Gas", "Alimentos", "Química"],
    "products": [
      {
        "name": "WIM COMPAS™ — Medición de combustión de gas combustible y gas de tea",
        "description": "El WIM COMPAS™ de Hobré es un analizador en línea que mide el Índice de Wobbe, el poder calorífico (BTU) y el Índice de Requerimiento de Aire de Combustión (CARI) en gas combustible y gas de tea (flare). Basado en más de 20 años de experiencia de Hobré con analizadores de oxígeno residual, combina mezclado aire-combustible, combustión catalítica y medición de oxígeno residual para determinar directamente el CARI y correlacionarlo con el Índice de Wobbe; una celda de gravedad específica integrada permite además calcular el contenido de metano y el poder calorífico. Ofrece tiempo de respuesta T90 inferior a 5 segundos, es apto para zonas peligrosas, maneja gases con alto punto de rocío y gases ácidos (sour gas), y presenta emisión cero de hidrocarburos.",
        "image": "/images/image22.jpg"
      },
      {
        "name": "BICOSYS — Detección continua de CO en secado por aspersión",
        "description": "El BICOSYS de Hobré es un sistema de detección continua de monóxido de carbono (CO) de alta gama para la seguridad de secadores por aspersión (spray dryers), que monitorea simultáneamente las concentraciones de CO de entrada y salida para detectar de forma temprana procesos de combustión incipiente (smoldering) hasta 30 minutos antes de que ocurra un incendio, evitando falsas alarmas causadas por fuentes externas de CO como vehículos o chimeneas. Su configuración de doble analizador garantiza continuidad operativa: incluso ante el fallo de un analizador, el sistema opera en modo de emergencia (\"limp mode\") con mediciones secuenciales alternando entrada y salida.",
        "image": "/images/image23.jpg"
      },
      {
        "name": "HICOSYS ADVANCED — Medición de CO, ΔCO y H2O",
        "description": "El HICOSYS ADVANCED de Hobré es el primer analizador en combinar la medición de H2O y CO en un solo instrumento para procesos de secado por aspersión, ofreciendo gran flexibilidad gracias a múltiples puntos de muestreo (hasta 8 puntos medidos secuencialmente) con una respuesta rápida de solo 10 a 15 segundos por muestra. Está diseñado para mejorar tanto la seguridad como la eficiencia energética de las instalaciones de secado en las industrias alimentaria y farmacéutica.",
        "image": "/images/image24.jpg"
      },
      {
        "name": "HICOSYS AQUA — Análisis de H2O en secado por aspersión",
        "description": "El HICOSYS AQUA de Hobré es un analizador de humedad para procesos de secado por aspersión que iguala o supera el desempeño de la tecnología de laboratorio, capaz de muestrear en las posiciones más exigentes de un secador por aspersión. Al medir la humedad del aire de secado, permite controlar el proceso para maximizar la absorción de agua por kilogramo de aire, aumentando la capacidad de producción de polvo y la eficiencia energética, además de reducir el ensuciamiento (fouling) y el riesgo de bloqueo del secador por acumulación de producto pegajoso.",
        "image": "/images/image25.jpg"
      },
      {
        "name": "PRISM — Analizador Raman de Emisión Cero",
        "description": "El PRISM Raman de Hobré es un analizador de gas en línea basado en espectroscopía Raman que ofrece análisis composicional rápido, no destructivo y de emisión cero directamente en la línea de proceso, midiendo simultáneamente C1-C5+, H2, N2, CO, CO2 y H2O, además de propiedades físicas como poder calorífico, Índice de Wobbe, densidad, compresibilidad y relación Cp/Cv. Gracias a la tecnología Raman propia de Hobré combinada con el sistema de muestreo HIFISC, opera a la presión del proceso sin necesidad de reducción de presión, devolviendo la muestra íntegramente al proceso (sin venteo a atmósfera ni a la tea); su tiempo de respuesta T90 es inferior a 10 segundos y no posee partes móviles. El PRISM Raman recibió el Annual Product Award en la Analyzer Technology Conference (ATC) 2024 en Galveston, Texas.",
        "image": "/images/image26.jpg"
      },
      {
        "name": "TISOMIC — Analizador de proceso de H2S, H2O y CO2",
        "description": "El TISOMIC de Hobré es un analizador de proceso en línea de bajo mantenimiento que utiliza tecnología propia PA-TDL (efecto fotoacústico excitado por láser de diodo sintonizable) para medir simultáneamente ácido sulfhídrico (H2S), humedad (H2O) y dióxido de carbono (CO2) en corrientes líquidas y gaseosas, con un rango que va desde niveles de ppm hasta porcentuales. Sus aplicaciones típicas incluyen desde H2S en crudo multifásico hasta H2S, H2O y CO2 en gas de venta y monitoreo de gasoductos; combinado con el sistema de acondicionamiento de muestra HIFISC, el TISOMIC puede operar con una deriva típica inferior al 3% anual.",
        "image": "/images/image27.jpg"
      },
      {
        "name": "HIFISC — Sistema de Acondicionamiento de Muestra de Gas",
        "description": "El HIFISC de Hobré es un sistema innovador de acondicionamiento de muestra para aplicaciones en gas y gas licuado (GLP), diseñado para mejorar el desempeño, la seguridad y el impacto ambiental frente a sistemas convencionales. Su membrana filtrante multifóbica (HPFF) elimina sólidos y líquidos polares y no polares en la entrada, manteniendo alejados de las líneas de muestra productos químicos reactivos (glicol, amina, óxido de zinc, cáustico, polvo de tamiz molecular, etc.) para evitar absorción/desorción y reducir el tiempo de retardo (lag time); cuenta con válvulas de doble bloqueo y purga para aislamiento seguro, y una sonda de muestreo libre de mantenimiento que no requiere retracción.",
        "image": "/images/image28.jpg"
      },
      {
        "name": "C-QUAND — Análisis elemental XRF en línea en líquidos",
        "description": "El C-QUAND de Hobré es un analizador en línea de Fluorescencia de Rayos X de Energía Dispersiva (ED-XRF) para la medición continua y no destructiva de elementos químicos en corrientes líquidas, desde niveles de ppm hasta porcentajes en peso. Sin partes móviles problemáticas, ofrece excelente repetibilidad con medición libre de deriva, autovalidación integrada sobre un material de referencia sólido y una celda de muestra calentada apta para muestras viscosas a temperatura de proceso; se utiliza para medir catalizadores homogéneos en procesos químicos base (como producción de PTA y aldehídos) y metales en agua residual para cumplimiento ambiental, así como en procesos de refinación y reciclaje de metales.",
        "image": "/images/image29.jpg"
      },
      {
        "name": "Hobré Integrated Product Solutions — Integración de Sistemas",
        "description": "Hobré Integrated Product Solutions es la oferta de soluciones de analizadores de proceso completamente personalizadas de Hobré (fundada en 1978), que integra la selección de las mejores tecnologías de analizador disponibles, un buen entendimiento de las condiciones de proceso y los requisitos de desempeño, junto con sistemas de acondicionamiento y validación de muestra diseñados a medida. Sus equipos de ingeniería, producción, pruebas y servicio colaboran con clientes de industrias como petróleo y gas (upstream, midstream, downstream) y la industria láctea (instalaciones de secado por aspersión), ofreciendo soluciones como medición de corte de agua, monitoreo de aceite en agua, análisis de H2S en distintas etapas del procesamiento de crudo y gas, y medición de humedad en producción de gas.",
        "image": "/images/image30.jpg"
      }
    ]
  },
  {
    "name": "ISL (Instrumentation Scientifique de Laboratoire — PAC)",
    "category": "Laboratorio + Proceso",
    "priority": 5,
    "sectors": ["Petróleo/Gas", "Lubricantes", "Automotriz", "Energía"],
    "products": [
      {
        "name": "Analizador automático de punto de congelación de turbosina — OptiFZ",
        "description": "El OptiFZP de ISL (PAC) es la nueva generación del analizador de punto de congelación, con sistema de enfriamiento interno de hasta -100°C sin necesidad de baño externo y una celda de detección patentada de altísima precisión. Cuenta con pantalla táctil a color, limpieza automática, entrega resultados en menos de 15 minutos y cumple ASTM D7153, siendo un método de certificación aceptado para combustibles Jet A, Jet A-1 y grados militares.",
        "image": "/images/image31.jpg"
      },
      {
        "name": "OptiPMD – Analizador Automático de destilación (microdestilación)",
        "description": "El OptiPMD de ISL (PAC) es un analizador de microdestilación de segunda generación que determina las características del rango de ebullición de productos del petróleo en menos de 10 minutos usando solo 10 ml de muestra, conforme a ASTM D7345 e IP 596, con excelente correlación respecto a los métodos tradicionales ASTM D86, D1160 e ISO 3405.",
        "image": "/images/image32.jpg"
      },
      {
        "name": "ISL Rb36 5G Anillo y Bola",
        "description": "El RB36 5G de ISL (PAC) es un instrumento automático de anillo y bola que determina el punto de reblandecimiento de diversas sustancias (como asfaltos y betunes), midiendo temperaturas de producto entre 0°C y 220°C.",
        "image": "/images/image33.jpg"
      },
      {
        "name": "ISL NCK2 5G Aparato 115V 50/60Hz",
        "description": "El NCK2 5G de ISL (PAC) es un analizador automático de pérdida por evaporación método Noack, que permite pruebas precisas cumpliendo los requerimientos crecientes de control de calidad (CEC, ASTM, IP), con funciones de calibración automática trazable y reportes detallados con números de seguimiento de cada dispositivo de medición.",
        "image": "/images/image34.jpg"
      },
      {
        "name": "ISL OptiCPP Analizador de Punto de Fluidez, Sonda de Vidrio",
        "description": "El OptiCPP de ISL (PAC) combina un sistema de enfriamiento incorporado patentado con un mecanismo de detección de alta precisión para realizar pruebas de punto de nube y punto de fluidez (pour point) de productos del petróleo de forma completamente desatendida, hasta -95°C, conforme a los estándares internacionales aplicables.",
        "image": "/images/image35.jpg"
      }
    ]
  },
  {
    "name": "KEM (Kyoto Electronics Manufacturing)",
    "category": "Laboratorio",
    "priority": 5,
    "sectors": ["Farmacéutica", "Petróleo/Gas", "Alimentos", "Química", "Académico"],
    "products": [
      {
        "name": "ALM-155 Medidor de Alcohol",
        "description": "El ALM-155 de KEM es un medidor digital de alcohol de sobremesa, compacto y de alto rendimiento, basado en tubo capilar oscilante, utilizado para el análisis de cerveza, vino, licores destilados y bebidas espirituosas. Incorpora bomba peristáltica para muestreo automático, requiere solo 8 ml de muestra y entrega resultados de contenido de alcohol o densidad en 2 a 4 minutos con calibración simple usando agua pura.",
        "image": "/images/image36.jpg"
      },
      {
        "name": "Densímetro digital según ASTM D4052 — Modelo DA-860",
        "description": "El DA-860 de KEM es un densímetro/medidor de gravedad específica de sobremesa basado en oscilación de frecuencia resonante, que permite mediciones rápidas incluso en volúmenes de muestra pequeños, con estabilización de temperatura mediante una unidad de temperatura constante incorporada que acorta el tiempo de medición; puede conectarse a un refractómetro para medir densidad e índice de refracción simultáneamente.",
        "image": "/images/image37.jpg"
      },
      {
        "name": "KEM AT-710 Titulador Potenciométrico Automático",
        "description": "El AT-710 de KEM es un titulador potenciométrico automático de última generación para determinar la concentración de una sustancia objetivo en líquidos o sólidos, con alta precisión y rapidez. Al cambiar el electrodo y preamplificador puede realizar titulaciones ácido-base, redox o fotométricas; incorpora una bureta de alta precisión (resolución 1/20,000) y admite hasta dos buretas.",
        "image": "/images/image38.jpg"
      },
      {
        "name": "KEM Medidor de Densidad Portátil / DA-130N",
        "description": "El DA-130N de KEM es la versión portátil de sus medidores de densidad/gravedad específica, basado en el mismo principio de oscilación de frecuencia resonante que los modelos de sobremesa, orientado a mediciones rápidas y de alta calidad fuera del laboratorio.",
        "image": "/images/image39.jpg"
      },
      {
        "name": "Kit KEM GVA-710H Analizador de Volumen de Gas, modelo especial Heineken",
        "description": "El GVA-710 de KEM es un analizador de volumen de gas empleado en la industria de bebidas para medir la carbonatación/gasificación (CO₂) de productos como cerveza; el modelo especial \"Heineken\" corresponde a una configuración específica solicitada por dicho cliente dentro de la línea de analizadores de bebidas de KEM.",
        "image": "/images/image40.jpg"
      },
      {
        "name": "KEM DA-650 Densímetro / Medidor de Concentración",
        "description": "El DA-650 de KEM es un densímetro/medidor de concentración de sobremesa basado en el principio de oscilación de frecuencia resonante, con succión automática de la muestra y control de temperatura de 0 a 96 °C. Ofrece mediciones rápidas y de alta precisión de densidad, gravedad específica y concentración, y puede acoplarse con otros equipos KEM para análisis multiparamétrico.",
        "image": "/images/image90.jpg"
      },
      {
        "name": "KEM RA-600 Refractómetro Automático",
        "description": "El RA-600 de KEM es un refractómetro automático que determina el índice de refracción, los grados Brix y la concentración mediante detección del ángulo crítico de refracción óptica, con control de temperatura de la muestra de 5 a 75 °C y alta resistencia a la corrosión. Puede combinarse con un densímetro KEM para medir densidad e índice de refracción de forma simultánea.",
        "image": "/images/image91.jpg"
      },
      {
        "name": "KEM MKC-710 Titulador Karl Fischer Coulométrico",
        "description": "El MKC-710 de KEM es un titulador de humedad por el método Karl Fischer coulométrico, con una gran pantalla táctil a color, para la determinación de trazas de agua en líquidos orgánicos y otras matrices. Ofrece alta sensibilidad y reproducibilidad en la medición de bajos contenidos de humedad.",
        "image": "/images/image92.jpg"
      },
      {
        "name": "KEM MKV-710 Titulador Karl Fischer Volumétrico",
        "description": "El MKV-710 de KEM es un titulador de humedad por el método Karl Fischer volumétrico, equipado con una gran pantalla táctil a color, para la determinación de agua en un amplio rango de concentraciones en diversas matrices. Complementa al modelo coulométrico MKC-710 para muestras con mayor contenido de humedad.",
        "image": "/images/image93.jpg"
      },
      {
        "name": "KEM ADP-611 Evaporador de Humedad",
        "description": "El ADP-611 de KEM es un sistema de evaporación de humedad y arrastre que se acopla a los tituladores Karl Fischer para eliminar interferencias en muestras difíciles, con control automático de flujo y temperatura. Evapora la humedad de la muestra y la arrastra hacia la celda de titulación, permitiendo analizar sólidos, muestras insolubles o de matrices complejas.",
        "image": "/images/image94.jpg"
      },
      {
        "name": "KEM GVA-700 Analizador de Volumen de Gas",
        "description": "El GVA-700 de KEM es un analizador de volumen de gas para la determinación automática del volumen y la presión internos de gases en bebidas gasificadas y carbonatadas, basado en la medición de presión absoluta. Cuenta con agitación automática y admite recipientes de hasta 2 L, siendo idóneo para el control de la carbonatación en cerveza, refrescos y otras bebidas.",
        "image": "/images/image95.jpg"
      }
    ]
  },
  {
    "name": "KING REFRIGERATION",
    "category": "Laboratorio",
    "priority": 3,
    "sectors": ["Automotriz", "Lubricantes", "Académico"],
    "products": [
      {
        "name": "King Refrigeration – Baño Líquido Brookfield BLB 702",
        "description": "El Baño Líquido Brookfield de King (BLB) mide la viscosidad a baja temperatura de fluidos de transmisión automática, aceites de engranajes e hidráulicos utilizando la técnica patentada SimAir®, que permite el uso de un baño de líquido a temperatura constante más pequeño y económico. Es un sistema de refrigeración hermética totalmente autónomo (sin unidades externas), con controlador digital de temperatura (±0.1°C) y ventana de visualización iluminada; el modelo BLB 702 alcanza hasta -70°C.",
        "image": "/images/image41.jpg"
      },
      {
        "name": "King Mini-Viscosímetro Rotatorio (MRV / TP-1)",
        "description": "El King MRV determina las temperaturas límite de bombeo (borderline pumping temperature) y el esfuerzo de fluencia de aceites y lubricantes sin necesidad de baños de enfriamiento externos ni refrigeración termoeléctrica, mediante tecnología de refrigeración directa patentada. Cubre un rango amplio de temperatura (+80°C a -40°C) y es utilizado en el método ASTM D4684 (perfil de temperatura TP-1), requerido en especificaciones como SAE J300.",
        "image": "/images/image42.jpg"
      }
    ]
  },
  {
    "name": "LAR (Process Insights)",
    "category": "Laboratorio + Proceso",
    "priority": 4,
    "sectors": ["Petróleo/Gas", "Alimentos", "Química", "Polímeros"],
    "products": [
      {
        "name": "QuickTOCtrace",
        "description": "El LAR QuickTOCtrace es un analizador de carbono orgánico total (TOC) en línea diseñado para los rangos de medición más bajos, empleando oxidación UV y medición diferencial de conductividad, ideal para agua pura y ultrapura. Es compacto, con tiempo de reacción corto (primeros resultados en 30 segundos), cubre un rango de 0.1 a 1,000 ppb y cumple normas como USP <643>, <645> y EP 2.2.44, siendo especialmente utilizado en la industria farmacéutica y de semiconductores.",
        "image": "/images/image43.jpg"
      },
      {
        "name": "QuickTOCpurity",
        "description": "El LAR QuickTOCpurity es un sistema de medición de carbono orgánico total (TOC) en línea para agua pura, basado en oxidación por combustión a CO2, que determina el carbono total (TC), el carbono orgánico total (TOC), el carbono inorgánico total (TIC) y el carbono orgánico disuelto (DOC). Está orientado al monitoreo continuo de la calidad del agua en aplicaciones exigentes.",
        "image": "/images/image105.jpg"
      }
    ]
  },
  {
    "name": "LAUDA SCIENTIFIC",
    "category": "Laboratorio",
    "priority": 3,
    "sectors": ["Farmacéutica", "Química", "Polímeros", "Lubricantes", "Académico"],
    "products": [
      {
        "name": "LAUDA Scientific Tensiómetro TD 5",
        "description": "El TD 5 de LAUDA Scientific es un tensiómetro compacto y preciso para medición de tensión superficial e interfacial (métodos de anillo Du Noüy y placa de Wilhelmy), fuerza de adhesión de gota y densidad, orientado a investigación, control de calidad y desarrollo de productos. Cumple normas como ASTM D971, ASTM D1331, EN 14210, EN 14370, ISO 6889, ISO 304, ISO 1409 y OECD 115.",
        "image": "/images/image44.jpg"
      },
      {
        "name": "LAUDA Scientific Viscotemp 15 S",
        "description": "El Viscotemp 15 de LAUDA Scientific es un baño viscotermostato con carcasa de acero inoxidable de alta calidad y ventana de vidrio, utilizado para el temperado preciso de viscosímetros capilares de vidrio en el rango de 0 a 105°C, conforme a normas como ASTM D445, ISO 3105 y DIN 51562/53000. Puede usarse con hasta cuatro estaciones de medición manuales o dos estaciones automáticas.",
        "image": "/images/image45.jpg"
      },
      {
        "name": "LAUDA Scientific ET 15 S",
        "description": "El ET 15 S de LAUDA Scientific es un baño viscosimétrico transparente para la determinación manual de la viscosidad cinemática con viscosímetros capilares de vidrio, en un rango de temperatura de 0 a 105 °C. Ofrece una operación sencilla y económica conforme a normas como ASTM D445, ISO 3104 e ISO 3105, con excelente estabilidad térmica y buena visibilidad de los capilares.",
        "image": "/images/image78.jpg"
      },
      {
        "name": "LAUDA Scientific PV(L) 15/24",
        "description": "El PV(L) 15/24 de LAUDA Scientific es un sistema automático para la determinación de la viscosidad cinemática a altas y bajas temperaturas mediante barreras ópticas de infrarrojo, que cubre un rango de -60 a 230 °C. Proporciona resultados repetibles y precisos conforme a ASTM D445 e ISO 3104, reduciendo la intervención del operador respecto a los métodos manuales.",
        "image": "/images/image79.jpg"
      },
      {
        "name": "LAUDA Scientific VRM-VAS",
        "description": "El VRM-VAS de LAUDA Scientific es un módulo de automatización con brazo robótico para la limpieza y el muestreo en la determinación de viscosidad, que se acopla de forma modular a los viscosímetros LAUDA. Automatiza las etapas de dosificación, medición y lavado de capilares, aumentando la productividad y la reproducibilidad del laboratorio.",
        "image": "/images/image80.jpg"
      },
      {
        "name": "LAUDA Scientific MPT C",
        "description": "El MPT C de LAUDA Scientific es un tensiómetro de presión de burbuja para la determinación automática de la tensión superficial dinámica según el método de Fainerman, con mediciones programables desde 1 ms. Es ideal para caracterizar surfactantes y evaluar la cinética de adsorción en tintas, detergentes, cosméticos y formulaciones.",
        "image": "/images/image81.jpg"
      },
      {
        "name": "LAUDA Scientific TD4",
        "description": "El TD4 de LAUDA Scientific es un tensiómetro de fuerza para la determinación automática de la tensión superficial e interfacial y de la concentración micelar crítica (CMC), empleando los métodos de anillo de Du Noüy y placa de Wilhelmy. Es un sistema compacto y sencillo de utilizar, con resultados almacenables en PC, orientado a control de calidad e investigación.",
        "image": "/images/image82.jpg"
      },
      {
        "name": "LAUDA Scientific TVT 2",
        "description": "El TVT 2 de LAUDA Scientific es un tensiómetro de volumen de gota para la determinación automática de la tensión superficial e interfacial dinámica, con ajuste micrométrico del posicionamiento y compatibilidad con jeringas de distintos tamaños. Permite estudiar la cinética interfacial en un amplio rango de tiempos de vida de gota.",
        "image": "/images/image83.jpg"
      },
      {
        "name": "LAUDA Scientific LSA 50",
        "description": "El LSA 50 de LAUDA Scientific es un goniómetro para la determinación automática del ángulo de contacto por el método de volumen de gota, con un diseño compacto y modular ampliable a futuras mejoras. Se utiliza para analizar agentes de limpieza, adhesivos, pinturas y recubrimientos, evaluando la mojabilidad y la energía superficial de todo tipo de muestras.",
        "image": "/images/image84.jpg"
      },
      {
        "name": "LAUDA Scientific LSA 100",
        "description": "El LSA 100 de LAUDA Scientific es un analizador óptico de superficies para la determinación automática del ángulo de contacto, la tensión superficial e interfacial y la CMC por volumen de gota, equipado con una cámara de alta resolución configurable mediante software. Es idóneo para el estudio de mojabilidad, adhesión y energía superficial en investigación y control de calidad.",
        "image": "/images/image85.jpg"
      },
      {
        "name": "LAUDA Scientific LSA 200",
        "description": "El LSA 200 de LAUDA Scientific es la versión de mayor desempeño de la serie LSA para la determinación automática del ángulo de contacto, la tensión superficial e interfacial y la CMC, con la máxima resolución y movimiento automático en todos los ejes. Está diseñado para las aplicaciones más exigentes de caracterización de superficies e interfases.",
        "image": "/images/image86.jpg"
      }
    ]
  },
  {
    "name": "LAUDA — TERMOSTATOS",
    "category": "Laboratorio",
    "priority": 3,
    "sectors": ["Farmacéutica", "Química", "Polímeros", "Lubricantes", "Académico"],
    "products": [
      {
        "name": "Línea Alpha — Termostatos de refrigeración, calefacción e inmersión",
        "description": "La línea Alpha de LAUDA es la solución económica y fiable para la regulación de temperatura interna y externa con líquidos no inflamables (agua y agua-glicol), pensada para las aplicaciones básicas de laboratorio. Incluye tres familias de producto: Alpha Termostatos de refrigeración (-25 a 100°C, potencia de frío de 0.225 a 0.425 kW), Alpha Termostatos de calefacción (25 a 100°C) y Alpha Termostatos de inmersión (25 a 100°C), todos con 1.5 kW de potencia calorífica.",
        "image": "/images/image46.jpg"
      },
      {
        "name": "Línea Integral — Termostatos de proceso P, XT y T",
        "description": "La línea Integral son los termostatos de proceso profesionales de LAUDA, con máxima conectividad, potencia y dinámica. Incluye el Integral P (superpuesto a la presión, -40 a 140°C, potencia de frío de 20 a 25 kW), el Integral XT (nueva generación, -90 a 320°C, potencia de frío de 1.5 a 25 kW) y el Integral T (regulación de temperatura exterior, -32 a 150°C, potencia de frío de 1.4 a 19 kW), utilizados en industrias como aeroespacial, automotriz, química, farmacéutica y biotecnología.",
        "image": "/images/image47.jpg"
      },
      {
        "name": "Línea LOOP — Termostato de circulación Peltier",
        "description": "El LOOP es un termostato de circulación compacto de LAUDA basado en tecnología Peltier, con temperatura constante entre 4 y 80°C, diseño ligero y entrada de tensión universal (100-240V) para uso flexible en cualquier parte del mundo. Cuenta con conexión rápida tipo Plug and Play, manejo intuitivo mediante 3 teclas softkey y pantalla OLED de alto contraste en cinco idiomas.",
        "image": "/images/image48.jpg"
      },
      {
        "name": "Línea PRO — Termostatos de circulación",
        "description": "Los termostatos de circulación PRO de LAUDA ofrecen regulación de temperatura profesional compacta desde -100 hasta 250°C, con pequeño volumen de llenado y una potente bomba Varioflex que permite cambios rápidos de temperatura con bajo consumo de material. Disponibles con dos unidades de mando (Base o Command Touch), ambas extraíbles y utilizables como mando a distancia.",
        "image": "/images/image49.jpg"
      },
      {
        "name": "Línea Proline Kryomate — Termostatos de refrigeración",
        "description": "Los Proline Kryomate son termostatos de refrigeración profesionales de LAUDA para tecnología de procesos y ensayos de materiales, con rango de -90 a 200°C, disponibles en versión refrigerada por agua o por aire, con grandes aberturas de baño (volúmenes de 30 o 40 litros) y boquilla de bomba ajustable optimizada para la circulación interna.",
        "image": "/images/image50.jpg"
      },
      {
        "name": "Línea Semistat — Termostato de proceso termoeléctrico",
        "description": "El Semistat de LAUDA es un termostato de proceso termoeléctrico (basado en elementos Peltier) para la industria de semiconductores, con rango de -20 a 90°C, diseñado para la regulación dinámica de temperatura del porta obleas electrostático (ESC) en procesos de grabado por plasma, con eficiencia energética y diseño compacto.",
        "image": "/images/image51.jpg"
      },
      {
        "name": "Línea Ultratemp — Termostatos de proceso de alto rendimiento",
        "description": "Ultratemp es la línea de termostatos de proceso de mayor rendimiento de LAUDA, orientada a aplicaciones biotecnológicas e industriales de gran escala, con rango de -5 a 60°C y potencias de frío de hasta 46.7 kW, especialmente indicada para biorreactores con volúmenes de 2,000 a 5,000 litros en biotecnología y tecnología farmacéutica.",
        "image": "/images/image52.jpg"
      },
      {
        "name": "Línea Universa — Termostatos de refrigeración, calefacción, calefacción con baño transparente e inmersión",
        "description": "Universa es la línea más reciente e innovadora de LAUDA, que sustituye a las antiguas líneas ECO, PRO (termostatos de baño) y Proline, ofreciendo termostatos de baño y circulación en tres clases de rendimiento (Universa ECO, PRO y MAX) que cubren de -90 a 300°C. Todos los equipos incluyen conexión Wi-Fi, Ethernet y USB de serie, compresores de velocidad controlada, certificación NRTL y funcionan con refrigerantes naturales; incluye las familias Termostatos de refrigeración, de calefacción, de calefacción con baño transparente y de inmersión.",
        "image": "/images/image53.jpg"
      },
      {
        "name": "Línea Variocool — Termostatos de proceso",
        "description": "Variocool es la línea de termostatos de proceso de LAUDA para la regulación de temperatura de procesos en rangos moderados, de -25 a 80°C, con potencias variables de 1,200 W a 10 kW. Puede equiparse con diferentes bombas y ampliarse mediante módulos de interfaz hasta permitir regulación de temperatura externa, adaptándose a los requisitos cambiantes del entorno del proceso.",
        "image": "/images/image54.jpg"
      }
    ]
  },
  {
    "name": "LAUDA — ENFRIADORAS DE RECIRCULACIÓN",
    "category": "Laboratorio",
    "priority": 3,
    "sectors": ["Farmacéutica", "Química", "Polímeros", "Lubricantes", "Académico"],
    "products": [
      {
        "name": "Línea Microcool — Enfriadoras de recirculación",
        "description": "Microcool es la línea de enfriadoras de recirculación de fácil manejo de LAUDA, compuesta por cuatro modelos compactos (potencia de frío de 0.35 a 2.0 kW, rango de -10 a 40°C) con pantalla LED de gran tamaño y teclado de membrana. Su característica distintiva es la bomba monobloc de alta calidad con acoplamiento magnético, que evita problemas de sellado en el eje de la bomba.",
        "image": "/images/image55.jpg"
      },
      {
        "name": "Línea Ultracool — Enfriadoras de recirculación energéticamente eficientes e industriales",
        "description": "Ultracool es la línea de enfriadoras de recirculación de LAUDA orientada a eficiencia energética (reduciendo hasta un 50% los costes operativos) con conectividad avanzada (servidor web integrado, mando a distancia, conexión 4G a LAUDA.LIVE), disponible en dos gamas: la de -10 a 35°C con potencias de frío de 3.1 a 125.6 kW, y la industrial de mayor potencia (13 a 25°C) con potencias de frío de hasta 336.9 kW para aplicaciones industriales de gran escala.",
        "image": "/images/image56.jpg"
      }
    ]
  },
  {
    "name": "LAUDA — BAÑOS DE AGUA",
    "category": "Laboratorio",
    "priority": 3,
    "sectors": ["Farmacéutica", "Química", "Polímeros", "Lubricantes", "Académico"],
    "products": [
      {
        "name": "Línea Hydro — Baños de agua",
        "description": "La gama Hydro de LAUDA ofrece baños de agua versátiles y fiables para diversas aplicaciones de laboratorio, con rango de temperatura de 25 a 100°C (incluido el rango de ebullición) y potencia calorífica de 0.5 a 1.5 kW. Prácticamente no requieren mantenimiento y están diseñados para el funcionamiento continuo en el laboratorio.",
        "image": "/images/image57.jpg"
      }
    ]
  },
  {
    "name": "LAUDA — CONGELADORES",
    "category": "Laboratorio",
    "priority": 3,
    "sectors": ["Farmacéutica", "Química", "Polímeros", "Lubricantes", "Académico"],
    "products": [
      {
        "name": "Línea Versafreeze — Armarios y arcones congeladores",
        "description": "Versafreeze de LAUDA ofrece congelación segura hasta -86°C para vacunas, sustancias orgánicas y muestras valiosas, con tiempos prolongados de descongelación incluso en caso de corte eléctrico gracias a un acumulador integrado que mantiene las funciones de visualización y alarma hasta 35 horas. Incluye las familias de Armarios congeladores (verticales) y Arcones congeladores (horizontales), en múltiples capacidades desde 129 hasta 754 litros.",
        "image": "/images/image58.jpg"
      },
      {
        "name": "Línea Mobifreeze — Congelador móvil de temperatura ultrabaja",
        "description": "Mobifreeze es el primer ultracongelador horizontal móvil del mundo, desarrollado por LAUDA para el transporte con temperatura controlada de hasta -86°C, garantizando el mantenimiento de la cadena de frío en intralogística y transporte de fábrica gracias a sus excelentes propiedades de aislamiento; el modelo M 270 ofrece 270 litros de espacio útil.",
        "image": "/images/image59.jpg"
      }
    ]
  },
  {
    "name": "LAUDA — EQUIPOS DE DESTILACIÓN",
    "category": "Laboratorio",
    "priority": 3,
    "sectors": ["Farmacéutica", "Química", "Polímeros", "Lubricantes", "Académico"],
    "products": [
      {
        "name": "Línea Puridest — Equipos de destilación simple y doble",
        "description": "Los equipos de destilación Puridest de LAUDA, con el sello \"GFL Technology\", producen destilado de alta pureza, bajo contenido de gas, libre de gérmenes y de pirógenos para dilución de reactivos y preparación de muestras, purificando agua cruda hasta valores de conductancia inferiores a 1.6 µS/cm y cumpliendo las farmacopeas alemanas e internacionales. Se ofrecen en tres series con 9 variantes de modelo (producción de 4, 8 y 12 L/h) en versión de destilación simple o doble, con materiales de contacto en acero inoxidable y/o vidrio.",
        "image": "/images/image60.jpg"
      }
    ]
  },
  {
    "name": "NIPPON INSTRUMENTS CORPORATION (NIC)",
    "category": "Laboratorio",
    "priority": 3,
    "sectors": ["Minería", "Farmacéutica", "Química", "Alimentos", "Académico", "Petróleo/Gas"],
    "products": [
      {
        "name": "Analizador de Mercurio Directo MA-3000",
        "description": "El MA-3000 de Nippon Instruments es un analizador de mercurio por descomposición térmica directa, considerado el modelo estándar mundial de esta tecnología, que permite medir mercurio en muestras como residuos, suelo, carbón y alimentos sin necesidad de digestión húmeda con ácidos o álcalis, reduciendo el tiempo de análisis hasta en un 86% respecto al método convencional. Cumple métodos como USEPA 7473 y ASTM D6722/D7623.",
        "image": "/images/image61.jpg"
      },
      {
        "name": "Analizador Automático de Mercurio MA-3 Solo",
        "description": "El MA-3 Solo de Nippon Instruments es un analizador de mercurio portátil y compacto que utiliza la técnica de descomposición térmica directa, con bandejas de muestra de cerámica reutilizables compatibles con matrices sólidas y líquidas. Es ligero (aprox. 13 kg), cuenta con asas ergonómicas incorporadas y ofrece un amplio rango de medición (0 a 10,000 ng) con tiempos de análisis de 5 a 12 minutos, ideal para laboratorios móviles y estudios de campo.",
        "image": "/images/image62.jpg"
      }
    ]
  },
  {
    "name": "PAC (Petroleum Analyzer Company)",
    "category": "Laboratorio + Proceso",
    "priority": 5,
    "sectors": ["Petróleo/Gas", "Lubricantes", "Automotriz", "Energía"],
    "products": [
      {
        "name": "Analizador Automático de destilación atmosférica OptiDist 2",
        "description": "El OptiDist 2 de PAC es la nueva generación del referente mundial en destilación atmosférica (con más de 5,000 instrumentos instalados globalmente), rediseñado desde cero con un innovador sistema de enfriamiento de termosifón en estado sólido y un control de calentamiento por doble optimizador patentado que garantiza una repetibilidad y precisión superiores. Cumple con ASTM D86, D1078, D850, EN ISO 3405, ISO 918, IP 123, IP 195, DIN 1751 y normas JIS.",
        "image": "/images/image63.jpg"
      },
      {
        "name": "Analizador de gasolina y Diesel por Tecnología FTIR — Modelo OptiFuel",
        "description": "El OptiFuel de PAC es un analizador de combustibles multiparamétrico basado en FTIR que combina las capacidades de sus predecesores GS PPA, TD PPA y QuickSpec, permitiendo medir múltiples propiedades de gasolina, diésel, combustible de aviación y biodiésel con solo pulsar un botón. Está calibrado de fábrica y cumple normas como ASTM D6277, D7371, D5845 y D7777, con correlación a métodos de referencia como ASTM D2699, D2700, D86 y D613.",
        "image": "/images/image64.jpg"
      },
      {
        "name": "Icon Analizador de Hidrógeno",
        "description": "El Icon Analizador de Hidrógeno, de la marca Icon Scientific (adquirida por PAC en 2023), incorpora el sensor de hidrógeno de 5ª generación de H2-Scan, considerado el estándar de referencia de la industria, basado en tecnología de película delgada que ofrece una medición directa de hidrógeno sin sensibilidad cruzada a otros gases. Está alojado en el característico gabinete a prueba de explosión de Icon, con pantalla táctil local, orientado a aplicaciones de mezcla de hidrógeno (hydrogen blending) dentro de la transición energética.",
        "image": "/images/image65.jpg"
      },
      {
        "name": "Icon Analizador de Color y Opacidad",
        "description": "El Icon Analizador de Color y Opacidad, de Icon Scientific de PAC, es un instrumento en línea avanzado para la medición simultánea de color, opacidad y concentración en combustibles líquidos y productos petroquímicos. Utiliza un módulo espectrómetro dispersivo que escanea el espectro visible de 350 a 1,100 nm a una velocidad de 15 veces por segundo, evitando las pérdidas de sensibilidad y baja transmisión propias de tecnologías con filtros ópticos o partes móviles (ruedas de filtro, chopper).",
        "image": "/images/image66.jpg"
      },
      {
        "name": "CID 510",
        "description": "El CID 510 (Cetane Ignition Delay), desarrollado por Herzog by PAC, es un analizador compacto y totalmente automatizado que determina el Número de Cetano Derivado (DCN) de todo tipo de combustible diésel, biodiésel, FAME, HVO, BTL y GTL, con la mejor precisión del mercado y correlación perfecta con ASTM D613. Emplea el método patentado ASTM D7668 (cámara de combustión de volumen constante), reconocido en especificaciones como ASTM D975, D6751, D7467 y EN 590, y cuenta con calibración automática, operación de un solo botón y sistema integrado de monitoreo y extinción de incendios.",
        "image": "/images/image67.jpg"
      },
      {
        "name": "Advanced Sensors — S-One / X-One / Watercut / Microscopía",
        "description": "Advanced Sensors, marca de PAC, desarrolla analizadores en línea para medición de aceite en agua y agua en aceite en procesos de producción de petróleo y gas. Su portafolio incluye el S-One y X-One (nueva generación de la exitosa serie EX para medición de aceite en agua), el Watercut (serie WIO-300, medición de alta sensibilidad de agua en aceite) y el analizador de Microscopía, que mide sólidos y aceite en agua producida apoyándose en inteligencia artificial y aprendizaje automático.",
        "image": "/images/image68.jpg"
      },
      {
        "name": "OptiFlash Cleveland Open Cup",
        "description": "El OptiFlash Cleveland Open Cup, de Herzog by PAC, es un analizador automático del punto de inflamación y combustión por el método de copa abierta Cleveland, conforme a ASTM D92, con temperaturas de ensayo de hasta 400 °C. Incorpora detección automática del punto de inflamación, encendido y extinción controlados y funciones de seguridad para el análisis desatendido de productos derivados del petróleo.",
        "image": "/images/image97.jpg"
      }
    ]
  },
  {
    "name": "PCS INSTRUMENTS",
    "category": "Laboratorio",
    "priority": 3,
    "sectors": ["Lubricantes", "Automotriz", "Académico"],
    "products": [
      {
        "name": "HFRR Completo",
        "description": "El HFRR (High Frequency Reciprocating Rig) de PCS Instruments es un sistema de ensayo de fricción y desgaste por reciprocación de alta frecuencia, controlado por microprocesador, que evalúa el desempeño de combustibles y lubricantes. Es el estándar de la industria para la prueba de lubricidad de combustible diésel, cumpliendo ASTM D6079, ASTM D7688, CEC F-06-A, ISO 12156, EN 590, JPI-5S-50 e IP 450; utiliza especímenes de bola y disco de un solo uso conformes a los estándares internacionales.",
        "image": "/images/image69.jpg"
      }
    ]
  },
  {
    "name": "PHASE TECHNOLOGY (PAC)",
    "category": "Laboratorio + Proceso",
    "priority": 5,
    "sectors": ["Petróleo/Gas", "Lubricantes", "Automotriz", "Energía"],
    "products": [
      {
        "name": "Analizador de Punto de Fluidez 70Xe",
        "description": "La serie 70Xe de Phase Technology (PAC) es el primer analizador integrado del mundo para pruebas completas de propiedades de flujo de combustibles de aviación y diésel, combinando punto de congelación, punto de nube, punto de fluidez (pour point), viscosidad y densidad en una sola plataforma con rango de temperatura de -100°C a +70°C. El módulo PSA-70Xe está especializado en propiedades en frío (punto de congelación, nube y fluidez), y admite un autosampler opcional de 30 posiciones para pruebas desatendidas.",
        "image": "/images/image70.jpg"
      }
    ]
  },
  {
    "name": "SERVOMEX",
    "category": "Proceso",
    "priority": 5,
    "sectors": ["Petróleo/Gas", "Energía", "Química", "Medio Ambiente"],
    "products": [
      {
        "name": "MultiExact 4100A2",
        "description": "El Servomex MultiExact 4100 es un sistema modular de análisis de gases que, en la configuración especificada, incorpora dos módulos de medición: uno de control de O2 y otro de CO2 al 20%, cada uno con dos alarmas configurables y salida analógica aislada de 4-20 mA. Cuenta con comunicación serial RS485/Modbus, cuatro contactos de relé, montaje en rack y manual del operador en inglés; el equipo está clasificado bajo el código de producto 902710 (país de origen: Reino Unido).",
        "image": "/images/image71.jpg"
      },
      {
        "name": "SERVOFLEX MiniFoodPack 5200",
        "description": "El Servomex SERVOFLEX MiniFoodPack 5200 es un analizador de gases de sobremesa portátil, de pequeño volumen de muestra, para la medición individual o simultánea de O2 y CO2 mediante tecnología paramagnética e infrarroja. Está centrado en la verificación y el control de calidad de mezclas de gases en envases de atmósfera modificada (MAP) en la industria de alimentos y bebidas.",
        "image": "/images/image104.jpg"
      }
    ]
  },
  {
    "name": "STANHOPE-SETA",
    "category": "Laboratorio",
    "priority": 4,
    "sectors": ["Petróleo/Gas", "Química", "Lubricantes"],
    "products": [
      {
        "name": "Analizador de Sal en Crudo",
        "description": "El Analizador Seta de Sal en Crudo, de Stanhope-Seta, es un instrumento robusto y portátil para determinar el contenido de cloruros (sal) en crudos de petróleo, conforme a ASTM D3230 e IP 265. Viene precalibrado y muestra automáticamente la concentración de sal en g/m³ o lb/1000 bbl, evitando la necesidad de preparar soluciones patrón de sal; el kit \"SaltCheck\" (99703-0) corresponde al set de verificación de 3 módulos calibrados (0, 30 y 190 g/m³) usado para comprobar la exactitud del analizador.",
        "image": "/images/image72.jpg"
      },
      {
        "name": "Analizador automático de partículas contaminantes",
        "description": "Stanhope-Seta fabrica contadores de partículas automáticos (línea AvCount) para determinar el tamaño y la distribución de partículas y gotas de agua en combustibles destilados ligeros y medios, incluido combustible de aviación, biodiésel y aceites de baja viscosidad, con tiempos de análisis inferiores a 3 minutos y reporte de códigos de limpieza ISO 4406, en cumplimiento de métodos como ASTM D7619 e IP 565.",
        "image": "/images/image73.jpg"
      },
      {
        "name": "Analizador de Instrumento de Separación de Agua (WSI) — SA9000-0",
        "description": "El analizador WSI de Stanhope-Seta es un instrumento de sobremesa/portátil totalmente automático que mide qué tan eficazmente un combustible libera agua emulsionada y arrastrada al bombearlo a través de un filtro coalescente de agua, mostrando al final de la prueba el Índice de Separación de Agua (WSI). Cumple ASTM D8073, IP 624, ATA 103, CAN/CGSB-3.23-2020, DEF STAN 91-091 y JIG Bulletin 150, siendo el método preferido para combustibles con aditivo disipador estático (SDA), con interfaz de pantalla táctil, almacenamiento interno de datos y calibración en sitio sin necesidad de enviar el equipo a servicio.",
        "image": "/images/image74.jpg"
      },
      {
        "name": "Seta Centrífuga de Prueba de Aceite – 4 posiciones — 90000-3",
        "description": "La centrífuga Seta Oil Test Centrifuge de 4 posiciones es una centrífuga de cámara calentada (ambiente a 80°C) controlada por microprocesador, utilizada para determinar agua y sedimento en aceites, combustibles y crudo. Su rotor basculante de 4 posiciones con adaptadores acojinados admite tubos cónicos, en forma de pera, de sedimento traza de 6 y 8 pulgadas, y tubos de 12.5 ml, manteniendo las muestras casi verticales en reposo para una medición precisa del sedimento; cumple métodos como ASTM D91, D893, D1796, D2273, D2709, D2711, D4007, ISO 3734, ISO 9030 e ISO 15301.",
        "image": "/images/image75.jpg"
      },
      {
        "name": "Seta Herschel Emulsifier — 96700-2",
        "description": "El Herschel Emulsifier (96700-2) de Stanhope-Seta evalúa la capacidad de un aceite para separarse del agua (características de emulsión/desemulsibilidad) conforme a ASTM D1401, empleado en aceites de turbina, hidráulicos y de circulación. Sus estaciones agitan la mezcla aceite-agua bajo condiciones controladas y permiten observar el tiempo de separación de las fases.",
        "image": "/images/image99.jpg"
      }
    ]
  },
  {
    "name": "TANNAS",
    "category": "Laboratorio",
    "priority": 3,
    "sectors": ["Energía", "Automotriz", "Lubricantes", "Académico"],
    "products": [
      {
        "name": "Baño de espumación TFAB",
        "description": "El TFAB (Tannas Foam Air Bath) es un baño de aire de sobremesa que sustituye a los baños de aceite tradicionales para ensayos de tendencia y estabilidad de espuma en aceites lubricantes, cubriendo las cuatro secuencias requeridas (I, II y III de ASTM D892, y IV de ASTM D6082), además de aplicaciones para ASTM D1881, D7840 e IP 146. Cuenta con controlador de pantalla táctil, temporizador progresivo con alarmas audibles, carrusel giratorio de seis posiciones y sistema de circulación de agua para enfriamiento entre secuencias.",
        "image": "/images/image76.jpg"
      },
      {
        "name": "Tannas Quantum™ Analizador de Oxidación",
        "description": "El Tannas Quantum Analizador de Oxidación es un equipo de sobremesa, sin baño líquido, que realiza pruebas de estabilidad a la oxidación como TFOUT (Thin Film Oxygen Uptake Test, ASTM D4742) y RPVOT/RBOT (Rotating Pressure Vessel Oxidation Test, ASTM D2272), calentando la muestra en un cilindro seco (en lugar del tradicional baño de líquido caliente), lo que elimina el manejo de medios líquidos peligrosos y los olores asociados a la oxidación de aceite.",
        "image": "/images/image77.jpg"
      },
      {
        "name": "Tannas NOACK S2 — Prueba de Volatilidad",
        "description": "El NOACK S2 de Tannas determina la pérdida por evaporación (volatilidad) de aceites lubricantes según el método Noack, conforme a ASTM D5800, un parámetro clave para las especificaciones de aceites de motor. Cuenta con controlador de pantalla táctil a color y un diseño robusto que facilita ensayos seguros, precisos y reproducibles.",
        "image": "/images/image98.jpg"
      },
      {
        "name": "Tannas Quantum® Pro — Analizador de Oxidación",
        "description": "El Quantum Pro de Tannas es la más reciente generación de su analizador de estabilidad a la oxidación de sobremesa y la única solución de bloque seco (dry-block) conforme a ASTM D2272, que elimina los baños de aceite caliente peligrosos y sus olores al calentar la muestra en un cilindro seco de acero inoxidable. Realiza las pruebas RPVOT/RBOT (ASTM D2272, D2112, IP 229), TFOUT (ASTM D4742, D7098) y de oxidación de grasa (ASTM D942), evaluando la resistencia a la oxidación de aceites de turbina de vapor, aceites aislantes, aceites nuevos y en servicio y aceites de motor a gasolina. Incorpora interfaz de pantalla táctil con adquisición de datos integrada, llenado y purga automáticos, gráfica en vivo del ensayo con almacenamiento a bordo, control de velocidad en lazo cerrado, envío automático de reportes por Ethernet y un consumo de energía de 20 a 30% menor que el Quantum original.",
        "image": "/images/image106.jpg"
      }
    ]
  }
];

export const totalProducts = catalog.reduce((n, b) => n + b.products.length, 0);

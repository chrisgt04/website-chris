// Todo el contenido del sitio vive aquí para editarlo fácil.

export const nav = {
  brand: "christiangtzb",
  links: [
    { label: "Quién soy", href: "#about" },
    { label: "Servicios", href: "#servicios" },
    { label: "Clientes", href: "#clientes" },
    { label: "Resultados", href: "#resultados" },
    { label: "Conferencias", href: "#conferencias" },
  ],
  cta: { label: "Hablemos", href: "https://wa.me/528180502810" },
};

export const hero = {
  kicker: "Disponible para proyectos · 2026",
  // El headline se arma con segmentos; los marcados accent van en mint.
  title: [
    { t: "Convierto tu negocio en una " },
    { t: "máquina de vender", accent: true },
    { t: " con " },
    { t: "IA", accent: true },
    { t: "." },
  ],
  sub: [
    { t: "Más clientes, menos trabajo manual. Algunos solo me pagan por las " },
    { t: "ventas que genero", accent: true },
    { t: "." },
  ],
  primary: { label: "Hablemos por WhatsApp", href: "https://wa.me/528180502810" },
  secondary: { label: "Ver resultados", href: "#resultados" },
  portrait: "/images/hero-nuevo.png",
  watermark: "C",
  dockLabel: "He trabajado con:",
  clients: [
    "Cirque du Soleil Joya",
    "Doorvel",
    "LeadSales",
    "Ssiento",
    "Jungala",
    "Alvah Energy",
    "Finxi Negocios",
    "El Financiero · Bloomberg",
  ],
};

export const bio = {
  kicker: "Mi historia, del presente al origen",
  title: "¿Quién es este tipo?",
  photo: "/images/talk-2.png",
  lead: "Soy Christian Gutiérrez. Mi camino, contado al revés: empiezo donde estoy hoy y bajo hasta donde todo comenzó.",
  timeline: [
    {
      n: "01",
      title: "Hoy — Tech Lead a los 24",
      desc: "Lidero +100 flujos de operación en una de las startups más reconocidas de México. Equipo a cargo, conferencias de IA para +1,000 personas con Grupo PISSA — y apenas voy en los 24.",
      photo: "/images/01.PNG",
    },
    {
      n: "02",
      title: "Columnista en El Financiero",
      desc: "Dos veces columnista invitado en El Financiero · Bloomberg. Cuando hablar de inmobiliarias en cifras dejó de ser opcional.",
      photo: "/images/02.jpg",
    },
    {
      n: "03",
      title: "3 años dominando MX",
      desc: "Tres años construyendo desde adentro la operación que conectó a todas las inmobiliarias del país. Mi entrada al mundo PropTech.",
      photo: "/images/03.PNG",
    },
    {
      n: "04",
      title: "Agencia de performance · data",
      desc: "Más de $10M MXN en ventas generadas para clientes desde paid media. Mi primera escuela: decisiones con datos, no con intuición.",
      photo: "/images/04.PNG",
    },
    {
      n: "05",
      title: "Mi propio restaurante",
      desc: "Abrí un restaurante con mis ahorros. Sigue operando hasta hoy — mi primera lección de unit economics y de ensuciarse las manos.",
      photo: "/images/05.PNG",
    },
    {
      n: "06",
      title: "17 años, primera nómina",
      desc: "A los 17, encargado del marketing y todas las métricas de una empresa de reclutación. Ahí descubrí que los datos también venden.",
      photo: "/images/primeranomina.PNG",
    },
    {
      n: "07",
      title: "El origen — pandemia",
      desc: "Mi primera agencia: transformación digital para las pymes del barrio cuando llegó la pandemia. Aquí empezó todo.",
      photo: "/images/startup.PNG",
    },
  ],
};

export const services = {
  kicker: "Cómo te ayudo",
  title: "Tres formas de meterle tracción a tu negocio.",
  sub: "Desde aumentar tus ventas sin que pagues un peso fijo, hasta automatizaciones empresariales que eliminan el trabajo manual. Cada una se diseñó para un momento distinto de tu negocio.",
  items: [
    {
      icon: "📈",
      name: "Aumento de ventas",
      tag: "Solo comisión · Premium",
      price: "$0 fijo · solo comisión",
      variant: "gold",
      desc: "Hago crecer tus ventas sin costo fijo. Cobro únicamente comisión sobre el aumento que genero. Para negocios que ya facturan y tienen estructura de ventas — solo por aplicación.",
      tags: ["Sin costo fijo", "Comisión variable", "Por aplicación"],
      cta: { label: "Aplicar por WhatsApp", href: "https://wa.me/528180502810", external: true },
    },
    {
      icon: "🧠",
      name: "Consultoría de transformación digital",
      tag: "IA aplicada · 1-1 o equipo",
      price: "Capacitación inicial gratis",
      variant: "silver",
      desc: "Acompaño a fundadores y equipos a integrar IA en su operación. Sesiones 1-1 o mentoría para equipos de más de 10 personas — con casos reales, no teoría.",
      tags: ["1-1", "Mentoría equipos +10", "IA práctica"],
      cta: { label: "Ver sesiones 1-1", href: "/consultoria" },
    },
    {
      icon: "⚙️",
      name: "Automatizaciones con Unifai",
      tag: "Empresas · Implementación",
      price: "Costo personalizado",
      variant: "purple",
      desc: "Diseño e implemento automatizaciones empresariales con Unifai. Conecto datos, ventas y operación en flujos que eliminan el trabajo manual.",
      tags: ["Unifai", "Procesos empresariales", "Llave en mano"],
      cta: { label: "Conocer Unifai →", href: "https://www.unifai.com.mx/", external: true },
    },
  ],
};

export const conferences = {
  kicker: "Conferencias y capacitación",
  title: [
    { t: "He llevado la IA a " },
    { t: "+1,000 personas", accent: true },
    { t: " en empresas líderes." },
  ],
  // Texto del home (sección Talks). `sub` lo usa /portafolio.
  intro: "Con Grupo PISSA he dado conferencias y talleres de IA aplicada a equipos de grandes empresas y gobierno: cómo usar la IA en el trabajo diario, automatizar procesos y decidir con datos — claro, accionable y con ejemplos reales.",
  sub: "Charlas sobre performance marketing, analítica e IA aplicada a negocios — claras, accionables y con ejemplos reales. Para equipos de marketing, ventas y founders que quieren decidir con evidencia, no con intuición.",
  stats: [
    { value: 1000, prefix: "+", lab: "personas capacitadas en IA" },
    { value: 2, suffix: "×", lab: "columnista en El Financiero · Bloomberg" },
  ],
  orgs: ["Grupo PISSA", "Bimbo", "Nestlé", "Brocar", "Gobierno del Estado de México"],
  photo: "/images/talk-1-crop.png",
  topics: [
    "Performance marketing",
    "Analítica & BI",
    "IA para negocios",
    "Automatización & CRM",
  ],
  ctaText: "Cotizar una conferencia conmigo",
  cta: { label: "Solicitar información", href: "https://wa.me/528180502810" },
  // Pega aquí el ID de tu video de YouTube (lo que va después de v= o de youtu.be/)
  video: { id: "zVXS2drk-8s", caption: "Mira una charla" },
};

export const stats = [
  { value: 11, prefix: "$", suffix: "M", label: "MXN en ventas generadas — Cirque du Soleil Joya" },
  { value: 22, suffix: "x", label: "ROAS máximo — Ssiento" },
  { value: 85, prefix: "↓", suffix: "%", label: "Reducción de CPL — Doorvel ($2,000 → $300)" },
  { value: 9, suffix: "+", label: "Clientes en portafolio" },
  { value: 2, suffix: "×", label: "El Financiero · Bloomberg" },
];

export const marquee = [
  "Data Analysis",
  "Paid Media",
  "Automatización",
  "Business Intelligence",
  "Lead Scoring",
  "Atribución multi-touch",
  "Meta & Google Ads",
  "CRM & Workflows",
];

export const about = {
  photo: "/images/talk-1.png",
  paragraphs: [
    "Soy <strong>Christian Gutiérrez</strong>, ingeniero en Data Analysis por el Tec de Monterrey con concentración en IA para los Negocios. Trabajo en la intersección de tres disciplinas que pocas personas combinan en un solo perfil: ingeniería de datos, performance marketing y automatización.",
    "Como <strong>Automation Manager en LeadSales</strong> diseño sistemas que conectan datos, anuncios y CRM para que cada decisión tenga evidencia detrás. He generado más de <strong>$11M MXN en ventas</strong> desde ads y reducido el costo por lead hasta en un <strong>85%</strong>.",
  ],
  chips: [
    "Ing. en Data Analysis — Tec de Monterrey",
    "Concentración: IA para los Negocios",
    "Automation Manager — LeadSales",
    "Big Data · SQL · Tableau · Python",
    "2× El Financiero · Bloomberg",
    "📍 Monterrey, MX",
  ],
};

export const specialties = {
  label: "Especialidades",
  title: "Lo que hago",
  intro:
    "Ingeniería de datos + performance marketing + automatización — tres disciplinas que se potencian entre sí.",
  cards: [
    {
      icon: "📊",
      title: "Data Analysis & BI",
      desc: "Extracción, limpieza y análisis de grandes volúmenes de datos para identificar patrones de conversión, atribución de ingresos y oportunidades de crecimiento. Dashboards ejecutivos y modelos predictivos aplicados al negocio.",
      tags: ["SQL / Queries", "Tableau", "Python", "Big Data", "IA para negocios", "Atribución"],
    },
    {
      icon: "📣",
      title: "Paid Media",
      desc: "Campañas Meta Ads y Google Ads con foco en CPL, ROAS y escala. Estrategia basada en análisis de datos — no en suposiciones. Desde el setup hasta la optimización diaria con criterio analítico.",
      tags: ["Meta Ads", "Google Ads", "Pixel / GTM", "Conversion API", "Atribución multi-touch"],
    },
    {
      icon: "⚙️",
      title: "Automatización & CRM",
      desc: "Flujos que conectan CRM, formularios, WhatsApp y herramientas de ventas. Lead scoring, calificación automática y pipelines de datos que eliminan el trabajo manual.",
      tags: ["HubSpot", "n8n", "Zapier", "WhatsApp API", "Typeform", "Lead scoring"],
    },
  ],
};

export const portfolio = {
  label: "Portafolio",
  title: "Resultados reales",
  intro: "Casos con métricas concretas — porque los números hablan más que cualquier descripción.",
  featured: [
    {
      initials: "CJ",
      name: "Cirque du Soleil Joya",
      cat: "Entretenimiento Premium · Riviera Maya · Internacional",
      pill: "Paid Media",
      desc: "Gestión de campañas Meta Ads y Google Ads para el espectáculo permanente en Riviera Maya. Segmentación para audiencias turísticas internacionales combinando análisis de comportamiento, temporadas y mercados clave, con optimización continua de atribución.",
      metrics: [
        { val: "$11M", lab: "MXN ventas desde ads" },
        { val: "$500K", lab: "MXN inversión total" },
        { val: "22x", lab: "ROAS aproximado" },
      ],
      tags: ["Meta Ads", "Google Ads", "Pixel", "Remarketing", "Atribución"],
    },
    {
      initials: "DV",
      name: "Doorvel",
      cat: "PropTech · Real Estate · MX + USA",
      pill: "Full Stack",
      desc: "Paid media y automatización para plataforma inmobiliaria con presencia en México y USA. Portafolio de Realty World, RE/MAX y Century 21 — propiedades de $3M a $50M+ MXN. Segmentación por rango de precio y automatización de calificación de leads por WhatsApp.",
      metrics: [
        { val: "↓85%", lab: "Reducción de CPL" },
        { val: "$300", lab: "MXN CPL final" },
        { val: "MX+US", lab: "Presencia binacional" },
      ],
      tags: ["Meta Ads", "Google Ads", "WhatsApp API", "CRM", "Zapier", "Big Data"],
    },
    {
      initials: "SS",
      name: "Ssiento",
      cat: "Furniture · Lifestyle Premium",
      pill: "Paid Media",
      desc: "Campañas Meta Ads para marca de mobiliario premium. Catálogo dinámico, retargeting por comportamiento y análisis de audiencias para maximizar ingresos con presupuesto ajustado.",
      metrics: [
        { val: "$400K", lab: "MXN ingresos" },
        { val: "~13x", lab: "ROAS promedio" },
        { val: "$35K", lab: "MXN inversión" },
      ],
      tags: ["Meta Ads", "Catálogo DPA", "Retargeting", "Audiencias"],
    },
    {
      initials: "LS",
      name: "LeadSales",
      cat: "B2B SaaS · LATAM · WhatsApp CRM",
      pill: "Full Stack · Automation Manager",
      desc: "Workflows HubSpot para calificación y routing de leads. Integración Typeform + Calendly con segmentación avanzada. Sincronización de Google Meet vía n8n y sistema de lead scoring A–E. Análisis de CPL/ROAS por canal con SQL y atribución multi-touch.",
      metrics: [
        { val: "4", lab: "Variantes de funnel" },
        { val: "15pts", lab: "Lead scoring A–E" },
        { val: "100%", lab: "Leads automatizados" },
      ],
      tags: ["HubSpot", "n8n", "GTM", "Meta Pixel", "Typeform", "Calendly", "SQL", "Python"],
    },
  ],
  more: [
    {
      initials: "AE",
      name: "Alvah Energy",
      cat: "Energía Solar · B2B–B2C",
      desc: "Paid media + automatización con nurturing por WhatsApp y CRM para ciclo de venta largo.",
      metrics: [
        { val: "B2B+C", lab: "Leads calificados" },
        { val: "Auto", lab: "Nurturing flows" },
      ],
    },
    {
      initials: "JU",
      name: "Jungala",
      cat: "Parque Temático · Cancún",
      desc: "Campañas de adquisición con segmentación de turismo familiar y optimización de CPL por temporada.",
      metrics: [
        { val: "↓CPL", lab: "Costo por lead" },
        { val: "T+N", lab: "Turismo y nacional" },
      ],
    },
    {
      initials: "FN",
      name: "Finxi Negocios",
      cat: "Fintech · PyMEs",
      desc: "Leads calificados B2B con formularios integrados a automatización de seguimiento y análisis de conversión.",
      metrics: [
        { val: "B2B", lab: "PyME segmentation" },
        { val: "Auto", lab: "Follow-up flows" },
      ],
    },
    {
      initials: "LM",
      name: "La Sazón de Monterrey",
      cat: "F&B · Gastronomía Regional",
      desc: "Campañas locales Meta Ads con posicionamiento regional y community growth con audiencias locales.",
      metrics: [
        { val: "Local", lab: "Awareness MTY" },
        { val: "↑Eng", lab: "Comunidad activa" },
      ],
    },
    {
      initials: "SE",
      name: "Salones de Eventos",
      cat: "Eventos · B2C Local",
      desc: "Meta y Google Ads para cotizaciones con estrategia estacional (bodas y XV años) y optimización de CPL.",
      metrics: [
        { val: "↓CPL", lab: "Cotizaciones" },
        { val: "Sznl", lab: "Estrategia estacional" },
      ],
    },
  ],
};

export const methodology = {
  label: "Metodología",
  title: "Cómo trabajo",
  intro: "Un proceso basado en datos desde el diagnóstico hasta la optimización continua.",
  steps: [
    {
      num: "01",
      title: "Diagnóstico con datos",
      desc: "Auditoría de cuentas, tracking y CRM. Queries SQL para identificar qué se está midiendo mal. No se invierte en tráfico hasta que el tracking sea confiable.",
    },
    {
      num: "02",
      title: "Estrategia basada en evidencia",
      desc: "Análisis de audiencias, comportamiento y competencia. Funnels y KPIs alineados al ciclo de ventas real. Modelos de atribución definidos desde el inicio.",
    },
    {
      num: "03",
      title: "Implementación técnica",
      desc: "Pixel, GTM, integraciones CRM y flujos de automatización. Setup sin huecos en datos. Dashboards en Tableau para visibilidad en tiempo real.",
    },
    {
      num: "04",
      title: "Optimización continua",
      desc: "A/B testing con significancia estadística. Ajuste de presupuesto basado en análisis de datos. Reportes periódicos con insights accionables.",
    },
  ],
};

export const stack = {
  label: "Herramientas",
  title: "Stack técnico",
  columns: [
    {
      title: "Data & Analytics",
      items: [
        { ic: "🗃️", nm: "SQL / Queries", sub: "Big Data" },
        { ic: "📊", nm: "Tableau", sub: "Visualización BI" },
        { ic: "🐍", nm: "Python", sub: "Análisis / Automatización" },
        { ic: "🤖", nm: "IA para Negocios", sub: "Tec de Monterrey" },
      ],
    },
    {
      title: "Paid Media & Tracking",
      items: [
        { ic: "📣", nm: "Meta Ads", sub: "Paid Media" },
        { ic: "🔍", nm: "Google Ads", sub: "Paid Media" },
        { ic: "🏷️", nm: "Google Tag Manager", sub: "Tracking" },
        { ic: "📍", nm: "Meta Pixel / CAPI", sub: "Conversiones" },
      ],
    },
    {
      title: "Automatización & CRM",
      items: [
        { ic: "🟠", nm: "HubSpot CRM", sub: "CRM + Automatización" },
        { ic: "⚙️", nm: "n8n", sub: "Flujos avanzados" },
        { ic: "⚡", nm: "Zapier", sub: "Integraciones" },
        { ic: "💚", nm: "WhatsApp API", sub: "Mensajería" },
      ],
    },
  ],
};

export const press = {
  label: "Prensa",
  title: "En los medios",
  intro:
    "Dos apariciones en El Financiero · Bloomberg — uno de los medios económicos más importantes de México.",
  photo: "/images/talk-2.png",
  cards: [
    {
      outlet: "El Financiero · Bloomberg",
      meta: "Abril 2024 · Sección Monterrey — Panorama Inmobiliario",
      href: "#",
    },
    {
      outlet: "El Financiero · Bloomberg",
      meta: "2024 · Sección Monterrey — Panorama Inmobiliario",
      href: "#",
    },
  ],
};

// ============================================================
//  PORTAFOLIO — CV visual estilo Tech Lead (/portafolio)
//  Reutiliza about, bio.timeline, specialties, stack, portfolio,
//  stats, press y conferences desde los componentes.
// ============================================================
export const portafolio = {
  name: "Christian Gutiérrez",
  role: "Tech Lead",
  org: "LeadSales",
  formalTitle: "Automation Manager · Tech Lead",
  tagline:
    "Ingeniero de datos, software y automatización. Construyo agentes de IA autónomos, pipelines sobre data lakes y sistemas full-stack — de la query al deploy.",
  availability: "Disponible para proyectos · 2026",
  location: "Monterrey, MX",

  // Herramientas que orbitan el nombre en el hero.
  // Dos anillos: interno (core) + externo (infra / data / tooling).
  orbit: {
    inner: [
      { label: "Python", ic: "🐍" },
      { label: "TypeScript", ic: "🔷" },
      { label: "SQL", ic: "🗃️" },
      { label: "Claude · LLM", ic: "🤖" },
      { label: "n8n", ic: "⚙️" },
    ],
    outer: [
      { label: "React", ic: "⚛️" },
      { label: "PostgreSQL", ic: "🐘" },
      { label: "AWS", ic: "☁️" },
      { label: "Docker", ic: "🐳" },
      { label: "BigQuery", ic: "📊" },
      { label: "MCP", ic: "🧩" },
      { label: "REST · APIs", ic: "🔌" },
    ],
  },

  // Medidores de competencia (niveles curados para la barra animada).
  skills: [
    {
      label: "Data Engineering & Data Lakes",
      level: 95,
      note: "PostgreSQL · BigQuery · S3 · dbt · Spark · ETL",
    },
    {
      label: "Automatización & APIs",
      level: 94,
      note: "n8n · webhooks · REST · HubSpot / Intercom API · cron",
    },
    {
      label: "Agentes de IA autónomos & LLMs",
      level: 93,
      note: "Claude · MCP · RAG · embeddings · tool-calling · multi-agente",
    },
    {
      label: "Lenguajes & Software",
      level: 92,
      note: "Python · JS / TypeScript · React · Node · SQL · Bash",
    },
    {
      label: "Análisis & BI",
      level: 90,
      note: "Tableau · Pandas · NumPy · Jupyter · A/B testing",
    },
    {
      label: "Infra & DevOps",
      level: 84,
      note: "AWS · Docker · Linux · CI/CD · Vercel · SSH",
    },
  ],

  // Banda de métricas técnicas (numéricas para el count-up).
  metrics: [
    { value: 100, suffix: "+", label: "Flujos de automatización en producción" },
    { value: 100, suffix: "%", label: "Procesos sin trabajo manual" },
    { value: 24, suffix: "/7", label: "Agentes de IA operando" },
    { value: 15, suffix: "+", label: "APIs / sistemas integrados" },
  ],

  // Stack técnico completo, agrupado por disciplina.
  stackGroups: [
    {
      title: "Lenguajes",
      items: [
        { ic: "🐍", nm: "Python", sub: "Data · automatización · scripting" },
        { ic: "🟨", nm: "JavaScript", sub: "Web · APIs" },
        { ic: "🔷", nm: "TypeScript", sub: "Tipado · apps" },
        { ic: "🗃️", nm: "SQL", sub: "Queries · modelado" },
        { ic: "💻", nm: "Bash", sub: "Shell · automatización" },
        { ic: "🌐", nm: "HTML / CSS", sub: "Frontend" },
      ],
    },
    {
      title: "Bases de datos",
      items: [
        { ic: "🐘", nm: "PostgreSQL", sub: "Relacional" },
        { ic: "🐬", nm: "MySQL", sub: "Relacional" },
        { ic: "📊", nm: "BigQuery", sub: "Data warehouse" },
        { ic: "🔴", nm: "Redis", sub: "Cache · colas" },
        { ic: "🍃", nm: "MongoDB", sub: "NoSQL" },
        { ic: "🟢", nm: "Supabase", sub: "Postgres + Auth" },
        { ic: "🪶", nm: "SQLite", sub: "Embebida" },
      ],
    },
    {
      title: "Data Lakes & Big Data",
      items: [
        { ic: "🪣", nm: "Amazon S3", sub: "Data lake" },
        { ic: "❄️", nm: "Snowflake", sub: "Warehouse" },
        { ic: "✨", nm: "Apache Spark", sub: "Procesamiento" },
        { ic: "🔧", nm: "dbt", sub: "Transformación" },
        { ic: "🌬️", nm: "Airflow", sub: "Orquestación" },
        { ic: "🧱", nm: "ETL / ELT", sub: "Pipelines" },
        { ic: "📦", nm: "Parquet", sub: "Columnar" },
      ],
    },
    {
      title: "Análisis & BI",
      items: [
        { ic: "📈", nm: "Tableau", sub: "Dashboards" },
        { ic: "🐼", nm: "Pandas", sub: "Data wrangling" },
        { ic: "🔢", nm: "NumPy", sub: "Cómputo numérico" },
        { ic: "📓", nm: "Jupyter", sub: "Notebooks" },
        { ic: "🧪", nm: "A/B testing", sub: "Experimentos" },
        { ic: "🎯", nm: "Atribución", sub: "Multi-touch" },
      ],
    },
    {
      title: "IA & Agentes autónomos",
      items: [
        { ic: "🤖", nm: "Claude / Anthropic API", sub: "LLM" },
        { ic: "🧠", nm: "Agentes autónomos", sub: "Loop · memoria" },
        { ic: "🧩", nm: "MCP", sub: "Model Context Protocol" },
        { ic: "🔎", nm: "RAG", sub: "Retrieval + contexto" },
        { ic: "🧬", nm: "Embeddings / Vector DB", sub: "Búsqueda semántica" },
        { ic: "🛠️", nm: "Tool-calling", sub: "Acciones" },
        { ic: "✍️", nm: "Prompt engineering", sub: "Diseño" },
      ],
    },
    {
      title: "Software & APIs",
      items: [
        { ic: "⚛️", nm: "React", sub: "Frontend" },
        { ic: "💨", nm: "Vite", sub: "Build" },
        { ic: "🟩", nm: "Node.js", sub: "Backend" },
        { ic: "🔌", nm: "REST / Webhooks", sub: "Integración" },
        { ic: "⚙️", nm: "n8n", sub: "Orquestación" },
        { ic: "🟠", nm: "HubSpot / Intercom API", sub: "CRM · soporte" },
      ],
    },
    {
      title: "Infra & DevOps",
      items: [
        { ic: "☁️", nm: "AWS", sub: "EC2 · S3 · SSM" },
        { ic: "🐳", nm: "Docker", sub: "Contenedores" },
        { ic: "🐧", nm: "Linux", sub: "Servidores" },
        { ic: "🐙", nm: "Git / GitHub Actions", sub: "CI/CD" },
        { ic: "▲", nm: "Vercel", sub: "Deploy" },
        { ic: "🌐", nm: "Nginx", sub: "Reverse proxy" },
        { ic: "🔐", nm: "SSH", sub: "Infra segura" },
      ],
    },
  ],

  // Lo que construyo (tarjetas de capacidad técnica).
  build: [
    {
      ic: "🧠",
      title: "Agentes de IA autónomos",
      featured: true,
      desc: "Agentes que razonan, usan herramientas y actúan solos: orquestados en n8n sobre Claude, con memoria, RAG y tool-calling. Entra un evento por webhook y el agente resuelve la conversación de punta a punta.",
      tags: ["Claude", "Agentes", "MCP", "RAG", "Tool-calling"],
    },
    {
      ic: "⚛️",
      title: "Software full-stack",
      desc: "Interfaces en React + Vite y backends en Node con APIs REST. Del diseño de la UI al deploy en Vercel — dashboards, landings y paneles internos.",
      tags: ["React", "Vite", "Node", "REST", "Vercel"],
    },
    {
      ic: "🗄️",
      title: "Pipelines de datos & data lakes",
      desc: "Ingesta, limpieza y modelado con SQL y Python. Data lakes en S3, warehouses en BigQuery, transformación con dbt y dashboards en Tableau.",
      tags: ["SQL", "Python", "BigQuery", "S3", "dbt", "Tableau"],
    },
    {
      ic: "⚙️",
      title: "Sistemas de automatización",
      desc: "+100 flujos en producción que conectan CRM, mensajería y herramientas internas. Webhooks, colas, reintentos y lógica determinista — cero trabajo manual.",
      tags: ["n8n", "Webhooks", "HubSpot", "WhatsApp API", "cron"],
    },
    {
      ic: "🔌",
      title: "Integraciones & APIs",
      desc: "Sincronización entre sistemas vía REST y webhooks: HubSpot, Intercom, Slack, Meta, Calendly. APIs idempotentes y contratos claros entre servicios.",
      tags: ["REST", "Webhooks", "HubSpot", "Intercom", "Slack"],
    },
    {
      ic: "☁️",
      title: "Infra & cloud",
      desc: "Despliegue y operación en AWS y Vercel: contenedores Docker, servidores Linux, CI/CD con GitHub Actions y acceso seguro por SSH/VPN.",
      tags: ["AWS", "Docker", "Linux", "GitHub Actions", "SSH"],
    },
  ],

  education: {
    degree: "Ing. en Data Analysis",
    school: "Tec de Monterrey",
    focus: "Concentración: IA para los Negocios",
  },

  links: {
    linkedin: "https://www.linkedin.com/in/christiangtzb",
    linkedinLabel: "linkedin.com/in/christiangtzb",
    email: "hola@christiangtzb.com",
    whatsapp: "https://wa.me/528180502810",
  },

  // Cierre: el diferenciador — ingeniería + producto + inteligencia comercial.
  combine: {
    eyebrow: "El diferenciador",
    title: "Ingeniería + Producto + Inteligencia comercial",
    intro:
      "Mi ventaja no es solo escribir código: es entender el negocio que hay detrás y liderar a quienes lo construyen. Vengo del marketing y las ventas, aprendí a hacer producto, me volví ingeniero y hoy lidero equipos de automatización. Combino cosas que pocos perfiles reúnen.",
    pillars: [
      {
        ic: "🛠️",
        title: "Ingeniería",
        desc: "Data engineering, agentes de IA, software full-stack e infraestructura. Del modelado de datos y el diseño de sistemas hasta el deploy en producción.",
        tags: ["Data Eng", "IA", "Full-stack", "Infra", "APIs", "Cloud"],
      },
      {
        ic: "🧭",
        title: "Producto",
        desc: "Traduzco negocio en producto: discovery, priorización, definición de métricas, UX y roadmap. Decido qué construir, qué no y por qué.",
        tags: ["Discovery", "Métricas", "UX", "Roadmap", "Estrategia"],
      },
      {
        ic: "📈",
        title: "Inteligencia comercial",
        desc: "Vengo del marketing y las ventas: performance marketing, paid media, growth, CRM y atribución. Sé de dónde vienen los ingresos y cómo moverlos.",
        tags: ["Paid Media", "Growth", "Ventas", "CRM", "Atribución"],
      },
    ],
    lead: {
      ic: "👥",
      title: "Liderando equipos de automatización",
      desc: "Como Tech Lead dirijo la operación de automatización: +100 flujos en producción, mentoría técnica al equipo, estándares de calidad y code review, y conferencias de IA para +100 personas. Convierto procesos manuales en sistemas que el equipo mantiene y escala.",
      tags: ["Tech Lead", "Equipos", "Mentoría", "+100 flujos", "Estándares", "Conferencias"],
    },
    proof: [
      "+$11M MXN en ventas generadas desde ads",
      "22x ROAS máximo · ↓85% CPL",
      "+100 flujos de automatización en producción",
      "Equipo de automatización a cargo",
      "Conferencias de IA para +100 personas",
      "2× columnista en El Financiero · Bloomberg",
    ],
    closing:
      "Ingeniero que piensa como product manager, entiende el negocio como comercial y lidera al equipo. Ahí está la diferencia.",
  },
};

export const contact = {
  label: "Contacto",
  title: "¿Tienes un proyecto en mente?",
  intro:
    "Combino ingeniería de datos con estrategia de performance. Si buscas resultados medibles y decisiones basadas en evidencia, hablemos.",
  methods: [
    { ic: "✉️", lab: "Email directo", val: "hola@christiangtzb.com", href: "mailto:hola@christiangtzb.com" },
    { ic: "💬", lab: "WhatsApp · respondo en <24h", val: "+52 818 050 2810", href: "https://wa.me/528180502810" },
    { ic: "🔗", lab: "LinkedIn", val: "christiangtzb", href: "https://www.linkedin.com/in/christiangtzb" },
  ],
  asideTitle: "Disponible para colaborar",
  asideText:
    "Tomo proyectos de data analysis, paid media y automatización para marcas en LATAM. Respondo en menos de 24 horas.",
  checklist: [
    "Análisis de datos y dashboards BI (Tableau / SQL)",
    "Gestión de campañas Meta / Google Ads",
    "Setup e integración de CRM + lead scoring",
    "Flujos de automatización (n8n / Zapier / HubSpot)",
    "Auditoría de tracking, pixel y atribución",
    "Consultoría de estrategia digital basada en datos",
  ],
};

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
  portrait: "/images/portrait.png",
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
      desc: "Lidero +100 flujos de operación en una de las startups más reconocidas de México. Equipo a cargo, conferencias de IA para más de 100 personas — y apenas voy en los 24.",
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
  title: "Cuatro formas de meterle tracción a tu negocio.",
  sub: "Desde aumentar tus ventas sin que pagues un peso fijo, hasta un agente de IA que prospecta por ti. Cada una se diseñó para un momento distinto de tu negocio.",
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
      cta: { label: "Solicitar consultoría", href: "https://wa.me/528180502810", external: true },
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
    {
      icon: "🤖",
      name: "Clivia",
      tag: "Próximamente · El producto clave",
      price: "Próximamente",
      variant: "mint",
      desc: "Un agente de IA que vende por ti: llamadas, videollamadas, WhatsApp y correos a tus prospectos. Sin que toques un solo botón. El producto al que estoy apostando todo.",
      tags: ["Agente IA", "Multi-canal", "Próximamente"],
      cta: { label: "Únete a la lista", href: "https://wa.me/528180502810", external: true },
      featured: true,
    },
  ],
};

export const conferences = {
  kicker: "Una conferencia menos",
  title: "Llevo los datos al escenario.",
  sub: "Charlas sobre performance marketing, analítica e IA aplicada a negocios — claras, accionables y con ejemplos reales. Para equipos de marketing, ventas y founders que quieren decidir con evidencia, no con intuición.",
  photo: "/images/talk-1.png",
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

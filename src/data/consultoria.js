// Contenido de la landing /consultoria — sesiones 1-1 (Claude Code / IA, marketing, negocio, ROI).
// CTA directo a Calendly. Precio como "desde $X".

export const CALENDLY_URL = "https://calendly.com/hola-christiangtzb/30min";
export const WHATSAPP_URL =
  "https://wa.me/528180502810?text=" +
  encodeURIComponent("Hola Christian, me interesa una sesión 1-1 de consultoría.");

export const PRICE_FROM = "$1,899";

export const consHero = {
  kicker: "Sesiones 1-1 · Claude Code · Marketing · Negocio · ROI",
  title: [
    { t: "Una sesión 1-1 para que la IA, tu marketing y tus números " },
    { t: "trabajen para ti", accent: true },
    { t: "." },
  ],
  sub: [
    { t: "Llegas con un problema real de tu negocio y sales con un " },
    { t: "plan de acción por escrito", accent: true },
    { t: ": qué automatizar con Claude Code, qué campañas correr y qué número mover primero." },
  ],
  cta: `Agenda tu sesión — desde ${PRICE_FROM}`,
  proof: [
    "🎤 +1,000 personas en conferencias de IA",
    "📰 2× El Financiero · Bloomberg",
    "⚙️ +100 flujos en producción",
    "🏢 +20 negocios acompañados",
  ],
  portrait: "/images/hero-nuevo.png",
};

export const consFit = {
  kicker: "¿Para quién es?",
  title: "Para founders que quieren resultados, no otro curso.",
  yes: {
    title: "✅ Es para ti si…",
    points: [
      "Eres founder o dueño de PyME / SaaS en México y facturas +$50k MXN al mes.",
      "Quieres usar Claude Code o IA en tu operación y no sabes por dónde empezar.",
      "Inviertes en Meta Ads y no tienes claro tu CPL, ROAS o payback.",
      "Tu equipo hace tareas manuales que podrían automatizarse.",
    ],
  },
  no: {
    title: "❌ No es para ti si…",
    points: [
      "Buscas teoría o una certificación.",
      "No tienes un negocio operando todavía.",
      "Quieres que alguien más lo haga sin involucrarte.",
    ],
  },
};

export const consPillars = {
  kicker: "Los 4 pilares",
  title: [
    { t: "De qué hablamos en la " },
    { t: "sesión", accent: true },
    { t: "." },
  ],
  items: [
    {
      icon: "🤖",
      title: "Claude Code e IA",
      desc: "Automatiza procesos, crea agentes y construye landings y herramientas internas sin contratar un equipo de desarrollo.",
      points: ["Agentes y automatizaciones (n8n, APIs)", "Landings y herramientas internas", "Horas a la semana de vuelta"],
    },
    {
      icon: "📣",
      title: "Marketing",
      desc: "Campañas de Meta Ads que venden, con medición bien hecha desde el clic hasta el cierre.",
      points: ["Meta Ads + Pixel + CAPI", "Embudos y landings de conversión", "Creativos que convierten"],
    },
    {
      icon: "🧭",
      title: "Negocio",
      desc: "Oferta, pricing y operación comercial para que los leads se vuelvan clientes.",
      points: ["Oferta y pricing", "Lead scoring y CRM (HubSpot)", "Procesos de venta"],
    },
    {
      icon: "📈",
      title: "ROI",
      desc: "Aprende a leer tus números y a decidir con datos qué escalar y qué apagar.",
      points: ["CPL, ROAS y payback", "MRR y LTV", "Dashboards simples"],
    },
  ],
};

// Conferencias / capacitación corporativa (Grupo PISSA).
export const consTalks = {
  kicker: "Conferencias y capacitación",
  title: [
    { t: "He llevado la IA a " },
    { t: "+1,000 personas", accent: true },
    { t: " en empresas líderes." },
  ],
  sub: "Con Grupo PISSA he dado conferencias y talleres de IA aplicada a equipos de grandes empresas y gobierno: cómo usar la IA en el trabajo diario, automatizar procesos y decidir con datos. Lo mismo que llevas a tu sesión 1-1, en formato personal.",
  stats: [
    { value: 1000, prefix: "+", lab: "personas capacitadas en IA" },
    { value: 2, suffix: "×", lab: "columnista en El Financiero · Bloomberg" },
  ],
  orgs: ["Grupo PISSA", "Bimbo", "Nestlé", "Brocar", "Gobierno del Estado de México"],
  photo: "/images/talk-1.png",
  video: { url: "https://www.youtube.com/watch?v=zVXS2drk-8s", label: "Mira una de mis charlas" },
};

export const consStats = {
  kicker: "Resultados",
  title: "Lo que ya funcionó en negocios reales.",
  items: [
    { value: 22, suffix: "x", lab: "ROAS · Cirque du Soleil Joya" },
    { value: 85, prefix: "↓", suffix: "%", lab: "costo por lead · Doorvel" },
    { value: 10, suffix: "x", lab: "retorno a 12 meses en MRR · Lasso (julio)" },
    { value: 100, prefix: "+", lab: "flujos de automatización en producción" },
  ],
};

// ---------- Casos con gráficas ----------
// Lasso: reportes Meta Ads mayo–julio 2026 (public/lasso-reports).
export const consLasso = {
  kicker: "Caso · Lasso (SaaS)",
  title: "Meta Ads para un SaaS: de lead a MRR en 3 meses.",
  sub: "Campañas, medición y seguimiento por giro. Cifras reales en MXN, mayo a julio 2026.",
  monthly: {
    title: "Inversión vs MRR nuevo por mes",
    unit: "MXN",
    groups: [
      { label: "Mayo", values: [7848, 13496] },
      { label: "Junio", values: [11334, 8289] },
      { label: "Julio", values: [12552, 10713] },
    ],
    series: ["Inversión", "MRR nuevo"],
  },
  leads: {
    title: "Leads por mes",
    items: [
      { label: "Mayo", value: 51 },
      { label: "Junio", value: 59 },
      { label: "Julio", value: 79 },
    ],
  },
  payback: {
    title: "MRR activo vs inversión acumulada",
    caption: "Al tercer mes el MRR activo ($32.5k/mes) ya superó todo lo invertido ($31.7k): se recupera en ~1 mes.",
    labels: ["Mayo", "Junio", "Julio"],
    series: [
      { name: "MRR activo", values: [13496, 21785, 32498], accent: true },
      { name: "Inversión acumulada", values: [7848, 19182, 31734] },
    ],
  },
  projection: {
    title: "Proyección de MRR · cohorte de julio",
    caption: "Si los clientes de julio se mantienen 12 meses: $10.7k → $128.5k acumulados (10.2x sobre la inversión).",
    labels: ["M1", "M2", "M3", "M4", "M5", "M6", "M7", "M8", "M9", "M10", "M11", "M12"],
    series: [
      {
        name: "MRR acumulado",
        values: Array.from({ length: 12 }, (_, i) => 10713 * (i + 1)),
        accent: true,
      },
      { name: "Inversión julio", values: Array.from({ length: 12 }, () => 12552) },
    ],
  },
  closeRate: {
    title: "Tasa de cierre por giro",
    items: [
      { label: "Restaurantes", value: 9 },
      { label: "Cafeterías", value: 8 },
      { label: "Fitness", value: 0 },
      { label: "Servicios", value: 0 },
    ],
    caption: "Leer esto a tiempo cambia a quién le hablas: el presupuesto se movió a los giros que sí cierran.",
  },
};

export const consCases = {
  kicker: "Más casos",
  title: "Distintos giros, el mismo método: medir, automatizar, escalar.",
  doorvel: {
    name: "Doorvel",
    tag: "Proptech · RE/MAX, C21, Realty World",
    image: "/images/doorvel.png",
    desc: "Rediseño de campañas y medición para inmobiliarias en México y EE. UU.",
    chart: {
      title: "Costo por lead (MXN)",
      items: [
        { label: "Antes", value: 2000 },
        { label: "Después", value: 300, accent: true },
      ],
      prefix: "$",
    },
  },
  residenzo: {
    name: "Residenzo",
    tag: "Desarrollo inmobiliario",
    image: "/images/residenzo-landing.png",
    desc: "Una landing por propiedad, CRM a la medida y Meta CAPI conectado al cierre.",
    highlight: { val: "$5M", lab: "vendidos en 2 semanas" },
  },
  roas: {
    title: "ROAS por cliente",
    items: [
      { label: "Cirque du Soleil Joya", value: 22, accent: true },
      { label: "Ssiento", value: 11.4 },
      { label: "Lasso (12 meses, julio)", value: 10.2 },
      { label: "Promedio inmobiliario", value: 3.8 },
    ],
    suffix: "x",
    caption: "Cirque: $11M MXN en ventas con $500k de pauta. Ssiento: $400k con $35k.",
  },
  more: [
    {
      name: "Retenia",
      tag: "Retención de clientes",
      desc: "Sitio, popup de captura → n8n → Calendly con calificación previa, y pixel de Meta. Construido con Claude Code.",
    },
    {
      name: "Magno",
      tag: "Propuesta comercial",
      desc: "Propuesta con proyección de pauta, embudo y automatización. Ejemplo ilustrativo del entregable que te llevas.",
    },
    {
      name: "Leadsales",
      tag: "SaaS · Automatización",
      desc: "+100 flujos en producción, lead scoring A–E y 4 variantes de embudo con 100% de los leads automatizados.",
    },
  ],
};

export const consCalc = {
  kicker: "Calculadora",
  title: "¿Cuánto vale para ti?",
  note: "Ejemplo ilustrativo. Tus resultados dependen de tu negocio; en la sesión lo calculamos con tus números reales.",
};

export const consSteps = {
  kicker: "Cómo funciona",
  title: "4 pasos, cero rodeos.",
  steps: [
    { num: "01", icon: "📅", title: "Agenda", desc: "Eliges horario en Calendly y reservas tu sesión." },
    { num: "02", icon: "📝", title: "Cuestionario previo", desc: "Me cuentas tu negocio, tus números y tu reto principal para llegar preparado." },
    { num: "03", icon: "🎥", title: "Sesión 1-1", desc: "60–90 minutos de trabajo enfocado: diagnóstico y soluciones concretas, en vivo." },
    { num: "04", icon: "🗺️", title: "Plan y seguimiento", desc: "Recibes un plan de acción por escrito con prioridades y un seguimiento para resolver dudas." },
  ],
};

export const consPricing = {
  kicker: "Inversión",
  price: PRICE_FROM,
  unit: "MXN por sesión",
  includes: [
    "Sesión 1-1 de 60–90 min (online)",
    "Cuestionario y revisión previa de tu negocio",
    "Plan de acción por escrito",
    "Seguimiento por WhatsApp",
  ],
  note: "Paquetes y mentoría para equipos de +10 personas: lo vemos en la sesión.",
};

export const consFaq = {
  kicker: "Preguntas frecuentes",
  title: "Antes de agendar.",
  items: [
    {
      q: "¿Necesito saber programar para usar Claude Code?",
      a: "No. Te enseño a usarlo para tareas reales de tu negocio. Si sabes escribir un correo claro, puedes darle instrucciones.",
    },
    {
      q: "¿Sirve para mi giro?",
      a: "He trabajado con SaaS, inmobiliarias, restaurantes, entretenimiento y servicios. Si tienes ventas y procesos, hay algo que mejorar.",
    },
    {
      q: "¿Qué me llevo de la sesión?",
      a: "Un plan de acción por escrito con prioridades, herramientas y los números a medir. Nada de teoría.",
    },
    {
      q: "¿Es online o presencial?",
      a: "Online por videollamada. Presencial en Monterrey se puede coordinar.",
    },
    {
      q: "¿Y si necesito que lo implementes?",
      a: "Si después de la sesión quieres que lo construya contigo, te propongo un alcance aparte.",
    },
    {
      q: "¿Puedo traer a mi equipo?",
      a: "Sí. Para equipos de +10 personas hay un formato de mentoría; pregúntame en la sesión.",
    },
  ],
};

export const consWhoami = {
  name: "Christian Gutiérrez",
  role: "IA aplicada · Meta Ads · Automatización",
  portrait: "/images/portrait.png",
  bio: "Tech Lead de automatización en Leadsales (+100 flujos en producción). Ing. en Data Analysis por el Tec de Monterrey, 2× columnista en El Financiero · Bloomberg y speaker de IA para +1,000 personas en empresas como Bimbo, Nestlé y Brocar. Ingeniero de datos que hace vender.",
};

export const consCta = {
  title: "Tu próximo paso es una conversación.",
  sub: "Agenda tu sesión 1-1 y sal con un plan concreto para tu negocio.",
};

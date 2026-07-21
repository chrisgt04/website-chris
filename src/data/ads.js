// Contenido de la landing /ads (servicio de ads por comisión) + formulario matón.

// Cambia esto por tu Calendly real cuando lo tengas.
export const CALENDLY_URL = "https://calendly.com/christiangtzb/ads-demo";
export const WHATSAPP_NUMBER = "528180502810";

export const adsLanding = {
  kicker: "Ads por comisión · Solo México · Por aplicación",
  title: [
    { t: "Gestiono tus ads. Si no " },
    { t: "vendes", accent: true },
    { t: ", no " },
    { t: "pagas", accent: true },
    { t: "." },
  ],
  sub: [
    { t: "Cero fee fijo. Solo cobro comisión sobre las " },
    { t: "ventas que genero", accent: true },
    { t: ". Para startups y SaaS que ya facturan $50k+ al mes." },
  ],
  cta: "Aplicar en 60 segundos",
  proof: [
    { val: "$11M", lab: "MXN generados desde ads" },
    { val: "22x", lab: "ROAS máximo (Ssiento)" },
    { val: "↓85%", lab: "reducción de CPL (Doorvel)" },
    { val: "20+", lab: "negocios ya confían en mí" },
  ],
};

// Sección "enemigo común" — agita el dolor antes de presentar el mecanismo.
export const adsEnemy = {
  kicker: "El problema",
  title: [
    { t: "Tu agencia cobra igual si " },
    { t: "vendes o no", accent: true },
    { t: "." },
  ],
  desc: "Fee fijo de $30, $50 mil al mes, prenden campañas y rezan. El riesgo es 100% tuyo. Yo lo hago al revés: si no genero ventas, no me pagas.",
};

// Quién soy — enfocado en logros y números, no en bio genérica.
export const adsWhoami = {
  kicker: "Quién está detrás",
  title: [
    { t: "No es una agencia. Soy " },
    { t: "yo", accent: true },
    { t: ", y estos son mis números." },
  ],
  portrait: "/images/portrait.png",
  paragraphs: [
    "He generado <strong>+$11M MXN en ventas</strong> desde ads y llevado cuentas hasta <strong>22x de ROAS</strong>. En una, bajé el costo por lead <strong>85%</strong> — de $2,000 a $300. No son promesas: son cuentas que operé de principio a fin.",
    "He trabajado <strong>+20 negocios</strong> en industrias muy distintas: entretenimiento premium (Cirque du Soleil Joya), PropTech (Doorvel, MX + USA), <strong>SaaS B2B</strong>, mobiliario, energía solar, fintech y más. Sé mover el número sin importar el vertical.",
    "En <strong>automatización</strong> conecto ads, datos y CRM: lead scoring automático, <strong>+100 flujos</strong> de operación y 100% de leads calificados sin trabajo manual. Optimizo con SQL y atribución real, no con corazonadas.",
  ],
  chips: [
    "+$11M MXN en ventas generadas",
    "22x ROAS máximo",
    "↓85% CPL · $2,000 → $300",
    "+20 negocios · múltiples industrias",
    "+100 flujos de automatización",
    "Ing. Data Analysis · Tec de Monterrey",
    "2× El Financiero · Bloomberg",
  ],
};

export const adsResults = {
  kicker: "Resultados reales",
  title: "Los números que respaldan el modelo.",
  sub: "Casos con métricas concretas — porque en comisión, los resultados son lo único que importa.",
  trust: "+20 negocios ya confían en mí",
  // Tarjeta extra (además de las de content.js) para cerrar la cuadrícula.
  extra: [
    {
      initials: "AE",
      name: "Alvah Energy",
      cat: "Energía Solar · B2B + B2C",
      metrics: [
        { val: "↓CPL", lab: "costo por lead" },
        { val: "Auto", lab: "nurturing WhatsApp + CRM" },
        { val: "Ciclo largo", lab: "venta optimizada" },
      ],
    },
  ],
};

export const adsPress = {
  kicker: "En los medios",
  title: "2× en El Financiero · Bloomberg.",
  sub: "Uno de los medios económicos más importantes de México. También llevo los datos al escenario en conferencias de performance e IA.",
  press: "/images/02.jpg",
  talk: "/images/talk-2.png",
};

export const adsWhy = {
  kicker: "Por qué comisión",
  title: "El riesgo lo pongo yo, no tú.",
  cards: [
    {
      icon: "🚫",
      title: "$0 de anticipo",
      desc: "No pagas fee fijo ni setup. Empiezo a trabajar y solo cobro cuando genero resultados medibles.",
    },
    {
      icon: "📊",
      title: "Ingeniero de datos, no un media buyer",
      desc: "Optimizo con SQL, atribución multi-touch y CAPI — no con corazonadas. Ing. en Data Analysis (Tec de Monterrey).",
    },
    {
      icon: "🎯",
      title: "Solo negocios que ya facturan",
      desc: "Como cobro sobre resultados, trabajo con quienes ya venden y tienen con qué escalar. Por eso es por aplicación.",
    },
  ],
};

export const adsSteps = {
  kicker: "Cómo funciona",
  title: "De aplicación a resultados en 4 pasos.",
  steps: [
    { num: "01", title: "Aplicas", desc: "Contestas el formulario de abajo (60 seg). Ahí veo si tu negocio califica para el modelo por comisión." },
    { num: "02", title: "Diagnóstico", desc: "Audito tu tracking, cuentas y CRM. No se invierte un peso en tráfico hasta que los datos sean confiables." },
    { num: "03", title: "Lanzamos", desc: "Estrategia, creativos y campañas Meta con foco en CPL, ROAS y escala. Setup técnico completo (Pixel, CAPI, GTM)." },
    { num: "04", title: "Cobro comisión", desc: "Solo pago sobre las ventas/resultados generados. Reportes claros con la métrica que sí importa." },
  ],
};

export const adsFaq = {
  kicker: "Antes de que preguntes",
  title: "Las 3 dudas de siempre.",
  items: [
    {
      q: "¿Cuánto es la comisión?",
      a: "Depende de tu ticket y volumen — lo definimos en la llamada. Siempre es un % sobre resultados incrementales, sin fee fijo ni anticipo.",
    },
    {
      q: "¿Y si ya tengo una agencia?",
      a: "Perfecto. Audito lo que traes hoy y te digo con datos qué se puede mejorar. Muchos llegan justamente porque su agencia cobra fijo y no rinde.",
    },
    {
      q: "¿Qué necesito para empezar?",
      a: "Que ya factures ($50k+/mes) y tengas cómo cerrar los leads. Yo me encargo del resto: tracking, creativos, campañas y optimización.",
    },
  ],
};

// Formulario matón — calificador multipaso. La última pantalla arma el link de Calendly.
export const adsForm = {
  kicker: "Aplica ahora",
  title: "¿Califica tu negocio?",
  sub: "60 segundos. Si calificas, agendas una llamada conmigo con tu contexto ya listo.",
  steps: [
    {
      id: "tipo",
      q: "¿Qué vendes?",
      options: [
        "SaaS / software",
        "Servicio digital (agencia, consultoría, infoproducto)",
        "Producto físico / e-commerce",
        "Otro",
      ],
    },
    {
      id: "facturacion",
      q: "¿Cuánto facturas al mes (MXN)?",
      hint: "Esto define si el modelo por comisión tiene sentido para ambos.",
      options: [
        "Menos de $50k",
        "$50k – $150k",
        "$150k – $500k",
        "Más de $500k",
      ],
    },
    {
      id: "ticket",
      q: "¿Cuánto vale en promedio una venta o cliente nuevo (MXN)?",
      options: [
        "Menos de $1k",
        "$1k – $10k",
        "$10k – $50k",
        "Más de $50k",
      ],
    },
    {
      id: "ads_hoy",
      q: "¿Inviertes hoy en ads?",
      options: [
        "No, nunca he invertido",
        "Sí, pero sin buenos resultados",
        "Sí, con buenos resultados",
        "Lo maneja una agencia",
      ],
    },
    {
      id: "inversion",
      q: "¿Cuánto inviertes al mes en ads (MXN)?",
      options: [
        "Nada aún",
        "Menos de $30k",
        "$30k – $100k",
        "Más de $100k",
      ],
    },
    {
      id: "proceso",
      q: "¿Ya tienes un proceso de venta para cerrar los leads?",
      hint: "Yo traigo los leads; alguien tiene que cerrarlos.",
      options: [
        "Sí, tengo equipo de ventas / CRM",
        "Sí, yo mismo cierro",
        "Informal / apenas empezando",
        "No, todavía no",
      ],
    },
    {
      id: "meta",
      q: "¿Cuál es tu meta principal?",
      options: [
        "Más leads calificados",
        "Más ventas / MRR",
        "Bajar mi CPA / CPL",
        "Escalar lo que ya funciona",
      ],
    },
    {
      id: "urgencia",
      q: "¿Cuándo quieres empezar?",
      options: [
        "Ya, lo antes posible",
        "Este mes",
        "En 1–3 meses",
        "Solo estoy explorando",
      ],
    },
  ],
  // Campos de contacto en el último paso.
  contact: [
    { id: "nombre", label: "Tu nombre", type: "text", placeholder: "Nombre y apellido", required: true },
    { id: "email", label: "Email", type: "email", placeholder: "tu@empresa.com", required: true },
    { id: "empresa", label: "Empresa", type: "text", placeholder: "Nombre de tu startup / SaaS", required: true },
    { id: "sitio", label: "Sitio web (opcional)", type: "text", placeholder: "tuempresa.com", required: false },
  ],
};

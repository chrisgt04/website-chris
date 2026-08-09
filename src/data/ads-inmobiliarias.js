// Contenido de la landing /inmobiliarias — Meta Ads para inmobiliarias, modelo 100% comisión.
// Deriva de ads.js pero reorienta el ICP a inmobiliarias y envía el lead a n8n (no a Calendly).

export const WHATSAPP_NUMBER = "528180502810";

// Webhook de n8n que recibe el lead → HubSpot (contacto + deal) → notificación.
export const WEBHOOK_URL = "https://lassomkt.app.n8n.cloud/webhook/0d0ca5ef-2cab-43be-8309-cdeffaeda7ef";

export const inmoLanding = {
  kicker: "Meta Ads para inmobiliarias · Solo México · Por aplicación",
  title: [
    { t: "Vende más propiedades sin pagar " },
    { t: "honorarios", accent: true },
    { t: " de agencia." },
  ],
  sub: [
    { t: "Monto y opero tus campañas de Facebook e Instagram. Cero honorario mensual. Tú pones la pauta (va directo a Meta) y yo solo gano un " },
    { t: "% de tu comisión cuando se cierra una venta", accent: true },
    { t: ". Si no vendes, no me pagas." },
  ],
  cta: "Aplicar en 60 segundos",
  proof: [
    { val: "$5M", lab: "vendido en 2 semanas (Residenzo)" },
    { val: "↓85%", lab: "costo por lead ($2,000 → $300)" },
    { val: "$2.5M", lab: "MXN en pauta gestionada" },
    { val: "3.8x", lab: "ROAS promedio" },
  ],
};

// Enemigo común — agita el dolor del modelo de agencia tradicional.
export const inmoEnemy = {
  kicker: "El problema",
  title: [
    { t: "Tu agencia cobra igual si " },
    { t: "vendes o no", accent: true },
    { t: "." },
  ],
  desc: "Honorario fijo mes con mes, pase lo que pase. El riesgo es 100% tuyo. Yo lo hago al revés: solo cobro cuando se cierra una venta.",
};

// Confianza — inmobiliarias con las que ya se trabajó (vía Doorvel).
export const inmoTrust = {
  kicker: "Confianza",
  title: "Inmobiliarias que ya confían en el sistema.",
  sub: "Con Doorvel llevamos campañas inmobiliarias a nivel nacional para las marcas más reconocidas de México — propiedades de $3M a $50M+ MXN.",
  chips: [
    "🏠 RE/MAX",
    "🔑 Century 21",
    "🌐 Realty World",
    "⭐ Realty Experts",
    "🏢 Top Brokers Network",
    "🇲🇽 + inmobiliarias en toda la República",
  ],
};

// Resultados reales — casos inmobiliarios concretos (no el portafolio general).
export const inmoResults = {
  kicker: "Resultados reales",
  title: "Los números que respaldan el modelo.",
  sub: "Casos inmobiliarios con métricas concretas — porque en comisión, los resultados son lo único que importa.",
  trust: "+$2.5M MXN en pauta inmobiliaria gestionada",
  cards: [
    {
      initials: "RZ",
      name: "Residenzo",
      cat: "Desarrollo inmobiliario · México",
      metrics: [
        { val: "$5M", lab: "vendido en 2 semanas" },
        { val: "Landing", lab: "de compra por propiedad" },
        { val: "CRM", lab: "hecho a la medida" },
      ],
    },
    {
      initials: "DV",
      name: "Doorvel",
      cat: "PropTech · Real Estate · MX + USA",
      metrics: [
        { val: "↓85%", lab: "costo por lead" },
        { val: "$300", lab: "MXN CPL final" },
        { val: "Nacional", lab: "RE/MAX · C21 · Realty World" },
      ],
    },
    {
      initials: "🇲🇽",
      name: "Campañas en todo México",
      cat: "Inmobiliarias · alto ticket",
      metrics: [
        { val: "3.8x", lab: "ROAS promedio" },
        { val: "Ciudad", lab: "segmentación local por zona" },
        { val: "Calificados", lab: "compradores, no curiosos" },
      ],
    },
  ],
};

// Banda de stats con clientes + íconos.
export const inmoStats = {
  kicker: "Los números",
  title: "Todo lo que respalda el modelo.",
  sub: "Cuentas que operé de principio a fin — no promesas. Estos son mis números con clientes reales.",
  items: [
    { icon: "💰", val: "$11M", lab: "MXN en ventas generadas desde ads" },
    { icon: "📉", val: "↓85%", lab: "reducción de costo por lead — Doorvel ($2,000 → $300)" },
    { icon: "🏆", val: "$5M", lab: "vendido en 2 semanas — Residenzo" },
    { icon: "📈", val: "3.8x", lab: "ROAS promedio en campañas inmobiliarias" },
    { icon: "🤝", val: "9+", lab: "clientes en portafolio · múltiples industrias" },
    { icon: "📰", val: "2×", lab: "El Financiero · Bloomberg" },
  ],
};

// Gráficas de resultados (barras CSS on-brand).
export const inmoCharts = {
  kicker: "Resultados que se ven",
  title: "Los números, en gráfica.",
  cpl: {
    icon: "📉",
    label: "Costo por lead — Doorvel",
    delta: "↓85%",
    bars: [
      { lab: "Antes", val: "$2,000", pct: 100, muted: true },
      { lab: "Con Christian", val: "$300", pct: 15, muted: false },
    ],
  },
  roas: {
    icon: "📈",
    label: "Retorno sobre inversión (ROAS)",
    delta: "3.8x",
    bars: [
      { lab: "Promedio de industria", val: "~1.5x", pct: 39, muted: true },
      { lab: "Mis campañas inmobiliarias", val: "3.8x", pct: 100, muted: false },
    ],
  },
};

// Visual "solo pagas cuando vendes" — comparación mes a mes.
export const inmoCostViz = {
  kicker: "Cero riesgo para ti",
  title: "Lo que pagas cada mes.",
  caption:
    "Empiezas a vender desde el primer mes. No pagas honorario — solo un % de cada venta que se cierra.",
  months: ["Mes 1", "Mes 2", "Mes 3", "Mes 4", "Mes 5", "Mes 6"],
  rows: [
    {
      label: "Agencia tradicional",
      sublabel: "honorario fijo todos los meses",
      cells: [
        { on: true, tag: "$$" },
        { on: true, tag: "$$" },
        { on: true, tag: "$$" },
        { on: true, tag: "$$" },
        { on: true, tag: "$$" },
        { on: true, tag: "$$" },
      ],
    },
    {
      label: "Este modelo",
      sublabel: "vendes desde el mes 1 · solo % por venta",
      neo: true,
      cells: [
        { on: true, tag: "🎯 1ª venta" },
        { on: true, tag: "%" },
        { on: true, tag: "%" },
        { on: true, tag: "%" },
        { on: true, tag: "%" },
        { on: true, tag: "%" },
      ],
    },
  ],
};

// Prensa — El Financiero · Bloomberg (Sección Monterrey, Panorama Inmobiliario).
export const inmoPress = {
  kicker: "En los medios",
  title: "2× en El Financiero · Bloomberg.",
  sub: "Uno de los medios económicos más importantes de México — en la Sección Monterrey, Panorama Inmobiliario. También llevo los datos al escenario en conferencias de performance e IA.",
  images: ["/images/02.jpg", "/images/talk-2.png"],
  tags: [
    "📰 El Financiero · Bloomberg",
    "🏙️ Panorama Inmobiliario · Monterrey",
    "🎤 Speaker de performance & IA",
  ],
};

// El modelo — el frame de honestidad de "sin costo" en 3 partes + contraste.
export const inmoModel = {
  kicker: "El modelo",
  title: [
    { t: "Sin honorarios. " },
    { t: "Solo gano cuando vendes", accent: true },
    { t: "." },
  ],
  parts: [
    {
      icon: "🚫",
      title: "Lo que NO pagas",
      desc: "Honorario, retainer, setup. Cero.",
    },
    {
      icon: "📣",
      title: "Lo que SÍ pagas",
      desc: "Solo la pauta, directo a Meta y en tu cuenta. Tú la controlas.",
    },
    {
      icon: "🤝",
      title: "Cómo gano yo",
      desc: "Un % de tu comisión, solo por venta cerrada.",
    },
  ],
  note: "La inversión en pauta la pagas tú, directo a Meta, en tu cuenta. Nunca toco tu presupuesto — solo lo optimizo.",
  contrast: {
    old: {
      name: "Agencia tradicional",
      points: [
        "Honorario fijo mes con mes",
        "Cobran vendas o no",
        "El riesgo es 100% tuyo",
        "Alineados con su factura, no con tus ventas",
      ],
    },
    neo: {
      name: "Este modelo",
      points: [
        "Cero honorario de agencia",
        "Solo cobro cuando cierras una venta",
        "El riesgo lo pongo yo",
        "Alineado contigo: gano si tú ganas",
      ],
    },
  },
};

// Por qué la comisión nos alinea.
export const inmoWhy = {
  kicker: "Por qué comisión",
  title: "El riesgo lo pongo yo, no tú.",
  cards: [
    {
      icon: "🎯",
      title: "Incentivos alineados",
      desc: "Un honorario paga por intentar; una comisión, por lograr.",
    },
    {
      icon: "📊",
      title: "Sistema probado",
      desc: "$5M en 2 semanas, ↓85% CPL y 3.8x ROAS con inmobiliarias.",
    },
    {
      icon: "💳",
      title: "Tú controlas el dinero",
      desc: "La pauta vive en tu cuenta de Meta. Ves cada peso.",
    },
    {
      icon: "🔒",
      title: "Selectivo, no masivo",
      desc: "Cupo limitado. Solo con quien puede cerrar.",
    },
  ],
};

// Cómo funciona — pipeline de captura a cierre.
export const inmoSteps = {
  kicker: "Cómo funciona",
  title: "Del anuncio al cierre, un solo sistema.",
  steps: [
    { num: "01", icon: "📣", title: "Anuncio", desc: "Meta Ads segmentados por ciudad y tipo de propiedad." },
    { num: "02", icon: "🧲", title: "Landing por propiedad", desc: "Ficha por propiedad que capta al comprador." },
    { num: "03", icon: "🗂️", title: "CRM al instante", desc: "El lead llega a tu asesor al instante, en caliente." },
    { num: "04", icon: "🤝", title: "Cierre", desc: "Tu equipo cierra. Ahí cobro mi comisión." },
  ],
};

// ¿Para quién es? — pre-califica psicológicamente antes del formulario.
export const inmoFit = {
  kicker: "¿Es para ti?",
  title: "Selectivo por diseño.",
  yes: {
    title: "Es para ti si…",
    points: [
      "Tienes inventario activo de propiedades",
      "Tienes asesores que dan seguimiento y cierran",
      "Tu ticket promedio justifica invertir en pauta",
      "Quieres escalar lo que ya vende",
    ],
  },
  no: {
    title: "No es para ti si…",
    points: [
      "Buscas resultados sin invertir un peso en pauta",
      "No tienes quién cierre los leads que llegan",
      "Vendes una propiedad al año",
      "Solo estás explorando sin intención de arrancar",
    ],
  },
};

// Objeciones — FAQ honesto.
export const inmoFaq = {
  kicker: "Antes de que preguntes",
  title: "Las dudas de siempre.",
  items: [
    {
      q: "Entonces no es realmente gratis, pago la pauta.",
      a: "Correcto, y prefiero decírtelo de frente. La pauta es la inversión en Meta que hace que los anuncios existan — la pagas tú, directo a Meta, en tu cuenta. Lo que no pagas es a mí. Ninguna venta = ningún honorario para mí.",
    },
    {
      q: "¿Cuánto es la comisión?",
      a: "Un % sobre la comisión de cada venta cerrada. El porcentaje exacto lo definimos en la llamada según tu ticket y volumen. Nunca hay fee fijo ni anticipo.",
    },
    {
      q: "¿Cuál es el truco?",
      a: "Que solo funciona si tú cierras. Por eso pregunto por tu inventario y tu equipo de ventas antes de trabajar juntos. Si tú vendes, los dos ganamos; si no, yo pierdo mi tiempo.",
    },
    {
      q: "¿Firmo contrato de exclusividad?",
      a: "No exijo exclusividad de entrada. Definimos qué propiedades entran a campaña y cómo se atribuye cada cierre. Todo claro y por escrito antes de arrancar.",
    },
  ],
};

// Quién soy.
export const inmoWhoami = {
  name: "Christian Gutiérrez",
  role: "Web · Meta Ads · CRM · Automatización",
  portrait: "/images/portrait.png",
  bio: "Ayudo a inmobiliarias y negocios de alto ticket a vender más combinando campañas rentables, landings que convierten y CRM. Como con Residenzo y Doorvel: resultados medibles, no promesas. Ing. en Data Analysis (Tec de Monterrey), 2× columnista en El Financiero · Bloomberg.",
};

// CTA final.
export const inmoCta = {
  title: "¿Listo para vender más sin pagar honorarios?",
  sub: "Aplica abajo. Reviso cada aplicación personalmente y respondo por WhatsApp en menos de 24 h.",
};

// Formulario matón — calificador multipaso enfocado a inmobiliarias.
export const inmoForm = {
  kicker: "Aplica ahora",
  title: "Cuéntame un poco más de ti…",
  sub: "60 segundos. Cupo limitado. Si calificas, te contacto por WhatsApp en menos de 24 h.",
  steps: [
    {
      id: "tipo",
      q: "¿Qué tipo de inmobiliaria eres?",
      options: [
        "Broker independiente",
        "Inmobiliaria con equipo",
        "Desarrollador / constructora",
        "Franquicia (RE/MAX, C21, etc.)",
      ],
    },
    {
      id: "inventario",
      q: "¿Cuántas propiedades tienes en inventario activo?",
      hint: "Entre más inventario, más se puede escalar la pauta.",
      options: ["1–3", "4–10", "11–30", "31–100", "+100"],
    },
    {
      id: "ticket",
      q: "¿Cuál es el precio promedio de una propiedad? (MXN)",
      hint: "Define si la comisión tiene sentido para ambos.",
      options: ["Menos de $1M", "$1M – $3M", "$3M – $6M", "$6M – $12M", "Más de $12M"],
    },
    {
      id: "asesores",
      q: "¿Tienes asesores que den seguimiento y cierren los leads?",
      hint: "Yo traigo los compradores; alguien tiene que cerrarlos.",
      options: [
        "Sí, equipo de ventas dedicado",
        "Sí, yo o 1 persona",
        "No, aún no",
      ],
    },
    {
      id: "ventas_mes",
      q: "¿Cuántas ventas cierras al mes hoy?",
      options: ["0", "1–2", "3–5", "6–10", "+10"],
    },
    {
      id: "leads_hoy",
      q: "¿Cómo consigues leads hoy?",
      options: [
        "Meta Ads propios",
        "Portales (Inmuebles24, etc.)",
        "Referidos",
        "Google",
        "Casi no genero leads",
      ],
    },
    {
      id: "pauta",
      q: "¿Cuánto puedes invertir en pauta al mes? (va directo a Meta)",
      hint: "A mayor inversión, mayor volumen de compradores.",
      options: [
        "Menos de $5,000",
        "$5,000 – $15,000",
        "$15,000 – $30,000",
        "$30,000 – $60,000",
        "Más de $60,000",
      ],
    },
    {
      id: "urgencia",
      q: "¿Cuándo quieres empezar?",
      options: ["Ya, esta semana", "Este mes", "En 1–3 meses", "Solo estoy explorando"],
    },
  ],
  // Campos de contacto en el último paso.
  contact: [
    { id: "nombre", label: "Tu nombre", type: "text", placeholder: "Nombre y apellido", required: true },
    { id: "whatsapp", label: "WhatsApp", type: "tel", placeholder: "+52 55 1234 5678", required: true },
    { id: "email", label: "Correo", type: "email", placeholder: "tu@inmobiliaria.com", required: true },
    { id: "empresa", label: "Nombre de la inmobiliaria", type: "text", placeholder: "Tu inmobiliaria", required: true },
    { id: "ciudad", label: "Ciudad / zona donde operas", type: "text", placeholder: "Ej. Monterrey, Puerto Vallarta", required: true },
  ],
  consent: "Acepto que la inversión en pauta la pago yo directo a Meta.",
};

// Tabla de puntos para el lead_score (0–100). Se recalcula también en n8n.
export const inmoScoring = {
  asesores: {
    "Sí, equipo de ventas dedicado": 30,
    "Sí, yo o 1 persona": 15,
    "No, aún no": 0,
  },
  inventario: {
    "1–3": 2,
    "4–10": 8,
    "11–30": 15,
    "31–100": 20,
    "+100": 25,
  },
  ticket: {
    "Menos de $1M": 0,
    "$1M – $3M": 5,
    "$3M – $6M": 10,
    "$6M – $12M": 15,
    "Más de $12M": 20,
  },
  ventas_mes: {
    "0": 0,
    "1–2": 5,
    "3–5": 10,
    "6–10": 13,
    "+10": 15,
  },
  pauta: {
    "Menos de $5,000": 0,
    "$5,000 – $15,000": 6,
    "$15,000 – $30,000": 10,
    "$30,000 – $60,000": 13,
    "Más de $60,000": 15,
  },
  urgencia: {
    "Ya, esta semana": 10,
    "Este mes": 7,
    "En 1–3 meses": 3,
    "Solo estoy explorando": 0,
  },
};

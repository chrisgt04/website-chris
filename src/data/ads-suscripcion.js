// Contenido de la landing /suscripcion — Meta Ads para negocios de suscripción/recurrencia.
// Modelo: sin honorario; cliente paga la pauta; comisión = % del MRR nuevo por los primeros meses.
// Mismo webhook n8n que inmobiliarias, distinguido por `source: "landing-suscripcion"`.

export const WHATSAPP_NUMBER = "528180502810";
export const WEBHOOK_URL =
  "https://lassomkt.app.n8n.cloud/webhook/0d0ca5ef-2cab-43be-8309-cdeffaeda7ef";

export const suscLanding = {
  kicker: "Meta Ads para negocios de suscripción · México · Por aplicación",
  title: [
    { t: "Más clientes de pago para tu suscripción, sin " },
    { t: "honorarios", accent: true },
    { t: " de agencia." },
  ],
  sub: [
    { t: "Monto y opero tus campañas de Meta. Cero honorario mensual. Tú pones la pauta (va directo a Meta) y yo cobro un " },
    { t: "% de lo que facturas de los clientes nuevos que te traigo", accent: true },
    { t: ". Si no llegan clientes que pagan, no me pagas." },
  ],
  cta: "Aplicar en 60 segundos",
  proof: [
    { val: "$11M", lab: "MXN en ventas generadas" },
    { val: "22x", lab: "ROAS máximo" },
    { val: "↓85%", lab: "costo por lead ($2,000 → $300)" },
    { val: "20x", lab: "retorno a 12 meses (ingreso recurrente)" },
  ],
};

export const suscEnemy = {
  kicker: "El problema",
  title: [
    { t: "Tu agencia cobra igual si " },
    { t: "creces o no", accent: true },
    { t: "." },
  ],
  desc: "Honorario fijo mes con mes, pase lo que pase. El riesgo es 100% tuyo. Yo lo hago al revés: solo cobro cuando llegan clientes nuevos que pagan.",
};

export const suscStats = {
  kicker: "Los números",
  title: "Todo lo que respalda el modelo.",
  sub: "Cuentas que operé de principio a fin — no promesas. Con negocios de suscripción y alto ticket.",
  items: [
    { icon: "💰", val: "$11M", lab: "MXN en ventas generadas desde ads" },
    { icon: "🔁", val: "20x", lab: "retorno a 12 meses en ingreso recurrente (Lasso)" },
    { icon: "📉", val: "↓85%", lab: "reducción de costo por lead ($2,000 → $300)" },
    { icon: "🚀", val: "22x", lab: "ROAS máximo en una cuenta" },
    { icon: "🤝", val: "9+", lab: "clientes en portafolio · múltiples industrias" },
    { icon: "📰", val: "2×", lab: "El Financiero · Bloomberg" },
  ],
};

export const suscTrust = {
  kicker: "Confianza",
  title: "Negocios de suscripción que confían en el sistema.",
  sub: "Del SaaS B2B a la fintech: campañas y automatización que conectan ads, datos y CRM para traer clientes que pagan y se quedan.",
  chips: [
    "🧩 LeadSales · SaaS B2B (WhatsApp CRM)",
    "💳 Finxi · Fintech PyMEs",
    "🔁 Lasso · negocios con recurrencia",
    "⚙️ +100 flujos de automatización",
    "🌎 LATAM",
  ],
};

// El modelo — frame honesto de "sin costo" en 3 partes + contraste.
export const suscModel = {
  kicker: "El modelo",
  title: [
    { t: "Sin honorarios. " },
    { t: "Solo gano cuando llegan clientes que pagan", accent: true },
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
      desc: "Un % de lo que te facturan los clientes nuevos, los primeros 3–6 meses.",
    },
  ],
  contrast: {
    old: {
      name: "Agencia tradicional",
      points: [
        "Honorario fijo todos los meses",
        "Cobran crezcas o no",
        "El riesgo es 100% tuyo",
        "Alineados con su factura, no con tu crecimiento",
      ],
    },
    neo: {
      name: "Este modelo",
      points: [
        "Cero honorario de agencia",
        "Solo cobro por clientes nuevos que pagan",
        "El riesgo lo pongo yo",
        "Alineado contigo: gano si tú creces",
      ],
    },
  },
};

// Visual "solo pagas cuando llegan clientes que pagan".
export const suscCostViz = {
  kicker: "Cero riesgo para ti",
  title: "Lo que pagas cada mes.",
  caption:
    "Llegan clientes que pagan desde el primer mes. No pagas honorario — solo un % de lo que te facturan.",
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
      sublabel: "clientes que pagan desde el mes 1 · solo %",
      neo: true,
      cells: [
        { on: true, tag: "🎯 1er cliente" },
        { on: true, tag: "%" },
        { on: true, tag: "%" },
        { on: true, tag: "%" },
        { on: true, tag: "%" },
        { on: true, tag: "%" },
      ],
    },
  ],
};

export const suscWhy = {
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
      desc: "20x de retorno a 12 meses en ingreso recurrente, ↓85% CPL y SaaS B2B operado de raíz.",
    },
    {
      icon: "💳",
      title: "Tú controlas el dinero",
      desc: "La pauta vive en tu cuenta de Meta. Ves cada peso.",
    },
    {
      icon: "🔒",
      title: "Selectivo, no masivo",
      desc: "Cupo limitado. Solo con negocios que ya cobran y convierten.",
    },
  ],
};

export const suscSteps = {
  kicker: "Cómo funciona",
  title: "Del anuncio al cliente que paga.",
  steps: [
    { num: "01", icon: "📣", title: "Anuncio", desc: "Meta Ads a tu cliente ideal, segmentado con datos." },
    { num: "02", icon: "🧲", title: "Registro o prueba", desc: "Landing que capta y arranca el registro o la prueba." },
    { num: "03", icon: "✅", title: "Cliente que paga", desc: "Tu onboarding lo convierte en cliente de pago." },
    { num: "04", icon: "🔁", title: "Cobro mi %", desc: "Gano un % de lo que te factura, los primeros meses." },
  ],
};

export const suscFit = {
  kicker: "¿Es para ti?",
  title: "Selectivo por diseño.",
  yes: {
    title: "Es para ti si…",
    points: [
      "Ya les cobras a tus clientes de forma recurrente",
      "Conviertes interesados en clientes que pagan",
      "Tu plan justifica invertir en publicidad",
      "Quieres escalar lo que ya funciona",
    ],
  },
  no: {
    title: "No es para ti si…",
    points: [
      "Todavía no cobras / no tienes producto listo",
      "No logras convertir interesados en clientes de pago",
      "Buscas crecer sin invertir un peso en publicidad",
      "Solo estás explorando sin intención de arrancar",
    ],
  },
};

export const suscFaq = {
  kicker: "Antes de que preguntes",
  title: "Las dudas de siempre.",
  items: [
    {
      q: "Entonces no es gratis, pago la publicidad.",
      a: "Correcto, y prefiero decírtelo de frente. La publicidad es la inversión en Meta que hace que los anuncios existan — la pagas tú, directo a Meta, en tu cuenta. Lo que no pagas es a mí. Ningún cliente nuevo = ningún honorario para mí.",
    },
    {
      q: "¿Cuánto es la comisión?",
      a: "Un % de lo que te facturan los clientes nuevos que genero, durante los primeros 3–6 meses. El porcentaje exacto lo definimos en la llamada según tu plan y volumen. Nunca hay fee fijo ni anticipo.",
    },
    {
      q: "¿Y si aún no facturo mucho?",
      a: "Necesito que ya cobres de forma recurrente y que conviertas interesados en clientes de pago. Si estás muy temprano, te digo con datos qué falta para llegar ahí.",
    },
    {
      q: "¿Firmo algún contrato de exclusividad?",
      a: "No exijo exclusividad de entrada. Definimos cómo se atribuye cada cliente nuevo. Todo claro y por escrito antes de arrancar.",
    },
  ],
};

export const suscWhoami = {
  name: "Christian Gutiérrez",
  role: "Meta Ads · Data · Automatización · CRM",
  portrait: "/images/portrait.png",
  bio: "Ayudo a negocios de suscripción y alto ticket a crecer combinando campañas rentables, datos y automatización. Soy Automation Manager en LeadSales (SaaS B2B) y he generado +$11M MXN desde ads. Ing. en Data Analysis (Tec de Monterrey), 2× columnista en El Financiero · Bloomberg.",
};

export const suscCta = {
  title: "¿Listo para crecer tu suscripción sin pagar honorarios?",
  sub: "Aplica abajo. Reviso cada aplicación personalmente y respondo por WhatsApp en menos de 24 h.",
};

export const suscPress = {
  images: ["/images/02.jpg", "/images/talk-2.png"],
};

// Formulario matón — en lenguaje llano, sin jerga (nada de MRR/trials/activación).
export const suscForm = {
  kicker: "Aplica ahora",
  title: "Cuéntame un poco más de ti…",
  sub: "60 segundos. Cupo limitado. Si calificas, te contacto por WhatsApp en menos de 24 h.",
  steps: [
    {
      id: "tipo",
      q: "¿Qué tipo de negocio tienes?",
      options: [
        "Software / SaaS",
        "App móvil",
        "Membresía o comunidad",
        "Servicio por suscripción",
      ],
    },
    {
      id: "cobro",
      q: "¿Ya les cobras a tus clientes de forma recurrente?",
      hint: "El modelo funciona si ya tienes ingresos que se repiten cada mes.",
      options: [
        "Sí, cobro mensual",
        "Sí, cobro anual",
        "Cobro mensual y anual",
        "Todavía no cobro",
      ],
    },
    {
      id: "facturacion",
      q: "¿Cuánto facturas al mes, más o menos?",
      hint: "En pesos, sumando tus cobros recurrentes.",
      options: [
        "Menos de $50,000",
        "$50,000 – $150,000",
        "$150,000 – $500,000",
        "Más de $500,000",
      ],
    },
    {
      id: "precio_plan",
      q: "¿Cuánto cuesta tu plan principal al mes?",
      options: [
        "Menos de $300",
        "$300 – $1,000",
        "$1,000 – $5,000",
        "Más de $5,000",
      ],
    },
    {
      id: "convierte",
      q: "Cuando llega un interesado, ¿lo conviertes en cliente que paga?",
      hint: "Yo te traigo interesados; tú tienes que cerrarlos y que se queden.",
      options: [
        "Sí, tengo un proceso que funciona",
        "Más o menos, es informal",
        "No, ahí batallo",
      ],
    },
    {
      id: "ads_hoy",
      q: "¿Inviertes en publicidad hoy?",
      options: [
        "No, nunca",
        "Sí, pero sin buenos resultados",
        "Sí, con buenos resultados",
        "Lo lleva una agencia",
      ],
    },
    {
      id: "pauta",
      q: "¿Cuánto puedes invertir en publicidad al mes?",
      hint: "Este dinero va directo a Meta, no a mí.",
      options: [
        "Menos de $10,000",
        "$10,000 – $30,000",
        "$30,000 – $80,000",
        "Más de $80,000",
      ],
    },
    {
      id: "urgencia",
      q: "¿Cuándo te gustaría empezar?",
      options: ["Ya, esta semana", "Este mes", "En 1–3 meses", "Solo estoy viendo"],
    },
  ],
  contact: [
    { id: "nombre", label: "Tu nombre", type: "text", placeholder: "Nombre y apellido", required: true },
    { id: "whatsapp", label: "WhatsApp", type: "tel", placeholder: "+52 55 1234 5678", required: true },
    { id: "email", label: "Correo", type: "email", placeholder: "tu@empresa.com", required: true },
    { id: "empresa", label: "Nombre de tu producto o empresa", type: "text", placeholder: "Tu producto", required: true },
    { id: "sitio", label: "Link de tu producto (opcional)", type: "text", placeholder: "tuproducto.com", required: false },
  ],
  consent: "Acepto que la inversión en publicidad la pago yo directo a Meta.",
};

// Tabla de puntos para el lead_score (0–100). Se recalcula también en n8n.
export const suscScoring = {
  cobro: {
    "Sí, cobro mensual": 30,
    "Sí, cobro anual": 28,
    "Cobro mensual y anual": 30,
    "Todavía no cobro": 0,
  },
  facturacion: {
    "Menos de $50,000": 2,
    "$50,000 – $150,000": 12,
    "$150,000 – $500,000": 20,
    "Más de $500,000": 25,
  },
  precio_plan: {
    "Menos de $300": 0,
    "$300 – $1,000": 6,
    "$1,000 – $5,000": 13,
    "Más de $5,000": 18,
  },
  convierte: {
    "Sí, tengo un proceso que funciona": 20,
    "Más o menos, es informal": 10,
    "No, ahí batallo": 0,
  },
  pauta: {
    "Menos de $10,000": 0,
    "$10,000 – $30,000": 8,
    "$30,000 – $80,000": 13,
    "Más de $80,000": 17,
  },
  urgencia: {
    "Ya, esta semana": 10,
    "Este mes": 7,
    "En 1–3 meses": 3,
    "Solo estoy viendo": 0,
  },
};

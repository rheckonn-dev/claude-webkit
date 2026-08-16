/**
 * Every word on the site lives here, in both languages.
 *
 * To fix a typo or change a price, edit the string and nothing else — the
 * components read from this file and never hold copy of their own.
 *
 * English serves at "/" and Spanish at "/es". Keep both in step: if you add a
 * service or a question to one, add it to the other, or the language switch
 * will drop someone onto a page that is missing what they were reading.
 */

export type Locale = "en" | "es";

/** Facts that are the same in both languages. */
export const business = {
  name: "BlueSky Detailing & Cleaning",
  shortName: "BlueSky",
  city: "Calgary",
  whatsapp: "18255599511",
  phoneDisplay: "+1 825 559 9511",
  email: "Blueskyservices.ca@outlook.com",
  areas: ["Calgary", "Airdrie", "Chestermere", "Okotoks", "Cochrane"],
  social: [
    { label: "Instagram", href: "https://instagram.com/blueskyservices.ca" },
    { label: "TikTok", href: "https://tiktok.com/@blueskyservices.ca" },
    { label: "Facebook", href: "https://facebook.com/blueskyservices.ca" },
  ],
} as const;

export const routes: Record<Locale, string> = { en: "/", es: "/es" };

export type Copy = {
  htmlLang: string;
  descriptor: string;
  skipToContent: string;
  switchLabel: string;
  switchTo: string;
  meta: { title: string; description: string; keywords: string[] };
  nav: { label: string; href: string }[];
  hero: {
    eyebrow: string;
    headlineLead: string;
    headlineAccent: string;
    sub: string;
    primaryCta: string;
    secondaryCta: string;
    fine: string;
  };
  promises: { title: string; body: string }[];
  servicesHead: { eyebrow: string; heading: string; lede: string };
  services: {
    id: string;
    title: string;
    body: string;
    emphasis: string;
    items: string[];
    waMessage: string;
    askCta: string;
  }[];
  bylaw: {
    eyebrow: string;
    heading: string;
    paragraphs: string[];
    highlights: string[];
    facts: { value: string; label: string }[];
  };
  stepsHead: { eyebrow: string; heading: string };
  steps: { title: string; body: string }[];
  stepLabel: string;
  faqHead: { eyebrow: string; heading: string };
  faqs: { q: string; a: string }[];
  closing: { heading: string; body: string; emailCta: string };
  footer: {
    blurb: string;
    contact: string;
    hours: string;
    hoursRows: { days: string; time: string }[];
    languages: string;
    whatsapp: string;
    call: string;
    credit: string;
  };
  imageAlt: { hero: string; driveway: string; waterless: string; logo: string };
};

const en: Copy = {
  htmlLang: "en-CA",
  descriptor: "Mobile auto service",
  skipToContent: "Skip to content",
  switchLabel: "Español",
  switchTo: "Ver esta página en español",
  meta: {
    title: "BlueSky Detailing & Cleaning — Mobile Auto Service in Calgary",
    description:
      "Mobile mechanic and detailing in Calgary. Batteries, brakes, maintenance and waterless detailing at your home or office. Book on WhatsApp. English y español.",
    keywords: [
      "mobile mechanic Calgary",
      "mobile auto detailing Calgary",
      "waterless car wash Calgary",
      "mobile battery replacement Calgary",
      "mobile brake repair Calgary",
    ],
  },
  nav: [
    { label: "Services", href: "#services" },
    { label: "Why BlueSky", href: "#why" },
    { label: "How it works", href: "#how" },
    { label: "Questions", href: "#faq" },
  ],
  hero: {
    eyebrow: "Mobile auto service · Calgary & area",
    headlineLead: "Calgary's auto shop",
    headlineAccent: "comes to you.",
    sub: "Batteries, brakes, detailing and maintenance, done where your car is already parked. Tell us what it needs on WhatsApp and we'll tell you when we can be there.",
    primaryCta: "Message us on WhatsApp",
    secondaryCta: "See what we do",
    fine: "Bilingual English / Español · Weeknights 6–9pm · Saturdays 10am–9pm · Sunday by appointment",
  },
  promises: [
    {
      title: "We drive to you",
      body: "Your driveway, your office parkade, or the lot where it quit on you.",
    },
    {
      title: "One conversation",
      body: "Everything happens on WhatsApp. No forms, no account, no callback queue.",
    },
    {
      title: "Nothing hits the drain",
      body: "Rinseless and waterless products only. Your driveway stays dry.",
    },
    {
      title: "English y español",
      body: "Describe the noise your car is making in whichever language is easier.",
    },
  ],
  servicesHead: {
    eyebrow: "What we do",
    heading: "Four things we do every day.",
    lede: "Batteries, brakes, maintenance and detailing — between them, most of what a car actually asks for. We do these often enough that we carry the parts, know the torque figures by heart, and get it right the first time.",
  },
  services: [
    {
      id: "batteries",
      title: "Batteries & electrical",
      body: "Dead in the driveway on a February morning is the most Calgary problem there is. We test the charging system before we sell you anything — sometimes the battery is fine and the fault is a corroded terminal, and we would rather tell you that than swap a part you didn't need.",
      emphasis:
        "sometimes the battery is fine and the fault is a corroded terminal",
      items: [
        "Battery testing",
        "Installation",
        "Diagnostic scan",
        "Alternator & starter",
      ],
      waMessage: "Hi BlueSky, I need help with my battery or electrical system.",
      askCta: "Ask about this",
    },
    {
      id: "brakes",
      title: "Brakes",
      body: "Squealing, grinding, or a pedal that sinks further than it used to. We bring the jack, the torque wrench and the parts, and we hand you the worn pads when we're done so you can see exactly what you paid for.",
      emphasis: "we hand you the worn pads when we're done",
      items: ["Pads", "Rotors", "Safety inspection", "Torqued to spec"],
      waMessage: "Hi BlueSky, I need my brakes looked at.",
      askCta: "Ask about this",
    },
    {
      id: "maintenance",
      title: "Routine maintenance",
      body: "Oil and filter, wiper blades, burnt-out bulbs, fluid top-ups, tire rotation, cabin filters. None of it is worth surrendering half a day at a shop, which is exactly why it never gets done. We'll handle it in your driveway while you work.",
      emphasis: "None of it is worth surrendering half a day at a shop",
      items: [
        "Oil & filter",
        "Wipers & bulbs",
        "Fluids",
        "Rotation",
        "Spark plugs",
      ],
      waMessage: "Hi BlueSky, I'd like to book routine maintenance.",
      askCta: "Ask about this",
    },
    {
      id: "detailing",
      title: "Detailing & cleaning",
      body: "Interior and exterior, finished by hand with rinseless and waterless products. The dirt lifts into the towel instead of running down the pavement, which means we can detail your car in a condo parkade — somewhere a pressure washer will never be welcome.",
      emphasis: "we can detail your car in a condo parkade",
      items: [
        "Interior",
        "Exterior",
        "Paint decontamination",
        "Parkade friendly",
      ],
      waMessage: "Hi BlueSky, I'd like a detailing quote.",
      askCta: "Ask about this",
    },
  ],
  bylaw: {
    eyebrow: "Why BlueSky",
    heading: "We don't bring a hose.",
    paragraphs: [
      "Calgary's Stormwater Bylaw 37M2005 treats soap and detergent as prohibited substances. Whatever runs off a driveway reaches a storm drain, and storm drains empty into the Bow River untreated — no filter, no treatment plant, straight through.",
      "So we built the service around that rather than against it. Every wash we do is rinseless or waterless. The product lifts dirt into the towel, the towel goes in the bin, and nothing reaches the drain. You get a clean car and no reason to look over your shoulder.",
      "The convenience is what people book us for. This is what they tell their neighbours about.",
    ],
    highlights: ["untreated", "nothing reaches the drain"],
    facts: [
      {
        value: "37M2005",
        label:
          "City of Calgary Stormwater Bylaw. Soaps and detergents are prohibited substances in the storm drainage system.",
      },
      {
        value: "$500",
        label:
          "Specified fine for a first offence — not a risk worth taking to get a car washed.",
      },
      {
        // Spelled out, not "0 L" — Marcellus's zero is near-identical to a
        // capital O, and this number is the whole point of the section.
        value: "Zero",
        label:
          "Litres of water leaving your property while we work on your vehicle.",
      },
    ],
  },
  stepsHead: { eyebrow: "How it works", heading: "Three steps, no forms." },
  stepLabel: "Step",
  steps: [
    {
      title: "Send a message",
      body: "Tell us what the car is doing, or send a photo of the part. WhatsApp answers with availability and a price.",
    },
    {
      title: "We show up",
      body: "Pick a window that suits you. We arrive with the parts and the tools, wherever the car is parked.",
    },
    {
      title: "Pay when it's finished",
      body: "You see the work and the old parts before anything is settled. Nothing to put down first.",
    },
  ],
  faqHead: { eyebrow: "Questions", heading: "Before you message." },
  faqs: [
    {
      q: "Do you really come to me, or do I drop the car off somewhere?",
      a: "We come to you. Home, work, a friend's driveway, the parking lot where it stopped. If we can safely get to the car and there's room to work beside it, we can do the job there.",
    },
    {
      q: "How do I find out what it costs?",
      a: "Message us on WhatsApp and describe the problem, or send a photo. You get a price before we come out, not after. If we find something different once we're there, we stop and tell you before we touch anything else.",
    },
    {
      q: "Can you work in a condo parkade?",
      a: "Yes, and this is where the waterless products earn their keep. There's no runoff, no hose and no puddle, so most building managers have no objection. Worth a quick check with yours first.",
    },
    {
      q: "Do I have to be there while you work?",
      a: "No. As long as we can reach the car and you've told us where the keys are, plenty of our customers are inside on a call the whole time.",
    },
    {
      q: "What if the job turns out to be bigger than expected?",
      a: "We tell you and we stop. You decide whether we carry on. If it's genuinely beyond what we do at the roadside, we'll say so and point you toward a shop we'd use ourselves.",
    },
    {
      q: "¿Hablan español?",
      a: "Sí. Escríbenos por WhatsApp en español y te atendemos en español, desde la cotización hasta el trabajo terminado.",
    },
  ],
  closing: {
    heading: "Your car is already parked. Let's start there.",
    body: "Tell us what it needs and we'll tell you when we can be there. Most messages get an answer the same day.",
    emailCta: "Email instead",
  },
  footer: {
    blurb: "Mobile auto service across",
    contact: "Contact",
    hours: "Hours",
    hoursRows: [
      { days: "Monday to Friday", time: "6:00pm – 9:00pm" },
      { days: "Saturday", time: "10:00am – 9:00pm" },
      { days: "Sunday", time: "By appointment" },
    ],
    languages: "English y español",
    whatsapp: "WhatsApp",
    call: "Call",
    credit: "Built with Claude Web Builder by",
  },
  imageAlt: {
    logo: "BlueSky Detailing and Cleaning",
    hero: "The polished front fender and headlight of a dark navy sedan, water beading across the paint",
    driveway:
      "A navy sedan on a residential driveway at golden hour with an open tool case laid out beside the front wheel, the concrete completely dry",
    waterless:
      "A gloved hand drawing a dry microfibre towel across dusty navy paintwork, lifting the dirt without water",
  },
};

const es: Copy = {
  htmlLang: "es-CA",
  descriptor: "Servicio automotriz a domicilio",
  skipToContent: "Saltar al contenido",
  switchLabel: "English",
  switchTo: "View this page in English",
  meta: {
    title: "BlueSky Detailing & Cleaning — Mecánico a domicilio en Calgary",
    description:
      "Mecánico a domicilio y detailing en Calgary. Baterías, frenos, mantenimiento y lavado sin agua en tu casa u oficina. Agenda por WhatsApp. Te atendemos en español.",
    keywords: [
      "mecánico a domicilio Calgary",
      "mecánico móvil Calgary",
      "detailing a domicilio Calgary",
      "lavado sin agua Calgary",
      "cambio de batería a domicilio Calgary",
      "frenos a domicilio Calgary",
    ],
  },
  nav: [
    { label: "Servicios", href: "#services" },
    { label: "Por qué BlueSky", href: "#why" },
    { label: "Cómo funciona", href: "#how" },
    { label: "Preguntas", href: "#faq" },
  ],
  hero: {
    eyebrow: "Servicio automotriz a domicilio · Calgary y alrededores",
    headlineLead: "El taller de Calgary",
    headlineAccent: "llega a ti.",
    sub: "Baterías, frenos, detailing y mantenimiento, donde tu carro ya está estacionado. Escríbenos por WhatsApp y te decimos cuándo podemos llegar.",
    primaryCta: "Escríbenos por WhatsApp",
    secondaryCta: "Ver qué hacemos",
    fine: "Te atendemos en español e inglés · Lun–Vie 6–9pm · Sáb 10am–9pm · Domingo con cita",
  },
  promises: [
    {
      title: "Vamos hasta ti",
      body: "Tu casa, el estacionamiento de tu oficina, o donde se haya quedado parado.",
    },
    {
      title: "Una sola conversación",
      body: "Todo por WhatsApp. Sin formularios, sin cuenta, sin esperar a que te devuelvan la llamada.",
    },
    {
      title: "Nada llega al drenaje",
      body: "Solo productos sin agua ni enjuague. Tu entrada queda seca.",
    },
    {
      title: "Español e inglés",
      body: "Cuéntanos qué ruido hace tu carro en el idioma que te salga más fácil.",
    },
  ],
  servicesHead: {
    eyebrow: "Qué hacemos",
    heading: "Cuatro cosas que hacemos todos los días.",
    lede: "Baterías, frenos, mantenimiento y detailing — entre las cuatro, casi todo lo que un carro pide. Las hacemos tan seguido que ya cargamos las piezas, nos sabemos los torques de memoria y lo resolvemos a la primera.",
  },
  services: [
    {
      id: "batteries",
      title: "Batería y sistema eléctrico",
      body: "Quedarse sin batería una mañana de febrero es el problema más calgariense que existe. Revisamos el sistema de carga antes de venderte nada — a veces la batería está bien y lo que falla es un borne corroído, y preferimos decírtelo antes que cambiarte una pieza que no necesitabas.",
      emphasis:
        "a veces la batería está bien y lo que falla es un borne corroído",
      items: [
        "Prueba de batería",
        "Instalación",
        "Escaneo de diagnóstico",
        "Alternador y marcha",
      ],
      waMessage:
        "Hola BlueSky, necesito ayuda con la batería o el sistema eléctrico.",
      askCta: "Pregunta por esto",
    },
    {
      id: "brakes",
      title: "Frenos",
      body: "Chillido, rechinido, o un pedal que se hunde más de lo que se hundía antes. Llevamos el gato, el torquímetro y las piezas, y te entregamos las balatas gastadas al terminar para que veas exactamente qué pagaste.",
      emphasis: "te entregamos las balatas gastadas al terminar",
      items: [
        "Balatas",
        "Discos",
        "Revisión de seguridad",
        "Torque a especificación",
      ],
      waMessage: "Hola BlueSky, necesito que revisen mis frenos.",
      askCta: "Pregunta por esto",
    },
    {
      id: "maintenance",
      title: "Mantenimiento",
      body: "Aceite y filtro, plumillas, focos fundidos, niveles de líquidos, rotación de llantas, filtro de cabina. Nada de eso vale medio día metido en un taller, y por eso mismo nunca se hace. Lo resolvemos en tu entrada mientras tú trabajas.",
      emphasis: "Nada de eso vale medio día metido en un taller",
      items: [
        "Aceite y filtro",
        "Plumillas y focos",
        "Líquidos",
        "Rotación",
        "Bujías",
      ],
      waMessage: "Hola BlueSky, quiero agendar un servicio de mantenimiento.",
      askCta: "Pregunta por esto",
    },
    {
      id: "detailing",
      title: "Detailing y limpieza",
      body: "Interior y exterior, a mano, con productos sin enjuague y sin agua. La mugre se levanta hacia la toalla en lugar de escurrirse al pavimento, lo que significa que podemos detallar tu carro en un estacionamiento subterráneo — donde una hidrolavadora jamás sería bienvenida.",
      emphasis: "podemos detallar tu carro en un estacionamiento subterráneo",
      items: [
        "Interior",
        "Exterior",
        "Descontaminación de pintura",
        "Apto para subterráneo",
      ],
      waMessage: "Hola BlueSky, quiero una cotización de detailing.",
      askCta: "Pregunta por esto",
    },
  ],
  bylaw: {
    eyebrow: "Por qué BlueSky",
    heading: "No llegamos con manguera.",
    paragraphs: [
      "El Stormwater Bylaw 37M2005 de Calgary clasifica el jabón y el detergente como sustancias prohibidas. Todo lo que escurre de una entrada termina en una alcantarilla pluvial, y esas alcantarillas desembocan en el río Bow sin tratamiento — sin filtro, sin planta, directo.",
      "Así que armamos el servicio alrededor de esa regla en lugar de en contra. Cada lavado que hacemos es sin enjuague o sin agua. El producto levanta la mugre hacia la toalla, la toalla va a la basura, y nada llega al drenaje. Tu carro queda limpio y tú sin nada de qué preocuparte.",
      "Por la comodidad nos contratan. Esto es lo que le cuentan a sus vecinos.",
    ],
    highlights: ["sin tratamiento", "nada llega al drenaje"],
    facts: [
      {
        value: "37M2005",
        label:
          "Stormwater Bylaw de la Ciudad de Calgary. Los jabones y detergentes son sustancias prohibidas en el drenaje pluvial.",
      },
      {
        value: "$500",
        label:
          "Multa establecida para la primera infracción. No vale la pena arriesgarse por lavar un carro.",
      },
      {
        value: "Cero",
        label:
          "Litros de agua que salen de tu propiedad mientras trabajamos en tu vehículo.",
      },
    ],
  },
  stepsHead: { eyebrow: "Cómo funciona", heading: "Tres pasos, sin trámites." },
  stepLabel: "Paso",
  steps: [
    {
      title: "Mándanos un mensaje",
      body: "Cuéntanos qué está haciendo el carro, o manda una foto de la pieza. Por WhatsApp te contestamos con disponibilidad y precio.",
    },
    {
      title: "Llegamos",
      body: "Escoge el horario que te acomode. Llegamos con las piezas y las herramientas, donde sea que esté estacionado.",
    },
    {
      title: "Pagas al terminar",
      body: "Ves el trabajo y las piezas viejas antes de pagar. No hay que dejar anticipo.",
    },
  ],
  faqHead: { eyebrow: "Preguntas", heading: "Antes de escribirnos." },
  faqs: [
    {
      q: "¿De verdad van hasta donde estoy, o tengo que llevar el carro?",
      a: "Vamos a ti. Tu casa, el trabajo, la entrada de un amigo, el estacionamiento donde se quedó parado. Si podemos llegar al carro con seguridad y hay espacio para trabajar a un lado, lo hacemos ahí mismo.",
    },
    {
      q: "¿Cómo sé cuánto me va a costar?",
      a: "Escríbenos por WhatsApp y descríbenos el problema, o manda una foto. Te damos el precio antes de salir, no después. Si al llegar encontramos algo distinto, paramos y te avisamos antes de tocar cualquier otra cosa.",
    },
    {
      q: "¿Pueden trabajar en un estacionamiento subterráneo?",
      a: "Sí, y ahí es donde los productos sin agua se ganan su lugar. No hay escurrimiento, ni manguera, ni charco, así que la mayoría de los administradores no ponen problema. Vale la pena confirmarlo con el tuyo primero.",
    },
    {
      q: "¿Tengo que estar presente mientras trabajan?",
      a: "No. Mientras podamos llegar al carro y nos digas dónde quedaron las llaves, muchos de nuestros clientes se quedan adentro en una llamada todo el rato.",
    },
    {
      q: "¿Y si el trabajo resulta más grande de lo que parecía?",
      a: "Te avisamos y paramos. Tú decides si seguimos. Si de verdad se sale de lo que se puede hacer en la calle, te lo decimos y te mandamos con un taller en el que nosotros confiaríamos.",
    },
    {
      q: "Do you speak English?",
      a: "Yes. Message us in English and we'll answer in English, from the quote through to the finished job.",
    },
  ],
  closing: {
    heading: "Tu carro ya está estacionado. Empecemos ahí.",
    body: "Dinos qué necesita y te decimos cuándo podemos llegar. La mayoría de los mensajes tienen respuesta el mismo día.",
    emailCta: "Mejor por correo",
  },
  footer: {
    blurb: "Servicio automotriz a domicilio en",
    contact: "Contacto",
    hours: "Horario",
    hoursRows: [
      { days: "Lunes a viernes", time: "6:00pm – 9:00pm" },
      { days: "Sábado", time: "10:00am – 9:00pm" },
      { days: "Domingo", time: "Con cita previa" },
    ],
    languages: "Español e inglés",
    whatsapp: "WhatsApp",
    call: "Llamar al",
    credit: "Hecho con Claude Web Builder por",
  },
  imageAlt: {
    logo: "BlueSky Detailing and Cleaning",
    hero: "El salpicadera delantera y el faro de un sedán azul marino recién pulido, con gotas de agua sobre la pintura",
    driveway:
      "Un sedán azul marino en la entrada de una casa al atardecer, con un maletín de herramientas abierto junto a la rueda delantera y el concreto completamente seco",
    waterless:
      "Una mano con guante pasando una toalla de microfibra seca sobre pintura azul marino empolvada, levantando la mugre sin agua",
  },
};

export const copy: Record<Locale, Copy> = { en, es };

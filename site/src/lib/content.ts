/**
 * Every word on the site lives here.
 * Change the text in this file and the page updates — you never need to touch
 * the component files to fix a typo, a phone number, or an opening hour.
 */

export const business = {
  name: "BlueSky Detailing & Cleaning",
  shortName: "BlueSky",
  descriptor: "Mobile auto service",
  city: "Calgary",
  whatsapp: "18255599511",
  phoneDisplay: "+1 825 559 9511",
  email: "Blueskyservices.ca@outlook.com",
  areas: ["Calgary", "Airdrie", "Chestermere", "Okotoks", "Cochrane"],
  hours: [
    { days: "Monday to Saturday", time: "8:00am – 7:00pm" },
    { days: "Sunday", time: "By appointment" },
  ],
  social: [
    { label: "Instagram", href: "https://instagram.com/blueskyservices.ca" },
    { label: "TikTok", href: "https://tiktok.com/@blueskyservices.ca" },
    { label: "Facebook", href: "https://facebook.com/blueskyservices.ca" },
  ],
} as const;

export const nav = [
  { label: "Services", href: "#services" },
  { label: "Why BlueSky", href: "#why" },
  { label: "How it works", href: "#how" },
  { label: "Questions", href: "#faq" },
] as const;

export const hero = {
  eyebrow: "Mobile auto service · Calgary & area",
  headlineLead: "Calgary's auto shop",
  headlineAccent: "comes to you.",
  sub: "Batteries, brakes, detailing and maintenance, done where your car is already parked. Tell us what it needs on WhatsApp and we'll tell you when we can be there.",
  primaryCta: "Message us on WhatsApp",
  secondaryCta: "See what we do",
  fine: "Bilingual English / Español · Mon–Sat 8am–7pm · Sunday by appointment",
} as const;

export const promises = [
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
] as const;

export const services = [
  {
    id: "batteries",
    title: "Batteries & electrical",
    body: "Dead in the driveway on a February morning is the most Calgary problem there is. We test the charging system before we sell you anything — sometimes the battery is fine and the fault is a corroded terminal, and we would rather tell you that than swap a part you didn't need.",
    emphasis:
      "sometimes the battery is fine and the fault is a corroded terminal",
    items: ["Battery testing", "Installation", "Diagnostic scan", "Alternator & starter"],
    waMessage: "Hi BlueSky, I need help with my battery or electrical system.",
  },
  {
    id: "brakes",
    title: "Brakes",
    body: "Squealing, grinding, or a pedal that sinks further than it used to. We bring the jack, the torque wrench and the parts, and we hand you the worn pads when we're done so you can see exactly what you paid for.",
    emphasis: "we hand you the worn pads when we're done",
    items: ["Pads", "Rotors", "Safety inspection", "Torqued to spec"],
    waMessage: "Hi BlueSky, I need my brakes looked at.",
  },
  {
    id: "maintenance",
    title: "Routine maintenance",
    body: "Oil and filter, wiper blades, burnt-out bulbs, fluid top-ups, tire rotation, cabin filters. None of it is worth surrendering half a day at a shop, which is exactly why it never gets done. We'll handle it in your driveway while you work.",
    emphasis: "None of it is worth surrendering half a day at a shop",
    items: ["Oil & filter", "Wipers & bulbs", "Fluids", "Rotation", "Spark plugs"],
    waMessage: "Hi BlueSky, I'd like to book routine maintenance.",
  },
  {
    id: "detailing",
    title: "Detailing & cleaning",
    body: "Interior and exterior, finished by hand with rinseless and waterless products. The dirt lifts into the towel instead of running down the pavement, which means we can detail your car in a condo parkade — somewhere a pressure washer will never be welcome.",
    emphasis: "we can detail your car in a condo parkade",
    items: ["Interior", "Exterior", "Paint decontamination", "Parkade friendly"],
    waMessage: "Hi BlueSky, I'd like a detailing quote.",
  },
] as const;

export const bylaw = {
  eyebrow: "Why BlueSky",
  heading: "We don't bring a hose.",
  paragraphs: [
    "Calgary's Stormwater Bylaw 37M2005 treats soap and detergent as prohibited substances. Whatever runs off a driveway reaches a storm drain, and storm drains empty into the Bow River untreated — no filter, no treatment plant, straight through.",
    "So we built the service around that rather than against it. Every wash we do is rinseless or waterless. The product lifts dirt into the towel, the towel goes in the bin, and nothing reaches the drain. You get a clean car and no reason to look over your shoulder.",
    "The convenience is what people book us for. This is what they tell their neighbours about.",
  ],
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
} as const;

export const steps = [
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
] as const;

export const faqs = [
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
    q: "Hablan español?",
    a: "Sí. Puedes escribirnos por WhatsApp en español y te atendemos en español, desde la cotización hasta el trabajo terminado.",
  },
] as const;

export const closing = {
  heading: "Your car is already parked. Let's start there.",
  body: "Tell us what it needs and we'll tell you when we can be there. Most messages get an answer the same day.",
} as const;

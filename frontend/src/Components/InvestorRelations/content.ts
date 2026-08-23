export const investorHeroImage = "/images/investor-relations-hero.jpg";

export const investorOverview = {
  label: "INVESTOR RELATIONS",
  heading: "Investing in India's Energy Future",
  lead: "EnerGrid is backed by strong institutional partners and is focused on developing critical infrastructure across power transmission, Battery Energy Storage Systems and renewable energy.",
  support:
    "Our partners bring infrastructure expertise, financial strength, governance and sustainability experience to support long-term, investment-ready energy infrastructure in India.",
  pillars: [
    { title: "Power Transmission", text: "Resilient grid backbone for reliable power delivery." },
    { title: "Battery Energy Storage", text: "Utility-scale BESS to strengthen grid reliability." },
    { title: "Renewable Energy", text: "Clean generation aligned to India's energy transition." },
  ],
} as const;

export const strategicPartnersIntro =
  "Who supports EnerGrid, and what they bring to India's energy transition.";

export type StrategicPartner = {
  name: string;
  shortName: string;
  tags: readonly string[];
  summary: string;
  facts: readonly string[];
};

export const strategicPartners: readonly StrategicPartner[] = [
  {
    name: "IndiGrid",
    shortName: "IndiGrid",
    tags: ["Power Sector InvIT"],
    summary:
      "India's first Infrastructure Investment Trust in the power sector, with extensive experience across power transmission, renewable energy and battery energy storage.",
    facts: [
      "Infrastructure investment platform focused on India's power sector",
      "Experience spanning transmission, renewable energy and storage",
    ],
  },
  {
    name: "British International Investment",
    shortName: "BII",
    tags: ["UK DFI"],
    summary:
      "The UK's development finance institution and impact investor, supporting sustainable and inclusive economic growth across emerging markets.",
    facts: [
      "Development finance and impact investment partner",
      "Focused on sustainable and inclusive growth",
    ],
  },
  {
    name: "Norfund",
    shortName: "Norfund",
    tags: ["Development Fund"],
    summary:
      "Norway's investment fund for developing countries, focused on sustainable development and responsible investment.",
    facts: [
      "Government-backed development investment partner",
      "Strong focus on sustainable businesses and renewable energy",
    ],
  },
] as const;

export const investmentCommitment = {
  amount: "USD 300 Million",
  label: "Committed Equity Capital",
  text: "The three strategic partners have committed USD 300 million in equity capital to EnerGrid, reinforcing their commitment to India's energy transition.",
} as const;

export type PartnerHighlightGroup = {
  partner: string;
  stats: readonly { value: string; label: string }[];
};

export const partnerHighlights: readonly PartnerHighlightGroup[] = [
  {
    partner: "IndiGrid",
    stats: [
      { value: "41", label: "Power projects" },
      { value: "~8,700 ckm", label: "Transmission lines" },
      { value: "15", label: "Substations" },
      { value: "~855 MWAC", label: "~1.1 GWp solar generation" },
      { value: "450 MW / 900 MWh", label: "Battery Energy Storage Systems" },
    ],
  },
  {
    partner: "British International Investment",
    stats: [
      { value: "1,580+", label: "Businesses" },
      { value: "65", label: "Countries" },
      { value: "£8.5 billion", label: "Total net assets" },
      { value: "30%", label: "Of new commitments in climate finance (2022–2026)" },
    ],
  },
  {
    partner: "Norfund",
    stats: [
      { value: "USD 3.6 billion", label: "Committed portfolio" },
      {
        value: "Africa · Asia · Latin America",
        label: "Investments across Sub-Saharan Africa, South/Southeast Asia and Latin America",
      },
    ],
  },
] as const;

export const investorResources = {
  heading: "Investor Resources",
  description:
    "Access key information and resources related to EnerGrid and its investment partners.",
  items: [
    { title: "Investor Details", note: "Coming soon" },
    { title: "Company Information", note: "Coming soon" },
    { title: "Reports & Presentations", note: "Coming soon" },
    { title: "Corporate Disclosures", note: "Coming soon" },
    { title: "Announcements", note: "Coming soon" },
  ],
} as const;

export const investorCta = {
  heading: "Building India's Energy Future Together",
  text: "Partnering to accelerate reliable, sustainable and resilient energy infrastructure.",
  buttonLabel: "Contact Us",
  buttonHref: "/contact",
} as const;

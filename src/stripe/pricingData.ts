import { Price } from "@/types/price";

export const pricingData: Price[] = [
  {
    id: "price_basic_seo",
    unit_amount: 2999 * 100,
    nickname: "BASIC",
    offers: [
      "Lokales Fundament & Sichtbarkeit",
      "Strategisches technisches Setup",
      "Lokale SEO-Dominanz",
      "Basis-Keyword-Analyse",
      "Performance-Optimierung",
      "Monatlicher Status-Call",
      "3 Monate Betreuung",
    ],
  },
  {
    id: "price_medium_seo",
    unit_amount: 5499 * 100,
    nickname: "MEDIUM",
    offers: [
      "Skalierung & Lead-Generierung",
      "Alles aus Basic",
      "Erweiterte Content-Strategie",
      "Technische Dauer-Optimierung",
      "Wettbewerbs-Monitoring",
      "Detailliertes monatliches Reporting",
      "6 Monate Betreuung",
    ],
  },
  {
    id: "price_premium_seo",
    unit_amount: 9500 * 100,
    nickname: "PREMIUM",
    offers: [
      "Volle Marktdominanz & Full-Service",
      "All-Inclusive Strategie",
      "Maximale Wettbewerbsverdrängung",
      "Technische Perfektion",
      "Deep-Data Analytics & ROI-Tracking",
      "Priorisierter 24/7 Support",
      "12 Monate Betreuung",
    ],
  },
];

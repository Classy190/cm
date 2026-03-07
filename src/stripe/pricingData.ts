import { Price } from "@/types/price";

export const pricingData: Price[] = [
  {
    id: "price_basic_seo",
    unit_amount: 2999 * 100,
    nickname: "BASIC",
    offers: [
      "Fundamentales Setup für lokale Unternehmen",
      "Nischenseiten-Optimierung",
      "Basis-Keyword-Recherche",
      "Technische SEO-Grundlagen",
      "Sichtbarkeit in Suchergebnissen",
      "3 Monate Support",
    ],
  },
  {
    id: "price_medium_seo",
    unit_amount: 5499 * 100,
    nickname: "MEDIUM",
    offers: [
      "Ideal für Unternehmen mit Wachstumswillen",
      "Regelmäßiger Content",
      "Technische Optimierung",
      "Erweiterte Keyword-Strategie",
      "Monatliche Reporting",
      "6 Monate Support",
    ],
  },
  {
    id: "price_premium_seo",
    unit_amount: 7400 * 100,
    nickname: "PREMIUM / ENTERPRISE",
    offers: [
      "All-Inclusive-Lösung",
      "Maximale Sichtbarkeit",
      "Wettbewerbsverdrängung",
      "Technische Perfektion",
      "Umfassendes Reporting & Analytics",
      "12 Monate Support",
    ],
  },
];

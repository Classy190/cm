export interface ServiceType {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  benefits: string[];
  useCases: string[];
  pricing: string;
  features: string[];
  blogLink?: string;
}

export const servicesData: ServiceType[] = [
  {
    id: "1",
    slug: "conversion-landingpages",
    title: "Hochkonvertierende Landingpages",
    subtitle: "Landingpages",
    description:
      "ROI-optimierte Seiten, die UX-Prinzipien mit klaren CTAs verbinden. Besucher zu qualifizierten Leads wandeln – datenbasiert und konversionsstark.",
    benefits: [
      "Optimiert für maximale Konversionsquoten (durchschnittlich +45% Anstieg)",
      "A/B-Testing und Heatmap-Analysen",
      "Mobile-first Design für alle Geräte",
      "Schnelle Ladezeit und SEO-optimiert",
      "Klare Call-to-Actions und Psychologie",
      "Analytics und Tracking integriert",
    ],
    features: [
      "Responsive Design",
      "Lead-Capture-Formulare",
      "Social Proof & Trust-Elemente",
      "Video-Integration",
      "Countdown-Timer & FOMO-Elemente",
      "Email-Integrationen (MailerLite, Brevo)",
    ],
    useCases: [
      "E-Book oder Lead-Magnets zum Download",
      "Webinar-Anmeldungen",
      "Produktlaunch-Kampagnen",
      "Kostenlose Beratungsgespräche buchen",
      "Newsletter-Anmeldungen",
      "Event-Registrierungen",
    ],
    pricing:
      "3.999€ – 6.900€ für einfache bis mittlere Landingpages. Ideal als Einstieg in die digitale Transformation.",
    blogLink: "/blogs/conversion-landingpage-guide",
  },
  {
    id: "2",
    slug: "unternehmenswebseiten",
    title: "Moderne Unternehmens-Webseiten",
    subtitle: "Webseiten",
    description:
      "Multipager-Websites, die Ihr Unternehmen widerspiegeln, Fachwissen präsentieren und eine nahtlose Benutzererfahrung bieten.",
    benefits: [
      "Professionelle Darstellung Ihrer Marke",
      "SEO-optimierte Struktur für bessere Rankings",
      "Authentische Storytelling für Vertrauensaufbau",
      "Blog-Integration für Content-Marketing",
      "Contact-Management und Anfrage-Systeme",
      "Monitoring und Reporting",
    ],
    features: [
      "Über 10-15 Seiten Struktur",
      "About, Services, Portfolio, Blog Pages",
      "Team-Präsentation mit Profilen",
      "Testimonials & Case Studies",
      "Integriertes Kontaktformular",
      "Admin-Dashboard für Inhalts-Updates",
    ],
    useCases: [
      "Dienstleistungsunternehmen (Agenturen, Consulting)",
      "Freelancer & Solo-Unternehmer",
      "KMUs mit erklärungsbedürftigen Services",
      "B2B-Unternehmen",
      "Nonprofits & Verbände",
    ],
    pricing:
      "10.000€ – 15.000€ für vollständige Unternehmenswebseiten mit Premium-Features.",
    blogLink: "/blogs/unternehmenswebseite-aufbau",
  },
  {
    id: "3",
    slug: "shopify-online-shops",
    title: "E-Commerce & Shopify Online-Shops",
    subtitle: "E-Commerce",
    description:
      "Leistungsstarke, verkaufspsychologisch optimierte Online-Shops. Durch Storytelling und Conversion-Strategien steigern wir Ihren organischen Umsatz nachhaltig.",
    benefits: [
      "Professionelle Shop-Funktion mit Payment-Gateway",
      "Skalierbar von 10 bis 10.000+ Produkte",
      "Inventory- & Order-Management",
      "Newsletter-Integration für Kundenbindung",
      "Mobile-optimiert für Mobile-Shopping",
      "Integrierte Analytics und Umsatz-Reporting",
    ],
    features: [
      "Shopify-Setup & Custom-Theme",
      "Produkt-Katalogisierung",
      "Payment-Gateways (Stripe, PayPal, Klarna)",
      "Versand-Konfiguration & Tracking",
      "Discount & Promo-Codes",
      "SEO-Optimierung für Produkt-Rankings",
      "Email Marketing Automation",
    ],
    useCases: [
      "Physische Produkte verkaufen",
      "Digitale Produkte & Downloads",
      "Subscription-Services",
      "B2B Product Marketplaces",
      "Dropshipping & Print-on-Demand",
      "Fashion, Lebensmittel, Elektronik",
    ],
    pricing:
      "24.000€ – 29.000€ für vollständige Shopify-Setup mit individuellen Anpassungen.",
    blogLink: "/blogs/shopify-erfolg-maximieren",
  },
  {
    id: "4",
    slug: "seo-rankings",
    title: "Organische Top-Rankings (SEO)",
    subtitle: "SEO",
    description:
      "Identifizieren Sie Ihre Schwellen-Keywords und pushen Sie diese auf Seite 1 der Suchergebnisse. Maximale Sichtbarkeit ohne teure Werbeanzeigen.",
    benefits: [
      "Kostenlose organische Besucher langfristig",
      "Höheres Vertrauen durch Google-Ranking",
      "Bessere Konversionsraten (organisch = qualitativ)",
      "Wiederholte Klicks ohne Werbespend",
      "Nachhaltige Sichtbarkeit & Umsatzsteigerung",
      "Konkurrenz-Analyse und Positioning",
    ],
    features: [
      "Keyword-Recherche & -Strategie",
      "On-Page SEO-Optimierung",
      "Technical SEO Audit & Fixes",
      "Link-Building & Authority",
      "Content-Strategie & Blog-Artikel",
      "Monitoring & Monthly Reporting",
      "Local SEO (Maps, Verzeichnisse)",
    ],
    useCases: [
      "E-Commerce Produkt-Sichtbarkeit",
      "Lokale Services (Handwerker, Ärzte)",
      "SaaS-Produkt-Launch",
      "Nische Content & Authority-Building",
      "Langfristige Lead-Generierung",
    ],
    pricing:
      "2.999€ – 7.400€/Monat je nach Umfang und Konkurrenz-Level.",
    blogLink: "/blogs/seo-strategie-2026",
  },
  {
    id: "5",
    slug: "lokale-webshops",
    title: "Lokale Webshops & Geo-Optimierung",
    subtitle: "Lokale E-Commerce",
    description:
      "Lokale E-Commerce-Lösungen mit Geo-Targeting für maximale Reichweite in Ihrer Region. Integrierte Standortoptimierung für lokale Suchanfragen.",
    benefits: [
      "Zielgerichtete Sichtbarkeit in Ihrer Region",
      "Lokale Kundenbasis schneller aufbauen",
      "Click-and-Collect Integration",
      "Regionale Zahlungsmethoden",
      "Google Maps & Local SEO",
      "Kundenbewertungen & Vertrauensaufbau",
    ],
    features: [
      "Multi-Standort-Shop-Verwaltung",
      "Lokale Versand-Regionen",
      "Stores-Locator auf Karte",
      "Regional angepasste Sprache & Währung",
      "Call-to-Action für Stores",
      "Lokale Event-Integration",
    ],
    useCases: [
      "Lokale Einzelhändler mit mehreren Filialen",
      "Restaurants mit Click-and-Collect",
      "Handwerksbetriebe mit regionaler Reichweite",
      "Getränke- & Lebensmittel-Shops",
      "Beauty & Wellness Studios",
    ],
    pricing:
      "15.000€ – 25.000€ je nach Anzahl der Standorte und Komplexität.",
    blogLink: "/blogs/lokale-webshops-erfolgreich",
  },
  {
    id: "6",
    slug: "saas-automatisierung",
    title: "SaaS-Systeme & Automatisierung (AIO)",
    subtitle: "SaaS & Automation",
    description:
      "Maßgeschneiderte Software-as-a-Service-Lösungen mit All-in-One-Automatisierung. Von Workflow-Optimierung bis KI-gestützter Prozessautomatisierung für 2026.",
    benefits: [
      "Automatisierung von manuellen Prozessen",
      "Zeitersparniss bis zu 80%",
      "Skalierbarkeit der Business-Prozesse",
      "Kosteneinsparung durch Effizienz",
      "Integration mit bestehenden Tools",
      "24/7 Verfügbarkeit der Systeme",
    ],
    features: [
      "Custom Workflow-Automation",
      "Datenbank & CRM-Integration",
      "API-Schnittstellen",
      "User-Management & Rollen",
      "Reporting & Analytics Dashboard",
      "Cloud-Hosting & Skalierbarkeit",
      "AI/ML-Integration optional",
    ],
    useCases: [
      "Booking & Terminverwaltung",
      "Invoicing & Abrechnung",
      "Lead-Scoring & Sales-Pipeline",
      "Content-Management Systeme",
      "Subscription-Management",
      "Daten-Integration zwischen Tools",
    ],
    pricing:
      "60.000€+ für Custom SaaS-Entwicklung mit umfassenden Integrationen.",
    blogLink: "/blogs/saas-automation-nutzen",
  },
  {
    id: "7",
    slug: "ki-datenanalyse",
    title: "KI & Datenanalyse für 2026",
    subtitle: "KI & Analytics",
    description:
      "Zukunftsorientierte Lösungen mit KI-gestützter Datenanalyse, Predictive Analytics und personalisierten Marketing-Strategien für maximale Effizienz.",
    benefits: [
      "Datengestützte Entscheidungsfindung",
      "Automatische Vorhersagen & Trends",
      "Personalisierung für jeden Kunden",
      "Echtzeit-Insights & Reporting",
      "ROI-Maximierung durch KI",
      "Competitive Advantage durch Technologie",
    ],
    features: [
      "Predictive Analytics Engine",
      "Customer Behavior Modeling",
      "AI-powered Recommendations",
      "Automated Insights & Alerts",
      "Custom Dashboard & Visualisierung",
      "Machine Learning Models",
      "Integration mit bestehenden Daten",
    ],
    useCases: [
      "E-Commerce Personalisierung",
      "Customer Churn-Prediction",
      "Sales Forecasting",
      "Marketing Automation & Segmentationtl",
      "Fraud Detection",
      "Content Recommendation Engines",
    ],
    pricing:
      "80.000€+ für vollständige KI-Lösungen mit Custom Models.",
    blogLink: "/blogs/ki-datenanalyse-2026",
  },
];

export function getServiceBySlug(slug: string): ServiceType | undefined {
  return servicesData.find((service) => service.slug === slug);
}
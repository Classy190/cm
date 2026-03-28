import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Project for Sale | Classy Marketing",
  description: "Fertige Shopify- und SaaS-Projekte zum Kauf. Skalierbare Lösungen, die sofort einsatzbereit sind.",
  keywords: ["Project for Sale", "Shopify App kaufen", "SaaS App kaufen", "fertige E-Commerce-Projekte"],
};

const ProjectForSalePage = () => {
  const projects = [
    {
      title: "HalalCarrer Jobbörse",
      subtitle: "Spezialisierte Plattform für Karrierechancen in der halal-konformen Wirtschaft",
      price: "18.000€ netto",
      features: [
        "Jobsuche + Arbeitgeber-Profile",
        "Bewerbungs-Workflow, Filter nach Region & Branche",
        "Admin-Dashboard mit User-Statistiken",
      ],
      contactLabel: "Interesse? Angebot anfordern",
    },
    {
      title: "Türkiye Auswandern Info Guide",
      subtitle: "Vollständig durchstrukturierter Umzugsratgeber mit Services & Lokaler Integration",
      price: "15.000€ netto",
      features: [
        "Planungstools, Checklisten, Budgetrechner",
        "Partnernetzwerk vor Ort (Immobilien, Behördengänge, Jobs)",
        "Mehrsprachige Inhalte + SEO-Content-Pipeline",
      ],
      contactLabel: "Interesse? Angebot anfordern",
    },
    {
      title: "FAQSCHEMAPRO SEO TOOL",
      subtitle: "Automatisiertes FAQ-Schema Markup, das Sichtbarkeit und CTR steigert",
      price: "6.000€ netto",
      features: [
        "Schema-Generator + Google Rich Snippets Vorschau",
        "CMS-Integration (Shopify, WordPress, Headless)",
        "Monitoring von Impressionen und Klicks",
      ],
      contactLabel: "Interesse? Angebot anfordern",
    },
    {
      title: "KI Outreach Shopify App",
      subtitle: "Live Tracking + KI/ Mensch archivierte Signale zur Produktindexierung",
      price: "60.000€ netto",
      features: [
        "Shopify Produktdaten-Indexierung & KI-Signalübertragung",
        "Live-Tracking-Bot + Bot/Mensch-Interaktionsdaten",
        "Automatische Datenpipeline zu KI-Systemen",
      ],
      contactLabel: "Interesse? Angebot anfordern",
    },
    {
      title: "Shopify App All-in-One SEO Pro",
      subtitle: "Google & Bing SEO-Optimierung aller Produkte anhand vorhandener Daten",
      price: "89.000€ netto",
      features: [
        "Automatisierte Indexierung in Google und Bing",
        "Produktbasierte SEO-Optimierung, KI-Analyse Dashboard",
        "Schnittstellen (Shopify, Analytics, Crawling) und Monitoring",
      ],
      contactLabel: "Interesse? Angebot anfordern",
    },
  ];

  return (
    <main className="bg-white text-dark dark:bg-dark dark:text-white">
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary">
            Project for Sale
          </p>
          <h1 className="mb-6 text-3xl font-bold sm:text-4xl">
            Fertige Projekte kaufen statt neu entwickeln
          </h1>
          <p className="mb-8 text-base text-body-color dark:text-dark-6">
            Wir bieten hochwertige Shopify-Apps und SaaS-Lösungen, die bereits produktiv getestet sind. Die Projekte sind modular, erweiterbar und können als Single-Shop oder Multi-Shop-Installation eingesetzt werden.
          </p>
          <Link
            href="/pricing"
            className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-primary/90"
          >
            Preise & Konditionen prüfen
          </Link>
        </div>

        <section className="mt-16">
          <h2 className="mb-6 text-center text-3xl font-bold">Aktuell verfügbare Projekte</h2>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project, index) => (
              <article key={index} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-dark-3 dark:bg-dark">
                <h3 className="text-xl font-semibold text-dark dark:text-white">{project.title}</h3>
                <p className="mb-4 text-sm text-body-color dark:text-dark-6">{project.subtitle}</p>
                <p className="mb-4 text-lg font-bold text-primary">{project.price}</p>
                <ul className="mb-6 list-disc pl-5 text-body-color dark:text-dark-6 space-y-1">
                  {project.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
                <a
                  href={`mailto:info@classymarketing.de?subject=Interesse%20an%20Projekt%3A%20${encodeURIComponent(project.title)}`}
                  className="inline-flex w-full items-center justify-center rounded-md border border-primary bg-primary px-4 py-2 text-sm font-semibold text-white transition hover:bg-primary/95"
                >
                  {project.contactLabel}
                </a>
              </article>
            ))}
          </div>
        </section>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          <article className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-dark-3 dark:bg-dark">
            <h2 className="mb-3 text-xl font-semibold">Shopify App (Single-Shop)</h2>
            <p className="mb-4 text-body-color dark:text-dark-6">
              Maßgeschneiderte Shopify-App für einen Shop, inklusive Theme-Integration, API-Sync, individuelles Dashboard und Automationen.
            </p>
            <p className="font-semibold">Preis: ab 9.999€ netto</p>
          </article>

          <article className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-dark-3 dark:bg-dark">
            <h2 className="mb-3 text-xl font-semibold">Shopify App (Multi-Shop)</h2>
            <p className="mb-4 text-body-color dark:text-dark-6">
              Skalierbare Multi-Store-Lösung, zentral gesteuert, mit Mandantenfähigkeit, Multi-Währung und Performance-Tracking.
            </p>
            <p className="font-semibold">Preis: ab 9.999€ netto</p>
          </article>

          <article className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-dark-3 dark:bg-dark">
            <h2 className="mb-3 text-xl font-semibold">SaaS Startup-Bundle</h2>
            <p className="mb-4 text-body-color dark:text-dark-6">
              Schneller Start mit komplettem SaaS-Feature-Set: Auth, Billing, Produktverwaltung, Multi-Tenant-Architektur und API-Endpoints.
            </p>
            <p className="font-semibold">Preis: ab 9.999€ netto</p>
          </article>

          <article className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-dark-3 dark:bg-dark">
            <h2 className="mb-3 text-xl font-semibold">Individualisierte Erweiterung</h2>
            <p className="mb-4 text-body-color dark:text-dark-6">
              Erweiterung vorhandener Produkte, neue Features, Performance-Optimierung und Integrationen für bereits bestehende Shops.
            </p>
            <p className="font-semibold">Stundenpreis: ab 119€ netto</p>
          </article>
        </div>

        <div className="mt-16 rounded-xl border border-primary/30 bg-primary/5 p-6 text-primary dark:bg-primary/10 dark:text-white">
          <h3 className="mb-3 text-xl font-semibold">Warum Project for Sale?</h3>
          <ul className="list-disc pl-6 text-left text-base">
            <li className="mb-2">Schnelle Markteinführung (Time-to-Market verkürzen)</li>
            <li className="mb-2">Erprobte Lösungen mit geringem Risiko</li>
            <li className="mb-2">Flexible Anpassung an Ihre Geschäftsanforderungen</li>
            <li className="mb-2">Langfristige Wartungs- und Weiterentwicklungsoptionen</li>
          </ul>
        </div>

        <div className="mt-16 rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-dark-3 dark:bg-dark">
          <h3 className="mb-4 text-2xl font-bold text-dark dark:text-white">Deine Projekte präsentieren</h3>
          <p className="mb-6 text-body-color dark:text-dark-6">
            Du möchtest eigene Projekte als „Project for Sale“ vorstellen? Kein Problem – wir zeigen dir das Format, mit dem du Besucher überzeugst:
          </p>

          <div className="grid gap-5 md:grid-cols-2">
            <article className="rounded-lg border border-gray-200 p-4 dark:border-dark-3">
              <h4 className="mb-2 text-lg font-semibold">1. Projektübersicht</h4>
              <p className="text-body-color dark:text-dark-6">
                Kurzbeschreibung, Zielgruppe, USP und technischer Stack. Klar kommunizieren, was das Projekt mitbringt und welchen Geschäftsprozess es löst.
              </p>
            </article>
            <article className="rounded-lg border border-gray-200 p-4 dark:border-dark-3">
              <h4 className="mb-2 text-lg font-semibold">2. Screenshots & Demo</h4>
              <p className="text-body-color dark:text-dark-6">
                Füge visuelle Assets hinzu: Live-Demo-Link, Admin-Ansicht, Shop-Preview, UX-Flow. Das erhöht Vertrauen und Conversion.
              </p>
            </article>
            <article className="rounded-lg border border-gray-200 p-4 dark:border-dark-3">
              <h4 className="mb-2 text-lg font-semibold">3. Preisstruktur</h4>
              <p className="text-body-color dark:text-dark-6">
                Lege einen Klartext-Preis oder Preisrange fest (z. B. ab 9.999€) und ergänze optional Wartungs- und Upgrade-Optionen.
              </p>
            </article>
            <article className="rounded-lg border border-gray-200 p-4 dark:border-dark-3">
              <h4 className="mb-2 text-lg font-semibold">4. Call to Action</h4>
              <p className="text-body-color dark:text-dark-6">
                Ein sichtbarer Button: „Jetzt kaufen“, „Demo anfordern“, „Anfrage senden“. Link zum Kontaktformular oder direkt Auftragsklärung.
              </p>
            </article>
          </div>

          <div className="mt-8 rounded-lg bg-primary/10 p-5 dark:bg-primary/20">
            <p className="text-base font-semibold text-dark dark:text-white">
              Projekt einreichen?
            </p>
            <p className="text-body-color dark:text-dark-6">
              Schicke uns die Projektdaten (Beschreibung, Screenshot, Funktion, Preisvorstellung) an <a href="mailto:info@classymarketing.de" className="font-semibold text-primary hover:text-primary/80">info@classymarketing.de</a>.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProjectForSalePage;

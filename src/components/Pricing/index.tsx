"use client";

const Pricing = () => {
  return (
    <section
      id="pricing"
      className="relative z-20 overflow-hidden bg-white pb-12 pt-20 dark:bg-dark lg:pb-[90px] lg:pt-[120px]"
    >
      <div className="container">
        <div className="mb-[30px] text-center">
          <p className="mb-4 text-lg text-body-color dark:text-dark-6">
            Preise variieren je nach Projektumfang, Technologie und Zielsetzung.
          </p>
          <p className="text-body-color dark:text-dark-6">
            Wir bieten transparente Preismodelle und beraten Sie individuell zur bestmöglichen Lösung.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-8">
          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-dark-3 dark:bg-dark">
            <h3 className="mb-3 text-xl font-semibold text-dark dark:text-white">
              Shopify Projekte
            </h3>
            <p className="text-body-color dark:text-dark-6">
              Für Shopify-Projekte starten unsere Angebote bei <strong>2.999€ netto pro Monat</strong>. Der finale Preis hängt ab von:
            </p>
            <ul className="mt-3 list-disc pl-5 text-body-color dark:text-dark-6 space-y-2">
              <li>Shop-Architektur & Theme-Anpassung</li>
              <li>Technischen Anforderungen (Apps, Integrationen, Performance)</li>
              <li>Marketing & CRO-Strategie</li>
              <li>Support & Betrieb (incl. Wartungsverträge)</li>
            </ul>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-dark-3 dark:bg-dark">
            <h3 className="mb-3 text-xl font-semibold text-dark dark:text-white">
              SaaS-Entwicklung
            </h3>
            <p className="text-body-color dark:text-dark-6">
              Für individuelle SaaS-Lösungen berechnen wir ab <strong>119€ netto pro Stunde</strong>, abhängig von Anforderungen und Umfang.
            </p>
            <ul className="mt-3 list-disc pl-5 text-body-color dark:text-dark-6 space-y-2">
              <li>APIs, Skalierung, Hosting</li>
              <li>CI/CD und Qualitätssicherung</li>
              <li>Produkt-Roadmap und Feature-Priorisierung</li>
              <li>Wartungs- und Supportverträge für Ihr System</li>
            </ul>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-dark-3 dark:bg-dark">
            <h3 className="mb-3 text-xl font-semibold text-dark dark:text-white">
              Lokaler Webauftritt
            </h3>
            <p className="text-body-color dark:text-dark-6">
              Wir bauen lokale Webseiten (SEO-optimiert + mobil-first) ab <strong>2.500€ netto</strong>.
            </p>
            <ul className="mt-3 list-disc pl-5 text-body-color dark:text-dark-6 space-y-2">
              <li>Keyword-Targeting für lokale Top-Positionen</li>
              <li>Landingpages für regionale Kampagnen</li>
              <li>Konzeption, Design, Umsetzung und Tracking</li>
              <li>Wartungspakete für Shopify / WordPress / individuelle Systeme</li>
            </ul>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-dark-3 dark:bg-dark">
            <h3 className="mb-3 text-xl font-semibold text-dark dark:text-white">
              Shopify App Entwicklung
            </h3>
            <p className="text-body-color dark:text-dark-6">
              Eigene Shopify Apps für 1 Shop oder als Multi-Shop-Lösung ab <strong>9.999€ netto</strong> (je nach Anforderungen und Funktionalität).
            </p>
            <ul className="mt-3 list-disc pl-5 text-body-color dark:text-dark-6 space-y-2">
              <li>Ein-Shop-App: individuelle Use Cases, Shopify API, Daten-Sync</li>
              <li>Multi-Shop-Mandantenfähigkeit: zentrale Steuerung, Skalierbarkeit</li>
              <li>App-Distribution oder private App im Shopify Admin</li>
              <li>Wartung, Update-Support und Sicherheit für Shopify Apps</li>
            </ul>
          </div>

          <div className="rounded-xl border border-primary/30 bg-primary/5 p-6 text-primary dark:bg-primary/10 dark:text-white">
            <h3 className="mb-3 text-xl font-semibold">Wartungsverträge</h3>
            <p className="text-base">
              Wir bieten für verschiedene Systeme Wartungsverträge an: Shopify, SaaS, Content-Seiten, Infrastruktur-Services. 
              Regelmäßige Updates, Sicherheitspatches und Performance-Checks sind Bestandteil unserer Pakete.
            </p>
          </div>

          <p className="text-sm text-body-color dark:text-dark-6">
            Hinweis: Alle genannten Preise verstehen sich netto. Ihr individuelles Angebot erhalten Sie nach Anforderungsanalyse und Projektbriefing.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;

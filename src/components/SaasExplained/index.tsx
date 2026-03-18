import SectionTitle from "../Common/SectionTitle";

const SaasExplained = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-primary/5 to-primary/10 py-16 md:py-[100px]">
      <div className="container">
        <div className="mx-auto max-w-[900px]">
          <SectionTitle
            subtitle="Unser Modell"
            title="SaaS-Lösungen für Skalierbarkeit"
            paragraph="Wir bauen nicht nur Standard-Websites. Wir entwickeln SaaS-Plattformen und Automatisierungs-Systeme, die mit Ihrem Business wachsen."
          />

          <div className="mt-12 grid gap-8 md:grid-cols-3 lg:mt-16">
            {/* Card 1: Was ist SaaS */}
            <div className="rounded-lg border border-primary/20 bg-white p-6 shadow-lg transition hover:shadow-xl dark:bg-dark">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <span className="text-2xl">☁️</span>
              </div>
              <h3 className="mb-3 text-lg font-bold text-dark dark:text-white">
                Was ist SaaS?
              </h3>
              <p className="text-sm text-body dark:text-bodydark">
                Software-as-a-Service: Keine Installation nötig. Ihre Kunden greifen über Browser auf Ihre Lösung zu. Automatische Updates, maximale Sicherheit, beliebige Skalierung.
              </p>
            </div>

            {/* Card 2: Vorteile */}
            <div className="rounded-lg border border-primary/20 bg-white p-6 shadow-lg transition hover:shadow-xl dark:bg-dark">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="mb-3 text-lg font-bold text-dark dark:text-white">
                Ihre Vorteile
              </h3>
              <ul className="space-y-2 text-sm text-body dark:text-bodydark">
                <li>✓ Wiederkehrende Einnahmen (Subscription)</li>
                <li>✓ Automatische Prozesse, weniger Support</li>
                <li>✓ Unbegrenztes Wachstum & Skalierung</li>
              </ul>
            </div>

            {/* Card 3: Unser Ansatz */}
            <div className="rounded-lg border border-primary/20 bg-white p-6 shadow-lg transition hover:shadow-xl dark:bg-dark">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="mb-3 text-lg font-bold text-dark dark:text-white">
                Unser Ansatz
              </h3>
              <p className="text-sm text-body dark:text-bodydark">
                Wir verbinden SaaS mit KI-Automation, SEO und Conversion-Optimierung. Ihr System arbeitet rund um die Uhr für Sie.
              </p>
            </div>
          </div>

          {/* Highlight Box */}
          <div className="mt-12 rounded-xl border-2 border-primary bg-gradient-to-r from-primary/5 to-primary/10 p-6 md:p-8">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary">
                <span className="text-white">✓</span>
              </div>
              <div>
                <h4 className="mb-2 text-lg font-bold text-dark dark:text-white">
                  Warum SaaS für Ihr Geschäft?
                </h4>
                <p className="text-sm text-body dark:text-bodydark">
                  Egal ob Shopify-Shop mit automatisiertem Inventory, Online-Service mit Buchungssystem oder Kundenmanagement-Plattform — wir bauen Systeme, die Ihnen Zeit und Geld sparen und sofort skalierbar sind.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SaasExplained;

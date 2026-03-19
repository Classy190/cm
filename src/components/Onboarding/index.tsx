import SectionTitle from "../Common/SectionTitle";

const Onboarding = () => {
  return (
    <section className="py-20 md:py-[120px] dark:bg-dark lg:py-[120px]">
      <div className="container px-4">
        <SectionTitle
          subtitle="ONBOARDING"
          title="Was Sie auf Tag 1 vorbereiten sollten"
          paragraph="Damit wir direkt mit voller Kraft an Ihrem Projekt starten können, benötigen wir sichere Zugriffe auf Ihre wichtigsten Tools. Das ist völlig normal und branchenstandard."
          width="640px"
          center
        />

        <div className="mx-auto mt-16 max-w-4xl">
          <div className="grid gap-8 md:grid-cols-3">
            {/* Google Search Console */}
            <div className="rounded-lg border-2 border-transparent bg-gradient-to-br from-blue-50 to-blue-50/50 p-8 transition-all duration-300 hover:border-blue-400 dark:from-dark-700/50 dark:to-dark-700/30 dark:hover:border-blue-500">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-2xl dark:bg-blue-500/20">
                📊
              </div>
              <h3 className="mb-2 text-xl font-bold text-dark dark:text-white">
                Google Search Console
              </h3>
              <p className="text-sm text-body-color dark:text-dark-6">
                Zugriff als "Inhaber" oder "Editor" damit wir SEO-Fehler beheben, Indexierungsprobleme lösen und die Sichtbarkeit Ihrer Website verbessern können.
              </p>
            </div>

            {/* Google Analytics 4 */}
            <div className="rounded-lg border-2 border-transparent bg-gradient-to-br from-orange-50 to-orange-50/50 p-8 transition-all duration-300 hover:border-orange-400 dark:from-dark-700/50 dark:to-dark-700/30 dark:hover:border-orange-500">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100 text-2xl dark:bg-orange-500/20">
                📈
              </div>
              <h3 className="mb-2 text-xl font-bold text-dark dark:text-white">
                Google Analytics 4
              </h3>
              <p className="text-sm text-body-color dark:text-dark-6">
                Vollständiger Admin-Zugriff auf Ihr GA4-Property, damit wir Besucherströme analysieren, Konversionsrate optimieren und die Performance tracken.
              </p>
            </div>

            {/* Shop Admin (Shopify / etc.) */}
            <div className="rounded-lg border-2 border-transparent bg-gradient-to-br from-green-50 to-green-50/50 p-8 transition-all duration-300 hover:border-green-400 dark:from-dark-700/50 dark:to-dark-700/30 dark:hover:border-green-500">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-green-100 text-2xl dark:bg-green-500/20">
                🛒
              </div>
              <h3 className="mb-2 text-xl font-bold text-dark dark:text-white">
                Shop Admin Access
              </h3>
              <p className="text-sm text-body-color dark:text-dark-6">
                Admin-Zugriff auf Ihren Shopify-Shop oder E-Commerce-System. Wir optimieren Produkt-SEO, Kategorien und technische Shop-Einstellungen.
              </p>
            </div>
          </div>

          {/* Hinweis Sicherheit */}
          <div className="mt-12 rounded-lg border-l-4 border-green-500 bg-green-50 p-6 dark:bg-green-500/10">
            <p className="text-sm font-semibold text-green-700 dark:text-green-400">
              ✅ Sicherheit & Vertrauen
            </p>
            <p className="mt-2 text-sm text-body-color dark:text-dark-6">
              Alle Zugriffe erfolgen ausschließlich über offizielle Partner-Schnittstellen und Authentifizierungsmethoden (Google, Shopify, etc.). Wir speichern niemals Passwörter und nutzen modern verschlüsselte Verbindungen.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Onboarding;

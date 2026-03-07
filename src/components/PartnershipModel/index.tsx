"use client";

import SectionTitle from "../Common/SectionTitle";

const PartnershipModel = () => {
  return (
    <section className="bg-gray-50 py-16 dark:bg-dark-2 md:py-24 lg:py-32">
      <div className="container">
        <SectionTitle
          subtitle="Unser Ansatz"
          title="Langzeitpartnerschaften für nachhaltige Erfolge"
          paragraph="Wir glauben nicht an schnelle Lösungen. Strategische Webentwicklung braucht Zeit, Planung und kontinuierliche Optimierung."
          center
        />

        <div className="mt-12 grid grid-cols-1 gap-6 md:mt-16 md:gap-8 lg:grid-cols-3">
          {/* Spezialisierung 1 */}
          <div className="rounded-lg bg-white p-8 shadow-md dark:bg-dark-3">
            <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-500/20">
              <span className="text-2xl">🛍️</span>
            </div>
            <h3 className="mb-3 text-xl font-bold text-dark dark:text-white">
              Shopify Spezialist
            </h3>
            <p className="text-body-color dark:text-dark-6">
              Online-Shops, die verkaufen. Von Setup über Conversion-Optimierung bis zur Skalierung auf 6-stellige Umsätze – wir haben die Expertise.
            </p>
          </div>

          {/* Spezialisierung 2 */}
          <div className="rounded-lg bg-white p-8 shadow-md dark:bg-dark-3">
            <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-green-100 dark:bg-green-500/20">
              <span className="text-2xl">📍</span>
            </div>
            <h3 className="mb-3 text-xl font-bold text-dark dark:text-white">
              Lokale OnPage-Systeme
            </h3>
            <p className="text-body-color dark:text-dark-6">
              Ihre Kunden vor Ort erreichen. Geo-Targeting, lokale SEO, Click-and-Collect Integration – alles für maximale lokale Sichtbarkeit.
            </p>
          </div>

          {/* Spezialisierung 3 */}
          <div className="rounded-lg bg-white p-8 shadow-md dark:bg-dark-3">
            <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-500/20">
              <span className="text-2xl">⏱️</span>
            </div>
            <h3 className="mb-3 text-xl font-bold text-dark dark:text-white">
              3-6 Monate Minimum
            </h3>
            <p className="text-body-color dark:text-dark-6">
              Kurze Projekte bringen schnelle Ergebnisse. Großartige Ergebnisse brauchen Tiefenwirkung, A/B-Tests und kontinuierliche Optimierung.
            </p>
          </div>
        </div>

        {/* Warum Langzeitpartnerschaft */}
        <div className="mt-12 rounded-lg bg-primary/5 p-6 dark:bg-primary/10 md:mt-16 md:p-8">
          <h3 className="mb-6 text-xl font-bold text-dark dark:text-white md:text-2xl">
            Warum mindestens 3-6 Monate?
          </h3>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <span className="text-2xl">📊</span>
              </div>
              <div>
                <h4 className="mb-2 font-semibold text-dark dark:text-white">
                  Datan sammeln & analysieren
                </h4>
                <p className="text-sm text-body-color dark:text-dark-6">
                  Echte Insights brauchen mindestens 1-2 Monate Daten aus echten Nutzern.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <span className="text-2xl">🧪</span>
              </div>
              <div>
                <h4 className="mb-2 font-semibold text-dark dark:text-white">
                  A/B-Tests durchführen
                </h4>
                <p className="text-sm text-body-color dark:text-dark-6">
                  Variationen testen, lernen, optimieren und skalieren – das ist ein Prozess.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <span className="text-2xl">🚀</span>
              </div>
              <div>
                <h4 className="mb-2 font-semibold text-dark dark:text-white">
                  Wachstum skalieren
                </h4>
                <p className="text-sm text-body-color dark:text-dark-6">
                  Sobald etwas funktioniert, skalieren wir es systematisch für exponentielles Wachstum.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <span className="text-2xl">🛠️</span>
              </div>
              <div>
                <h4 className="mb-2 font-semibold text-dark dark:text-white">
                  Support & Wartung
                </h4>
                <p className="text-sm text-body-color dark:text-dark-6">
                  Wir sind für Dich da – nicht nur für Launch, sondern für langfristigen Erfolg.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnershipModel;
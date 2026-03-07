"use client";

import SectionTitle from "../Common/SectionTitle";

const InvestmentRanges = () => {
  return (
    <section className="pb-8 pt-20 dark:bg-dark lg:pb-[70px] lg:pt-[120px]">
      <div className="container">
        <SectionTitle
          subtitle="Investment"
          title="Was planen Sie zu investieren?"
          paragraph="Um die Machbarkeit und den Funktionsumfang Ihres Projekts realistisch planen zu können, bitten wir Sie um eine ehrliche Angabe Ihres Investitionsrahmens."
          center
        />

        <div className="-mx-4 mt-12 flex flex-wrap lg:mt-20">
          {/* Range 1 */}
          <div className="w-full px-4 md:w-1/2 lg:w-1/2">
            <div className="mb-8 border-l-4 border-primary bg-white p-8 dark:bg-dark-2">
              <h3 className="mb-4 text-2xl font-bold text-primary">
                3.999€ – 6.900€
              </h3>
              <p className="mb-4 text-base font-semibold text-dark dark:text-white">
                Einfache Landingpages oder Onepager
              </p>
              <p className="text-base text-body-color dark:text-dark-6">
                Startpakete, Beratung, grundlegende Optimierungen. Ideal für kleine Projekte und erste Schritte in der digitalen Präsenz.
              </p>
            </div>
          </div>

          {/* Range 2 */}
          <div className="w-full px-4 md:w-1/2 lg:w-1/2">
            <div className="mb-8 border-l-4 border-primary bg-white p-8 dark:bg-dark-2">
              <h3 className="mb-4 text-2xl font-bold text-primary">
                10.000€ – 15.000€
              </h3>
              <p className="mb-4 text-base font-semibold text-dark dark:text-white">
                Umfangreichere Onepager, kleine Multipager, Relaunches
              </p>
              <p className="text-base text-body-color dark:text-dark-6">
                Größere Projekte mit mehreren Seiten, Design-Anpassungen, umfangreiche SEO-Optimierungen. Für Unternehmen mit etabliertem Geschäftsmodell.
              </p>
            </div>
          </div>

          {/* Range 3 */}
          <div className="w-full px-4 md:w-1/2 lg:w-1/2">
            <div className="mb-8 border-l-4 border-primary bg-white p-8 dark:bg-dark-2">
              <h3 className="mb-4 text-2xl font-bold text-primary">
                24.000€ – 29.000€
              </h3>
              <p className="mb-4 text-base font-semibold text-dark dark:text-white">
                Einstieg in E-Commerce mit Shopify-Shop
              </p>
              <p className="text-base text-body-color dark:text-dark-6">
                Basis-Setup, Standard-Theme, individuelle Anpassungen. Vollwertiger Online-Shop mit allen grundlegenden Funktionen und SEO-Optimierung.
              </p>
            </div>
          </div>

          {/* Range 4 */}
          <div className="w-full px-4 md:w-1/2 lg:w-1/2">
            <div className="mb-8 border-l-4 border-primary bg-white p-8 dark:bg-dark-2">
              <h3 className="mb-4 text-2xl font-bold text-primary">
                60.000€+
              </h3>
              <p className="mb-4 text-base font-semibold text-dark dark:text-white">
                Komplexe Shopify-Shops mit Integrationen
              </p>
              <p className="text-base text-body-color dark:text-dark-6">
                Viele Integrationen, individuelle Themes, aufwendige Multipager, Premium-Features, umfassendes Onboarding und Support. Enterprise-Lösungen.
              </p>
            </div>
          </div>
        </div>

        {/* Important Note */}
        <div className="mt-12 rounded-lg bg-blue-50 p-8 dark:bg-dark-3">
          <h4 className="mb-4 text-lg font-semibold text-dark dark:text-white">
            📌 Wichtiger Hinweis zum Investment
          </h4>
          <p className="text-base text-body-color dark:text-dark-6">
            Um die Machbarkeit und den Funktionsumfang Ihres Projekts (z.B. einfacher Onepager vs. komplexer Shopify-Shop) realistisch planen zu können, bitten wir Sie um eine ehrliche Angabe Ihres Investitionsrahmens. So können wir Ihnen bereits im kostenlosen Erstgespräch die effektivsten und passendsten Lösungen vorschlagen.
          </p>
        </div>
      </div>
    </section>
  );
};

export default InvestmentRanges;

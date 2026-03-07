"use client";
import SectionTitle from "../Common/SectionTitle";
import PricingBox from "./PricingBox";
import { pricingData } from "@/stripe/pricingData";

const Pricing = () => {
  return (
    <section
      id="pricing"
      className="relative z-20 overflow-hidden bg-white pb-12 pt-20 dark:bg-dark lg:pb-[90px] lg:pt-[120px]"
    >
      <div className="container">
        <div className="mb-[60px]">
          <SectionTitle
            subtitle="Preisgestaltung"
            title="Professionelle SEO-Betreuung für nachhaltigen Erfolg"
            paragraph="Maximale Sichtbarkeit und qualifizierte Leads durch organische Suchmaschinenoptimierung. Unsere Pakete sind speziell auf lokale Unternehmen und Shopify-Shops zugeschnitten."
            center
          />
        </div>

        <div className="-mx-4 flex flex-wrap justify-center">
          {pricingData.map((product, i) => (
            <PricingBox key={i} product={product} />
          ))}     
        </div>

        {/* Minimum Contract Info */}
        <div className="mt-12 rounded-lg bg-blue-50 p-8 dark:bg-dark-2">
          <div className="mx-auto max-w-2xl text-center">
            <h3 className="mb-3 text-xl font-bold text-dark dark:text-white">
              ⏱️ Langzeitpartnerschaft: Mindestens 3-6 Monate
            </h3>
            <p className="mb-4 text-body-color dark:text-dark-6">
              SEO ist ein Marathon, kein Sprint. Eine Mindestvertragslaufzeit von 3-6 Monaten ermöglicht uns die Entwicklung datengetriebener Strategien, kontinuierliche Optimierung und nachhaltige Ergebnisse zu liefern.
            </p>
            <p className="text-sm text-body-color dark:text-dark-6">
              Ihre Investition zahlt sich durch messbare Rankings-Verbesserungen und qualifizierte Leads aus.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;

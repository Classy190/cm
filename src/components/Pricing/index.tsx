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
            title="Organische Top-Rankings für mehr qualifizierte Anfragen"
            paragraph="Dein Ziel ist maximale Sichtbarkeit ohne teure Werbeanzeigen? Unsere Pakete sind darauf ausgelegt, deine Webseite für relevante Suchbegriffe an die Spitze der Suchergebnisse zu bringen."
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
              ⏱️ Mindestvertrag: 3-6 Monate
            </h3>
            <p className="mb-4 text-body-color dark:text-dark-6">
              Wir konzentrieren uns auf nachhaltige Ergebnisse, nicht auf schnelle Fixes. Ein Mindestvertrag von 3-6 Monaten ermöglicht es uns, echte Erfolge zu liefern: <span className="font-semibold">Datensammlung, A/B-Tests, Optimierung und Skalierung</span>.
            </p>
            <p className="text-sm text-body-color dark:text-dark-6">
              Ihre ROI ist unser ROI. Je länger wir zusammenarbeiten, desto besser werden die Ergebnisse.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;

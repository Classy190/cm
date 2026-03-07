"use client";

import SectionTitle from "../Common/SectionTitle";

const Innovation = () => {
  return (
    <section className="pb-8 pt-20 dark:bg-dark lg:pb-[70px] lg:pt-[120px]">
      <div className="container">
        <SectionTitle
          subtitle="Innovation"
          title="Innovationen & KI-Strategien"
          paragraph="Der E-Commerce wandelt sich rasant. Wir machen Ihren Shop zukunftssicher: Von der Sichtbarkeit in KI-Assistenten bis zur intelligenten Kaufberatung. Nutzen Sie Technologien, die heute schon den Unterschied machen."
          center
        />

        <div className="-mx-4 mt-12 flex flex-wrap lg:mt-20">
          {/* Feature 1 */}
          <div className="w-full px-4 md:w-1/2">
            <div className="mb-8 rounded-lg bg-white p-8 dark:bg-dark-2">
              <h3 className="mb-4 text-2xl font-semibold text-dark dark:text-white">
                🤖 KI-Shopping & Interaktive Kaufberatung
              </h3>
              <p className="mb-4 text-base text-body-color dark:text-dark-6">
                Verwandeln Sie Ihren Shop von einem statischen Katalog in einen aktiven Verkäufer. Durch die Integration von KI-gestützten Shopping-Assistenten führen wir Ihre Besucher im Dialog zum perfekten Produkt.
              </p>
              <ul className="space-y-2 text-base text-body-color dark:text-dark-6">
                <li>✓ Höhere Conversion-Rate</li>
                <li>✓ Weniger Kaufabbrüche durch persönliche Beratung</li>
                <li>✓ Echtzeit-Kommunikation</li>
              </ul>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="w-full px-4 md:w-1/2">
            <div className="mb-8 rounded-lg bg-white p-8 dark:bg-dark-2">
              <h3 className="mb-4 text-2xl font-semibold text-dark dark:text-white">
                🔍 AI Visibility / Zukunftssicherheit
              </h3>
              <p className="mb-4 text-base text-body-color dark:text-dark-6">
                Die Suche verlagert sich von Google zu ChatGPT & Co. Wir implementieren den neuen llms.txt-Standard in Ihrem Shop. So stellen wir sicher, dass KI-Modelle Ihre Produkte korrekt auslesen.
              </p>
              <ul className="space-y-2 text-base text-body-color dark:text-dark-6">
                <li>✓ Sichtbarkeit in KI-Assistenten</li>
                <li>✓ Noch bevor die Konkurrenz es tut</li>
                <li>✓ Future-proof Setup</li>
              </ul>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="w-full px-4 md:w-1/2">
            <div className="mb-8 rounded-lg bg-white p-8 dark:bg-dark-2">
              <h3 className="mb-4 text-2xl font-semibold text-dark dark:text-white">
                ⚡ Performance SEO
              </h3>
              <p className="mb-4 text-base text-body-color dark:text-dark-6">
                Seite 2 bei Google ist der beste Ort, um etwas zu verstecken. Wir identifizieren Ihre Rankings, die knapp vor dem Durchbruch stehen, und pushen diese auf umsatzstarke Seite 1.
              </p>
              <ul className="space-y-2 text-base text-body-color dark:text-dark-6">
                <li>✓ Schwellen-Keywords identifizieren</li>
                <li>✓ Gezielte Content-Updates</li>
                <li>✓ Technische Optimierung</li>
              </ul>
            </div>
          </div>

          {/* Feature 4 */}
          <div className="w-full px-4 md:w-1/2">
            <div className="mb-8 rounded-lg bg-white p-8 dark:bg-dark-2">
              <h3 className="mb-4 text-2xl font-semibold text-dark dark:text-white">
                📊 Smart Data
              </h3>
              <p className="mb-4 text-base text-body-color dark:text-dark-6">
                Prädiktive Analyse & Trends: Reagieren Sie nicht erst, wenn es zu spät ist. Wir nutzen KI-gestützte Analysen, um Kauftrends vorherzusagen und Ihr Inventar dynamisch anzupassen.
              </p>
              <ul className="space-y-2 text-base text-body-color dark:text-dark-6">
                <li>✓ Datengetriebene Entscheidungen</li>
                <li>✓ Dynamische Anpassungen</li>
                <li>✓ Statt Bauchgefühl</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Innovation;

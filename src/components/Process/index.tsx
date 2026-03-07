"use client";

import SectionTitle from "../Common/SectionTitle";

const Process = () => {
  return (
    <section className="pb-8 pt-20 dark:bg-dark lg:pb-[70px] lg:pt-[120px]">
      <div className="container">
        <SectionTitle
          subtitle="Prozess"
          title="Klarheit und Struktur: Ihr transparenter Fahrplan zum Online-Erfolg"
          paragraph="Wir haben unseren Workflow auf Effizienz und Transparenz ausgerichtet. Von der ersten Strategie bis zum Go-Live begleiten wir Sie mit einem klaren und strukturierten Prozess, der Zeit und Kosten optimiert."
          center
        />

        <div className="-mx-4 mt-12 flex flex-wrap lg:mt-20">
          {/* Step 1 */}
          <div className="w-full px-4 md:w-1/2 lg:w-1/4">
            <div className="mb-8 rounded-lg bg-white p-8 dark:bg-dark-2">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white text-2xl font-bold">
                1
              </div>
              <h3 className="mb-4 text-xl font-semibold text-dark dark:text-white">
                Kick-off & Strategische SEO-Analyse
              </h3>
              <p className="text-base text-body-color dark:text-dark-6">
                Wir definieren Ihre Businessziele, analysieren Ihre Zielgruppe und führen eine tiefgreifende Keyword- und Wettbewerbsanalyse durch. Dies bildet die Grundlage für eine konversionsstarke Architektur.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="w-full px-4 md:w-1/2 lg:w-1/4">
            <div className="mb-8 rounded-lg bg-white p-8 dark:bg-dark-2">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white text-2xl font-bold">
                2
              </div>
              <h3 className="mb-4 text-xl font-semibold text-dark dark:text-white">
                Content-Erstellung & Copywriting
              </h3>
              <p className="text-base text-body-color dark:text-dark-6">
                Erstellung suchmaschinenoptimierter (SEO-) Texte und Copywriting, das den Nutzer emotional abholt. Wir formulieren klare Wertversprechen und Call-to-Actions.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="w-full px-4 md:w-1/2 lg:w-1/4">
            <div className="mb-8 rounded-lg bg-white p-8 dark:bg-dark-2">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white text-2xl font-bold">
                3
              </div>
              <h3 className="mb-4 text-xl font-semibold text-dark dark:text-white">
                Modernes UX/UI-Webdesign & Prototyping
              </h3>
              <p className="text-base text-body-color dark:text-dark-6">
                Entwicklung eines responsiven, benutzerfreundlichen Designs. Das Layout repräsentiert Ihre Marke professionell und wird für alle Endgeräte optimiert.
              </p>
            </div>
          </div>

          {/* Step 4 */}
          <div className="w-full px-4 md:w-1/2 lg:w-1/4">
            <div className="mb-8 rounded-lg bg-white p-8 dark:bg-dark-2">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white text-2xl font-bold">
                4
              </div>
              <h3 className="mb-4 text-xl font-semibold text-dark dark:text-white">
                Technische Implementierung & Go-Live
              </h3>
              <p className="text-base text-body-color dark:text-dark-6">
                Professionelle Programmierung mit sauberem, reaktionsschnellem Code. Nach ausführlichen Tests erfolgt der SEO-freundliche Go-Live mit technischer Perfektion.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;

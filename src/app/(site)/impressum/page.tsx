"use client";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum - Classy Marketing",
  description: "Impressum und Kontaktinformationen von Classy Marketing",
};

export default function Impressum() {
  return (
    <>
      <section className="relative overflow-hidden bg-primary pt-[100px] md:pt-[130px] lg:pt-[160px] pb-[60px] md:pb-[100px]">
        <div className="container">
          <div className="mx-auto max-w-[680px]">
            <h1 className="mb-6 text-3xl font-bold text-white sm:text-4xl">
              Impressum
            </h1>
            <p className="text-white/80">
              Rechtliche Informationen und Kontaktdaten von Classy Marketing
            </p>
          </div>
        </div>
      </section>

      <section className="relative py-16 md:py-[100px]">
        <div className="container">
          <div className="mx-auto max-w-[880px]">
            <div className="space-y-10">
              {/* Angaben gemäß TMG */}
              <div>
                <h2 className="mb-6 text-2xl font-bold text-dark dark:text-white">
                  1. Angaben gemäß § 5 TMG
                </h2>

                <div className="mb-8 rounded-lg border border-primary/20 bg-white/50 p-6 dark:bg-dark/50">
                  <h3 className="mb-4 text-lg font-semibold text-dark dark:text-white">
                    Inhaber & Geschäftsführung
                  </h3>
                  <p className="mb-2 text-base text-body-color dark:text-dark-6">
                    <strong>Name:</strong> Özgür Atik
                  </p>
                  <p className="mb-2 text-base text-body-color dark:text-dark-6">
                    <strong>Unternehmensname:</strong> Classy Marketing
                  </p>
                  <p className="mb-2 text-base text-body-color dark:text-dark-6">
                    <strong>Adresse:</strong><br />
                    Hauptstrasse 8<br />
                    69190 Walldorf<br />
                    Bundesrepublik Deutschland
                  </p>
                </div>
              </div>

              {/* Kontaktdaten */}
              <div>
                <h2 className="mb-6 text-2xl font-bold text-dark dark:text-white">
                  2. Kontaktdaten
                </h2>

                <div className="space-y-4">
                  <p className="text-base text-body-color dark:text-dark-6">
                    <strong>E-Mail:</strong>{" "}
                    <a
                      href="mailto:info@classymarketing.de"
                      className="text-primary hover:text-primary/80"
                    >
                      info@classymarketing.de
                    </a>
                  </p>
                  <p className="text-base text-body-color dark:text-dark-6">
                    <strong>Telefon:</strong>{" "}
                    <a
                      href="tel:+4962267723099"
                      className="text-primary hover:text-primary/80"
                    >
                      +49 (0) 622 6 77 23 099
                    </a>
                  </p>
                  <p className="text-base text-body-color dark:text-dark-6">
                    <strong>Website:</strong>{" "}
                    <a
                      href="https://classymarketing.de"
                      className="text-primary hover:text-primary/80"
                    >
                      www.classymarketing.de
                    </a>
                  </p>
                </div>
              </div>

              {/* Umsatzsteuer */}
              <div>
                <h2 className="mb-6 text-2xl font-bold text-dark dark:text-white">
                  3. Umsatzsteuer-Identifikationsnummer
                </h2>

                <p className="text-base text-body-color dark:text-dark-6">
                  <strong>USt-ID:</strong> Auf Anfrage erhältlich
                </p>
              </div>

              {/* Haftungsausschluss */}
              <div>
                <h2 className="mb-6 text-2xl font-bold text-dark dark:text-white">
                  4. Haftungsausschluss
                </h2>

                <h3 className="mb-4 text-lg font-semibold text-dark dark:text-white">
                  Haftung für Inhalte
                </h3>
                <p className="mb-6 text-base text-body-color dark:text-dark-6">
                  Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit,
                  Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.
                  Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten
                  nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8–10 des TMG sind wir als
                  Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
                  Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige
                  Tätigkeit hinweisen.
                </p>

                <h3 className="mb-4 text-lg font-semibold text-dark dark:text-white">
                  Haftung für Links
                </h3>
                <p className="mb-6 text-base text-body-color dark:text-dark-6">
                  Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen
                  Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen.
                  Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der
                  Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf
                  mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der
                  Verlinkung nicht erkennbar.
                </p>

                <h3 className="mb-4 text-lg font-semibold text-dark dark:text-white">
                  Urheberrecht
                </h3>
                <p className="text-base text-body-color dark:text-dark-6">
                  Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen
                  dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art
                  der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen
                  Zustimmung des Autors oder Schöpfers.
                </p>
              </div>

              {/* Datenschutz */}
              <div>
                <h2 className="mb-6 text-2xl font-bold text-dark dark:text-white">
                  5. Datenschutz
                </h2>

                <p className="mb-4 text-base text-body-color dark:text-dark-6">
                  Informationen zur Verarbeitung Ihrer personenbezogenen Daten finden Sie in unserer{" "}
                  <a
                    href="/datenschutz"
                    className="text-primary hover:text-primary/80 underline"
                  >
                    Datenschutzerklärung
                  </a>
                  .
                </p>
              </div>

              {/* Streitbeilegung */}
              <div>
                <h2 className="mb-6 text-2xl font-bold text-dark dark:text-white">
                  6. Verbraucherstreitbeilegung / Universalschiedsverfahren
                </h2>

                <p className="text-base text-body-color dark:text-dark-6">
                  Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
                  Verbraucherschlichtungsstelle teilzunehmen.
                </p>
              </div>

              {/* Änderungen */}
              <div className="rounded-lg border-l-4 border-primary bg-primary/5 p-6 dark:bg-primary/10">
                <p className="text-sm text-body-color dark:text-dark-6">
                  <strong>Hinweis:</strong> Das Impressum wurde zuletzt aktualisiert am{" "}
                  {new Date().toLocaleDateString("de-DE", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                  . Wir behalten uns vor, die Informationen jederzeit zu ändern.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

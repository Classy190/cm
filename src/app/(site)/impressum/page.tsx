"use client";

export default function Impressum() {
  return (
    <>
      <section className="relative overflow-hidden bg-primary pt-[100px] md:pt-[130px] lg:pt-[160px] pb-[60px] md:pb-[100px]">
        <div className="container">
          <div className="mx-auto max-w-[680px]">
            <h1 className="mb-6 text-3xl font-bold text-white sm:text-4xl">
              Impressum
            </h1>
          </div>
        </div>
      </section>

      <section className="relative py-16 md:py-[100px]">
        <div className="container">
          <div className="mx-auto max-w-[880px]">
            <div className="prose prose-invert max-w-none">
              <h2 className="mb-6 text-2xl font-bold text-dark dark:text-white">
                Angaben gemäß § 5 TMG
              </h2>

              <div className="mb-8">
                <h3 className="mb-4 text-lg font-semibold text-dark dark:text-white">
                  Vertreter
                </h3>
                <p className="mb-3 text-base text-body-color dark:text-dark-6">
                  <strong>Name:</strong> Özgür Atik
                </p>
                <p className="mb-3 text-base text-body-color dark:text-dark-6">
                  <strong>Adresse:</strong><br />
                  Hauptstrasse 8<br />
                  69190 Walldorf<br />
                  Deutschland
                </p>
              </div>

              <div className="mb-8">
                <h3 className="mb-4 text-lg font-semibold text-dark dark:text-white">
                  Kontaktdaten
                </h3>
                <p className="mb-3 text-base text-body-color dark:text-dark-6">
                  <strong>E-Mail:</strong>{" "}
                  <a href="mailto:info@classymarketing.de" className="text-primary hover:text-primary/80">
                    info@classymarketing.de
                  </a>
                </p>
              </div>

              <div className="mb-8">
                <h3 className="mb-4 text-lg font-semibold text-dark dark:text-white">
                  Umsatzsteuer-Identifikationsnummer
                </h3>
                <p className="text-base text-body-color dark:text-dark-6">
                  Gemäß §27a UStG wird die Umsatzsteuer-Identifikationsnummer auf Anfrage mitgeteilt.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="mb-4 text-lg font-semibold text-dark dark:text-white">
                  Verantwortlichkeit für Inhalte
                </h3>
                <p className="mb-3 text-base text-body-color dark:text-dark-6">
                  Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 des TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
                </p>
                <p className="text-base text-body-color dark:text-dark-6">
                  Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="mb-4 text-lg font-semibold text-dark dark:text-white">
                  Haftung für Links
                </h3>
                <p className="text-base text-body-color dark:text-dark-6">
                  Unsere Website enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese externen Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="mb-4 text-lg font-semibold text-dark dark:text-white">
                  Urheberrecht
                </h3>
                <p className="text-base text-body-color dark:text-dark-6">
                  Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des Autors oder Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
                </p>
              </div>

              <div>
                <h3 className="mb-4 text-lg font-semibold text-dark dark:text-white">
                  Datenschutz
                </h3>
                <p className="text-base text-body-color dark:text-dark-6">
                  Bitte beachten Sie unsere Datenschutzerklärung zur Nutzung unserer Website.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

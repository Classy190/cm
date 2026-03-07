"use client";

import SectionTitle from "../Common/SectionTitle";

const AccessTools = () => {
  return (
    <section className="pb-8 pt-20 dark:bg-dark lg:pb-[70px] lg:pt-[120px]">
      <div className="container">
        <SectionTitle
          subtitle="Zugriffe"
          title="Effizientes Onboarding: Benötigte Zugriffe für Ihren Erfolg"
          paragraph="Um Ihre Marketing-Performance präzise analysieren und skalieren zu können, benötigen wir zu Beginn unserer Zusammenarbeit Zugriff auf Ihre Kern-Systeme. Dies sichert eine datenbasierte Arbeitsweise und maximale Transparenz."
          center
        />

        <div className="-mx-4 mt-12 flex flex-wrap lg:mt-20">
          {/* Access 1 */}
          <div className="w-full px-4 md:w-1/2 lg:w-1/3">
            <div className="mb-8 rounded-lg bg-white p-8 dark:bg-dark-2">
              <div className="mb-6 text-4xl">🌐</div>
              <h3 className="mb-4 text-xl font-semibold text-dark dark:text-white">
                Webseite & Onlineshop
              </h3>
              <p className="mb-4 text-base text-body-color dark:text-dark-6">
                Wir optimieren direkt dort, wo Ihre Kunden kaufen. 
              </p>
              <div className="rounded bg-blue-50 p-4 dark:bg-dark-3">
                <p className="text-sm font-medium text-dark dark:text-white">
                  Nutzen:
                </p>
                <ul className="mt-2 space-y-1 text-sm text-body-color dark:text-dark-6">
                  <li>✓ Umsetzung von SEO-Maßnahmen</li>
                  <li>✓ Verbesserung der Conversion-Rate (CRO)</li>
                  <li>✓ Technische Überprüfung</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Access 2 */}
          <div className="w-full px-4 md:w-1/2 lg:w-1/3">
            <div className="mb-8 rounded-lg bg-white p-8 dark:bg-dark-2">
              <div className="mb-6 text-4xl">🔍</div>
              <h3 className="mb-4 text-xl font-semibold text-dark dark:text-white">
                Google Search Console
              </h3>
              <p className="mb-4 text-base text-body-color dark:text-dark-6">
                Das direkte Kommunikationsmittel zu Google.
              </p>
              <div className="rounded bg-blue-50 p-4 dark:bg-dark-3">
                <p className="text-sm font-medium text-dark dark:text-white">
                  Nutzen:
                </p>
                <ul className="mt-2 space-y-1 text-sm text-body-color dark:text-dark-6">
                  <li>✓ Suchbegriff-Identifikation</li>
                  <li>✓ Indexierungsprobleme beheben</li>
                  <li>✓ Ranking-Überwachung</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Access 3 */}
          <div className="w-full px-4 md:w-1/2 lg:w-1/3">
            <div className="mb-8 rounded-lg bg-white p-8 dark:bg-dark-2">
              <div className="mb-6 text-4xl">📊</div>
              <h3 className="mb-4 text-xl font-semibold text-dark dark:text-white">
                Google Analytics (GA4)
              </h3>
              <p className="mb-4 text-base text-body-color dark:text-dark-6">
                Ohne Daten keine Skalierung.
              </p>
              <div className="rounded bg-blue-50 p-4 dark:bg-dark-3">
                <p className="text-sm font-medium text-dark dark:text-white">
                  Nutzen:
                </p>
                <ul className="mt-2 space-y-1 text-sm text-body-color dark:text-dark-6">
                  <li>✓ Nutzerverhalten analysieren</li>
                  <li>✓ Erfolg messen (ROAS/ROI)</li>
                  <li>✓ Budget effizient einsetzen</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20">
          <h3 className="mb-12 text-center text-3xl font-bold text-dark dark:text-white">
            Häufig gestellte Fragen
          </h3>
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 md:w-1/2">
              <div className="mb-8">
                <h4 className="mb-4 text-lg font-semibold text-dark dark:text-white">
                  Warum benötigt Classy Marketing Zugriff?
                </h4>
                <p className="text-base text-body-color dark:text-dark-6">
                  Der Zugriff ermöglicht uns die direkte Umsetzung von SEO-Optimierungen und die Verbesserung der Conversion-Rate, um Ihren Umsatz nachhaltig zu steigern.
                </p>
              </div>
            </div>
            <div className="w-full px-4 md:w-1/2">
              <div className="mb-8">
                <h4 className="mb-4 text-lg font-semibold text-dark dark:text-white">
                  Wie sicher sind meine Daten?
                </h4>
                <p className="text-base text-body-color dark:text-dark-6">
                  Sicherheit hat oberste Priorität. Alle Zugriffe erfolgen über offizielle Partner-Schnittstellen. Sie behalten die volle Inhaberschaft und können Berechtigungen jederzeit entziehen.
                </p>
              </div>
            </div>
            <div className="w-full px-4 md:w-1/2">
              <div className="mb-8">
                <h4 className="mb-4 text-lg font-semibold text-dark dark:text-white">
                  Muss ich Passwörter teilen?
                </h4>
                <p className="text-base text-body-color dark:text-dark-6">
                  Nein. Sie fügen unsere Agentur-E-Mail einfach als Nutzer oder Partner in den jeweiligen Tools hinzu. Ihre privaten Zugangsdaten bleiben komplett geheim.
                </p>
              </div>
            </div>
            <div className="w-full px-4 md:w-1/2">
              <div className="mb-8">
                <h4 className="mb-4 text-lg font-semibold text-dark dark:text-white">
                  Was, wenn ich keinen Zugriff geben möchte?
                </h4>
                <p className="text-base text-body-color dark:text-dark-6">
                  Ohne fundierte Datenbasis arbeiten wir im Blindflug. Die Zugriffe sind essenziell, um den Erfolg unserer Arbeit messbar zu machen und Ihre Investitionen zu schützen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccessTools;

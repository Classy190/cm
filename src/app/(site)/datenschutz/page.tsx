import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutzerklärung - Classy Marketing",
  description: "Datenschutzerklärung gemäß DSGVO – Classy Marketing, Özgür Atik, Walldorf",
};

export default function Datenschutz() {
  return (
    <>
      <section className="relative overflow-hidden bg-primary pt-[100px] md:pt-[130px] lg:pt-[160px] pb-[60px] md:pb-[100px]">
        <div className="container">
          <div className="mx-auto max-w-[680px]">
            <h1 className="mb-6 text-3xl font-bold text-white sm:text-4xl">
              Datenschutzerklärung
            </h1>
            <p className="text-white/80">
              Informationen zur Verarbeitung Ihrer personenbezogenen Daten gemäß Art. 13 DSGVO
            </p>
          </div>
        </div>
      </section>

      <section className="relative py-16 md:py-[100px]">
        <div className="container">
          <div className="mx-auto max-w-[880px]">
            <div className="space-y-10">

              {/* 1. Verantwortlicher */}
              <div>
                <h2 className="mb-6 text-2xl font-bold text-dark dark:text-white">
                  1. Verantwortlicher
                </h2>
                <div className="rounded-lg bg-gray-50 p-6 dark:bg-dark-2">
                  <p className="text-base text-body-color dark:text-dark-6">
                    <strong>Classy Marketing</strong><br />
                    Inhaber: Özgür Atik<br />
                    Hauptstrasse 8<br />
                    69190 Walldorf<br />
                    Deutschland<br />
                    <br />
                    E-Mail: <a href="mailto:info@classymarketing.de" className="text-primary hover:text-primary/80">info@classymarketing.de</a><br />
                    Website: <a href="https://classymarketing.de" className="text-primary hover:text-primary/80">www.classymarketing.de</a>
                  </p>
                </div>
              </div>

              {/* 2. Allgemeine Hinweise */}
              <div>
                <h2 className="mb-6 text-2xl font-bold text-dark dark:text-white">
                  2. Allgemeine Hinweise
                </h2>
                <p className="mb-4 text-base text-body-color dark:text-dark-6">
                  Wir nehmen den Schutz Ihrer personenbezogenen Daten sehr ernst und behandeln Ihre Daten vertraulich entsprechend der gesetzlichen Datenschutzvorschriften (DSGVO, BDSG) sowie dieser Datenschutzerklärung. Die Nutzung unserer Website ist in der Regel ohne Angabe personenbezogener Daten möglich.
                </p>
              </div>

              {/* 3. Hosting */}
              <div>
                <h2 className="mb-6 text-2xl font-bold text-dark dark:text-white">
                  3. Hosting – Vercel
                </h2>
                <p className="mb-4 text-base text-body-color dark:text-dark-6">
                  Diese Website wird gehostet von <strong>Vercel Inc.</strong>, 340 Pine Street, Suite 701, San Francisco, CA 94104, USA. Wenn Sie unsere Website besuchen, werden automatisch folgende technische Daten in Server-Logfiles erfasst:
                </p>
                <ul className="mb-4 space-y-2 text-base text-body-color dark:text-dark-6 list-disc pl-6">
                  <li>IP-Adresse des anfragenden Geräts</li>
                  <li>Datum und Uhrzeit des Zugriffs</li>
                  <li>Name und URL der abgerufenen Datei</li>
                  <li>Browser-Typ und -Version</li>
                  <li>Betriebssystem</li>
                  <li>Referrer-URL (zuvor besuchte Seite)</li>
                </ul>
                <p className="mb-4 text-base text-body-color dark:text-dark-6">
                  <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an technischem Betrieb der Website).<br />
                  <strong>Speicherdauer:</strong> Maximal 30 Tage, danach automatische Löschung.<br />
                  <strong>Drittlandtransfer:</strong> Vercel ist ein US-Unternehmen. Die Datenübermittlung erfolgt auf Basis von Standardvertragsklauseln (Art. 46 DSGVO). Weitere Informationen: <a href="https://vercel.com/legal/privacy-policy" className="text-primary hover:text-primary/80" target="_blank" rel="noopener noreferrer">Vercel Datenschutzrichtlinie</a>.
                </p>
              </div>

              {/* 4. Datenbank */}
              <div>
                <h2 className="mb-6 text-2xl font-bold text-dark dark:text-white">
                  4. Datenbank – Neon (PostgreSQL)
                </h2>
                <p className="mb-4 text-base text-body-color dark:text-dark-6">
                  Zur Speicherung von Kontaktanfragen nutzen wir den Datenbankdienst <strong>Neon, Inc.</strong> (PostgreSQL-as-a-Service), 548 Market St PMB 50727, San Francisco, CA 94104, USA. Kontaktanfragen, die Sie über unsere Website senden, werden in dieser Datenbank gespeichert.
                </p>
                <p className="mb-4 text-base text-body-color dark:text-dark-6">
                  <strong>Gespeicherte Daten:</strong> Name, E-Mail-Adresse, Nachricht, Projektart, gewünschter Zeitrahmen.<br />
                  <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. b DSGVO (Vertragsanbahnung) bzw. Art. 6 Abs. 1 lit. a DSGVO (Einwilligung).<br />
                  <strong>Speicherdauer:</strong> Bis zur abschließenden Bearbeitung Ihrer Anfrage, maximal 3 Jahre.<br />
                  <strong>Drittlandtransfer:</strong> Neon ist ein US-Unternehmen. Datenübermittlung auf Basis von Standardvertragsklauseln (Art. 46 DSGVO).
                </p>
              </div>

              {/* 5. E-Mail-Versand */}
              <div>
                <h2 className="mb-6 text-2xl font-bold text-dark dark:text-white">
                  5. E-Mail-Versand – Resend
                </h2>
                <p className="mb-4 text-base text-body-color dark:text-dark-6">
                  Für den transaktionalen E-Mail-Versand (Bestätigungsmails bei Kontaktanfragen) nutzen wir den Dienst <strong>Resend, Inc.</strong>, 2261 Market Street #4008, San Francisco, CA 94114, USA.
                </p>
                <p className="mb-4 text-base text-body-color dark:text-dark-6">
                  Wenn Sie uns eine Anfrage über das Formular senden, wird Ihre E-Mail-Adresse und Ihr Name zur Zustellung einer Bestätigungsmail an Resend übermittelt.<br />
                  <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. b DSGVO.<br />
                  <strong>Drittlandtransfer:</strong> Resend ist ein US-Unternehmen. Datenübermittlung auf Basis von Standardvertragsklauseln. Weitere Informationen: <a href="https://resend.com/legal/privacy-policy" className="text-primary hover:text-primary/80" target="_blank" rel="noopener noreferrer">Resend Datenschutzrichtlinie</a>.
                </p>
              </div>

              {/* 6. Kontaktaufnahme per E-Mail */}
              <div>
                <h2 className="mb-6 text-2xl font-bold text-dark dark:text-white">
                  6. Kontaktaufnahme per E-Mail
                </h2>
                <p className="mb-4 text-base text-body-color dark:text-dark-6">
                  Wenn Sie uns per E-Mail kontaktieren, werden die übermittelten Daten (Ihre E-Mail-Adresse, Name und Nachrichteninhalt) zum Zweck der Bearbeitung Ihrer Anfrage bei uns gespeichert.
                </p>
                <p className="text-base text-body-color dark:text-dark-6">
                  <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. b DSGVO (Vertragsanbahnung) bzw. Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an Beantwortung der Anfrage).<br />
                  <strong>Speicherdauer:</strong> Bis zur abschließenden Bearbeitung Ihrer Anfrage. Bei steuerrechtlicher Relevanz bis zu 10 Jahre (§ 147 AO).
                </p>
              </div>

              {/* 7. Cookies */}
              <div>
                <h2 className="mb-6 text-2xl font-bold text-dark dark:text-white">
                  7. Cookies und lokale Speicherung
                </h2>
                <p className="mb-4 text-base text-body-color dark:text-dark-6">
                  Unsere Website verwendet ausschließlich technisch notwendige Cookies und lokale Speicherung. Es werden <strong>keine Analyse- oder Marketing-Cookies</strong> eingesetzt.
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm text-body-color dark:text-dark-6 border-collapse">
                    <thead>
                      <tr className="bg-gray-100 dark:bg-dark-2">
                        <th className="p-3 text-left font-semibold border border-gray-200 dark:border-dark-3">Name</th>
                        <th className="p-3 text-left font-semibold border border-gray-200 dark:border-dark-3">Zweck</th>
                        <th className="p-3 text-left font-semibold border border-gray-200 dark:border-dark-3">Speicherdauer</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="p-3 border border-gray-200 dark:border-dark-3">cookieConsent</td>
                        <td className="p-3 border border-gray-200 dark:border-dark-3">Speichert Ihre Cookie-Einwilligung (localStorage)</td>
                        <td className="p-3 border border-gray-200 dark:border-dark-3">Bis Browser-Cache geleert wird</td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-dark-2">
                        <td className="p-3 border border-gray-200 dark:border-dark-3">admin_session</td>
                        <td className="p-3 border border-gray-200 dark:border-dark-3">Authentifizierung im Admin-Bereich (nur für Website-Betreiber)</td>
                        <td className="p-3 border border-gray-200 dark:border-dark-3">Session / bis Logout</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="mt-4 text-base text-body-color dark:text-dark-6">
                  <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse am technischen Betrieb der Website).
                </p>
              </div>

              {/* 8. Rechtsgrundlagen */}
              <div>
                <h2 className="mb-6 text-2xl font-bold text-dark dark:text-white">
                  8. Rechtsgrundlagen der Datenverarbeitung
                </h2>
                <div className="space-y-4 text-base text-body-color dark:text-dark-6">
                  <div className="border-l-4 border-primary pl-4">
                    <strong>Art. 6 Abs. 1 lit. a DSGVO – Einwilligung:</strong>
                    <p className="mt-1">Wenn Sie uns über das Kontaktformular Daten mitteilen und der Verarbeitung zugestimmt haben. Widerruf jederzeit möglich.</p>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <strong>Art. 6 Abs. 1 lit. b DSGVO – Vertragserfüllung / Vertragsanbahnung:</strong>
                    <p className="mt-1">Zur Bearbeitung von Anfragen und im Rahmen der Anbahnung eines Vertragsverhältnisses.</p>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <strong>Art. 6 Abs. 1 lit. f DSGVO – Berechtigtes Interesse:</strong>
                    <p className="mt-1">Für technischen Betrieb der Website, Sicherheit und Missbrauchserkennung.</p>
                  </div>
                </div>
              </div>

              {/* 9. Speicherdauer */}
              <div>
                <h2 className="mb-6 text-2xl font-bold text-dark dark:text-white">
                  9. Speicherdauer
                </h2>
                <p className="text-base text-body-color dark:text-dark-6">
                  Wir speichern personenbezogene Daten nur so lange, wie es für den jeweiligen Zweck erforderlich ist oder gesetzliche Aufbewahrungspflichten bestehen. Kontaktanfragen werden nach abschließender Bearbeitung gelöscht, spätestens nach 3 Jahren. E-Mail-Korrespondenz mit steuerrechtlicher Relevanz wird gemäß § 147 AO bis zu 10 Jahre aufbewahrt.
                </p>
              </div>

              {/* 10. Ihre Rechte */}
              <div>
                <h2 className="mb-6 text-2xl font-bold text-dark dark:text-white">
                  10. Ihre Datenschutzrechte
                </h2>
                <p className="mb-4 text-base text-body-color dark:text-dark-6">Sie haben gegenüber uns folgende Rechte:</p>
                <div className="space-y-3">
                  {[
                    ["Auskunft (Art. 15 DSGVO)", "Welche Daten von Ihnen wir verarbeiten."],
                    ["Berichtigung (Art. 16 DSGVO)", "Korrektur unrichtiger oder unvollständiger Daten."],
                    ["Löschung (Art. 17 DSGVO)", "Löschung Ihrer Daten, soweit keine gesetzliche Aufbewahrungspflicht besteht."],
                    ["Einschränkung (Art. 18 DSGVO)", "Einschränkung der Verarbeitung Ihrer Daten."],
                    ["Datenübertragbarkeit (Art. 20 DSGVO)", "Übermittlung Ihrer Daten in maschinenlesbarem Format."],
                    ["Widerspruch (Art. 21 DSGVO)", "Widerspruch gegen die Verarbeitung auf Basis berechtigter Interessen."],
                    ["Widerruf (Art. 7 Abs. 3 DSGVO)", "Widerruf einer erteilten Einwilligung mit Wirkung für die Zukunft."],
                  ].map(([title, desc]) => (
                    <div key={title} className="border-l-4 border-primary pl-4">
                      <strong className="text-dark dark:text-white">{title}</strong>
                      <p className="mt-1 text-sm text-body-color dark:text-dark-6">{desc}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-6 rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
                  <p className="text-sm text-blue-800 dark:text-blue-400">
                    Zur Geltendmachung Ihrer Rechte wenden Sie sich an: <a href="mailto:info@classymarketing.de" className="font-semibold hover:underline">info@classymarketing.de</a>
                  </p>
                </div>
              </div>

              {/* 11. Beschwerderecht */}
              <div>
                <h2 className="mb-6 text-2xl font-bold text-dark dark:text-white">
                  11. Beschwerderecht bei der Aufsichtsbehörde
                </h2>
                <p className="mb-4 text-base text-body-color dark:text-dark-6">
                  Sie haben das Recht, sich bei der zuständigen Datenschutz-Aufsichtsbehörde zu beschweren (Art. 77 DSGVO):
                </p>
                <div className="rounded-lg bg-gray-50 p-6 dark:bg-dark-2">
                  <p className="text-base text-body-color dark:text-dark-6">
                    <strong>Der Landesbeauftragte für den Datenschutz und die Informationsfreiheit Baden-Württemberg (LfDI BW)</strong><br />
                    Königstraße 10a<br />
                    70173 Stuttgart<br />
                    Telefon: +49 711 615541-0<br />
                    E-Mail: poststelle@lfdi.bwl.de<br />
                    Website: <a href="https://www.baden-wuerttemberg.datenschutz.de" className="text-primary hover:text-primary/80" target="_blank" rel="noopener noreferrer">www.baden-wuerttemberg.datenschutz.de</a>
                  </p>
                </div>
              </div>

              {/* 12. Datensicherheit */}
              <div>
                <h2 className="mb-6 text-2xl font-bold text-dark dark:text-white">
                  12. Datensicherheit
                </h2>
                <p className="mb-4 text-base text-body-color dark:text-dark-6">
                  Wir setzen technische und organisatorische Sicherheitsmaßnahmen ein, um Ihre Daten vor unbefugtem Zugriff zu schützen:
                </p>
                <ul className="space-y-2 text-base text-body-color dark:text-dark-6 list-disc pl-6">
                  <li>SSL/TLS-Verschlüsselung der gesamten Datenübertragung (HTTPS)</li>
                  <li>Zugriffsbeschränkung auf personenbezogene Daten</li>
                  <li>Regelmäßige Sicherheitsupdates der eingesetzten Software</li>
                  <li>Hosting auf sicheren, zertifizierten Infrastrukturen (Vercel)</li>
                </ul>
              </div>

              {/* 13. Aktualität */}
              <div className="rounded-lg border-l-4 border-primary bg-primary/5 p-6 dark:bg-primary/10">
                <p className="text-sm text-body-color dark:text-dark-6">
                  <strong>Stand:</strong> März 2026. Wir behalten uns vor, diese Datenschutzerklärung bei Änderungen der rechtlichen Lage oder unserer Dienste anzupassen.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}


export default function Datenschutz() {
  return (
    <>
      <section className="relative overflow-hidden bg-primary pt-[100px] md:pt-[130px] lg:pt-[160px] pb-[60px] md:pb-[100px]">
        <div className="container">
          <div className="mx-auto max-w-[680px]">
            <h1 className="mb-6 text-3xl font-bold text-white sm:text-4xl">
              Datenschutzerklärung
            </h1>
            <p className="text-white/80">
              Informationen zur Verarbeitung Ihrer personenbezogenen Daten gemäß DSGVO und BDSG
            </p>
          </div>
        </div>
      </section>

      <section className="relative py-16 md:py-[100px]">
        <div className="container">
          <div className="mx-auto max-w-[880px]">
            <div className="space-y-10">
              {/* 1. Datenschutz auf einen Blick */}
              <div>
                <h2 className="mb-6 text-2xl font-bold text-dark dark:text-white">
                  1. Datenschutz auf einen Blick
                </h2>

                <h3 className="mb-4 text-lg font-semibold text-dark dark:text-white">
                  Allgemeine Hinweise
                </h3>
                <p className="mb-6 text-base text-body-color dark:text-dark-6">
                  Die folgenden Hinweise geben einen Überblick darüber, wie wir Ihre personenbezogenen Daten verarbeiten. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Wir verarbeiten Ihre Daten nur mit Ihrer Einwilligung oder wenn eine andere Rechtsgrundlage vorliegt und treffen umfassende Sicherheitsmaßnahmen zu ihrem Schutz.
                </p>
              </div>

              {/* 2. Verantwortlicher */}
              <div>
                <h2 className="mb-6 text-2xl font-bold text-dark dark:text-white">
                  2. Verantwortlicher
                </h2>

                <p className="mb-4 text-base text-body-color dark:text-dark-6">
                  Die verantwortliche Stelle für die Datenverarbeitung ist:
                </p>

                <div className="rounded-lg bg-gray-50 p-6 dark:bg-dark-2">
                  <p className="text-base text-body-color dark:text-dark-6">
                    <strong>Classy Marketing</strong><br />
                    Inhaber: Özgür Atik<br />
                    Hauptstrasse 8<br />
                    69190 Walldorf, Deutschland<br />
                    <br />
                    <strong>Kontakt:</strong><br />
                    E-Mail: <a href="mailto:info@classymarketing.de" className="text-primary hover:text-primary/80">info@classymarketing.de</a>
                  </p>
                </div>
              </div>

              {/* 3. Erfassung und Verarbeitung */}
              <div>
                <h2 className="mb-6 text-2xl font-bold text-dark dark:text-white">
                  3. Erfassung und Verarbeitung von Daten
                </h2>

                <h3 className="mb-4 text-lg font-semibold text-dark dark:text-white">
                  Welche Daten erfassen wir?
                </h3>
                <p className="mb-6 text-base text-body-color dark:text-dark-6">
                  Wir erfassen nur personenbezogene Daten, die Sie uns freiwillig mitteilen oder die technisch notwendig sind. Dies sind:
                </p>

                <ul className="mb-6 space-y-2 text-base text-body-color dark:text-dark-6">
                  <li>• <strong>Kontaktformular:</strong> Name, E-Mail-Adresse, Projektbeschreibung</li>
                  <li>• <strong>Server-Logdateien:</strong> IP-Adresse, Browser-Typ, Betriebssystem, Zugriffszeitpunkt (automatisch erfasst)</li>
                  <li>• <strong>Cookies:</strong> Gerätekennungen für Funktionalität und Analyse</li>
                </ul>

                <h3 className="mb-4 text-lg font-semibold text-dark dark:text-white">
                  Wofür verwenden wir Ihre Daten?
                </h3>
                <p className="text-base text-body-color dark:text-dark-6">
                  Ihre Daten verwenden wir ausschließlich für:
                </p>
                <ul className="mb-6 space-y-2 text-base text-body-color dark:text-dark-6">
                  <li>• Bearbeitung Ihrer Anfragen und Kontaktaufnahme</li>
                  <li>• Bereitstellung unserer Website und Dienste</li>
                  <li>• Sicherheit und Missbrauchserkennung</li>
                  <li>• Analyse von Website-Nutzungstrends</li>
                </ul>
              </div>

              {/* 4. Rechtsgrundlagen */}
              <div>
                <h2 className="mb-6 text-2xl font-bold text-dark dark:text-white">
                  4. Rechtsgrundlagen der Datenverarbeitung
                </h2>

                <div className="space-y-4 text-base text-body-color dark:text-dark-6">
                  <div>
                    <strong>Art. 6 Abs. 1 a) DSGVO (Einwilligung):</strong>
                    <p className="mt-2">Liegt vor, wenn Sie uns durch Kontaktformular Daten mitteilen. Sie können diese jederzeit widerrufen.</p>
                  </div>
                  <div>
                    <strong>Art. 6 Abs. 1 f) DSGVO (Berechtigtes Interesse):</strong>
                    <p className="mt-2">Für Website-Sicherheit, Funktionalität und Missbrauchserkennung. Ihre Interessen werden dabei berücksichtigt.</p>
                  </div>
                  <div>
                    <strong>Art. 6 Abs. 1 b) DSGVO (Vertragserfüllung):</strong>
                    <p className="mt-2">Falls Sie mit uns eine Vereinbarung treffen, für deren Erfüllung Daten notwendig sind.</p>
                  </div>
                </div>
              </div>

              {/* 5. Kontaktformular */}
              <div>
                <h2 className="mb-6 text-2xl font-bold text-dark dark:text-white">
                  5. Kontaktformular
                </h2>

                <p className="mb-6 text-base text-body-color dark:text-dark-6">
                  Wenn Sie unser Kontaktformular ausfüllen, erklären Sie sich mit der Verarbeitung Ihrer Daten zur Bearbeitung Ihrer Anfrage einverstanden. Wir speichern diese Daten nur für die notwendige Dauer und geben sie nicht an Dritte weiter. Die Angaben mit einem * sind erforderlich, damit wir Sie kontaktieren können.
                </p>

                <div className="rounded-lg border-l-4 border-red-500 bg-red-50 p-4 dark:bg-red-900/20">
                  <p className="text-sm text-red-800 dark:text-red-400">
                    <strong>⚠️ Sicherheit:</strong> Nutzen Sie dieses Formular nicht für vertrauliche oder sensible Informationen. Daten werden unverschlüsselt übertragen. Für sensitive Inhalte kontaktieren Sie uns bitte direkt per E-Mail mit verschlüsselter Kommunikation.
                  </p>
                </div>
              </div>

              {/* 6. Cookies und Tracking */}
              <div>
                <h2 className="mb-6 text-2xl font-bold text-dark dark:text-white">
                  6. Cookies und Tracking-Technologien
                </h2>

                <p className="mb-4 text-base text-body-color dark:text-dark-6">
                  Unsere Website verwendet Cookies – kleine Textdateien, die auf Ihrem Gerät gespeichert werden. Dies umfasst:
                </p>

                <div className="space-y-4">
                  <div className="rounded bg-gray-50 p-4 dark:bg-dark-2">
                    <strong className="text-body-color dark:text-dark-6">Erforderliche Cookies:</strong>
                    <p className="mt-2 text-sm text-body-color dark:text-dark-6">Notwendig für Website-Funktionalität (z.B. Datenschutzerklärung akzeptiert, Theme-Einstellungen)</p>
                  </div>
                  <div className="rounded bg-gray-50 p-4 dark:bg-dark-2">
                    <strong className="text-body-color dark:text-dark-6">Analyse-Cookies:</strong>
                    <p className="mt-2 text-sm text-body-color dark:text-dark-6">Google Analytics zur Analyse von Besucherverhalten. Setzen Sie Google Analytics ab, falls gewünscht.</p>
                  </div>
                  <div className="rounded bg-gray-50 p-4 dark:bg-dark-2">
                    <strong className="text-body-color dark:text-dark-6">Marketing-Cookies:</strong>
                    <p className="mt-2 text-sm text-body-color dark:text-dark-6">Google Ads Conversion Tracking (optional). Verfallen nach 30 Tagen.</p>
                  </div>
                </div>

                <p className="mt-6 text-base text-body-color dark:text-dark-6">
                  Sie können Cookies in Ihren Browser-Einstellungen verwalten und ablehnen.
                </p>
              </div>

              {/* 7. Externe Dienste */}
              <div>
                <h2 className="mb-6 text-2xl font-bold text-dark dark:text-white">
                  7. Externe Dienstanbieter
                </h2>

                <div className="space-y-4">
                  <div>
                    <h3 className="mb-2 text-lg font-semibold text-dark dark:text-white">
                      Google Analytics
                    </h3>
                    <p className="text-base text-body-color dark:text-dark-6">
                      Zur Analyse Ihres Besucherverhaltens nutzen wir Google Analytics von Google LLC (1600 Amphitheatre Parkway, Mountain View, CA 94043, USA). Daten können an Dritte übertragen werden. <a href="https://support.google.com/analytics/answer/6004245" className="text-primary hover:text-primary/80" target="_blank" rel="noopener noreferrer">Mehr erfahren</a>
                    </p>
                  </div>

                  <div>
                    <h3 className="mb-2 text-lg font-semibold text-dark dark:text-white">
                      Google Ads / Conversion Tracking
                    </h3>
                    <p className="text-base text-body-color dark:text-dark-6">
                      Wir nutzen Google Conversion Tracking für Performance-Marketing. Cookies enthalten keine personenbezogenen Daten.
                    </p>
                  </div>
                </div>
              </div>

              {/* 8. Server-Logfiles */}
              <div>
                <h2 className="mb-6 text-2xl font-bold text-dark dark:text-white">
                  8. Server-Logfiles
                </h2>

                <p className="mb-4 text-base text-body-color dark:text-dark-6">
                  Unser Hosting-Provider erhebt automatisch Informationen in Server-Logfiles:
                </p>

                <ul className="mb-6 space-y-2 text-base text-body-color dark:text-dark-6">
                  <li>• IP-Adresse</li>
                  <li>• Browsertyp und -version</li>
                  <li>• Betriebssystem</li>
                  <li>• Referrer URL</li>
                  <li>• Zugriffszeitpunkt und -dauer</li>
                </ul>

                <p className="text-base text-body-color dark:text-dark-6">
                  Diese Daten werden automatisch erfasst und sind technisch notwendig. Eine Zusammenführung mit anderen Datenquellen erfolgt nicht.
                </p>
              </div>

              {/* 9. Ihre Datenschutzrechte */}
              <div>
                <h2 className="mb-6 text-2xl font-bold text-dark dark:text-white">
                  9. Ihre Datenschutzrechte nach DSGVO
                </h2>

                <p className="mb-6 text-base text-body-color dark:text-dark-6">
                  Sie haben folgende Rechte gegenüber uns:
                </p>

                <div className="space-y-4">
                  <div className="border-l-4 border-primary pl-4">
                    <strong className="text-dark dark:text-white">Recht auf Auskunft (Art. 15 DSGVO)</strong>
                    <p className="mt-2 text-sm text-body-color dark:text-dark-6">Sie können jederzeit Auskunft darüber verlangen, welche Daten wir über Sie speichern.</p>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <strong className="text-dark dark:text-white">Recht auf Berichtigung (Art. 16 DSGVO)</strong>
                    <p className="mt-2 text-sm text-body-color dark:text-dark-6">Sie können Korrektur unvollständiger oder unrichtiger Daten verlangen.</p>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <strong className="text-dark dark:text-white">Recht auf Löschung (Art. 17 DSGVO)</strong>
                    <p className="mt-2 text-sm text-body-color dark:text-dark-6">Sie können die Löschung Ihrer Daten verlangen, soweit gesetzlich zulässig.</p>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <strong className="text-dark dark:text-white">Recht auf Einschränkung (Art. 18 DSGVO)</strong>
                    <p className="mt-2 text-sm text-body-color dark:text-dark-6">Sie können einschränken, wie wir Ihre Daten verarbeiten.</p>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <strong className="text-dark dark:text-white">Recht auf Datenportabilität (Art. 20 DSGVO)</strong>
                    <p className="mt-2 text-sm text-body-color dark:text-dark-6">Sie können Ihre Daten in strukturiertem Format erhalten.</p>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <strong className="text-dark dark:text-white">Widerspruchsrecht (Art. 21 DSGVO)</strong>
                    <p className="mt-2 text-sm text-body-color dark:text-dark-6">Sie können gegen bestimmte Verarbeitungen Widerspruch einlegen.</p>
                  </div>
                </div>

                <div className="mt-6 rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
                  <p className="text-sm text-blue-800 dark:text-blue-400">
                    Um Ihre Rechte geltend zu machen, kontaktieren Sie uns unter <a href="mailto:info@classymarketing.de" className="font-semibold hover:underline">info@classymarketing.de</a> oder nutzen Sie unsere Kontaktdaten oben.
                  </p>
                </div>
              </div>

              {/* 10. Beschwerde */}
              <div>
                <h2 className="mb-6 text-2xl font-bold text-dark dark:text-white">
                  10. Beschwerderecht bei Aufsichtsbehörden
                </h2>

                <p className="mb-4 text-base text-body-color dark:text-dark-6">
                  Im Falle von Datenschutzverstößen können Sie sich beschweren bei:
                </p>

                <div className="rounded-lg bg-gray-50 p-4 dark:bg-dark-2">
                  <p className="text-base text-body-color dark:text-dark-6">
                    <strong>Hessischer Datenschutzbeaufragter</strong><br />
                    (Baden-Württemberg in dieser Region zuständig)<br />
                    www.dat
aschutzzentrum.de<br />
                  </p>
                </div>
              </div>

              {/* 11. Datensicherheit */}
              <div>
                <h2 className="mb-6 text-2xl font-bold text-dark dark:text-white">
                  11. Datensicherheit
                </h2>

                <p className="mb-4 text-base text-body-color dark:text-dark-6">
                  Wir treffen technische und organisatorische Maßnahmen zum Schutz Ihrer Daten:
                </p>

                <ul className="mb-6 space-y-2 text-base text-body-color dark:text-dark-6">
                  <li>• HTTPS-Verschlüsselung für sichere Datenübertragung</li>
                  <li>• Sichere Passwort-Verwaltung und Zugriffskontrolle</li>
                  <li>• Regelmäßige Sicherheitsupdates</li>
                  <li>• Beschränkter Zugriff auf Kundendaten</li>
                </ul>

                <p className="rounded-lg bg-amber-50 p-4 text-sm text-amber-800 dark:bg-amber-900/20 dark:text-amber-400">
                  <strong>Hinweis:</strong> Trotz aller Sicherheitsmaßnahmen kann keine 100%ige Sicherheit im Internet garantiert werden. Nutzen Sie sensible Kommunikation nur über sichere Kanäle.
                </p>
              </div>

              {/* 12. Datenaufbewahrung */}
              <div>
                <h2 className="mb-6 text-2xl font-bold text-dark dark:text-white">
                  12. Aufbewahrungsdauer von Daten
                </h2>

                <p className="text-base text-body-color dark:text-dark-6">
                  Ihre personenbezogenen Daten speichern wir nur so lange wie notwendig:
                </p>

                <ul className="mt-4 space-y-2 text-base text-body-color dark:text-dark-6">
                  <li>• <strong>Kontaktanfragen:</strong> 30 Tage nach Bearbeitung (längere Aufbewahrung mit Ihrer Einwilligung für Geschäftsbeziehungen)</li>
                  <li>• <strong>Server-Logfiles:</strong> Maximum 30 Tage</li>
                  <li>• <strong>Cookies:</strong> Wie in den Cookie-Einstellungen described</li>
                </ul>
              </div>

              {/* 13. Änderungen */}
              <div>
                <h2 className="mb-6 text-2xl font-bold text-dark dark:text-white">
                  13. Änderungen dieser Datenschutzerklärung
                </h2>

                <p className="text-base text-body-color dark:text-dark-6">
                  Wir können diese Datenschutzerklärung jederzeit aktualisieren. Die aktuelle Fassung ist auf dieser Seite verfügbar. Wir werden Sie bei wesentlichen Änderungen benachrichtigen.
                </p>
              </div>

              {/* Kontakt */}
              <div className="rounded-lg border-l-4 border-primary bg-primary/5 p-6 dark:bg-primary/10">
                <h3 className="mb-4 text-lg font-semibold text-dark dark:text-white">
                  ❓ Fragen zu dieser Datenschutzerklärung?
                </h3>
                <p className="mb-3 text-sm text-body-color dark:text-dark-6">
                  Kontaktieren Sie uns jederzeit bei Fragen oder Bedenken zum Datenschutz:
                </p>
                <p className="text-sm text-body-color dark:text-dark-6">
                  <strong>📧 E-Mail:</strong>{" "}
                  <a
                    href="mailto:info@classymarketing.de"
                    className="text-primary hover:text-primary/80 font-semibold"
                  >
                    info@classymarketing.de
                  </a><br />
                  <strong>🏢 Adresse:</strong> Hauptstrasse 8, 69190 Walldorf
                </p>
              </div>

              {/* Zuletzt aktualisiert */}
              <div className="border-t border-primary/20 pt-6">
                <p className="text-xs text-body-color dark:text-dark-6">
                  <strong>Version:</strong> 2025 <br/>
                  <strong>Letztes Update:</strong>{" "}
                  {new Date().toLocaleDateString("de-DE", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

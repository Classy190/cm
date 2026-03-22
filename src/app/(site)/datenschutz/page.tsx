import { Metadata } from "next";

export const metadata: Metadata = {
  title: "DatenschutzerklÃ¤rung - Classy Marketing",
  description: "DatenschutzerklÃ¤rung gemÃ¤ÃŸ DSGVO â€“ Classy Marketing, Ã–zgÃ¼r Atik, Walldorf",
};

export default function Datenschutz() {
  return (
    <>
      <section className="relative overflow-hidden bg-primary pt-[100px] md:pt-[130px] lg:pt-[160px] pb-[60px] md:pb-[100px]">
        <div className="container">
          <div className="mx-auto max-w-[680px]">
            <h1 className="mb-6 text-3xl font-bold text-white sm:text-4xl">
              DatenschutzerklÃ¤rung
            </h1>
            <p className="text-white/80">
              Informationen zur Verarbeitung Ihrer personenbezogenen Daten gemÃ¤ÃŸ Art. 13 DSGVO
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
                    Inhaber: Ã–zgÃ¼r Atik<br />
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
                  Wir nehmen den Schutz Ihrer personenbezogenen Daten sehr ernst und behandeln Ihre Daten vertraulich entsprechend der gesetzlichen Datenschutzvorschriften (DSGVO, BDSG) sowie dieser DatenschutzerklÃ¤rung. Die Nutzung unserer Website ist in der Regel ohne Angabe personenbezogener Daten mÃ¶glich.
                </p>
              </div>

              {/* 3. Hosting */}
              <div>
                <h2 className="mb-6 text-2xl font-bold text-dark dark:text-white">
                  3. Hosting â€“ Vercel
                </h2>
                <p className="mb-4 text-base text-body-color dark:text-dark-6">
                  Diese Website wird gehostet von <strong>Vercel Inc.</strong>, 340 Pine Street, Suite 701, San Francisco, CA 94104, USA. Wenn Sie unsere Website besuchen, werden automatisch folgende technische Daten in Server-Logfiles erfasst:
                </p>
                <ul className="mb-4 space-y-2 text-base text-body-color dark:text-dark-6 list-disc pl-6">
                  <li>IP-Adresse des anfragenden GerÃ¤ts</li>
                  <li>Datum und Uhrzeit des Zugriffs</li>
                  <li>Name und URL der abgerufenen Datei</li>
                  <li>Browser-Typ und -Version</li>
                  <li>Betriebssystem</li>
                  <li>Referrer-URL (zuvor besuchte Seite)</li>
                </ul>
                <p className="mb-4 text-base text-body-color dark:text-dark-6">
                  <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an technischem Betrieb der Website).<br />
                  <strong>Speicherdauer:</strong> Maximal 30 Tage, danach automatische LÃ¶schung.<br />
                  <strong>Drittlandtransfer:</strong> Vercel ist ein US-Unternehmen. Die DatenÃ¼bermittlung erfolgt auf Basis von Standardvertragsklauseln (Art. 46 DSGVO). Weitere Informationen: <a href="https://vercel.com/legal/privacy-policy" className="text-primary hover:text-primary/80" target="_blank" rel="noopener noreferrer">Vercel Datenschutzrichtlinie</a>.
                </p>
              </div>

              {/* 4. Datenbank */}
              <div>
                <h2 className="mb-6 text-2xl font-bold text-dark dark:text-white">
                  4. Datenbank â€“ Neon (PostgreSQL)
                </h2>
                <p className="mb-4 text-base text-body-color dark:text-dark-6">
                  Zur Speicherung von Kontaktanfragen nutzen wir den Datenbankdienst <strong>Neon, Inc.</strong> (PostgreSQL-as-a-Service), 548 Market St PMB 50727, San Francisco, CA 94104, USA. Kontaktanfragen, die Sie Ã¼ber unsere Website senden, werden in dieser Datenbank gespeichert.
                </p>
                <p className="mb-4 text-base text-body-color dark:text-dark-6">
                  <strong>Gespeicherte Daten:</strong> Name, E-Mail-Adresse, Nachricht, Projektart, gewÃ¼nschter Zeitrahmen.<br />
                  <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. b DSGVO (Vertragsanbahnung) bzw. Art. 6 Abs. 1 lit. a DSGVO (Einwilligung).<br />
                  <strong>Speicherdauer:</strong> Bis zur abschlieÃŸenden Bearbeitung Ihrer Anfrage, maximal 3 Jahre.<br />
                  <strong>Drittlandtransfer:</strong> Neon ist ein US-Unternehmen. DatenÃ¼bermittlung auf Basis von Standardvertragsklauseln (Art. 46 DSGVO).
                </p>
              </div>

              {/* 5. E-Mail-Versand */}
              <div>
                <h2 className="mb-6 text-2xl font-bold text-dark dark:text-white">
                  5. E-Mail-Versand â€“ Resend
                </h2>
                <p className="mb-4 text-base text-body-color dark:text-dark-6">
                  FÃ¼r den transaktionalen E-Mail-Versand (BestÃ¤tigungsmails bei Kontaktanfragen) nutzen wir den Dienst <strong>Resend, Inc.</strong>, 2261 Market Street #4008, San Francisco, CA 94114, USA.
                </p>
                <p className="mb-4 text-base text-body-color dark:text-dark-6">
                  Wenn Sie uns eine Anfrage Ã¼ber das Formular senden, wird Ihre E-Mail-Adresse und Ihr Name zur Zustellung einer BestÃ¤tigungsmail an Resend Ã¼bermittelt.<br />
                  <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. b DSGVO.<br />
                  <strong>Drittlandtransfer:</strong> Resend ist ein US-Unternehmen. DatenÃ¼bermittlung auf Basis von Standardvertragsklauseln. Weitere Informationen: <a href="https://resend.com/legal/privacy-policy" className="text-primary hover:text-primary/80" target="_blank" rel="noopener noreferrer">Resend Datenschutzrichtlinie</a>.
                </p>
              </div>

              {/* 6. Kontaktaufnahme per E-Mail */}
              <div>
                <h2 className="mb-6 text-2xl font-bold text-dark dark:text-white">
                  6. Kontaktaufnahme per E-Mail
                </h2>
                <p className="mb-4 text-base text-body-color dark:text-dark-6">
                  Wenn Sie uns per E-Mail kontaktieren, werden die Ã¼bermittelten Daten (Ihre E-Mail-Adresse, Name und Nachrichteninhalt) zum Zweck der Bearbeitung Ihrer Anfrage bei uns gespeichert.
                </p>
                <p className="text-base text-body-color dark:text-dark-6">
                  <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. b DSGVO (Vertragsanbahnung) bzw. Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an Beantwortung der Anfrage).<br />
                  <strong>Speicherdauer:</strong> Bis zur abschlieÃŸenden Bearbeitung Ihrer Anfrage. Bei steuerrechtlicher Relevanz bis zu 10 Jahre (Â§ 147 AO).
                </p>
              </div>

              {/* 7. Cookies */}
              <div>
                <h2 className="mb-6 text-2xl font-bold text-dark dark:text-white">
                  7. Cookies und lokale Speicherung
                </h2>
                <p className="mb-4 text-base text-body-color dark:text-dark-6">
                  Unsere Website verwendet ausschlieÃŸlich technisch notwendige Cookies und lokale Speicherung. Es werden <strong>keine Analyse- oder Marketing-Cookies</strong> eingesetzt.
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
                        <td className="p-3 border border-gray-200 dark:border-dark-3">Authentifizierung im Admin-Bereich (nur fÃ¼r Website-Betreiber)</td>
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
                    <strong>Art. 6 Abs. 1 lit. a DSGVO â€“ Einwilligung:</strong>
                    <p className="mt-1">Wenn Sie uns Ã¼ber das Kontaktformular Daten mitteilen und der Verarbeitung zugestimmt haben. Widerruf jederzeit mÃ¶glich.</p>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <strong>Art. 6 Abs. 1 lit. b DSGVO â€“ VertragserfÃ¼llung / Vertragsanbahnung:</strong>
                    <p className="mt-1">Zur Bearbeitung von Anfragen und im Rahmen der Anbahnung eines VertragsverhÃ¤ltnisses.</p>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <strong>Art. 6 Abs. 1 lit. f DSGVO â€“ Berechtigtes Interesse:</strong>
                    <p className="mt-1">FÃ¼r technischen Betrieb der Website, Sicherheit und Missbrauchserkennung.</p>
                  </div>
                </div>
              </div>

              {/* 9. Speicherdauer */}
              <div>
                <h2 className="mb-6 text-2xl font-bold text-dark dark:text-white">
                  9. Speicherdauer
                </h2>
                <p className="text-base text-body-color dark:text-dark-6">
                  Wir speichern personenbezogene Daten nur so lange, wie es fÃ¼r den jeweiligen Zweck erforderlich ist oder gesetzliche Aufbewahrungspflichten bestehen. Kontaktanfragen werden nach abschlieÃŸender Bearbeitung gelÃ¶scht, spÃ¤testens nach 3 Jahren. E-Mail-Korrespondenz mit steuerrechtlicher Relevanz wird gemÃ¤ÃŸ Â§ 147 AO bis zu 10 Jahre aufbewahrt.
                </p>
              </div>

              {/* 10. Ihre Rechte */}
              <div>
                <h2 className="mb-6 text-2xl font-bold text-dark dark:text-white">
                  10. Ihre Datenschutzrechte
                </h2>
                <p className="mb-4 text-base text-body-color dark:text-dark-6">Sie haben gegenÃ¼ber uns folgende Rechte:</p>
                <div className="space-y-3">
                  {[
                    ["Auskunft (Art. 15 DSGVO)", "Welche Daten von Ihnen wir verarbeiten."],
                    ["Berichtigung (Art. 16 DSGVO)", "Korrektur unrichtiger oder unvollstÃ¤ndiger Daten."],
                    ["LÃ¶schung (Art. 17 DSGVO)", "LÃ¶schung Ihrer Daten, soweit keine gesetzliche Aufbewahrungspflicht besteht."],
                    ["EinschrÃ¤nkung (Art. 18 DSGVO)", "EinschrÃ¤nkung der Verarbeitung Ihrer Daten."],
                    ["DatenÃ¼bertragbarkeit (Art. 20 DSGVO)", "Ãœbermittlung Ihrer Daten in maschinenlesbarem Format."],
                    ["Widerspruch (Art. 21 DSGVO)", "Widerspruch gegen die Verarbeitung auf Basis berechtigter Interessen."],
                    ["Widerruf (Art. 7 Abs. 3 DSGVO)", "Widerruf einer erteilten Einwilligung mit Wirkung fÃ¼r die Zukunft."],
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
                  11. Beschwerderecht bei der AufsichtsbehÃ¶rde
                </h2>
                <p className="mb-4 text-base text-body-color dark:text-dark-6">
                  Sie haben das Recht, sich bei der zustÃ¤ndigen Datenschutz-AufsichtsbehÃ¶rde zu beschweren (Art. 77 DSGVO):
                </p>
                <div className="rounded-lg bg-gray-50 p-6 dark:bg-dark-2">
                  <p className="text-base text-body-color dark:text-dark-6">
                    <strong>Der Landesbeauftragte fÃ¼r den Datenschutz und die Informationsfreiheit Baden-WÃ¼rttemberg (LfDI BW)</strong><br />
                    KÃ¶nigstraÃŸe 10a<br />
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
                  Wir setzen technische und organisatorische SicherheitsmaÃŸnahmen ein, um Ihre Daten vor unbefugtem Zugriff zu schÃ¼tzen:
                </p>
                <ul className="space-y-2 text-base text-body-color dark:text-dark-6 list-disc pl-6">
                  <li>SSL/TLS-VerschlÃ¼sselung der gesamten DatenÃ¼bertragung (HTTPS)</li>
                  <li>ZugriffsbeschrÃ¤nkung auf personenbezogene Daten</li>
                  <li>RegelmÃ¤ÃŸige Sicherheitsupdates der eingesetzten Software</li>
                  <li>Hosting auf sicheren, zertifizierten Infrastrukturen (Vercel)</li>
                </ul>
              </div>

              {/* 13. AktualitÃ¤t */}
              <div className="rounded-lg border-l-4 border-primary bg-primary/5 p-6 dark:bg-primary/10">
                <p className="text-sm text-body-color dark:text-dark-6">
                  <strong>Stand:</strong> MÃ¤rz 2026. Wir behalten uns vor, diese DatenschutzerklÃ¤rung bei Ã„nderungen der rechtlichen Lage oder unserer Dienste anzupassen.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}


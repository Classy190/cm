"use client";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutzerklärung - Classy Marketing",
  description: "Datenschutzerklärung gemäß DSGVO und weitere Datenschutzinformationen von Classy Marketing",
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

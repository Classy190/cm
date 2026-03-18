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
              Informationen zur Verarbeitung Ihrer personenbezogenen Daten gemäß DSGVO
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
                  Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren
                  personenbezogenen Daten geschieht, wenn Sie diese Website besuchen. Personenbezogene
                  Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
                  Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem
                  Text aufgelisteten Datenschutzerklärung.
                </p>
              </div>

              {/* 2. Erfassung von Daten */}
              <div>
                <h2 className="mb-6 text-2xl font-bold text-dark dark:text-white">
                  2. Erfassung von Daten auf unserer Website
                </h2>

                <h3 className="mb-4 text-lg font-semibold text-dark dark:text-white">
                  Wer ist verantwortlich für die Datenerfassung?
                </h3>
                <p className="mb-6 text-base text-body-color dark:text-dark-6">
                  Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber.
                </p>
                <p className="mb-6 text-base text-body-color dark:text-dark-6">
                  <strong>Verantwortlicher:</strong><br />
                  Özgür Atik<br />
                  Classy Marketing<br />
                  Hauptstrasse 8<br />
                  69190 Walldorf<br />
                  E-Mail: info@classymarketing.de
                </p>

                <h3 className="mb-4 text-lg font-semibold text-dark dark:text-white">
                  Wie erfassen wir Ihre Daten?
                </h3>
                <p className="mb-6 text-base text-body-color dark:text-dark-6">
                  Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei
                  handelt es sich z. B. um Daten, die Sie in ein Kontaktformular eingeben. Andere Daten
                  werden durch Automatismen beim Besuch der Website erfasst, z. B. Zugriffsdaten.
                </p>

                <h3 className="mb-4 text-lg font-semibold text-dark dark:text-white">
                  Wofür nutzen wir Ihre Daten?
                </h3>
                <p className="mb-6 text-base text-body-color dark:text-dark-6">
                  Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu
                  gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.
                </p>

                <h3 className="mb-4 text-lg font-semibold text-dark dark:text-white">
                  Welche Rechte haben Sie bezüglich Ihrer Daten?
                </h3>
                <p className="text-base text-body-color dark:text-dark-6">
                  Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und
                  Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein
                  Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Hierzu sowie zu
                  weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit an uns wenden.
                </p>
              </div>

              {/* 3. Analyse-Tools und Werbepartner */}
              <div>
                <h2 className="mb-6 text-2xl font-bold text-dark dark:text-white">
                  3. Analyse-Tools und Werbepartner
                </h2>

                <h3 className="mb-4 text-lg font-semibold text-dark dark:text-white">
                  Google Analytics
                </h3>
                <p className="mb-6 text-base text-body-color dark:text-dark-6">
                  Diese Website nutzt die Funktionen von Google Analytics zur Analyse des Besucherverhaltens.
                  Der Dienstanbieter ist die Google LLC, 1600 Amphitheatre Parkway, Mountain View, CA
                  94043, USA. Google verarbeitet die Daten zur Evaluation unserer Website und erstellt
                  Reports über Websiteaktivitäten. Google kann diese Daten an Dritte übertragen, falls
                  gesetzlich vorgegeben oder soweit Dritte diese Daten im Auftrag von Google verarbeiten.
                </p>

                <h3 className="mb-4 text-lg font-semibold text-dark dark:text-white">
                  Google Ads / Google Conversion Tracking
                </h3>
                <p className="text-base text-body-color dark:text-dark-6">
                  Wir nutzen das Google Conversion Tracking. Wenn Sie auf eine von Google geschaltete Anzeige
                  klicken, wird ein Cookie für das Conversion Tracking gesetzt. Diese Cookies verfallen nach
                  30 Tagen und enthalten keine personenbezogenen Daten.
                </p>
              </div>

              {/* 4. Kontaktformular */}
              <div>
                <h2 className="mb-6 text-2xl font-bold text-dark dark:text-white">
                  4. Kontaktformular
                </h2>

                <p className="mb-6 text-base text-body-color dark:text-dark-6">
                  Wenn Sie uns via Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben inklusive
                  der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den
                  Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht an Dritte weiter.
                </p>

                <div className="rounded-lg border border-primary/20 bg-white/50 p-4 dark:bg-dark/50">
                  <p className="text-sm text-body-color dark:text-dark-6">
                    <strong>Rechtsgrundlage:</strong> Die Verarbeitung dieser Daten erfolgt auf Basis von
                    Art. 6 Abs. 1 lit. f EU-DSGVO (berechtigtes Interesse).
                  </p>
                </div>
              </div>

              {/* 5. Cookies */}
              <div>
                <h2 className="mb-6 text-2xl font-bold text-dark dark:text-white">
                  5. Cookies
                </h2>

                <p className="mb-6 text-base text-body-color dark:text-dark-6">
                  Unsere Internetseiten verwenden Cookies. Cookies sind Textdateien, welche über einen
                  Internetbrowser auf einem Computersystem abgelegt und gespeichert werden. Sie ermöglichen
                  es uns, die Nutzung unserer Website zu analysieren und unseren Service zu verbessern.
                </p>

                <h3 className="mb-4 text-lg font-semibold text-dark dark:text-white">
                  Berechtigte Interessen
                </h3>
                <p className="text-base text-body-color dark:text-dark-6">
                  Die meisten Browser akzeptieren Cookies automatisch. Sie können Ihren Browser jedoch so
                  konfigurieren, dass Sie über das Setzen von Cookies informiert werden oder Cookies
                  abgelehnt werden können.
                </p>
              </div>

              {/* 6. Server Log Files */}
              <div>
                <h2 className="mb-6 text-2xl font-bold text-dark dark:text-white">
                  6. Server Log Files
                </h2>

                <p className="mb-6 text-base text-body-color dark:text-dark-6">
                  Der Provider dieser Website erhebt und speichert automatisch Informationen in so genannten
                  Server-Log Files, die Ihr Browser automatisch übermittelt. Dies sind:
                </p>

                <ul className="mb-6 space-y-2 text-base text-body-color dark:text-dark-6">
                  <li>• Browsertyp und Browserversion</li>
                  <li>• Verwendetes Betriebssystem</li>
                  <li>• Referrer URL</li>
                  <li>• Hostname des zugreifenden Rechners</li>
                  <li>• Uhrzeit der Serveranfrage</li>
                  <li>• IP-Adresse</li>
                </ul>

                <p className="text-base text-body-color dark:text-dark-6">
                  Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. Die
                  Erfassung dieser Daten erfolgt automatisch und ist für den Betrieb der Website erforderlich.
                </p>
              </div>

              {/* 7. Ihre Rechte */}
              <div>
                <h2 className="mb-6 text-2xl font-bold text-dark dark:text-white">
                  7. Ihre Datenschutzrechte
                </h2>

                <p className="mb-6 text-base text-body-color dark:text-dark-6">
                  Nach der Datenschutz-Grundverordnung (DSGVO) haben Sie folgende Rechte:
                </p>

                <ul className="mb-6 space-y-4 text-base text-body-color dark:text-dark-6">
                  <li>
                    <strong>Recht auf Auskunft (Art. 15 DSGVO):</strong> Sie können jederzeit eine Bestätigung
                    darüber anfordern, ob wir Ihre Daten verarbeiten, und ggf. Auskunft über diese Daten erhalten.
                  </li>
                  <li>
                    <strong>Recht auf Berichtigung (Art. 16 DSGVO):</strong> Sie können die Berichtigung
                    unrichtiger oder unvollständiger Daten verlangen.
                  </li>
                  <li>
                    <strong>Recht auf Löschung (Art. 17 DSGVO):</strong> Sie können die Löschung Ihrer Daten
                    fordern.
                  </li>
                  <li>
                    <strong>Recht auf Einschränkung (Art. 18 DSGVO):</strong> Sie können die Einschränkung der
                    Verarbeitung Ihrer Daten fordern.
                  </li>
                  <li>
                    <strong>Recht auf Datenportabilität (Art. 20 DSGVO):</strong> Sie können Ihre Daten in einem
                    gängigen Format erhalten und an einen anderen Verantwortlichen übertragen.
                  </li>
                  <li>
                    <strong>Widerspruchsrecht (Art. 21 DSGVO):</strong> Sie können gegen die Verarbeitung Ihrer Daten
                    Widerspruch einlegen.
                  </li>
                </ul>

                <p className="text-base text-body-color dark:text-dark-6">
                  Um diese Rechte geltend zu machen, kontaktieren Sie uns bitte unter info@classymarketing.de
                </p>
              </div>

              {/* 8. Änderungen dieser Datenschutzerklärung */}
              <div>
                <h2 className="mb-6 text-2xl font-bold text-dark dark:text-white">
                  8. Änderungen dieser Datenschutzerklärung
                </h2>

                <p className="text-base text-body-color dark:text-dark-6">
                  Wir behalten uns vor, diese Datenschutzerklärung zu aktualisieren, um sie den wechselnden
                  Anforderungen gerecht zu werden oder andere Verfahrensmethoden oder -dienste zu reflektieren.
                  Die aktuelle Fassung ist auf dieser Seite abrufbar. Bitte überprüfen Sie diese Seite
                  regelmäßig, um sich über Änderungen zu informieren.
                </p>
              </div>

              {/* Kontakt */}
              <div className="rounded-lg border-l-4 border-primary bg-primary/5 p-6 dark:bg-primary/10">
                <h3 className="mb-3 text-lg font-semibold text-dark dark:text-white">
                  Fragen zum Datenschutz?
                </h3>
                <p className="mb-3 text-sm text-body-color dark:text-dark-6">
                  Wenn Sie Fragen zu dieser Datenschutzerklärung oder zu unseren Datenschutzpraktiken haben,
                  kontaktieren Sie uns bitte:
                </p>
                <p className="text-sm text-body-color dark:text-dark-6">
                  <strong>E-Mail:</strong>{" "}
                  <a
                    href="mailto:info@classymarketing.de"
                    className="text-primary hover:text-primary/80"
                  >
                    info@classymarketing.de
                  </a>
                </p>
              </div>

              {/* Zuletzt aktualisiert */}
              <div className="border-t border-primary/20 pt-6">
                <p className="text-xs text-body-color dark:text-dark-6">
                  <strong>Zuletzt aktualisiert:</strong>{" "}
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
              </div>

              <div className="mb-8">
                <h2 className="mb-4 text-xl font-bold text-dark dark:text-white">
                  3. Kontaktformular
                </h2>
                <p className="mb-4 text-base text-body-color dark:text-dark-6">
                  Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter. Die Verarbeitung der in das Kontaktformular eingegebenen Daten erfolgt ausschließlich auf Grundlage Ihrer Einwilligung gemäß Art. 6 Abs. 1 a) DSGVO.
                </p>
              </div>

              <div className="mb-8">
                <h2 className="mb-4 text-xl font-bold text-dark dark:text-white">
                  4. Server Log-Dateien
                </h2>
                <p className="mb-4 text-base text-body-color dark:text-dark-6">
                  Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind: Browsertyp und Browserversion, verwendetes Betriebssystem, Referrer URL, Hostname des zugreifenden Rechners, Uhrzeit der Serveranfrage und IP-Adresse.
                </p>
                <p className="mb-4 text-base text-body-color dark:text-dark-6">
                  Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 f) DSGVO (berechtigte Interessen).
                </p>
              </div>

              <div className="mb-8">
                <h2 className="mb-4 text-xl font-bold text-dark dark:text-white">
                  5. Ihre Rechte
                </h2>
                <p className="mb-4 text-base text-body-color dark:text-dark-6">
                  Sie haben das Recht:
                </p>
                <ul className="mb-4 list-disc space-y-2 pl-6 text-base text-body-color dark:text-dark-6">
                  <li>gemäß Art. 15 DSGVO Auskunft über Ihre bei uns verarbeiteten personenbezogenen Daten zu verlangen;</li>
                  <li>gemäß Art. 16 DSGVO unverzüglich die Berichtigung unrichtiger personenbezogener Daten zu verlangen;</li>
                  <li>gemäß Art. 17 DSGVO die Löschung Ihrer bei uns gespeicherten personenbezogenen Daten zu verlangen;</li>
                  <li>gemäß Art. 18 DSGVO die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen;</li>
                  <li>gemäß Art. 20 DSGVO Ihre personenbezogenen Daten, die Sie uns bereitgestellt haben, in einem strukturierten, gängigen und maschinenlesbaren Format zu erhalten.</li>
                </ul>
              </div>

              <div className="mb-8">
                <h2 className="mb-4 text-xl font-bold text-dark dark:text-white">
                  6. Widerspruchsrecht
                </h2>
                <p className="mb-4 text-base text-body-color dark:text-dark-6">
                  Sie haben das Recht, gemäß Art. 21 DSGVO Widerspruch gegen die Verarbeitung Ihrer personenbezogenen Daten einzulegen, soweit diese auf Grundlage von Art. 6 Abs. 1 e) DSGVO (Erfüllung einer im öffentlichen Interesse liegenden Aufgabe/ausübung öffentlicher Gewalt) oder Art. 6 Abs. 1 f) DSGVO (berechtigte Interessen) erfolgt.
                </p>
              </div>

              <div className="mb-8">
                <h2 className="mb-4 text-xl font-bold text-dark dark:text-white">
                  7. Beschwerde bei der zuständigen Aufsichtsbehörde
                </h2>
                <p className="text-base text-body-color dark:text-dark-6">
                  Im Falle datenschutzrechtlicher Verstöße steht dem Betroffenen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu. Zuständige Aufsichtsbehörde in datenschutzrechtlichen Fragen ist der Landesdatenschutzbeauftragte des Bundeslandes, in dem sich der Sitz des Unternehmens befindet.
                </p>
              </div>

              <div className="mb-8">
                <h2 className="mb-4 text-xl font-bold text-dark dark:text-white">
                  8. Kontakt zum Datenschutzbeauftragten
                </h2>
                <p className="text-base text-body-color dark:text-dark-6">
                  Bei Fragen zum Datenschutz können Sie uns kontaktieren unter:<br />
                  <strong>E-Mail:</strong>{" "}
                  <a href="mailto:info@classymarketing.de" className="text-primary hover:text-primary/80">
                    info@classymarketing.de
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

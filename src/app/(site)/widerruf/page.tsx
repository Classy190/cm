import { Metadata } from "next";
import WiderrufForm from "./WiderrufForm";

export const metadata: Metadata = {
  title: "Vertrag widerrufen – Classy Marketing",
  description:
    "Nutzen Sie diese Funktion, um Ihren Vertrag mit Classy Marketing gemäß § 356a BGB elektronisch zu widerrufen.",
};

export default function WiderrufPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-primary pt-[100px] md:pt-[130px] lg:pt-[160px] pb-[60px] md:pb-[100px]">
        <div className="container">
          <div className="mx-auto max-w-[680px]">
            <h1 className="mb-6 text-3xl font-bold text-white sm:text-4xl">
              Vertrag widerrufen
            </h1>
            <p className="text-white/80">
              Gemäß § 356a BGB können Sie Ihren Vertrag hier elektronisch
              widerrufen. Der Prozess ist in zwei Schritten abgesichert.
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="relative py-16 md:py-[100px]">
        <div className="container">
          <div className="mx-auto max-w-[700px]">
            {/* Legal info box */}
            <div className="mb-10 rounded-lg border border-primary/20 bg-primary/5 p-6 dark:bg-dark-2">
              <h2 className="mb-3 text-lg font-semibold text-dark dark:text-white">
                Ihr Widerrufsrecht
              </h2>
              <p className="mb-3 text-sm text-body-color dark:text-dark-6">
                Sie haben das Recht, diesen Vertrag innerhalb von{" "}
                <strong>14 Tagen ohne Angabe von Gründen</strong> zu widerrufen.
                Die Widerrufsfrist beginnt mit dem Tag des Vertragsabschlusses.
              </p>
              <p className="text-sm text-body-color dark:text-dark-6">
                Um Ihr Widerrufsrecht auszuüben, füllen Sie bitte das
                nachstehende Formular vollständig aus. Sie erhalten anschließend
                eine Eingangsbestätigung per E-Mail mit Datum und Uhrzeit des
                Eingangs Ihrer Erklärung.
              </p>
            </div>

            <WiderrufForm />

            {/* Alternative */}
            <div className="mt-10 rounded-lg border border-gray-200 bg-gray-50 p-6 dark:border-dark-3 dark:bg-dark-2">
              <h3 className="mb-2 font-semibold text-dark dark:text-white">
                Alternativ: Widerruf per E-Mail oder Post
              </h3>
              <p className="text-sm text-body-color dark:text-dark-6">
                Sie können Ihren Widerruf auch per E-Mail an{" "}
                <a
                  href="mailto:info@classymarketing.de"
                  className="text-primary hover:underline"
                >
                  info@classymarketing.de
                </a>{" "}
                oder schriftlich an folgende Adresse senden:
              </p>
              <address className="mt-3 text-sm not-italic text-body-color dark:text-dark-6">
                Classy Marketing – Özgür Atik
                <br />
                Hauptstrasse 8
                <br />
                69190 Walldorf
                <br />
                Deutschland
              </address>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

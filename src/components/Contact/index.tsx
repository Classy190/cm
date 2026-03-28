"use client";

const Contact = () => {
  return (
    <section id="contact" className="relative py-20 md:py-[120px]">
      <div className="absolute left-0 top-0 -z-[1] h-full w-full dark:bg-dark"></div>
      <div className="absolute left-0 top-0 -z-[1] h-1/2 w-full bg-[#E9F9FF] dark:bg-dark-700 lg:h-[45%] xl:h-1/2"></div>
      <div className="container px-4">
        <div className="flex flex-wrap justify-center">
          <div className="w-full px-4 lg:w-10/12 xl:w-9/12">
            <div className="mx-auto max-w-[800px]">
              <div className="ud-contact-title mb-12 text-center">
                <span className="mb-6 block text-base font-medium text-dark dark:text-white">
                  KONTAKT
                </span>
                <h2 className="text-[35px] font-semibold leading-[1.14] text-dark dark:text-white">
                  Haben Sie eine Frage?
                </h2>
              </div>

              <div
                className="rounded-lg bg-white px-8 py-10 shadow-testimonial dark:bg-dark-2 dark:shadow-none sm:px-10 sm:py-12 md:p-[60px]"
                data-wow-delay=".2s"
              >
                <div className="mb-8 text-center">
                  <p className="mb-6 text-lg text-body-color dark:text-dark-6">
                    Senden Sie mir einfach eine E-Mail. Ich antworte Ihnen innerhalb von 24 Stunden!
                  </p>
                  
                  <a
                    href="mailto:info@classymarketing.de"
                    className="mx-auto block w-fit items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-white transition duration-300 ease-in-out hover:bg-primary/90 whitespace-nowrap text-center"
                  >
                    📧 info@classymarketing.de
                  </a>

                  <p className="mt-6 text-sm text-body-color dark:text-dark-6">
                    Oder Sie schreiben mir direkt eine Nachricht über den Link oben.
                  </p>
                </div>

                <div className="mt-12 border-t border-gray-200 pt-8 dark:border-dark-3">
                  <h3 className="mb-6 text-center text-xl font-semibold text-dark dark:text-white">
                    Ihre Vorteile:
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <span className="mr-3 text-primary">✓</span>
                      <span className="text-body-color dark:text-dark-6">Kostenfreies Erstgespräch zur Bedarfsanalyse</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 text-primary">✓</span>
                      <span className="text-body-color dark:text-dark-6">Transparente Preisgestaltung ohne versteckte Kosten</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 text-primary">✓</span>
                      <span className="text-body-color dark:text-dark-6">Persönlicher Ansprechpartner während des gesamten Projekts</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 text-primary">✓</span>
                      <span className="text-body-color dark:text-dark-6">Regelmäßige Berichte und Optimierungen</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

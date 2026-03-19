"use client";

import { useState } from "react";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    const formData = new FormData(e.currentTarget);
    const data = {
      name: (formData.get("name") as string)?.trim() || "",
      email: (formData.get("email") as string)?.trim() || "",
      message: (formData.get("message") as string)?.trim() || "",
    };

    // Client-side validation
    if (!data.name || !data.email || !data.message) {
      setSubmitMessage("❌ Bitte füllen Sie alle Felder aus!");
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitMessage("✅ Danke! Ich habe Ihre Nachricht erhalten und melde mich in Kürze!");
        e.currentTarget.reset();
      } else {
        setSubmitMessage(`❌ Fehler: ${result.error}`);
      }
    } catch (error) {
      console.error("Form submit error:", error);
      setSubmitMessage("❌ Es ist ein Fehler aufgetreten.");
    } finally {
      setIsSubmitting(false);
    }
  };

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
                  Ihr Projekt anfragen
                </h2>
              </div>

              <div
                className="rounded-lg bg-white px-8 py-10 shadow-testimonial dark:bg-dark-2 dark:shadow-none sm:px-10 sm:py-12 md:p-[60px]"
                data-wow-delay=".2s"
              >
                <div className="mb-6 rounded-lg bg-blue-50 p-4 dark:bg-blue-500/10">
                  <p className="text-xs font-semibold text-primary dark:text-blue-400">
                    ⏱️ Wir arbeiten mit Langzeitpartnerschaften (min. 3-6 Monate)
                  </p>
                  <p className="mt-1 text-xs text-body-color dark:text-dark-6">
                    So garantieren wir echte, nachhaltige Ergebnisse. Kontaktieren Sie uns gerne!
                  </p>
                </div>

                <div className="mb-6 rounded-lg bg-green-50 p-4 dark:bg-green-500/10">
                  <p className="text-xs font-semibold text-green-600 dark:text-green-400">
                    💚 Investition startet bei 3.999€ netto*
                  </p>
                  <p className="mt-1 text-xs text-body-color dark:text-dark-6">
                    Einfache Webseiten und Landingpages starten in diesem Rahmen. Ihre genauen Kosten besprechen wir nach dem Erstgespräch.
                  </p>
                </div>

                <form onSubmit={handleSubmit}>
                  <div className="mb-[22px]">
                    <label htmlFor="name" className="mb-4 block text-sm text-body-color dark:text-dark-6">
                      Name*
                    </label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      placeholder="Max Mustermann"
                      required
                      className="w-full border-0 border-b border-[#f1f1f1] bg-transparent pb-3 text-dark placeholder:text-black dark:placeholder:text-white focus:border-primary focus:outline-none dark:border-dark-3 dark:text-white"
                    />
                  </div>

                  <div className="mb-[22px]">
                    <label htmlFor="email" className="mb-4 block text-sm text-body-color dark:text-dark-6">
                      E-Mail*
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      placeholder="ihre@email.de"
                      required
                      className="w-full border-0 border-b border-[#f1f1f1] bg-transparent pb-3 text-dark placeholder:text-black dark:placeholder:text-white focus:border-primary focus:outline-none dark:border-dark-3 dark:text-white"
                    />
                  </div>

                  <div className="mb-[30px]">
                    <label htmlFor="message" className="mb-4 block text-sm text-body-color dark:text-dark-6">
                      Nachricht*
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      placeholder="Ihre Nachricht..."
                      required
                      className="w-full resize-none border-0 border-b border-[#f1f1f1] bg-transparent pb-3 text-dark placeholder:text-black dark:placeholder:text-white focus:border-primary focus:outline-none dark:border-dark-3 dark:text-white"
                    ></textarea>
                  </div>

                  {submitMessage && (
                    <div
                      className={`mb-4 rounded-md p-3 text-sm ${
                        submitMessage.startsWith("✅")
                          ? "bg-green-50 text-green-800 dark:bg-green-900/20 dark:text-green-400"
                          : "bg-red-50 text-red-800 dark:bg-red-900/20 dark:text-red-400"
                      }`}
                    >
                      {submitMessage}
                    </div>
                  )}

                  <div className="mb-0">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center justify-center rounded-md bg-primary px-10 py-3 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      {isSubmitting ? "Wird gesendet..." : "Nachricht senden"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

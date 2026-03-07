"use client";

import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";

const InvestmentFunnel = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    investment: "",
    projectType: "",
    timeline: "",
    name: "",
    email: "",
    message: "",
  });

  const handleSelect = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
    setStep(step + 1);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName: formData.name,
          email: formData.email,
          projectType: formData.projectType,
          timeline: formData.timeline,
          investment: formData.investment,
          message: formData.message || "Anfrage über Investment Funnel",
        }),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitMessage("✅ Vielen Dank! Ihre Anfrage wurde erfolgreich gesendet. Wir melden uns innerhalb von 24 Stunden bei Ihnen.");
        // Reset form
        setFormData({
          investment: "",
          projectType: "",
          timeline: "",
          name: "",
          email: "",
          message: "",
        });
        setStep(1);
      } else {
        setSubmitMessage(`❌ Fehler: ${result.error}`);
      }
    } catch (error) {
      setSubmitMessage("❌ Es ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="pb-8 pt-20 dark:bg-dark lg:pb-[70px] lg:pt-[120px]">
      <div className="container">
        <SectionTitle
          subtitle="Investment-Planung"
          title="Was planen Sie zu investieren?"
          paragraph="Ihr Budget bestimmt den Umfang Ihres Projekts. Wählen Sie Ihren Investitionsrahmen und erhalten Sie eine maßgeschneiderte Strategie für maximale Sichtbarkeit und Leads."
          center
        />

        <div className="mx-auto max-w-2xl">
          {step === 1 && (
            <div>
              <h3 className="mb-6 text-xl font-semibold">Schritt 1: Wählen Sie Ihren Investitionsrahmen</h3>
              <p className="mb-6 text-gray-600 dark:text-gray-400">
                Ihr Budget bestimmt nicht nur den Projektumfang, sondern auch die Geschwindigkeit der Ergebnisse. Jedes Paket ist auf nachhaltigen Erfolg ausgelegt.
              </p>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
                <button
                  onClick={() => handleSelect("investment", "3.999€ – 6.900€")}
                  className="rounded-lg border border-primary bg-white p-6 text-left transition hover:bg-primary hover:text-white md:p-8 shadow-sm hover:shadow-md"
                >
                  <h4 className="font-bold text-lg mb-2">3.999€ – 6.900€</h4>
                  <p className="text-sm mb-3 opacity-90">Einfache Landingpages oder Onepager</p>
                  <ul className="text-xs space-y-1 opacity-75">
                    <li>• Grundlegende SEO-Optimierung</li>
                    <li>• Responsive Design</li>
                    <li>• Basis-Content-Strategie</li>
                  </ul>
                </button>
                <button
                  onClick={() => handleSelect("investment", "10.000€ – 15.000€")}
                  className="rounded-lg border border-primary bg-white p-6 text-left transition hover:bg-primary hover:text-white md:p-8 shadow-sm hover:shadow-md"
                >
                  <h4 className="font-bold text-lg mb-2">10.000€ – 15.000€</h4>
                  <p className="text-sm mb-3 opacity-90">Umfangreichere Onepager, kleine Multipager</p>
                  <ul className="text-xs space-y-1 opacity-75">
                    <li>• Erweiterte SEO-Strategie</li>
                    <li>• Content-Management-System</li>
                    <li>• Conversion-Optimierung</li>
                  </ul>
                </button>
                <button
                  onClick={() => handleSelect("investment", "24.000€ – 29.000€")}
                  className="rounded-lg border border-primary bg-white p-6 text-left transition hover:bg-primary hover:text-white md:p-8 shadow-sm hover:shadow-md"
                >
                  <h4 className="font-bold text-lg mb-2">24.000€ – 29.000€</h4>
                  <p className="text-sm mb-3 opacity-90">Einstieg in E-Commerce mit Shopify-Shop</p>
                  <ul className="text-xs space-y-1 opacity-75">
                    <li>• Vollständiger Online-Shop</li>
                    <li>• Zahlungssystem-Integration</li>
                    <li>• Erweiterte Analytics</li>
                  </ul>
                </button>
                <button
                  onClick={() => handleSelect("investment", "60.000€+")}
                  className="rounded-lg border border-primary bg-white p-6 text-left transition hover:bg-primary hover:text-white md:p-8 shadow-sm hover:shadow-md"
                >
                  <h4 className="font-bold text-lg mb-2">60.000€+</h4>
                  <p className="text-sm mb-3 opacity-90">Komplexe Shopify-Shops mit Integrationen</p>
                  <ul className="text-xs space-y-1 opacity-75">
                    <li>• Enterprise-Lösungen</li>
                    <li>• Individuelle Anpassungen</li>
                    <li>• Voll-Service-Betreuung</li>
                  </ul>
                </button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div>
              <h3 className="mb-4 text-lg font-semibold md:text-xl">Schritt 2: Welches Projekt interessiert Sie?</h3>
              <p className="mb-6 text-gray-600 dark:text-gray-400">
                Basierend auf Ihrem Budget erstellen wir eine maßgeschneiderte Lösung für Ihre spezifischen Anforderungen.
              </p>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
                <button
                  onClick={() => handleSelect("projectType", "Shopify Online-Shop")}
                  className="rounded-lg border border-primary bg-white p-6 text-left transition hover:bg-primary hover:text-white md:p-8 shadow-sm hover:shadow-md"
                >
                  <div className="flex items-start space-x-4">
                    <div className="text-2xl">🛒</div>
                    <div>
                      <h4 className="font-bold text-lg mb-2">Shopify Online-Shop</h4>
                      <p className="text-sm opacity-90">Professioneller E-Commerce mit allen Zahlungssystemen</p>
                    </div>
                  </div>
                </button>
                <button
                  onClick={() => handleSelect("projectType", "Lokaler Webshop")}
                  className="rounded-lg border border-primary bg-white p-6 text-left transition hover:bg-primary hover:text-white md:p-8 shadow-sm hover:shadow-md"
                >
                  <div className="flex items-start space-x-4">
                    <div className="text-2xl">🏪</div>
                    <div>
                      <h4 className="font-bold text-lg mb-2">Lokaler Webshop</h4>
                      <p className="text-sm opacity-90">Lokale Präsenz mit regionaler SEO-Optimierung</p>
                    </div>
                  </div>
                </button>
                <button
                  onClick={() => handleSelect("projectType", "SaaS-System")}
                  className="rounded-lg border border-primary bg-white p-6 text-left transition hover:bg-primary hover:text-white md:p-8 shadow-sm hover:shadow-md"
                >
                  <div className="flex items-start space-x-4">
                    <div className="text-2xl">⚙️</div>
                    <div>
                      <h4 className="font-bold text-lg mb-2">SaaS-System</h4>
                      <p className="text-sm opacity-90">Software-as-a-Service Lösungen für skalierbare Geschäftsmodelle</p>
                    </div>
                  </div>
                </button>
                <button
                  onClick={() => handleSelect("projectType", "SEO & Marketing")}
                  className="rounded-lg border border-primary bg-white p-6 text-left transition hover:bg-primary hover:text-white md:p-8 shadow-sm hover:shadow-md"
                >
                  <div className="flex items-start space-x-4">
                    <div className="text-2xl">📈</div>
                    <div>
                      <h4 className="font-bold text-lg mb-2">SEO & Marketing</h4>
                      <p className="text-sm opacity-90">Organische Sichtbarkeit und Lead-Generierung</p>
                    </div>
                  </div>
                </button>
                <button
                  onClick={() => handleSelect("projectType", "Landingpage")}
                  className="rounded-lg border border-primary bg-white p-6 text-left transition hover:bg-primary hover:text-white md:p-8 shadow-sm hover:shadow-md"
                >
                  <div className="flex items-start space-x-4">
                    <div className="text-2xl">🎯</div>
                    <div>
                      <h4 className="font-bold text-lg mb-2">Landingpage</h4>
                      <p className="text-sm opacity-90">Hochkonvertierende Landingpages für Kampagnen</p>
                    </div>
                  </div>
                </button>
                <button
                  onClick={() => handleSelect("projectType", "Sonstiges")}
                  className="rounded-lg border border-primary bg-white p-6 text-left transition hover:bg-primary hover:text-white md:p-8 shadow-sm hover:shadow-md"
                >
                  <div className="flex items-start space-x-4">
                    <div className="text-2xl">💡</div>
                    <div>
                      <h4 className="font-bold text-lg mb-2">Sonstiges</h4>
                      <p className="text-sm opacity-90">Individuelle Lösungen nach Ihren spezifischen Anforderungen</p>
                    </div>
                  </div>
                </button>
              </div>
              <button onClick={() => setStep(step - 1)} className="mt-6 text-primary hover:underline">← Zurück</button>
            </div>
          )}

          {step === 3 && (
            <div>
              <h3 className="mb-4 text-lg font-semibold md:text-xl">Schritt 3: Gewünschter Zeitrahmen</h3>
              <p className="mb-6 text-gray-600 dark:text-gray-400">
                Wann möchten Sie mit Ihrem Projekt starten? Wir planen realistische Timelines für optimale Ergebnisse.
              </p>
              <div className="grid grid-cols-1 gap-4 md:gap-6">
                <button
                  onClick={() => handleSelect("timeline", "Sofort/Dringend")}
                  className="rounded-lg border border-primary bg-white p-6 text-left transition hover:bg-primary hover:text-white md:p-8 shadow-sm hover:shadow-md"
                >
                  <div className="flex items-start space-x-4">
                    <div className="text-2xl">⚡</div>
                    <div>
                      <h4 className="font-bold text-lg mb-2">Sofort/Dringend</h4>
                      <p className="text-sm opacity-90">Projektstart innerhalb von 2 Wochen möglich</p>
                    </div>
                  </div>
                </button>
                <button
                  onClick={() => handleSelect("timeline", "In den nächsten 2-4 Wochen")}
                  className="rounded-lg border border-primary bg-white p-6 text-left transition hover:bg-primary hover:text-white md:p-8 shadow-sm hover:shadow-md"
                >
                  <div className="flex items-start space-x-4">
                    <div className="text-2xl">📅</div>
                    <div>
                      <h4 className="font-bold text-lg mb-2">In den nächsten 2-4 Wochen</h4>
                      <p className="text-sm opacity-90">Standard-Timeline für optimale Planung</p>
                    </div>
                  </div>
                </button>
                <button
                  onClick={() => handleSelect("timeline", "In 1-3 Monaten")}
                  className="rounded-lg border border-primary bg-white p-6 text-left transition hover:bg-primary hover:text-white md:p-8 shadow-sm hover:shadow-md"
                >
                  <div className="text-2xl">🗓️</div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">In 1-3 Monaten</h4>
                    <p className="text-sm opacity-90">Zeit für detaillierte Strategieentwicklung</p>
                  </div>
                </button>
                <button
                  onClick={() => handleSelect("timeline", "Noch nicht definiert")}
                  className="rounded-lg border border-primary bg-white p-6 text-left transition hover:bg-primary hover:text-white md:p-8 shadow-sm hover:shadow-md"
                >
                  <div className="text-2xl">🤔</div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Noch nicht definiert</h4>
                    <p className="text-sm opacity-90">Lassen Sie uns gemeinsam den besten Zeitpunkt finden</p>
                  </div>
                </button>
              </div>
              <button onClick={() => setStep(step - 1)} className="mt-6 text-primary hover:underline">← Zurück</button>
            </div>
          )}

          {step === 4 && (
            <div>
              <h3 className="mb-4 text-lg font-semibold md:text-xl">Schritt 4: Ihre Kontaktdaten</h3>
              <p className="mb-6 text-gray-600 dark:text-gray-400">
                Teilen Sie uns Ihre Kontaktdaten mit und wir erstellen Ihnen ein maßgeschneidertes Angebot basierend auf Ihren Angaben.
              </p>
              <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
                <div>
                  <label className="mb-3 block text-sm font-medium text-dark dark:text-white">
                    Vollständiger Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-dark placeholder:text-gray-400 focus:border-primary focus:outline-none dark:border-dark-3 dark:bg-dark-2 dark:text-white"
                    placeholder="Max Mustermann"
                    required
                  />
                </div>
                <div>
                  <label className="mb-3 block text-sm font-medium text-dark dark:text-white">
                    E-Mail-Adresse *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-dark placeholder:text-gray-400 focus:border-primary focus:outline-none dark:border-dark-3 dark:bg-dark-2 dark:text-white"
                    placeholder="ihre.email@beispiel.de"
                    required
                  />
                </div>
                <div>
                  <label className="mb-3 block text-sm font-medium text-dark dark:text-white">
                    Zusätzliche Informationen (optional)
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-dark placeholder:text-gray-400 focus:border-primary focus:outline-none dark:border-dark-3 dark:bg-dark-2 dark:text-white"
                    rows={4}
                    placeholder="Beschreiben Sie kurz Ihre spezifischen Anforderungen oder Fragen..."
                  />
                </div>
                {submitMessage && (
                  <div className={`p-4 rounded-md text-sm ${
                    submitMessage.startsWith("✅")
                      ? "bg-green-50 text-green-800 dark:bg-green-900/20 dark:text-green-400"
                      : "bg-red-50 text-red-800 dark:bg-red-900/20 dark:text-red-400"
                  }`}>
                    {submitMessage}
                  </div>
                )}
                <div className="flex flex-col gap-4 pt-4 sm:flex-row sm:gap-6">
                  <button onClick={() => setStep(step - 1)} className="order-2 rounded-lg border border-gray-300 px-6 py-3 font-medium text-dark transition hover:bg-gray-50 dark:border-dark-3 dark:text-white dark:hover:bg-dark-3 sm:order-1">
                    ← Zurück
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="order-1 rounded-lg bg-primary px-6 py-3 font-medium text-white transition hover:bg-opacity-90 disabled:opacity-50 disabled:cursor-not-allowed sm:order-2"
                  >
                    {isSubmitting ? "Wird gesendet..." : "Kostenloses Angebot anfordern"}
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default InvestmentFunnel;
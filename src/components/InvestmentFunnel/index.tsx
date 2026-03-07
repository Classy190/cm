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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Hier E-Mail senden (später implementieren)
    alert("Vielen Dank! Wir melden uns bald bei Ihnen.");
  };

  return (
    <section className="pb-8 pt-20 dark:bg-dark lg:pb-[70px] lg:pt-[120px]">
      <div className="container">
        <SectionTitle
          subtitle="Investment Funnel"
          title="Was planen Sie zu investieren?"
          paragraph="Wählen Sie Ihren Investitionsrahmen und lassen Sie uns Ihr perfektes Projekt planen."
          center
        />

        <div className="mx-auto max-w-2xl">
          {step === 1 && (
            <div>
              <h3 className="mb-6 text-xl font-semibold">Schritt 1: Wählen Sie Ihren Investitionsrahmen</h3>
              <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-4">
                <button
                  onClick={() => handleSelect("investment", "3.999€ – 6.900€")}
                  className="rounded-lg border border-primary bg-white p-4 text-left transition hover:bg-primary hover:text-white md:p-5"
                >
                  <h4 className="font-bold text-lg">3.999€ – 6.900€</h4>
                  <p className="text-sm">Einfache Landingpages oder Onepager</p>
                </button>
                <button
                  onClick={() => handleSelect("investment", "10.000€ – 15.000€")}
                  className="rounded-lg border border-primary bg-white p-4 text-left transition hover:bg-primary hover:text-white md:p-5"
                >
                  <h4 className="font-bold text-lg">10.000€ – 15.000€</h4>
                  <p className="text-sm">Umfangreichere Onepager, kleine Multipager</p>
                </button>
                <button
                  onClick={() => handleSelect("investment", "24.000€ – 29.000€")}
                  className="rounded-lg border border-primary bg-white p-4 text-left transition hover:bg-primary hover:text-white md:p-5"
                >
                  <h4 className="font-bold text-lg">24.000€ – 29.000€</h4>
                  <p className="text-sm">Einstieg in E-Commerce mit Shopify-Shop</p>
                </button>
                <button
                  onClick={() => handleSelect("investment", "60.000€+")}
                  className="rounded-lg border border-primary bg-white p-4 text-left transition hover:bg-primary hover:text-white md:p-5"
                >
                  <h4 className="font-bold text-lg">60.000€+</h4>
                  <p className="text-sm">Komplexe Shopify-Shops mit Integrationen</p>
                </button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div>
              <h3 className="mb-6 text-lg font-semibold md:text-xl">Schritt 2: Welches Projekt interessiert Sie?</h3>
              <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-4">
                <button
                  onClick={() => handleSelect("projectType", "Shopify Online-Shop")}
                  className="rounded-lg border border-primary bg-white p-4 text-left transition hover:bg-primary hover:text-white md:p-5"
                >
                  Shopify Online-Shop
                </button>
                <button
                  onClick={() => handleSelect("projectType", "Lokaler Webshop")}
                  className="rounded-lg border border-primary bg-white p-4 text-left transition hover:bg-primary hover:text-white md:p-5"
                >
                  Lokaler Webshop
                </button>
                <button
                  onClick={() => handleSelect("projectType", "SaaS-System")}
                  className="rounded-lg border border-primary bg-white p-4 text-left transition hover:bg-primary hover:text-white md:p-5"
                >
                  SaaS-System
                </button>
                <button
                  onClick={() => handleSelect("projectType", "SEO & Marketing")}
                  className="rounded-lg border border-primary bg-white p-4 text-left transition hover:bg-primary hover:text-white md:p-5"
                >
                  SEO & Marketing
                </button>
                <button
                  onClick={() => handleSelect("projectType", "Landingpage")}
                  className="rounded-lg border border-primary bg-white p-4 text-left transition hover:bg-primary hover:text-white md:p-5"
                >
                  Landingpage
                </button>
                <button
                  onClick={() => handleSelect("projectType", "Sonstiges")}
                  className="rounded-lg border border-primary bg-white p-4 text-left transition hover:bg-primary hover:text-white md:p-5"
                >
                  Sonstiges
                </button>
              </div>
              <button onClick={() => setStep(step - 1)} className="mt-6 text-primary hover:underline">← Zurück</button>
            </div>
          )}

          {step === 3 && (
            <div>
              <h3 className="mb-6 text-lg font-semibold md:text-xl">Schritt 3: Gewünschter Zeitrahmen</h3>
              <div className="grid grid-cols-1 gap-3 md:gap-4">
                <button
                  onClick={() => handleSelect("timeline", "Sofort/Dringend")}
                  className="rounded-lg border border-primary bg-white p-4 text-left transition hover:bg-primary hover:text-white md:p-5"
                >
                  Sofort/Dringend
                </button>
                <button
                  onClick={() => handleSelect("timeline", "In den nächsten 2-4 Wochen")}
                  className="rounded-lg border border-primary bg-white p-4 text-left transition hover:bg-primary hover:text-white md:p-5"
                >
                  In den nächsten 2-4 Wochen
                </button>
                <button
                  onClick={() => handleSelect("timeline", "In 1-3 Monaten")}
                  className="rounded-lg border border-primary bg-white p-4 text-left transition hover:bg-primary hover:text-white md:p-5"
                >
                  In 1-3 Monaten
                </button>
                <button
                  onClick={() => handleSelect("timeline", "Noch nicht definiert")}
                  className="rounded-lg border border-primary bg-white p-4 text-left transition hover:bg-primary hover:text-white md:p-5"
                >
                  Noch nicht definiert
                </button>
              </div>
              <button onClick={() => setStep(step - 1)} className="mt-6 text-primary hover:underline">← Zurück</button>
            </div>
          )}

          {step === 4 && (
            <div>
              <h3 className="mb-6 text-lg font-semibold md:text-xl">Schritt 4: Ihre Kontaktdaten</h3>
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-5">
                <div>
                  <label className="mb-2 block text-sm font-medium text-dark dark:text-white">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-dark placeholder:text-gray-400 focus:border-primary focus:outline-none dark:border-dark-3 dark:bg-dark-2 dark:text-white"
                    required
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-dark dark:text-white">E-Mail</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-dark placeholder:text-gray-400 focus:border-primary focus:outline-none dark:border-dark-3 dark:bg-dark-2 dark:text-white"
                    required
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-dark dark:text-white">Nachricht (optional)</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-dark placeholder:text-gray-400 focus:border-primary focus:outline-none dark:border-dark-3 dark:bg-dark-2 dark:text-white"
                    rows={4}
                    placeholder="Beschreiben Sie kurz Ihr Projekt..."
                  />
                </div>
                <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:gap-4">
                  <button onClick={() => setStep(step - 1)} className="order-2 rounded-lg border border-gray-300 px-4 py-3 font-medium text-dark transition hover:bg-gray-50 dark:border-dark-3 dark:text-white dark:hover:bg-dark-3 sm:order-1">← Zurück</button>
                  <button type="submit" className="order-1 rounded-lg bg-primary px-4 py-3 font-medium text-white transition hover:bg-opacity-90 sm:order-2">Absenden</button>
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
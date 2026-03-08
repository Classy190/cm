"use client";

import Link from "next/link";

interface ServiceDetailProps {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  benefits: string[];
  useCases: string[];
  pricing: string;
  features: string[];
  blogLink?: string;
}

const iconMap: Record<number, string> = {
  0: "🚀", 1: "📈", 2: "🎯", 3: "⚡", 4: "🔍", 5: "💡", 6: "🛡️", 7: "📊",
};

const ServiceDetail = ({
  id, title, subtitle, description, benefits, useCases, pricing, features, blogLink,
}: ServiceDetailProps) => {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-primary pt-[120px] pb-20 md:pt-[130px] lg:pt-[160px]">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <span className="mb-4 inline-block rounded-full bg-white/20 px-5 py-2 text-sm font-semibold text-white uppercase tracking-widest">
              {subtitle}
            </span>
            <h1 className="mb-6 text-4xl font-bold text-white lg:text-5xl leading-tight">
              {title}
            </h1>
            <p className="text-lg text-white/85 max-w-2xl mx-auto leading-relaxed mb-10">{description}</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/#contact" className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-4 text-base font-semibold text-primary shadow-lg hover:bg-gray-50 transition">
                Kostenlos anfragen
              </Link>
              {blogLink && (
                <Link href={blogLink} className="inline-flex items-center justify-center rounded-lg bg-white/15 px-8 py-4 text-base font-semibold text-white border border-white/30 hover:bg-white/25 transition">
                  Mehr im Blog lesen →
                </Link>
              )}
            </div>
          </div>
        </div>
        {/* Decorative blob */}
        <div className="absolute -bottom-1 left-0 right-0">
          <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,60 C360,0 1080,0 1440,60 L1440,60 L0,60 Z" fill="white" fillOpacity="0.04" />
          </svg>
        </div>
      </section>

      {/* Benefits + Features */}
      <section className="py-20 dark:bg-dark lg:py-[100px]">
        <div className="container">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
            {/* Benefits */}
            <div>
              <span className="mb-3 block text-xs font-bold uppercase tracking-widest text-primary">Was Sie gewinnen</span>
              <h2 className="mb-8 text-3xl font-bold text-dark dark:text-white">Ihre Vorteile auf einen Blick</h2>
              <div className="space-y-4">
                {benefits.map((benefit, i) => (
                  <div key={i} className="flex items-start gap-4 rounded-xl border border-stroke bg-white p-5 shadow-sm dark:border-dark-3 dark:bg-dark-2">
                    <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 text-lg">
                      {iconMap[i % 8]}
                    </span>
                    <span className="text-base text-body-color dark:text-dark-6 leading-relaxed">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Features */}
            <div>
              <span className="mb-3 block text-xs font-bold uppercase tracking-widest text-primary">Im Leistungsumfang</span>
              <h2 className="mb-8 text-3xl font-bold text-dark dark:text-white">Was alles enthalten ist</h2>
              <div className="space-y-3">
                {features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3 py-3 border-b border-stroke dark:border-dark-3 last:border-0">
                    <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary">
                      <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="text-base font-medium text-dark dark:text-white">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="bg-gray-1 py-20 dark:bg-dark-2 lg:py-[100px]">
        <div className="container">
          <div className="text-center mb-14">
            <span className="mb-3 block text-xs font-bold uppercase tracking-widest text-primary">Anwendungsfälle</span>
            <h2 className="text-3xl font-bold text-dark dark:text-white lg:text-4xl">Perfekt geeignet für...</h2>
            <p className="mt-4 text-base text-body-color dark:text-dark-6 max-w-xl mx-auto">
              Diese Lösung ist ideal für Unternehmen, die messbare Ergebnisse und nachhaltiges Wachstum anstreben.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {useCases.map((useCase, i) => (
              <div key={i} className="group rounded-2xl bg-white p-6 shadow-sm hover:shadow-md transition-shadow dark:bg-dark-3 border border-stroke dark:border-dark-3">
                <span className="mb-4 block text-2xl">{iconMap[i % 8]}</span>
                <p className="text-base font-medium text-dark dark:text-white">{useCase}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 dark:bg-dark lg:py-[100px]">
        <div className="container">
          <div className="text-center mb-14">
            <span className="mb-3 block text-xs font-bold uppercase tracking-widest text-primary">Unser Prozess</span>
            <h2 className="text-3xl font-bold text-dark dark:text-white lg:text-4xl">So arbeiten wir zusammen</h2>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              { step: "01", title: "Analyse & Strategie", desc: "Kickoff-Meeting, Zieldefinition, Wettbewerbs- und Keyword-Analyse" },
              { step: "02", title: "Konzept & Design", desc: "UX/UI-Konzept, Prototyping, Freigabe durch Sie" },
              { step: "03", title: "Umsetzung", desc: "Entwicklung, Content-Erstellung, technische Implementierung" },
              { step: "04", title: "Optimierung", desc: "A/B-Tests, Monitoring, kontinuierliche Verbesserung" },
            ].map((item, i) => (
              <div key={i} className="relative rounded-2xl border border-stroke bg-white p-8 dark:border-dark-3 dark:bg-dark-2">
                <span className="mb-4 block text-4xl font-black text-primary/20">{item.step}</span>
                <h3 className="mb-3 text-lg font-bold text-dark dark:text-white">{item.title}</h3>
                <p className="text-sm text-body-color dark:text-dark-6 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing CTA */}
      <section className="py-20 bg-gray-1 dark:bg-dark-2 lg:py-[100px]">
        <div className="container">
          <div className="mx-auto max-w-3xl rounded-2xl bg-primary p-10 text-center shadow-xl">
            <span className="mb-3 inline-block rounded-full bg-white/20 px-4 py-1 text-xs font-bold uppercase tracking-widest text-white">Investition</span>
            <h2 className="mb-4 text-3xl font-bold text-white">Bereit loszulegen?</h2>
            <p className="mb-8 text-lg text-white/85 max-w-xl mx-auto">{pricing}</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/#contact" className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-4 text-base font-bold text-primary hover:bg-gray-50 transition shadow-lg">
                Jetzt unverbindlich anfragen
              </Link>
              <Link href="/pricing" className="inline-flex items-center justify-center rounded-lg bg-white/15 px-8 py-4 text-base font-semibold text-white border border-white/30 hover:bg-white/25 transition">
                Alle Pakete ansehen
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ mini */}
      <section className="py-20 dark:bg-dark lg:py-[100px]">
        <div className="container">
          <div className="text-center mb-12">
            <span className="mb-3 block text-xs font-bold uppercase tracking-widest text-primary">FAQ</span>
            <h2 className="text-3xl font-bold text-dark dark:text-white">Häufig gestellte Fragen</h2>
          </div>
          <div className="mx-auto max-w-3xl space-y-4">
            {[
              { q: "Wie lange dauert die Umsetzung?", a: "Je nach Projektumfang 4–12 Wochen. Wir arbeiten mit klaren Milestones und halten Sie stets auf dem Laufenden." },
              { q: "Warum mindestens 3–6 Monate?", a: "Nachhaltige Ergebnisse bei SEO und Conversion brauchen Zeit für Tests, Optimierungen und echte Nutzerdaten. Kurze Projekte liefern keine Tiefenwirkung." },
              { q: "Was passiert nach dem Launch?", a: "Wir begleiten Sie weiterhin mit Monitoring, A/B-Tests und kontinuierlicher Optimierung – als echter Langzeitpartner." },
              { q: "Kann ich mit einem kleineren Budget starten?", a: "Kontaktieren Sie uns für ein individuelles Angebot. Wir finden gemeinsam den besten Einstiegspunkt für Ihr Budget." },
            ].map((item, i) => (
              <details key={i} className="group rounded-xl border border-stroke bg-white p-6 dark:border-dark-3 dark:bg-dark-2 cursor-pointer">
                <summary className="flex items-center justify-between text-base font-semibold text-dark dark:text-white list-none">
                  {item.q}
                  <span className="ml-4 text-primary text-xl transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-4 text-sm text-body-color dark:text-dark-6 leading-relaxed border-t border-stroke dark:border-dark-3 pt-4">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceDetail;

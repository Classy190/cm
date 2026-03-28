import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section id="home" className="relative overflow-hidden bg-primary pt-[120px] md:pt-[130px] lg:pt-[160px]">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4">
            <div className="hero-content wow fadeInUp mx-auto max-w-[780px] text-center" data-wow-delay=".2s">
              <h1 className="mb-4 text-2xl font-bold leading-snug text-white sm:mb-6 sm:text-4xl sm:leading-snug lg:text-5xl lg:leading-[1.2]">
                Shopify Webseiten, lokale Websites & SaaS-Lösungen für messbar mehr Aufträge.
              </h1>
              <p className="mx-auto mb-9 max-w-[600px] text-base font-medium text-white sm:mb-12 sm:text-lg sm:leading-[1.44]">
                Spezialisiert auf <span className="font-bold">Shopify E-Commerce Websites</span>, <span className="font-bold">lokale Webseiten-Optimierung</span> und <span className="font-bold">maßgeschneiderte SaaS-Lösungen</span>. Mit professionellem Web-Design, SEO und Conversion-Optimierung generieren wir messbar mehr Leads & Umsatz für Agenturen, Dienstleister und Online-Shops.
              </p>

              <ul className="mb-10 flex flex-wrap items-center justify-center gap-5">
                <li>
                  <Link
                    href="#contact"
                    className="inline-flex items-center justify-center rounded-md bg-white px-7 py-[14px] text-center text-base font-medium text-dark shadow-1 transition duration-300 ease-in-out hover:bg-gray-2"
                  >
                    Projekt anfragen
                  </Link>
                </li>
              </ul>

              <div className="mb-10 rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-lg">
                <p className="mb-4 text-center text-sm font-semibold uppercase tracking-widest text-white/80">Google Search Console Insights</p>

                <div className="mb-4 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-lg bg-white/10 p-4">
                    <h4 className="mb-2 text-xs font-semibold text-white/80">Impressionen</h4>
                    <div className="mb-3 flex justify-between text-[10px] text-white/60">
                      <span>7,3k</span>
                      <span className="text-emerald-300">+18%</span>
                    </div>
                    <div className="h-24 w-full rounded-lg bg-white/10 p-2">
                      <svg width="100%" height="100%" viewBox="0 0 220 70" className="rounded-lg">
                        <polyline fill="none" stroke="#4A6CF7" strokeWidth="3" points="0,60 30,45 60,50 90,35 120,30 150,38 180,25 210,20" />
                        <circle cx="210" cy="20" r="3.5" fill="#4A6CF7" />
                      </svg>
                    </div>
                  </div>
                  <div className="rounded-lg bg-white/10 p-4">
                    <h4 className="mb-2 text-xs font-semibold text-white/80">Klicks</h4>
                    <div className="mb-3 flex justify-between text-[10px] text-white/60">
                      <span>820</span>
                      <span className="text-amber-300">+12%</span>
                    </div>
                    <div className="h-24 w-full rounded-lg bg-white/10 p-2">
                      <svg width="100%" height="100%" viewBox="0 0 220 70" className="rounded-lg">
                        <polyline fill="none" stroke="#FACC15" strokeWidth="3" points="0,62 30,55 60,50 90,44 120,40 150,36 180,31 210,28" />
                        <circle cx="210" cy="28" r="3.5" fill="#FACC15" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="grid gap-3 sm:grid-cols-3">
                  <div className="rounded-lg bg-white/10 p-3 text-center">
                    <div className="mb-1 text-xs uppercase text-white/70">Position 1</div>
                    <div className="text-xl font-bold text-white">70%</div>
                    <div className="mt-1 h-2 w-full rounded-full bg-white/20">
                      <div className="h-2 w-[70%] rounded-full bg-emerald-300" />
                    </div>
                  </div>
                  <div className="rounded-lg bg-white/10 p-3 text-center">
                    <div className="mb-1 text-xs uppercase text-white/70">Position 2-3</div>
                    <div className="text-xl font-bold text-white">20%</div>
                    <div className="mt-1 h-2 w-full rounded-full bg-white/20">
                      <div className="h-2 w-[20%] rounded-full bg-amber-300" />
                    </div>
                  </div>
                  <div className="rounded-lg bg-white/10 p-3 text-center">
                    <div className="mb-1 text-xs uppercase text-white/70">Seite 2+</div>
                    <div className="text-xl font-bold text-white">10%</div>
                    <div className="mt-1 h-2 w-full rounded-full bg-white/20">
                      <div className="h-2 w-[10%] rounded-full bg-red-400" />
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <p className="mb-4 text-center text-base font-medium text-white/60">
                  Vertraut von über 20+ zufriedenen Kunden — ⭐ 4,9/5 Bewertung
                </p>
              </div>

              {/* Keyword-Ranking Feld entfernt */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

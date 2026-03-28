import Link from "next/link";

const About = () => {
  return (
    <section
      id="about"
      className="bg-gray-1 pb-8 pt-20 dark:bg-dark-2 lg:pb-[70px] lg:pt-[120px]"
    >
      <div className="container">
        <div className="wow fadeInUp" data-wow-delay=".2s">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <div className="mb-12 max-w-[540px] lg:mb-0">
                <span className="mb-4 block text-sm font-semibold uppercase tracking-widest text-primary">
                  Über Classy Marketing
                </span>
                <h2 className="mb-5 text-3xl font-bold leading-tight text-dark dark:text-white sm:text-[40px] sm:leading-[1.2]">
                  15 Jahre Expertise – aber wichtig ist, was heute zählt.
                </h2>
                <p className="mb-8 text-base leading-relaxed text-body-color dark:text-dark-6">
                  Classy Marketing vereint jahrzehntelange Erfahrung mit einem modernen Lernansatz: Wir beobachten heute, lernen morgen und liefern übermorgen Lösungen, die direkt funktionieren. Ob früher oder jetzt – entscheidend ist, dass wir immer die aktuellsten Plattformen, Tools und echte Marktergebnisse nutzen.
                </p>

                {/* Expertise Cards */}
                <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
                  {[
                    {
                      icon: "🚀",
                      title: "Performance",
                      desc: "SEO, Core Web Vitals, Conversion-Optimierung – wir sorgen dafür, dass Ihre Website rankt und verkauft.",
                    },
                    {
                      icon: "💻",
                      title: "Coding",
                      desc: "Full-Stack Entwicklung mit Next.js, Shopify & modernen Technologien. Sauber, schnell, skalierbar.",
                    },
                    {
                      icon: "🎨",
                      title: "UI/UX",
                      desc: "Design, das konvertiert. Nutzererlebnisse, die begeistern – auf Desktop und Mobile.",
                    },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="rounded-xl border border-stroke bg-white p-5 dark:border-dark-3 dark:bg-dark"
                    >
                      <span className="mb-2 block text-2xl">{item.icon}</span>
                      <span className="block text-base font-bold text-dark dark:text-white mb-1">
                        {item.title}
                      </span>
                      <span className="block text-sm text-body-color dark:text-dark-6 leading-snug">
                        {item.desc}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mb-10 grid grid-cols-2 gap-4">
                  {[
                    { value: "15+", label: "Jahre Erfahrung" },
                    { value: "20+", label: "Zufriedene Kunden" },
                    { value: "4.9★", label: "Durchschnittsbewertung" },
                    { value: "100%", label: "Datengetrieben" },
                  ].map((stat, i) => (
                    <div
                      key={i}
                      className="rounded-xl border border-stroke bg-white p-5 dark:border-dark-3 dark:bg-dark"
                    >
                      <span className="block text-2xl font-extrabold text-primary">
                        {stat.value}
                      </span>
                      <span className="block text-sm font-medium text-body-color dark:text-dark-6">
                        {stat.label}
                      </span>
                    </div>
                  ))}
                </div>

                <Link
                  href="/#contact"
                  className="inline-flex items-center justify-center rounded-md bg-primary px-7 py-3 text-center text-base font-medium text-white duration-300 hover:bg-primary/90"
                >
                  Projekt anfragen
                </Link>
              </div>
            </div>

            <div className="w-full px-4 lg:w-1/2">
              <div className="-mx-2 flex flex-wrap sm:-mx-4 lg:-mx-2 xl:-mx-4">
                <div className="w-full px-2 sm:w-1/2 sm:px-4 lg:px-2 xl:px-4">
                  <div className="relative mb-4 sm:mb-8 sm:h-[400px] md:h-[540px] lg:h-[400px] xl:h-[500px]">
                    <div className="h-full w-full rounded-2xl overflow-hidden bg-gradient-to-br from-primary/10 to-primary/5">
                      <svg viewBox="0 0 300 500" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
                        <defs>
                          <linearGradient id="g1" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#4A6CF7" stopOpacity="0.15" />
                            <stop offset="100%" stopColor="#4A6CF7" stopOpacity="0.03" />
                          </linearGradient>
                        </defs>
                        <rect width="300" height="500" fill="url(#g1)" />
                        <rect x="30" y="60" width="240" height="170" rx="12" fill="#1D2144" stroke="#4A6CF7" strokeOpacity="0.3" strokeWidth="1.5" />
                        <rect x="30" y="60" width="240" height="28" rx="12" fill="#4A6CF7" fillOpacity="0.25" />
                        <circle cx="52" cy="74" r="6" fill="#FF5F57" />
                        <circle cx="70" cy="74" r="6" fill="#FFBD2E" />
                        <circle cx="88" cy="74" r="6" fill="#28CA41" />
                        <rect x="50" y="105" width="35" height="90" rx="5" fill="#4A6CF7" fillOpacity="0.4" />
                        <rect x="95" y="80" width="35" height="115" rx="5" fill="#4A6CF7" fillOpacity="0.6" />
                        <rect x="140" y="55" width="35" height="140" rx="5" fill="#4A6CF7" fillOpacity="0.85" transform="translate(0,35)"/>
                        <rect x="185" y="75" width="35" height="120" rx="5" fill="#4A6CF7" transform="translate(0,20)"/>
                        <text x="150" y="250" textAnchor="middle" fill="#4A6CF7" fontSize="14" fontWeight="800" fontFamily="sans-serif">+127% Wachstum</text>
                        <rect x="50" y="280" width="95" height="130" rx="14" fill="#1D2144" stroke="#4A6CF7" strokeOpacity="0.3" strokeWidth="1.5" />
                        <rect x="62" y="295" width="71" height="100" rx="8" fill="#4A6CF7" fillOpacity="0.08" />
                        <rect x="72" y="305" width="51" height="7" rx="3" fill="#4A6CF7" fillOpacity="0.6" />
                        <rect x="72" y="320" width="40" height="5" rx="2" fill="white" fillOpacity="0.2" />
                        <rect x="72" y="333" width="45" height="5" rx="2" fill="white" fillOpacity="0.2" />
                        <rect x="72" y="355" width="51" height="22" rx="6" fill="#4A6CF7" />
                        <rect x="160" y="290" width="110" height="65" rx="12" fill="white" fillOpacity="0.06" stroke="#4A6CF7" strokeOpacity="0.25" strokeWidth="1" />
                        <text x="215" y="318" textAnchor="middle" fill="#4A6CF7" fontSize="24" fontWeight="800" fontFamily="sans-serif">4.9</text>
                        <text x="215" y="337" textAnchor="middle" fill="white" fontSize="9" fontFamily="sans-serif" fillOpacity="0.5">Kundenbewertung</text>
                        <text x="215" y="352" textAnchor="middle" fill="#FFBD2E" fontSize="11" fontFamily="sans-serif">&#9733;&#9733;&#9733;&#9733;&#9733;</text>
                        <rect x="160" y="370" width="110" height="50" rx="12" fill="white" fillOpacity="0.06" stroke="white" strokeOpacity="0.1" strokeWidth="1" />
                        <text x="215" y="395" textAnchor="middle" fill="white" fontSize="18" fontWeight="800" fontFamily="sans-serif">20+</text>
                        <text x="215" y="410" textAnchor="middle" fill="white" fontSize="9" fontFamily="sans-serif" fillOpacity="0.5">Kunden betreut</text>
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="w-full px-2 sm:w-1/2 sm:px-4 lg:px-2 xl:px-4">
                  <div className="relative mb-4 sm:mb-8 sm:h-[220px] md:h-[346px] lg:mb-4 lg:h-[225px] xl:mb-8 xl:h-[310px]">
                    <div className="h-full w-full rounded-2xl overflow-hidden">
                      <svg viewBox="0 0 280 310" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
                        <rect width="280" height="310" fill="#1D2144" />
                        <text x="140" y="45" textAnchor="middle" fill="white" fontSize="12" fontWeight="700" fontFamily="sans-serif" fillOpacity="0.6">SEO PERFORMANCE</text>
                        <rect x="25" y="62" width="230" height="9" rx="4" fill="#4A6CF7" fillOpacity="0.15" />
                        <rect x="25" y="62" width="193" height="9" rx="4" fill="#4A6CF7" fillOpacity="0.8" />
                        <text x="262" y="71" textAnchor="end" fill="#4A6CF7" fontSize="10" fontFamily="sans-serif">84%</text>
                        <rect x="25" y="85" width="230" height="9" rx="4" fill="#4A6CF7" fillOpacity="0.15" />
                        <rect x="25" y="85" width="155" height="9" rx="4" fill="#4A6CF7" fillOpacity="0.55" />
                        <text x="262" y="94" textAnchor="end" fill="white" fontSize="10" fontFamily="sans-serif" fillOpacity="0.5">67%</text>
                        <rect x="25" y="108" width="230" height="9" rx="4" fill="#4A6CF7" fillOpacity="0.15" />
                        <rect x="25" y="108" width="210" height="9" rx="4" fill="#4A6CF7" fillOpacity="0.95" />
                        <text x="262" y="117" textAnchor="end" fill="#4A6CF7" fontSize="10" fontFamily="sans-serif">91%</text>
                        <rect x="25" y="145" width="68" height="68" rx="12" fill="#4A6CF7" fillOpacity="0.1" stroke="#4A6CF7" strokeOpacity="0.4" strokeWidth="1" />
                        <text x="59" y="175" textAnchor="middle" fill="#4A6CF7" fontSize="22" fontWeight="800" fontFamily="sans-serif">#1</text>
                        <text x="59" y="193" textAnchor="middle" fill="white" fontSize="8" fontFamily="sans-serif" fillOpacity="0.4">Google</text>
                        <rect x="106" y="145" width="68" height="68" rx="12" fill="white" fillOpacity="0.04" stroke="white" strokeOpacity="0.08" strokeWidth="1" />
                        <text x="140" y="175" textAnchor="middle" fill="white" fontSize="19" fontWeight="700" fontFamily="sans-serif" fillOpacity="0.7">45%</text>
                        <text x="140" y="193" textAnchor="middle" fill="white" fontSize="8" fontFamily="sans-serif" fillOpacity="0.4">Konversion</text>
                        <rect x="187" y="145" width="68" height="68" rx="12" fill="white" fillOpacity="0.04" stroke="white" strokeOpacity="0.08" strokeWidth="1" />
                        <text x="221" y="175" textAnchor="middle" fill="white" fontSize="19" fontWeight="700" fontFamily="sans-serif" fillOpacity="0.7">20+</text>
                        <text x="221" y="193" textAnchor="middle" fill="white" fontSize="8" fontFamily="sans-serif" fillOpacity="0.4">Kunden</text>
                        <text x="140" y="250" textAnchor="middle" fill="white" fontSize="10" fontFamily="sans-serif" fillOpacity="0.35">Messbare Ergebnisse seit 2010</text>
                      </svg>
                    </div>
                  </div>

                  <div className="relative z-10 mb-4 flex items-center justify-center overflow-hidden rounded-2xl bg-primary px-6 py-8 sm:mb-8 lg:mb-4 xl:mb-8">
                    <div className="text-center">
                      <span className="block text-5xl font-extrabold text-white">15+</span>
                      <span className="block text-base font-semibold text-white mt-1">Jahre Erfahrung</span>
                      <span className="block text-sm font-medium text-white/70 mt-1">Performance · Coding · UI/UX</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

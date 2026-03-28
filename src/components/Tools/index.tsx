const Tools = () => {
  const tools = [
    { name: "Google Search Console", icon: "https://cdn.simpleicons.org/google/4285F4", color: "bg-blue-50 dark:bg-blue-900/20" },
    { name: "Bing Webmaster", icon: "🔎", color: "bg-blue-50 dark:bg-blue-900/20" },
    { name: "Google Analytics", icon: "https://cdn.simpleicons.org/googleanalytics/EA4335", color: "bg-yellow-50 dark:bg-yellow-900/20" },
    { name: "Google Merchants", icon: "🏬", color: "bg-red-50 dark:bg-red-900/20" },
    { name: "Firebase", icon: "https://cdn.simpleicons.org/firebase/FFCA28", color: "bg-orange-50 dark:bg-orange-900/20" },
    { name: "GitHub", icon: "https://cdn.simpleicons.org/github/181717", color: "bg-gray-50 dark:bg-gray-900/20" },
    { name: "Shopify", icon: "https://cdn.simpleicons.org/shopify/96BF48", color: "bg-green-50 dark:bg-green-900/20" },
    { name: "Vercel", icon: "https://cdn.simpleicons.org/vercel/000000", color: "bg-black/5 dark:bg-white/5" },
    { name: "Supabase", icon: "https://cdn.simpleicons.org/supabase/3ECF8E", color: "bg-emerald-50 dark:bg-emerald-900/20" },
    { name: "Stripe", icon: "https://cdn.simpleicons.org/stripe/635BFF", color: "bg-purple-50 dark:bg-purple-900/20" },
    { name: "Groq", icon: "⚙️", color: "bg-cyan-50 dark:bg-cyan-900/20" },
    { name: "HuggingFace", icon: "https://cdn.simpleicons.org/huggingface/FFC107", color: "bg-yellow-50 dark:bg-yellow-900/20" },
  ];

  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      <div className="absolute left-0 top-0 -z-[1] h-full w-full dark:bg-dark"></div>
      <div className="absolute left-0 top-0 -z-[1] h-1/2 w-full bg-white dark:bg-transparent lg:h-[45%]"></div>
      
      <div className="container px-4">
        <div className="text-center mb-12">
          <p className="text-base font-medium text-primary mb-3">
            TOOLS & INTEGRATIONEN
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-dark dark:text-white">
            Mit den besten Tools arbeiten
          </h2>
          <p className="mt-4 text-lg text-body-color dark:text-dark-6 max-w-2xl mx-auto">
            Wir setzen auf bewährte Technologien und Plattformen, um dir die beste Lösung zu bieten.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {tools.map((tool, i) => (
            <div
              key={i}
              className={`${tool.color} rounded-lg border border-gray-200 dark:border-dark-3 p-6 text-center transition hover:scale-105 hover:shadow-lg`}
            >
              <div className="mb-3 h-12 w-12 mx-auto">
                {tool.icon.startsWith('http') || tool.icon.startsWith('/') ? (
                  <img src={tool.icon} alt={`${tool.name} logo`} className="h-full w-full object-contain" />
                ) : (
                  <span className="text-5xl flex items-center justify-center h-full w-full">{tool.icon}</span>
                )}
              </div>
              <p className="font-semibold text-dark dark:text-white">{tool.name}</p>
            </div>
          ))}
        </div>

        <p className="text-center mt-12 text-body-color dark:text-dark-6 max-w-2xl mx-auto">
          Diese und weitere Tools ermöglichen es uns, maßgeschneiderte, performante und sichere Lösungen zu entwickeln.
        </p>
      </div>
    </section>
  );
};

export default Tools;

const Tools = () => {
  const tools = [
    { name: "Google Search Console", icon: "🔍", color: "bg-blue-50 dark:bg-blue-900/20" },
    { name: "GitHub", icon: "🐙", color: "bg-gray-50 dark:bg-gray-900/20" },
    { name: "Shopify", icon: "🛍️", color: "bg-green-50 dark:bg-green-900/20" },
    { name: "Vercel", icon: "⚡", color: "bg-black/5 dark:bg-white/5" },
    { name: "Supabase", icon: "🗄️", color: "bg-emerald-50 dark:bg-emerald-900/20" },
    { name: "Stripe", icon: "💳", color: "bg-purple-50 dark:bg-purple-900/20" },
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {tools.map((tool, i) => (
            <div
              key={i}
              className={`${tool.color} rounded-lg border border-gray-200 dark:border-dark-3 p-6 text-center transition hover:scale-105 hover:shadow-lg`}
            >
              <div className="text-5xl mb-3">{tool.icon}</div>
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

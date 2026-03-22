"use client";

import React from "react";

interface BlogGraphicProps {
  slug?: string;
  size?: "small" | "large";
  className?: string;
}

// Blog slug to graphic configuration
const blogGraphics: Record<
  string,
  { icon: string; bgColor: string; label: string }
> = {
  "blog-example-with-mdx-file": {
    icon: "📝",
    bgColor: "from-blue-500 to-blue-600",
    label: "Blog Writing",
  },
  "bootstrap-templates": {
    icon: "🎨",
    bgColor: "from-purple-500 to-purple-600",
    label: "Design Templates",
  },
  "contact-form": {
    icon: "📧",
    bgColor: "from-green-500 to-green-600",
    label: "Forms",
  },
  "conversion-landingpage-guide": {
    icon: "🎯",
    bgColor: "from-red-500 to-red-600",
    label: "Conversions",
  },
  "ki-datenanalyse-2026": {
    icon: "🤖",
    bgColor: "from-indigo-500 to-indigo-600",
    label: "KI & Data",
  },
  "lokale-webshops-erfolgreich": {
    icon: "🛒",
    bgColor: "from-orange-500 to-orange-600",
    label: "E-Commerce",
  },
  "saas-automation-nutzen": {
    icon: "⚙️",
    bgColor: "from-cyan-500 to-cyan-600",
    label: "Automation",
  },
  "seo-strategie-2026": {
    icon: "📊",
    bgColor: "from-pink-500 to-pink-600",
    label: "SEO",
  },
  "shopify-erfolg-maximieren": {
    icon: "💰",
    bgColor: "from-emerald-500 to-emerald-600",
    label: "Shopify",
  },
  "unternehmenswebseite-aufbau": {
    icon: "🏢",
    bgColor: "from-teal-500 to-teal-600",
    label: "Web Design",
  },
  "google-search-console-gold": {
    icon: "📈",
    bgColor: "from-blue-600 to-blue-800",
    label: "Google Search Console",
  },
  "semrush-seo-tool": {
    icon: "🔍",
    bgColor: "from-violet-600 to-violet-800",
    label: "Semrush",
  },
  "ahrefs-backlinks-seo": {
    icon: "🔗",
    bgColor: "from-amber-600 to-amber-800",
    label: "Ahrefs",
  },
  "position-1-keywords": {
    icon: "🥇",
    bgColor: "from-yellow-600 to-yellow-800",
    label: "Position 1",
  },
  "chatgpt-perplexity-grok": {
    icon: "💬",
    bgColor: "from-green-600 to-green-800",
    label: "KI Tools",
  },
  "ki-bots-chatbots": {
    icon: "🤖",
    bgColor: "from-purple-600 to-purple-800",
    label: "Chatbots",
  },
  "saas-business-model": {
    icon: "💼",
    bgColor: "from-blue-700 to-blue-900",
    label: "SaaS Business",
  },
  "seo-ai-geo-targeting": {
    icon: "🗺️",
    bgColor: "from-red-600 to-red-800",
    label: "Geo-Targeting",
  },
  "shopify-dropshipping-2026": {
    icon: "📦",
    bgColor: "from-green-700 to-green-900",
    label: "Dropshipping",
  },
  "private-label-business": {
    icon: "🏷️",
    bgColor: "from-pink-600 to-pink-800",
    label: "Private Label",
  },
  "lokale-webseiten-handwerker": {
    icon: "🔧",
    bgColor: "from-orange-600 to-orange-800",
    label: "Lokale Webseiten",
  },
  "saas-losung-entwickeln": {
    icon: "🚀",
    bgColor: "from-sky-600 to-sky-800",
    label: "SaaS Entwicklung",
  },
  "shopify-website-erstellen": {
    icon: "🛍️",
    bgColor: "from-lime-600 to-lime-800",
    label: "Shopify Website",
  },
  "shopify-agb-richtlinien": {
    icon: "⚖️",
    bgColor: "from-slate-600 to-slate-800",
    label: "Shopify AGB",
  },
  "rechtliche-fallstricke-dialogmarketing": {
    icon: "📬",
    bgColor: "from-rose-600 to-rose-800",
    label: "Dialogmarketing Recht",
  },
  "dsgvo-onlineshop": {
    icon: "🔒",
    bgColor: "from-indigo-600 to-indigo-800",
    label: "DSGVO",
  },
  "onlineshop-gesetzliche-vorschriften": {
    icon: "📋",
    bgColor: "from-teal-600 to-teal-800",
    label: "Gesetzliche Vorschriften",
  },
};

const BlogGraphic: React.FC<BlogGraphicProps> = ({
  slug = "blog-example-with-mdx-file",
  size = "large",
  className = "",
}: BlogGraphicProps) => {
  const config = blogGraphics[slug] || {
    icon: "📰",
    bgColor: "from-slate-500 to-slate-600",
    label: "Article",
  };

  if (size === "small") {
    return (
      <div
        className={`flex h-20 w-20 items-center justify-center rounded-lg bg-gradient-to-br ${config.bgColor} text-2xl font-bold text-white shadow-md ${className}`}
      >
        {config.icon}
      </div>
    );
  }

  // Large size for blog grid
  return (
    <div
      className={`flex h-64 w-full items-center justify-center rounded-lg bg-gradient-to-br ${config.bgColor} text-6xl font-bold text-white shadow-lg ${className}`}
    >
      {config.icon}
    </div>
  );
};

export default BlogGraphic;

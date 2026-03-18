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

import About from "@/components/About";
import HomeBlogSection from "@/components/Blog/HomeBlogSection";
import CallToAction from "@/components/CallToAction";
import Clients from "@/components/Clients";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Faq from "@/components/Faq";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Process from "@/components/Process";
import SaasExplained from "@/components/SaasExplained";
import Team from "@/components/Team";
import Tools from "@/components/Tools";
import { getAllPosts } from "@/utils/markdown";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Classy Marketing - SaaS & Performance-Webseiten für mehr Aufträge",
  description: "Wir konzipieren und entwickeln maßgeschneiderte SaaS-Lösungen, Landingpages und Online-Shops – spezialisiert auf Shopify, lokale OnPage-Systeme und KI-Automation. 100% fokussiert auf höhere Lead- und Umsatzraten.",
  keywords: ["SaaS Development", "Landingpage", "Webseiten", "Shopify", "SEO", "Conversion Rate Optimization", "KI Automation"],
};

export default function Home() {
  const posts = getAllPosts(["title", "date", "excerpt", "coverImage", "slug"]);

  return (
    <main>
      <ScrollUp />
      {/* Hero Section - Attention & Curiosity */}
      <Hero />
      
      {/* Value Proposition - Why Choose Us */}
      <Features />
      
      {/* SaaS & Automation - The Tech Behind Our Services */}
      <SaasExplained />
      
      {/* Tools & Integrations - Build Trust */}
      <Tools />
      
      {/* How We Work - Transparency & Process */}
      <Process />
      
      {/* FAQ - Remove Objections */}
      <Faq />
      
      {/* Final CTA - Convert */}
      <Contact />
    </main>
  );
}

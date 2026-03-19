import About from "@/components/About";
import HomeBlogSection from "@/components/Blog/HomeBlogSection";
import CallToAction from "@/components/CallToAction";
import Clients from "@/components/Clients";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Faq from "@/components/Faq";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Onboarding from "@/components/Onboarding";
import Process from "@/components/Process";
import SaasExplained from "@/components/SaasExplained";
import Tools from "@/components/Tools";
import { getAllPosts } from "@/utils/markdown";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shopify Websites, lokale Webseiten & SaaS Lösungen | Classy Marketing",
  description: "Shopify Websites, lokale Webseiten und SaaS Lösungen für mehr Aufträge & Umsatz. Spezialisiert auf E-Commerce Optimierung, SEO, Conversion-Optimierung und KI-Automation. Agenturen & Dienstleister – kostenloses Erstgespräch.",
  keywords: ["Shopify Website", "Shopify SEO", "lokale Webseiten", "E-Commerce Webseite", "SaaS Lösung", "Landingpage erstellen", "Web Design Agentur", "Conversion Optimierung", "Online Shop Optimization"],
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
      
      {/* Onboarding Requirements - Set Expectations */}
      <Onboarding />
      
      {/* Final CTA - Convert */}
      <Contact />
    </main>
  );
}

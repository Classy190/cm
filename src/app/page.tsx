import About from "@/components/About";
import AccessTools from "@/components/AccessTools";
import HomeBlogSection from "@/components/Blog/HomeBlogSection";
import CallToAction from "@/components/CallToAction";
import Clients from "@/components/Clients";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Faq from "@/components/Faq";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Innovation from "@/components/Innovation";
import InvestmentRanges from "@/components/InvestmentRanges";
import Pricing from "@/components/Pricing";
import Process from "@/components/Process";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import { getAllPosts } from "@/utils/markdown";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Classy Marketing - Performance-Webseiten für mehr Aufträge",
  description: "Wir konzipieren und entwickeln maßgeschneiderte Landingpages, Onepager und Online-Shops – 100% fokussiert auf höhere Lead- und Umsatzraten für Ihr Business.",
};

export default function Home() {
  const posts = getAllPosts(["title", "date", "excerpt", "coverImage", "slug"]);

  return (
    <main>
      <ScrollUp />
      <Hero />
      <Features />
      <Process />
      <Pricing />
      <Innovation />
      <AccessTools />
      <InvestmentRanges />
      <Faq />
      <Contact />
    </main>
  );
}

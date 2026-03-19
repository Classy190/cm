import About from "@/components/About";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Über Classy Marketing – Experience & Expertise",
  description: "Classy Marketing ist spezialisiert auf Performance-Webseiten und SaaS-Lösungen. Erfahren Sie mehr über unser Team und unsere Webentwicklung & Automation Services.",
  keywords: ["Über uns", "Team", "Web-Agentur", "Performance", "Shopify Spezialisten"],
};

const AboutPage = () => {
  return (
    <main>
      <Breadcrumb pageName="About Us Page" />
      <About />
    </main>
  );
};

export default AboutPage;

import About from "@/components/About";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Team from "@/components/Team";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Über uns | Classy Marketing – Performance-Webseiten",
  description: "Classy Marketing – Ihre spezialisierte Performance-Agentur für Shopify Online-Shops und lokale OnPage-Systeme. Lernen Sie unser Team kennen.",
};

const AboutPage = () => {
  return (
    <main>
      <Breadcrumb pageName="About Us Page" />
      <About />
      <Team />
    </main>
  );
};

export default AboutPage;

import Breadcrumb from "@/components/Common/Breadcrumb";
import Faq from "@/components/Faq";
import Pricing from "@/components/Pricing";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Preise | Classy Marketing – SaaS & Performance-Webseiten",
  description: "Transparente Preisgestaltung für Landingpages, Shopify-Shops und SaaS-Lösungen. Flexible Pakete mit maximaler ROI-Fokussierung. Jetzt anfragen!",
  keywords: ["Preise", "Pakete", "Landingpage Kosten", "Shopify Shop Preis", "Web Design Preise"],
};

const PricingPage = () => {
  return (
    <>
      <Breadcrumb pageName="Pricing Page" />
      <Pricing />
      <Faq />
    </>
  );
};

export default PricingPage;

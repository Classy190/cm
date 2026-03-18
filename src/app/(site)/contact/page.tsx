import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakt | Classy Marketing – Performance-Webseiten & SaaS",
  description: "Kontaktieren Sie Classy Marketing für Ihre Web-Projekte. Wir beraten Sie gerne zu Landingpages, Shopify-Shops und SaaS-Lösungen. Jetzt Anfrage stellen!",
  keywords: ["Kontakt", "Anfrage", "Web-Agentur", "Support", "Beratung"],
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb pageName="Contact Page" />

      <Contact />
    </>
  );
};

export default ContactPage;

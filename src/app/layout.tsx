import CookieBanner from "@/components/CookieBanner";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { Metadata } from "next";
import "../styles/index.css";
import "../styles/prism-vsc-dark-plus.css";
import Providers from "./providers";

export const metadata: Metadata = {
  title: {
    default: "Classy Marketing – Performance-Webseiten & SaaS",
    template: "%s | Classy Marketing",
  },
  description: "Shopify Websites, lokale Webseiten und SaaS-Lösungen für mehr Aufträge & Umsatz. Kostenloses Erstgespräch.",
  metadataBase: new URL("https://classymarketing.de"),
  openGraph: {
    siteName: "Classy Marketing",
    locale: "de_DE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning className="!scroll-smooth" lang="de">
      <head>
        <meta charSet="utf-8" />
        <script dangerouslySetInnerHTML={{ __html: `
/*
 * ██████╗██╗      █████╗ ███████╗███████╗██╗   ██╗
 * ██╔════╝██║     ██╔══██╗██╔════╝██╔════╝╚██╗ ██╔╝
 *██║     ██║     ███████║███████╗███████╗ ╚████╔╝
 * ██║     ██║     ██╔══██║╚════██║╚════██║  ╚██╔╝
 * ╚██████╗███████╗██║  ██║███████║███████║   ██║
 *  ╚═════╝╚══════╝╚═╝  ╚═╝╚══════╝╚══════╝   ╚═╝
 *
 *  ███╗   ███╗ █████╗ ██████╗ ██╗  ██╗███████╗████████╗██╗███╗   ██╗ ██████╗
 *  ████╗ ████║██╔══██╗██╔══██╗██║ ██╔╝██╔════╝╚══██╔══╝██║████╗  ██║██╔════╝
 *  ██╔████╔██║███████║██████╔╝█████╔╝ █████╗     ██║   ██║██╔██╗ ██║██║  ███╗
 *  ██║╚██╔╝██║██╔══██║██╔══██╗██╔═██╗ ██╔══╝     ██║   ██║██║╚██╗██║██║   ██║
 *  ██║ ╚═╝ ██║██║  ██║██║  ██║██║  ██╗███████╗   ██║   ██║██║ ╚████║╚██████╔╝
 *  ╚═╝     ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝   ╚═╝   ╚═╝╚═╝  ╚═══╝ ╚═════╝
 *
 *  classymarketing.de
 *  made with <3 by Ozgur Atik - 2026
 */
` }} />
      </head>
      <body>
        <Providers>
          <div className="isolate">
            <Header />

            {children}

            <Footer />
            <ScrollToTop />
            <CookieBanner />
          </div>
        </Providers>
      </body>
    </html>
  );
}

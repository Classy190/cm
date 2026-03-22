"use client";

import { useEffect, useState } from "react";

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    // Check if user has already given consent
    const consentGiven = localStorage.getItem("cookieConsent");
    if (!consentGiven) {
      setIsVisible(true);
      // Block scrolling on body
      document.body.style.overflow = "hidden";
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setIsVisible(false);
    document.body.style.overflow = "auto";
  };

  const handleReject = () => {
    localStorage.setItem("cookieConsent", "rejected");
    setIsVisible(false);
    document.body.style.overflow = "auto";
  };

  if (!isClient || !isVisible) return null;

  return (
    <>
      {/* Overlay backdrop */}
      <div className="fixed inset-0 z-[999] bg-black/50 backdrop-blur-sm"></div>
      
      {/* Cookie Banner */}
      <div className="fixed left-1/2 top-1/2 z-[1000] w-full max-w-2xl -translate-x-1/2 -translate-y-1/2 transform rounded-2xl bg-white p-6 shadow-2xl dark:bg-dark">
        <div>
          <h3 className="mb-4 text-xl font-bold text-dark dark:text-white">
            🍪 Cookie-Hinweis
          </h3>
          <p className="mb-6 text-base text-body-color dark:text-dark-6">
            Diese Website verwendet ausschließlich technisch notwendige Cookies und lokale Speicherung, die für den Betrieb der Website erforderlich sind. Es werden <strong>keine Analyse- oder Tracking-Cookies</strong> eingesetzt.
          </p>
          <p className="mb-6 text-sm text-body-color dark:text-dark-6">
            Weitere Informationen finden Sie in unserer{" "}
            <a
              href="/datenschutz"
              className="text-primary hover:underline"
            >
              Datenschutzerklärung
            </a>
            .
          </p>
          
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-end sm:gap-4">
            <button
              onClick={handleReject}
              className="rounded-lg border-2 border-gray-300 px-6 py-3 font-semibold text-dark transition hover:bg-gray-100 dark:border-dark-3 dark:text-white dark:hover:bg-dark-2"
            >
              Ablehnen
            </button>
            <button
              onClick={handleAccept}
              className="rounded-lg bg-primary px-6 py-3 font-semibold text-white transition hover:bg-primary/90"
            >
              Akzeptieren
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CookieBanner;
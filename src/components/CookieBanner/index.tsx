"use client";

import { useEffect, useState } from "react";

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already given consent
    const consentGiven = localStorage.getItem("cookieConsent");
    if (!consentGiven) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setIsVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem("cookieConsent", "rejected");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-dark p-3 sm:p-6 dark:bg-dark-2">
      <div className="container">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between md:gap-6">
          <div className="flex-1">
            <p className="text-xs sm:text-sm text-gray-200">
              Wir verwenden Cookies, um Ihre Erfahrung zu verbessern und unsere Website zu optimieren. 
              <a 
                href="/datenschutz" 
                className="ml-1 underline hover:text-white"
              >
                Mehr erfahren
              </a>
            </p>
          </div>
          <div className="flex flex-shrink-0 gap-2 sm:gap-3">
            <button
              onClick={handleReject}
              className="rounded border border-gray-500 px-3 py-2 text-xs sm:px-4 sm:py-2 sm:text-sm font-medium text-gray-200 hover:bg-gray-800"
            >
              Ablehnen
            </button>
            <button
              onClick={handleAccept}
              className="rounded bg-primary px-3 py-2 text-xs sm:px-4 sm:py-2 sm:text-sm font-medium text-white hover:bg-opacity-90"
            >
              Akzeptieren
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
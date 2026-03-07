import axios from "axios";
import React from "react";
import OfferList from "./OfferList";
import { Price } from "@/types/price";

const PricingBox = ({ product }: { product: Price }) => {
  // Handle inquiry instead of direct subscription
  const handleInquiry = () => {
    // Scroll to contact section or open inquiry modal
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full px-4 md:w-1/2 lg:w-1/3">
      <div
        className="relative z-10 mb-10 overflow-hidden rounded-xl bg-white px-8 py-10 shadow-[0px_0px_40px_0px_rgba(0,0,0,0.08)] dark:bg-dark-2 sm:p-12 lg:px-6 lg:py-10 xl:p-14 h-full flex flex-col"
        data-wow-delay=".1s"
      >
        {product.nickname === "PREMIUM" && (
          <p className="absolute right-[-50px] top-[60px] inline-block -rotate-90 rounded-bl-md rounded-tl-md bg-primary px-5 py-2 text-base font-medium text-white">
            Empfohlen
          </p>
        )}
        <span className="mb-5 block text-xl font-medium text-dark dark:text-white">
          {product.nickname}
        </span>
        <h2 className="mb-11 text-4xl font-semibold text-dark dark:text-white xl:text-[42px] xl:leading-[1.21]">
          <span className="text-xl font-medium">€ </span>
          <span className="-ml-1 -tracking-[2px]">
            {(product.unit_amount / 100).toLocaleString("de-DE", {
              currency: "EUR",
            })}
          </span>
          <span className="text-base font-normal text-body-color dark:text-dark-6">
            {" "}
            Netto / Monat
          </span>
        </h2>

        <div className="mb-[50px] flex-grow">
          <h3 className="mb-5 text-lg font-medium text-dark dark:text-white">
            Leistungen
          </h3>
          <ul className="mb-10 space-y-3">
            {product?.offers.map((offer, i) => (
              <li key={i} className="flex items-start">
                <span className="mr-3 mt-1 flex h-2 w-2 items-center justify-center rounded-full bg-primary">
                  <span className="h-1 w-1 rounded-full bg-white"></span>
                </span>
                <span className="text-base text-body-color dark:text-dark-6">{offer}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full mt-auto">
          <button
            onClick={handleInquiry}
            className="inline-block w-full rounded-md bg-primary px-7 py-3 text-center text-base font-medium text-white transition duration-300 hover:bg-primary/90 cursor-pointer"
          >
            Jetzt unverbindlich anfragen
          </button>
        </div>
      </div>
    </div>
  );
};

export default PricingBox;

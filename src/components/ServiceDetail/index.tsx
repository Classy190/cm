"use client";

import Link from "next/link";
import SectionTitle from "../Common/SectionTitle";

interface ServiceDetailProps {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  benefits: string[];
  useCases: string[];
  pricing: string;
  features: string[];
  blogLink?: string;
}

const ServiceDetail = ({
  id,
  title,
  subtitle,
  description,
  benefits,
  useCases,
  pricing,
  features,
  blogLink,
}: ServiceDetailProps) => {
  return (
    <>
      <section className="relative overflow-hidden bg-primary pt-[120px] md:pt-[130px] lg:pt-[160px]">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-4 inline-block rounded-full bg-white/20 px-4 py-2 text-sm font-medium text-white">
              {subtitle}
            </span>
            <h1 className="mb-6 text-4xl font-bold text-white lg:text-5xl">
              {title}
            </h1>
            <p className="text-lg text-white/90">{description}</p>
          </div>
        </div>
      </section>

      <section className="py-20 dark:bg-dark lg:py-[120px]">
        <div className="container">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            {/* Benefits */}
            <div>
              <h2 className="mb-8 text-3xl font-bold text-dark dark:text-white">
                Vorteile
              </h2>
              <ul className="space-y-4">
                {benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start">
                    <span className="mr-4 mt-1 inline-block h-2 w-2 rounded-full bg-primary"></span>
                    <span className="text-body-color dark:text-dark-6">
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Features */}
            <div>
              <h2 className="mb-8 text-3xl font-bold text-dark dark:text-white">
                Features
              </h2>
              <ul className="space-y-4">
                {features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <span className="mr-4 mt-1 inline-block h-2 w-2 rounded-full bg-primary"></span>
                    <span className="text-body-color dark:text-dark-6">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="bg-gray-50 py-20 dark:bg-dark-2 lg:py-[120px]">
        <div className="container">
          <SectionTitle
            subtitle="Anwendungsfälle"
            title="Perfekt für..."
            paragraph=""
            center
          />
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {useCases.map((useCase, i) => (
              <div
                key={i}
                className="rounded-lg bg-white p-6 shadow-md dark:bg-dark-3"
              >
                <p className="text-body-color dark:text-dark-6">{useCase}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Info */}
      <section className="py-20 dark:bg-dark lg:py-[120px]">
        <div className="container">
          <div className="mx-auto max-w-2xl rounded-lg bg-blue-50 p-8 dark:bg-dark-3">
            <h2 className="mb-4 text-2xl font-bold text-dark dark:text-white">
              Investitionsrahmen
            </h2>
            <p className="mb-6 text-base text-body-color dark:text-dark-6">
              {pricing}
            </p>
            <Link
              href="/#contact"
              className="inline-block rounded-md bg-primary px-7 py-3 text-center font-medium text-white transition duration-300 hover:bg-opacity-90"
            >
              Jetzt Projekt anfragen
            </Link>
          </div>
        </div>
      </section>

      {/* Blog Link */}
      {blogLink && (
        <section className="border-t border-gray-200 py-12 dark:border-dark-3">
          <div className="container">
            <Link
              href={blogLink}
              className="inline-flex items-center text-primary hover:underline"
            >
              📖 Mehr Details im Blog-Artikel →
            </Link>
          </div>
        </section>
      )}
    </>
  );
};

export default ServiceDetail;
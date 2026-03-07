"use client";

import Link from "next/link";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function AdminHome() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Lädt...</p>
      </div>
    );
  }

  if (status === "unauthenticated") {
    redirect("/signin");
  }

  return (
    <>
      <section className="relative overflow-hidden bg-primary pt-[100px] md:pt-[130px] lg:pt-[160px] pb-[60px] md:pb-[100px]">
        <div className="container">
          <div className="mx-auto max-w-[680px]">
            <h1 className="mb-6 text-3xl font-bold text-white sm:text-4xl">
              Admin Dashboard
            </h1>
            <p className="text-white/70">Willkommen, {session?.user?.name || session?.user?.email}!</p>
          </div>
        </div>
      </section>

      <section className="relative py-16 md:py-[100px]">
        <div className="container">
          <div className="mx-auto max-w-[1000px]">
            <h2 className="mb-10 text-2xl font-bold text-dark dark:text-white">
              Verwaltungsoptionen
            </h2>

            <div className="grid gap-8 md:grid-cols-2">
              <Link
                href="/admin/blog"
                className="group rounded-lg border border-gray-3 bg-white p-6 shadow-md hover:shadow-lg hover:border-primary transition dark:border-dark-3 dark:bg-dark-2"
              >
                <div className="mb-4 inline-block rounded-lg bg-primary/10 p-3">
                  <svg
                    className="h-6 w-6 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6.253v13m0-13C6.5 6.253 2 10.998 2 17s4.5 10.747 10 10.747m0-13c5.5 0 10 4.745 10 10.747M12 6.253v13"
                    />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-bold text-dark group-hover:text-primary transition dark:text-white">
                  Blog-Verwaltung
                </h3>
                <p className="text-body-color dark:text-dark-6">
                  Erstellen, bearbeiten und veröffentlichen Sie Blogbeiträge mit benutzerfreundlichem Editor.
                </p>
              </Link>

              <div className="rounded-lg border border-gray-3 bg-gray-1 p-6 opacity-50 dark:border-dark-3 dark:bg-dark-2">
                <div className="mb-4 inline-block rounded-lg bg-gray-300/10 p-3">
                  <svg
                    className="h-6 w-6 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-bold text-dark dark:text-white">
                  Pricing Management
                </h3>
                <p className="text-body-color dark:text-dark-6">
                  Demnächst verfügbar...
                </p>
              </div>

              <div className="rounded-lg border border-gray-3 bg-gray-1 p-6 opacity-50 dark:border-dark-3 dark:bg-dark-2">
                <div className="mb-4 inline-block rounded-lg bg-gray-300/10 p-3">
                  <svg
                    className="h-6 w-6 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                    />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-bold text-dark dark:text-white">
                  Einstellungen
                </h3>
                <p className="text-body-color dark:text-dark-6">
                  Demnächst verfügbar...
                </p>
              </div>

              <div className="rounded-lg border border-gray-3 bg-gray-1 p-6 opacity-50 dark:border-dark-3 dark:bg-dark-2">
                <div className="mb-4 inline-block rounded-lg bg-gray-300/10 p-3">
                  <svg
                    className="h-6 w-6 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-bold text-dark dark:text-white">
                  Analytics
                </h3>
                <p className="text-body-color dark:text-dark-6">
                  Demnächst verfügbar...
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

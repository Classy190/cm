"use client";

import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
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
    redirect("/admin/login");
  }

  const dashboardItems = [
    {
      title: "Blog Posts verwalten",
      description: "Erstellen, bearbeiten und löschen Sie Blog-Beiträge",
      icon: "📝",
      href: "/admin/blog",
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Kontaktanfragen",
      description: "Übersicht aller eingegangenen Kontaktanfragen",
      icon: "📧",
      href: "/admin/messages",
      color: "from-green-500 to-green-600"
    },
    {
      title: "Website-Einstellungen",
      description: "Verwalten Sie Website-Einstellungen und SEO",
      icon: "⚙️",
      href: "/admin/settings",
      color: "from-purple-500 to-purple-600"
    },
  ];

  return (
    <>
      <section className="relative overflow-hidden bg-primary pt-[100px] md:pt-[130px] lg:pt-[160px] pb-[60px] md:pb-[100px]">
        <div className="container">
          <div className="flex justify-between items-start gap-4">
            <div className="mx-auto max-w-[680px]">
              <h1 className="mb-6 text-3xl font-bold text-white sm:text-4xl">
                Admin Dashboard
              </h1>
              <p className="text-white/70">Willkommen, {session?.user?.name || session?.user?.email}!</p>
            </div>
            <button
              onClick={() => signOut({ redirect: true, callbackUrl: "/" })}
              className="px-6 py-2 bg-white/20 hover:bg-white/30 text-white rounded-lg font-medium transition mt-6"
            >
              Abmelden
            </button>
          </div>
        </div>
      </section>

      <section className="relative py-16 md:py-[100px]">
        <div className="container">
          <div className="mx-auto max-w-[1200px]">
            <h2 className="mb-12 text-2xl font-bold text-dark dark:text-white">
              Dashboard Übersicht
            </h2>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {/* Blog Management Card */}
              <div className="rounded-xl border border-gray-200 dark:border-dark-3 bg-white dark:bg-dark-2 shadow-lg hover:shadow-xl hover:border-primary transition overflow-hidden group">
                <div className="h-2 bg-gradient-to-r from-blue-500 to-blue-600"></div>
                <div className="p-6">
                  <div className="text-4xl mb-3">📝</div>
                  <h3 className="text-xl font-bold text-dark dark:text-white mb-2">
                    Blog-Verwaltung
                  </h3>
                  <p className="text-sm text-body-color dark:text-dark-6 mb-4">
                    Erstellen Sie neue Blog-Beiträge oder bearbeiten Sie bestehende Inhalte.
                  </p>
                  <Link
                    href="/admin/blog"
                    className="inline-block px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium transition"
                  >
                    Verwalten →
                  </Link>
                </div>
              </div>

              {/* Contact Messages Card */}
              <div className="rounded-xl border border-gray-200 dark:border-dark-3 bg-white dark:bg-dark-2 shadow-lg hover:shadow-xl hover:border-primary transition overflow-hidden group">
                <div className="h-2 bg-gradient-to-r from-green-500 to-green-600"></div>
                <div className="p-6">
                  <div className="text-4xl mb-3">📧</div>
                  <h3 className="text-xl font-bold text-dark dark:text-white mb-2">
                    Kontaktanfragen
                  </h3>
                  <p className="text-sm text-body-color dark:text-dark-6 mb-4">
                    Sehen Sie alle Anfragen, die über das Kontaktformular eingegangen sind.
                  </p>
                  <Link
                    href="/admin/messages"
                    className="inline-block px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg font-medium transition"
                  >
                    Anschauen →
                  </Link>
                </div>
              </div>

              {/* Settings Card */}
              <div className="rounded-xl border border-gray-200 dark:border-dark-3 bg-white dark:bg-dark-2 shadow-lg hover:shadow-xl hover:border-primary transition overflow-hidden group">
                <div className="h-2 bg-gradient-to-r from-purple-500 to-purple-600"></div>
                <div className="p-6">
                  <div className="text-4xl mb-3">⚙️</div>
                  <h3 className="text-xl font-bold text-dark dark:text-white mb-2">
                    Website-Einstellungen
                  </h3>
                  <p className="text-sm text-body-color dark:text-dark-6 mb-4">
                    Passen Sie Website-Einstellungen und SEO-Parameter an.
                  </p>
                  <a
                    href="#"
                    className="inline-block px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white rounded-lg font-medium transition cursor-not-allowed opacity-50"
                  >
                    Bald verfügbar
                  </a>
                </div>
              </div>
            </div>

            {/* Info Section */}
            <div className="mt-12 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-900 p-6">
              <h3 className="text-lg font-bold text-blue-900 dark:text-blue-100 mb-2">
                ℹ️ Admin-Features
              </h3>
              <ul className="grid md:grid-cols-2 gap-3 text-sm text-blue-800 dark:text-blue-300">
                <li>✓ Blog-Beiträge mit MDX-Editor erstellen</li>
                <li>✓ Alle eingehenden Kontaktanfragen einsehen</li>
                <li>✓ Benutzer- und Rollenverwaltung (bald)</li>
                <li>✓ Website-Analyse und Statistiken (bald)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}


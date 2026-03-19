"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface RecentBlog {
  title: string;
  slug: string;
  date: string | null;
  coverImage: string | null;
}

interface Stats {
  blogs: { total: number };
  recentBlogs: RecentBlog[];
  lastUpdated: string;
}

export default function AdminHome() {
  const router = useRouter();
  const [isChecking, setIsChecking] = useState(true);
  const [userEmail, setUserEmail] = useState("");
  const [stats, setStats] = useState<Stats | null>(null);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await fetch("/api/admin/check");
        if (!response.ok) {
          router.push("/admin/login");
          return;
        }
        const data = await response.json();
        setUserEmail(data.email);

        const statsResponse = await fetch("/api/admin/stats");
        if (statsResponse.ok) {
          setStats(await statsResponse.json());
        }
      } catch {
        router.push("/admin/login");
      } finally {
        setIsChecking(false);
      }
    };

    checkAuth();
  }, [router]);

  if (isChecking) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-primary mx-auto mb-3"></div>
          <p className="text-body-color">Laedt...</p>
        </div>
      </div>
    );
  }

  const handleLogout = async () => {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin/login");
  };

  return (
    <>
      <section className="relative overflow-hidden bg-primary pt-[100px] md:pt-[130px] lg:pt-[160px] pb-[60px] md:pb-[80px]">
        <div className="container">
          <div className="flex justify-between items-start gap-4">
            <div>
              <h1 className="mb-3 text-3xl font-bold text-white sm:text-4xl">
                Admin Dashboard
              </h1>
              <p className="text-white/70">Willkommen, {userEmail}</p>
            </div>
            <button
              onClick={handleLogout}
              className="mt-2 px-5 py-2 bg-white/20 hover:bg-white/30 text-white rounded-lg font-medium transition text-sm"
            >
              Abmelden
            </button>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container">
          <div className="max-w-[1200px] mx-auto">

            <div className="mb-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-xl p-5 border border-blue-200 dark:border-blue-800 flex items-center gap-4">
                <div className="text-5xl leading-none select-none">&#128221;</div>
                <div>
                  <div className="text-3xl font-bold text-blue-900 dark:text-blue-100">
                    {stats?.blogs.total ?? "-"}
                  </div>
                  <div className="text-sm text-blue-700 dark:text-blue-300 font-medium">Blog-Artikel</div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-xl p-5 border border-purple-200 dark:border-purple-800 flex items-center gap-4">
                <div className="text-5xl leading-none select-none">&#9881;&#65039;</div>
                <div>
                  <div className="text-3xl font-bold text-purple-900 dark:text-purple-100">1</div>
                  <div className="text-sm text-purple-700 dark:text-purple-300 font-medium">Admin-Account</div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-xl p-5 border border-green-200 dark:border-green-800 flex items-center gap-4">
                <div className="text-5xl leading-none select-none">&#127760;</div>
                <div>
                  <div className="text-3xl font-bold text-green-900 dark:text-green-100">Live</div>
                  <div className="text-sm text-green-700 dark:text-green-300 font-medium">Website-Status</div>
                </div>
              </div>
            </div>

            <h2 className="mb-6 text-xl font-bold text-dark dark:text-white">Schnellzugriff</h2>
            <div className="grid gap-5 md:grid-cols-2 mb-12">
              <Link href="/admin/blog">
                <div className="rounded-xl border border-gray-200 dark:border-dark-3 bg-white dark:bg-dark-2 shadow hover:shadow-lg hover:border-blue-400 transition overflow-hidden">
                  <div className="h-1.5 bg-gradient-to-r from-blue-500 to-blue-600"></div>
                  <div className="p-6 flex gap-4 items-start">
                    <div className="text-4xl shrink-0 leading-none">&#128221;</div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-dark dark:text-white mb-1">Blog-Artikel verwalten</h3>
                      <p className="text-sm text-body-color dark:text-dark-6 mb-3">
                        Alle {stats?.blogs.total ?? ""} Artikel anzeigen, neue erstellen oder bearbeiten
                      </p>
                      <span className="inline-block px-4 py-1.5 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium transition text-sm">
                        Oeffnen &rarr;
                      </span>
                    </div>
                  </div>
                </div>
              </Link>

              <Link href="/admin/settings">
                <div className="rounded-xl border border-gray-200 dark:border-dark-3 bg-white dark:bg-dark-2 shadow hover:shadow-lg hover:border-purple-400 transition overflow-hidden">
                  <div className="h-1.5 bg-gradient-to-r from-purple-500 to-purple-600"></div>
                  <div className="p-6 flex gap-4 items-start">
                    <div className="text-4xl shrink-0 leading-none">&#9881;&#65039;</div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-dark dark:text-white mb-1">Website-Einstellungen</h3>
                      <p className="text-sm text-body-color dark:text-dark-6 mb-3">
                        SEO, Kontaktdaten, Social Media und Funktionen konfigurieren
                      </p>
                      <span className="inline-block px-4 py-1.5 bg-purple-500 hover:bg-purple-600 text-white rounded-lg font-medium transition text-sm">
                        Oeffnen &rarr;
                      </span>
                    </div>
                  </div>
                </div>
              </Link>

              <Link href="/admin/blog/dates">
                <div className="rounded-xl border border-gray-200 dark:border-dark-3 bg-white dark:bg-dark-2 shadow hover:shadow-lg hover:border-orange-400 transition overflow-hidden">
                  <div className="h-1.5 bg-gradient-to-r from-orange-400 to-orange-500"></div>
                  <div className="p-6 flex gap-4 items-start">
                    <div className="text-4xl shrink-0 leading-none">&#128197;</div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-dark dark:text-white mb-1">Datum bearbeiten</h3>
                      <p className="text-sm text-body-color dark:text-dark-6 mb-3">
                        Veroeffentlichungsdatum aller Artikel manuell anpassen
                      </p>
                      <span className="inline-block px-4 py-1.5 bg-orange-400 hover:bg-orange-500 text-white rounded-lg font-medium transition text-sm">
                        Oeffnen &rarr;
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            <div className="bg-white dark:bg-dark-2 rounded-xl border border-gray-200 dark:border-dark-3 overflow-hidden mb-10">
              <div className="px-6 py-4 border-b border-gray-200 dark:border-dark-3 flex justify-between items-center">
                <h3 className="text-lg font-bold text-dark dark:text-white">Neueste Blog-Artikel</h3>
                <Link href="/admin/blog" className="text-sm text-primary hover:underline font-medium">
                  Alle anzeigen &rarr;
                </Link>
              </div>
              <div className="divide-y divide-gray-100 dark:divide-dark-3">
                {stats?.recentBlogs && stats.recentBlogs.length > 0 ? (
                  stats.recentBlogs.map((blog, idx) => (
                    <div key={idx} className="px-6 py-4 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-dark-3 transition">
                      <div className="flex-1 min-w-0 pr-4">
                        <p className="font-medium text-dark dark:text-white truncate">{blog.title}</p>
                        <p className="text-xs text-body-color dark:text-dark-6 mt-0.5">
                          {blog.slug}
                          {blog.date && ` - ${new Date(blog.date).toLocaleDateString("de-DE")}`}
                        </p>
                      </div>
                      <Link
                        href={`/blogs/${blog.slug}`}
                        target="_blank"
                        className="shrink-0 text-xs px-3 py-1 rounded-lg border border-gray-300 dark:border-dark-3 text-gray-700 dark:text-gray-300 hover:border-primary hover:text-primary transition"
                      >
                        Ansehen
                      </Link>
                    </div>
                  ))
                ) : (
                  <div className="px-6 py-8 text-center text-body-color dark:text-dark-6">
                    Keine Artikel gefunden
                  </div>
                )}
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-900 rounded-xl p-6">
              <h3 className="font-bold text-blue-900 dark:text-blue-100 mb-4">Schnell-Links</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <Link
                  href="/admin/blog/create"
                  className="flex items-center gap-2 px-4 py-3 bg-white dark:bg-dark-2 rounded-lg border border-blue-200 dark:border-blue-900 hover:border-primary transition text-sm font-medium text-dark dark:text-white"
                >
                  Neuer Artikel
                </Link>
                <Link
                  href="/blogs"
                  target="_blank"
                  className="flex items-center gap-2 px-4 py-3 bg-white dark:bg-dark-2 rounded-lg border border-blue-200 dark:border-blue-900 hover:border-primary transition text-sm font-medium text-dark dark:text-white"
                >
                  Blog ansehen
                </Link>
                <Link
                  href="/admin/blog/dates"
                  className="flex items-center gap-2 px-4 py-3 bg-white dark:bg-dark-2 rounded-lg border border-blue-200 dark:border-blue-900 hover:border-primary transition text-sm font-medium text-dark dark:text-white"
                >
                  Datum bearbeiten
                </Link>
                <Link
                  href="/admin/settings"
                  className="flex items-center gap-2 px-4 py-3 bg-white dark:bg-dark-2 rounded-lg border border-blue-200 dark:border-blue-900 hover:border-primary transition text-sm font-medium text-dark dark:text-white"
                >
                  Einstellungen
                </Link>
                <Link
                  href="/"
                  target="_blank"
                  className="flex items-center gap-2 px-4 py-3 bg-white dark:bg-dark-2 rounded-lg border border-blue-200 dark:border-blue-900 hover:border-primary transition text-sm font-medium text-dark dark:text-white"
                >
                  Website
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
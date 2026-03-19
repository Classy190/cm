"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface Stats {
  blogs: { total: number; published: number; drafts: number };
  comments: { total: number; approved: number; pending: number };
  contacts: { total: number; unread: number; archived: number };
  users: { total: number; admins: number };
  recentBlogs: Array<{ title: string; updatedAt: string; published: boolean }>;
  recentMessages: Array<{ fullName: string; email: string; createdAt: string }>;
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

        // Fetch stats
        const statsResponse = await fetch("/api/admin/stats");
        if (statsResponse.ok) {
          const statsData = await statsResponse.json();
          setStats(statsData);
        }
      } catch (error) {
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
        <p>Lädt...</p>
      </div>
    );
  }

  const handleLogout = async () => {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin/login");
  }

  const dashboardItems = [
    {
      title: "Blog-Verwaltung",
      description: "Erstellen, bearbeiten und löschen Sie Blog-Beiträge",
      icon: "📝",
      href: "/admin/blog",
      color: "from-blue-500 to-blue-600",
      stat: stats?.blogs.total || 0,
      statLabel: "Beiträge"
    },
    {
      title: "Kontaktanfragen",
      description: "Übersicht aller eingegangenen Kontaktanfragen",
      icon: "📧",
      href: "/admin/messages",
      color: "from-green-500 to-green-600",
      stat: stats?.contacts.unread || 0,
      statLabel: "Ungelesen"
    },
    {
      title: "Website-Einstellungen",
      description: "Verwalten Sie Website-Einstellungen und SEO",
      icon: "⚙️",
      href: "/admin/settings",
      color: "from-purple-500 to-purple-600",
      stat: "✓",
      statLabel: "Verfügbar"
    },
    {
      title: "Benutzer",
      description: "Verwalten Sie Administratoren und Benutzerrechte",
      icon: "👥",
      href: "/admin/users",
      color: "from-orange-500 to-orange-600",
      stat: stats?.users.total || 0,
      statLabel: "Benutzer"
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
              <p className="text-white/70">Willkommen, {userEmail}!</p>
            </div>
            <button
              onClick={handleLogout}
              className="px-6 py-2 bg-white/20 hover:bg-white/30 text-white rounded-lg font-medium transition mt-6"
            >
              Abmelden
            </button>
          </div>
        </div>
      </section>

      <section className="relative py-16 md:py-[100px]">
        <div className="container">
          <div className="mx-auto max-w-[1400px]">
            {/* Stats Overview */}
            {stats && (
              <div className="mb-16">
                <h2 className="mb-8 text-2xl font-bold text-dark dark:text-white">
                  📊 Statistiken Übersicht
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                  {/* Blog Stats */}
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-lg p-4 border border-blue-200 dark:border-blue-800">
                    <div className="text-blue-600 dark:text-blue-400 text-sm font-medium">Blog Beiträge</div>
                    <div className="text-2xl font-bold text-blue-900 dark:text-blue-100 mt-2">{stats.blogs.total}</div>
                    <div className="text-xs text-blue-700 dark:text-blue-300 mt-1">
                      {stats.blogs.published} veröffentlicht, {stats.blogs.drafts} Entwurf
                    </div>
                  </div>

                  {/* Comments Stats */}
                  <div className="bg-gradient-to-br from-amber-50 to-amber-100 dark:from-amber-900/20 dark:to-amber-800/20 rounded-lg p-4 border border-amber-200 dark:border-amber-800">
                    <div className="text-amber-600 dark:text-amber-400 text-sm font-medium">Kommentare</div>
                    <div className="text-2xl font-bold text-amber-900 dark:text-amber-100 mt-2">{stats.comments.total}</div>
                    <div className="text-xs text-amber-700 dark:text-amber-300 mt-1">
                      {stats.comments.approved} genehmigt, {stats.comments.pending} ausstehend
                    </div>
                  </div>

                  {/* Contacts Stats */}
                  <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-lg p-4 border border-green-200 dark:border-green-800">
                    <div className="text-green-600 dark:text-green-400 text-sm font-medium">Kontaktanfragen</div>
                    <div className="text-2xl font-bold text-green-900 dark:text-green-100 mt-2">{stats.contacts.total}</div>
                    <div className="text-xs text-green-700 dark:text-green-300 mt-1">
                      {stats.contacts.unread} ungelesen
                    </div>
                  </div>

                  {/* Users Stats */}
                  <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-lg p-4 border border-purple-200 dark:border-purple-800">
                    <div className="text-purple-600 dark:text-purple-400 text-sm font-medium">Benutzer</div>
                    <div className="text-2xl font-bold text-purple-900 dark:text-purple-100 mt-2">{stats.users.total}</div>
                    <div className="text-xs text-purple-700 dark:text-purple-300 mt-1">
                      {stats.users.admins} Admin
                    </div>
                  </div>

                  {/* Archived Stats */}
                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900/20 dark:to-gray-800/20 rounded-lg p-4 border border-gray-200 dark:border-gray-800">
                    <div className="text-gray-600 dark:text-gray-400 text-sm font-medium">Archiviert</div>
                    <div className="text-2xl font-bold text-gray-900 dark:text-gray-100 mt-2">{stats.contacts.archived}</div>
                    <div className="text-xs text-gray-700 dark:text-gray-300 mt-1">
                      Kontaktanfragen
                    </div>
                  </div>
                </div>
              </div>
            )}

            <h2 className="mb-12 text-2xl font-bold text-dark dark:text-white">
              Dashboard Übersicht
            </h2>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {dashboardItems.map((item, index) => (
                <Link key={index} href={item.href}>
                  <div className="rounded-xl border border-gray-200 dark:border-dark-3 bg-white dark:bg-dark-2 shadow-lg hover:shadow-xl hover:border-primary transition overflow-hidden group h-full">
                    <div className={`h-2 bg-gradient-to-r ${item.color}`}></div>
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-3">
                        <div className="text-4xl">{item.icon}</div>
                        <div className="bg-gray-100 dark:bg-dark-3 rounded-lg px-3 py-1 text-center">
                          <div className="text-xl font-bold text-primary">{item.stat}</div>
                          <div className="text-xs text-gray-600 dark:text-dark-6">{item.statLabel}</div>
                        </div>
                      </div>
                      <h3 className="text-lg font-bold text-dark dark:text-white mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-body-color dark:text-dark-6 mb-4">
                        {item.description}
                      </p>
                      <span className="inline-block px-4 py-2 bg-gray-100 hover:bg-gray-200 dark:bg-dark-3 dark:hover:bg-dark-4 text-gray-800 dark:text-gray-200 rounded-lg font-medium transition text-sm">
                        Verwalten →
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Recent Activity */}
            {stats && (
              <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Recent Blogs */}
                <div className="bg-white dark:bg-dark-2 rounded-lg border border-gray-200 dark:border-dark-3 p-6">
                  <h3 className="text-lg font-bold text-dark dark:text-white mb-4">
                    📚 Letzte Blog-Updates
                  </h3>
                  <div className="space-y-3">
                    {stats.recentBlogs.length > 0 ? (
                      stats.recentBlogs.map((blog, idx) => (
                        <div key={idx} className="flex items-start justify-between pb-3 border-b border-gray-200 dark:border-dark-3 last:border-0">
                          <div>
                            <p className="font-medium text-dark dark:text-white truncate">{blog.title}</p>
                            <p className="text-xs text-body-color dark:text-dark-6 mt-1">
                              {new Date(blog.updatedAt).toLocaleDateString("de-DE")}
                            </p>
                          </div>
                          <span className={`text-xs px-2 py-1 rounded-full whitespace-nowrap ml-2 ${
                            blog.published
                              ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400"
                              : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400"
                          }`}>
                            {blog.published ? "Veröffentlicht" : "Entwurf"}
                          </span>
                        </div>
                      ))
                    ) : (
                      <p className="text-body-color dark:text-dark-6">Noch keine Blog-Beiträge</p>
                    )}
                  </div>
                </div>

                {/* Recent Messages */}
                <div className="bg-white dark:bg-dark-2 rounded-lg border border-gray-200 dark:border-dark-3 p-6">
                  <h3 className="text-lg font-bold text-dark dark:text-white mb-4">
                    💬 Letzte Nachrichten
                  </h3>
                  <div className="space-y-3">
                    {stats.recentMessages.length > 0 ? (
                      stats.recentMessages.map((msg, idx) => (
                        <div key={idx} className="flex items-start justify-between pb-3 border-b border-gray-200 dark:border-dark-3 last:border-0">
                          <div>
                            <p className="font-medium text-dark dark:text-white">{msg.fullName}</p>
                            <p className="text-xs text-body-color dark:text-dark-6 mt-1">
                              {msg.email}
                            </p>
                            <p className="text-xs text-gray-500 dark:text-dark-6 mt-1">
                              {new Date(msg.createdAt).toLocaleDateString("de-DE")}
                            </p>
                          </div>
                        </div>
                      ))
                    ) : (
                      <p className="text-body-color dark:text-dark-6">Noch keine Nachrichten</p>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Info Section */}
            <div className="mt-16 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-900 p-6">
              <h3 className="text-lg font-bold text-blue-900 dark:text-blue-100 mb-3">
                ✨ Admin-Features
              </h3>
              <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 text-sm text-blue-800 dark:text-blue-300">
                <li>✓ Blog-Beiträge mit MDX-Editor erstellen</li>
                <li>✓ Alle eingehenden Kontaktanfragen einsehen</li>
                <li>✓ Website-Einstellungen und SEO konfigurieren</li>
                <li>✓ Echtzeitstatistiken und Übersichten</li>
                <li>✓ Benutzer- und Rollenverwaltung</li>
                <li>✓ Responsive Design für mobile Admin</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}


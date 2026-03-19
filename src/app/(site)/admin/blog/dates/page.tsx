"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface BlogPost {
  slug: string;
  title: string;
  date: string;
}

export default function AdminBlogDates() {
  const router = useRouter();
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState<string | null>(null);
  const [editDates, setEditDates] = useState<Record<string, string>>({});
  const [messages, setMessages] = useState<Record<string, { ok: boolean; text: string }>>({});

  useEffect(() => {
    const init = async () => {
      try {
        const res = await fetch("/api/admin/check");
        if (!res.ok) {
          router.push("/admin/login");
          return;
        }
        await loadPosts();
      } catch {
        router.push("/admin/login");
      } finally {
        setLoading(false);
      }
    };
    init();
  }, [router]);

  const loadPosts = async () => {
    const res = await fetch("/api/admin/stats");
    if (!res.ok) return;
    const data = await res.json();

    // stats only returns 6 recent — load all via blog API
    const blogRes = await fetch("/api/blog");
    if (!blogRes.ok) return;
    const blogs = await blogRes.json();

    const sorted = blogs
      .map((b: any) => ({
        slug: b.id || b.slug,
        title: b.title,
        date: b.createdAt ? b.createdAt.substring(0, 10) : "",
      }))
      .sort((a: BlogPost, b: BlogPost) => (a.date > b.date ? -1 : 1));

    setPosts(sorted);
    const initial: Record<string, string> = {};
    sorted.forEach((p: BlogPost) => {
      initial[p.slug] = p.date;
    });
    setEditDates(initial);
  };

  const handleSave = async (slug: string) => {
    const date = editDates[slug];
    setSaving(slug);
    setMessages((prev) => ({ ...prev, [slug]: { ok: true, text: "" } }));

    try {
      const res = await fetch(`/api/admin/blog/${slug}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ date }),
      });
      const data = await res.json();

      if (res.ok) {
        setMessages((prev) => ({
          ...prev,
          [slug]: { ok: true, text: "Datum gespeichert!" },
        }));
        setPosts((prev) =>
          prev
            .map((p) => (p.slug === slug ? { ...p, date } : p))
            .sort((a, b) => (a.date > b.date ? -1 : 1))
        );
      } else {
        setMessages((prev) => ({
          ...prev,
          [slug]: { ok: false, text: data.error || "Fehler beim Speichern" },
        }));
      }
    } catch {
      setMessages((prev) => ({
        ...prev,
        [slug]: { ok: false, text: "Netzwerkfehler" },
      }));
    } finally {
      setSaving(null);
      setTimeout(() => {
        setMessages((prev) => ({ ...prev, [slug]: { ok: true, text: "" } }));
      }, 3000);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-primary mx-auto mb-3"></div>
          <p className="text-body-color">Laedt...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <section className="relative overflow-hidden bg-primary pt-[100px] md:pt-[130px] lg:pt-[160px] pb-[60px] md:pb-[80px]">
        <div className="container">
          <div className="flex justify-between items-start gap-4">
            <div>
              <h1 className="mb-2 text-3xl font-bold text-white sm:text-4xl">
                Blog-Datum bearbeiten
              </h1>
              <p className="text-white/70">
                Datum aller {posts.length} Artikel anpassen
              </p>
            </div>
            <Link
              href="/admin"
              className="mt-2 px-5 py-2 bg-white/20 hover:bg-white/30 text-white rounded-lg font-medium transition text-sm"
            >
              Zurueck zum Dashboard
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container">
          <div className="max-w-[900px] mx-auto">

            <div className="bg-white dark:bg-dark-2 rounded-xl border border-gray-200 dark:border-dark-3 overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-200 dark:border-dark-3 bg-gray-50 dark:bg-dark-3">
                <p className="text-sm text-body-color dark:text-dark-6">
                  Waehle ein neues Datum und klicke auf Speichern. Das Datum wird direkt in der MDX-Datei gespeichert.
                </p>
              </div>

              <div className="divide-y divide-gray-100 dark:divide-dark-3">
                {posts.map((post) => (
                  <div
                    key={post.slug}
                    className="px-6 py-4 flex flex-col sm:flex-row sm:items-center gap-3"
                  >
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-dark dark:text-white truncate">
                        {post.title}
                      </p>
                      <p className="text-xs text-body-color dark:text-dark-6 mt-0.5">
                        {post.slug}
                      </p>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <input
                        type="date"
                        value={editDates[post.slug] ?? post.date}
                        onChange={(e) =>
                          setEditDates((prev) => ({
                            ...prev,
                            [post.slug]: e.target.value,
                          }))
                        }
                        className="rounded-lg border border-gray-300 dark:border-dark-3 bg-white dark:bg-dark-2 px-3 py-1.5 text-sm text-dark dark:text-white focus:outline-none focus:border-primary"
                      />
                      <button
                        onClick={() => handleSave(post.slug)}
                        disabled={saving === post.slug}
                        className="px-4 py-1.5 bg-primary hover:bg-primary/90 disabled:opacity-50 text-white rounded-lg text-sm font-medium transition whitespace-nowrap"
                      >
                        {saving === post.slug ? "..." : "Speichern"}
                      </button>
                    </div>

                    {messages[post.slug]?.text && (
                      <span
                        className={`text-xs font-medium shrink-0 ${
                          messages[post.slug].ok
                            ? "text-green-600 dark:text-green-400"
                            : "text-red-500"
                        }`}
                      >
                        {messages[post.slug].text}
                      </span>
                    )}
                  </div>
                ))}

                {posts.length === 0 && (
                  <div className="px-6 py-12 text-center text-body-color dark:text-dark-6">
                    Keine Blog-Artikel gefunden
                  </div>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}

"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface Blog {
  id: string;
  title: string;
  excerpt?: string;
  createdAt: string;
  updatedAt: string;
  published: boolean;
}

interface EditForm {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  description: string;
  keywords: string;
}

export default function AdminDashboard() {
  const router = useRouter();
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [isChecking, setIsChecking] = useState(true);
  const [editModal, setEditModal] = useState<{ open: boolean; blog: Blog | null }>({
    open: false,
    blog: null,
  });
  const [editForm, setEditForm] = useState<EditForm>({
    slug: "",
    title: "",
    excerpt: "",
    date: "",
    description: "",
    keywords: "",
  });
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState<{ ok: boolean; text: string }>({ ok: false, text: "" });

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await fetch("/api/admin/check");
        if (!response.ok) {
          router.push("/admin/login");
          return;
        }
        fetchBlogs();
      } catch (error) {
        router.push("/admin/login");
      } finally {
        setIsChecking(false);
      }
    };

    checkAuth();
  }, [router]);

  const fetchBlogs = async () => {
    try {
      const res = await fetch("/api/blog");
      if (res.ok) {
        const data = await res.json();
        setBlogs(data);
      }
    } catch (error) {
      console.error("Failed to fetch blogs:", error);
    } finally {
      setLoading(false);
    }
  };

  const openEditModal = (blog: Blog) => {
    const dateStr = new Date(blog.createdAt).toISOString().substring(0, 10);
    setEditForm({
      slug: blog.id,
      title: blog.title,
      excerpt: blog.excerpt || "",
      date: dateStr,
      description: "",
      keywords: "",
    });
    setEditModal({ open: true, blog });
    setMessage({ ok: false, text: "" });
  };

  const closeEditModal = () => {
    setEditModal({ open: false, blog: null });
    setMessage({ ok: false, text: "" });
  };

  const handleSave = async () => {
    setSaving(true);
    setMessage({ ok: false, text: "" });

    try {
      console.log("Saving blog:", editForm.slug, editForm.date);
      
      const res = await fetch(`/api/admin/blog/${editForm.slug}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          date: editForm.date,
          title: editForm.title,
          excerpt: editForm.excerpt,
          description: editForm.description || undefined,
          keywords: editForm.keywords || undefined,
        }),
      });

      const data = await res.json();
      console.log("Response:", res.status, data);

      if (res.ok) {
        setMessage({ ok: true, text: "Artikel erfolgreich gespeichert!" });
        setTimeout(() => {
          closeEditModal();
          fetchBlogs();
        }, 1500);
      } else {
        setMessage({ ok: false, text: data.error || "Fehler beim Speichern" });
      }
    } catch (error: any) {
      console.error("Save error:", error);
      setMessage({ ok: false, text: error?.message || "Netzwerkfehler" });
    } finally {
      setSaving(false);
    }
  };

  const deleteBlog = async (id: string) => {
    if (!confirm("Sind Sie sicher, dass Sie diesen Blog löschen möchten?")) {
      return;
    }

    try {
      const res = await fetch(`/api/blog/${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        setBlogs(blogs.filter((blog) => blog.id !== id));
      }
    } catch (error) {
      console.error("Failed to delete blog:", error);
    }
  };

  if (isChecking) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Laedt...</p>
      </div>
    );
  }

  return (
    <>
      <section className="relative overflow-hidden bg-primary pt-[100px] md:pt-[130px] lg:pt-[160px] pb-[60px] md:pb-[100px]">
        <div className="container">
          <div className="mx-auto max-w-[680px]">
            <h1 className="mb-6 text-3xl font-bold text-white sm:text-4xl">
              Blog-Verwaltung
            </h1>
            <p className="text-white/70">Admin Dashboard zur Verwaltung Ihrer Blogbeitraege</p>
          </div>
        </div>
      </section>

      <section className="relative py-16 md:py-[100px]">
        <div className="container">
          <div className="mx-auto max-w-[1000px]">
            <div className="mb-8 flex justify-between items-center">
              <h2 className="text-2xl font-bold text-dark dark:text-white">
                Alle Blogbeitraege ({blogs.length})
              </h2>
              <Link
                href="/admin/blog/create"
                className="inline-flex items-center justify-center rounded-md bg-primary px-7 py-3 text-base font-medium text-white hover:bg-primary/90"
              >
                + Neuen Blog erstellen
              </Link>
            </div>

            {loading ? (
              <div className="text-center py-10">
                <p className="text-body-color dark:text-dark-6">Laedt Blogbeitraege...</p>
              </div>
            ) : blogs.length === 0 ? (
              <div className="rounded-lg border border-gray-3 bg-gray-1 p-10 text-center dark:border-dark-3 dark:bg-dark-2">
                <p className="text-body-color dark:text-dark-6 mb-4">
                  Keine Blogbeitraege vorhanden
                </p>
                <Link
                  href="/admin/blog/create"
                  className="inline-flex items-center justify-center rounded-md bg-primary px-7 py-3 text-base font-medium text-white hover:bg-primary/90"
                >
                  Ersten Blog erstellen
                </Link>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-3 dark:border-dark-3">
                      <th className="px-4 py-4 text-left text-sm font-semibold text-dark dark:text-white">
                        Titel
                      </th>
                      <th className="px-4 py-4 text-left text-sm font-semibold text-dark dark:text-white">
                        Status
                      </th>
                      <th className="px-4 py-4 text-left text-sm font-semibold text-dark dark:text-white">
                        Erstellt am
                      </th>
                      <th className="px-4 py-4 text-left text-sm font-semibold text-dark dark:text-white">
                        Aktionen
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {blogs.map((blog) => (
                      <tr
                        key={blog.id}
                        className="border-b border-gray-3 dark:border-dark-3 hover:bg-gray-1 dark:hover:bg-dark-2"
                      >
                        <td className="px-4 py-4 text-sm text-body-color dark:text-dark-6">
                          <strong>{blog.title}</strong>
                        </td>
                        <td className="px-4 py-4 text-sm">
                          <span
                            className={`inline-block px-3 py-1 rounded text-xs font-semibold ${
                              blog.published
                                ? "bg-green-100 text-green-800"
                                : "bg-yellow-100 text-yellow-800"
                            }`}
                          >
                            {blog.published ? "Veroeffentlicht" : "Entwurf"}
                          </span>
                        </td>
                        <td className="px-4 py-4 text-sm text-body-color dark:text-dark-6">
                          {new Date(blog.createdAt).toLocaleDateString("de-DE")}
                        </td>
                        <td className="px-4 py-4 text-sm flex gap-2">
                          <button
                            onClick={() => openEditModal(blog)}
                            className="text-primary hover:text-primary/80 font-medium"
                          >
                            Bearbeiten
                          </button>
                          <button
                            onClick={() => deleteBlog(blog.id)}
                            className="text-red-600 hover:text-red-800 font-medium"
                          >
                            Loeschen
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </section>

      {editModal.open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white dark:bg-dark-2 rounded-lg shadow-lg max-w-md w-full mx-4 p-6">
            <h3 className="text-xl font-bold text-dark dark:text-white mb-4">
              Artikel bearbeiten
            </h3>

            <div className="space-y-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-dark dark:text-white mb-2">
                  Datum
                </label>
                <input
                  type="date"
                  value={editForm.date}
                  onChange={(e) =>
                    setEditForm((prev) => ({ ...prev, date: e.target.value }))
                  }
                  className="w-full rounded-lg border border-gray-300 dark:border-dark-3 bg-white dark:bg-dark-3 px-3 py-2 text-sm text-dark dark:text-white focus:outline-none focus:border-primary"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-dark dark:text-white mb-2">
                  Titel
                </label>
                <input
                  type="text"
                  value={editForm.title}
                  onChange={(e) =>
                    setEditForm((prev) => ({ ...prev, title: e.target.value }))
                  }
                  className="w-full rounded-lg border border-gray-300 dark:border-dark-3 bg-white dark:bg-dark-3 px-3 py-2 text-sm text-dark dark:text-white focus:outline-none focus:border-primary"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-dark dark:text-white mb-2">
                  Kurzbeschreibung
                </label>
                <textarea
                  value={editForm.excerpt}
                  onChange={(e) =>
                    setEditForm((prev) => ({ ...prev, excerpt: e.target.value }))
                  }
                  className="w-full rounded-lg border border-gray-300 dark:border-dark-3 bg-white dark:bg-dark-3 px-3 py-2 text-sm text-dark dark:text-white focus:outline-none focus:border-primary"
                  rows={3}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-dark dark:text-white mb-2">
                  Beschreibung (SEO)
                </label>
                <textarea
                  value={editForm.description}
                  onChange={(e) =>
                    setEditForm((prev) => ({ ...prev, description: e.target.value }))
                  }
                  className="w-full rounded-lg border border-gray-300 dark:border-dark-3 bg-white dark:bg-dark-3 px-3 py-2 text-sm text-dark dark:text-white focus:outline-none focus:border-primary"
                  rows={2}
                  placeholder="Beschreibung fuer Meta-Tag (optional)"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-dark dark:text-white mb-2">
                  Keywords
                </label>
                <input
                  type="text"
                  value={editForm.keywords}
                  onChange={(e) =>
                    setEditForm((prev) => ({ ...prev, keywords: e.target.value }))
                  }
                  placeholder="Komma-getrennte Keywords"
                  className="w-full rounded-lg border border-gray-300 dark:border-dark-3 bg-white dark:bg-dark-3 px-3 py-2 text-sm text-dark dark:text-white focus:outline-none focus:border-primary"
                />
              </div>
            </div>

            {message.text && (
              <div
                className={`mb-4 p-3 rounded-lg text-sm font-medium ${
                  message.ok
                    ? "bg-green-100 text-green-800"
                    : "bg-red-100 text-red-800"
                }`}
              >
                {message.text}
              </div>
            )}

            <div className="flex justify-end gap-3">
              <button
                onClick={closeEditModal}
                disabled={saving}
                className="px-4 py-2 rounded-lg border border-gray-300 dark:border-dark-3 text-dark dark:text-white hover:bg-gray-50 dark:hover:bg-dark-3 transition disabled:opacity-50"
              >
                Abbrechen
              </button>
              <button
                onClick={handleSave}
                disabled={saving}
                className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition disabled:opacity-50"
              >
                {saving ? "Speichert..." : "Speichern"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

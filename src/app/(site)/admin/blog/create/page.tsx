"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter, useParams } from "next/navigation";
import { redirect } from "next/navigation";

interface BlogForm {
  title: string;
  excerpt: string;
  content: string;
  coverImage: string;
  published: boolean;
}

export default function BlogEditor() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const params = useParams();
  const blogId = params?.id as string;
  const isEdit = !!blogId;

  const [form, setForm] = useState<BlogForm>({
    title: "",
    excerpt: "",
    content: "",
    coverImage: "",
    published: false,
  });

  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (status === "unauthenticated") {
      redirect("/signin");
    }

    if (isEdit && blogId) {
      fetchBlog();
    } else {
      setLoading(false);
    }
  }, [status, isEdit, blogId]);

  const fetchBlog = async () => {
    try {
      const res = await fetch(`/api/blog/${blogId}`);
      if (res.ok) {
        const data = await res.json();
        setForm(data);
      }
    } catch (error) {
      setError("Fehler beim Laden des Blogs");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target as any;
    setForm({
      ...form,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    });
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        const { url } = await res.json();
        setForm({ ...form, coverImage: url });
      }
    } catch (error) {
      setError("Fehler beim Hochladen des Bildes");
      console.error(error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setError("");

    try {
      const method = isEdit ? "PUT" : "POST";
      const url = isEdit ? `/api/blog/${blogId}` : "/api/blog";

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        router.push("/admin/blog");
      } else {
        setError("Fehler beim Speichern des Blogs");
      }
    } catch (error) {
      setError("Fehler beim Speichern des Blogs");
      console.error(error);
    } finally {
      setSaving(false);
    }
  };

  if (status === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Lädt...</p>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Laden des Blogs...</p>
      </div>
    );
  }

  return (
    <>
      <section className="relative overflow-hidden bg-primary pt-[100px] md:pt-[130px] lg:pt-[160px] pb-[60px] md:pb-[100px]">
        <div className="container">
          <div className="mx-auto max-w-[680px]">
            <h1 className="mb-6 text-3xl font-bold text-white sm:text-4xl">
              {isEdit ? "Blog bearbeiten" : "Neuen Blog erstellen"}
            </h1>
          </div>
        </div>
      </section>

      <section className="relative py-16 md:py-[100px]">
        <div className="container">
          <div className="mx-auto max-w-[800px]">
            <div className="rounded-lg bg-white p-8 shadow-lg dark:bg-dark-2">
              {error && (
                <div className="mb-6 rounded-md bg-red-100 p-4 text-red-800">
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="mb-6">
                  <label className="mb-3 block text-sm font-medium text-dark dark:text-white">
                    Titel*
                  </label>
                  <input
                    type="text"
                    name="title"
                    value={form.title}
                    onChange={handleChange}
                    placeholder="Blog-Titel eingeben"
                    required
                    className="w-full rounded-md border border-gray-3 bg-white px-4 py-3 text-dark placeholder:text-body-color/60 focus:border-primary focus:outline-none dark:border-dark-3 dark:bg-dark-2 dark:text-white"
                  />
                </div>

                <div className="mb-6">
                  <label className="mb-3 block text-sm font-medium text-dark dark:text-white">
                    Kurzbeschreibung
                  </label>
                  <textarea
                    name="excerpt"
                    value={form.excerpt}
                    onChange={handleChange}
                    placeholder="Kurze Zusammenfassung des Blogs"
                    rows={3}
                    className="w-full rounded-md border border-gray-3 bg-white px-4 py-3 text-dark placeholder:text-body-color/60 focus:border-primary focus:outline-none dark:border-dark-3 dark:bg-dark-2 dark:text-white"
                  />
                </div>

                <div className="mb-6">
                  <label className="mb-3 block text-sm font-medium text-dark dark:text-white">
                    Titelbild
                  </label>
                  <div className="mb-4 flex items-center gap-4">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-white hover:file:bg-primary/90"
                    />
                  </div>
                  {form.coverImage && (
                    <div className="mb-4">
                      <img
                        src={form.coverImage}
                        alt="Cover"
                        className="max-h-64 rounded-md object-cover"
                      />
                    </div>
                  )}
                </div>

                <div className="mb-6">
                  <label className="mb-3 block text-sm font-medium text-dark dark:text-white">
                    Bloginhalt*
                  </label>
                  <textarea
                    name="content"
                    value={form.content}
                    onChange={handleChange}
                    placeholder="Schreiben Sie den Inhalt des Blogs (Markdown wird unterstützt)"
                    rows={15}
                    required
                    className="w-full rounded-md border border-gray-3 bg-white px-4 py-3 font-mono text-sm text-dark placeholder:text-body-color/60 focus:border-primary focus:outline-none dark:border-dark-3 dark:bg-dark-2 dark:text-white"
                  />
                </div>

                <div className="mb-8 flex items-center">
                  <input
                    type="checkbox"
                    name="published"
                    id="published"
                    checked={form.published}
                    onChange={handleChange}
                    className="h-4 w-4 rounded border-gray-3 text-primary"
                  />
                  <label htmlFor="published" className="ml-3 text-sm font-medium text-dark dark:text-white">
                    Veröffentlichen (aktivieren Sie dies, um den Blog öffentlich zu machen)
                  </label>
                </div>

                <div className="flex gap-4">
                  <button
                    type="submit"
                    disabled={saving}
                    className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-base font-medium text-white hover:bg-primary/90 disabled:opacity-50"
                  >
                    {saving ? "Speichert..." : isEdit ? "Aktualisieren" : "Erstellen"}
                  </button>
                  <button
                    type="button"
                    onClick={() => router.push("/admin/blog")}
                    className="inline-flex items-center justify-center rounded-md border border-gray-3 px-8 py-3 text-base font-medium text-dark hover:bg-gray-1 dark:border-dark-3 dark:text-white dark:hover:bg-dark-2"
                  >
                    Abbrechen
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

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

export default function AdminDashboard() {
  const router = useRouter();
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [isChecking, setIsChecking] = useState(true);

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
        <p>Lädt...</p>
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
            <p className="text-white/70">Admin Dashboard zur Verwaltung Ihrer Blogbeiträge</p>
          </div>
        </div>
      </section>

      <section className="relative py-16 md:py-[100px]">
        <div className="container">
          <div className="mx-auto max-w-[1000px]">
            <div className="mb-8 flex justify-between items-center">
              <h2 className="text-2xl font-bold text-dark dark:text-white">
                Alle Blogbeiträge ({blogs.length})
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
                <p className="text-body-color dark:text-dark-6">Lädt Blogbeiträge...</p>
              </div>
            ) : blogs.length === 0 ? (
              <div className="rounded-lg border border-gray-3 bg-gray-1 p-10 text-center dark:border-dark-3 dark:bg-dark-2">
                <p className="text-body-color dark:text-dark-6 mb-4">
                  Keine Blogbeiträge vorhanden
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
                            {blog.published ? "Veröffentlicht" : "Entwurf"}
                          </span>
                        </td>
                        <td className="px-4 py-4 text-sm text-body-color dark:text-dark-6">
                          {new Date(blog.createdAt).toLocaleDateString("de-DE")}
                        </td>
                        <td className="px-4 py-4 text-sm flex gap-2">
                          <Link
                            href={`/admin/blog/edit/${blog.id}`}
                            className="text-primary hover:text-primary/80 font-medium"
                          >
                            Bearbeiten
                          </Link>
                          <button
                            onClick={() => deleteBlog(blog.id)}
                            className="text-red-600 hover:text-red-800 font-medium"
                          >
                            Löschen
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
    </>
  );
}

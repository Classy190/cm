"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface Comment {
  id: string;
  content: string;
  authorName: string;
  authorEmail: string;
  approved: boolean;
  createdAt: string;
  blog: { slug: string; title: string };
}

export default function AdminCommentsPage() {
  const router = useRouter();
  const [comments, setComments] = useState<Comment[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filter, setFilter] = useState<"all" | "pending" | "approved">("pending");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await fetch("/api/admin/check");
        if (!res.ok) {
          router.push("/admin/login");
          return;
        }
        fetchComments();
      } catch {
        router.push("/admin/login");
      }
    };
    checkAuth();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchComments = async (currentFilter = filter) => {
    setIsLoading(true);
    try {
      const res = await fetch(`/api/admin/comments?filter=${currentFilter}`);
      if (res.ok) {
        setComments(await res.json());
      }
    } catch (e) {
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  const handleFilterChange = (newFilter: "all" | "pending" | "approved") => {
    setFilter(newFilter);
    fetchComments(newFilter);
  };

  const handleApprove = async (id: string, approved: boolean) => {
    try {
      const res = await fetch("/api/admin/comments", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, approved }),
      });
      if (res.ok) {
        setMessage(approved ? "✅ Kommentar freigeschaltet." : "⏸ Kommentar zurückgezogen.");
        fetchComments(filter);
        setTimeout(() => setMessage(""), 3000);
      }
    } catch (e) {
      console.error(e);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Kommentar wirklich löschen?")) return;
    try {
      const res = await fetch(`/api/admin/comments?id=${id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        setMessage("🗑 Kommentar gelöscht.");
        fetchComments(filter);
        setTimeout(() => setMessage(""), 3000);
      }
    } catch (e) {
      console.error(e);
    }
  };

  const pendingCount = comments.filter((c) => !c.approved).length;

  return (
    <>
      <section className="relative overflow-hidden bg-primary pt-[100px] md:pt-[130px] lg:pt-[160px] pb-[60px] md:pb-[80px]">
        <div className="container">
          <div className="flex justify-between items-start gap-4">
            <div>
              <h1 className="mb-3 text-3xl font-bold text-white sm:text-4xl">
                Kommentare verwalten
              </h1>
              <p className="text-white/70">Freischalten, ablehnen oder löschen</p>
            </div>
            <Link
              href="/admin"
              className="mt-2 px-5 py-2 bg-white/20 hover:bg-white/30 text-white rounded-lg font-medium transition text-sm"
            >
              ← Dashboard
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container max-w-[1000px] mx-auto">

          {message && (
            <div className="mb-6 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 px-5 py-3 text-green-800 dark:text-green-200 font-medium">
              {message}
            </div>
          )}

          {/* Filter Tabs */}
          <div className="mb-8 flex gap-2">
            {(["pending", "approved", "all"] as const).map((f) => (
              <button
                key={f}
                onClick={() => handleFilterChange(f)}
                className={`px-5 py-2 rounded-lg font-medium text-sm transition ${
                  filter === f
                    ? "bg-primary text-white"
                    : "bg-white dark:bg-dark-2 border border-gray-200 dark:border-dark-3 text-dark dark:text-white hover:border-primary"
                }`}
              >
                {f === "pending" ? `Ausstehend${pendingCount > 0 && filter === "pending" ? ` (${pendingCount})` : ""}` : f === "approved" ? "Freigeschaltet" : "Alle"}
              </button>
            ))}
          </div>

          {isLoading ? (
            <div className="flex items-center justify-center py-20">
              <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-primary"></div>
            </div>
          ) : comments.length === 0 ? (
            <div className="rounded-xl border border-gray-200 dark:border-dark-3 bg-white dark:bg-dark-2 px-6 py-16 text-center">
              <p className="text-4xl mb-4">💬</p>
              <p className="text-body-color dark:text-dark-6">
                {filter === "pending" ? "Keine ausstehenden Kommentare." : "Keine Kommentare vorhanden."}
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {comments.map((comment) => (
                <div
                  key={comment.id}
                  className={`rounded-xl border bg-white dark:bg-dark-2 overflow-hidden ${
                    comment.approved
                      ? "border-green-200 dark:border-green-900"
                      : "border-yellow-200 dark:border-yellow-900"
                  }`}
                >
                  <div className={`h-1 ${comment.approved ? "bg-green-400" : "bg-yellow-400"}`} />
                  <div className="p-5">
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                      <div>
                        <span className="font-semibold text-dark dark:text-white">
                          {comment.authorName}
                        </span>
                        {comment.authorEmail && (
                          <span className="ml-2 text-xs text-body-color dark:text-dark-6">
                            ({comment.authorEmail})
                          </span>
                        )}
                        <span
                          className={`ml-3 inline-block px-2 py-0.5 rounded text-xs font-medium ${
                            comment.approved
                              ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300"
                              : "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300"
                          }`}
                        >
                          {comment.approved ? "Freigeschaltet" : "Ausstehend"}
                        </span>
                      </div>
                      <div className="text-xs text-body-color dark:text-dark-6">
                        {new Date(comment.createdAt).toLocaleString("de-DE")}
                      </div>
                    </div>

                    <p className="text-body-color dark:text-dark-6 mb-3 leading-relaxed">
                      {comment.content}
                    </p>

                    <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-gray-100 dark:border-dark-3">
                      <Link
                        href={`/blogs/${comment.blog.slug}`}
                        target="_blank"
                        className="text-xs text-primary hover:underline"
                      >
                        /blogs/{comment.blog.slug}
                      </Link>

                      <div className="flex gap-2">
                        {comment.approved ? (
                          <button
                            onClick={() => handleApprove(comment.id, false)}
                            className="px-3 py-1.5 text-xs font-medium rounded-lg bg-yellow-100 text-yellow-700 hover:bg-yellow-200 dark:bg-yellow-900/30 dark:text-yellow-300 transition"
                          >
                            Zurückziehen
                          </button>
                        ) : (
                          <button
                            onClick={() => handleApprove(comment.id, true)}
                            className="px-3 py-1.5 text-xs font-medium rounded-lg bg-green-100 text-green-700 hover:bg-green-200 dark:bg-green-900/30 dark:text-green-300 transition"
                          >
                            ✓ Freischalten
                          </button>
                        )}
                        <button
                          onClick={() => handleDelete(comment.id)}
                          className="px-3 py-1.5 text-xs font-medium rounded-lg bg-red-100 text-red-700 hover:bg-red-200 dark:bg-red-900/30 dark:text-red-300 transition"
                        >
                          Löschen
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}

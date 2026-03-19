"use client";

import { useState, useEffect } from "react";

interface Comment {
  id: string;
  content: string;
  authorName: string;
  authorEmail: string;
  createdAt: string;
  approved: boolean;
}

export default function BlogComments({ slug }: { slug: string }) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");
  const [formData, setFormData] = useState({
    authorName: "",
    authorEmail: "",
    content: "",
  });

  // Fetch comments
  useEffect(() => {
    const fetchComments = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`/api/comments?blogSlug=${slug}`);
        const data = await response.json();
        setComments(data);
      } catch (error) {
        console.error("Error fetching comments:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchComments();
  }, [slug]);

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage("");

    try {
      const response = await fetch("/api/comments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          blogSlug: slug,
        }),
      });

      if (response.ok) {
        setFormData({ authorName: "", authorEmail: "", content: "" });
        setMessage("✅ Kommentar eingereicht! Er wird nach Freischaltung angezeigt.");
        // Refresh comments
        setTimeout(async () => {
          const updateRes = await fetch(`/api/comments?blogSlug=${slug}`);
          const data = await updateRes.json();
          setComments(data);
        }, 500);
      } else {
        setMessage("❌ Fehler beim Einreichen des Kommentars.");
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("❌ Fehler beim Einreichen des Kommentars.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="mt-12">
      <div className="rounded-lg border border-stroke bg-white p-6 dark:border-dark-3 dark:bg-dark">
        <h3 className="mb-6 text-2xl font-bold text-dark dark:text-white">
          💬 Kommentare
        </h3>

        {/* Comments List */}
        <div className="mb-8">
          {isLoading ? (
            <p className="text-body-color dark:text-dark-6">Lädt...</p>
          ) : comments.length > 0 ? (
            <div className="space-y-4">
              {comments.map((comment) => (
                <div
                  key={comment.id}
                  className="border-l-4 border-primary bg-gray-50 p-4 dark:bg-dark-2"
                >
                  <div className="mb-2 flex items-center justify-between">
                    <h4 className="font-semibold text-dark dark:text-white">
                      {comment.authorName}
                    </h4>
                    <span className="text-xs text-body-color dark:text-dark-6">
                      {new Date(comment.createdAt).toLocaleDateString("de-DE")}
                    </span>
                  </div>
                  <p className="text-body-color dark:text-dark-6">
                    {comment.content}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-body-color dark:text-dark-6">
              Keine Kommentare vorhanden. Sei der Erste!
            </p>
          )}
        </div>

        {/* Comment Form */}
        <div className="border-t border-stroke pt-6 dark:border-dark-3">
          <h4 className="mb-4 text-lg font-semibold text-dark dark:text-white">
            Kommentar hinterlassen
          </h4>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <input
                type="text"
                name="authorName"
                placeholder="Dein Name"
                value={formData.authorName}
                onChange={handleChange}
                required
                className="rounded border border-stroke bg-transparent px-4 py-2.5 text-dark outline-none focus:border-primary dark:border-dark-3 dark:text-white"
              />
              <input
                type="email"
                name="authorEmail"
                placeholder="Deine E-Mail"
                value={formData.authorEmail}
                onChange={handleChange}
                required
                className="rounded border border-stroke bg-transparent px-4 py-2.5 text-dark outline-none focus:border-primary dark:border-dark-3 dark:text-white"
              />
            </div>

            <textarea
              name="content"
              placeholder="Dein Kommentar..."
              value={formData.content}
              onChange={handleChange}
              required
              rows={5}
              className="w-full rounded border border-stroke bg-transparent px-4 py-2.5 text-dark outline-none focus:border-primary dark:border-dark-3 dark:text-white"
            ></textarea>

            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-center font-medium text-white hover:bg-primary/90 disabled:opacity-50"
            >
              {isSubmitting ? "Wird eingereicht..." : "Kommentar absenden"}
            </button>

            {message && (
              <p className="mt-4 text-sm font-medium text-body-color dark:text-dark-6">
                {message}
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

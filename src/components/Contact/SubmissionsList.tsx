"use client";

import { useState, useEffect } from "react";

interface Submission {
  id: string;
  fullName: string;
  email: string;
  projectType: string;
  timeline: string;
  investment: string;
  message: string;
  read: boolean;
  archived: boolean;
  createdAt: string;
}

export default function ContactSubmissions() {
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [loading, setLoading] = useState(false);
  const [apiKey, setApiKey] = useState("");
  const [authenticated, setAuthenticated] = useState(false);

  const authenticate = async () => {
    if (!apiKey) {
      alert("Bitte API-Schlüssel eingeben");
      return;
    }

    try {
      const response = await fetch("/api/contact/submissions", {
        headers: {
          Authorization: `Bearer ${apiKey}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setSubmissions(data);
        setAuthenticated(true);
      } else {
        alert("Ungültiger API-Schlüssel");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Fehler beim Abrufen der Anfragen");
    }
  };

  const markAsRead = async (id: string) => {
    try {
      const response = await fetch("/api/contact/submissions", {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ submissionId: id, action: "read" }),
      });

      if (response.ok) {
        setSubmissions((prev) =>
          prev.map((sub) => (sub.id === id ? { ...sub, read: true } : sub))
        );
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const archiveSubmission = async (id: string) => {
    try {
      const response = await fetch("/api/contact/submissions", {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ submissionId: id, action: "archive" }),
      });

      if (response.ok) {
        setSubmissions((prev) =>
          prev.map((sub) => (sub.id === id ? { ...sub, archived: true } : sub))
        );
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  if (!authenticated) {
    return (
      <section className="py-20">
        <div className="container px-4">
          <div className="mx-auto max-w-[600px] rounded-lg border border-gray-300 bg-white p-8 dark:border-dark-3 dark:bg-dark-2">
            <h1 className="mb-6 text-2xl font-bold text-dark dark:text-white">
              Projektanfragen
            </h1>

            <div className="mb-4">
              <label className="mb-2 block text-sm font-medium text-dark dark:text-white">
                Admin API-Schlüssel
              </label>
              <input
                type="password"
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                placeholder="Geben Sie Ihren API-Schlüssel ein"
                className="w-full rounded border border-gray-300 px-4 py-2 dark:border-dark-3 dark:bg-dark-3 dark:text-white"
              />
            </div>

            <button
              onClick={authenticate}
              className="w-full rounded bg-primary px-4 py-2 font-medium text-white hover:bg-primary/90"
            >
              Anmelden
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20">
      <div className="container px-4">
        <div className="mx-auto w-full">
          <h1 className="mb-8 text-3xl font-bold text-dark dark:text-white">
            Projektanfragen ({submissions.length})
          </h1>

          {submissions.length === 0 ? (
            <div className="rounded-lg border border-gray-300 bg-gray-50 p-8 text-center dark:border-dark-3 dark:bg-dark-2">
              <p className="text-gray-600 dark:text-gray-400">
                Keine Anfragen vorhanden
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {submissions.map((submission) => (
                <div
                  key={submission.id}
                  className={`rounded-lg border p-6 ${
                    submission.read
                      ? "border-gray-300 bg-gray-50 dark:border-dark-3 dark:bg-dark-2"
                      : "border-blue-300 bg-blue-50 dark:border-blue-700 dark:bg-blue-900/20"
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-lg font-bold text-dark dark:text-white">
                        {submission.fullName}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {submission.email}
                      </p>
                      <div className="mt-2 flex gap-2">
                        <span className="rounded bg-primary/20 px-2 py-1 text-xs font-medium text-primary">
                          {submission.projectType}
                        </span>
                        <span className="rounded bg-gray-200 px-2 py-1 text-xs font-medium text-gray-700 dark:bg-gray-700 dark:text-gray-200">
                          {submission.timeline}
                        </span>
                        <span className="rounded bg-green-200 px-2 py-1 text-xs font-medium text-green-700 dark:bg-green-900/30 dark:text-green-300">
                          {submission.investment}
                        </span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      {!submission.read && (
                        <button
                          onClick={() => markAsRead(submission.id)}
                          className="rounded bg-blue-500 px-3 py-1 text-sm font-medium text-white hover:bg-blue-600"
                        >
                          Als gelesen markieren
                        </button>
                      )}
                      <button
                        onClick={() => archiveSubmission(submission.id)}
                        className="rounded bg-gray-400 px-3 py-1 text-sm font-medium text-white hover:bg-gray-500"
                      >
                        Archivieren
                      </button>
                    </div>
                  </div>

                  <div className="mt-4 border-t border-gray-300 pt-4 dark:border-dark-3">
                    <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Nachricht:
                    </p>
                    <p className="mt-2 text-gray-700 dark:text-gray-300">
                      {submission.message}
                    </p>
                  </div>

                  <p className="mt-3 text-xs text-gray-500 dark:text-gray-500">
                    {new Date(submission.createdAt).toLocaleString("de-DE")}
                    {submission.archived ? " • Archiviert" : ""}
                  </p>
                </div>
              ))}
            </div>
          )}

          <button
            onClick={() => {
              setAuthenticated(false);
              setApiKey("");
            }}
            className="mt-8 rounded bg-gray-400 px-4 py-2 font-medium text-white hover:bg-gray-500"
          >
            Abmelden
          </button>
        </div>
      </div>
    </section>
  );
}

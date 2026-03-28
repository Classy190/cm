"use client";

import { useEffect } from "react";

export default function GlobalError({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    console.error("Global Error Boundary:", error);
  }, [error]);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-gray-900 dark:bg-dark dark:text-white p-6">
      <div className="max-w-xl rounded-xl border border-red-200 bg-white p-8 shadow-lg dark:border-red-500/40 dark:bg-dark-2">
        <h1 className="text-2xl font-bold text-red-600 dark:text-red-300 mb-4">Ein Fehler ist aufgetreten</h1>
        <p className="mb-4">Entschuldigung, etwas ist schiefgelaufen. Versuche die Seite neu zu laden.</p>
        <pre className="mb-4 whitespace-pre-wrap text-xs text-gray-600 dark:text-gray-300">{error.message}</pre>
        <div className="flex gap-3">
          <button
            className="rounded-md bg-primary px-4 py-2 text-sm font-semibold text-white hover:bg-primary/90"
            onClick={() => reset()}
          >
            Erneut versuchen
          </button>
          <button
            className="rounded-md border border-gray-300 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-800"
            onClick={() => window.location.reload()}
          >
            Seite neu laden
          </button>
        </div>
      </div>
    </main>
  );
}

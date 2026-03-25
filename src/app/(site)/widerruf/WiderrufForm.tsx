"use client";

import React, { useState } from "react";

type Step = "form" | "confirm" | "success";

export default function WiderrufForm() {
  const [step, setStep] = useState<Step>("form");
  const [bestellnummer, setBestellnummer] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [timestamp, setTimestamp] = useState("");

  function handleFormSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    if (!bestellnummer.trim() || !email.trim()) {
      setError("Bitte füllen Sie alle Felder aus.");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Bitte geben Sie eine gültige E-Mail-Adresse ein.");
      return;
    }

    setStep("confirm");
  }

  async function handleConfirm() {
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/widerruf", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ bestellnummer, email }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Ein Fehler ist aufgetreten.");
        setStep("form");
        return;
      }

      setTimestamp(data.timestamp || "");
      setStep("success");
    } catch {
      setError(
        "Netzwerkfehler. Bitte versuchen Sie es erneut oder kontaktieren Sie uns per E-Mail."
      );
      setStep("form");
    } finally {
      setLoading(false);
    }
  }

  // ─── Step 1: Form ─────────────────────────────────────────────────────────────
  if (step === "form") {
    return (
      <div className="rounded-lg border border-gray-200 bg-white p-8 shadow-sm dark:border-dark-3 dark:bg-dark-2">
        <h2 className="mb-2 text-xl font-bold text-dark dark:text-white">
          Schritt 1 von 2 – Widerrufsangaben
        </h2>
        <p className="mb-6 text-sm text-body-color dark:text-dark-6">
          Füllen Sie bitte die folgenden Felder aus. Weitere Angaben (z. B. ein
          Widerrufsgrund) sind nicht erforderlich und werden auch nicht
          abgefragt.
        </p>

        {error && (
          <div className="mb-4 rounded border border-red-300 bg-red-50 px-4 py-3 text-sm text-red-700 dark:bg-red-900/20 dark:text-red-400">
            {error}
          </div>
        )}

        <form onSubmit={handleFormSubmit} noValidate>
          <div className="mb-5">
            <label
              htmlFor="bestellnummer"
              className="mb-2 block text-sm font-medium text-dark dark:text-white"
            >
              Bestellnummer / Vertragsnummer{" "}
              <span className="text-red-500">*</span>
            </label>
            <input
              id="bestellnummer"
              type="text"
              value={bestellnummer}
              onChange={(e) => setBestellnummer(e.target.value)}
              placeholder="z. B. CM-2026-0042"
              required
              autoComplete="off"
              className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-dark outline-none transition focus:border-primary dark:border-dark-3 dark:bg-dark dark:text-white dark:placeholder-dark-6"
            />
          </div>

          <div className="mb-8">
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium text-dark dark:text-white"
            >
              E-Mail-Adresse (für Eingangsbestätigung){" "}
              <span className="text-red-500">*</span>
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="ihre@email.de"
              required
              autoComplete="email"
              className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-dark outline-none transition focus:border-primary dark:border-dark-3 dark:bg-dark dark:text-white dark:placeholder-dark-6"
            />
            <p className="mt-1 text-xs text-body-color dark:text-dark-6">
              An diese Adresse senden wir Ihnen unverzüglich eine
              Eingangsbestätigung.
            </p>
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-primary px-6 py-3 text-base font-semibold text-white transition hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            Weiter zur Bestätigung →
          </button>
        </form>
      </div>
    );
  }

  // ─── Step 2: Confirm ──────────────────────────────────────────────────────────
  if (step === "confirm") {
    return (
      <div className="rounded-lg border border-orange-200 bg-orange-50 p-8 shadow-sm dark:border-orange-800 dark:bg-dark-2">
        <h2 className="mb-2 text-xl font-bold text-dark dark:text-white">
          Schritt 2 von 2 – Widerruf bestätigen
        </h2>
        <p className="mb-6 text-sm text-body-color dark:text-dark-6">
          Bitte prüfen Sie Ihre Angaben. Mit Klick auf{" "}
          <strong>„Widerruf bestätigen"</strong> wird Ihr Widerruf rechtswirksam
          erklärt.
        </p>

        {error && (
          <div className="mb-4 rounded border border-red-300 bg-red-50 px-4 py-3 text-sm text-red-700">
            {error}
          </div>
        )}

        <div className="mb-8 overflow-hidden rounded-lg border border-gray-200 bg-white dark:border-dark-3 dark:bg-dark">
          <table className="w-full text-sm">
            <tbody>
              <tr className="border-b border-gray-100 dark:border-dark-3">
                <td className="px-4 py-3 font-medium text-dark dark:text-white">
                  Bestellnummer
                </td>
                <td className="px-4 py-3 text-body-color dark:text-dark-6">
                  {bestellnummer}
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-dark dark:text-white">
                  E-Mail-Adresse
                </td>
                <td className="px-4 py-3 text-body-color dark:text-dark-6">
                  {email}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <button
            type="button"
            onClick={() => setStep("form")}
            disabled={loading}
            className="flex-1 rounded-lg border border-gray-300 bg-white px-6 py-3 text-base font-semibold text-dark transition hover:bg-gray-50 disabled:opacity-50 dark:border-dark-3 dark:bg-dark dark:text-white"
          >
            ← Zurück
          </button>
          <button
            type="button"
            onClick={handleConfirm}
            disabled={loading}
            className="flex-1 rounded-lg bg-primary px-6 py-3 text-base font-semibold text-white transition hover:bg-primary/90 disabled:opacity-50 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            {loading ? "Wird übermittelt…" : "Widerruf bestätigen"}
          </button>
        </div>
      </div>
    );
  }

  // ─── Step 3: Success ──────────────────────────────────────────────────────────
  return (
    <div className="rounded-lg border border-green-200 bg-green-50 p-8 text-center shadow-sm dark:border-green-800 dark:bg-dark-2">
      <div className="mb-4 flex justify-center">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30">
          <svg
            className="h-8 w-8 text-green-600 dark:text-green-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </span>
      </div>
      <h2 className="mb-3 text-xl font-bold text-dark dark:text-white">
        Ihr Widerruf wurde erfolgreich übermittelt
      </h2>
      <p className="mb-2 text-sm text-body-color dark:text-dark-6">
        Wir haben Ihre Widerrufserklärung erhalten und Ihnen eine
        Eingangsbestätigung an <strong>{email}</strong> gesendet.
      </p>
      {timestamp && (
        <p className="mb-4 text-sm text-body-color dark:text-dark-6">
          <strong>Eingangszeitpunkt:</strong> {timestamp} Uhr
        </p>
      )}
      <p className="text-sm text-body-color dark:text-dark-6">
        Wir werden uns innerhalb von 14 Tagen bei Ihnen melden und die weitere
        Abwicklung mit Ihnen klären. Bei Fragen:{" "}
        <a
          href="mailto:info@classymarketing.de"
          className="text-primary hover:underline"
        >
          info@classymarketing.de
        </a>
      </p>
    </div>
  );
}

"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (result?.error) {
        setError("Ungültige E-Mail oder Passwort");
      } else if (result?.ok) {
        router.push("/admin");
      }
    } catch (err) {
      setError("Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 to-primary/5 dark:from-dark dark:to-dark-2 flex items-center justify-center px-4 py-20">
      <div className="w-full max-w-md">
        <div className="bg-white dark:bg-dark-2 rounded-2xl shadow-xl p-8 md:p-10">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-dark dark:text-white mb-2">
              Admin Login
            </h1>
            <p className="text-body-color dark:text-dark-6">
              Melden Sie sich an, um Blog-Inhalte zu verwalten
            </p>
          </div>

          {/* Error Message */}
          {error && (
            <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-900 rounded-lg">
              <p className="text-sm text-red-800 dark:text-red-400">
                ❌ {error}
              </p>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-dark dark:text-white mb-2">
                E-Mail-Adresse
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@example.com"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-dark-3 bg-white dark:bg-dark-3 text-dark dark:text-white placeholder-gray-400 dark:placeholder-dark-6 focus:border-primary focus:outline-none transition"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-dark dark:text-white mb-2">
                Passwort
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-dark-3 bg-white dark:bg-dark-3 text-dark dark:text-white placeholder-gray-400 dark:placeholder-dark-6 focus:border-primary focus:outline-none transition"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3 px-4 bg-primary hover:bg-primary/90 text-white rounded-lg font-semibold transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? "Lädt..." : "Anmelden"}
            </button>
          </form>

          {/* Footer */}
          <div className="mt-6 pt-6 border-t border-gray-200 dark:border-dark-3">
            <p className="text-center text-sm text-body-color dark:text-dark-6">
              Zurück zu{" "}
              <Link
                href="/"
                className="text-primary hover:text-primary/80 font-semibold"
              >
                Startseite
              </Link>
            </p>
          </div>

          {/* Info Box */}
          <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
            <p className="text-xs text-blue-800 dark:text-blue-400">
              <strong>ℹ️ Hinweis:</strong> Nutzen Sie die Admin-Zugangsdaten, die Sie per E-Mail
              erhalten haben.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface User {
  id: string;
  email: string;
  name: string | null;
  isAdmin: boolean;
  createdAt: string;
}

export default function UsersPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [users, setUsers] = useState<User[]>([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await fetch("/api/admin/check");
        if (!response.ok) {
          router.push("/admin/login");
          return;
        }

        // Fetch users
        const usersResponse = await fetch("/api/admin/users");
        if (usersResponse.ok) {
          const usersData = await usersResponse.json();
          setUsers(usersData);
        }
      } catch {
        router.push("/admin/login");
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, [router]);

  const toggleAdminStatus = async (userId: string, isAdmin: boolean) => {
    try {
      const response = await fetch(`/api/admin/users/${userId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ isAdmin: !isAdmin })
      });

      if (response.ok) {
        setUsers(users.map(u => 
          u.id === userId ? { ...u, isAdmin: !isAdmin } : u
        ));
        setMessage("✅ Status aktualisiert");
        setTimeout(() => setMessage(""), 3000);
      }
    } catch {
      setMessage("❌ Fehler beim Aktualisieren");
    }
  };

  const deleteUser = async (userId: string) => {
    if (!confirm("Sind Sie sicher? Diese Aktion kann nicht rückgängig gemacht werden.")) {
      return;
    }

    try {
      const response = await fetch(`/api/admin/users/${userId}`, {
        method: "DELETE"
      });

      if (response.ok) {
        setUsers(users.filter(u => u.id !== userId));
        setMessage("✅ Benutzer gelöscht");
        setTimeout(() => setMessage(""), 3000);
      }
    } catch {
      setMessage("❌ Fehler beim Löschen");
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Lädt...</p>
      </div>
    );
  }

  return (
    <>
      <section className="bg-primary py-[60px] md:py-[100px]">
        <div className="container">
          <div className="max-w-[900px]">
            <Link href="/admin" className="text-white/70 hover:text-white mb-4 inline-block">
              ← Zurück zum Dashboard
            </Link>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Benutzerverwaltung
            </h1>
            <p className="text-white/70">
              Verwalten Sie Benutzer und Administratorrechte
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container">
          <div className="max-w-[1000px]">
            {message && (
              <div
                className={`mb-6 p-4 rounded-lg ${
                  message.startsWith("✅")
                    ? "bg-green-50 text-green-800 dark:bg-green-900/20 dark:text-green-400"
                    : "bg-red-50 text-red-800 dark:bg-red-900/20 dark:text-red-400"
                }`}
              >
                {message}
              </div>
            )}

            <div className="bg-white dark:bg-dark-2 rounded-lg border border-gray-200 dark:border-dark-3 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-dark-3 bg-gray-50 dark:bg-dark-3">
                      <th className="px-6 py-4 text-left text-sm font-semibold text-dark dark:text-white">
                        Name
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-dark dark:text-white">
                        Email
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-dark dark:text-white">
                        Rolle
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-dark dark:text-white">
                        Beigetreten
                      </th>
                      <th className="px-6 py-4 text-right text-sm font-semibold text-dark dark:text-white">
                        Aktionen
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((user) => (
                      <tr
                        key={user.id}
                        className="border-b border-gray-200 dark:border-dark-3 hover:bg-gray-50 dark:hover:bg-dark-3 transition"
                      >
                        <td className="px-6 py-4 text-sm text-dark dark:text-white">
                          {user.name || "Kein Name"}
                        </td>
                        <td className="px-6 py-4 text-sm text-body-color dark:text-dark-6">
                          {user.email}
                        </td>
                        <td className="px-6 py-4 text-sm">
                          <span
                            className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                              user.isAdmin
                                ? "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400"
                                : "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300"
                            }`}
                          >
                            {user.isAdmin ? "Admin" : "Benutzer"}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-sm text-body-color dark:text-dark-6">
                          {new Date(user.createdAt).toLocaleDateString("de-DE")}
                        </td>
                        <td className="px-6 py-4 text-right">
                          <div className="flex justify-end gap-2">
                            <button
                              onClick={() => toggleAdminStatus(user.id, user.isAdmin)}
                              className="px-3 py-1 text-xs font-medium rounded-lg transition"
                              title={user.isAdmin ? "Admin entzehen" : "Zum Admin machen"}
                            >
                              {user.isAdmin ? "👑 Entzehen" : "👤 Erheben"}
                            </button>
                            {!user.isAdmin && (
                              <button
                                onClick={() => deleteUser(user.id)}
                                className="px-3 py-1 text-xs font-medium text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition"
                              >
                                🗑️ Löschen
                              </button>
                            )}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {users.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-body-color dark:text-dark-6">
                    Keine Benutzer vorhanden
                  </p>
                </div>
              )}
            </div>

            {/* Info Box */}
            <div className="mt-8 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-900 rounded-lg p-6">
              <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
                ℹ️ Rollen-Erklärung
              </h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm text-blue-800 dark:text-blue-300">
                <div>
                  <p className="font-medium">👤 Benutzer</p>
                  <p className="text-xs mt-1">Kann ihr eigenes Profil sehen und bearbeiten</p>
                </div>
                <div>
                  <p className="font-medium">👑 Administrator</p>
                  <p className="text-xs mt-1">Hat Zugriff auf das komplette Admin Dashboard</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

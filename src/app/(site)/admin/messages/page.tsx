"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

interface Message {
  id: string;
  fullName: string;
  email: string;
  projectType: string;
  timeline: string;
  message: string;
  createdAt: string;
}

export default function AdminMessages() {
  const { status } = useSession();
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (status === "unauthenticated") {
      redirect("/admin/login");
    }
  }, [status]);

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    try {
      const response = await fetch("/api/contact?type=list", {
        method: "GET",
      });
      const data = await response.json();
      setMessages(data || []);
    } catch (error) {
      console.error("Error fetching messages:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
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
              Kontaktanfragen
            </h1>
            <p className="text-white/70">
              Alle Anfragen, die über das Kontaktformular eingegangen sind
            </p>
          </div>
        </div>
      </section>

      <section className="relative py-16 md:py-[100px]">
        <div className="container">
          <div className="mx-auto max-w-[1200px]">
            {messages.length === 0 ? (
              <div className="rounded-lg bg-blue-50 dark:bg-blue-900/20 p-8 text-center">
                <p className="text-lg text-body-color dark:text-dark-6">
                  Noch keine Anfragen eingegangen.
                </p>
              </div>
            ) : (
              <div className="space-y-6">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className="rounded-lg border border-gray-200 dark:border-dark-3 bg-white dark:bg-dark-2 p-6 shadow-md hover:shadow-lg transition"
                  >
                    <div className="flex justify-between items-start gap-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-dark dark:text-white mb-2">
                          {msg.fullName}
                        </h3>
                        <p className="text-sm text-body-color dark:text-dark-6 mb-3">
                          <strong>Email:</strong> <a href={`mailto:${msg.email}`} className="text-primary hover:underline">{msg.email}</a>
                        </p>
                        <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                          <div>
                            <strong className="text-dark dark:text-white">Projekttyp:</strong>
                            <p className="text-body-color dark:text-dark-6">{msg.projectType}</p>
                          </div>
                          <div>
                            <strong className="text-dark dark:text-white">Zeitrahmen:</strong>
                            <p className="text-body-color dark:text-dark-6">{msg.timeline}</p>
                          </div>
                        </div>
                        <div className="p-4 bg-gray-50 dark:bg-dark-3 rounded-lg mb-4">
                          <p className="text-sm text-body-color dark:text-dark-6 whitespace-pre-wrap">
                            {msg.message}
                          </p>
                        </div>
                        <p className="text-xs text-body-color dark:text-dark-6">
                          Eingegangen am: {new Date(msg.createdAt).toLocaleDateString("de-DE", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                        </p>
                      </div>
                      <div className="flex gap-2">
                        <a
                          href={`mailto:${msg.email}`}
                          className="px-4 py-2 bg-primary hover:bg-primary/90 text-white rounded-lg font-medium transition"
                        >
                          Antwort
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

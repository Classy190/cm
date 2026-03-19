"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function SettingsPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [message, setMessage] = useState("");
  const [settings, setSettings] = useState({
    siteName: "Classy Marketing",
    siteDescription: "Digitale Marketing Agentur",
    contactEmail: "info@classymarketing.de",
    phone: "+49 (0) 123 456789",
    address: "Berlin, Germany",
    socialMedia: {
      facebook: "",
      twitter: "",
      linkedin: "",
      instagram: ""
    },
    seo: {
      defaultTitle: "Classy Marketing - SEO & Digital Strategy",
      defaultDescription: "Wir helfen Ihrem Business zu wachsen",
      keywords: "SEO, Digital Marketing, Web Design"
    },
    features: {
      allowComments: true,
      emailNotifications: true,
      maintenanceMode: false
    }
  });

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await fetch("/api/admin/check");
        if (!response.ok) {
          router.push("/admin/login");
          return;
        }
      } catch {
        router.push("/admin/login");
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, [router]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setSettings(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSocialChange = (platform: string, value: string) => {
    setSettings(prev => ({
      ...prev,
      socialMedia: {
        ...prev.socialMedia,
        [platform]: value
      }
    }));
  };

  const handleSeoChange = (field: string, value: string) => {
    setSettings(prev => ({
      ...prev,
      seo: {
        ...prev.seo,
        [field]: value
      }
    }));
  };

  const handleFeatureToggle = (feature: string) => {
    setSettings(prev => ({
      ...prev,
      features: {
        ...prev.features,
        [feature]: !prev.features[feature as keyof typeof prev.features]
      }
    }));
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    setMessage("");

    try {
      // In einer echten App würde man dies speichern
      // await fetch('/api/admin/settings', { method: 'PUT', body: JSON.stringify(settings) })
      
      setMessage("✅ Einstellungen gespeichert!");
      setTimeout(() => setMessage(""), 3000);
    } catch (error) {
      setMessage("❌ Fehler beim Speichern");
    } finally {
      setIsSaving(false);
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
          <div className="max-w-[800px]">
            <Link href="/admin" className="text-white/70 hover:text-white mb-4 inline-block">
              ← Zurück zum Dashboard
            </Link>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Website-Einstellungen
            </h1>
            <p className="text-white/70">
              Verwalten Sie alle Einstellungen für Ihre Website und SEO
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container">
          <div className="max-w-[900px]">
            <form onSubmit={handleSave} className="space-y-8">
              {/* General Settings */}
              <div className="bg-white dark:bg-dark-2 rounded-lg border border-gray-200 dark:border-dark-3 p-6 md:p-8">
                <h2 className="text-2xl font-bold text-dark dark:text-white mb-6">
                  Allgemeine Einstellungen
                </h2>

                <div className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-dark dark:text-white mb-2">
                      Website Name
                    </label>
                    <input
                      type="text"
                      name="siteName"
                      value={settings.siteName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-dark-3 rounded-lg bg-white dark:bg-dark-3 text-dark dark:text-white focus:outline-none focus:border-primary"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-dark dark:text-white mb-2">
                      Website Beschreibung
                    </label>
                    <textarea
                      name="siteDescription"
                      value={settings.siteDescription}
                      onChange={handleInputChange}
                      rows={3}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-dark-3 rounded-lg bg-white dark:bg-dark-3 text-dark dark:text-white focus:outline-none focus:border-primary"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-dark dark:text-white mb-2">
                        Kontakt E-Mail
                      </label>
                      <input
                        type="email"
                        name="contactEmail"
                        value={settings.contactEmail}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 dark:border-dark-3 rounded-lg bg-white dark:bg-dark-3 text-dark dark:text-white focus:outline-none focus:border-primary"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-dark dark:text-white mb-2">
                        Telefon
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={settings.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 dark:border-dark-3 rounded-lg bg-white dark:bg-dark-3 text-dark dark:text-white focus:outline-none focus:border-primary"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-dark dark:text-white mb-2">
                      Adresse
                    </label>
                    <input
                      type="text"
                      name="address"
                      value={settings.address}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-dark-3 rounded-lg bg-white dark:bg-dark-3 text-dark dark:text-white focus:outline-none focus:border-primary"
                    />
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-white dark:bg-dark-2 rounded-lg border border-gray-200 dark:border-dark-3 p-6 md:p-8">
                <h2 className="text-2xl font-bold text-dark dark:text-white mb-6">
                  Social Media Links
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {Object.entries(settings.socialMedia).map(([platform, value]) => (
                    <div key={platform}>
                      <label className="block text-sm font-medium text-dark dark:text-white mb-2 capitalize">
                        {platform}
                      </label>
                      <input
                        type="url"
                        value={value as string}
                        onChange={(e) => handleSocialChange(platform, e.target.value)}
                        placeholder={`https://.../${platform}`}
                        className="w-full px-4 py-2 border border-gray-300 dark:border-dark-3 rounded-lg bg-white dark:bg-dark-3 text-dark dark:text-white focus:outline-none focus:border-primary"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* SEO Settings */}
              <div className="bg-white dark:bg-dark-2 rounded-lg border border-gray-200 dark:border-dark-3 p-6 md:p-8">
                <h2 className="text-2xl font-bold text-dark dark:text-white mb-6">
                  SEO Einstellungen
                </h2>

                <div className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-dark dark:text-white mb-2">
                      Standard Page Title
                    </label>
                    <input
                      type="text"
                      value={settings.seo.defaultTitle}
                      onChange={(e) => handleSeoChange("defaultTitle", e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-dark-3 rounded-lg bg-white dark:bg-dark-3 text-dark dark:text-white focus:outline-none focus:border-primary"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-dark dark:text-white mb-2">
                      Standard Meta Description
                    </label>
                    <textarea
                      value={settings.seo.defaultDescription}
                      onChange={(e) => handleSeoChange("defaultDescription", e.target.value)}
                      rows={2}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-dark-3 rounded-lg bg-white dark:bg-dark-3 text-dark dark:text-white focus:outline-none focus:border-primary"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-dark dark:text-white mb-2">
                      Keywords
                    </label>
                    <input
                      type="text"
                      value={settings.seo.keywords}
                      onChange={(e) => handleSeoChange("keywords", e.target.value)}
                      placeholder="Komma-getrennte Keywords"
                      className="w-full px-4 py-2 border border-gray-300 dark:border-dark-3 rounded-lg bg-white dark:bg-dark-3 text-dark dark:text-white focus:outline-none focus:border-primary"
                    />
                  </div>
                </div>
              </div>

              {/* Features */}
              <div className="bg-white dark:bg-dark-2 rounded-lg border border-gray-200 dark:border-dark-3 p-6 md:p-8">
                <h2 className="text-2xl font-bold text-dark dark:text-white mb-6">
                  Funktionen
                </h2>

                <div className="space-y-4">
                  {Object.entries(settings.features).map(([feature, enabled]) => (
                    <label key={feature} className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={enabled}
                        onChange={() => handleFeatureToggle(feature)}
                        className="w-5 h-5 rounded border-gray-300 text-primary focus:ring-primary"
                      />
                      <span className="text-dark dark:text-white font-medium capitalize">
                        {feature.replace(/([A-Z])/g, " $1").trim()}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Save Button */}
              <div className="flex gap-4">
                <button
                  type="submit"
                  disabled={isSaving}
                  className="inline-block px-8 py-3 bg-primary hover:bg-primary/90 text-white rounded-lg font-medium transition disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSaving ? "Wird gespeichert..." : "Einstellungen speichern"}
                </button>

                <Link
                  href="/admin"
                  className="inline-block px-8 py-3 border border-gray-300 dark:border-dark-3 text-gray-700 dark:text-gray-300 rounded-lg font-medium transition hover:border-gray-400"
                >
                  Abbrechen
                </Link>
              </div>

              {message && (
                <div
                  className={`p-4 rounded-lg ${
                    message.startsWith("✅")
                      ? "bg-green-50 text-green-800 dark:bg-green-900/20 dark:text-green-400"
                      : "bg-red-50 text-red-800 dark:bg-red-900/20 dark:text-red-400"
                  }`}
                >
                  {message}
                </div>
              )}
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

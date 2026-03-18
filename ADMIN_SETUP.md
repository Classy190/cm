# Admin Dashboard Dokumentation

## Überblick

Das Admin Dashboard ermöglicht es Ihnen, Blog-Inhalte, Kontaktanfragen und Website-Einstellungen zu verwalten.

## Login

### Admin Login URL
```
/admin/login
```

### Anmeldedaten
Die Admin-Anmeldedaten werden über Umgebungsvariablen konfiguriert:

```
ADMIN_EMAIL=admin@example.com
ADMIN_PASSWORD=your-secure-password
```

Diese Variablen müssen in der `.env.local` Datei definiert werden.

## Features

### 1. Blog Management (`/admin/blog`)
- Neue Blog-Beiträge erstellen
- Bestehende Blog-Beiträge bearbeiten
- Blog-Beiträge löschen
- MDX Format für Inhalte mit Markdown + JSX

**Blog-Struktur:**
Alle Blog-Beiträge befinden sich in `markdown/blogs/` und verwenden das MDX-Format.

### 2. Kontaktanfragen (`/admin/messages`)
- Alle eingehenden Kontaktanfragen anschauen
- Direkt auf Anfragen antworten über eine E-Mail
- Anfragen nach Datum sortiert

### 3. Website-Einstellungen (Bald verfügbar)
- SEO-Einstellungen
- Website-Metadaten
- Branding-Optionen

## Umgebungsvariablen

Fügen Sie folgende Variablen zu Ihrer `.env.local` hinzu:

```env
# NextAuth
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-key-here

# Admin Credentials
ADMIN_EMAIL=admin@example.com
ADMIN_PASSWORD=your-secure-password

# Database
DATABASE_URL=your-database-url

# Email (für Kontaktformular und Benachrichtigungen)
EMAIL_SERVER_HOST=smtp.gmail.com
EMAIL_SERVER_PORT=587
EMAIL_SERVER_USER=your-email@gmail.com
EMAIL_SERVER_PASSWORD=your-app-password
EMAIL_FROM=noreply@classymarketing.de
```

## Sicherheit

⚠️ **Wichtig:** 
- Verwenden Sie starke Passwörter für die Admin-Anmeldedaten
- Speichern Sie Ihre NEXTAUTH_SECRET sicher
- Ändern Sie die Standard-Anmeldedaten nach der Bereitstellung
- Verwenden Sie HTTPS in Produktion

## Datenbasierte Authentifizierung

Die Authentifizierung erfolgt über:
1. Prisma ORM mit PostgreSQL
2. NextAuth mit JWT-Sessions
3. Bcrypt für Passwort-Hashing

## Kontaktanfragen API

### Liste abrufen
```
GET /api/contact?type=list
```

### Neue Anfrage erstellen
```
POST /api/contact
Content-Type: application/json

{
  "fullName": "Max Mustermann",
  "email": "max@example.com",
  "projectType": "Landingpage",
  "timeline": "In 1-3 Monaten",
  "message": "Ich möchte eine Landingpage..."
}
```

## Troubleshooting

### Login funktioniert nicht
- Überprüfen Sie, ob ADMIN_EMAIL und ADMIN_PASSWORD in .env.local definiert sind
- Stellen Sie sicher, dass NEXTAUTH_SECRET definiert ist
- Leeren Sie den Browser-Cache

### Kontaktanfragen werden nicht angezeigt
- Überprüfen Sie die DATABASE_URL
- Stellen Sie sicher, dass die Datenbank korrekt migriert wurde
- Führen Sie `npm run db:push` aus

## Support

Bei Fragen oder Problemen kontaktieren Sie: info@classymarketing.de

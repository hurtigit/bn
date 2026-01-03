# Bollebygdsnyheter

Modern statisk nyhetssajt byggd med Astro och Tina CMS.

![Bollebygdsnyheter](https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1200&h=400&fit=crop)

## ✨ Funktioner

- **Statisk sajt** - Snabb, säker och billig att hosta
- **Tina CMS** - Visuell redigering direkt i webbläsaren
- **Responsiv design** - Fungerar på alla enheter
- **Sökfunktion** - Sök bland alla artiklar
- **Kategorier** - Filtrera artiklar efter ämne
- **SEO-optimerad** - Sitemap och meta-taggar

## 🚀 Snabbstart

### Förutsättningar

- Node.js 18+
- npm eller yarn
- Git

### Installation

```bash
# Klona repot
git clone https://github.com/dittanvändarnamn/bollebygdsnyheter.git
cd bollebygdsnyheter

# Installera dependencies
npm install

# Starta utvecklingsservern med Tina CMS
npm run dev
```

Öppna [http://localhost:4321](http://localhost:4321) i din webbläsare.

### Tina CMS

För att redigera innehåll, gå till [http://localhost:4321/admin](http://localhost:4321/admin) när utvecklingsservern körs.

## 📁 Projektstruktur

```
bollebygdsnyheter/
├── public/              # Statiska filer (bilder, favicon)
├── src/
│   ├── components/      # Återanvändbara komponenter
│   ├── content/
│   │   └── articles/    # Markdown-artiklar
│   ├── layouts/         # Sidmallar
│   ├── pages/           # Sidor och routes
│   └── styles/          # Global CSS
├── tina/                # Tina CMS-konfiguration
├── astro.config.mjs     # Astro-konfiguration
└── package.json
```

## ✍️ Skapa ny artikel

### Via Tina CMS (rekommenderat)

1. Starta utvecklingsservern: `npm run dev`
2. Gå till http://localhost:4321/admin
3. Klicka på "Artiklar" → "Skapa ny"
4. Fyll i rubrik, text och bild
5. Spara

### Via Markdown

Skapa en ny `.md`-fil i `src/content/articles/`:

```markdown
---
title: "Rubrik på artikeln"
excerpt: "Kort sammanfattning"
date: 2025-01-03
author: "Ditt namn"
category: "nyheter"
image: "https://example.com/bild.jpg"
imageAlt: "Bildbeskrivning"
featured: false
---

Artikelns innehåll här...
```

## 🌐 Deploy

### GitHub Pages (gratis)

1. Pusha koden till GitHub
2. Gå till Settings → Pages
3. Välj "GitHub Actions" som källa
4. Sajten publiceras automatiskt vid varje push

### Digital Ocean (produktion)

1. Skapa ett App Platform-projekt
2. Koppla till ditt GitHub-repo
3. Konfigurera:
   - Build Command: `npm run build`
   - Output Directory: `dist`
4. Deploy!

## 🔧 Konfiguration

### Ändra basväg

Om sajten ska ligga på en annan sökväg, ändra i `astro.config.mjs`:

```js
export default defineConfig({
  site: 'https://dindomän.se',
  base: '/', // Ändra till rätt sökväg
});
```

### Tina Cloud (för live-redigering)

1. Skapa konto på [tina.io](https://tina.io)
2. Skapa ett projekt och hämta `clientId` och `token`
3. Lägg till som miljövariabler:
   ```
   TINA_CLIENT_ID=ditt-client-id
   TINA_TOKEN=din-token
   ```

## 🎨 Anpassa design

Redigera `src/styles/global.css` för att ändra:

- **Färger** - CSS-variabler under `:root`
- **Typografi** - Font-variabler och storlekar
- **Layout** - Max-bredd och spacing

## 📝 Licens

MIT

---

Byggt med ❤️ för Bollebygd

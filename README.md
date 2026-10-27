# Disaster Delivery website

A complete, responsive promotional website for the Roblox game. Custom illustrated city, animated hero, 12-vehicle filterable showroom, comparison tool, interactive six-district guide, progression, optional passes, development notes, and player FAQ. No backend, database, login, or dependency installation required.

## Preview locally

From this directory:

```powershell
python -m http.server 4187 --bind 127.0.0.1 --directory dist
```

Open http://127.0.0.1:4187. Do not open index.html directly: assets use site-root paths.

## Deploy to Vercel

1. Commit this website directory to your Git repository and import the repository in Vercel.
2. Set **Root Directory** to `disaster-delivery/website` if your repository starts at the `game` folder. If you upload only the contents of this website directory into a new repository, leave Root Directory empty. If the repository starts at `disaster-delivery`, use `website`.
3. Set **Framework Preset** to **Other**. Leave **Build Command** empty. **Output Directory** is `dist` (also configured in vercel.json).
4. Deploy. Vercel provides a URL; connect your own domain in the project’s domain settings if desired.

Alternatively, run `npx vercel` from this directory and follow the login/project prompts. This project does not contain deployment credentials and has not been published by Codex.

Official reference: https://vercel.com/docs/builds/configure-a-build

## Editing

- `dist/index.html`: page sections, copy, navigation, Roblox links, metadata.
- `dist/style.css`: visual design, responsive layouts, animations. Google Fonts are optional; system fallbacks remain functional if unavailable.
- `dist/app.js`: vehicle data, illustrative vehicle art, district guide, menus, filters, comparison, clipboard and reveal animations.
- `dist/favicon.svg`: parcel brand mark.
- `dist/404.html`: custom missing-page screen.
- `vercel.json`: static output and response headers.

Vehicle stats and notes reflect the local development build on 27 October 2026. Scooter is starter owned. Premium coupe/supercar prices are intentionally not shown as cash purchases. All purchases link to Roblox; no payment or account data is collected. No fabricated live counts, player data, or event schedules. Update the notes when releasing a new game build. Website illustrations are original SVG concepts, not screenshots of the game’s exact models.

The website respects reduced-motion preferences, supports keyboard navigation, and uses touch-sized controls. It includes no analytics or tracking scripts. Google Fonts requests are the only external resource loads; Roblox opens only on following a link.

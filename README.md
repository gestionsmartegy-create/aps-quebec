# APS Québec — Site Web

Site web officiel du programme **Agents de Proximité Santé (APS) Québec**.

## Stack Technologique

- **React 19** + **TypeScript**
- **Vite 6** (build tool)
- **Tailwind CSS 3** (styling)
- **Wouter** (routing)
- **Framer Motion** (animations)
- **Lucide React** (icônes)

## Installation

```bash
npm install
# ou
pnpm install
```

## Développement

```bash
npm run dev
```

Le site sera accessible sur `http://localhost:5173`

## Build

```bash
npm run build
```

Les fichiers de production seront dans le dossier `dist/`.

## Déploiement

Le dossier `dist/` peut être déployé sur :
- **Vercel** : `vercel --prod`
- **Netlify** : glisser le dossier `dist/` dans l'interface
- **GitHub Pages** : utiliser `gh-pages`

## Structure

```
src/
  pages/
    APSHome.tsx          ← Page principale (accueil)
    APSServices.tsx      ← 6 pages services dédiées
  components/
    APSNavbar.tsx        ← Navigation avec dropdown Services
    APSServicePage.tsx   ← Composant réutilisable pages services
  lib/
    utils.ts             ← Utilitaires
  App.tsx                ← Routes
  main.tsx               ← Point d'entrée
  index.css              ← Styles globaux APS
```

## Pages

| Route | Description |
|-------|-------------|
| `/` | Page d'accueil APS Québec |
| `/services/livraison` | Livraison Last-Mile |
| `/services/accompagnement` | Accompagnement patient |
| `/services/sortie-hopital` | Soutien à la sortie d'hôpital |
| `/services/residences` | Services RI / RPA / RTF |
| `/services/sante-mentale` | Santé mentale & bien-être |
| `/services/iot` | Soins à domicile & IoT |

## Liens externes

- **App APS Connect** : https://first-aps-care-flow.base44.app
- **Site Vaistat** : https://vaistat.com

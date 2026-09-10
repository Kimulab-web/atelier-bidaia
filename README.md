# Atelier Bidaia — site web

Site vitrine + boutique + réservation d'ateliers de couture, développé avec [Astro](https://astro.build).

## Stack

- **Astro 5** — génération statique, très rapide, SEO-friendly
- **TypeScript strict**
- **Stripe Payment Links** — boutique et réservation d'ateliers (un lien par produit / créneau)
- **Contenu** géré en Markdown/MDX via les Content Collections d'Astro

## Structure

```
src/
├── components/     # Composants réutilisables (Header, Footer, Card...)
├── layouts/        # Layouts de page (BaseLayout.astro)
├── pages/          # Routes du site (chaque .astro = une page)
├── content/        # Content collections
│   ├── ateliers/   # Un .md par atelier proposé
│   └── creations/  # Un .md par création en boutique
├── styles/         # CSS global
└── assets/         # Images optimisées par Astro
public/             # Fichiers servis tels quels (favicon, logo…)
```

## Commandes

| Commande            | Action                                    |
| :------------------ | :---------------------------------------- |
| `npm install`       | Installe les dépendances                  |
| `npm run dev`       | Lance le serveur de dev (localhost:4321)  |
| `npm run build`     | Build le site pour la prod → `./dist/`    |
| `npm run preview`   | Prévisualise le build localement          |

## Déploiement

Le site étant statique, il se déploie sur n'importe quel hébergeur JAMstack :

- **Netlify** ou **Vercel** — gratuit, HTTPS auto, déploiement sur push git
- **OVH / o2switch** — via FTP en uploadant le contenu de `dist/`
- **Cloudflare Pages** — gratuit, très rapide

## Réservation d'ateliers

Chaque atelier a son propre **Stripe Payment Link** créé depuis le dashboard Stripe.
Le lien est renseigné dans le frontmatter du fichier `.md` de l'atelier
(`src/content/ateliers/nom-atelier.md`). Le bouton "Réserver" du site pointe dessus.

- Places limitées : configurées dans Stripe (inventory)
- Rappels et reçus : gérés automatiquement par Stripe
- Annulations : à traiter manuellement dans le dashboard Stripe


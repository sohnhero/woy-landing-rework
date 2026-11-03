# WÔY Academy — React 19 + Vite

Landing page interactive et responsive de WÔY Academy, convertie en React 19 avec Vite, offrant un rendu pixel-perfect identique à la version originale.

## Démarrage rapide

```bash
# Lancer le serveur de développement
npm run dev

# Générer le bundle de production
npm run build

# Prévisualiser la version de production
npm run preview
```

## Structure du projet

- `src/` :
  - `components/` : composants React modulaires (Hero, Navbar, Manifesto, RouteSection, Practice, ProductSection, SpiritSection, FaqSection, ClosingSection, Footer, Dialogs, etc.)
  - `hooks/useMotion.js` : gestion des animations canvas, parallax, sticky scroll, tilt 3D et boutons magnétiques
  - `styles/` : feuilles de style CSS préservées à l'identique (`styles.css`, `motion.css`, `organic.css`)
  - `data.js` : données statiques (niveaux du parcours, quiz, FAQ, mentions légales)
- `public/assets/` : assets statiques (images 3D, icônes, polices locales)
- `legacy-vanilla/` : sauvegarde complète de la version HTML/JS vanilla d'origine

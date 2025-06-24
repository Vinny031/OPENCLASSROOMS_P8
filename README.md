# OPENCLASSROOMS_P8

![GitHub last commit](https://img.shields.io/github/last-commit/Vinny031/OPENCLASSROOMS_P8)
![GitHub issues](https://img.shields.io/github/issues/Vinny031/OPENCLASSROOMS_P8)
![GitHub pull requests](https://img.shields.io/github/issues-pr/Vinny031/OPENCLASSROOMS_P8)

## Description du projet

OPENCLASSROOMS_P8 est un projet de portfolio développé pour démontrer les compétences en développement web. Ce projet met en avant les projets réalisés, les compétences acquises et permet aux utilisateurs de contacter le développeur. Il est construit avec React et utilise une architecture de composants pour une meilleure réutilisabilité et maintenabilité.

### Fonctionnalités clés
- Présentation des projets avec des cartes interactives
- Section de contact pour permettre aux utilisateurs d'envoyer des messages
- Affichage des compétences techniques
- Gestion des erreurs avec une page dédiée

## Tech Stack

| Technologie       | Description                                      |
|-------------------|--------------------------------------------------|
| ![React](https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg) React          | Bibliothèque JavaScript pour construire des interfaces utilisateur |
| ![Sass](https://upload.wikimedia.org/wikipedia/commons/d/d6/Sass_Logo.svg) Sass            | Préprocesseur CSS pour des styles plus dynamiques |
| ![Vite](https://vitejs.dev/logo.svg) Vite              | Outil de construction et de développement rapide |

## Instructions d'installation

### Prérequis
- Node.js (version 14 ou supérieure)
- npm (généralement installé avec Node.js)

### Guide d'installation
1. Clonez le dépôt :
   ```bash
   git clone https://github.com/Vinny031/OPENCLASSROOMS_P8.git
   ```
2. Accédez au répertoire du projet :
   ```bash
   cd OPENCLASSROOMS_P8
   ```
3. Installez les dépendances :
   ```bash
   npm install
   ```

### Configuration de l'environnement
Aucune configuration d'environnement spécifique n'est requise pour ce projet.

## Utilisation

Pour démarrer le projet en mode développement, exécutez :
```bash
npm run dev
```
Cela lancera le serveur de développement et vous pourrez accéder à l'application via `http://localhost:3000`.

## Structure du projet

Voici un aperçu de la structure du projet :

```
OPENCLASSROOMS_P8/
├── public/                  # Contient les fichiers statiques
│   ├── assets/              # Ressources graphiques et fichiers
│   ├── data/                # Données JSON pour les projets et compétences
│   └── favicon.webp         # Icône du site
├── src/                     # Code source de l'application
│   ├── components/          # Composants réutilisables
│   ├── pages/               # Pages de l'application
│   ├── styles/              # Fichiers de style
│   ├── App.jsx              # Composant principal de l'application
│   └── index.jsx            # Point d'entrée de l'application
├── .gitignore               # Fichiers à ignorer par Git
├── eslint.config.js         # Configuration ESLint
├── index.html               # Fichier HTML principal
├── package.json             # Dépendances et scripts du projet
└── vite.config.js           # Configuration de Vite
```

### Explication des répertoires
- **public/** : Contient les fichiers accessibles publiquement, tels que les images et les données.
- **src/** : Contient le code source de l'application, y compris les composants, les pages et les styles.

## Contribuer

Les contributions sont les bienvenues ! Pour contribuer, veuillez suivre ces étapes :
1. Forkez le projet.
2. Créez une nouvelle branche (`git checkout -b feature/nouvelle-fonctionnalité`).
3. Effectuez vos modifications et validez-les (`git commit -m 'Ajout d'une nouvelle fonctionnalité'`).
4. Poussez vos modifications (`git push origin feature/nouvelle-fonctionnalité`).
5. Ouvrez une pull request.

Lien vers l'application : https://vincent-fuseau-portfolio.netlify.app/

# 🌸 Témoignages École des Guérisseuses

Application de gestion des témoignages avec intégration Notion.

## 📋 Prérequis

- Un compte GitHub
- Un compte Netlify (gratuit)
- Une intégration Notion avec clé API
- Une database Notion configurée

## 🚀 Déploiement sur Netlify

### Étape 1 : Pousser sur GitHub

1. Crée un nouveau repository sur GitHub
2. Clone ce repository sur ton ordinateur
3. Copie tous les fichiers de ce dossier dans le repository
4. Commit et push :

```bash
git add .
git commit -m "Initial commit"
git push origin main
```

### Étape 2 : Déployer sur Netlify

1. Va sur https://app.netlify.com
2. Clique sur "Add new site" → "Import an existing project"
3. Choisis "Deploy with GitHub"
4. Autorise Netlify à accéder à tes repositories
5. Sélectionne ton repository `temoignages-edg`
6. Netlify détectera automatiquement la configuration
7. Clique "Deploy site"
8. Attends 2-3 minutes

### Étape 3 : Utiliser l'app

1. Ouvre l'URL fournie par Netlify
2. Entre ta clé API Notion et ton Database ID
3. Clique "Enregistrer" puis "Tester la connexion"
4. ✅ Profite !

## 📁 Structure du projet

```
temoignages-edg/
├── index.html                      # Application frontend
├── netlify.toml                    # Configuration Netlify
├── package.json                    # Dépendances Node.js
├── netlify/
│   └── functions/
│       └── notion-api.js          # Fonction backend pour Notion API
└── README.md                       # Ce fichier
```

## 🔧 Configuration Notion

### Database Notion - Colonnes requises :

| Nom | Type |
|-----|------|
| Prénom | Text |
| Nom | Text |
| Date | Date |
| Heure | Text |
| Message | Text |
| Statut | Select (Non publié, Publié, Programmé) |
| Date publication | Date |
| Plateformes | Multi-select (Instagram, Facebook, LinkedIn, Site Web) |
| Notes | Text |
| Score | Number |

### Créer l'intégration Notion :

1. Va sur https://www.notion.so/my-integrations
2. Crée une nouvelle intégration "App Témoignages EDG"
3. Copie la clé API (`secret_...`)
4. Connecte l'intégration à ta database

## 🎨 Fonctionnalités

- ✅ Import CSV/JSON de témoignages
- ✅ Filtres par statut et longueur
- ✅ Recherche en temps réel
- ✅ Édition et publication
- ✅ Export CSV
- ✅ Synchronisation avec Notion
- ✅ Design aux couleurs de l'École

## 🔐 Sécurité

- Les clés API sont stockées localement dans le navigateur
- Les fonctions Netlify font office de proxy sécurisé
- Aucune donnée sensible n'est exposée côté client

## 📞 Support

Pour toute question : contact@ecoledeguerisseuses.fr

---

Fait avec 💜 pour l'École des Guérisseuses

# 🚀 GUIDE DE DÉPLOIEMENT - ÉTAPE PAR ÉTAPE

## ✅ CE QUI A ÉTÉ FAIT

J'ai créé une version complète de l'app avec :
- ✅ Frontend (index.html) avec les couleurs de l'École
- ✅ Backend (fonctions Netlify) pour contourner les problèmes CORS
- ✅ Configuration Netlify automatique
- ✅ Tout prêt à déployer !

---

## 📦 ÉTAPE 1 : METTRE LE PROJET SUR GITHUB (5 min)

### Option A : Via l'interface GitHub (PLUS SIMPLE)

1. **Va sur ton repository GitHub existant** : https://github.com/ronan-arch/temoignages-edg

2. **Supprime l'ancien fichier** :
   - Clique sur `index.html`
   - Clique sur l'icône poubelle 🗑️
   - Commit : "Remove old file"

3. **Upload les nouveaux fichiers** :
   - Clique sur "Add file" → "Upload files"
   - **IMPORTANT** : Glisse le **DOSSIER COMPLET** `temoignages-netlify` (pas juste index.html)
   - Ou glisse tous les fichiers à l'intérieur :
     - index.html
     - package.json
     - netlify.toml
     - .gitignore
     - README.md
     - Le dossier `netlify/` (avec son contenu)
   - Commit : "Add Netlify version"

### Option B : Via Git en ligne de commande (si tu es à l'aise)

```bash
cd ~/Downloads/temoignages-netlify
git init
git add .
git commit -m "Initial commit with Netlify functions"
git remote add origin https://github.com/ronan-arch/temoignages-edg.git
git push -f origin main
```

---

## 🌐 ÉTAPE 2 : DÉPLOYER SUR NETLIFY (5 min)

### 1. Créer un compte Netlify

1. Va sur **https://app.netlify.com**
2. Clique "Sign up"
3. **Choisis "Sign up with GitHub"** (le plus simple)
4. Autorise Netlify à accéder à tes repositories

### 2. Créer un nouveau site

1. Une fois connecté, clique sur **"Add new site"** (bouton vert)
2. Choisis **"Import an existing project"**
3. Clique sur **"Deploy with GitHub"**
4. **Autorise Netlify** si demandé
5. Tu verras la liste de tes repositories

### 3. Sélectionner ton repository

1. Cherche et clique sur **"ronan-arch/temoignages-edg"**
2. Netlify va détecter la configuration automatiquement :
   - Build command : (vide, c'est normal)
   - Publish directory : `.` (vide aussi, c'est normal)
   - Functions directory : `netlify/functions` (détecté auto)

3. **NE CHANGE RIEN** et clique sur **"Deploy site"**

### 4. Attendre le déploiement

1. Netlify va :
   - Installer les dépendances (node-fetch)
   - Déployer les fonctions
   - Publier le site
   
2. **Attends 2-3 minutes** (tu verras une barre de progression)

3. Une fois terminé, tu verras :
   ```
   ✅ Site is live
   https://random-name-123.netlify.app
   ```

### 5. (Optionnel) Personnaliser l'URL

1. Va dans **"Site settings"**
2. **"Change site name"**
3. Entre : `temoignages-edg` (ou ce que tu veux)
4. Ton URL devient : `https://temoignages-edg.netlify.app`

---

## 🎯 ÉTAPE 3 : TESTER L'APP (2 min)

1. **Ouvre l'URL Netlify** dans ton navigateur

2. **Entre tes identifiants Notion** :
   - Clé API : `secret_...`
   - Database ID : (tes 32 caractères)

3. **Clique "Enregistrer"**

4. **Clique "Tester la connexion"**

5. 🎉 **Tu devrais voir "Connexion réussie ✓"**

6. Le panneau de config disparaît et tu vois l'app !

---

## 💡 ÉTAPE 4 : INTÉGRER DANS NOTION (1 min)

### Dans ta page Notion :

1. Tape `/embed`
2. Colle ton URL Netlify : `https://temoignages-edg.netlify.app`
3. Appuie sur Entrée
4. Ajuste la taille de l'embed
5. ✅ Toute l'équipe peut y accéder depuis Notion !

---

## 🔧 DÉPANNAGE

### ❌ "Failed to fetch" après déploiement

**Cause** : Netlify n'a pas détecté les fonctions

**Solution** :
1. Va dans ton dashboard Netlify
2. Onglet "Functions"
3. Tu dois voir `notion-api` dans la liste
4. Si absent, vérifie que le dossier `netlify/functions/` existe bien sur GitHub

### ❌ "Notion API error"

**Cause** : Problème de configuration Notion

**Solution** :
1. Vérifie que ta clé API est correcte
2. Vérifie que ton Database ID est correct (32 caractères)
3. Vérifie que l'intégration est connectée à la database (dans Notion : "..." → "Connections")

### ❌ Les témoignages n'apparaissent pas

**Cause** : Database vide ou colonnes mal nommées

**Solution** :
1. Vérifie que les colonnes Notion ont exactement ces noms :
   - Prénom, Nom, Date, Heure, Message, Statut, Date publication, Plateformes, Notes, Score
2. Importe quelques témoignages de test

---

## 📞 BESOIN D'AIDE ?

Si tu bloques quelque part :
1. Prends une capture d'écran
2. Note à quelle étape tu es
3. Partage-moi ça et je t'aide !

---

## 🎉 UNE FOIS QUE ÇA MARCHE

Tu pourras :
- ✅ Partager l'URL avec Mélodie, Amélie et l'équipe
- ✅ Importer tes témoignages Circle en masse
- ✅ Filtrer, trier, publier depuis l'interface jolie
- ✅ Toutes les données sont dans Notion (backup auto)
- ✅ Accessible de partout, sur tous les appareils

---

Bon courage ! Tu y es presque ! 💪✨

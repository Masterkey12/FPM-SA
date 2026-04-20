# 📥 INSTRUCTIONS DE TÉLÉCHARGEMENT ET D'INSTALLATION

## Bienvenue !

Ce guide vous accompagne étape par étape pour télécharger, installer et mettre en ligne votre site web FPM.

---

## 🎯 OPTION 1 : MISE EN LIGNE RAPIDE (RECOMMANDÉ - 5 MINUTES)

### Étape 1 : Téléchargez le site

1. **Téléchargez** le fichier ZIP complet du site
2. **Décompressez** le fichier ZIP sur votre ordinateur
3. Vous devriez avoir un dossier `fpm-website-export` contenant :
   - index.html
   - Un dossier `pages/`
   - Un dossier `css/`
   - Un dossier `js/`
   - Un dossier `images/`

### Étape 2 : Créez un compte Netlify (GRATUIT)

1. Allez sur **https://www.netlify.com**
2. Cliquez sur **"Sign up"** (S'inscrire)
3. Choisissez **"Sign up with email"** ou utilisez GitHub/GitLab
4. Confirmez votre email

### Étape 3 : Déployez votre site

1. Une fois connecté à Netlify, vous verrez **"Want to deploy a new site without connecting to Git?"**
2. **Glissez-déposez** le dossier `fpm-website-export` entier dans la zone
3. Attendez 30 secondes... **C'est en ligne !** 🎉
4. Netlify vous donne une URL du type : `https://random-name-123456.netlify.app`

### Étape 4 : Personnalisez le nom de votre site

1. Cliquez sur **"Site settings"**
2. Cliquez sur **"Change site name"**
3. Entrez : `fpm-congo` (ou le nom de votre choix)
4. Votre site sera accessible à : `https://fpm-congo.netlify.app`

### Étape 5 : Configurez votre domaine personnalisé (OPTIONNEL)

Si vous avez acheté un nom de domaine (ex: www.fpm.cd) :

1. Dans Netlify, allez dans **"Domain management"**
2. Cliquez sur **"Add custom domain"**
3. Entrez votre domaine : `www.fpm.cd`
4. Suivez les instructions pour configurer les DNS

**✅ TERMINÉ ! Votre site est en ligne et accessible au monde entier.**

---

## 🖥️ OPTION 2 : TESTER EN LOCAL (AVANT MISE EN LIGNE)

### Méthode simple : Ouvrir directement

1. Ouvrez le dossier `fpm-website-export`
2. Double-cliquez sur `index.html`
3. Le site s'ouvre dans votre navigateur par défaut
4. **Navigation** : Cliquez sur les liens pour explorer les pages

### Méthode professionnelle : Live Server

1. **Téléchargez VS Code** : https://code.visualstudio.com
2. **Installez l'extension "Live Server"** :
   - Ouvrez VS Code
   - Cliquez sur l'icône Extensions (carré à gauche)
   - Cherchez "Live Server"
   - Cliquez sur "Install"
3. **Ouvrez le projet** :
   - File > Open Folder
   - Sélectionnez `fpm-website-export`
4. **Lancez le serveur** :
   - Clic droit sur `index.html`
   - Sélectionnez "Open with Live Server"
5. Le site s'ouvre automatiquement dans votre navigateur !

**Avantage** : Les modifications sont visibles instantanément sans recharger la page.

---

## 📸 OPTION 3 : AJOUTER VOS PROPRES IMAGES

### Images requises

Placez ces images dans le dossier `images/` :

| Fichier | Description | Dimensions recommandées |
|---------|-------------|------------------------|
| `hero-home.jpg` | Hero page d'accueil | 1920x600px |
| `hero-fpm-sa.jpg` | Hero FPM SA | 1920x600px |
| `hero-fpm-asbl.jpg` | Hero FPM ASBL | 1920x600px |
| `hero-services.jpg` | Hero Services | 1920x600px |
| `hero-impact.jpg` | Hero Impact | 1920x600px |
| `hero-about.jpg` | Hero À propos | 1920x600px |
| `hero-careers.jpg` | Hero Carrières | 1920x600px |
| `hero-contact.jpg` | Hero Contact | 1920x600px |
| `map-rdc.png` | Carte RDC | 1200x800px |
| `logo-fpm.png` | Logo FPM | 200x200px |

### Comment ajouter une image :

1. **Préparez votre image** :
   - Format : JPEG pour photos, PNG pour logos
   - Optimisez avec https://tinypng.com (réduit le poids sans perte de qualité)
   - Renommez selon le tableau ci-dessus

2. **Placez l'image** :
   - Copiez votre image dans le dossier `images/`

3. **Vérifiez** :
   - Ouvrez le site en local
   - L'image doit s'afficher correctement

### Si une image ne s'affiche pas :

- Vérifiez l'orthographe exacte du nom de fichier (respectez les majuscules/minuscules)
- Vérifiez que l'image est bien dans le dossier `images/`
- Vérifiez que le format est bien `.jpg` ou `.png`

---

## ✏️ OPTION 4 : MODIFIER LES TEXTES

### Méthode simple : Notepad

1. Ouvrez le dossier `fpm-website-export`
2. **Clic droit** sur le fichier à modifier (ex: `index.html`)
3. Sélectionnez **"Ouvrir avec"** > **"Bloc-notes"** (Windows) ou **"TextEdit"** (Mac)
4. Modifiez le texte entre les balises HTML
5. **Enregistrez** : Fichier > Enregistrer (ou Ctrl+S)

### Méthode professionnelle : VS Code

1. Ouvrez VS Code
2. Ouvrez le dossier `fpm-website-export`
3. Cliquez sur le fichier à modifier dans la barre latérale
4. Modifiez le texte
5. Enregistrez : Ctrl+S (Windows) ou Cmd+S (Mac)

### Exemples de modifications :

#### Modifier le titre de la page d'accueil :

```html
<!-- Cherchez cette ligne dans index.html : -->
<h1 class="hero-title">Catalyseur de l'inclusion financière en RDC</h1>

<!-- Remplacez par votre texte : -->
<h1 class="hero-title">Votre nouveau titre ici</h1>
```

#### Modifier une adresse email :

```html
<!-- Cherchez : -->
<p>✉️ contact@fpm.cd</p>

<!-- Remplacez par : -->
<p>✉️ votre-email@fpm.cd</p>
```

#### Modifier un numéro de téléphone :

```html
<!-- Cherchez : -->
<p>📞 +243 XX XXX XXXX</p>

<!-- Remplacez par : -->
<p>📞 +243 81 234 5678</p>
```

---

## 🎨 OPTION 5 : MODIFIER LES COULEURS

Les couleurs FPM sont déjà configurées, mais vous pouvez les ajuster :

1. Ouvrez le fichier `css/styles.css`
2. Cherchez ces lignes au début du fichier :

```css
:root {
  --fpm-blue-dark: #00467F;
  --fpm-cyan: #00AFEF;
  --fpm-red: #EF4135;
}
```

3. Remplacez les codes couleurs :
   - `#00467F` = Bleu foncé
   - `#00AFEF` = Cyan
   - `#EF4135` = Rouge

4. Enregistrez et rechargez la page

**Astuce** : Utilisez https://coolors.co pour choisir des couleurs harmonieuses.

---

## 📧 OPTION 6 : CONFIGURER LE FORMULAIRE DE CONTACT

### Méthode rapide : Formspree (GRATUIT)

1. Allez sur **https://formspree.io**
2. Cliquez sur **"Get Started"**
3. Créez un compte (gratuit)
4. Créez un nouveau formulaire
5. Copiez l'URL donnée (ressemble à : `https://formspree.io/f/abc123xyz`)
6. Ouvrez `pages/contact.html`
7. Cherchez cette ligne :

```html
<form id="contact-form">
```

8. Remplacez par :

```html
<form id="contact-form" action="https://formspree.io/f/VOTRE_CODE_ICI" method="POST">
```

9. Enregistrez et testez !

**Les emails de contact arriveront directement dans votre boîte email.**

### Méthode Netlify Forms (si hébergé sur Netlify)

1. Ouvrez `pages/contact.html`
2. Cherchez : `<form id="contact-form">`
3. Remplacez par : `<form name="contact" method="POST" netlify>`
4. C'est tout ! Netlify gère automatiquement les soumissions

---

## 🌐 OPTION 7 : CONNECTER UN NOM DE DOMAINE

Vous avez acheté **www.fpm.cd** ? Voici comment le connecter :

### Chez Netlify :

1. **Dans Netlify** :
   - Allez dans "Domain management"
   - Cliquez "Add custom domain"
   - Entrez : `fpm.cd` (sans www)
   - Cliquez "Verify"

2. **Chez votre registrar** (où vous avez acheté le domaine) :
   - Connectez-vous à votre compte
   - Allez dans "DNS Settings" ou "Gestion DNS"
   - Ajoutez ces enregistrements :
   
   | Type | Nom | Valeur |
   |------|-----|--------|
   | A | @ | 75.2.60.5 |
   | CNAME | www | votre-site.netlify.app |

3. Attendez 24-48h pour la propagation DNS

4. **Activez HTTPS** (dans Netlify) :
   - Automatique avec Let's Encrypt
   - Gratuit et sécurisé

---

## 🔧 DÉPANNAGE

### ❌ Problème : Le site ne s'affiche pas

**Solutions** :
- Vérifiez que tous les fichiers sont présents
- Essayez un autre navigateur (Chrome, Firefox)
- Videz le cache du navigateur (Ctrl+Shift+R)

### ❌ Problème : Les images ne s'affichent pas

**Solutions** :
- Vérifiez que les images sont dans le dossier `images/`
- Vérifiez l'orthographe exacte des noms de fichiers
- Vérifiez que vous avez une connexion internet (pour les images Unsplash)

### ❌ Problème : Le menu mobile ne fonctionne pas

**Solutions** :
- Vérifiez que le fichier `js/main.js` est présent
- Ouvrez la console du navigateur (F12) et cherchez les erreurs
- Essayez de recharger la page

### ❌ Problème : Le formulaire ne fonctionne pas

**Solutions** :
- Vérifiez que vous avez configuré Formspree (voir Option 6)
- Vérifiez que l'URL de Formspree est correcte
- Testez avec un email valide

---

## 📞 BESOIN D'AIDE ?

### Support gratuit :

- **Documentation** : Lisez le fichier `README.md` complet
- **Netlify** : https://docs.netlify.com
- **Formspree** : https://help.formspree.io

### Support technique FPM :

- **Email** : webmaster@fpm.cd
- **Téléphone** : +243 XX XXX XXXX

---

## ✅ CHECKLIST FINALE AVANT MISE EN LIGNE

Cochez chaque élément avant de mettre votre site en ligne :

- [ ] J'ai testé le site en local et tout fonctionne
- [ ] J'ai ajouté toutes mes images personnalisées
- [ ] J'ai modifié les informations de contact (email, téléphone)
- [ ] J'ai configuré le formulaire de contact
- [ ] J'ai testé le formulaire de contact
- [ ] J'ai vérifié tous les liens (ils ne sont pas cassés)
- [ ] J'ai relu tous les textes (pas de fautes)
- [ ] J'ai testé sur mobile (responsive)
- [ ] J'ai testé sur différents navigateurs
- [ ] J'ai configuré mon nom de domaine (si applicable)
- [ ] J'ai activé HTTPS (certificat SSL)

---

## 🎉 FÉLICITATIONS !

Vous avez maintenant un site web professionnel et fonctionnel pour le FPM !

### Prochaines étapes recommandées :

1. **Partagez** : Communiquez le lien de votre site
2. **SEO** : Soumettez votre site à Google Search Console
3. **Analytics** : Installez Google Analytics pour suivre les visiteurs
4. **Maintenance** : Mettez à jour régulièrement le contenu
5. **Sauvegarde** : Gardez une copie de sauvegarde de tous les fichiers

---

**Créé avec ❤️ pour le FPM**

*Besoin d'aide ? Contactez-nous : webmaster@fpm.cd*

# Site Web FPM - Version HTML/CSS Statique

## 📋 Description

Site web complet du **Fonds pour l'inclusion financière (FPM)** en République Démocratique du Congo, comprenant deux entités distinctes :
- **FPM SA** : Société d'investissement et de financement
- **FPM ASBL** : Assistance technique et renforcement des capacités

## 🎨 Couleurs officielles de la marque

- **Bleu foncé** : #00467F (principal)
- **Cyan** : #00AFEF (secondaire)
- **Rouge** : #EF4135 (accent)

## 📁 Structure du projet

```
fpm-website-export/
├── index.html              # Page d'accueil
├── pages/
│   ├── fpm-sa.html        # Page FPM SA
│   ├── fpm-asbl.html      # Page FPM ASBL
│   ├── services.html      # Page Services
│   ├── impact.html        # Page Impact
│   ├── publications.html  # Page Publications
│   ├── about.html         # Page À propos
│   ├── careers.html       # Page Carrières
│   └── contact.html       # Page Contact
├── css/
│   └── styles.css         # Feuille de styles complète
├── js/
│   └── main.js            # JavaScript pour les interactions
├── images/                # Dossier pour les images
│   └── README-IMAGES.md   # Instructions pour les images
└── README.md              # Ce fichier
```

## 🚀 Installation et déploiement

### Option 1 : Ouvrir localement

1. Téléchargez le dossier complet `fpm-website-export`
2. Ouvrez le fichier `index.html` dans votre navigateur web
3. C'est prêt ! Le site fonctionne sans serveur

### Option 2 : Hébergement web

Le site peut être hébergé sur n'importe quel serveur web statique :

#### Hébergement gratuit recommandé :
- **Netlify** : https://www.netlify.com
- **Vercel** : https://vercel.com
- **GitHub Pages** : https://pages.github.com
- **Cloudflare Pages** : https://pages.cloudflare.com

#### Instructions pour Netlify (le plus simple) :

1. Créez un compte sur https://www.netlify.com
2. Glissez-déposez le dossier `fpm-website-export` dans Netlify
3. Votre site est en ligne en quelques secondes !
4. Netlify vous fournira une URL du type : `https://votre-site.netlify.app`

#### Instructions pour hébergement traditionnel :

1. Connectez-vous à votre hébergeur (cPanel, FTP, etc.)
2. Téléchargez tous les fichiers dans le dossier `public_html` ou `www`
3. Assurez-vous que `index.html` est à la racine
4. Visitez votre domaine

## 🖼️ Images

### Images requises

Les images suivantes doivent être placées dans le dossier `/images/` :

1. **hero-home.jpg** - Image hero de la page d'accueil (1920x600px recommandé)
2. **hero-fpm-sa.jpg** - Image hero FPM SA (1920x600px)
3. **hero-fpm-asbl.jpg** - Image hero FPM ASBL (1920x600px)
4. **hero-services.jpg** - Image hero Services (1920x600px)
5. **hero-impact.jpg** - Image hero Impact (1920x600px)
6. **hero-about.jpg** - Image hero À propos (1920x600px)
7. **hero-careers.jpg** - Image hero Carrières (1920x600px)
8. **hero-contact.jpg** - Image hero Contact (1920x600px)
9. **map-rdc.png** - Carte de la RDC avec implantations
10. **team-photo.jpg** - Photo d'équipe
11. **logo-fpm.png** - Logo officiel FPM (optionnel)

### Où trouver les images ?

1. **Images déjà intégrées** : Certaines images utilisent des URLs Unsplash qui fonctionnent sans téléchargement
2. **Vos propres images** : Remplacez les URLs par le chemin local : `images/votre-image.jpg`
3. **Images Unsplash** : Les URLs commençant par `https://images.unsplash.com/` fonctionnent directement

### Optimisation des images

Pour de meilleures performances :
- Format recommandé : **JPEG** pour les photos, **PNG** pour les logos
- Taille maximale : **500 KB** par image
- Dimensions : **1920x600px** pour les hero images
- Utilisez https://tinypng.com pour compresser vos images

## 🎯 Fonctionnalités

### ✅ Fonctionnalités incluses

- ✅ Design responsive (mobile, tablette, desktop)
- ✅ Navigation sticky avec effet de scroll
- ✅ Menu mobile hamburger
- ✅ Animations au scroll
- ✅ Compteurs animés pour les statistiques
- ✅ Formulaire de contact avec validation
- ✅ Carrousel de partenaires
- ✅ Témoignages clients
- ✅ Bouton "Retour en haut"
- ✅ Optimisé pour le SEO
- ✅ Performance optimisée
- ✅ Compatible tous navigateurs modernes

### 📱 Compatibilité

- ✅ Chrome / Edge / Brave (dernières versions)
- ✅ Firefox (dernières versions)
- ✅ Safari (dernières versions)
- ✅ Mobile : iOS Safari, Chrome Android
- ✅ Tablettes : iPad, Android

## 🛠️ Personnalisation

### Modifier les couleurs

Éditez le fichier `css/styles.css` et modifiez les variables CSS :

```css
:root {
  --fpm-blue-dark: #00467F;    /* Votre bleu principal */
  --fpm-cyan: #00AFEF;         /* Votre cyan */
  --fpm-red: #EF4135;          /* Votre rouge */
}
```

### Modifier les textes

Ouvrez les fichiers `.html` avec un éditeur de texte et modifiez le contenu directement.

**Éditeurs recommandés :**
- **VS Code** (gratuit) : https://code.visualstudio.com
- **Sublime Text** (gratuit)
- **Notepad++** (gratuit, Windows)

### Ajouter une nouvelle page

1. Créez un fichier HTML dans le dossier `/pages/`
2. Copiez la structure d'une page existante
3. Modifiez le contenu
4. Ajoutez le lien dans le menu de navigation (tous les fichiers HTML)

## 📊 Données FPM intégrées

### Chiffres clés officiels

- **$130M+** : Total actifs sous gestion
- **$126M+** : Décaissés depuis 2015
- **$204M+** : Capacité de couverture garantie
- **$54M+** : Encours de crédit
- **$45M+** : Plafond d'encours garantie
- **403%** : Croissance du résultat net
- **97%** : Croissance du bilan
- **80%** : Croissance PNB

### Partenaires

ADVANS, ALLIANCE VIE, BAOBAB, BAGIRA, BONNE SEMENCE, AKIBA YETU, CRDB BANK, EQUITY BCDC, RAWBANK, FINCA, GUILGAL, HEKIMA, TUJENGE PAMOJA, SMICO, PROCFIN, TID, PAIDEK, CRDB

### Actionnaires FPM

- KfW (Banque de développement allemande)
- BIO (Société belge d'investissement)
- Cordaid (Organisation de développement néerlandaise)
- FMO (Banque néerlandaise de développement)
- CFEF (Centre Financier pour les Entrepreneurs Francophones)
- M. Loïc De Cannière
- Banque mondiale (BM)
- Transforme

## 📞 Support et contact

Pour toute question concernant ce site web :

- **Email technique** : webmaster@fpm.cd
- **Email général** : contact@fpm.cd
- **Téléphone** : +243 XX XXX XXXX

## 📝 License

© 2026 FPM - Fonds pour l'inclusion financière en RDC. Tous droits réservés.

Ce site web est la propriété exclusive du FPM. Toute reproduction, même partielle, est interdite sans autorisation écrite préalable.

## 🔄 Mises à jour

**Version actuelle** : 1.0.0 (Avril 2026)

### Historique des versions

- **v1.0.0** (Avril 2026) : Lancement initial du site
  - 9 pages complètes
  - Design responsive
  - Toutes les données FPM officielles intégrées

## 🎓 Formation

### Pour les débutants

Si vous n'avez jamais modifié un site web, voici les étapes :

1. **Téléchargez VS Code** : https://code.visualstudio.com
2. **Ouvrez le dossier** : File > Open Folder > sélectionnez `fpm-website-export`
3. **Modifiez un fichier** : Cliquez sur un fichier `.html` dans la barre latérale
4. **Enregistrez** : Ctrl+S (Windows) ou Cmd+S (Mac)
5. **Prévisualisez** : Clic droit sur `index.html` > Open with Live Server

### Ressources utiles

- **HTML/CSS** : https://www.w3schools.com
- **JavaScript** : https://javascript.info
- **Netlify** : https://docs.netlify.com

## ✅ Checklist avant mise en ligne

- [ ] Toutes les images sont dans le dossier `/images/`
- [ ] Les informations de contact sont à jour
- [ ] Les liens sociaux sont configurés
- [ ] Le formulaire de contact est configuré (voir section suivante)
- [ ] Les textes sont relus et corrigés
- [ ] Le site est testé sur mobile
- [ ] Le site est testé sur différents navigateurs
- [ ] Les métadonnées SEO sont complètes
- [ ] Google Analytics est configuré (optionnel)

## 📧 Configuration du formulaire de contact

Le formulaire de contact nécessite une configuration backend. Options recommandées :

### Option 1 : Formspree (le plus simple)

1. Créez un compte sur https://formspree.io
2. Créez un nouveau formulaire
3. Copiez l'URL du formulaire
4. Dans `pages/contact.html`, remplacez :
   ```html
   <form id="contact-form" action="VOTRE_URL_FORMSPREE" method="POST">
   ```

### Option 2 : Netlify Forms

Si vous hébergez sur Netlify, ajoutez simplement `netlify` dans le formulaire :
```html
<form name="contact" netlify>
```

### Option 3 : Service email personnalisé

Configurez votre propre backend avec PHP, Node.js, ou un service cloud.

## 🌐 SEO et Analytics

### Google Analytics

Pour suivre les visiteurs, ajoutez avant `</head>` :

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

Remplacez `GA_MEASUREMENT_ID` par votre ID Google Analytics.

### Métadonnées SEO

Les métadonnées sont déjà configurées dans chaque page. Vérifiez et ajustez si nécessaire.

## 🚨 Dépannage

### Le site ne s'affiche pas correctement

1. Vérifiez que la structure des dossiers est intacte
2. Assurez-vous que `css/styles.css` et `js/main.js` existent
3. Ouvrez la console du navigateur (F12) pour voir les erreurs

### Les images ne s'affichent pas

1. Vérifiez que les fichiers images existent dans `/images/`
2. Vérifiez que les noms de fichiers correspondent exactement (respectez la casse)
3. Les URLs Unsplash nécessitent une connexion internet

### Le menu mobile ne fonctionne pas

1. Vérifiez que `js/main.js` est bien chargé
2. Ouvrez la console (F12) et cherchez les erreurs JavaScript

### Le formulaire ne fonctionne pas

Voir la section "Configuration du formulaire de contact" ci-dessus.

## 💡 Conseils pro

1. **Sauvegardez régulièrement** : Faites des copies du site
2. **Testez avant de publier** : Vérifiez toujours vos modifications
3. **Optimisez les images** : Utilisez TinyPNG pour réduire la taille
4. **Utilisez HTTPS** : Tous les hébergeurs modernes le proposent gratuitement
5. **Monitoring** : Utilisez Google Search Console pour suivre le SEO

## 📈 Prochaines étapes recommandées

1. **Configurer un nom de domaine** : www.fpm.cd
2. **Configurer les emails** : contact@fpm.cd, info@fpm.cd
3. **Ajouter Google Analytics** : Pour suivre les visiteurs
4. **Configurer SSL/HTTPS** : Pour la sécurité
5. **Soumettre à Google** : Google Search Console
6. **Créer un sitemap.xml** : Pour le SEO
7. **Optimiser la vitesse** : Utiliser PageSpeed Insights

---

**Créé avec ❤️ pour le FPM**

*Dernière mise à jour : Avril 2026*

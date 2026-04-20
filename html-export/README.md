# Site Web FPM - Export HTML/CSS

Ce dossier contient la version HTML/CSS statique du site web FPM (Fonds pour l'inclusion financière en RD Congo).

## 📁 Structure des fichiers

```
html-export/
├── index.html              # Page d'accueil
├── pages/                  # Pages du site
│   ├── impact.html        # Page Impact (complète)
│   ├── services.html      # Page Services
│   ├── publications.html  # Page Publications
│   ├── about.html         # Page À propos
│   ├── careers.html       # Page Carrières
│   ├── contact.html       # Page Contact
│   ├── fpm-sa.html       # Page FPM SA
│   └── fpm-asbl.html     # Page FPM ASBL
├── css/
│   └── styles.css         # Styles CSS principaux
├── js/
│   └── main.js            # JavaScript pour interactions
├── images/                # Images du site
│   ├── logo-fpm.png
│   ├── partners-logos.png
│   └── ...
└── README.md             # Ce fichier

```

## 🎨 Couleurs de la marque FPM

- **Bleu foncé (Primary)**: #00467F (Pantone 541C)
- **Cyan (Secondary)**: #00AFEF (Pantone Hexachrome cyan C)
- **Rouge (Accent)**: #EF4135 (Pantone Red 032 C)

## 🚀 Utilisation

### Installation locale

1. **Téléchargez** tous les fichiers de ce dossier `html-export`
2. **Ouvrez** le fichier `index.html` dans votre navigateur web
3. Le site fonctionnera sans serveur web (fichiers HTML statiques)

### Hébergement

Pour héberger le site sur un serveur web :

1. **Uploadez** tous les fichiers sur votre serveur
2. **Assurez-vous** que le fichier `index.html` est à la racine
3. **Vérifiez** que tous les chemins relatifs sont corrects
4. **Testez** la navigation entre les pages

## 📝 Fonctionnalités

### ✅ Incluses

- ✅ Navigation responsive (desktop et mobile)
- ✅ Menu hamburger pour mobile
- ✅ Compteurs animés sur la page Impact
- ✅ Barres de progression
- ✅ Graphiques de répartition par genre
- ✅ Animations au scroll
- ✅ Bouton "Retour en haut"
- ✅ Formulaire de contact (avec validation basique)
- ✅ Sélecteur de langue (FR/EN - interface uniquement)

### ⚠️ À compléter

- ⚠️ **Images** : Vous devez ajouter les images dans le dossier `images/`
  - `logo-fpm.png` - Logo FPM
  - `partners-logos.png` - Logos des partenaires
  - `hero-impact.jpg` - Image hero de la page Impact
  - Autres images des différentes pages

- ⚠️ **Traduction EN** : L'interface de changement de langue est présente mais la traduction complète nécessite des fichiers supplémentaires

- ⚠️ **Formulaires** : Les formulaires de contact nécessitent un backend pour l'envoi d'emails

## 🖼️ Images manquantes

Pour récupérer les images du projet React :

1. Les images sont stockées dans le projet React avec le schéma `figma:asset/`
2. Vous devez les exporter et les placer dans le dossier `images/`
3. Voici la liste des images principales à ajouter :

```
images/
├── logo-fpm.png                    # Logo principal
├── partners-logos.png              # Bande de logos partenaires
├── hero-impact.jpg                # Image hero Impact
├── hero-home.jpg                  # Image hero Accueil
├── akiba-yetu.jpg                 # Photo success story COOPEC Akiba Yetu
├── smico.jpg                      # Photo success story IMF SMICO
└── map-rdc.png                    # Carte de la RDC
```

## 🔧 Personnalisation

### Modifier les couleurs

Éditez le fichier `css/styles.css` et modifiez les variables CSS dans `:root` :

```css
:root {
  --fpm-blue-dark: #00467F;
  --fpm-cyan: #00AFEF;
  --fpm-red: #EF4135;
}
```

### Ajouter une nouvelle page

1. Créez un nouveau fichier HTML dans `pages/`
2. Copiez la structure du header et footer depuis `impact.html`
3. Ajoutez le lien dans la navigation (header)
4. Utilisez les classes CSS existantes

### Modifier les chiffres d'impact

Les compteurs sont définis avec les attributs `data-*` :

```html
<div class="stat-counter" 
     data-target="130" 
     data-prefix="$" 
     data-suffix="M+">
  $0M+
</div>
```

## 📱 Responsive Design

Le site est entièrement responsive avec 3 breakpoints :

- **Mobile** : < 640px
- **Tablet** : 640px - 1024px
- **Desktop** : > 1024px

## 🌐 Navigateurs supportés

- ✅ Chrome (dernières versions)
- ✅ Firefox (dernières versions)
- ✅ Safari (dernières versions)
- ✅ Edge (dernières versions)
- ⚠️ Internet Explorer : Non supporté

## 📧 Support

Pour toute question technique sur ce template :

- **Email** : administration@fpmsa-rdc.com
- **Téléphone** : +243 976 596 005
- **Adresse** : FPM | Immeuble Ecobank | 5ᵉ étage | Kinshasa, RDC

## 📄 Licence

© 2026 Fonds pour l'inclusion financière en RDC (FPM). Tous droits réservés.

---

**Note importante** : Ce package HTML/CSS est une conversion du projet React original. Certaines fonctionnalités interactives complexes ont été simplifiées pour fonctionner en HTML/CSS/JavaScript pur.

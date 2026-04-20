# 📸 GUIDE DES IMAGES - SITE FPM

## Bienvenue dans le dossier images !

Ce dossier contient (ou doit contenir) toutes les images du site web FPM.

---

## 📋 LISTE DES IMAGES REQUISES

### Images Hero (En-têtes de pages)

| Fichier | Page | Dimensions | Sujet recommandé |
|---------|------|------------|------------------|
| `hero-home.jpg` | Accueil | 1920x600px | Entrepreneurs congolais, MPME, femmes d'affaires |
| `hero-fpm-sa.jpg` | FPM SA | 1920x600px | Réunion d'affaires, finance, investissement |
| `hero-fpm-asbl.jpg` | FPM ASBL | 1920x600px | Formation, assistance technique, coaching |
| `hero-services.jpg` | Services | 1920x600px | Handshake, partenariat, collaboration |
| `hero-impact.jpg` | Impact | 1920x600px | Communauté, bénéficiaires, impact social |
| `hero-about.jpg` | À propos | 1920x600px | Équipe FPM, bureau, professionnels |
| `hero-careers.jpg` | Carrières | 1920x600px | Jeunes professionnels, équipe dynamique |
| `hero-contact.jpg` | Contact | 1920x600px | Bureau moderne, communication |

### Images de contenu

| Fichier | Usage | Dimensions | Description |
|---------|-------|------------|-------------|
| `map-rdc.png` | Carte RDC | 1200x800px | Carte de la RD Congo avec implantations FPM |
| `logo-fpm.png` | Logo | 200x200px | Logo officiel FPM (fond transparent) |
| `team-photo.jpg` | Équipe | 1200x800px | Photo de l'équipe FPM |
| `office-kinshasa.jpg` | Bureau | 1200x800px | Bureau FPM à Kinshasa |

---

## 🎯 RECOMMANDATIONS PHOTOS

### Critères importants (selon le brief du projet)

✅ **UNIQUEMENT des personnes noires africaines**
✅ Représentant les MPME (Micro, Petites et Moyennes Entreprises)
✅ Femmes entrepreneures
✅ Jeunes entrepreneurs
✅ Populations vulnérables ayant besoin d'inclusion financière

### Contextes recommandés

- Marchés locaux congolais
- Petits commerces
- Agriculture familiale
- Artisanat
- Services financiers de proximité
- Coopératives
- Groupements de femmes
- Formations et ateliers

### Ce qu'il faut éviter

❌ Photos de banques occidentales
❌ Gratte-ciels de finance internationale
❌ Personnes non-africaines
❌ Contextes non-africains
❌ Photos trop "corporate" déconnectées de la réalité locale

---

## 📥 OÙ TROUVER DES IMAGES

### Option 1 : Photos professionnelles FPM

Si le FPM dispose de photos professionnelles :
- Demandez au service communication
- Utilisez les photos des événements FPM
- Photos des partenaires IFP
- Photos des bénéficiaires (avec autorisation)

### Option 2 : Unsplash (Gratuit)

Le site utilise déjà certaines images Unsplash. URLs intégrées :

1. **Femme entrepreneure** :
   `https://images.unsplash.com/photo-1655720357761-f18ea9e5e7e6`

2. **Jeune agriculteur** :
   `https://images.unsplash.com/photo-1669304839499-fe2ce78689d8`

3. **Communauté congolaise** :
   `https://images.unsplash.com/photo-1686146711957-04aec031396b`

4. **Réunion d'affaires africaine** :
   `https://images.unsplash.com/photo-1655720357872-ce227e4164ba`

5. **Services financiers** :
   `https://images.unsplash.com/photo-1765648684630-ac9c15ac98d5`

6. **Entrepreneurs** :
   `https://images.unsplash.com/photo-1594098882270-66ce9399b040`

7. **Équipe professionnelle** :
   `https://images.unsplash.com/photo-1739298061757-7a3339cee982`

**Pour télécharger depuis Unsplash :**

1. Allez sur https://unsplash.com
2. Recherchez :
   - "african woman entrepreneur"
   - "african small business"
   - "congolese market"
   - "african farmers"
   - "microfinance africa"
3. Téléchargez en haute résolution (gratuit)
4. Renommez selon le tableau ci-dessus
5. Placez dans ce dossier

### Option 3 : Pexels (Gratuit)

Alternative à Unsplash : https://www.pexels.com

Mêmes recherches recommandées.

### Option 4 : Photographe professionnel

Pour des images 100% authentiques et locales :
- Engagez un photographe à Kinshasa
- Organisez une session photo avec :
  - L'équipe FPM
  - Les partenaires IFP
  - Les bénéficiaires (avec consentement)
  - Les bureaux FPM

**Budget estimé** : 500-1000 USD pour une journée complète

---

## 🛠️ COMMENT AJOUTER UNE IMAGE

### Méthode simple :

1. **Préparez l'image** :
   - Téléchargez ou prenez la photo
   - Renommez exactement comme indiqué dans le tableau
   - Exemple : `hero-home.jpg` (pas `Hero-Home.JPG` ou `hero_home.jpg`)

2. **Copiez l'image** :
   - Copiez le fichier image
   - Collez-le dans ce dossier `images/`

3. **Vérifiez** :
   - Ouvrez le site web
   - L'image doit s'afficher automatiquement

### Méthode avancée : Remplacer une URL Unsplash par une image locale

Dans les fichiers HTML, certaines images utilisent des URLs Unsplash :

```html
<!-- Avant (URL Unsplash) -->
<img src="https://images.unsplash.com/photo-1655720357761-f18ea9e5e7e6" alt="Hero">

<!-- Après (Image locale) -->
<img src="images/hero-home.jpg" alt="Hero">
```

---

## 🎨 OPTIMISATION DES IMAGES

### Pourquoi optimiser ?

- ✅ Site plus rapide
- ✅ Moins de bande passante
- ✅ Meilleure expérience utilisateur
- ✅ Meilleur référencement Google (SEO)

### Comment optimiser :

#### Outil recommandé : TinyPNG

1. Allez sur **https://tinypng.com**
2. Glissez-déposez votre image
3. Attendez la compression (réduit de 50-70% sans perte visible)
4. Téléchargez l'image optimisée
5. Utilisez cette version

#### Autres outils :

- **Squoosh** : https://squoosh.app (gratuit, open source)
- **ImageOptim** : https://imageoptim.com (Mac uniquement)
- **RIOT** : https://riot-optimizer.com (Windows)

### Recommandations techniques :

| Type | Format | Qualité | Poids max |
|------|--------|---------|-----------|
| Photos | JPEG | 80-85% | 500 KB |
| Logos | PNG | 100% | 100 KB |
| Icônes | SVG | - | 50 KB |

---

## 📐 DIMENSIONS RECOMMANDÉES

### Images Hero (En-têtes)

- **Largeur** : 1920px minimum
- **Hauteur** : 600px minimum
- **Ratio** : 16:5 (ou 3.2:1)

**Pourquoi ?**

- S'adapte à tous les écrans (desktop, laptop, tablette)
- Bonne qualité sur écrans Retina
- Pas trop lourd

### Images de contenu

- **Largeur** : 1200px maximum
- **Hauteur** : Variable selon le contenu
- **Ratio** : 4:3 ou 16:9

### Logo

- **Dimensions** : 200x200px
- **Format** : PNG avec fond transparent
- **Poids** : < 50 KB

---

## 🔄 WORKFLOW DE REMPLACEMENT D'IMAGE

### Étape 1 : Identifier l'image à remplacer

Exemple : Vous voulez remplacer l'image hero de la page d'accueil.

### Étape 2 : Préparer la nouvelle image

1. Choisissez votre image
2. Redimensionnez-la à 1920x600px
3. Optimisez-la avec TinyPNG
4. Renommez-la exactement : `hero-home.jpg`

### Étape 3 : Remplacer

1. Ouvrez le dossier `images/`
2. Supprimez l'ancienne `hero-home.jpg` (ou renommez-la en `hero-home-old.jpg`)
3. Copiez la nouvelle `hero-home.jpg`

### Étape 4 : Vérifier

1. Ouvrez `index.html` dans votre navigateur
2. Rechargez la page (Ctrl+F5 pour forcer le rechargement)
3. Vérifiez que la nouvelle image s'affiche

**Si l'ancienne image s'affiche encore** : Videz le cache du navigateur (Ctrl+Shift+Delete)

---

## 📱 IMAGES RESPONSIVES

Les images s'adaptent automatiquement à tous les écrans grâce au CSS :

```css
img {
  max-width: 100%;
  height: auto;
}
```

**Cela signifie** :
- Sur desktop : Image en pleine largeur
- Sur tablette : Image réduite proportionnellement
- Sur mobile : Image adaptée à l'écran

**Vous n'avez rien à faire**, c'est automatique ! 🎉

---

## 🔒 DROITS ET LICENCES

### Images Unsplash

- ✅ Gratuites
- ✅ Usage commercial autorisé
- ✅ Pas d'attribution obligatoire (mais recommandée)
- ✅ Modification autorisée

### Vos propres photos

- ✅ Vous possédez les droits
- ⚠️ Demandez le consentement des personnes photographiées
- ⚠️ Respectez la vie privée
- ⚠️ Utilisez un formulaire de consentement pour les bénéficiaires

### Photos de photographes professionnels

- 💰 Achetez les droits d'utilisation
- 📄 Conservez la facture et le contrat
- ✅ Vérifiez que l'usage web est autorisé

---

## ✅ CHECKLIST IMAGES

Avant de mettre le site en ligne, vérifiez :

- [ ] Toutes les images hero sont présentes (8 images)
- [ ] La carte de la RDC est présente
- [ ] Le logo FPM est présent
- [ ] Toutes les images sont optimisées (< 500 KB)
- [ ] Les dimensions sont correctes
- [ ] Les noms de fichiers sont exacts (respectent la casse)
- [ ] Les images représentent bien le contexte congolais/africain
- [ ] Vous avez les droits d'utilisation de toutes les images
- [ ] Les images s'affichent correctement sur desktop
- [ ] Les images s'affichent correctement sur mobile

---

## 🆘 PROBLÈMES COURANTS

### ❌ L'image ne s'affiche pas

**Causes possibles** :

1. **Nom de fichier incorrect** :
   - Vérifiez l'orthographe exacte
   - Respectez majuscules/minuscules
   - Vérifiez l'extension (.jpg, pas .JPG ou .jpeg)

2. **Image au mauvais endroit** :
   - L'image doit être dans le dossier `images/`
   - Pas dans un sous-dossier

3. **Chemin incorrect dans le HTML** :
   - Vérifiez que le HTML pointe vers `images/nom-fichier.jpg`

### ❌ L'image est déformée

**Solution** :
- Respectez le ratio recommandé (16:5 pour hero images)
- Utilisez un outil de redimensionnement qui conserve les proportions

### ❌ L'image est floue

**Causes** :
- Image trop petite étirée
- Sur-compression

**Solution** :
- Utilisez une image en haute résolution
- Réduisez moins la qualité lors de la compression

### ❌ L'image pèse trop lourd (site lent)

**Solution** :
- Optimisez avec TinyPNG
- Réduisez les dimensions si trop grandes
- Convertissez en format WebP (avancé)

---

## 🎓 RESSOURCES UTILES

### Banques d'images gratuites

- **Unsplash** : https://unsplash.com
- **Pexels** : https://www.pexels.com
- **Pixabay** : https://pixabay.com

### Outils de retouche

- **Photopea** : https://www.photopea.com (Photoshop gratuit en ligne)
- **GIMP** : https://www.gimp.org (gratuit, open source)
- **Canva** : https://www.canva.com (retouche simple)

### Outils de compression

- **TinyPNG** : https://tinypng.com
- **Squoosh** : https://squoosh.app
- **Compressor.io** : https://compressor.io

### Outils de redimensionnement

- **Birme** : https://www.birme.net (redimensionnement en lot)
- **ResizeImage.net** : https://resizeimage.net
- **ILoveIMG** : https://www.iloveimg.com

---

## 📞 SUPPORT

Besoin d'aide avec les images ?

- **Email** : webmaster@fpm.cd
- **Téléphone** : +243 XX XXX XXXX

---

**Bonne chance avec vos images ! 📸**

*Créé avec ❤️ pour le FPM*

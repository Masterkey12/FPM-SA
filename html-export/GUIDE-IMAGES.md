# Guide de récupération des images

Ce guide vous explique comment extraire les images du projet React vers le site HTML/CSS.

## 📸 Images nécessaires

### Images principales

1. **logo-fpm.png** - Logo FPM principal
   - Source React : `figma:asset/78313fbda9c6ca235b146eff8e50b92120851852.png`
   - Destination : `html-export/images/logo-fpm.png`

2. **partners-logos.png** - Bande de logos partenaires
   - Source React : `figma:asset/a8466c3f49c03b62820c2f696e5022cc98b840d7.png`
   - Destination : `html-export/images/partners-logos.png`

3. **akiba-yetu.jpg** - Photo COOPEC Akiba Yetu
   - Source React : `figma:asset/5a1cac47e5a1f8f5f208edfab404f51bfc281d45.png`
   - Destination : `html-export/images/akiba-yetu.jpg`

4. **smico.jpg** - Photo IMF SMICO
   - Source React : `figma:asset/01c61dbe0680a3643354cef85e8ac6abd261c161.png`
   - Destination : `html-export/images/smico.jpg`

5. **map-rdc.png** - Carte de la RDC
   - Source React : `figma:asset/affdb6833e2dacc89c7aeca0073848969463be69.png`
   - Destination : `html-export/images/map-rdc.png`

### Images Unsplash (pages hero)

Les images hero proviennent d'Unsplash. Vous pouvez :

**Option 1 : Utiliser les URLs directes dans le HTML**
```html
<!-- Page Impact -->
https://images.unsplash.com/photo-1548782033-3ac3a62ece8d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwd29tZW4lMjBncm91cCUyMG1pY3JvZmluYW5jZSUyMG1lZXRpbmclMjBjb21tdW5pdHl8ZW58MXx8fHwxNzcxNzc1NzYyfDA&ixlib=rb-4.1.0&q=80&w=1080
```

**Option 2 : Télécharger et héberger localement**

1. Visitez Unsplash
2. Recherchez des images de :
   - "african women microfinance meeting"
   - "african entrepreneurs business"
   - "financial inclusion africa"
3. Téléchargez en haute résolution (1920px min)
4. Placez dans `html-export/images/`

## 🔧 Méthode d'extraction automatique

Si vous avez accès aux fichiers du projet React, vous pouvez créer un script pour copier automatiquement les images :

```bash
#!/bin/bash

# Créer le dossier images
mkdir -p html-export/images

# Fonction pour copier une image Figma
copy_figma_asset() {
  local asset_id=$1
  local destination=$2

  # Les assets Figma sont stockés dans .vite ou .next (selon le build)
  # Vous devrez adapter ce chemin selon votre structure de projet
  find . -name "*${asset_id}*" -exec cp {} "html-export/images/${destination}" \;
}

# Copier les images principales
copy_figma_asset "78313fbda9c6ca235b146eff8e50b92120851852" "logo-fpm.png"
copy_figma_asset "a8466c3f49c03b62820c2f696e5022cc98b840d7" "partners-logos.png"
copy_figma_asset "5a1cac47e5a1f8f5f208edfab404f51bfc281d45" "akiba-yetu.jpg"
copy_figma_asset "01c61dbe0680a3643354cef85e8ac6abd261c161" "smico.jpg"
copy_figma_asset "affdb6833e2dacc89c7aeca0073848969463be69" "map-rdc.png"

echo "✓ Images copiées avec succès!"
```

## 📋 Checklist de vérification

Après avoir copié les images, vérifiez que :

- [ ] Le logo FPM s'affiche dans le header
- [ ] La bande de logos partenaires s'affiche en bas de page
- [ ] Les images hero des pages s'affichent correctement
- [ ] Les photos des success stories sont visibles
- [ ] Toutes les images ont une taille appropriée (< 500KB pour le web)

## 🎨 Optimisation des images

Pour optimiser la taille des images pour le web :

### En ligne de commande (Linux/Mac)

```bash
# Installer ImageMagick
sudo apt-get install imagemagick  # Ubuntu/Debian
brew install imagemagick          # macOS

# Optimiser toutes les images
cd html-export/images
for img in *.{jpg,jpeg,png}; do
  convert "$img" -quality 85 -strip "optimized-$img"
done
```

### Outils en ligne

- **TinyPNG** : https://tinypng.com/
- **Squoosh** : https://squoosh.app/
- **Compressor.io** : https://compressor.io/

## 🚨 Problèmes courants

### L'image ne s'affiche pas

1. Vérifiez le chemin dans le HTML
2. Vérifiez que le fichier existe dans `images/`
3. Vérifiez les permissions du fichier
4. Vérifiez l'extension (png vs jpg vs jpeg)

### L'image est trop lourde

- Les images hero : max 500KB
- Les logos : max 100KB
- Les photos : max 300KB

Utilisez les outils d'optimisation mentionnés ci-dessus.

### L'image est déformée

Vérifiez les dimensions recommandées :
- Logo header : 200x80px (ratio 2.5:1)
- Images hero : 1920x600px (ratio 3.2:1)
- Photos success stories : 800x600px (ratio 4:3)

## 📞 Support

Pour toute question :
- Email : administration@fpmsa-rdc.com
- Téléphone : +243 976 596 005

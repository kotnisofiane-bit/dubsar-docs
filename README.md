# DUBSAR Documentation

Documentation technique publique de DUBSAR, hébergée par GitHub Pages sous `docs.dubsar.ai`.

## Publication

1. Créer un dépôt GitHub public `kotnisofiane-bit/dubsar-docs`.
2. Importer ce dossier à la racine du dépôt et pousser sur `main`.
3. Dans **Settings → Pages**, choisir **Deploy from a branch**, branche `main`, dossier `/ (root)`.
4. Configurer `docs.dubsar.ai` comme domaine personnalisé dans GitHub Pages.
5. Dans Cloudflare, créer le CNAME de `docs` vers `kotnisofiane-bit.github.io` en mode **DNS only**, puis activer HTTPS dans GitHub Pages une fois le DNS propagé.

Le fichier `CNAME` contient déjà le domaine prévu. Aucun secret, accès d’administration ou détail interne ne doit être ajouté à ce dépôt public.


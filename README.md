# DUBSAR Docs

Documentation technique publique de DUBSAR, publiée sous `docs.dubsar.ai`.
DUBSAR développe un socle de gouvernance pour les intégrateurs et les équipes
qui déploient des agents IA chez leurs clients : missions durables,
autorisations explicites, décisions humaines, preuves d’exécution, transmission
et reprise du travail, y compris lorsqu’un résultat reste incertain.

Ce dépôt conserve des modèles et parcours de **référence**
(Gateway, portail, intégrations, exploitation), dont certains issus de phases
antérieures. L’[architecture canonique](https://github.com/kotnisofiane-bit/DUBSAR/blob/main/ARCHITECTURE.md)
définit les responsabilités actuelles et les frontières Personal / Control Plane.
Ce dépôt n’est pas un installateur,
ni un catalogue d’intégration disponible, ni un runbook d’exploitation d’un
produit généralement disponible.

## Statut public actuel

Aligné sur le dépôt canonique [DUBSAR](https://github.com/kotnisofiane-bit/DUBSAR) :

- produit **en développement** ;
- intégration et **qualification B2B complète en cours** ;
- **pilotes non ouverts** ;
- **aucune installation publique prise en charge** du produit complet.

Le portail d’audit automatisé et l’Audit professionnel appartiennent à des
phases antérieures : ils ne définissent plus l’offre actuelle. Leurs archives
restent indexées dans [LEGACY.md](https://github.com/kotnisofiane-bit/DUBSAR/blob/main/LEGACY.md).

Ce site statique ne publie pas le Portail, le Core privé, une implémentation
produit privée ni un runtime installable. La visibilité du code ou de
l’historique Git ne constitue pas un parcours d’installation.

## Références canoniques

- Dépôt DUBSAR : <https://github.com/kotnisofiane-bit/DUBSAR>
- Statut : <https://github.com/kotnisofiane-bit/DUBSAR/blob/main/STATUS.md>
- Installation : <https://github.com/kotnisofiane-bit/DUBSAR/blob/main/INSTALLATION.md>
- Vitrine B2B : <https://dubsar.ai/fr/>
- État du développement : <https://dubsar.ai/fr/#maturite>

## Contenu de ce dépôt

Site HTML statique à la racine :

| Page | Rôle |
|---|---|
| `index.html` | Point d’entrée et statut public |
| `architecture.html` | Frontières actuelles et schéma antérieur contextualisé |
| `gateway.html` | Gateway — cible / parcours sous mandat |
| `portal.html` | Ancien modèle de supervision, sans annonce d’interface disponible |
| `integrations.html` | Intégrations visées, sous mandat |
| `operations.html` | Exploitation de référence, sous mandat |
| `securite.html` | Protection des données et preuves (cible) |

Les pages Gateway, portail, intégrations et exploitation conservent des modèles
de conception, dont des repères antérieurs. Elles ne décrivent pas une
installation, une intégration ou une exploitation publiquement disponibles.

Aucun secret, accès d’administration ou détail interne ne doit être ajouté à
ce dépôt public.

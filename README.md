Accéder au dossier d’un contribuable

# Cible (persona)

Contrôleur des impôts

# Parcours

Le contrôleur effectue une recherche en fournissant des informations d’identification d’un contribuable.

Une liste de contribuables répondant à ces critères est présentée au contrôleur.

Le contrôleur peut modifier les informations de la recherche, et lancer une nouvelle recherche.

Le contrôleur accède au dossier d’un contribuable via un item de la liste des contribuables.

# Critère d’acceptation

L’application est intitulée « Contrôle fiscal des contribuables ».

L’écran est intitulé « Rechercher un contribuable ».

L’écran est positionné sous l’accueil de l’application en terme de plan de site.

La recherche peut se faire par le nom ou le SPI (numéro fiscal) du contribuable.

La liste est présentée dynamiquement dans le même écran que la zone de recherche.

Le contrôleur doit être informé lorsqu’aucun contribuable ne correspond à sa recherche.

La liste doit restituer les informations suivantes sur les contribuables :

- SPI

- nom

- prénom

- situation de famille : célibataire, en union, divorcé

- adresse:

- Utiliser un jeu de données arbitraire (bouchon) pour la démo.

La liste est ordonnée, et les informations présentées, selon l’information clé utilisée par le contrôleur pour identifier le contribuable recherché :

- pour une recherche par SPI : nom et prénom

- pour une recherche par nom : SPI et situation de famille

# Livrables attendus

Des wireframes de l’écran de recherche / liste des contribuables.

Un POC à mettre sur Github et sur google drive.

Idéalement, réaliser le POC avec Vue.js, qui peut être lancé en local à partir des sources par « npm install », « npm start ».

Sinon, réaliser le POC en vanilla js / HTML / CSS.

Vous pouvez vous aider d’un framework UI (BS, Vuetify). Cependant du pure HTML natif non stylé répond aussi à l’exercice.

Traiter l’accessibilité si vous avez des connaissances.

En nice : mettre en place des tests.

## POC en Vue.js

Bootstraper un projet simple avec Vue CLI, et un store (VueX) avec un jeu de données statique.

Pas besoin de « router ».

## POC Vanilla

Une page et un js. Vous pouvez utiliser Jquery si ça aide.

Le jeu de données statique peut être dans un simple objet js.

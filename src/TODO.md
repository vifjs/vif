# Etat final de la librairie

-   [ ] Aussi performant que Lit
-   [ ] Moins de 4kb minifié avec ESBuild
-   [ ] Version ESM compatible ES modules pour dev nodeJs (un seul export Vif)
-   [ ] Version IIFE compatible script DOM (une seule variable Vif)
-   [ ] Versions :
    -   [ ] source (all bundled no minification)
    -   [ ] development (all minified and mangle but keep comments)
    -   [ ] normal (.js) (all minified and mangle without comments)
-   [ ] Avec un routeur + lazy load
-   [ ] Avec composants dynamiques

Lorsqu'il y a plus de 3 appels à `this` dans une même fonction, alors l'option `let self = this` est plus rentable.

# Documentation

-   [ ] Mettre à jour la documentation
-   [ ] Mettre en place des exemples intéractifs
-   [ ] Mettre à jour le codepen

# Rebrand la présentation

The first 4kb reactive componant librairie !

A smooth mix of Alpine, Lit and Sjs. Including lazy loading and router. With a ridiculous size of 4kb.

# Publish commande

-   Run tests (if there are any)
-   Update version in package.json according to Semver
-   Create a git tag according to Semver
-   Push the package to Github
-   Push the package to npm
-   Create release notes for every update

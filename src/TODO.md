# Final desired state

-   [x] Performant as litjs
-   [x] Less than ~~4kb~~ **6kb** (minify + terser)
-   [x] ESM and IIFE versions :
    -   [x] production (all minified and mangled)
    -   [x] development (all minified and mangled but keep comments)
-   [x] Built-in features :
    -   [x] Observer (for lazy-load and more)
    -   [x] Router
    -   [x] i18n
-   [x] Render methods :
    -   [x] template litterals
    -   [x] nodeList
    -   [x] self

# Documentation

-   [x] Create a markdown wiki
-   [-] Create a JSdoc wiki
-   [ ] Create a website with dedicated documentation

# Publish command

-   [ ] Create a bunch of unit tests
-   [ ] Use `np` for deploy process
    -   Run tests
    -   Update version in package.json according to Semver
    -   Create a git tag according to Semver
    -   Push the package to Github
    -   Push the package to npm
    -   Create release notes for every update

# Next steps

-   [ ] Investigate utility of cache control on schema (for dynamic components)
-   [ ] Investigate for SEO friendly SSR without duplication

# Rebranding

_A 5kb full featured reactive components library_

A smooth mix of Lit, Alpine and Sjs. Including lazy loading and router. With a ridiculous size of 5kb.

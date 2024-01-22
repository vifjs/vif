# Navigate

How to create a SPA (Single Page Application) ?

To create a single page application you will need a router. A router is a component that displays content conditionally according to the url provided by the browser.

## The x-route directive

Conditionally displaying content can be done using the x-route directive, like bellow :

```html
<x-app>
    <!-- x-route takes a RegExp as argument
    that regex will be compared with all the
    url after the domain extension -->
    <template x-route="/my-custom-page">
        <!-- displayed only if the current route matches
        www.mydomain.com/my-custom-page -->
        <h1>Welcome to My-Custom-Page</h1>
        <x-my-custom-page></x-my-custom-page>
    </template>
</x-app>
```

## The navigate method

The navigate method is provided by Vif and can be used to change the current route in history. This method can be used in components as follows :

```js
Vif.define("app", function () {
    if (!userLoggedIn) {
        Vif.navigate("/home");
    }
});
```

The navigate method also expose the current route signal with `navigate.route()`.

## The links

To create links between routes without reloading the page while preserving SEO we still need the navigate method, as it can be used effectively on event directives attached to links

```js
Vif.define("app", function () {
    this.navigate = Vif.navigate;

    return this.component;
});
```

```html
<x-app>
    <a href="/link-to-another-page" x-on:click="navigate">
        Another Page here !
    </a>
</x-app>
```

---

# Next

[Manage multilanguage with i18n](./i18n.md)

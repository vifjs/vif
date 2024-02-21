![logo](https://raw.githubusercontent.com/vifjs/vif/main/docs/assets/images/logo.svg)

# Vif.js

_A 5kb full featured reactive components library_

-   Check the [website](https://vifjs.dev) !
-   Check the beta [wiki](https://github.com/vifjs/vif/tree/main/wiki/README.md) !

## What is Vif.js ?

Vif is - _again an other_ - javascript pure front-end component library.

For a weight of less than 6kb (3kb gzipped) Vif can do :

-   Reusable reactives components
    -   HTML render
    -   Javascript Render
    -   Scoped CSS
-   Routing (SPA & more)
-   Lazy loading
-   Internationalization (i18n)

## Why Vif.js ?

Before Vif, I experimented with numerous other creations of component libraries, primarily with the aim of in-depth learning of JavaScript programming (customElements, lifecycles, signals, hydration, etc...) and the DOM manipulation.

Vif represents the culmination of this learning.

## The methods

```js
/* script.js */
import {
    useDefine, // used to create a reactive we component
    useSignal, // used to create a global signal
    useObserve, // used to create lazy actions based on component hydration
    useNavigate, // used to navigate between routes
    useI18n, // used to create and use locales translations
} from "vifjs"; // cdn at "https://cdn.jsdelivr.net/npm/vifjs@latest/esm/vif.js"
```

Check the [full documentation here](https://github.com/vifjs/vif/tree/main/wiki/README.md) !

## The counter example

**How to create a counter ?** In this example we will use HTML render, which can represent an advantage in terms of SEO.

```html
<!-- index.html -->
<x-counter>
    <button x-on:click="count(count.value + 1)">
        Count is <b x-text="count()">0</b>
    </button>
</x-counter>
```

And here is the javascript part to make our **component reactive**.

```js
/* script.js */
function Counter({ props }) {
    props.count = useSignal(0);
    return this;
}

useDefine("counter", Counter);
```

Check the [full documentation here](https://github.com/vifjs/vif/tree/main/wiki/README.md) !

---

_I will appreciate your feedback, so feel free to [post an issue on github](https://github.com/vifjs/vif/issues) !_

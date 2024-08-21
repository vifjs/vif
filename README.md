![logo](https://raw.githubusercontent.com/vifjs/vif/main/docs/assets/images/logo.svg)

# Vif.js

_A 5kb full featured reactive components library_

[![NPM Version](https://img.shields.io/npm/v/vifjs.svg?style=for-the-badge)](https://www.npmjs.com/package/vifjs)
[![NPM Downloads](https://img.shields.io/npm/dm/vifjs.svg?style=for-the-badge)](https://www.npmjs.com/package/vifjs)
[![Bundle Size](https://img.shields.io/bundlephobia/minzip/vifjs)](https://www.npmjs.com/package/vifjs)
[![JSDelivr Hits](https://img.shields.io/jsdelivr/npm/hm/vifjs?style=for-the-badge)](https://www.jsdelivr.com/package/npm/vifjs)<br>
[![Website](https://img.shields.io/badge/Website-vifjs.dev-coral?style=for-the-badge)](https://vifjs.dev)
[![Wiki](https://img.shields.io/badge/Wiki-Documentation-blue?style=for-the-badge)](https://github.com/vifjs/vif/tree/main/wiki/README.md)
[![Codepen](https://img.shields.io/badge/Demos-codepen.io-seagreen?style=for-the-badge)](https://codepen.io/collection/WvPrEb)

> Click the badges above !

## What is Vif.js ?

Vif is - _again an other_ - javascript pure front-end component library.

For a weight of less than 6kb (3kb gzipped) Vif can do :

-   [x] Reusable reactives components
    -   [x] HTML render
    -   [x] Javascript Render
    -   [x] Signals
    -   [x] Scoped CSS
    -   [x] Lazy loaded components
-   [x] Routing (Single Page App & more)
-   [x] Internationalization (i18n)

## Why Vif.js ?

Before Vif, I experimented with numerous other creations of component libraries, primarily with the aim of in-depth learning of JavaScript programming (customElements, lifecycles, signals, hydration, etc...) and the DOM manipulation.

Vif represents the culmination of this learning.

## The methods

```js
/* script.js */
import {
    useDefine, // used to create a reactive web-component
    useSignal, // used to create a global signal
    useEffect, // used to create a reactive function
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
    return this; // optional
}

useDefine("counter", Counter);
```

Check the [full documentation here](https://github.com/vifjs/vif/tree/main/wiki/README.md) !

---

_I will appreciate your feedback, so feel free to [post an issue on github](https://github.com/vifjs/vif/issues) !_

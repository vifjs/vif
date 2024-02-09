# Vif.js

Use Vif as IIFE or ESModule

## ESM

> Javascript module system with "import" and "export"

```js
// development version
import Vif from "https://cdn.jsdelivr.net/gh/vifjs/vif/dist/esm/vif.dev.js";
// production version
import Vif from "https://cdn.jsdelivr.net/gh/vifjs/vif/dist/esm/vif.js";
```

## IIFE

> An IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined.

```html
<!-- development version -->
<script
    src="https://cdn.jsdelivr.net/gh/vifjs/vif/dist/iife/vif.dev.js"
    defer
></script>
<!-- production version -->
<script
    src="https://cdn.jsdelivr.net/gh/vifjs/vif/dist/iife/vif.js"
    defer
></script>
```

## Methods

-   `define` used to create a reactive we component
-   `signal` used to create a global signal
-   `observe` used to create lazy actions based on component hydration
-   `navigate` used to navigate between routes
-   `i18n` used to create and use locales translations

---

# Next

[Define a component](./methods/define.md)

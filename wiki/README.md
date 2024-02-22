# Vif.js

Use Vif as **ESModule** / **IIFE** / **Commonjs**.

You can use both `npm` and `CDN`.

## NPM

```bash
npm install vifjs
```

## ESM (recommanded)

> Javascript module system with "import" and "export"

```js
// npm (benefits from auto-completion)
import { ... } from "vifjs";
// CDN
import { ... } from "https://cdn.jsdelivr.net/npm/vifjs@latest/esm/vif.js";
```

## IIFE

> An IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined.

```html
<script src="https://cdn.jsdelivr.net/npm/vifjs@latest/iife/vif.js"></script>

<script>
    const { ... } = Vif;
</script>
```

## CJS

> CommonJS modules are the original way to package JavaScript code for Node.js

```js
// npm (benefits from auto-completion)
const { ... } = require("vifjs");
```

## Methods

-   [`useDefine`](./methods/define.md) used to create a reactive component
-   [`useSignal`](./methods/signal.md) used to create a global signal
-   [`useEffect`](./methods/effect.md) used to create a reactive function
-   [`useObserve`](./methods/observe.md) used to create lazy actions based on component hydration
-   [`useNavigate`](./methods/navigate.md) used to navigate between routes
-   [`useI18n`](./methods/i18n.md) used to create and use locales translations

---

# Next

[Define a component](./methods/define.md)

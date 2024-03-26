# Build or not to build ?

Vif allows you to publish your site or application without any build step, this is very useful during your developments and will also work perfectly in production.

However, in order to preserve bandwidth and thus help reduce the ecological impact of the web while making your application more accessible and quick to load, we advise you to go through a process of building your application.

There are many tools to do this like [SWC](https://swc.rs/), [Rollup](https://rollupjs.org/), or [Vite](https://vitejs.dev).

The different steps to carry out are as follows:

-   minify your javascript files
    -   mangle some property names
        -   prefer using regex like `/^_/` over exclude
        -   do not mangle `props.<property>` because they are also in your html templates
    -   minify template literals of type `html...`
-   minify your css style sheets
-   minify your html documents
-   compress your images and svg

## Vite config

If you are using Vite you can take this configuration as a basis:

```bash
npm i -D terser
npm i -D rollup-plugin-html-literals
```

```js
import { defineConfig } from "vite";
import templateLiterals from "rollup-plugin-html-literals";

export default defineConfig({
    build: {
        target: "esnext",
        minify: "terser",
        rollupOptions: {
            /*  // (optional) if you want multiple outputs
                output: {
                    preserveModules: true,
                    preserveModulesRoot: "src",
                },
            */
            // minify HTML template literals
            plugins: [templateLiterals()],
            // (optional) mark all http imports as external
            external: [/^https?:/],
            // preserve all import names
            preserveEntrySignatures: "strict",
        },
        /*  // (careful) if you want to mangle properties
            terserOptions: {
                mangle: {
                    properties: {
                        regex: /^_/
                    }
                }
            },
        */
        // avoid the module preload polyfill
        modulePreload: false,
    },
});
```

## Rollup config

If you use Rollup you can use this configuration as a basis:

```bash
npm i -D @rollup/plugin-terser
npm i -D @rollup/plugin-node-resolve
npm i -D rollup-plugin-html-literals
```

```js
// Import rollup plugins
import terser from "@rollup/plugin-terser";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import templateLiterals from "rollup-plugin-html-literals";

export default {
    // Setup input files
    input: "src/bundle.js",
    // Setup output directory
    output: {
        dir: "dist",
        format: "esm",
        /*  // (optional) if you want multiple outputs
            output: {
                preserveModules: true,
                preserveModulesRoot: "src",
            },
        */
    },
    plugins: [
        // minify HTML template literals
        templateLiterals(),
        // resolve imported node modules
        nodeResolve(),
        // minify javascript with terser
        terser({
            /*  // (careful) if you want to mangle properties
                mangle: {
                    properties: {
                        regex: /^_/
                    }
                }
            */
        }),
    ],
    // (optional) mark all http imports as external
    external: [/^https?:/],
    // preserve all import names
    preserveEntrySignatures: "strict",
};
```

---

# Next

Done for the moment...
[back to home](../README.md)

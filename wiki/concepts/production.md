# Build or not to build ?

Vif allows you to publish your site or application without any build step, this is very useful during your developments and will also work perfectly in production.

However, in order to preserve bandwidth and thus help reduce the ecological impact of the web while making your application more accessible and quick to load, we advise you to go through a process of building your application.

There are many tools to do this like [SWC](https://swc.rs/), [Rollup](https://rollupjs.org/), or [Vite](https://vitejs.dev /).

The different steps to carry out are as follows:

-   minify your javascript files
    -   mangle some property names
    -   minify template literals of type `html...`
-   minify your css style sheets
-   minify your html documents
-   compress your images and svg

## Rollup config

If you use Rollup you can use this configuration as a basis:

```js
// Import rollup plugins
import resolve from "@rollup/plugin-node-resolve";
import minifyHTML from "rollup-plugin-minify-html-literals";
import { terser } from "@rollup/plugin-terser";
import summary from "rollup-plugin-summary";

export default {
    // Setup input files
    input: {
        "first-component": "src/first-component.js",
        "second-component": "src/second-component.js",
    }
    // Setup output directory
    output: {
        dir: "dist",
        format: "esm",
    },
    plugins: [
        // Resolve bare module specifiers to relative paths
        resolve(),
        // Minify HTML template literals
        minifyHTML(),
        // Minify JS and mangle properties starting by "_"
        terser({
            mangle: {
                properties: {
                    regex: /^_/,
                },
            },
        }),
        // Print bundle summary
        summary(),
    ],
    // Mark vif and web-imported modules as external
    // so they are not included into the bundle
    external: ["vifjs", /^https:/],
    preserveEntrySignatures: "strict",
};
```

---

# Next

Done for the moment...
[back to home](../README.md)

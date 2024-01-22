import terser from "@rollup/plugin-terser";
import fs from "node:fs";

/** @type {[{format: string, ext: string}]} */
const formats = [
    ["iife", ""],
    ["esm", ""],
    ["iife", ".dev"],
    ["esm", ".dev"],
];

export default formats.map(function ([format, ext]) {
    return {
        input: "src/bundle.js",
        output: {
            file: `dist/${format}/vif${ext}.js`,
            format: format,
            name: "Vif",
            minifyInternalExports: ext !== ".dev",
            banner:
                ext === ".dev" &&
                fs
                    .readFileSync("src/utils/types.js", "utf-8")
                    .toString()
                    .replace(/^import [^;]+;/gm, ""),
        },
        plugins: ext !== ".dev" && [
            terser({
                mangle: {
                    properties: {
                        reserved: [
                            "connectedCallback",
                            "handleEvent",
                            "onUnmount",
                            "component",
                            "onMount",
                            "handler",
                            "locale",
                            "effect",
                            "route",
                            "data",
                            "i18n",
                            "ref",
                        ],
                    },
                },
            }),
        ],
    };
});

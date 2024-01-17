import terser from "@rollup/plugin-terser";

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
        },
        plugins: [
            terser({
                mangle: {
                    properties: {
                        reserved: [
                            "connectedCallback",
                            "onUnmount",
                            "component",
                            "onMount",
                            "handler",
                            "effect",
                            "route",
                            "data",
                            "ref",
                        ],
                    },
                },
                output: {
                    comments: ext === ".dev",
                },
            }),
        ],
    };
});

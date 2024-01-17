import terser from "@rollup/plugin-terser";

const formats = [
    ["iife", "prod"],
    ["esm", "prod"],
    ["iife", "dev"],
    ["esm", "dev"],
];

export default formats.map(function ([format, mode]) {
    return {
        input: "src/bundle.js",
        output: {
            file: `dist${mode === "dev" ? "/dev" : ""}/vif${
                format === "iife" ? ".iife" : ""
            }.js`,
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
                    comments: mode === "dev",
                },
            }),
        ],
    };
});

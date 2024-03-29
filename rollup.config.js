import terser from "@rollup/plugin-terser";

/** @type {[string]} */
const formats = ["iife", "esm", "cjs", "umd"];

export default formats.map(function (format) {
    return {
        input: "src/bundle.js",
        output: {
            file: `dist/${format}/vif.${format === "cjs" ? "cjs" : "js"}`,
            format: format,
            name: (format === "iife" || format === "umd") && "Vif",
            minifyInternalExports: true,
        },
        plugins: [
            terser({
                mangle: {
                    properties: {
                        reserved: [
                            // reserved javascript properties
                            "connectedCallback",
                            "handleEvent",
                            // customElement properties
                            "onMount",
                            "onUnmount",
                            "useRef",
                            "useEffect",
                            // Element properties
                            "handler",
                            // renderFunction params
                            "props",
                            "html",
                            "css",
                            // signal properties
                            "value",
                            // global export properties
                            "useDefine",
                            "useSignal",
                            "useEffect",
                            "useObserve",
                            "useNavigate",
                            /**/ "route",
                            "useI18n",
                            /**/ "locale",
                        ],
                    },
                },
            }),
        ],
    };
});

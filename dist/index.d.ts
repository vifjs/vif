declare module "vifjs" {
    interface VifElement extends HTMLElement {
        /**
         * @see {@link https://github.com/vifjs/vif/blob/main/wiki/concepts/lifecycle.md}
         */
        onMount(args: { props: Object }): void;
        /**
         * @see {@link https://github.com/vifjs/vif/blob/main/wiki/concepts/lifecycle.md}
         */
        onUnmount(args: { props: Object }): void;
        /**
         * Function used to apply actions to a DOM reference
         * @returns {void}
         * @see {@link https://github.com/vifjs/vif/tree/main/wiki/concepts/context.md}
         */
        useRef(
            name: string,
            callback: (element: Element) => void,
            erase?: boolean
        ): void;
        /**
         * Function used to create a reactive function played every time the value of a signal inside changes
         * @returns {VifReactive} The reactive function
         * @see {@link https://github.com/vifjs/vif/tree/main/wiki/concepts/context.md}
         */
        useEffect(callback: Function): void;
    }

    /**
     * Function used to hydrate datas and create component template & schema
     * @see {@link https://github.com/vifjs/vif/tree/main/wiki/methods/define.md}
     */
    type VifRenderFunction = (
        this: VifElement,
        args: VifArguments
    ) => VifElement | NodeList | string | void;

    /**
     * Render function arguments like props, html, css
     * @see {@link https://github.com/vifjs/vif/tree/main/wiki/methods/define.md}
     */
    type VifArguments = {
        props?: Object;
        html?: (string: TemplateStringsArray) => string;
        css?: (string: TemplateStringsArray) => string;
    };

    interface VifSignal {
        (updatedValue?: any): [updatedValue: any];
        value: [updatedValue: any];
    }

    type VifReactive = Function;

    interface VifTranslations extends VifSignal {
        /**
         * Execute a callback after translations have been loaded
         * @param {Function} callback Function called after translations have been loaded
         * @see {@link https://github.com/vifjs/vif/tree/main/wiki/methods/i18n.md}
         */
        onload(callback: Function): void;
    }

    // --- declarations ---

    /**
     * Function used to define a customElement
     * @returns {VifElement} The customElement class instance
     * @see {@link https://github.com/vifjs/vif/tree/main/wiki/methods/define.md}
     */
    function useDefine(
        name: string,
        renderFunction: VifRenderFunction
    ): VifElement;

    /**
     * Function used to create a signal that can trigger changes through reactives functions
     * @returns {VifSignal} A signal that can be used to trigger reactives functions
     * @see {@link https://github.com/vifjs/vif/tree/main/wiki/methods/signal.md}
     */
    function useSignal(initialValue: any): VifSignal;

    /**
     * Function used to create a reactive function played every time the value of a signal inside changes
     * @returns {VifReactive} The reactive function
     * @see {@link https://github.com/vifjs/vif/tree/main/wiki/methods/effect.md}
     */
    function useEffect(callback: Function): VifReactive;

    /**
     * Function used to observe a VifElement first hydration
     * @returns {void}
     * @see {@link https://github.com/vifjs/vif/tree/main/wiki/methods/observe.md}
     */
    function useObserve(options: {
        [tagName: string]: [action: Function];
    }): void;

    /**
     * Function used to navigate between routes with browser history
     * @property {VifSignal} route - Signal related to the current route
     * @returns {string} String representing the updated URL
     * @see {@link https://github.com/vifjs/vif/tree/main/wiki/methods/navigate.md}
     */
    function useNavigate(data: string | Event): string;

    /**
     * Function used to retrieve translations signal from translations definition
     * @property {VifSignal} locale - Signal used to retrieve or update the current locale
     * @returns {VifTranslations} Signal containing all the translations for the current locale
     * @see {@link https://github.com/vifjs/vif/tree/main/wiki/methods/i18n.md}
     */
    function useI18n(locales: {
        [country: string]: {
            [province: string]: () => Promise<Object>;
        };
    }): VifTranslations;
}

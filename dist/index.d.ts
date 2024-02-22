declare module "vifjs" {
    interface VifElement extends HTMLElement {
        onMount(args: { props: Object }): void;
        onUnmount(args: { props: Object }): void;
        useRef(
            name: string,
            callback: (element: Element) => void,
            erase?: boolean
        ): void;
        useEffect(callback: Function): void;
    }

    type VifRenderFunction = (
        this: VifElement,
        args: {
            props: Object;
            html: (string: string) => string;
            css: (string: string) => string;
        }
    ) => VifElement | NodeList | void;

    interface VifSignal {
        (updatedValue?: any): [updatedValue: any];
        value: [updatedValue: any];
    }

    type VifReactive = Function;

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
     * Function used to define locales, update locale or display translations
     * @property {VifSignal} locale - Signal used to retrieve or update the current locale
     * @property {Function} onload - Execute a callback after translations have been loaded
     * @returns {string} String representing the updated URL
     * @see {@link https://github.com/vifjs/vif/tree/main/wiki/methods/i18n.md}
     */
    function useI18n(locales?: {
        [country: string]: {
            [province: string]: () => Promise<Object>;
        };
    }): void;
}

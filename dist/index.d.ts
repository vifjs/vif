type VifTemplateMethod = (string: string) => string;

type VifProps = Object;

type VifRenderProperties = {
    props: VifProps;
    html?: VifTemplateMethod;
    css?: VifTemplateMethod;
};

type VifLifecycleMethod = (args: VifRenderProperties) => void;

type VifRenderFunction = (
    args: VifRenderProperties
) => VifElement | NodeList | void;

type VifRefCallback = (element: Element) => void;

type useRef = (name: string, callback: VifRefCallback, erase?: boolean) => void;

interface VifElement extends HTMLElement {
    onMount: VifLifecycleMethod;
    onUnmount: VifLifecycleMethod;
    useRef: useRef;
}

type VifSignalValue = any;

type VifSignalDependencies = Set<Function>;

interface VifSignal {
    (updatedValue?: VifSignalValue): VifSignalValue;
    value: VifSignalValue;
    effect: VifSignalDependencies;
}

interface VifNavigate {
    (data: string | Event): string;
    route: VifSignal;
}

type VifObserved = {
    [tagName: string]: Function;
};

type VifLocales = {
    [country: string]: {
        [province: string]: () => Promise<Object>;
    };
};

interface VifI18n {
    (locales?: VifLocales): void;
    locale: VifSignal;
    onload: (callback: Function) => any;
}

// declarations
declare function useDefine(
    name: string,
    renderFunction: VifRenderFunction
): VifElement;
declare function useSignal(initialValue: any): VifSignal;
declare function useObserve(object: VifObserved): void;
declare var useNavigate: VifNavigate;
declare var useI18n: VifI18n;

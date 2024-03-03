import {
    useDefine,
    useI18n,
    useNavigate,
    useSignal,
} from "../../dist/esm/vif.js";

const firstTranslationsObject = {
    "en-EN.js": {
        default: {
            button: "This is a button",
        },
    },
    "fr-FR.js": {
        default: {
            button: "Voici le bouton",
        },
    },
};

const secondTranslationsObject = {
    "en-EN.js": {
        default: {
            p: "This is a paragraph",
        },
    },
    "fr-FR.js": {
        default: {
            p: "Voici le paragraphe",
        },
    },
};

function fakeImport(obj, path) {
    return new Promise((resolve) => setTimeout(() => resolve(obj[path]), 1000));
}

const firstT = useI18n({
    en: {
        EN: () => fakeImport(firstTranslationsObject, "en-EN.js"),
        default: "EN",
    },
    fr: {
        FR: () => fakeImport(firstTranslationsObject, "fr-FR.js"),
        default: "FR",
    },
    default: "EN",
});

const secondT = useI18n({
    en: {
        EN: () => fakeImport(secondTranslationsObject, "en-EN.js"),
        default: "EN",
    },
    fr: {
        FR: () => fakeImport(secondTranslationsObject, "fr-FR.js"),
        default: "FR",
    },
    default: "EN",
});

function First({ props }) {
    props.t = firstT;
    return this.children;
}

function Second({ props }) {
    props.t = secondT;
    return this.children;
}

setTimeout(() => {
    firstT.onload(() => useDefine("first", First));
}, 500);
secondT.onload(() => useDefine("second", Second));

setTimeout(() => {
    useI18n.locale("en-GB");
}, 4000);

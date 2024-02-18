import {
    useDefine,
    useI18n,
    useSignal,
} from "https://cdn.jsdelivr.net/npm/vifjs@latest/esm/vif.js";

// update <html> lang attribute
const importLocale = (src, locale) => {
    document.documentElement.setAttribute("lang", locale);
    return import(src);
};

// supported languages
const languages = [
    ["en-GB", "English", "gb"],
    ["fr-FR", "Français", "fr"],
    ["es-ES", "Español", "es"],
];

function App({ props }) {
    props.t = useI18n;
    props.count = useSignal(0);
    props.languages = languages;
    props.showLanguages = useSignal(false);
    props.switchLocale = (e) =>
        useI18n.locale(e.currentTarget.value) && props.showLanguages(false);
    props.flagFromLocale = (l) =>
        `https://raw.githubusercontent.com/jackiboy/flagpack/master/flags/4x3/${l}.svg`;

    return this;
}

useI18n.onload(() => {
    useDefine("app", App);
});

useI18n({
    en: {
        GB: () => importLocale("../locales/en.js", "en-GB"),
        default: "GB",
    },
    fr: {
        FR: () => importLocale("../locales/fr.js", "fr-FR"),
        default: "FR",
    },
    es: {
        ES: () => importLocale("../locales/es.js", "es-ES"),
        default: "ES",
    },
    default: "EN",
});

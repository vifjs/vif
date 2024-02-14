import Vif from "https://cdn.jsdelivr.net/gh/vifjs/vif/dist/esm/vif.js";

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

Vif.i18n.onload(() => {
    function App(signal) {
        this.t = Vif.i18n;
        this.count = signal(0);
        this.languages = languages;
        this.showLanguages = signal(false);
        this.switchLocale = (e) =>
            Vif.i18n.locale(e.currentTarget.value) && this.showLanguages(false);
        this.flagFromLocale = (l) =>
            `https://raw.githubusercontent.com/jackiboy/flagpack/master/flags/4x3/${l}.svg`;
        return this.component;
    }

    Vif.define("app", App);
});

Vif.i18n({
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

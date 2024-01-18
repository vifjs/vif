// TODO -> implémenter les locales

import { reactive, signal } from "../reactivity/signal.js";
import { VIF } from "../utils/types.js";

/**
 * locale signal used to retrieve or define a locale
 * @type {VIF.Signal}
 */
const locale = signal(localStorage.getItem("locale") || navigator.language);

/**
 * translations signal used to retreive or define translations object
 * @type {VIF.Signal}
 */
const translations = signal();

/**
 * i18n function used to define locale or display translations
 * @type {Function}
 */
export const i18n = (newLocale) =>
    newLocale ? locale(newLocale) : translations();

/** @typedef {()=>import(string)} LocaleFunction */
/** @typedef {{identifier: LocaleFunction|LocaleObject}} LocaleObject */
/**
 * Function used to setup locales and imports
 * @param {LocaleObject} languages
 */
export const locales = (languages) => {
    /**
     * Function used to retrieve a locale import function
     * @param {LocaleObject} object
     * @param {string} localeKey
     * @returns {LocaleObject|LocaleFunction}
     */
    const localeFromObject = (object, localeKey) =>
        object[localeKey] || object[object.default];

    reactive(() => {
        // get the country name and province name from string
        // "fr-FR" -> ["fr", "FR"] "fr" -> ["fr"]
        const [country, province] = locale().split("-");

        // retrieve the callback from the localeObject
        let callback = localeFromObject(
            localeFromObject(languages, country),
            province
        );

        // execute the callback, and after promise.resolve
        // trigger the translations signal
        // TODO -> si objet a la place que faire
        // TODO -> que faire pendant le pending time ? comme undefined throw errors
        // TODO -> export i18n seulement ? plus judicieux que locales + i18n ?
        if (callback) {
            callback().then((exportedModule) =>
                translations(exportedModule.default)
            );
        }
    });
};

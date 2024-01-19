/*
    TODO -> Explain
    {
        en: {
            EN: () => import('en.js'),
            default: 'EN'
        },
        fr: {
            FR: () => import('fr.js'),
            default: 'FR'
        },
        default: 'en'
    }
*/

import { reactive, signal } from "../reactivity/signal.js";
import { VIF } from "../utils/types.js";

/** @type {Array<Function>} */
let i18nMemo = [];

/**
 * locale signal used to retrieve or define a locale
 * @type {VIF.Signal}
 */
const locale = signal();

/**
 * translations signal used to retreive or define translations object
 * @type {VIF.Signal}
 */
const translations = signal();

/**
 * Function used to setup locales and imports
 * @param {VIF.Locale.Definition} languages
 */
const locales = (languages) => {
    /**
     * Function used to retrieve a locale import function
     * @param {VIF.Locale.Definition} object
     * @param {string} localeKey
     * @returns {VIF.Locale.Definition|VIF.Locale.Action}
     */
    const localeFromObject = (object, localeKey) =>
        object[localeKey] || object[object.default];

    // setup locale value
    locale(localStorage.getItem("locale") || navigator.language);

    reactive(() => {
        // get the country name and province name from string
        // "fr-FR" -> ["fr", "FR"] "fr" -> ["fr"]
        const [country, province] = locale().split("-");

        // we keep the province even if the country is incorrect because
        // for example, if "fr" doesn't exist, "fr-CA" input will be tranform
        // into "en-CA" which make more sense than "en-EN". However if "en-CA"
        // doesn't exist the function will retreive the default locale "en-EN".
        const result = localeFromObject(
            localeFromObject(languages, country),
            province
        );

        // execute the result, and after promise.resolve
        // trigger the translations signal
        if (result) {
            result().then((exportedModule) => {
                // update the translation signal
                translations(exportedModule.default);
                // execute all pending callbacks and set the memo to undefined
                // by doing this we prevent future useless executions
                i18nMemo &&
                    (i18nMemo = i18nMemo.forEach((callback) => callback()));
            });
        }
    });
};

/**
 * Execute a callback after translations have been loaded
 * @param {Function} callback Function called after translations have been loaded
 */
const i18nOnLoad = (callback) => {
    // if translation is already loaded, execute the callback
    if (translations()) {
        callback();
    }
    // else push the callback into the queue
    else {
        i18nMemo.push(callback);
    }
};

/**
 * Function used to define locales, update locale or display translations
 * @type {VIF.Method.I18n}
 */
export const i18n = (param) =>
    typeof param === "string"
        ? locale(param)
        : param
        ? locales(param)
        : translations();

i18n.onload = i18nOnLoad;

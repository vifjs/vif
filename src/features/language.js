/*
    Internationalization (i18n) implementation based on browser locale
    and localStorage. Used to create multilingual applications and websites.
    
    Supports lazy-loaded translations, locale persistence, translations as
    functions, and splited language files.

    # i18n definition example :
    {
        en: {
            GB: () => import('en.js'),
            default: 'GB'
        },
        fr: {
            FR: () => import('fr.js'),
            default: 'FR'
        },
        default: 'en'
    }

    # i18n translations file example : 
    export default {
        something: "Quelque chose (this is french btw)"
        ...
    }
*/

import { reactive, signal } from "../reactivity/signal.js";
import { VIF } from "../utils/types.js";

/**
 * locale signal used to retrieve or define a locale
 * @type {VIF.Signal}
 */
const locale = signal(localStorage.getItem("locale") || navigator.language);

/**
 * Function used to retrieve a locale import function
 * @param {VIF.Locale.Definition} definition
 * @param {string} localeKey
 * @returns {VIF.Locale.Definition|VIF.Locale.Action}
 */
const localeFromDefinition = (definition, localeKey) =>
    definition[localeKey] || definition[definition.default];

/**
 * Function used to retrieve translations signal from translations definition
 * @type {VIF.Method.I18n}
 */
export const i18n = (definition) => {
    /**
     * translations signal used to retreive or define translations object
     * @type {VIF.Signal}
     * @property {Function} onload Execute a callback after translations have been loaded
     */
    const translations = signal();

    /** @type {Array<Function>} */
    let onloadMemo = [];

    /**
     * Execute a callback after translations have been loaded
     * @param {Function} callback Function called after translations have been loaded
     */
    translations.onload = (callback) => {
        // if translations are already loaded, execute the callback
        if (translations()) {
            callback();
        }
        // else push the callback into the queue
        else {
            onloadMemo.push(callback);
        }
    };

    // create the reactive function
    reactive(() => {
        // get the country name and province name from string
        // "fr-FR" -> ["fr", "FR"] "fr" -> ["fr"]
        const [country, province] = locale().split("-");

        // we keep the province even if the country is incorrect because
        // for example, if "fr" doesn't exist, "fr-CA" input will be tranform
        // into "en-CA" which make more sense than "en-EN". However if "en-CA"
        // doesn't exist the function will retreive the default locale "en-EN".
        const result = localeFromDefinition(
            localeFromDefinition(definition, country),
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
                onloadMemo &&
                    (onloadMemo = onloadMemo.forEach((callback) => callback()));
            });
        }
    });

    return translations;
};

/** @type {VIF.Signal} */
i18n.locale = locale;

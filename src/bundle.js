/*
    export Vif {
        define: define a new customElement
        signal: create a Vif signal
        observe: execute an action the first time we find the element in the DOM
        navigate: update the current route, history and url global signal
    }
*/

import { define } from "./define.js";
import { navigate, route } from "./features/navigate.js";
import { observe } from "./features/observe.js";
import { i18n } from "./features/language.js";
import { signal } from "./reactivity/signal.js";
import { VIF } from "./utils/types.js";

/**
 * @property {VIF.Method.Define} define Function used to define a customElement
 * @property {VIF.Method.Signal} signal Function used to create a signal that can trigger changes through reactives functions
 * @property {VIF.Method.Observe} observe Function used to observe the first addition of an x-element to the DOM
 * @property {VIF.Method.Navigate} navigate Function used to navigate between routes with browser history
 * @property {VIF.Signal} route Signal related to the current route
 * @property {VIF.Method.I18n} i18n Function used to define locales, update locale or display translations
 */
const Vif = {
    define,
    signal,
    observe,
    navigate,
    route,
    i18n,
};

export default Vif;

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
import { signal } from "./reactivity/signal.js";
import { VIF } from "./utils/types.js";

/**
 * @type {{define: VIF.Method.Define, signal: VIF.Method.Signal, observe: VIF.Method.Observe, navigate: VIF.Method.Navigate, route: VIF.Signal}}
 */
const Vif = {
    define,
    signal,
    observe,
    navigate,
    route,
};

export default Vif;

/*
    Lazy actions implementation built in xElements.
     
    When hydrating an xElement, all nested xElements will be submitted
    to the observer, if the tagName matches one of the keys, then the
    associated function will be executed.
*/

import { VIF } from "../utils/types.js";

/** @type {{elementTag: function}} */
let observerMemo = {};
export let observerDispatch = null;

/**
 * Every time a xElement is found during a schema creation
 * we use the observerDispatcher to trigger the associated function
 * @param {string} elementTag
 */
const observerDispacther = (elementTag) => {
    if (observerMemo[elementTag]) {
        observerMemo[elementTag]();
        observerMemo[elementTag] = false;
    }
};

/** @type {VIF.Method.Observe} */
export const observe = (actions) => {
    // we need to invert params in Object spread because
    // we don't want to erase properties of observerMemo
    observerMemo = { ...actions, ...observerMemo };

    // setup observeDispatch value equal to dispatcher
    // we do that for performances, because we don't want to
    // trigger the dispacher in schema creation if there is
    // no lazy load activated by the developer
    observerDispatch = observerDispacther;
};

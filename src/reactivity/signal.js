/*
    Vif signals implementation based on S.js
    https://github.com/adamhaile/S/blob/master/src/S.ts
*/

import { VIF } from "../utils/types.js";

/**
 * The current running reactive function
 * @type {VIF.Reactive|null}
 */
let currentReactive = null;

/**
 * Create a signal function
 * @type {VIF.Method.Signal}
 */
export const signal = (value) => {
    /**
     * create the getter/setter function
     * @type {VIF.Method.Signal}
     */
    const currentSignal = (dataUpdated) => {
        // if new data is sent
        if (dataUpdated !== undefined) {
            // update the value
            currentSignal.value = dataUpdated;
            // run all the dependencies
            for (const callback of currentSignal.reactives) {
                callback();
            }
        } else if (currentReactive) {
            // if signal is running inside of a reactive function
            // we create all necessary dependencies
            currentSignal.reactives.add(currentReactive);
            currentReactive.signals.add(currentSignal.reactives);
        }

        // return the value
        return currentSignal.value;
    };

    // use this to access value without triggering signal
    currentSignal.value = value;

    // use this to check if a variable is a signal
    currentSignal.issignal = true;

    /**
     * setup dependencies
     * @type {VIF.Dependencies.Reactives}
     */
    currentSignal.reactives = new Set();

    // return the signal setter/getter function
    return currentSignal;
};

/** @returns {VIF.Element.DisconnectCallback} */
export const disconnectReactive = (reactive) => () => {
    /** @type {VIF.Dependencies.Reactives} */
    for (const signalReactives of reactive.signals) {
        // remove the function from the signal dependencies
        // by doing this signal will not trigger the function on change
        signalReactives.delete(reactive);
    }
};

/**
 * Run a function, if signal is played add the function to it's dependencies
 * then return the function as a reactive function
 * @param {Function} callback
 * @returns {VIF.Reactive}
 */
export const reactive = (callback) => {
    // store the previous value
    const previousValue = currentReactive;

    // update currentReactive function and create a dependency Array
    currentReactive = callback;
    /**
     * setup dependencies
     * @type {VIF.Dependencies.Signals}
     */
    currentReactive.signals = new Set();

    /** @type {VIF.Element.DisconnectCallback} */
    currentReactive.disconnectCallback = disconnectReactive(currentReactive);

    // call the function
    callback();

    // set currentReactive value back to previousValue
    // this is very important for nested reactives functions
    currentReactive = previousValue;

    return callback;
};

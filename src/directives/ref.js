import { reactive, signal } from "../reactivity/signal.js";
import { VIF } from "../utils/types.js";

/**
 * Function used to create an array with a signal property
 * this is usefull to trigger references updates
 * @returns {VIF.Element.References.Array}
 */
export const createReferenceArray = () => {
    const referenceArray = [];
    // add a signal as property of the array
    referenceArray.signalGetter = signal([]);
    return referenceArray;
};

/**
 * Apply reference callbacks based on attribute value
 * @type {VIF.Directive}
 */
export const refDirective = (context, element, expression) => {
    /** @type {string} */
    const referenceName = expression;

    /** @type {VIF.Element.References.Array} */
    const referenceArray = context.ref(referenceName);

    // used to determine if it's necessary to run the last callback only
    let primaryHydration = true;

    return reactive(() => {
        /** @type {VIF.Element.References.Array} */
        const array = referenceArray.signalGetter();

        // apply all callbacks first time
        if (primaryHydration) {
            for (const callback of array) {
                callback(element);
            }
            primaryHydration = false;
        }
        // after apply only the last callback
        else {
            /** @type {Function} */
            array[array.length - 1](element);
        }
    });
};

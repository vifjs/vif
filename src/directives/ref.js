import { reactive } from "../reactivity/signal.js";
import { VIF } from "../utils/types.js";

/**
 * Apply reference callbacks based on attribute value
 * @type {VIF.Directive}
 */
export const refDirective = (component, element, expression) => {
    /** @type {string} */
    const referenceName = expression;

    /** @type {VIF.Element.References.Callbacks} */
    const referenceCallbacks = component.reference(referenceName);

    // used to determine if it's necessary to run the last callback only
    let primaryHydration = true;

    return reactive(() => {
        /** @type {VIF.Element.References.Callbacks} */
        const array = referenceCallbacks();

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

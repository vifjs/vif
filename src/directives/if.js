import { reactive } from "../reactivity/signal.js";
import { addPart, removePart, setupTemplateDirective } from "./template.js";
import { VIF } from "../utils/types.js";

/**
 * Append or remove a DOM part based on expression result
 * @type {VIF.Directive}
 */
export const ifDirective = (context, element, expression) => {
    setupTemplateDirective(element);

    /** @type {boolean} */
    let previousValue = false;

    return reactive(() => {
        /** @type {boolean} */
        const value = !!expression(context);

        if (value !== previousValue) {
            // update previousValue
            previousValue = value;

            // add or remove parts
            if (value) {
                addPart(element, context, 0);
            } else {
                removePart(element, 0);
            }
        }
    });
};

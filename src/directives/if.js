import { reactive } from "../reactivity/signal.js";
import { addPart, removeParts, setupTemplateDirective } from "./template.js";
import { VIF } from "../utils/types.js";

/**
 * Append or remove a DOM part based on expression result
 * @type {VIF.Directive}
 */
export const ifDirective = (component, element, expression) => {
    setupTemplateDirective(element);

    /** @type {boolean} */
    let previousValue = false;

    return reactive(() => {
        /** @type {boolean} */
        const value = !!expression(component.datas);

        if (value !== previousValue) {
            // update previousValue
            previousValue = value;

            // add or remove parts
            if (value) {
                addPart(element, component.datas, 0);
            } else {
                removeParts(element, 0);
            }
        }
    });
};

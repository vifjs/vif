/*
    Directive executée depuis template x-if=""
    reprend le template.content et s'en sert pour faire du clonnage d'éléments
    Fait partie des attr directives
*/

import { reactive } from "../reactivity/signal.js";
import { addPart, removePart, setupTemplateDirective } from "./template.js";

/*
    TODO -> explain
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

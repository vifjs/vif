/*
    Route directive for templates
*/

import { currentRoute } from "../features/navigate.js";
import { reactive } from "../reactivity/signal.js";
import {
    addPart,
    removePart,
    setupTemplateDirective,
    updatePart,
} from "./template.js";

/*
    TODO -> explain
*/
export const routeDirective = (context, element, expression) => {
    setupTemplateDirective(element);

    /** @type {RegExp} */
    const regex = new RegExp(expression || ".");

    /** @type {string} */
    const keyName = "params";
    const key = element.getAttribute(keyName) || keyName;

    let previousValue = null;

    return reactive(() => {
        const params = currentRoute().match(regex) || null;

        if (params !== previousValue) {
            // if there is a previousValue this means that the dom element
            // already exists, so we only need to update the signal
            if (params && previousValue) {
                updatePart(element, 0, params);
            } else if (params) {
                addPart(element, context, 0, key, params);
            } else {
                removePart(element, 0);
            }
        }

        previousValue = params;
    });
};

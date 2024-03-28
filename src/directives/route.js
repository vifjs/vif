import { route } from "../features/navigate.js";
import { reactive } from "../reactivity/signal.js";
import { VIF } from "../utils/types.js";
import {
    addPart,
    removeParts,
    setupTemplateDirective,
    updatePart,
} from "./template.js";

/**
 * Append or remove a DOM part based on current url regex match
 * @type {VIF.Directive}
 */
export const routeDirective = (component, element, expression) => {
    setupTemplateDirective(element);

    /** @type {RegExp} */
    const regex = new RegExp(expression || ".");

    /** @type {string} */
    const keyName = "params";
    const key = element.getAttribute(keyName) || keyName;

    let previousValue = null;

    return reactive(() => {
        const params = route().match(regex) || null;

        if (params !== previousValue) {
            // if there is a previousValue this means that the dom element
            // already exists, so we only need to update the signal
            if (params && previousValue) {
                updatePart(element, 0, params);
            } else if (params) {
                addPart(element, component.datas, 0, key, params);
            } else {
                removeParts(element, 0);
            }
        }

        previousValue = params;
    });
};

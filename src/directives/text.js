import { reactive } from "../reactivity/signal.js";
import { VIF } from "../utils/types.js";

/**
 * Set HTMLElement text content from the expression result
 * @type {VIF.Directive}
 */
export const textDirective = (component, element, expression) => {
    return reactive(() => (element.textContent = expression(component.datas)));
};

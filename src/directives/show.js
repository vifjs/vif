import { reactive } from "../reactivity/signal.js";
import { VIF } from "../utils/types.js";

/**
 * Set HTMLElement display from the expression result
 * @type {VIF.Directive}
 */
export const showDirective = (component, element, expression) => {
    /**
     * store the initial display value
     * @type {string}
     */
    const initialValue = element.style.display;

    return reactive(() => {
        const visible = expression(component.datas);

        if (visible) {
            // if there was an initial value we restore the value
            // else we remove the display style property
            initialValue
                ? (element.style.display = initialValue)
                : element.style.removeProperty("display");
        } else {
            element.style.display = "none";
        }
    });
};

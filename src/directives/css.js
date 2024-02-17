import { createCssSelector, cssAttributeName } from "../templates/css.js";
import { VIF } from "../utils/types.js";

/**
 * Add scoped style attribute based on attribute value
 * @type {VIF.Directive}
 */
export const cssDirective = (component, element, expression) => {
    // get select the selector and the indicator
    const selector = expression;
    const indicator = component.indicator;

    // set the css-x attribute to the element
    element.setAttribute(
        cssAttributeName,
        createCssSelector(selector, indicator)
    );
};

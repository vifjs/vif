/*
    Function used to define a customElement extending xElement generic class,
    and checks that the element does not already exist in the registry
*/

import { xElement } from "../controllers/element.js";
import { VIF } from "../utils/types.js";

/**
 * keep track of defined components
 * @type {{elementTag: class}}
 */
export const defineMemo = {};

/** @type {VIF.Method.Define} */
export const define = (name, renderFunction) => {
    const className = "X-" + name.toUpperCase();

    // create the customElement class
    defineMemo[className] = class extends xElement {
        constructor() {
            super();
        }
    };

    // add prototype & static properties
    /** @type {VIF.Method.Define.Render} */
    defineMemo[className].renderFunction = renderFunction;
    /** @type {VIF.Definition} */
    defineMemo[className].prototype.static = defineMemo[className];

    // define the customElement
    customElements.define(`x-${name}`, defineMemo[className]);

    return defineMemo[className];
};

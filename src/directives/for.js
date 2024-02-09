/*
    Vif reconcile algorithm implementation based on signals
*/

import { reactive } from "../reactivity/signal.js";
import { VIF } from "../utils/types.js";
import {
    addPart,
    removePart,
    setupTemplateDirective,
    updatePart,
} from "./template.js";

/**
 * reconcile algorithm implementation
 * @param {VIF.Element.Datas} context
 * @param {HTMLTemplateElement} element
 * @param {Array} prevList
 * @param {Array} nextList
 * @param {string} key
 */
const reconcile = (context, element, prevList, nextList, key) => {
    /** @type {number} */
    let index = 0;
    const prevLength = prevList.length;
    const nextLength = nextList.length;

    /** @type {number} */
    let gap = nextLength - prevLength;

    // UPDATE ELEMENTS
    while (index < prevLength && index < nextLength) {
        // if the two values are different
        if (prevList[index] !== nextList[index]) {
            // we update the signal value with the nextList value
            updatePart(element, index, nextList[index]);
        }
        index++;
    }

    // ADD ELEMENTS
    while (gap > 0) {
        addPart(element, context, index, key, nextList[index]);
        gap--;
        index++;
    }

    // REMOVE ELEMENTS
    while (gap < 0) {
        removePart(element, index);
        gap++;
        index++;
    }
};

/**
 * Append or remove DOM parts based on expression result as Array
 * @type {VIF.Directive}
 */
export const forDirective = (context, element, expression) => {
    setupTemplateDirective(element);

    /** @type {Array} */
    let prevList = [];

    /** @type {string} */
    const keyName = "item";
    const key = element.getAttribute(keyName) || keyName;

    return reactive(() => {
        /** @type {Array} */
        const nextList = expression(context);

        // apply reconcile algorithm
        reconcile(context, element, prevList, nextList, key);

        // update prevList value to nextList
        prevList = nextList.slice();
    });
};

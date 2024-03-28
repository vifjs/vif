/*
    What append in a directive function ?
    1 - the directive function is stored inside component's schema
    2 - during the hydration process the directive function run with the following parameters
    3 - the directive function includes a reactive function, once activated it rerun every
        time a containing signal change. On every run the reactive function will trigger the
        expression with the props as scope
    4 - the result of the expression based on the context is used to update the directive
*/

/*
    The template directives are used to efficiently manipulate DOM parts.
*/

import { xAbstractElement } from "../controllers/abstract.js";
import { signal } from "../reactivity/signal.js";
import { cleanupTemplateFragment, xcomment } from "../templates/html.js";
import {
    childrenOf,
    contentOf,
    elementCloneNode,
    nextSiblingOf,
} from "../utils/shortcuts.js";
import { VIF } from "../utils/types.js";
import { forDirective } from "./for.js";
import { ifDirective } from "./if.js";
import { routeDirective } from "./route.js";

/**
 * create an abstract DOM part to manipulate a fragment
 * @param {VIF.Element.Datas} context
 * @param {number} index
 * @param {string} key
 * @param {any} value
 * @returns {VIF.Part}
 */
export const createPart = (context, index, key, value) => {
    /**
     * create a signal for the current array value
     * @type {VIF.Signal}
     */
    const property = key && signal(value);

    // add index to property
    if (property) {
        property.index = index;
    }

    // create an abstract element to manage the fragment state and setup its context
    // 1 - clone the current context
    // 2 - add a new [key] or "item" property corresponding
    //     to signal of current array value
    const abstractElement = new xAbstractElement(
        !key ? context : { ...context, [key]: property }
    );

    // return the new part
    return { abstractElement, property };
};

/**
 * create an abstract DOM part and add it into the DOM
 * @param {HTMLTemplateElement} template
 * @param {VIF.Element.Datas} context
 * @param {number} index
 * @param {string} key
 * @param {any} value
 */
export const addPart = (template, context, index, key, value) => {
    /** @type {Array<VIF.Part>} */
    const parts = template.templateParts;

    /** @type {VIF.Part} */
    let currentPart = parts[index + 1];

    /** @type {DocumentFragment} */
    const fragment = elementCloneNode(contentOf(template), true);

    // if the part already exist, update the property value
    if (currentPart) {
        currentPart.property && currentPart.property(value);
    }
    // else we create the part corresponding to the fragment
    // the part will be stored into an array of parts
    // for each part we can retrieve the flag, the signal
    // for the current array item, and the abstractElement which
    // store the context and the hydration methods
    else {
        currentPart = parts[index + 1] = createPart(context, index, key, value);
    }

    // add or update the flag property of the part
    currentPart.flag = fragment.lastChild;

    // if there is a cached schema, hydrate the fragment
    template.immutableSchema &&
        currentPart.abstractElement.hydrate(
            childrenOf(fragment),
            template.immutableSchema
        );

    /** @type {Comment} */
    // head correspond to the previous part flag
    // we call tail the flag of the current part
    const head = parts[index].flag;

    // insert fragment after the previous part flag
    head.parentNode.insertBefore(fragment, nextSiblingOf(head));
};

/**
 * update a DOM part property value
 * @param {HTMLTemplateElement} template
 * @param {number} index
 * @param {string} value
 */
export const updatePart = (template, index, value) => {
    // find the part matching to the index and update the signal value
    template.templateParts[index + 1].property(value);
};

/**
 * remove a DOM part from the DOM and disconnect it
 * @param {HTMLTemplateElement} template
 * @param {number} index
 */
export const removeParts = (template, index) => {
    /** @type {Array<VIF.Part>} */
    const parts = template.templateParts;

    /** @type {Comment} */
    // get the head flag
    const head = parts[index].flag;

    // remove all the nodes between head and tail for all parts
    while (index++ < parts.length - 1) {
        // get the current comparison node
        let currentNode = nextSiblingOf(head);
        // retrieve the current part tail
        const tail = parts[index].flag;

        /**
         * Remove all the nodes between head and tail
         * move currentNode forward after every deletion and stop
         * when currentNode and tail are equals
         */
        while (currentNode !== tail) {
            const next = nextSiblingOf(currentNode);
            currentNode.remove();
            currentNode = next;
        }

        // delete the final tail
        currentNode.remove();

        /**
         * disconnect the abstractElement
         * @type {VIF.Part}
         */
        parts[index].abstractElement.disconnectCallback();
    }
};

/**
 * setup template directives basics as template properties
 * @param {HTMLTemplateElement} template
 */
export const setupTemplateDirective = (template) => {
    // cleanup template
    cleanupTemplateFragment(template);

    /** @type {Array<VIF.Part>} */
    // create the parts array and store the global head flag
    // to retrieve the current part we must use parts[index + 1]
    const parts = (template.templateParts = [
        { flag: elementCloneNode(xcomment) },
    ]);

    // append a flag at the end of the template
    // so we don't have to clone it manually anymore
    contentOf(template).append(elementCloneNode(xcomment));

    /** @type {VIF.Element.DisconnectCallback} */
    template.disconnectCallback = () => {
        for (let x = 1; x < parts.length; x++) {
            parts[x].abstractElement.disconnectCallback();
        }
    };

    // replace the current template by the main flag
    template.replaceWith(parts[0].flag);
};

/**
 * Retrieve the corresponding directive from the attribute name
 * @param {string} attributeName
 */
export const templateDirective = (attributeName) => {
    if (attributeName === "x-for") {
        return forDirective;
    } else if (attributeName === "x-if") {
        return ifDirective;
    } else if (attributeName === "x-route") {
        return routeDirective;
    }
};

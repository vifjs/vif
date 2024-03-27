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
import { childrenOf, elementCloneNode } from "../utils/shortcuts.js";
import { VIF } from "../utils/types.js";
import { forDirective } from "./for.js";
import { ifDirective } from "./if.js";
import { routeDirective } from "./route.js";

/**
 * create an abstract DOM part to manipulate a fragment
 * @param {DocumentFragment} fragment
 * @param {VIF.Element.Datas} context
 * @param {number} index
 * @param {string} key
 * @param {any} value
 * @returns {VIF.Part}
 */
export const createPart = (fragment, context, index, key, value) => {
    /** @type {NodeList} */
    const nodes = fragment.childNodes;

    /**
     * get the comment flag to identify the head and tail of the fragment
     * @type {Comment}
     */
    const flag = nodes[nodes.length - 1];

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

    // return the part
    return { flag, abstractElement, property };
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
    let part = parts[index + 1];

    /** @type {DocumentFragment} */
    const fragment = elementCloneNode(template.content, true);

    // we create the part corresponding to the fragment
    // the part will be stored into an array of parts
    // for each part we can retrieve the flag, the signal
    // for the current array item, and the abstractElement which
    // store the context and the hydration methods
    // if the part already exist, update the property value
    if (part) {
        part.property && part.property(value);
    } else {
        part = parts[index + 1] = createPart(
            fragment,
            context,
            index,
            key,
            value
        );
    }

    // if there is a cached schema, hydrate the fragment
    template.immutableSchema &&
        part.abstractElement.hydrate(
            childrenOf(fragment),
            template.immutableSchema
        );

    // replace the current flag by himself plus fragment
    parts[index].flag.replaceWith(parts[index].flag, fragment);
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
export const removePart = (template, index) => {
    /** @type {Array<VIF.Part>} */
    const parts = template.templateParts;

    /**
     * get the head and tail flags
     * @type {Comment}
     */
    let head = parts[index].flag.nextSibling;
    const tail = parts[index + 1].flag;

    /**
     * disconnect the abstractElement
     * @type {VIF.Part}
     */
    parts[index + 1].abstractElement.disconnectCallback();

    /**
     * Remove all the elements between head and tail
     * move head forward after every deletion and stop
     * when head and tail are equals
     */
    while (head !== tail) {
        const prev = head;
        head = head.nextSibling;
        prev.remove();
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
    template.templateParts = [{ flag: elementCloneNode(xcomment) }];

    // append a flag at the end of the template
    // so we don't have to clone it manually anymore
    template.content.append(elementCloneNode(xcomment));

    /** @type {VIF.Element.DisconnectCallback} */
    template.disconnectCallback = () => {
        for (let x = 1; x < template.templateParts.length; x++) {
            template.templateParts[x].abstractElement.disconnectCallback();
        }
    };

    // replace the current template by the main flag
    template.replaceWith(template.templateParts[0].flag);
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

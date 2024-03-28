import {
    contentOf,
    documentCreateElement,
    dom,
    elementCloneNode,
    nextSiblingOf,
} from "../utils/shortcuts.js";

export let xcomment = dom.createComment("");
export let xtemplate = documentCreateElement("template");
export let xfragment = dom.createDocumentFragment();

/**
 * Remove all non ELEMENT_NODE from NodeList
 * @param {HTMLTemplateElement} template
 */
export const cleanupTemplateFragment = (template) => {
    /** @type {Node} */
    let node = contentOf(template).firstChild;

    // explore childNodes
    while (node) {
        /** @type {Node} */
        const next = nextSiblingOf(node);

        // remove node if it's not ELEMENT_NODE
        node.nodeType !== 1 && node.remove();

        // update node value
        node = next;
    }
};

/**
 * Create a DocumentFragment from a string literal
 * @param {string} string
 * @returns {DocumentFragment}
 */
export const createTemplateFragmentFromString = (string) => {
    // clone the template Element and inject innerHTML (for parsing)
    /** @type {HTMLTemplateElement} */
    let template = elementCloneNode(xtemplate);
    template.innerHTML = string;

    // cleanup template
    cleanupTemplateFragment(template);

    // return the template DocumentFragment
    return contentOf(template);
};

/**
 * Create a DocumentFragment from a NodeList
 * @param {NodeList} nodeList
 * @returns {DocumentFragment}
 */
export const createTemplateFragmentFromNodeList = (nodeList) => {
    // clone the DocumentFragment and append the NodeList
    /** @type {HTMLTemplateElement} */
    let template = elementCloneNode(xfragment);
    template.append(...nodeList);

    // we don't need to cleanup template here because nodeLists are
    // always different, so cleanup process represent a huge overload
    // compare to node replacement

    // return the DocumentFragment
    return template;
};

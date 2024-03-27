import {
    documentCreateElement,
    dom,
    elementCloneNode,
} from "../utils/shortcuts.js";

export let xcomment = dom.createComment("");
export let xtemplate = documentCreateElement("template");
export let xfragment = dom.createDocumentFragment();

/**
 * Remove all non ELEMENT_NODE from NodeList
 * @param {HTMLTemplateElement} template
 */
export const cleanupTemplateFragment = (template) => {
    /** @type {NodeList} */
    const nodes = template.content.childNodes;

    /** @type {number} */
    let index = nodes.length;

    // explore childNodes
    while (index--) {
        /** @type {Node} */
        const node = nodes[index];

        // remove node if it's not ELEMENT_NODE
        node.nodeType !== 1 && node.remove();
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
    return template.content;
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

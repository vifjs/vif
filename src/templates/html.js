import {
    documentCreateElement,
    dom,
    elementCloneNode,
} from "../utils/shortcuts.js";

export let xcomment = dom.createComment("");
export let xtemplate = documentCreateElement("template");
export let xfragment = dom.createDocumentFragment();

/**
 * Create a DocumentFragment from a string literal
 * @param {string} string
 * @returns {DocumentFragment}
 */
export const createTemplateFragmentFromString = (string) => {
    // clone the template Element and inject innerHTML (for parsing)
    let template = elementCloneNode(xtemplate);
    template.innerHTML = string;

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
    let template = elementCloneNode(xfragment);
    template.append(...nodeList);

    // return the DocumentFragment
    return template;
};

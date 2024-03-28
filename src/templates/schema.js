/*
    Evaluates a template and builds the interactivity schema.
    This makes the analysis of a new template much more efficient.
*/

import { attributeDirective } from "../directives/attr.js";
import { dataDirective } from "../directives/data.js";
import { eventDirective } from "../directives/event.js";
import { generateFunctionFromString } from "../evaluator/evaluator.js";
import {
    isXAttribute,
    isXElement,
    isXEventAttribute,
    isXTemplate,
} from "../utils/tests.js";
import { VIF } from "../utils/types.js";
import { templateDirective } from "../directives/template.js";
import {
    attributeNameSubstring,
    contentOf,
    immutableChildrenOf,
} from "../utils/shortcuts.js";

/**
 * Create a xElement template schema
 * @param {NodeList} nodeList
 * @returns {boolean|VIF.Schema}
 */
export const createTemplateSchema = (nodeList) => {
    /** @type {VIF.Schema} */
    const schema = [];

    for (let x = 0; x < nodeList.length; x++) {
        /** @type {HTMLElement} */
        let element = nodeList[x];
        const isxtemplate = isXTemplate(element);
        const isxelement = !isxtemplate && isXElement(element);

        /** @type {VIF.Definition} */
        const definition = {
            // tagName: element.tagName, // DEBUG
            pos: x,
            schema: false,
            reactive: isxtemplate || isxelement,
            attrs: new Map(),
        };

        /** @type {number} */
        let index = element.attributes.length;

        // explore element attributes
        while (index--) {
            /** @type {HTMLElement.attribute} */
            const attr = element.attributes[index];

            if (isXAttribute(attr)) {
                /** @type {boolean} */
                const isxevent = isXEventAttribute(attr);
                /** @type {string} */
                const name = isxevent
                    ? attributeNameSubstring(attr, 5)
                    : attributeNameSubstring(attr, 2);

                /**
                 * get the expression function or the attribute value for ref, css or route
                 * @type {VIF.Expression|string}
                 */
                const expression =
                    name === "ref" || name === "css" || name === "route"
                        ? attr.value
                        : generateFunctionFromString(attr.value || "");

                /**
                 * extract the corresponding attribute or data directive
                 * @type {VIF.Directive}
                 */
                const directive = isxelement
                    ? dataDirective
                    : isxtemplate
                    ? templateDirective(attr.name)
                    : isxevent
                    ? eventDirective
                    : attributeDirective(attr.name);

                /** @type {VIF.Action} */
                const action = { expression, directive };

                /** @type {VIF.Attributes} */
                definition.attrs.set(name, action);

                // clear element attribute
                // if the element is an x-element we need to keep the attribute
                // because it will be used to bind the corresponding signal
                !isxelement && element.removeAttribute(attr.name);
            }
        }

        // get the first of element.content.children | element.immutableChildren | element.children
        const childs = immutableChildrenOf(
            (element = contentOf(element) || element)
        );

        if (childs.length) {
            /**
             * If the element has children or immutableChildren
             * we build the definition of the element
             * @type {VIF.Schema}
             */
            definition.schema = createTemplateSchema(childs);
        }

        // if the definition is not empty we add it to the schema
        if (definition.attrs.size || definition.schema || isxelement) {
            schema.push(definition);
        }
    }

    /**
     * If there is no definition current schema return false
     * else return the array of definitions
     * @type {boolean|VIF.Schema}
     */
    return schema.length > 0 && schema;
};

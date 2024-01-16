/*
    All the tests for :
    x- attributes
    x-on: attributes
    X- tags
*/

import { defineMemo } from "../define.js";
import { VIF } from "../utils/types.js";

/**
 * Test if the attribute is reactive
 * @param {HTMLElement.attribute} attribute
 * @returns {boolean}
 */
export const isXAttribute = (attribute) => attribute.name.indexOf("x-") === 0;

/**
 * Test if the attribute represent an event
 * @param {HTMLElement.attribute} attribute
 * @returns {boolean}
 */
export const isXEventAttribute = (attribute) =>
    attribute.name.indexOf("x-on:") === 0;

/**
 * Test if the element is a vif custom element
 * @param {VIF.Element} element
 * @returns {boolean}
 */
export const isXElement = (element) => element.tagName.indexOf("X-") === 0;

/**
 * Test if the element is a template element
 * @param {HTMLTemplateElement} element
 * @returns {boolean}
 */
export const isXTemplate = (element) => !!element.content;

/**
 * Test if an element is already defined
 * @param {HTMLElement} element
 * @returns {boolean}
 */
export const isDefined = (element) =>
    !!defineMemo[element.tagName] || isXTemplate(element);

/*
    Basic shortcuts for better minification
*/

import { isXTemplate } from "./tests.js";

export const dom = document;

export const documentCreateElement = (tag) => dom.createElement(tag);

export const elementCloneNode = (element, bool) => element.cloneNode(bool);

export const childrenOf = (element) => element.children;

export const contentOf = (template) =>
    isXTemplate(template) && template.content;

export const nextSiblingOf = (element) => element.nextSibling;

export const immutableChildrenOf = (element) =>
    element.immutableChildren || element.children;

export const attributeNameSubstring = (attribute, start) =>
    attribute.name.substring(start);

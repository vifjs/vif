/*
    xAbstractElement is a class used to manage DOM parts through template
    elements. It can be seen as a lightweight version of xElement.
*/

import { xCore } from "./core.js";

export function xAbstractElement(datas) {
    this.setup(datas);
}

xAbstractElement.prototype = xCore;

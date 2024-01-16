/*
    TODO -> explain
*/

import { xAbstract } from "./abstract.js";

export function xManager(datas) {
    this.setup(datas);
}

xManager.prototype = xAbstract;

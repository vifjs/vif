/*
    xElement is a class that extends xCore and HTMLElement to create
    customElements with their own lifecycles and directives.
*/

import { signal } from "../reactivity/signal.js";
import {
    createTemplateFragmentFromNodeList,
    createTemplateFragmentFromString,
} from "../templates/html.js";
import { createTemplateSchema } from "../templates/schema.js";
import { VIF } from "../utils/types.js";
import {
    createEmptyTemplate,
    createLiteralTemplate,
} from "../templates/generic.js";
import { createCssTemplateOrSelector, cssNextId } from "../templates/css.js";
import {
    attributeNameSubstring,
    childrenOf,
    elementCloneNode,
} from "../utils/shortcuts.js";
import { xCore } from "./core.js";
import { isXAttribute } from "../utils/tests.js";

export class xElement extends HTMLElement {
    constructor() {
        super();
        this.setup();
        /**
         * store every references with the callback list
         * @type {VIF.Element.References}
         */
        this.references = {};
    }

    onMount() {}
    connectedCallback() {
        let self = this;
        let datas = self.datas;
        /**
         * hydrate datas with (non x) attributes values
         * create signals for every x- attributes
         * @type {HTMLElement.attribute}
         */
        for (const attribute of self.attributes) {
            // if the attribute is an x- attribute, create the corresponding signal
            if (isXAttribute(attribute)) {
                const dataName = attributeNameSubstring(attribute, 2);
                datas[dataName] = signal(datas[dataName]);
            }
            // else add the attribute value to the corresponding datas property
            else {
                datas[attribute.name] = attribute.value || true;
            }
        }

        /**
         * @type {VIF.Element.Reference}
         */
        self.useRef = self.reference;

        /**
         * onMount is an user custom function defined with :
         * myClassReturnedByDefine.prototype.onMount = function(){ stuff here... }
         * @type {Function}
         */
        self.onMount({ props: datas });

        // render the component logic
        self.render();
    }

    // we use this instead of disconnectedCallback because
    // the element is immediatly disconnected after being initialized
    onUnmount() {}
    disconnectCallback() {
        let self = this;
        /**
         * onUnmount is an user custom function defined with :
         * myClassReturnedByDefine.prototype.onUnmount = function(){ stuff here... }
         * @type {Function}
         */
        self.onUnmount({ props: self.datas });

        self.unHydrate();
    }

    render() {
        let self = this;

        /** @type {VIF.Definition} */
        const definition = self.static;

        /** @type {VIF.Template} */
        let template = definition.template;
        /** @type {VIF.Schema} */
        let schema = definition.schema;
        /** @type {number} */
        let indicator = definition.indicator;

        /** @type {VIF.Method.Define.Render.HTML} */
        const html = template ? createEmptyTemplate : createLiteralTemplate;
        /** @type {VIF.Method.Define.Render.CSS} */
        const css = indicator
            ? createEmptyTemplate
            : createCssTemplateOrSelector;

        /** @type {VIF.Method.Define.Render} */
        const renderFunction = definition.renderFunction;

        /**
         * @property {VIF.Method.Define.Render.HTML} html
         * @property {VIF.Method.Define.Render.CSS} css
         * @property {VIF.Element.Datas} props
         */
        const params = {
            html,
            css,
            props: self.datas,
        };

        /**
         * Execute the renderFunction to get the template and hydrate this.datas
         * @type {string|NodeList}
         */
        const renderResult = renderFunction.call(self, params);

        // trigger render logic only if renderFunction return a template
        if (renderResult) {
            // if renderResult came from templateLiteral
            if (typeof renderResult === "string") {
                // we update the template value and also the static.template
                template = definition.template =
                    createTemplateFragmentFromString(renderResult);

                // we create the schema based on template children
                schema = definition.schema = createTemplateSchema(
                    childrenOf(template)
                );
            }

            // else we consider renderResult as a NodeList, if renderResult is
            // equal to "this" we don't want to build a new fragment
            // in both case we update the template value without changing static.template
            else {
                template =
                    renderResult === self
                        ? self
                        : createTemplateFragmentFromNodeList(renderResult);

                // we create the schema equal to immutableSchema
                // or based on template immutableChildren or current children
                schema =
                    self.immutableSchema ||
                    createTemplateSchema(
                        self.immutableChildren || childrenOf(template)
                    );
            }
        }

        // if there is no indicator we add it to the definition
        // and to the component property (used in cssDirective)
        // and finaly increment the cssSelectorsId if necessary
        self.indicator = definition.indicator = indicator || cssNextId();

        // if the template is stored (cache or static)
        // we want to clone it before hydration
        if (definition.template) {
            template = elementCloneNode(template, true);
        }

        // hydrate template schema
        if (schema) {
            self.hydrate(
                self.immutableChildren || childrenOf(template),
                schema
            );
        }

        if (template !== self) {
            // store the immutableChildren as parentNode property
            // by doing this in case of defered hydration we can retrieve
            // the original DOM structure
            const parent = self.parentNode;

            if (!parent.immutableChildren) {
                parent.immutableChildren = [].slice.call(childrenOf(parent));
            }

            // replace xElement by template
            self.replaceWith(template);
        }
    }

    /**
     * @type {VIF.Element.Reference}
     */
    reference(referenceName, callback, erase) {
        const referencesObject = this.references;
        /**
         * get the reference callbacks array or create it
         * this is usefull to trigger references updates
         * @type {VIF.Element.References.Callbacks}
         */
        const referenceCallbacks =
            referencesObject[referenceName] ||
            (referencesObject[referenceName] = signal([]));

        if (callback) {
            // get the array from the signal value property
            const array = referenceCallbacks.value;

            // we push the callback into the reference callbacks array
            // or overwrite the last array element in case of erase
            !erase
                ? array.push(callback)
                : (array[(array.length || 1) - 1] = callback);

            // we trigger the signal associated to the reference
            referenceCallbacks(array);
        } else {
            // if there is no callback we return the reference array
            // this is usefull in refDirective to retrieve the signal
            return referenceCallbacks;
        }
    }
}

Object.assign(xElement.prototype, xCore);

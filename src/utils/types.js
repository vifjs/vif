/*
    All VIF types definitions via JSDoc, used in major IDEs
*/

import { xHandler } from "../directives/event.js";
import { xElement } from "../controllers/element.js";
import { xAbstractElement } from "../controllers/abstract.js";

// Element prototype
// -- Element
/**
 * @typedef {xAbstractElement|xElement} VIF.Element Interactive element class
 */
// -- Element.Datas
/**
 * @typedef {{ref: VIF.Element.Reference, component: VIF.Element}} VIF.Element.Datas Object containing component's relative datas
 */
// -- Element.References
/**
 * @typedef {{name: VIF.Element.References.Callbacks}} VIF.Element.References Object containing component's relative references with callback list
 */
// -- Element.References.Callbacks
/**
 * @typedef {VIF.Signal} VIF.Element.References.Callbacks Signal returning an array containing reference callbacks
 */
// -- Element.Reference
/**
 * Function used to apply actions to a DOM reference
 * @callback VIF.Element.Reference
 * @param {string} name The matching name of the DOM references
 * @param {VIF.Element.Reference.Callback} callback Function to play when the reference is found in the DOM
 * @param {boolean} erase If we want to overwrite the last callback in array, used for unique actions
 */
// -- Element.Reference.Callback
/**
 * @callback VIF.Element.Reference.Callback
 * @param {HTMLElement} element The element affected by the callback
 */
// -- Element.Effect
/**
 * Function used to create reactive functions automatically added into dependencies
 * @callback VIF.Element.Effect
 * @param {Function} callback Function to play every time the value of a signal inside changes
 */
// -- Element.DisconnectCallback
/**
 * Function used to clear signals dependencies: enabled on xAbstractElement, xElement and xReactive
 * @callback VIF.Element.DisconnectCallback
 * @param {VIF.Element.Datas} datas Datas of the element
 */
// Element static representation
// -- Template
/**
 * @typedef {DocumentFragment} VIF.Template HTML templates used in components
 */
// -- Schema
/**
 * @typedef {Array<VIF.Definition>} VIF.Schema Array of definitions
 */
// -- Part
/**
 * @typedef {{flag: Comment, property: VIF.Signal, abstractElement: VIF.Element}} VIF.Part Core DOM part used to manipulate a fragment
 */

// Hydration
// -- Definition
/**
 * @typedef {{pos: number, schema: VIF.Schema, reactive: boolean, attrs: VIF.Attributes}} VIF.Definition Object representing the definition of a HTMLElement
 */
// -- Attributes
/**
 * @typedef {Object<string, VIF.Action>} VIF.Attributes Schema of attributes with associated actions
 */
// -- Action
/**
 * @typedef {{expression: VIF.Expression|string, directive: Function}} VIF.Action Object defining a directive and the associated expression
 */
// -- Handler
/**
 * @typedef {xHandler} VIF.Handler Class representing an event handler object
 */
// -- Directive
/**
 * Function creating a reactive function
 * @callback VIF.Directive
 * @param {VIF.Element} component The component applying the directive
 * @param {HTMLElement} element The element affected by the directive
 * @param {VIF.Expression|string} expression The expression executed
 * @param {string} attributeName The attribute responsible of the directive
 * @returns {VIF.Reactive|void}
 */
// -- Expression
/**
 * Function generated from string with the evaluator
 * @callback VIF.Expression
 * @param {VIF.Element.Datas} scope Object used to retrieve datas without prefixing "this"
 * @property {VIF.Handler} handler That property is used to store the handler attached to the expression
 * @returns {any}
 */

// Reactivity
// -- Dependencies
// -- Dependencies.Trail
/**
 * @typedef {Set<VIF.Reactive|VIF.Element>} VIF.Dependencies.Trail Set of reactive functions and elements
 */
// -- Dependencies.Reactives
/**
 * @typedef {Set<VIF.Reactive>} VIF.Dependencies.Reactives Set of reactive functions trigerred by signal
 */
// -- Dependencies.Signals
/**
 * @typedef {Set<VIF.Dependencies.Reactives>} VIF.Dependencies.Signals Set of reactive functions trigerred by signal
 */
// -- Reactive
/**
 * Function running every time a containing signal value change
 * @callback VIF.Reactive
 * @property {VIF.Dependencies.Signals} signals All signals dependencies containing that reactive function
 * @returns {any}
 */
// -- Signal
/**
 * Function used to get or change value rerunning dependencies functions
 * @callback VIF.Signal
 * @param {any?} updatedValue The new value of the signal
 * @property {any} value That property access signal value without triggering signal
 * @property {boolean} issignal That property is used to test if a property is a signal
 * @property {VIF.Dependencies.Reactives} reactives All reactives functions in dependencies
 * @returns {any} Returns the variable value
 */

// Locales
// -- Action
/**
 * Function used to import a .js locale file
 * @callback VIF.Locale.Action
 * @returns {Promise} Promise returning a javascript Object on resolve
 */
// -- Definition
/**
 * @typedef {{identifier: VIF.Locale.Action|VIF.Locale.Definition}} VIF.Locale.Definition Object containing locales as keys and Functions or Objects as values
 */

// Methods
// -- Define
/**
 * Function used to define a customElement
 * @callback VIF.Method.Define
 * @param {VIF.Method.Define.Name} name The name of the customElement without x- prefix
 * @param {VIF.Method.Define.Render} renderFunction Function used to render the component
 * @returns {VIF.Element} The customElement class
 */
// -- Define.Name
/**
 * @typedef {string} VIF.Method.Define.Name The name of the customElement without x- prefix
 */
// -- Define.Render
/**
 * Function used to hydrate datas and create component template & schema
 * @callback VIF.Method.Define.Render
 * @param {{props: VIF.Element.Datas, html: VIF.Method.Define.Render.HTML, css: VIF.Method.Define.Render.CSS}} object
 * @this {VIF.Element} The component
 * @returns {VIF.Template} The final template of the component
 */
// -- Define.Render.HTML
/**
 * Function used to create html template
 * @callback VIF.Method.Define.Render.HTML
 * @param {string?} templateLiteral String representation of html template
 * @returns {VIF.Template|null} The component template
 */
// -- Define.Render.CSS
/**
 * Function used to create css template and also define css selectors
 * @callback VIF.Method.Define.Render.CSS
 * @param {string?} templateLiteral String representation of css template or the name of the selector
 * @returns {string} String representation of css template
 */
// -- Signal
/**
 * Function used to create a signal that can trigger changes through reactives functions
 * @callback VIF.Method.Signal
 * @param {any?} value Default value for the signal
 * @returns {VIF.Signal} A signal that can be used to trigger reactives functions
 */
// -- Navigate
/**
 * Function used to navigate between routes with browser history
 * @callback VIF.Method.Navigate
 * @param {string|Event} data String representing an absolute or relative URL | Event triggered by an element with href attribute
 * @property {VIF.Signal} route Signal related to the current route
 * @returns {string} String representing the updated URL
 */
// -- Observe
/**
 * Function used to observe a VifElement first hydration
 * @callback VIF.Method.Observe
 * @param {{elementTag: function}} actions Object with tagNames as keys and functions as values
 */
// -- i18n
/**
 * Function used to retrieve translations signal from translations definition
 * @callback VIF.Method.I18n
 * @param {VIF.Locale.Definition} definition Object defining imports methods for each locale
 * @property {VIF.Signal} locale Signal used to retrieve or update the current locale
 * @returns {VIF.Signal} Signal containing all the translations for the current locale
 */

export const VIF = {};

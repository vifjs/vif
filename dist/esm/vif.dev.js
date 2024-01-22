/*
    All VIF types definitions via JSDoc, used in major IDEs
*/





// Element prototype
// -- Element
/**
 * @typedef {xManager|xElement} VIF.Element Interactive element class
 */
// -- Element.Datas
/**
 * @typedef {{ref: VIF.Element.Datas.Reference, component: VIF.Element}} VIF.Element.Datas Object containing component's relative datas
 */
// -- Element.References
/**
 * @typedef {{name: VIF.Element.References.Array}} VIF.Element.References Object containing component's relative references with callback list
 */
// -- Element.References.Array
/**
 * @typedef {Array<Function>} VIF.Element.References.Array Array containing reference callback list
 * @property {VIF.Signal} signal
 */
// -- Element.Datas.Reference
/**
 * Function used to apply effects to a DOM reference
 * @callback VIF.Element.Datas.Reference
 * @param {string} name The matching name of the DOM references
 * @param {VIF.Element.Datas.Reference.Callback} callback Function to play when the reference is found in the DOM
 */
// -- Element.Datas.Reference.Callback
/**
 * @callback VIF.Element.Datas.Reference.Callback
 * @param {HTMLElement} element The element affected by the callback
 */
// -- Element.DisconnectCallback
/**
 * Function used to clear signals dependencies: enabled on xManager, xElement and xReactive
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
 * @typedef {{flag: Comment, property: VIF.Signal, manager: VIF.Element}} VIF.Part Abstract DOM part used to manipulate a fragment
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
 * @param {VIF.Element.Datas} context The context of the expression passed throught "with"
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
 * Function running everytime a containing signal value change
 * @callback VIF.Reactive
 * @property {VIF.Dependencies.Signals} signals All signals dependencies containing that reactive function
 * @returns {any}
 */
// -- Signal
/**
 * Function used to get or change value rerunning dependencies functions
 * @callback VIF.Signal
 * @param {any?} updatedValue The new value of the signal
 * @property {any} data That property access data without triggering signal
 * @property {boolean} issignal That property is used to test if a property is a signal
 * @property {VIF.Dependencies.Reactives} reactives All reactives functions in dependencies
 * @property {VIF.Dependencies.Reactives} effect Public access to dependencies
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
 * @param {VIF.Method.Signal} signal Function used to create a signal that can trigger changes through reactives functions
 * @param {VIF.Method.Define.Render.HTML} html Function used to create html template
 * @param {VIF.Method.Define.Render.CSS} css Function used to create css template
 * @this {VIF.Element.Datas}
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
 * @param {any?} value Default value of signal data
 * @returns {VIF.Signal} A signal that can be used to create reactive variables
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
 * Function used to observe the first addition of an x-element to the DOM
 * @callback VIF.Method.Observe
 * @param {{elementTag: function}} actions Object with tagNames as keys and functions as values
 */
// -- i18n
/**
 * Function used to define locales, update locale or display translations
 * @callback VIF.Method.I18n
 * @param {undefined|VIF.Locale.Definition} param "undefined" return the current translations | "VIF.Locale.Definition" setup the locales definitions
 * @property {VIF.Signal} locale Signal used tu retrieve or update the current locale
 * @property {Function} onload Execute a callback after translations have been loaded
 */

export const VIF = {};

/**
 * Set HTMLElement eventListener from the expression result
 * @type {VIF.Directive}
 */
const eventDirective = (context, element, expression, attributeName) => {
    /**
     * create the event handler object
     * we store it on the element for memory reasons
     * because when the element is removed from the DOM
     * the handler is deleted by the garbage collector
     * @type {VIF.Handler}
     */
    const eventHandler = element.handler || (element.handler = new xHandler());

    // assign the event handler method
    eventHandler[attributeName] = expression(context);

    // add the correponding listener to element
    element.addEventListener(attributeName, eventHandler);
};

/** @type {VIF.Handler} */
class xHandler {
    handleEvent(event) {
        this[event.type](event);
    }
}

/*
    TODO -> explain
*/


/** @type {{elementTag: function}} */
let observerMemo = {};
let observerDispatch = null;

/**
 * Every time a xElement is found during a schema creation
 * we use the observerDispatcher to trigger the associated function
 * @param {string} elementTag
 */
const observerDispacther = (elementTag) => {
    if (observerMemo[elementTag]) {
        observerMemo[elementTag]();
        observerMemo[elementTag] = false;
    }
};

/** @type {VIF.Method.Observe} */
const observe = (actions) => {
    // we need to invert params in Object spread because
    // we don't want to erase properties of observerMemo
    observerMemo = { ...actions, ...observerMemo };

    // setup observeDispatch value equal to dispatcher
    // we do that for performances, because we don't want to
    // trigger the dispacher in schema creation if there is
    // no lazy load activated by the developer
    observerDispatch = observerDispacther;
};

/*
    Basic shortcuts for better minification
*/

const dom = document;

const documentCreateElement = (tag) => dom.createElement(tag);

const elementCloneNode = (element, bool) => element.cloneNode(bool);

const childrenOf = (element) => element.children;

const immutableChildrenOf = (element) =>
    element.immutableChildren || element.children;

const attributeNameSubstring = (attribute, start) =>
    attribute.name.substring(start);

/*
    All the tests for :
    x- attributes
    x-on: attributes
    X- tags
*/


/**
 * Test if the attribute is reactive
 * @param {HTMLElement.attribute} attribute
 * @returns {boolean}
 */
const isXAttribute = (attribute) => attribute.name.indexOf("x-") === 0;

/**
 * Test if the attribute represent an event
 * @param {HTMLElement.attribute} attribute
 * @returns {boolean}
 */
const isXEventAttribute = (attribute) =>
    attribute.name.indexOf("x-on:") === 0;

/**
 * Test if the element is a vif custom element
 * @param {VIF.Element} element
 * @returns {boolean}
 */
const isXElement = (element) => element.tagName.indexOf("X-") === 0;

/**
 * Test if the element is a template element
 * @param {HTMLTemplateElement} element
 * @returns {boolean}
 */
const isXTemplate = (element) => !!element.content;

/**
 * Test if an element is already defined
 * @param {HTMLElement} element
 * @returns {boolean}
 */
const isDefined = (element) =>
    !!defineMemo[element.tagName] || isXTemplate(element);

/*
    TODO -> explain
*/


const xAbstract = {
    setup(datas) {
        let self = this;

        /**
         * immutableChildren can be used instead of template for hydration
         * @type {NodeList}
         */
        // self.immutableChildren = [];

        /**
         * immutableSchema can be used instead of creating schema
         * @type {VIF.Schema}
         */
        // self.immutableSchema = [];

        /**
         * datas is used as a context for the render function
         * @type {VIF.Element.Datas}
         */
        self.datas || (self.datas = datas || {});

        /**
         * every time a directive run, we store the reactive function
         * inside dependencies at this.trail, theses dependencies can be
         * used to unhydrate a component or a sub set of elements
         * @type {VIF.Dependencies.Trail}
         */
        self.trail || (self.trail = new Set());
    },

    /** @type {VIF.Element.DisconnectCallback} */
    disconnectCallback() {
        this.unHydrate();
    },

    /**
     * Hydrate HTMLElements based on schema
     * @param {NodeList} nodeList
     * @param {VIF.Schema} schema
     * @param {VIF.Dependencies.Trail} trail
     */
    hydrate(nodeList, schema, trail) {
        let self = this;

        /** @type {number} */
        let index = schema.length - 1;

        /**
         * we need immutableTrail as a duplicate of trail because changing trail
         * inside the while loop will influence sibling elements as a side effect
         * @type {VIF.Dependencies.Trail}
         */
        let immutableTrail = trail;

        // we play the schema in reverse order because the nodeList
        // can change during the hydration process by adding or removing
        // elements at the current index, so next indexes could change
        // for that reason we must use previous indexes
        while (index >= 0) {
            /** @type {VIF.Definition} */
            const definition = schema[index];

            /**
             * retrieve the HTMLElement from the index
             * @type {HTMLElement}
             */
            const element = nodeList[definition.pos];

            if (definition.reactive) {
                // we pass the current schema as immutableSchema
                // avoiding the creation of a new schema and it's performance cost
                element.immutableSchema = definition.schema;

                // we add the current element into the component trail
                (trail || self.trail).add(element);

                // dispatch the element tagName to the observer
                observerDispatch && observerDispatch(element.tagName);
            }

            if (!trail) {
                /**
                 * loop over all hydratable attributes
                 * @type {Array<string, VIF.Action>}
                 */
                for (const [name, action] of definition.attrs) {
                    // apply the corresponding directive
                    /** @type {VIF.Reactive|undefined} */
                    const reactiveFunction = action.directive(
                        self.datas,
                        element,
                        action.expression,
                        name
                    );

                    // push the reactiveFunction into component trail
                    // only if the directive return a reactive function
                    if (reactiveFunction) {
                        self.trail.add(reactiveFunction);
                    }
                }
            }

            if (definition.schema) {
                // check if the element is hydratable and update the trail at same time
                // trail should be updated only if the element is reactive
                const ishydratable =
                    !definition.reactive ||
                    (immutableTrail =
                        !isDefined(element) && (element.trail = new Set()));

                // if the element is not a Vif component we hydrate children
                if (ishydratable) {
                    self.hydrate(
                        immutableChildrenOf(element),
                        definition.schema,
                        immutableTrail
                    );
                }
            }

            index--;
        }
    },

    /**
     * UnHydrate HTMLElements based on trail
     * @param {VIF.Dependencies.Reactives} trail
     */
    unHydrate() {
        /** @type {VIF.Reactive|VIF.Element} */
        for (const reactive of this.trail) {
            // prevent errors on custom reactives functions and non-defined xElements
            reactive.disconnectCallback && reactive.disconnectCallback();
        }
        // clear the trail dependencies
        this.trail.clear();
    },
};

/*
    TODO -> explain
*/


function xManager(datas) {
    this.setup(datas);
}

xManager.prototype = xAbstract;

/*
    Vif signals implementation based on S.js
    https://github.com/adamhaile/S/blob/master/src/S.ts
*/


/**
 * The current running reactive function
 * @type {VIF.Reactive|null}
 */
let currentReactive = null;

/**
 * Create a signal function
 * @type {VIF.Method.Signal}
 */
const signal = (value) => {
    /**
     * create the getter/setter function
     * @type {VIF.Method.Signal}
     */
    const currentSignal = (dataUpdated) => {
        // if new data is sent
        if (dataUpdated !== undefined) {
            // update the value
            currentSignal.data = dataUpdated;
            // run all the dependencies
            for (const callback of currentSignal.reactives) {
                callback();
            }
        } else if (currentReactive) {
            // if signal is running inside of a reactive function
            // we create all necessary dependencies
            currentSignal.reactives.add(currentReactive);
            currentReactive.signals.add(currentSignal.reactives);
        }

        // return the value
        return currentSignal.data;
    };

    // use this to access data without triggering signal
    currentSignal.data = value;

    // use this to check if a variable is a signal
    currentSignal.issignal = true;

    /**
     * setup dependencies
     * @type {VIF.Dependencies.Reactives}
     */
    currentSignal.reactives = new Set();

    /**
     * reference to reactives dependencies
     * @type {VIF.Dependencies.Reactives}
     */
    currentSignal.effect = currentSignal.reactives;

    // return the signal setter/getter function
    return currentSignal;
};

/** @returns {VIF.Element.DisconnectCallback} */
const disconnectReactive = (reactive) => () => {
    /** @type {VIF.Dependencies.Reactives} */
    for (const signalReactives of reactive.signals) {
        // remove the function from the signal dependencies
        // by doing this signal will not trigger the function on change
        signalReactives.delete(reactive);
    }
};

/**
 * Run a function, if signal is played add the function to it's dependencies
 * then return the function as a reactive function
 * @param {Function} callback
 * @returns {VIF.Reactive}
 */
const reactive = (callback) => {
    // store the previous value
    const previousValue = currentReactive;

    // update currentReactive function and create a dependency Array
    currentReactive = callback;
    /**
     * setup dependencies
     * @type {VIF.Dependencies.Signals}
     */
    currentReactive.signals = new Set();

    /** @type {VIF.Element.DisconnectCallback} */
    currentReactive.disconnectCallback = disconnectReactive(currentReactive);

    // call the function
    callback();

    // set currentReactive value back to previousValue
    // this is very important for nested reactives functions
    currentReactive = previousValue;

    return callback;
};

let xcomment = dom.createComment("");
let xtemplate = documentCreateElement("template");
let xfragment = dom.createDocumentFragment();

/**
 * Create a DocumentFragment from a string literal
 * @param {string} string
 * @returns {DocumentFragment}
 */
const createTemplateFragmentFromString = (string) => {
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
const createTemplateFragmentFromNodeList = (nodeList) => {
    // clone the DocumentFragment and append the NodeList
    let template = elementCloneNode(xfragment);
    template.append(...nodeList);

    // return the DocumentFragment
    return template;
};

/**
 * Used to avoid template evaluation and improve performances
 * @returns {undefined}
 */
const createEmptyTemplate = () => {};

/**
 * Used to return HTML and CSS templates from components renderFunction
 * @param {Array<string>} strings
 * @param {...any} values
 * @returns {string}
 */
const createLiteralTemplate = (strings, ...values) =>
    strings.reduce(
        (result, text, i) =>
            (result += text + (i === strings.length - 1 ? "" : values[i])),
        ""
    );

const xstyle = documentCreateElement("style");

const cssAttributeName = "css-x";
let cssSelectorsId = 1;

/**
 * increment global id of css selectors
 * @returns {number}
 */
const cssNextId = () => cssSelectorsId++;

/**
 * used to create a css selector attribute used in css and html templates
 * selector start by "css-" to avoid conflicts with x- attributes
 * @returns {string} css attribute value
 */
const createCssSelector = (selector, indicator) =>
    "$" + (indicator || cssSelectorsId) + selector;

/**
 * Used to create CSS templates or CSS selectors from components renderFunction
 * and also append style tag into document's head
 * @param {Array<string>|string} strings
 * @param {...any} values
 * @returns {string}
 */
const createCssTemplateOrSelector = (strings, ...values) => {
    // in case of an unique string we define a new selector
    if (typeof strings === "string") {
        return `${cssAttributeName}="${createCssSelector(
            strings,
            cssSelectorsId
        )}"`;
    } else {
        // create the css template
        const css = createLiteralTemplate(strings, values);

        // add the content into style tag
        xstyle.textContent += css;

        // add the style tag in the document's head
        if (!xstyle.parentElement) {
            dom.head.appendChild(xstyle);
        }
    }
};

/**
 * Add scoped style attribute based on attribute value
 * @type {VIF.Directive}
 */
const cssDirective = (context, element, expression) => {
    // get select the selector and the indicator
    const selector = expression;
    const indicator = context.component.indicator;

    // set the css-x attribute to the element
    element.setAttribute(
        cssAttributeName,
        createCssSelector(selector, indicator)
    );
};

/**
 * Function used to create an array with a signal property
 * this is usefull to trigger references updates
 * @returns {VIF.Element.References.Array}
 */
const createReferenceArray = () => {
    const referenceArray = [];
    // add a signal as property of the array
    referenceArray.signalGetter = signal([]);
    return referenceArray;
};

/**
 * Apply reference callbacks based on attribute value
 * @type {VIF.Directive}
 */
const refDirective = (context, element, expression) => {
    /** @type {string} */
    const referenceName = expression;

    /** @type {VIF.Element.References.Array} */
    const referenceArray = context.ref(referenceName);

    // used to determine if it's necessary to run the last callback only
    let primaryHydration = true;

    return reactive(() => {
        /** @type {VIF.Element.References.Array} */
        const array = referenceArray.signalGetter();

        // apply all callbacks first time
        if (primaryHydration) {
            for (const callback of array) {
                callback(element);
            }
            primaryHydration = false;
        }
        // after apply only the last callback
        else {
            /** @type {Function} */
            array[array.length - 1](element);
        }
    });
};

/**
 * Set HTMLElement display from the expression result
 * @type {VIF.Directive}
 */
const showDirective = (context, element, expression) => {
    /**
     * store the initial display value
     * @type {string}
     */
    const initialValue = element.style.display;

    return reactive(() => {
        const visible = expression(context);

        if (visible) {
            // if there was an initial value we restore the value
            // else we remove the display style property
            initialValue
                ? (element.style.display = initialValue)
                : element.style.removeProperty("display");
        } else {
            element.style.display = "none";
        }
    });
};

/**
 * Set HTMLElement text content from the expression result
 * @type {VIF.Directive}
 */
const textDirective = (context, element, expression) => {
    return reactive(() => (element.textContent = expression(context)));
};

/*
    What append in a directive function ?
    1 - the directive function is stored inside component's schema
    2 - during the hydration process the directive function run with the following parameters
    3 - the directive function includes a reactive function, once activated it rerun every
        time a containing signal change. On every run the reactive function will trigger the
        expression with the new context (contains all this... values)
    4 - the result of the expression based on the context is used to update the directive
*/


/**
 * Set HTMLElement attribute from the expression result
 * @type {VIF.Directive}
 */
const defaultDirective = (context, element, expression, attributeName) => {
    return reactive(() =>
        element.setAttribute(attributeName, expression(context))
    );
};

/**
 * Retrieve the corresponding directive from the attribute name
 * @param {string} attributeName
 */
const attributeDirective = (attributeName) => {
    if (attributeName === "x-text") {
        return textDirective;
    } else if (attributeName === "x-show") {
        return showDirective;
    } else if (attributeName === "x-ref") {
        return refDirective;
    } else if (attributeName === "x-css") {
        return cssDirective;
    } else {
        return defaultDirective; // default attribute directive
    }
};

/*
    What append in a directive function ?
    1 - the directive function is stored inside component's schema
    2 - during the hydration process the directive function run with the following parameters
    3 - the directive function includes a reactive function, once activated it rerun every
        time a containing signal change. On every run the reactive function will trigger the
        expression with the new context (contains all this... values)
    4 - the result of the expression based on the context is used to update the directive
*/


/**
 * Set Vif component datas from the expression result
 * @type {VIF.Directive}
 */
const dataDirective = (context, element, expression, attributeName) => {
    /** @type {VIF.Element.Datas} */
    element.datas || (element.datas = {});

    /*
        Why do we use a mutableSignal instead of a simple signal ?
        - In a dataDirective we use a reactive function to trigger signals.
        - So when defining the reactive function, it becomes "currentReactive"
          which indicates that any signal triggered during its construction will
          add the function to its dependency list.
        - The problem is that we are asking to execute all signal dependencies
          if we used "signal(value)". But these dependencies themselves contain
          signals. As the "currentReactive" function is defined, they will also
          add it to their dependency list.
        - To solve this we use a mutableSignal which fires only when the reactive
          function definition is completed.
    */

    let props = null;

    const mutable = {
        mutableSignal: (property, updatedValue) =>
            (props = { property, updatedValue }),
    };

    const reactiveFunction = reactive(() => {
        const property = element.datas[attributeName];
        const updatedValue = expression(context);

        if (property && property.issignal) {
            // we use the mutableSignal function instead of signal(value)
            // to prevent side effects (infinite dependencies loop)
            mutable.mutableSignal(property, updatedValue);
        } else {
            // we store the value, later the signal will be built by the element
            element.datas[attributeName] = updatedValue;
        }
    });

    // if the signal is not defined yet, we prevent execution
    if (props) {
        props.property(props.updatedValue);
    }

    // mutate the mutableSignal
    mutable.mutableSignal = (property, updatedValue) => property(updatedValue);

    return reactiveFunction;
};

/*
    Vif evaluator implementation based on Alpine.js
    https://github.com/alpinejs/alpine/blob/main/packages/alpinejs/src/evaluator.js
*/


/**
 * evaluated expressions cache
 * @type {{string: VIF.Expression}}
 */
const evaluatorMemo = {};

/**
 * Create a secure executable function from string expression
 * @param {string} expression Javascript expression formatted as string
 * @returns {VIF.Expression}
 */
const generateFunctionFromString = (expression) => {
    if (evaluatorMemo[expression]) {
        return evaluatorMemo[expression];
    }

    let SyncFunction = Object.getPrototypeOf(function () {}).constructor;

    // Some expressions that are useful in Vif are not valid as the right side of an expression.
    // Here we'll detect if the expression isn't valid for an assignment and wrap it in a self-
    // calling function so that we don't throw an error AND a "return" statement can b e used.
    let rightSideSafeExpression =
        // Support expressions starting with "if" statements like: "if (...) doSomething()"
        /^[\n\s]*if.*\(.*\)/.test(expression.trim()) ||
        // Support expressions starting with "let/const" like: "let foo = 'bar'"
        /^(let|const)\s/.test(expression.trim())
            ? `(()=>{ ${expression} })()`
            : expression;

    const safeSyncFunction = () => {
        try {
            let func = new SyncFunction(
                ["scope"],
                `with(scope){return ${rightSideSafeExpression}};`
            );

            Object.defineProperty(func, "name", {
                value: `VifExp "${expression}"`,
            });

            return func;
        } catch (error) {
            console.error("VifExp error : " + expression, error);
            return false;
        }
    };
    let func = safeSyncFunction();

    evaluatorMemo[expression] = func;

    return func;
};

/*
    Vif reconcile algorithm implementation based on signals
*/


/**
 * reconcile algorithm implementation
 * @param {VIF.Element.Datas} context
 * @param {HTMLTemplateElement} element
 * @param {Array} prevList
 * @param {Array} nextList
 * @param {string} key
 */
const reconcile = (context, element, prevList, nextList, key) => {
    /** @type {number} */
    let index = 0;
    const prevLength = prevList.length;
    const nextLength = nextList.length;

    /** @type {number} */
    let gap = nextLength - prevLength;

    // UPDATE ELEMENTS
    while (index < prevLength && index < nextLength) {
        // if the two values are different
        if (prevList[index] !== nextList[index]) {
            // we update the signal value with the nextList value
            updatePart(element, index, nextList[index]);
        }
        index++;
    }

    // ADD ELEMENTS
    while (gap > 0) {
        addPart(element, context, index, key, nextList[index]);
        gap--;
        index++;
    }

    // REMOVE ELEMENTS
    while (gap < 0) {
        removePart(element, index);
        gap++;
        index++;
    }
};

/*
    TODO -> explain
*/
const forDirective = (context, element, expression) => {
    setupTemplateDirective(element);

    /** @type {Array} */
    let prevList = [];

    /** @type {string} */
    const keyName = "item";
    const key = element.getAttribute(keyName) || keyName;

    return reactive(() => {
        /** @type {Array} */
        const nextList = expression(context);

        // apply reconcile algorithm
        reconcile(context, element, prevList, nextList, key);

        // update prevList value to nextList
        prevList = nextList;
    });
};

/*
    Directive executée depuis template x-if=""
    reprend le template.content et s'en sert pour faire du clonnage d'éléments
    Fait partie des attr directives
*/


/*
    TODO -> explain
*/
const ifDirective = (context, element, expression) => {
    setupTemplateDirective(element);

    /** @type {boolean} */
    let previousValue = false;

    return reactive(() => {
        /** @type {boolean} */
        const value = !!expression(context);

        if (value !== previousValue) {
            // update previousValue
            previousValue = value;

            // add or remove parts
            if (value) {
                addPart(element, context, 0);
            } else {
                removePart(element, 0);
            }
        }
    });
};

/*
    TODO -> explain
*/


let currentLocation = location;

// retrieve the path after origin from an URL object
const getFormattedRoute = () =>
    currentLocation.pathname + currentLocation.search;

// signal of the current route
const route = signal(getFormattedRoute());

// add listener on popstate to update the current route
// every time user get back or forward in history.
addEventListener("popstate", () => {
    currentLocation = location;
    route(getFormattedRoute());
});

/** @type {VIF.Method.Navigate} */
const navigate = (data) => {
    // if the argument is a string, navigate to the route
    if (typeof data === "string") {
        // get the new location object based on currentLocation
        const newLocation = new URL(data, currentLocation);

        // check if newLocation is different of currentLocation
        if (currentLocation.href !== newLocation.href) {
            // update the currentLocation based on link
            currentLocation = newLocation;
            // update the history based on new location
            history.pushState({}, "", currentLocation);
            // update the current route signal based on new location
            return route(getFormattedRoute());
        }
    }

    // if the argument is not a string, it is considered as Event
    // this strategy can be used to manage routing in SPA context
    // without affecting the crawlers strategies
    else {
        // prevent the event execution on browsers
        data.preventDefault();
        // retrieve the href value of the element
        const link = data.currentTarget.href;
        // navigate to the corresponding route
        if (link) {
            return navigate(link);
        }
    }
};

navigate.route = route;

/*
    Route directive for templates
*/


/*
    TODO -> explain
*/
const routeDirective = (context, element, expression) => {
    setupTemplateDirective(element);

    /** @type {RegExp} */
    const regex = new RegExp(expression || ".");

    /** @type {string} */
    const keyName = "params";
    const key = element.getAttribute(keyName) || keyName;

    let previousValue = null;

    return reactive(() => {
        const params = route().match(regex) || null;

        if (params !== previousValue) {
            // if there is a previousValue this means that the dom element
            // already exists, so we only need to update the signal
            if (params && previousValue) {
                updatePart(element, 0, params);
            } else if (params) {
                addPart(element, context, 0, key, params);
            } else {
                removePart(element, 0);
            }
        }

        previousValue = params;
    });
};

/*
    What append in a directive function ?
    1 - the directive function is stored inside component's schema
    2 - during the hydration process the directive function run with the following parameters
    3 - the directive function includes a reactive function, once activated it rerun every
        time a containing signal change. On every run the reactive function will trigger the
        expression with the new context (contains all this... values)
    4 - the result of the expression based on the context is used to update the directive
*/


/** @returns {Comment} */
const createFlag = () => elementCloneNode(xcomment);

/**
 * create an abstract DOM part to manipulate a fragment
 * @param {VIF.Element.Datas} context
 * @param {number} index
 * @param {string} key
 * @param {any} value
 * @returns {VIF.Part}
 */
const createPart = (context, index, key, value) => {
    /**
     * create a flag to identify the head and tail of the fragment
     * @type {Comment}
     */
    const flag = createFlag();

    /**
     * create a signal for the current array value
     * @type {VIF.Signal}
     */
    const property = key && signal(value);

    // add index to property
    if (property) {
        property.index = index;
    }

    // create a manager to manage the fragment state and setup its context
    // 1 - clone the current context
    // 2 - add a new [key] or "item" property corresponding
    //     to signal of current array value
    const manager = new xManager(
        !key ? context : { ...context, [key]: property }
    );

    // return the part
    return { flag, manager, property };
};

const addPart = (element, context, index, key, value) => {
    /** @type {Array<VIF.Part>} */
    const parts = element.templateParts;

    /** @type {VIF.Part} */
    let part = parts[index + 1];

    /** @type {DocumentFragment} */
    const fragment = elementCloneNode(element.content, true);

    // we create the part corresponding to the fragment
    // the part will be stored into an array of parts
    // for each part we can retrieve the flag, the signal
    // for the current array item, and the manager which
    // store the context and the hydration methods
    // if the part already exist, update the property value
    if (part) {
        part.property && part.property(value);
    } else {
        part = parts[index + 1] = createPart(context, index, key, value);
    }

    // if there is a cached schema, hydrate the fragment
    element.immutableSchema &&
        part.manager.hydrate(childrenOf(fragment), element.immutableSchema);

    // replace the current flag by himself plus fragment
    parts[index].flag.replaceWith(parts[index].flag, fragment, part.flag);
};

const updatePart = (element, index, value) => {
    // find the part matching to the index and update the signal value
    element.templateParts[index + 1].property(value);
};

/**
 * remove a DOM part from the DOM and disconnect it
 * @param {Array<VIF.Part>} parts
 * @param {number} index
 */
const removePart = (element, index) => {
    /** @type {Array<VIF.Part>} */
    const parts = element.templateParts;

    /**
     * get the head and tail flags
     * @type {Comment}
     */
    let head = parts[index].flag.nextSibling;
    const tail = parts[index + 1].flag;

    /**
     * disconnect the manager
     * @type {VIF.Part}
     */
    parts[index + 1].manager.disconnectCallback();

    /**
     * Remove all the elements between head and tail
     * move head forward after every deletion and stop
     * when head and tail are equals
     */
    while (head !== tail) {
        const prev = head;
        head = head.nextSibling;
        prev.remove();
    }
};

// setup template directives basics as element properties
const setupTemplateDirective = (element) => {
    /** @type {Array<VIF.Part>} */
    element.templateParts = [{ flag: createFlag() }];

    /** @type {VIF.Element.DisconnectCallback} */
    element.disconnectCallback = () => {
        for (let x = 1; x < element.templateParts.length; x++) {
            element.templateParts[x].manager.disconnectCallback();
        }
    };

    // replace the current element by the main flag
    element.replaceWith(element.templateParts[0].flag);
};

/**
 * Retrieve the corresponding directive from the attribute name
 * @param {string} attributeName
 */
const templateDirective = (attributeName) => {
    if (attributeName === "x-for") {
        return forDirective;
    } else if (attributeName === "x-if") {
        return ifDirective;
    } else if (attributeName === "x-route") {
        return routeDirective;
    }
};

/*
    Evaluates a template and builds the interactivity schema.
    This makes the analysis of a new template much more efficient.
*/


/**
 * Create a xElement template schema
 * @param {NodeList} nodeList
 * @returns {boolean|VIF.Schema}
 */
const createTemplateSchema = (nodeList) => {
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
            (element = element.content || element)
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

/*
TODO -> traduire
    xElement est une classe qui étend xAbstract afin de créer des customElements possédant leurs propres cycles de vie définis par les utilisateurs
*/


class xElement extends HTMLElement {
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
         * define the component property
         * @type {VIF.Element}
         */
        datas.component = self;

        /**
         * create the context.ref method
         * @type {VIF.Element.Datas.Reference}
         */
        datas.ref = self.reference;

        /**
         * onMount is an user custom function defined with :
         * myClassReturnedByDefine.prototype.onMount = function(){ stuff here... }
         * @type {Function}
         */
        self.onMount.call(datas);

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
        self.onUnmount.call(self.datas);

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
         * Execute the renderFunction to get the template and hydrate this.datas
         * @type {string|NodeList}
         */
        const renderResult = renderFunction.call(self.datas, signal, html, css);

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
        // and to the context.component property (used in cssDirective)
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
     * reference function used in context.ref
     * @type {VIF.Element.Datas.Reference}
     */
    reference(name, callback) {
        const componentReferences = this.component.references;
        /**
         * get the reference's callback array or create it
         * @type {VIF.Element.References.Array}
         */
        const referenceArray =
            componentReferences[name] ||
            (componentReferences[name] = createReferenceArray());

        if (callback) {
            // we push the callback into the reference array
            referenceArray.push(callback);

            // we trigger the signal associated at the reference
            referenceArray.signalGetter(referenceArray);
        } else {
            // if there is no callback we return the reference array
            // this is usefull in refDirective to retrieve the signal
            return referenceArray;
        }
    }
}

Object.assign(xElement.prototype, xAbstract);

/*
    Function used to define a customElement extending xElement generic class,
    and checks that the element does not already exist in the registry
*/


/**
 * keep track of defined components
 * @type {{elementTag: class}}
 */
const defineMemo = {};

/** @type {VIF.Method.Define} */
const define = (name, renderFunction) => {
    const className = "X-" + name.toUpperCase();

    // create the customElement class
    defineMemo[className] = class extends xElement {
        constructor() {
            super();
        }
    };

    // add prototype & static properties
    /** @type {VIF.Method.Define.Render} */
    defineMemo[className].renderFunction = renderFunction;
    /** @type {VIF.Definition} */
    defineMemo[className].prototype.static = defineMemo[className];

    // define the customElement
    customElements.define(`x-${name}`, defineMemo[className]);

    return defineMemo[className];
};

/*
    TODO -> Explain
    {
        en: {
            EN: () => import('en.js'),
            default: 'EN'
        },
        fr: {
            FR: () => import('fr.js'),
            default: 'FR'
        },
        default: 'en'
    }
*/


/** @type {Array<Function>} */
let i18nMemo = [];

/**
 * locale signal used to retrieve or define a locale
 * @type {VIF.Signal}
 */
const locale = signal();

/**
 * translations signal used to retreive or define translations object
 * @type {VIF.Signal}
 */
const translations = signal();

/**
 * Function used to setup locales and imports
 * @param {VIF.Locale.Definition} languages
 */
const locales = (languages) => {
    /**
     * Function used to retrieve a locale import function
     * @param {VIF.Locale.Definition} object
     * @param {string} localeKey
     * @returns {VIF.Locale.Definition|VIF.Locale.Action}
     */
    const localeFromObject = (object, localeKey) =>
        object[localeKey] || object[object.default];

    // setup locale value
    locale(localStorage.getItem("locale") || navigator.language);

    reactive(() => {
        // get the country name and province name from string
        // "fr-FR" -> ["fr", "FR"] "fr" -> ["fr"]
        const [country, province] = locale().split("-");

        // we keep the province even if the country is incorrect because
        // for example, if "fr" doesn't exist, "fr-CA" input will be tranform
        // into "en-CA" which make more sense than "en-EN". However if "en-CA"
        // doesn't exist the function will retreive the default locale "en-EN".
        const result = localeFromObject(
            localeFromObject(languages, country),
            province
        );

        // execute the result, and after promise.resolve
        // trigger the translations signal
        if (result) {
            result().then((exportedModule) => {
                // update the translation signal
                translations(exportedModule.default);
                // execute all pending callbacks and set the memo to undefined
                // by doing this we prevent future useless executions
                i18nMemo &&
                    (i18nMemo = i18nMemo.forEach((callback) => callback()));
            });
        }
    });
};

/**
 * Execute a callback after translations have been loaded
 * @param {Function} callback Function called after translations have been loaded
 */
const i18nOnLoad = (callback) => {
    // if translation is already loaded, execute the callback
    if (translations()) {
        callback();
    }
    // else push the callback into the queue
    else {
        i18nMemo.push(callback);
    }
};

/**
 * Function used to define locales, update locale or display translations
 * @type {VIF.Method.I18n}
 */
const i18n = (param) => (param ? locales(param) : translations());

i18n.locale = locale;
i18n.onload = i18nOnLoad;

/*
    export Vif {}
*/


/**
 * @property {VIF.Method.Define} define Function used to define a customElement
 * @property {VIF.Method.Signal} signal Function used to create a signal that can trigger changes through reactives functions
 * @property {VIF.Method.Observe} observe Function used to observe the first addition of an x-element to the DOM
 * @property {VIF.Method.Navigate} navigate Function used to navigate between routes with browser history
 * @property {VIF.Method.I18n} i18n Function used to define locales, update locale or display translations
 */
const Vif = {
    define,
    signal,
    observe,
    navigate,
    i18n,
};

export { Vif as default };

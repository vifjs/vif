# Directives

What is a directive ?

A directive is usually a javascript expression executed inside a template through a `x-` attribute. They will be familiar to you if you have used AlpineJs. A directive scope is equivalent to renderFunction `props` object.

```js
useDefine("example", function ({ props }) {
    props.text = "Hello World!";
    return this;
});
```

```html
<x-example>
    <!-- x-text is a directive -->
    <p x-text="text"><!-- will become "Hello World!" --></p>
</x-example>
```

## Directives and reactivity

Directives are reactives functions, like what you saw before with [useEffect](../methods/effect.md), so as you can imagine, they are very powerful when they are combined with [signals](../methods/signal.md).

```js
useDefine("example", function ({ props }) {
    const text = (props.text = useSignal("Hello World!"));

    setTimeout(() => {
        text("Thank you for visiting our website!");
    }, 1000);

    return this;
});
```

```html
<x-example>
    <!-- x-text is a directive, but here don't forget parenthesis for text signal -->
    <p x-text="text()">
        <!-- will become "Hello World!" -->
        <!-- 1000ms later will become "Thank you for visiting our website!" -->
    </p>
</x-example>
```

## Element directives

Theses directives should be used on standard HTMLElements only.

-   `x-text` change textContent
-   `x-show` change style.display based on value
-   `x-ref` (text) used to reference an element ([see this.useRef method](./context.md))
-   `x-css` (text) used to reference an element for scoped style ([see examples](../methods/define.md))
-   `x-on:...` used to add an event handler to the element
-   `x-...` used to define every attribute value

## Template directives

Theses directives should be used on `<template>...</template>` elements only.

-   `x-if` used to append content conditionnaly
-   `x-for` used to append content based on an array of values
    -   `item="itemName"` expose `item()` as signal and `item.index`, `item=` attribute can be used to change the variable name
-   `x-route` (text) used to append content conditionnaly based on current URL, the value should be a RegExp with groups as parameters
    -   `params="paramsName"` expose `params()` as signal, `params=` attribute can be used to change the variable name

```js
useDefine("example-template", function ({ props, html }) {
    props.list = useSignal(["I'm", "A", "List", "Of", "Elements"]);

    return html`
        <ul>
            <template x-for="list()" item="listElement">
                <li x-text="listElement.index + ' - ' + listElement()">...</li>
            </template>
        </ul>
    `;
});
```

## Component directives

Theses directives should be used on components only.

-   `...` (text) used to dynamicaly create props in component context
-   `x-...` used to dynamicaly create props in component context

```html
<body>
    <x-my-component firstprop="this is a text value"></x-my-component>
</body>
```

```js
useDefine("example-props-directive", function ({ props, html }) {
    props.text = useSignal("this is a dynamic value");

    return html`
        <div>
            <x-my-component x-secondprop="text()"></x-my-component>
        </div>
    `;
});
```

---

# Next

[Learn component context](./context.md)

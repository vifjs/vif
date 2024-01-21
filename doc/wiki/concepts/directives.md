# Directives

What is a directive ?

A directive is usually a javascript expression executed inside a template through a `x-` attribute. They will be familiar to you if you have used Alpinejs. A directive context `this` is equivalent to render function context.

```js
Vif.define("example", function (signal) {
    this.text = "Hello World!";
    return this.component;
});
```

```html
<x-example>
    <!-- x-text is a directive -->
    <p x-text="text"><!-- will become "Hello World!" --></p>
</x-example>
```

Directives are very powerful when they are combined with signals.

```js
Vif.define("example", function (signal) {
    this.text = signal("Hello World!");

    setTimeout(() => {
        this.text("Thank you for visiting our website!");
    }, 1000);

    return this.component;
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
-   `x-ref` (no javascript) used to reference an element ([see this.ref method](./context.md))
-   `x-css` (no javascript) used to reference an element for scoped style ([see examples](../methods/define.md))
-   `x-on:...` used to add an event handler to the element
-   `x-...` used to define every attribute value

## Template directives

Theses directives should be used on `<template>...</template>` elements only.

-   `x-if` used to append content conditionnaly
-   `x-for` used to append content based on an array of values
    -   `item="itemName"` expose `item()` as signal and `item.index`, `item=` attribute can be used to change the variable name
-   `x-route` (no javascript) used to append content conditionnaly based on current URL, the value should be a RegExp with groups as parameters
    -   `params="paramsName"` expose `params()` as signal, `params=` attribute can be used to change the variable name

## Component directives

Theses directives should be used on components only.

-   `...` (no javascript) used to dynamicaly create variable in component context
-   `x-...` used to dynamicaly create variable in component context

---

# Next

[Learn component context](./context.md)

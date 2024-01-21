# Context

What is a component context ?

The context can be represented by the `this` keyword. The context of the reactive function is the context of the whole component. The `this` keyword can be ommited in directives.

```js
Vif.define("app", function () {
    this.text = "my text";
    // context : { text: "my text" }
    return this.component;
});
```

```html
<x-app>
    <!-- text is equivalent to this.text
    of the component -->
    <p x-text="text">...</p>
</x-app>
```

## Context methods

The context is not empty by default, it expose two very important methods :

-   `this.component` return the component element
-   `this.ref` expose the reference method

## Reference method

The reference method `this.ref()` take two arguments :

-   `name` the value of `x-ref="name"` attribute
-   `callback` the callback executed during the element hydration
    -   the callback take one argument `element` corresponding to the target

---

# Next

[Learn component lifecycle](./lifecycle.md)

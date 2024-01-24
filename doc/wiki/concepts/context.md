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

The reference method `this.ref()` take three arguments :

-   `name` the value of `x-ref="name"` attribute
-   `callback` the callback executed during the element hydration
    -   the callback take one argument `element` corresponding to the target
-   `erase` (optionnal) to overwrite the last callback in array, used for unique actions

The reference method is a little special and works in a somewhat counter-intuitive way :

-   Each x-element have a references object `{}`
-   Each time you use `this.ref("name", ...)` with a new `name` an entry is created inside of the reference object with an empty array as value `[]`
    -   We push the `callback` argument into that array
    -   We check for corresponding references (in fact it is a signal attached to each reference)
    -   We run the last callback in the array for all the references
-   Each time a new reference is hydrated with `x-ref`
    -   We get the corresponding callback array
    -   We run all the callbacks for the reference

> If you understand this you will realize that `ref` has nothing to do with a `querySelector` and cannot be used the same way.

---

# Next

[Learn component lifecycle](./lifecycle.md)

# Context

What is a component context ?

The context can be represented by the `this` keyword. The context of the reactive function is the context of the whole component.

## This

The context expose the `this.useRef()` method, this method take three arguments :

-   `name` the value of `x-ref="name"` attribute
-   `callback` the callback executed during the element hydration
    -   the callback take one argument `element` corresponding to the target
-   `erase` (optionnal) to overwrite the last callback in array, used for unique actions

The reference method is a little special and works in a somewhat counter-intuitive way :

-   Each x-element have a references object `{}`
-   Each time you use `this.useRef("name", ...)` with a new `name` an entry is created inside of the reference object with an empty array as value `[]`
    -   We push the `callback` argument into that array
    -   We check for corresponding references (in fact it is a signal attached to each reference)
    -   We run the last callback in the array for all the references
-   Each time a new reference is hydrated with `x-ref`
    -   We get the corresponding callback array
    -   We run all the callbacks for the reference

> If you understand props you will realize that `useRef` has nothing to do with a `querySelector` and cannot be used the same way.

## Props

The `props` object represents the datas of the component, and it can be ommited in directives :

```js
useDefine("app", function ({ props }) {
    props.text = "my text";
    // props : { text: "my text" }
    return this;
});
```

```html
<x-app>
    <!-- text is equivalent to props.text
    of the component -->
    <p x-text="text">...</p>
</x-app>
```

---

# Next

[Learn component lifecycle](./lifecycle.md)

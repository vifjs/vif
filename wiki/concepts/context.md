# Context

What is a component context ?

The context can be represented by the `this` keyword. The context of the render function is the context of the whole component.

## Method

Inside of the render function, the context `this` expose two useful methods :

-   `useRef` - function used to apply callbacks on targets.
-   `useEffect` - function used to create reactive functions automatically added into dependencies.

### useRef

Tthe `this.useRef()` method takes three arguments :

-   `name` the value of `x-ref="name"` attribute
-   `callback` the callback executed during the element hydration
    -   the callback take one argument `element` corresponding to the target
-   `erase` (optionnal) to overwrite the last callback in array, used for unique actions

```js
useDefine("ref-example", function ({ html }) {
    // create the reference callback
    this.useRef("button", (element) => {
        console.log("button found !", element);
    });

    html`<button x-ref="button">My button</button>`;
});
```

The `useRef` method is a little special and works in a somewhat counter-intuitive way :

-   Each x-element have a references object `{}`
-   Each time you use `this.useRef("name", ...)` with a new `name` an entry is created inside of the reference object with an empty array as value `[]`
    -   We push the `callback` argument into that array
    -   We check for corresponding references (in fact it is a signal attached to each reference)
    -   We run the last callback in the array for all the references
-   Each time a new reference is hydrated with `x-ref`
    -   We get the corresponding callback array
    -   We run all the callbacks for the reference

> If you understand this you will realize that `useRef` has nothing to do with a `querySelector` and cannot be used the same way.

### useEffect

There is two way to use effects, [learn more about effets here](../methods/effect.md).

---

# Next

[Learn props](./props.md)

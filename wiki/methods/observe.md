# Observe

What is an observer ?

useObserve is a Vif method that takes an object as argument. this object has tagNames as keys and functions as values.

When hydrating an x-element, all nested x-elements will be submitted to the observer, if the tagName matches one of the keys, then the associated function will be executed (but only once).

# Use case

Observers are used a lot for lazy loading, so here their is an example of Vif lazy loading.

```js
const observerImport = (url) => import(url);

useObserve({
    // don't forget CAPS
    "X-MY-COMPONENT": () => observerImport("./my-component.js"),
});

useDefine("app", function () {
    return this;
});
```

```html
<!-- can't lazy load root level components
due to performance concerns -->
<x-app>
    <!-- lazy loaded component -->
    <x-my-component>
</x-app>
```

---

# Next

[Create a routing system for SPA](./navigate.md)

# Observe

What is an observer ?

useObserve is a Vif method that takes an object as argument. this object has tagNames as keys and functions as values.

When hydrating an `x-element`, all nested `x-element(s)` will be submitted to the observer, if the `.tagName` matches one of the keys, then the associated function will be executed (only once per key).

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
    <x-my-component></x-my-component>
</x-app>
```

## Limitations

There are certain limitations due to the way the observer works :

-   You cannot lazy-load root-level components.
-   The style of components is not taken into account by the observer (an invisible component will still be loaded).
-   Only components inside `<template>` tags can be delayed because observation takes place during hydration.

With this in mind, the observer is particularly useful for web applications with components rendered as raw html in javascript files, and for Single Page Applications where you only want to load one route at a time.

---

# Next

[Create a routing system for SPA](./navigate.md)

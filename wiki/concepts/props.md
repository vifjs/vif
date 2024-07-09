# Props

The `props` object represents the datas of the component and the scope inside directives (so it should be ommited in directives).

The properties of the `props` object can contain any type of data (string, number, object, function, signal, etc...), and it is not mandatory to provide signals for non-reactive properties, as shown in the following example :

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

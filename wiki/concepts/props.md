# Props

The `props` object represents the datas of the component and the scope inside directives (so it should be ommited in directives) :

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

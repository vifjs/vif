# Define

How to define a component with Vif ?

## the useDefine method

```js
useDefine("my-component", renderFunction);
```

-   `my-component` is the name of your component (became `<x-my-component>`)
-   `renderFunction` the function running at the component initialization

### renderFunction

```js
function MyComponent({ props, html, css }) {
    // do something here
}
// declare the component
useDefine("my-component", MyComponent);
```

The render function has one argument with three properties:

-   `props` [learn more about props](../concepts/props.md)
-   `html` templatelitteral function used to render raw HTML
-   `css` templatelitteral function used to render raw CSS

The render function should return one of theses types:

-   `string` representing an HTML template
-   `this | undefined` representing the current component (you can simply omit the return statement)
-   `this.children` reprensenting the current component's children
-   `this.childNodes` reprensenting the current component's childNodes

Due to performance reasons you should not render arbitrary NodeLists.

# Examples

## HTML render in JS

```js
function Counter({ props, html }) {
    const count = (props.count = useSignal(0));
    props.increment = () => count(count.value + 1);

    return html`
        <button x-on:click="increment" x-text="'count is: ' + count()"></button>
    `;
}

useDefine("counter", Counter);
```

```html
<x-counter></x-counter>
```

## HTML render in HTML

```js
function Counter({ props }) {
    const count = (props.count = useSignal(0));
    props.increment = () => count(count.value + 1);

    return this; // optionnal
}

useDefine("counter", Counter);
```

```html
<x-counter>
    <button x-on:click="increment" x-text="'count is: ' + count()"></button>
</x-counter>
```

## With scoped style

```js
function Counter({ html, css, props }) {
    const count = (props.count = useSignal(0));
    props.increment = () => count(count.value + 1);

    css`
        [${css("main")}] {
            background-color: red;
        }
    `;

    return html`
        <button
            x-css="main"
            x-on:click="increment"
            x-text="'count is: ' + count()"
        ></button>
    `;
}

useDefine("counter", Counter);
```

```html
<x-counter></x-counter>
```

---

# Next

[Explore signals](./signal.md)

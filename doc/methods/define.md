# Define

How to define a component with Vif ?

## Use the define method

```js
Vif.define("my-component", renderFunction);
```

-   `my-component` is the name of your component (became `<x-my-component>`)
-   `renderFunction` the function running at the component initialization

### renderFunction

```js
Vif.define("my-component", function (signal, html, css) {
    // do something here
});
```

The render function can take 3 parameters:

-   `signal` [learn more about signals](../concepts/signals.md)
-   `html` templatelitteral function used to render raw HTML
-   `css` templatelitteral function used to render raw CSS

The render function should return one of theses types:

-   `string` representing an HTML template
-   `this.component` representing the current component
-   `this.component.children` reprensenting the current component's children
-   `this.component.childNodes` reprensenting the current component's childNodes

The render function can't be an arrow function `()=>{}` because it's context is used in [directives](../concepts/directives.md).

# Examples

HTML render in JS

```js
Vif.define("counter", function (signal, html) {
    this.count = signal(0);

    this.increment = () => this.count(this.count() + 1);

    return html`
        <button x-on:click="increment" x-text="'count is: ' + count()"></button>
    `;
});
```

```html
<x-counter></x-counter>
```

HTML render in HTML

```js
Vif.define("counter", function (signal) {
    this.count = signal(0);

    this.increment = () => this.count(this.count() + 1);

    return this.component.children;
});
```

```html
<x-counter>
    <button x-on:click="increment" x-text="'count is: ' + count()"></button>
</x-counter>
```

With scoped style

```js
Vif.define("counter", function (signal, html, css) {
    this.count = signal(0);

    this.increment = () => this.count(this.count() + 1);

    css`
        [${css("main")}] {
            background-color: red;
        }`;

    return html`
        <button
            x-css="main"
            x-on:click="increment"
            x-text="'count is: ' + count()"
        ></button>
    `;
});
```

```html
<x-counter></x-counter>
```

# Next

[Explore signals](../concepts/signals.md)

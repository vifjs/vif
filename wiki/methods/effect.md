# Effect

What is an effect ?

An effect is simply a reactive function. It is a function that executes each time the value of a signal it contains changes.

## Use effect

There is two way to use effects, the first **and recommanded** is inside of components, using the `this` context :

```js
useDefine("effect-example", function ({ props }) {
    // create the signal
    const mySignal = (props.mySignal = useSignal("initialValue"));
    // create a reactive function played every time the value
    // of `mySignal` changes...
    this.useEffect(() => console.log(mySignal()));
});
```

This way is recommanded because the reactive function is automatically added into the component dependencies. So if the component is deleted the reactive function will be automatically cleaned.

The other way is to use the main `useEffect` method :

```js
import { useSignal, useEffect } from "vifjs";
// create the signal
const globalSignal = useSignal("initialValue");
// create a reactive function played every time the value
// of `globalSignal` changes...
useEffect(() => console.log(globalSignal()));
```

---

# Next

[Explore directives](../concepts/directives.md)

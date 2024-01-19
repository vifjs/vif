# Signals

What is a signal ?

A signal is an object that represents a changing value over time that will be able to inform parent contexts when used and automatically notify them when the value changes.

## Use a signal

Inside of component

```js
Vif.define("signal-example", function (signal) {
    // inside of component
    this.mySignal = signal(initialValue);

    // to get the signal value
    console.log(this.mySignal());

    // to change the signal value
    this.mySignal(newValue);
});
```

Outside of components (can be used for global contexts)

```js
// outside of components
const mySignal = Vif.signal(initialValue);

// to get the signal value
console.log(mySignal());

// to change the signal value
mySignal(newValue);
```

# Next

[Explore directives](./directives.md)

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

## Dependencies

Each signal has a dependencies array (Set), and you can add or delete dependencies manually :

```js
const mySignal = Vif.signal(false);
const myReactiveFunction = () => console.log("working");

mySignal.effect.add(myReactiveFunction);
// don't forget to run :
// > mySignal.effect.delete(myReactiveFunction)
// during onUnmount if you are doing that inside of a component
```

> Note that reactives functions are not allowed globally at this time. But this may be the case in the future after analyzing the advantages and disadvantages in terms of memory management and dependencies.

---

# Next

[Explore directives](./directives.md)

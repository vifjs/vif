# Signals

What is a signal ?

A signal is an object that represents a changing value over time that will be able to inform parent contexts when used and automatically notify them when the value changes.

## Use a signal

Signals can be used inside and outside of components, that can be usefull to manipulate multiple contexts.

```js
useDefine("signal-example", function ({ props }) {
    // inside of component
    const mySignal = (props.mySignal = useSignal("initialValue"));

    // to get the signal value
    console.log(mySignal());

    // to change the signal value
    mySignal("newValue");
});
```

---

# Next

[Explore effects](./effect.md)

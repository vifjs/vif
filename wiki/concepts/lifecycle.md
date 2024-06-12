# Lifecycle

The life cycle of a Vif component when it's found in DOM is as follows (resume) :

-   create the `datas` property
-   execute the `connectedCallback` function
    -   add static and dynamic datas passed through attributes into `datas`
    -   define the `props` variable
    -   execute the `onMount` method
    -   execute the `render` method
        -   execute the renderFunction with `datas as props`, `html` and `css` as parameter
        -   use the result to create template and schema (if not exist)
        -   bind the unique css indicator
        -   execute the `hydrate` method
            -   loop on schema and for each element execute the directives
        -   replace the element by the template from renderFunction (if not exist)

The life cycle of a Vif component when it's removed by a directive

-   loop on the `trail` and for each property run the `disconnectCallback` if exist
    -   if component :
        -   execute the `onUnmount` method
        -   execute the `unHydrate` method
    -   if directive :
        -   loop on the `trail` and for each signal :
            -   find the reactive function in dependencies
            -   remove the function from dependencies
    -   if template :
        -   loop on `templateParts` and execute the `disconnectCallback` for each part

## Using onMount and onUnmount (rare usage)

```js
const componentClass = useDefine("my-component", function(){...})

componentClass.prototype.onMount = function({ props }){
    // do something before component initilisation
}

componentClass.prototype.onUnmount = function({ props }){
    // remove intervals, timeout, global signals, extra listeners, etc...
}
```

---

# Next

[Lazy load your components](../methods/observe.md)

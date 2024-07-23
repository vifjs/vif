import { useDefine, useSignal } from "../src/bundle.js";

function App({ props }) {
    props.count = useSignal(10);

    setTimeout(() => {
        props.count(20);
    }, 2000);

    this.useEffect(() => console.log("app " + props.count()));
}

function Button({ props }) {
    this.useEffect(() => console.log("button " + props.count()));
}

useDefine("button", Button);
useDefine("app", App);

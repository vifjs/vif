import { useDefine, useNavigate, useSignal } from "../src/bundle.js";

function App({ props }) {
    props.count = useSignal([1, 2, 3]);
    props.navigate = useNavigate;

    setTimeout(() => {
        props.count([]);
    }, 1000);
    setTimeout(() => {
        props.count([4, 5, 6]);
    }, 2000);
    setTimeout(() => {
        props.count([7]);
    }, 3000);
    setTimeout(() => {
        props.count([]);
    }, 4000);
}

function Button({ props }) {
    this.useEffect(() => {});
}

useDefine("button", Button);
useDefine("app", App);

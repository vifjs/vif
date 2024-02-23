import {
    useDefine,
    useI18n,
    useNavigate,
    useSignal,
} from "../../src/bundle.js";

function First({ props }) {
    props.button = "button (hydrated)";
    return this.children;
}
function Second({ props }) {
    props.paragraphe = "paragraphe (hydrated)";
    return this.children;
}

setTimeout(() => {
    useDefine("first", First);
}, 500);
useDefine("second", Second);

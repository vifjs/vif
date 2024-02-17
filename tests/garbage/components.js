const { useDefine, useI18n, useNavigate } = Vif;

// import {
//     LitElement,
//     html,
// } from "https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js";

const prev = [...Array(8000)].map((_) => Math.ceil(Math.random() * 10));
const next = [...Array(20)].map((_) => Math.ceil(Math.random() * 1000));
const final = [...Array(4000)].map((_) => Math.ceil(Math.random() * 1000));

// let o = performance.now();

// function freeze() {
//     setTimeout(() => {
//         if (performance.now() - o > 30) {
//             console.log("freeze : " + (performance.now() - o));
//         }
//         o = performance.now();
//         freeze();
//     }, 1);
// }

// freeze();

setTimeout(() => {
    // console.log("lit");
    // class OtherElement extends LitElement {
    //     static properties = {
    //         text: {},
    //     };
    //     constructor() {
    //         super();
    //         this.text = "";
    //     }
    //     render() {
    //         return html`<li>${this.text}</li>`;
    //     }
    // }
    // customElements.define("basic-li", OtherElement);
    // class BasicElement extends LitElement {
    //     static properties = {
    //         array: {},
    //     };
    //     constructor() {
    //         super();
    //         this.array = prev;
    //         setTimeout(() => {
    //             this.array = next;
    //         }, 1000);
    //         setTimeout(() => {
    //             this.array = final;
    //         }, 2000);
    //     }
    //     render() {
    //         return html`
    //             <ul>
    //                 ${this.array.map(
    //                     (item) => html`<basic-li .text="${item}"></basic-li>`
    //                 )}
    //             </ul>
    //         `;
    //     }
    // }
    // customElements.define("basic-element", BasicElement);
    // console.log("vif");
    // Vif.define("li", function (signal, html) {
    //     return html`<li x-text="item()"></li>`;
    // });
    // Vif.define("p", function (signal, html, css) {
    //     this.array = signal(prev);
    //     // this.array = signal([1, 2, 3, 4, 5]);
    //     setTimeout(() => {
    //         this.array(next);
    //         // this.array([6]);
    //     }, 1000);
    //     setTimeout(() => {
    //         this.array(final);
    //         // this.array([7, 8, 9, 10, 11, 12, 13, 14]);
    //     }, 2000);
    //     return html` <ul>
    //         <template x-for="array()">
    //             <x-li x-item="item()"></x-li>
    //         </template>
    //     </ul>`;
    // });
}, 1000);

useI18n({
    fr: {
        FR: () => import("./fr.js"),
        default: "FR",
    },
    en: {
        EN: () => import("./en.js"),
        default: "EN",
    },
    default: "fr",
});

useI18n.onload(() => {
    function App({ props }) {
        props.navigate = useNavigate;
        props.i18n = useI18n;

        setTimeout(() => {
            this.useRef("button", (el) => console.log(el), true);
            setTimeout(() => {
                this.useRef("button", (el) => console.log(el), true);
            }, 1000);
        }, 1000);

        return this;
    }

    useDefine("app", App);

    setTimeout(() => {
        useI18n.locale("en-FR");
        setTimeout(() => {
            useI18n.locale("fr-FR");
        }, 200);
        setTimeout(() => {
            useI18n({
                fr: {
                    FR: () => import("./fr.bis.js"),
                    default: "FR",
                },
                en: {
                    EN: () => import("./en.js"),
                    default: "EN",
                },
                default: "fr",
            });
        }, 1000);
    }, 1500);
});

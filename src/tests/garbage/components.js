import Vif from "../../bundle.js";

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

Vif.i18n({
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

Vif.i18n.onload(() => {
    Vif.define("app", function (signal) {
        this.navigate = Vif.navigate;
        this.i18n = Vif.i18n;

        setTimeout(() => {
            this.ref("button", (el) => console.log(el), true);
            setTimeout(() => {
                this.ref("button", (el) => console.log(el), true);
                console.log(this.ref("button").data);
            }, 1000);
        }, 1000);

        return this.component;
    });
    setTimeout(() => {
        Vif.i18n.locale("en-FR");
        setTimeout(() => {
            Vif.i18n.locale("fr-FR");
        }, 200);
        setTimeout(() => {
            Vif.i18n({
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

setTimeout(() => {
    Vif.define("two", function (signal, html, css) {
        this.text = signal("x-two -> success");
        this.array = signal([1, 2, 3]);

        setTimeout(() => {
            this.array([]);
        }, 50);
        setTimeout(() => {
            this.array([1, 2, 3]);
        }, 500);

        setTimeout(() => {
            this.text("x-two -> success update");
        }, 1000);

        css`
            [${css("bg")}]::before {
                background: green;
                content: "(TWO)";
                margin-right: 10px;
            }`;

        return this.component.childNodes;
    });
}, 500);

setTimeout(() => {
    Vif.define("three", function (signal, html, css) {
        this.text = signal("x-three -> success");

        setTimeout(() => {
            this.text("x-three -> success update");
        }, 1000);

        css`
            [${css("bg")}]::before {
                background: yellow;
                content: "(THREE)";
                margin-right: 10px;
            }`;

        return this.component.childNodes;
    });
}, 1000);

Vif.define("one", function (signal, html, css) {
    this.text = signal("x-one -> success");

    setTimeout(() => {
        this.text("x-one -> success update");
    }, 1000);

    css`
        [${css("bg")}]::before {
            background: red;
            content: "(ONE)";
            margin-right: 10px;
        }`;

    return this.component.childNodes;
});

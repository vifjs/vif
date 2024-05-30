import {
    html,
    css,
    LitElement,
} from "https://cdn.jsdelivr.net/npm/lit@3.1.2/+esm";

import utils from "https://cdn.jsdelivr.net/npm/msfreeze@0.0.2/index.min.js";

console.log("[benchmark] script loaded successfully");

// styles

const globalStyles = css`
    * {
        margin: 0;
        padding: 0;
    }
    .flex-center {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;
    }
    .flex-wrap {
        flex-wrap: wrap;
    }
    .chip {
        display: block;
        text-align: center;
        width: 100px;
        padding: 0.3rem 0.1rem;
        border-radius: var(--radius-sm);
    }
    .chip svg {
        height: 1.5rem;
        width: 1.5rem;
        vertical-align: text-bottom;
    }
    .chip.ok {
        color: hsl(100, 80%, 40%);
        fill: hsl(100, 80%, 40%);
        background-color: hsla(100, 70%, 50%, 0.2);
    }
    .chip.warn {
        color: hsl(50, 90%, 40%);
        fill: hsl(50, 90%, 40%);
        background-color: hsla(50, 70%, 50%, 0.2);
    }
`;

// 1 by 1

class BenchOneByOne extends LitElement {
    static styles = globalStyles;
    static properties = {
        list: {
            state: true,
        },
    };
    constructor() {
        super();
        console.log("[benchmark] 1 by 1 loaded");
        this.list = [];
    }
    bench() {
        console.log("[benchmark] >>> 1 by 1 started...");
        setTimeout(() => (this.list = utils.array(10000, 10000)), 1000);
        setTimeout(() => (this.list = utils.array(10000, 10000)), 2000);
        setTimeout(() => {
            this.list = [];
            console.log("[benchmark] >>> 1 by 1 ended...");
        }, 3000);
    }
    render() {
        return html`
            <div class="flex-center flex-wrap gap-1">
                ${this.list.map(
                    (item) => html` <p
                        class="${item > 5000 ? "chip ok" : "chip warn"}"
                    >
                        ${item}
                    </p>`
                )}
            </div>
            <button class="button lit" @click=${this.bench}>Start</button>
        `;
    }
}

customElements.define("bench-one-by-one", BenchOneByOne);

// 10 by 10

class BenchTenByTen extends LitElement {
    static styles = globalStyles;
    static properties = {
        list: {
            state: true,
        },
    };
    constructor() {
        super();
        console.log("[benchmark] 10 by 10 loaded");
        this.list = [];
    }
    bench() {
        console.log("[benchmark] >>> 10 by 10 started...");
        setTimeout(() => (this.list = utils.array(1000, 1000)), 1000);
        setTimeout(() => (this.list = utils.array(1000, 1000)), 2000);
        setTimeout(() => {
            this.list = [];
            console.log("[benchmark] >>> 10 by 10 ended...");
        }, 3000);
    }
    render() {
        return html`
            <div class="flex-center flex-wrap gap-1">
                ${this.list.map(
                    (item) => html`
                        <p class="${item > 500 ? "chip ok" : "chip warn"}">
                            ${item}
                        </p>
                        <p class="${item > 500 ? "chip ok" : "chip warn"}">
                            ${item}
                        </p>
                        <p class="${item > 500 ? "chip ok" : "chip warn"}">
                            ${item}
                        </p>
                        <p class="${item > 500 ? "chip ok" : "chip warn"}">
                            ${item}
                        </p>
                        <p class="${item > 500 ? "chip ok" : "chip warn"}">
                            ${item}
                        </p>
                        <p class="${item > 500 ? "chip ok" : "chip warn"}">
                            ${item}
                        </p>
                        <p class="${item > 500 ? "chip ok" : "chip warn"}">
                            ${item}
                        </p>
                        <p class="${item > 500 ? "chip ok" : "chip warn"}">
                            ${item}
                        </p>
                        <p class="${item > 500 ? "chip ok" : "chip warn"}">
                            ${item}
                        </p>
                        <p class="${item > 500 ? "chip ok" : "chip warn"}">
                            ${item}
                        </p>
                    `
                )}
            </div>
            <button class="button lit" @click=${this.bench}>Start</button>
        `;
    }
}

customElements.define("bench-ten-by-ten", BenchTenByTen);

// 1 by 1 nested

class BenchOneByOneNested extends LitElement {
    static styles = globalStyles;
    static properties = {
        list: {
            state: true,
        },
    };
    constructor() {
        super();
        console.log("[benchmark] 1 by 1 nested loaded");
        this.list = [];
    }
    bench() {
        console.log("[benchmark] >>> 1 by 1 nested started...");
        setTimeout(() => (this.list = utils.array(10000, 10000)), 1000);
        setTimeout(() => (this.list = utils.array(10000, 10000)), 2000);
        setTimeout(() => {
            this.list = [];
            console.log("[benchmark] >>> 1 by 1 nested ended...");
        }, 3000);
    }
    render() {
        return html`
            <div class="flex-center flex-wrap gap-1">
                ${this.list.map(
                    (item) => html` <nested-one .item=${item}></nested-one> `
                )}
            </div>
            <button class="button lit" @click=${this.bench}>Start</button>
        `;
    }
}

class NestedOne extends LitElement {
    static styles = globalStyles;
    static properties = {
        item: {
            state: true,
        },
    };
    constructor() {
        super();
    }
    render() {
        return html`
            <p class="${this.item > 5000 ? "chip ok" : "chip warn"}">
                ${this.item}
            </p>
        `;
    }
}

customElements.define("nested-one", NestedOne);
customElements.define("bench-one-by-one-nested", BenchOneByOneNested);

// 10 by 10 nested

class BenchTenByTenNested extends LitElement {
    static styles = globalStyles;
    static properties = {
        list: {
            state: true,
        },
    };
    constructor() {
        super();
        console.log("[benchmark] 10 by 10 loaded");
        this.list = [];
    }
    bench() {
        console.log("[benchmark] >>> 10 by 10 started...");
        setTimeout(() => (this.list = utils.array(1000, 1000)), 1000);
        setTimeout(() => (this.list = utils.array(1000, 1000)), 2000);
        setTimeout(() => {
            this.list = [];
            console.log("[benchmark] >>> 10 by 10 ended...");
        }, 3000);
    }
    render() {
        return html`
            <div class="flex-center flex-wrap gap-1">
                ${this.list.map(
                    (item) => html` <nested-ten .item=${item}></nested-ten> `
                )}
            </div>
            <button class="button lit" @click=${this.bench}>Start</button>
        `;
    }
}

class NestedTen extends LitElement {
    static styles = globalStyles;
    static properties = {
        item: {
            state: true,
        },
    };
    constructor() {
        super();
    }
    render() {
        return html`
            <p class="${this.item > 500 ? "chip ok" : "chip warn"}">
                ${this.item}
            </p>
            <p class="${this.item > 500 ? "chip ok" : "chip warn"}">
                ${this.item}
            </p>
            <p class="${this.item > 500 ? "chip ok" : "chip warn"}">
                ${this.item}
            </p>
            <p class="${this.item > 500 ? "chip ok" : "chip warn"}">
                ${this.item}
            </p>
            <p class="${this.item > 500 ? "chip ok" : "chip warn"}">
                ${this.item}
            </p>
            <p class="${this.item > 500 ? "chip ok" : "chip warn"}">
                ${this.item}
            </p>
            <p class="${this.item > 500 ? "chip ok" : "chip warn"}">
                ${this.item}
            </p>
            <p class="${this.item > 500 ? "chip ok" : "chip warn"}">
                ${this.item}
            </p>
            <p class="${this.item > 500 ? "chip ok" : "chip warn"}">
                ${this.item}
            </p>
            <p class="${this.item > 500 ? "chip ok" : "chip warn"}">
                ${this.item}
            </p>
        `;
    }
}

customElements.define("nested-ten", NestedTen);
customElements.define("bench-ten-by-ten-nested", BenchTenByTenNested);

// Done...

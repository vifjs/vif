import {
    useDefine,
    useSignal,
} from "https://cdn.jsdelivr.net/npm/vifjs@latest/esm/vif.js";

import utils from "https://cdn.jsdelivr.net/npm/msfreeze@0.0.2/index.min.js";

console.log("[benchmark] script loaded successfully");

// 1 by 1

function BenchOneByOne({ props, html }) {
    console.log("[benchmark] 1 by 1 loaded");

    props.list = useSignal([]);
    props.bench = function () {
        console.log("[benchmark] >>> 1 by 1 started...");
        setTimeout(() => props.list(utils.array(10000, 10000)), 1000);
        setTimeout(() => props.list(utils.array(10000, 10000)), 2000);
        setTimeout(() => {
            props.list([]);
            console.log("[benchmark] >>> 1 by 1 ended...");
        }, 3000);
    };

    return html`
        <div class="flex-center flex-wrap gap-1">
            <template x-for="list()">
                <p
                    x-text="item()"
                    x-class="item() > 5000 ? 'chip ok' : 'chip warn'"
                ></p>
            </template>
        </div>
        <button class="button vif" x-on:click="bench">Start</button>
    `;
}

useDefine("bench-one-by-one", BenchOneByOne);

// 10 by 10

function BenchTenByTen({ props, html }) {
    console.log("[benchmark] 10 by 10 loaded");

    props.list = useSignal([]);
    props.bench = function () {
        console.log("[benchmark] >>> 10 by 10 started...");
        setTimeout(() => props.list(utils.array(1000, 1000)), 1000);
        setTimeout(() => props.list(utils.array(1000, 1000)), 2000);
        setTimeout(() => {
            props.list([]);
            console.log("[benchmark] >>> 10 by 10 ended...");
        }, 3000);
    };

    return html`
        <div class="flex-center flex-wrap gap-1">
            <template x-for="list()">
                <p
                    x-text="item()"
                    x-class="item() > 500 ? 'chip ok' : 'chip warn'"
                ></p>
                <p
                    x-text="item()"
                    x-class="item() > 500 ? 'chip ok' : 'chip warn'"
                ></p>
                <p
                    x-text="item()"
                    x-class="item() > 500 ? 'chip ok' : 'chip warn'"
                ></p>
                <p
                    x-text="item()"
                    x-class="item() > 500 ? 'chip ok' : 'chip warn'"
                ></p>
                <p
                    x-text="item()"
                    x-class="item() > 500 ? 'chip ok' : 'chip warn'"
                ></p>
                <p
                    x-text="item()"
                    x-class="item() > 500 ? 'chip ok' : 'chip warn'"
                ></p>
                <p
                    x-text="item()"
                    x-class="item() > 500 ? 'chip ok' : 'chip warn'"
                ></p>
                <p
                    x-text="item()"
                    x-class="item() > 500 ? 'chip ok' : 'chip warn'"
                ></p>
                <p
                    x-text="item()"
                    x-class="item() > 500 ? 'chip ok' : 'chip warn'"
                ></p>
                <p
                    x-text="item()"
                    x-class="item() > 500 ? 'chip ok' : 'chip warn'"
                ></p>
            </template>
        </div>
        <button class="button vif" x-on:click="bench">Start</button>
    `;
}

useDefine("bench-ten-by-ten", BenchTenByTen);

// 1 by 1 nested

function BenchOneByOneNested({ props, html }) {
    console.log("[benchmark] 1 by 1 nested loaded");

    props.list = useSignal([]);
    props.bench = function () {
        console.log("[benchmark] >>> 1 by 1 nested started...");
        setTimeout(() => props.list(utils.array(10000, 10000)), 1000);
        setTimeout(() => props.list(utils.array(10000, 10000)), 2000);
        setTimeout(() => {
            props.list([]);
            console.log("[benchmark] >>> 1 by 1 nested ended...");
        }, 3000);
    };

    return html`
        <div class="flex-center flex-wrap gap-1">
            <template x-for="list()">
                <x-nested-one x-item="item()"></x-nested-one>
            </template>
        </div>
        <button class="button vif" x-on:click="bench">Start</button>
    `;
}

function NestedOne({ html }) {
    return html`
        <p
            x-text="item()"
            x-class="item() > 5000 ? 'chip ok' : 'chip warn'"
        ></p>
    `;
}

useDefine("nested-one", NestedOne);
useDefine("bench-one-by-one-nested", BenchOneByOneNested);

// 10 by 10 nested

function BenchTenByTenNested({ props, html }) {
    console.log("[benchmark] 10 by 10 nested loaded");

    props.list = useSignal([]);
    props.bench = function () {
        console.log("[benchmark] >>> 10 by 10 nested started...");
        setTimeout(() => props.list(utils.array(1000, 1000)), 1000);
        setTimeout(() => props.list(utils.array(1000, 1000)), 2000);
        setTimeout(() => {
            props.list([]);
            console.log("[benchmark] >>> 10 by 10 nested ended...");
        }, 3000);
    };

    return html`
        <div class="flex-center flex-wrap gap-1">
            <template x-for="list()">
                <x-nested-ten x-item="item()"></x-nested-ten>
            </template>
        </div>
        <button class="button vif" x-on:click="bench">Start</button>
    `;
}

function NestedTen({ html }) {
    return html`
        <p x-text="item()" x-class="item() > 500 ? 'chip ok' : 'chip warn'"></p>
        <p x-text="item()" x-class="item() > 500 ? 'chip ok' : 'chip warn'"></p>
        <p x-text="item()" x-class="item() > 500 ? 'chip ok' : 'chip warn'"></p>
        <p x-text="item()" x-class="item() > 500 ? 'chip ok' : 'chip warn'"></p>
        <p x-text="item()" x-class="item() > 500 ? 'chip ok' : 'chip warn'"></p>
        <p x-text="item()" x-class="item() > 500 ? 'chip ok' : 'chip warn'"></p>
        <p x-text="item()" x-class="item() > 500 ? 'chip ok' : 'chip warn'"></p>
        <p x-text="item()" x-class="item() > 500 ? 'chip ok' : 'chip warn'"></p>
        <p x-text="item()" x-class="item() > 500 ? 'chip ok' : 'chip warn'"></p>
        <p x-text="item()" x-class="item() > 500 ? 'chip ok' : 'chip warn'"></p>
    `;
}

useDefine("nested-ten", NestedTen);
useDefine("bench-ten-by-ten-nested", BenchTenByTenNested);

// Done...

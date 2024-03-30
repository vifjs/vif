import {
    LitElement,
    html,
} from "https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js";

let id = 0;

function _random(max) {
    return Math.round(Math.random() * 1000) % max;
}

function buildData(count = 1000) {
    var adjectives = [
        "pretty",
        "large",
        "big",
        "small",
        "tall",
        "short",
        "long",
        "handsome",
        "plain",
        "quaint",
        "clean",
        "elegant",
        "easy",
        "angry",
        "crazy",
        "helpful",
        "mushy",
        "odd",
        "unsightly",
        "adorable",
        "important",
        "inexpensive",
        "cheap",
        "expensive",
        "fancy",
    ];
    var colours = [
        "red",
        "yellow",
        "blue",
        "green",
        "pink",
        "brown",
        "purple",
        "brown",
        "white",
        "black",
        "orange",
    ];
    var nouns = [
        "table",
        "chair",
        "house",
        "bbq",
        "desk",
        "car",
        "pony",
        "cookie",
        "sandwich",
        "burger",
        "pizza",
        "mouse",
        "keyboard",
    ];
    var data = [];
    for (var i = 0; i < count; i++)
        data.push({
            id: id++,
            label:
                adjectives[_random(adjectives.length)] +
                " " +
                colours[_random(colours.length)] +
                " " +
                nouns[_random(nouns.length)],
        });
    return data;
}

class LitApp extends LitElement {
    static properties = {
        array: {},
    };
    constructor() {
        super();
        this.array = [];
        setTimeout(() => {
            this.array = this.array.length ? [] : buildData(10000);
        }, 1000);
        setTimeout(() => {
            this.array = this.array.length ? [] : buildData(10000);
        }, 2000);
        setTimeout(() => {
            this.array = this.array.length ? [] : buildData(10000);
        }, 3000);
    }
    render() {
        return html`${this.array.map((item) => html`<p>${item.label}</p>`)}`;
    }
}

customElements.define("lit-app", LitApp);

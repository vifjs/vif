import { useDefine, useSignal } from "../../src/bundle.js";

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

function App({ props }) {
    props.array = useSignal([]);
    setTimeout(() => {
        props.array(props.array.value.length ? [] : buildData(10000));
    }, 1000);
    setTimeout(() => {
        props.array(props.array.value.length ? [] : buildData(10000));
    }, 2000);
    setTimeout(() => {
        props.array(props.array.value.length ? [] : buildData(10000));
    }, 3000);
}

useDefine("app", App);

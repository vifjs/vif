/**
 * Used to avoid template evaluation and improve performances
 * @returns
 */
export const createEmptyTemplate = () => {};

/**
 * Used to return HTML and CSS templates from components renderFunction
 * @param {[string]} strings
 * @param {...any} values
 * @returns {string}
 */
export const createLiteralTemplate = (strings, ...values) =>
    strings.reduce(
        (result, text, i) =>
            (result += text + (i === strings.length - 1 ? "" : values[i])),
        ""
    );

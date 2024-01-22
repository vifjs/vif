/*
    TODO -> explain
*/

import { signal } from "../reactivity/signal.js";
import { VIF } from "../utils/types.js";

let currentLocation = location;

// retrieve the path after origin from an URL object
const getFormattedRoute = () =>
    currentLocation.pathname + currentLocation.search;

// signal of the current route
export const route = signal(getFormattedRoute());

// add listener on popstate to update the current route
// every time user get back or forward in history.
addEventListener("popstate", () => {
    currentLocation = location;
    route(getFormattedRoute());
});

/** @type {VIF.Method.Navigate} */
export const navigate = (data) => {
    // if the argument is a string, navigate to the route
    if (typeof data === "string") {
        // get the new location object based on currentLocation
        const newLocation = new URL(data, currentLocation);

        // check if newLocation is different of currentLocation
        if (currentLocation.href !== newLocation.href) {
            // update the currentLocation based on link
            currentLocation = newLocation;
            // update the history based on new location
            history.pushState({}, "", currentLocation);
            // update the current route signal based on new location
            return route(getFormattedRoute());
        }
    }

    // if the argument is not a string, it is considered as Event
    // this strategy can be used to manage routing in SPA context
    // without affecting the crawlers strategies
    else {
        // prevent the event execution on browsers
        data.preventDefault();
        // retrieve the href value of the element
        const link = data.currentTarget.href;
        // navigate to the corresponding route
        if (link) {
            return navigate(link);
        }
    }
};

navigate.route = route;

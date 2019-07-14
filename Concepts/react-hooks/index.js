/**
 * DISCLAIMER: This is not the way hooks in react are working and
 * you should never do it like this in production.
 * This is just meant for a general understanding
 * why the order of the useState calls is important.
 */

let state = [];
let setters = [];
let firstRun = true;
let cursor = 0;

function createSetter(cursor, caller) {
    return function setterWithCursor(newState) {
        state[cursor] = newState;
        caller();
    }
}

function useState(initState) {
    if (firstRun) {
        state.push(initState);
        setters.push(createSetter(cursor, useState.caller));
        firstRun = false;
    }

    const setter = setters[cursor];
    const value = state[cursor];

    cursor++;
    return [value, setter];
}

function HookedFunction() {
    const [name, setName] = useState("Sven");

    setTimeout(() => {
        if (name !== "Nicole") {
            setName("Nicole");
        }
    }, 100);

    cursor = 0;
    return name;
}

HookedFunction();
import {log} from "./utils.mjs";

let callback = () => log("Regular timeout callback has run");

let urgentCallback = () => log("*** Oh noes! An urgent callback has run!");

let doWork = () => {
    let result = 1;

    queueMicrotask(urgentCallback);

    for (let i=2; i<=10; i++) {
        result *= i;
    }
    return result;
};

log("Main program started");
setTimeout(callback, 0);
log(`10! equals ${doWork()}`);
log("Main program exiting");
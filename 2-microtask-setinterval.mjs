import {log} from "./utils.mjs";

let callback = () => log("Regular timeout callback has run");

let urgentCallback = () => log("*** Oh noes! An urgent callback has run!");

log("Main program started");
setTimeout(callback, 0);
queueMicrotask(urgentCallback);
log("Main program exiting");

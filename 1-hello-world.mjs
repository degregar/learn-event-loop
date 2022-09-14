import {log} from "./utils.mjs";

log("Before enqueueing the microtask");
queueMicrotask(() => {
    log("The microtask has run.")
});
log("After enqueueing the microtask");
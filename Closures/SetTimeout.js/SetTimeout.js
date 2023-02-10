
/**
 * setTimeout(task-callback, time in milliseconds)
 * 
 * task-callback:-  what task we want to execute we need to pass it as a callback
 * 
 */

console.log("start");
setTimeout(function execution() {
    console.log("task completed");
}, 1000);
console.log("end");
/**
 *  How it works?
 * 
 */
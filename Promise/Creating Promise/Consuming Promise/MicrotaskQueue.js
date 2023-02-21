
console.log("start");
setTimeout(function timmer1() {
    console.log("timmer1");
}, 0);

for(let i=0;i<100000000;i++){

    // something
}

let x = Promise.resolve("Kartik");
        x.then(function process(value) {
            console.log("whos Promise",value);
        }
        );

setTimeout(function timmer2() {
    console.log("timmer2");
}
, 0);

console.log("end");

/**
 *  Promise callback (means the callback function which is passed to the then() function.) go in microtask queue.
 *  normal callback function go in event queue. 
 * 
 * when promise get resolved then the callback function will be go in microtask queue.
 * 
 * read JS docs created by me 
 */

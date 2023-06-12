
/** 
 * How JS handle Async nature of JS
 */

function process() {
    console.log("Processing");
    setTimeout(function exec() {
        console.log("Inside of callback");
    }, 3000);
    for(let i=0; i<1000000000000; i++) {
        // some code
    }
    console.log("Finishing processing");
}

process();
console.log("Finishing app");

/**
 * 
 * it execute, we get call stack & apart from that we get two more things.
 * 1. Event Queue --> it is kind of waiting area. where all the callback function will reside.
 * 2. Event Loop --> It is kind of infinite loop.
 *                  what it does ?
 *                      it again & again check the condtions. 
 *                  what is the condition?
 *                  1. The first condition to start executing task from event queue is that "call stack should be empty". means no funciton in the call stack is left to execute.  
 *                  2. the second condition is "global code execution is done". means line no. 18 console.log("Finishing app"); is executed. 
 *                          if the condition is true then it will pop out the callback function from event queue & start executing it.
 * 
 * how process() function work?
 *       call process() function. & print "Processing".
 *  no. 8 line of code is not part of ecma script. so it is provided by browser runtime.
 *       currently i am running the node module so setTimeout is provided by node runtime.
 *      now JS will see that setTimeout is given by node runtime. so js will don't know how to handle it.
 *          so JS will take this setTimeout function & put it in runtime. because runtime know how to handle it. & move ahead.
 *  no. 11 JS is line no. 11 so it will start timer for 3 seconds in runtime.
 *      now js will execute for loop, & it will take approx 8 seconds to execute.
 *      for loop is known to JS so it will keep on  executing it. --> take 8 seconds to execute.
 * ques==> at line 11 we start the time for 3 seconds & within 3 second timer is done. but we are still executing  for loop is taking 8 seconds to execute. what will happen?
 *          runtime will say my timer is done. & my task is to execute the callback exec function. but JS is still executing for loop. 
 *              so runtime will pass the exec function to event queue & this callback function will wait in event queue. it will not execute immediately.
 * ques==> when will this callback function will execute?
 *          we have event loop. 
 *              so event loop will check the condition. & when satisfy with both condition then it will pop out the callback function from event queue & start executing it.
 * 
 * point to remember:
 *      1. once runtime is done with the task timer, runtime can't break the flow of js, (like js was executing the for loop) js will not allow to break the flow of js. because js is synchronous in nature.
 *          all runtime can do is to pass the callback function to event queue & when event loop will satisfy the condition then it will pop out the callback function from event queue & start executing it.
 */


function process() {
    console.log("Processing");
    setTimeout(function exec() {
        console.log("Inside of callback");
    }, 0);
    for(let i=0; i<1000000000000; i++) {
        // some code
    }
    console.log("Finishing processing");
}

process();
console.log("Finishing app");



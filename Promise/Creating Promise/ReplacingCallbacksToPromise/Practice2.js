/**
 * these are the example of promise creation.
 */

function demo1(){
    return new Promise(function (resolve, reject)  {
        console.log("demo1 started");
        setTimeout(function exec() {
            console.log("completing");
            resolve("Yuuuuuppppp");
        }, 7000);
        console.log("demo1 finished");
        });
}

let y = demo1();
console.log(y);

/**
 *   
                Promise is js object & it is known to  ESCMA script. so the code will execute synchronously. 
                    untill & unless we put the async code like setTimeout() or setInterval() or ajax call.

                 In the promise we are doing --> timmer is starting & print the data after 3 seconds.
                    so the timmer is executing, we have hoping promise will be resolved.
                    once the timmer is completed then the promise is resolved 
                        & call the resolve function & pass the data.

                        calling the resolve function means the promise is fullfilled.
                    
 */
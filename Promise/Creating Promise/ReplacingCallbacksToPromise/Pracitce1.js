/**
 * these are the example of promise creation.
 */

/**
 * Write a function to download data from a url & use Promise instead of callback
 */

function fetchCustom(url) {
    return new Promise(function exe(resolve, reject) {
        console.log("downlading started", url);
        setTimeout(function exec() {
            let result = "some data";
            console.log("downlading data", result);  
            // we need to return the data.     
            resolve(result); // resolve is a function which will return the data        
        }, 3000);
    })
}
let x = fetchCustom("https://www.google.com")
console.log(x)

    /**
     * we want to use promises so steps to create a promise
     *  1. promise is a object so how to return a object. --> return new Promise() it is an promise constructor 
     *  2. return new Promise() --> this expect a function as a parameter called as callback function. 
     *  3. this function will have 2 parameters --> resolve, reject
     *     3.1 inside callback function (exe) we need to write the logic to download the data
     *   after completing the execution of promise we need to return the data just call resolve() and pass the data
     *  4. resolve --> if we want to return the data
     */


    function fetch1(url) {
        return new Promise(function exe(resolve, reject) {

            // here for loop will stop the execution of the code because it is a synchronous code. 
                for(let i=0;i<100000000;i++){
                    //console.log("downloading started", url);
                }
                console.log("downloading completed");
                resolve("some data"); // the promise is resolved and the data is returned
        })
    }

    let y = fetch1("https://www.google.com");
    console.log(y);
/**
 * 
 * 
 */

function fetchCustom2(url) {
    return new Promise(function A(resolve,reject){
        console.log("downlading started",url);
        setTimeout(function exec() {
            console.log("downloading completed");
            let result = "some data";
            resolve(result);                                                     // fn function calling
        }, 4000);
    });
}


console.log("start");
let x = fetchCustom2("https://www.google.com");
x.then(function B(data) {
    console.log("data",data);
});
console.log("end");

/**
 * 
 *  Working
 *      first start will be printed
 *       then we call fetchCustom2 function 
 *          & it print downloading started https://www.google.com then, 
 *      it will returns a promise object that are pending state
    *      & the function A will be register into the onFulfilled [] of the promise object
    *      then code pointer will come back to line 19. 
    *      then line no 20, it will register the function B into the onFulfilled [] of the promise object
    *      & after the promise get fullfilled then line no. 21 will be executed 
 *      it print the end.
 *      when promise get fullfilled then the function A will be executed
 *          & then the function B will be executed.
 */
/**
 *          When we resolve one promise object then how we can chain up multiple .then() on that resolution of 1 promise object
 */

function fun() {
    return new Promise(function f(resolve, reject) {
        setTimeout(function process() {
            console.log("resolved");
            resolve(123);
        }, 3000);
        });
}


let x = fun();  // resolved value of promise object returned by fun() is 123
x.then(function exec(data) {  // first .then()
    console.log("data1",data);
    return 100;
})

.then(function exec1(data) { // second .then() chained up on the first x.then() promise object
    console.log("data2",data);
})

/**
 * Ouptput:
 *      resolved
 *      data1 123
 *      data2 100
 */

/**
 * 
 *  
                    val1 is a promise object. 
                        when we initialise val1 = fun(); it will create the promise object(line 15) immediately 
                            the promise is not resolve because of timer so code pointer now at line no 16. 
                        x.then(function() --> it will register the exec function on the fullfilment array of promise object returned by fun() (line 15)

                    Now, if we chain up new .then() (line 20)
                            the second .then() will register the exec1 function on the fullfilment array of promise object  that returned from the first .then() (line 20)
                            not to the promise of object x (line 15)
                        
                means, we are able to add only one function on the fullfilment array of promise object returned by fun() (line 15)
                        because when we put the new.then() (line 21) it actually change the itself to new promise object given by the first x.then() (line 21)
                            it does not chain up the new .then() on the promise object returned by fun() (line 15)
                    
                how to chain up the second .then() on the promise object returned by fun() (line 15)
                    we have an access of x object. 
                        so whenever we do x.then() it will register the function on the fullfilment array of promise object returned by fun() (line 15)
                            so we can chain up the second .then() on the promise object returned by fun() (line 15)4
                    
                
 */

x.then(function exec2(data) { // second .then() chained up on the fun() promise object
    console.log("data3",data);
})


/**
 * Ouptput:
 *    resolved
 *    data1 123
 *    data3 123
 *    data2 100
 */

/**
 *      so by doing x.then() we are adding one more function on the fullfilment array of promise object returned by fun() (line 15) 
 *              
 *          Resolution of promise object. 
 *             {
 *                  state: "pending",
 *                 value: undefined,
 *                fullfilment: [exec, exec2]
 *              }
 */

/**
 * Inversion of Control
 *  assume this fun function is a library function like math.sqrt, array..map etc means we have not implemented fun function, we are using it.  
 */

function fun(inputString, fn) {
    // execute split algorithm on inputString

    let output = inputString.split(','); // output is an array
    //now whatever callback function is passed, we call the callback function on each element of the array
    for(let i = 0; i < output.length; i++) {
        fn(output[i]);
    }
}

/**
 * 
 * using this above funtion
 * 
 *  implementation
 *         whatever is the output array, on the every element of the array, we call the callback function
 */

fun("name:kartik,age:23,city:bangalore", function process(input) {
        // custom logic we can change. 

    let arr = input.split(':');
    console.log("{", arr[0], "==>", arr[1], "}");
});


/**
 *      we as an user we are using line no. 25 
 *          fun function for every element of this array that we got by , seprated. it will call fn function only once on all elements of the array
 *          we are using this code line no. 10
 *              by mistake team member call the fn function twice or not implemented the fn function
 *              now the output will be wrong
 *      usecase1:-
 *              assume fn function is an seat booking function & we create a booking twice. or we forgot to call the fn function
 *                  & we can't check every time that there is a booking funtion is called or not.
 * 
 * 
 *      Problem:-
 *              the logic of callback function (process) is not known to this internal function (fun). 
 *                  logic of callback (process) function is known to the user who is using fun.  
 *              i have written my logic in the callback function (process) & i am using fn function.
 *                  but i am not executing the process function on my own.  i am passing the process function to the fn function & relying 
 *                    on them that they will execute the process function.
 * 
 *              we are just an end user of the function like array.map, array.filter, array.reduce etc
 *                  assume fun function is an array.map function 
 *                      we are using the function fun as an array.map function & fun function is already implemented.
 *                      we know that fun function expect the string like this "name:kartik,age:23,city:bangalore" as an input &  pass callback process function as an argument whatever processing we want to do on the array.
 *                          so this process function is my business logic.
 *                          but i am not executing this process function, i am just executing the function fn like i am passing the process function to the fn function.
 *                              
 *                              NOW, how the fn function will execute the process function. we don't know.
 *                                      how many times it will call we don't know.
 *                                      weather it should be call or not we don't know.
 *                              everything is descided by the fn function.
 *                                  & we are giving the control of our business logic to the fn function.
 
                i am not controlling how my process function should be executed. i am just passing the process function. this is called as inversion of control.
                        like we are relying on setTimeout function that it will execute the callback function after 5 seconds.
                        & there is an bug with setTimeout function that it is not executing the callback function after 5 seconds.
                            that is harm to our business logic. 
                            
                like razorpay integration, we are using razorpay library to integrate the payment gateway.
                            there may be error happend so due to there mistake our business logic will be affected.\
                                our cusotomer charged twice. 
                    
                                this probelem is called as Inversion of Control.
    *

 */         

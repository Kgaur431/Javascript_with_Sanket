
// in the Js internal map function, we are calling map function on an array & in custom map function, we are passing an array as an argument to the map function.

function mapper(arr, fun) {
    /**
     * 
     * arr --> array
     * fun --> callback function
     * 
     */

    let result = []; // new array
    for(let i = 0; i < arr.length; i++){

        /**
         * HERE, i can access to every element  & index of the element of the given array. 
         * index of the element.
         * arr[i] --> value.
         * 
        */
        let res =   fun(arr[i], i); // whatever the implementation of arr[i] or whatever will be impelementation of fn will be called here.
        result.push(res);
    }
    return result;
}

let arr = [1, 2, 3, 4, 5];
let result = mapper(arr, function cuber(value, index){
    console.log(value * value * value, index); // returning cubic value. 
    return value * value * value;
});

console.log(result, arr);

/**
 * creating custom map function
 *  like:-
 *          mapper function will take two arguments
 *              1. array
 *             2. callback function which expects two arguments (value, index)
 * 
*     form line 10 to 14, 
*     1. we are creating a new array
*     2. it is going through every element of the given array
*     3. & for every element of the array it is calling the callback function & passing the element as an argument to the callback function

 */

/**
 *  Callback function
 *      the logic can now be descided by the call side. 
 *          like:- the mapper function, from where we are calling the mapper function, 
 *                       we can decide the logic of the callback function. (line no. 28;)
 */
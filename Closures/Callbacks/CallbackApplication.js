// Application of Callbacks

let arr = [1, 2, 3, 4, 5];
let result = arr.map(function process(value, index){
    /**
     * value --> number
     * index --> number
     * 
     * 
     * arr.map() --> it does "for all the elements of the given array, it passes the element as an argument to the callback function."
     *  like:- one by one for all the elements of the array, (first it will pick first element 1 & passed that argument to the callback function, then it will pick second element 2 & passed that argument to the callback function, then it will pick third element 3 & passed that argument to the callback function, then it will pick fourth element 4 & passed that argument to the callback function, then it will pick fifth element 5 & passed that argument to the callback function)
     *          inside v --> 1, 2, 3, 4, 5 & inside i --> 0, 1, 2, 3, 4
     *  means on every element of the given array it will call the process function & it does some logic on that element. 
     *          whatever value we return from the callback function, it will store that value in the new array & return that new array.
     */

   // console.log(value, index);
    return value * value;
     /**
      * like 
      *     1 * 2 = 2  --> 2 will be returned from the callback function & it will store that value in the new array
      *     2 * 2 = 4  --> 4 will be returned from the callback function & it will store that value in the new array
      *     3 * 2 = 6  --> 6 will be returned from the callback function & it will store that value in the new array
      *     4 * 2 = 8  --> 8 will be returned from the callback function & it will store that value in the new array
      *     5 * 2 = 10  --> 10 will be returned from the callback function & it will store that value in the new array
      */


});
console.log(arr); // old array
console.log(result); // new array that returned by the map() method


/**
 *      At the call side, we can decide the logic of the callback function.
 *          like at line no. 18 we want to square it but if someone want to cube it, then he can descide what he want to do with the element of the array.
 *              wgeb we are calling the map function.  we can descide the logic of the callback function.
 */

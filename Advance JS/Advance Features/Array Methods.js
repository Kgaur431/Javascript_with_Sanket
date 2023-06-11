// 1. Method Vs Function

function printABC() {
  //                Function, because it is stand alone its own.
  console.log('ABC');
}

const obj = {
  printABC() {
    //                    Method, this function we can call it Method because it is inside the object.
    console.log('ABC');
  },
};

const a = [1, 2, 3, 4, 5];

// all array methods are loop through the each element in the array & call the function.

/**
 *
 *  forEach Method:- (take function as an arguments)
 *          this function does, it takes a function. & that function will be called for each element in the array.
 *            like :-
 *                    a.forEach(() =>{});
 *                    means () =>{} this arrow function will be called for each element in the array, assume there is 5 elements in the array
 *                      then () =>{} this arrow function will be called for 5 times.
 *
 *           this fun takes second argument called index. index is an place of the element in the array.
 *         
 *              it just like an normal loop 
 *
 *
 *       Application of forEach method:-
 *                          1. It is used to iterate over the array.
 *                          2.  do some operation on each element.
 *                          3. it doesn't return anything. It just calls a provided function on each element in your array.
 *
 *
 */

let b = a.forEach((elemets, index) => {
  // console.log(`${index}`, elemets);
  return elemets;
});
// console.log('b: ', b); // undefined, because forEach method does not return anything.
/**
 *
 *    Map Method:- (take function as an arguments)
 *            this method is used to iterate over the array & return a new array.
 * 
 *            it does not modify the original array, instead it returns a new array that contains the modified elements.
 * 
 *
 */

let c = a.map((elemets, index) => {
  return (elemets = elemets * 5);
});

console.log('c: ', c[0]);  // print the elements manually
console.log('c: ', c[1]); 
console.log('c: ', c[2]); 
//              .. so on

console.log('c: ', ...c); // by using spread operator we can print all the elements of the array.

/**
 * 
 *    Filter Method:- (take function as an arguments)
 *          this method is used to iterate over the array & return a new array.  
 *          it wiil filter out the elements based on the condition and return a new array
 */

let d = a.filter((elemets, index) => {
  // return false; // it will return empty array. means it's saying in the new array there will be no value b 
  return elemets > 2; // it will return the elements which are greater than 2
  // return true; // it will return all the elements means it's in the new array there will be all the elements of the original array.
} );

console.log('d: ', d); // [3, 4, 5]
console.log('d: ', ...d); // 3 4 5


/***
 *  
 *    find Method:- 
 *              this method is used to find the element in the array, it will return the first element which matches the condition.
 *                  so, instead of returning a new array it will return the particular element. 
 * 
 * 
 *               this is helpful to finding an individual element in the array/
 *                  
 */

let e = a.find((elemets, index) => {
  return elemets > 2; // it will return the first element which is greater than 2
});

console.log('e: ', e); // 3

/**
 * 
 *    Some Method:-
 *              this method is used to check if any of the elements in the array matches the condition then return true otherwise false.
 *              at least one element should be match the condition then it will return true, it can be more than one. otherwise it will return false.
 * 
 */

let f = a.some((elemets, index) => {
  return elemets > 2; 
});

console.log('f: ', f); // true because at least one of the elements is greater than 2 in the array.

let g = a.some((elemets, index) => {
  return elemets > 9; 
});

console.log('g: ', g); // false because there is no element which is greater than 9 in the array.


/**
 *     Every Method:-
 *                this method is used to check if all of the elements in the array matches the condition then return true otherwise false.
 *                
 */

let h = a.every((elemets, index) => {
  return elemets > 2; 
});

console.log('h: ', h); // false because not all of the elements are greater than 2 in the array.


/** 
 * 
 *    Reduce Method:-
 *                this method is used to reduce the array to a single value. means it takes the array & reduce it to a single value. (by looping through & do it's operation each time)
 *                 
*                  it takes atleast two arguments, first one is accumulator (means it will store the value of the previous iteration) & second one is current value.
 *                   & at the end we have to define the initial value of the accumulator. because it will store the value of the previous iteration.
 *    
 *                 it will return the final value of the accumulator.
 */

let i = a.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0); // This 0 is the default value of the accumulator at the beginning.

console.log('i: ', i); // 15
    /** 
     * Working:- 
     *      it will take accumulator is 0 at the beginning & currentValue is first element of the array.
     *       then it will add both of them & store it in the accumulator, for the next iteration.
    *        (accumulator will be the value of the previous iteration & currentValue will be the next element of the array.)
     *  
     *    1st iteration:-  
     *                accumulator = 0, currentValue = 1 ==>  0 + 1 = 1
     *    2nd iteration:-
     *                accumulator = 1, currentValue = 2 ==>  1 + 2 = 3
     *    3rd iteration:-
     *                accumulator = 3, currentValue = 3 ==>  3 + 3 = 6
     *    4th iteration:-
     *                  accumulator = 6, currentValue = 4 ==> 6 + 4 = 10
     *   5th iteration:-  
     *                accumulator = 10, currentValue = 5 ==>  10 + 5 = 15
     * 
     *        so, at the end it will return the final value of the accumulator which is 15.
     */

const items = [
  {price: 10},
  {price: 20},
  {price: 30},
  {price: 40},
  {price: 50}
]

let j = items.reduce((accumulator, currentValue) => {
  return accumulator + currentValue.price;
}, 0);

console.log('j: ', j); // 150
    

/**
 *     Includes Method:-
 *                  this method is used to check if the array includes the particular element or not.
 *                  means, it will return true if the array includes the particular element otherwise false.
 *              
 *                    check it the value exists in the array or not. 
 * 
 */

let k = a.includes(2);
console.log('k: ', k); // true
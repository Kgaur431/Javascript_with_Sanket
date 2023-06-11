/**
 * 
 *    Symbol:-  Symbol is a primitive data type in JavaScript. Symbols are immutable (cannot be changed) and are unique.
 *              For example, the following code will create two symbols with the same description but they are not equal.
 * 
 *             The Symbol("Param 1")  ==> Symbol fun takes single parameter (basically name of symbol)
 *                                          (name is just use for debugging purposes)
 */

const symbol1 = Symbol('Name');
const symbol = Symbol();

console.log(symbol1 === symbol); // Output: false    becoz Symbol is unique

// Usecase :- Symbol is used to create unique or private property on object. (not quite private)

const person3 = {
  age : 25,
  [symbol]: 'John Doe' 
}

console.log("person3", person3); // Output: {age: 25, Symbol(Name): "John Doe"}
    /**
     * 
     *    this symbol1 is not accessible anywhere else in the code. like we have access of symbol1. 
     */

// Iterate through the object

Object.entries(person3).forEach((key, val) => {
  console.log(key, val);
});


// we can access it with specific fun.
console.log(Object.getOwnPropertySymbols(person3))




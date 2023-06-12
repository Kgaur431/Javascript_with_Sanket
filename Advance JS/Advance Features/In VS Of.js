/**  
 * you can use the in keyword instead of of keyword to loop over an array or other iterable objects in JavaScript, 
 * but there is a difference between them.

With for...in loop, it loops over all enumerable properties of an object, including string keys and inherited prototype properties. 
It's typically used for iterating over the properties of an object.

For example,

javascript
const obj = { a: 1, b: 2, c: 3 };
for (const prop in obj) {
  console.log(`${prop}: ${obj[prop]}`);
}
Output:

a: 1
b: 2
c: 3
 for...of loop is designed specifically for iterating over values of an iterable object like arrays, strings, maps, sets, etc. 
 It's commonly used for looping through arrays.

For example,

javascript
const arr = [1, 2, 3];
for (const value of arr) {
  console.log(value);
}
Output:

2
3
So while both loops are useful, they serve different purposes depending on what you want to iterate over
, and in this specific code, the for...of loop is the appropriate choice since it is iterating over an array of elements.

*/
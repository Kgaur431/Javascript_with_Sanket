

/**
 * 
 *    Set is a new data structure introduced in ES6.
 *      sets give a gurantee that always have all the items in it be unique.     
 */



const uniqueList = [1, 2, 3, 4, 5];
const newNumber = 4

if(!uniqueList.includes(newNumber))
{
  uniqueList.add(newNumber);
}

console.log(uniqueList);   

const set = new Set();
console.log(set);   // Set(0) {}

/**
 * 
 * if we want to add items in set then, 
 *    create an array inside the set.
 */

const set0 = new Set([1, 2, 3, 4, 5,5,5,5,4,4,4,4,4]);
const set1 = new Set([1, 2, 3, 4, 5]);
console.log(set1);   // Set(0) {}
console.log(set0);   // Set(5) { 1, 2, 3, 4, 5 }  No duplicates

set1.add(6);
console.log("after adding ", set1); // Set(6) { 1, 2, 3, 4, 5, 6 }


/**
 * 
 *    How Set & Array are similar
 *
 * 
 *    The diff between Set and Array 
 *      is that "How we access the items in the Set "
 * 
 *     in Set, we don't have the term called index, we have the term called value. 
 *                                                              like does set have the value or not ?
 *                                                                           that we can check that by using has method.
 */

console.log(set1[0]);   // undefined    not working
//console.log(set1.get(0)); // not working 

console.log(set1.has(/** value */1)); // true because set1 has value 1.

set1.forEach((value) => {
  console.log(value);
}
);



// Usecase 
function removeDuplicates(array) {
  return [...new Set(array)];   // spread operator will work on anything which is like an array. 
}

console.log(removeDuplicates(set0))
console.log(typeof(set0))   // object
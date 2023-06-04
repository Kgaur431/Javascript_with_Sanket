/**
 *      Array Destructuring
 * 
 *  1. What is Destructuring ?
 *      - it is another way os you to take Objects & Arrays, access these different properties & elements inside them in easy & more efficient way.
 * 
 *      - arrau destructuring is useful when we know the size of array. 
 * 
 * 2. Syntax:-
 *    const [ ] = array ==> array that we want to destructure. 
 */

const array = ["A", "B", "C", "D"]  


//    basic way of  accessing elements in array
const first_element = array[0]
const second_element = array[1]
console.log(first_element, second_element)

//   both are giving the same result. 

const [first, second] = array     // accessing elements in array using destructuring
console.log(first, second)

/**
 *  Explaination:
 *               - const [first, second] = array
 *                  this line means we want to tell JS that we want to destructuring an array
 *                  like by putting brackets arround, that means we are taking the elements into individual pieces of an array. 
 *                    first is the first element of the array. 
 *                    second is the second element of the array
 * 
 *              - const [first, second] = array
 *                        ^        ^     ==> these are the order of the elements
 *                                       ==> the name is just going to assigned towards the first element in an array esixtst the first element in the array
 * 
 */


const arrayNum = [1, 2, 3, 4]

const [firstNum, secondNum, , fourthNum, fifth] = arrayNum

console.log(firstNum, secondNum, fourthNum, fifth)  // 1 2 4 undefined
    // 3rd element is not assigned so make sure we have to put the comma to skip the element while destructuring. 


// Functions :- when know we know that the result of this fun will be array.

  function addANDmultiply(a, b) {
    return [a + b, a * b]
  }

  const result = addANDmultiply(2,3)
  console.log(result)     // [5, 6]           not destructured
  const sums = result[0]
  const products = result[1]
                                                                     // like Sum & Product. so we will do destructuring here.
  const [sum, product] = addANDmultiply(2,3)  
  console.log(sum, product)   // 5 6          destructured


// setting default value with destructuring an array

const [f, s, , , fi = 5] = arrayNum
console.log ( fi)

// destructuring the array inside the array
  const nestArr = [1, 2, [7, 8, 9]]
  console.log(nestArr)

  const [f1, f2 ,[, , f5]] = nestArr
  console.log(f1, f2,f5)   // 


  //conclusion:- now we can return multiple from UI & in backend we can destructure it and use it. like in ReactJs, we can use State & setState. where we can destructure it. 

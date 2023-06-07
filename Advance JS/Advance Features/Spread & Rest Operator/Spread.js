

const array = [10,2,3];  
const person  = {
  name: "John Doe",
  age: 30,
  address: {
    city: "New York",
    state: "NY",
    zipcode :{
      pincode: "123456",
    }
    }
  }

  /**
   *        SPREAD OPERATOR:-
                     it will take all the elements inside the array that we have & convert into individual elements/values that passes to the function.
          
            USECASE:-
                1. whiel copyright an array. it will not modify the array, it will 
                       spread operator allows us to create brand new array. because it takes the element one by one (if it have , seprated)

                      Example:- 
                             const numberArray = [...array]
                                console.log("numberArray: ", numberArray);   // [10,2,3]
                  

   */


    function sum(var1,...arr) {
      console.log("var1: ", var1);
      console.log("arr: ", arr);
      
          return var1 * arr.reduce((sum, array) => {
            return sum + array;
          })
        }

          console.log("approach 1 --> ",sum(...array));   // 50                   // not doing manually.
    //            ||
          console.log("approach 2 --> ",sum(array[0],array[1],array[2]))          // doing manually. 
    


 const numberArray = [...array]               // it will create a new array.
 console.log("numberArray: ", numberArray);   // [10,2,3]
 console.log("...array", ...array);           // 10 2 3

 /**
       Now, if we push any new value to numberArray, it will not modify the original array.
              because, both arrays are refering to different memory location.

          if we do like this
              const numberArray = [...array]  
                that means by using spread operator we are taking the value from the array & with the help of [] we are creating a new array
              
                  const numberArray1 = array; 
                    that means we are not creating a new array, we are just copying the reference of the array.
  */
  
       numberArray.push(4);
       console.log("numberArray: ", numberArray);   // [10,2,3,4]
       console.log("...array", ...array);          // 10 2 3
        

 /**
          but if we do like this
            then both arrays will get modified because they are refering to same memory location. 
              why ? because we are not creating a new array, we are just copying the reference of the array.
  */

    const numberArray1 = array;                     // it will not create a new array. it will copy the reference of the array.
    numberArray1.push(5);
    console.log("numberArray1: ", numberArray1);   // [10,2,3,5]
    console.log("...array",...array);          // 10 2 3 5



    /**
                      Difference between Spread & Rest Operator with Example:-

                  The spread operator is represented by three dots (...). It allows an iterable (like an array) to be expanded into individual elements. For example:

                      const arr1 = [1, 2, 3];
                      const arr2 = [...arr1, 4, 5, 6];
                      console.log(arr2); // Output: [1, 2, 3, 4, 5, 6]

                      function multiply(x, y, z) {
                        return x * y * z;
                      }

                       Passing arguments using spread operator
                      const nums = [1, 2, 3];
                      const result = multiply(...nums); // 6

                      In this example, the spread operator is used to expand the arr1 array into individual elements, ********
                      which are then combined with the additional values to create a new array arr2. 
                      The spread operator can also be used to copy an array or combine multiple arrays.

                      the rest operator is also represented by three dots (...), but it is used in function arguments to capture all remaining arguments. *****
                      
                      For example:

                      function sum(...nums) {
                        return nums.reduce((total, num) => total + num);
                      }

                      console.log(sum(1, 2, 3, 4)); // Output: 10
                      In this example, the rest operator is used to capture all arguments passed into the sum function,
                      even if there are more arguments than declared parameters. The captured arguments are stored in an array called nums.

                      So, the main difference between the two operators is that the 
                      spread operator is used to expand an iterable into individual elements,
                       while the rest operator is used to capture multiple function arguments into an array.


     */

                      // console.log("person:- ", ...person);   // it will give error because person is not iterable.
                       // when we can do like this ...person, it means we are trying to spread the person object into individual elements
                       /**
                        *   how can we spread the person
                        *     1. we can spread the person object into individual elements 
                        *       by using Object.keys(person) or Object.values(person) or Object.entries(person)
                        *        but it will not spread the nested object.
                        *           Example:-
                        *             console.log("Object.keys(person): ", Object.keys(person));   // ["name", "age", "address"]
                        *             console.log("Object.values(person): ", Object.values(person)); // ["John Doe", 30, {…}]
                        *             console.log("Object.entries(person): ", Object.entries(person)); // [["name", "John Doe"], ["age", 30], ["address", {…}]]
                        *       
                        *     2. we can spread the nested object by using spread operator.
                        *          Example:-
                        *      console.log("...person.address: ", ...person.address); it will give error because person.address is not iterable.
                        */ 


      console.log("Object.keys(person): ", Object.keys(person));   // ["name", "age", "address"]
      console.log("Object.values(person): ", Object.values(person)); // ["John Doe", 30, {…}]
     console.log("Object.entries(person): ", Object.entries(person)); // [["name", "John Doe"], ["age", 30], ["address", {…}]]

     const person2 = {...person};   // it will create a new object.
     console.log("person2: ", person2);   // {name: "John Doe", age: 30, address: {…}}


     /**
      *     const person2 = {person};
      *       person2:  {
                  person: {
                    name: 'John Doe',
                    age: 30,
                    address: { city: 'New York', state: 'NY', zipcode: [Object] }
                  }
                }

                const person2 = {...person};
                person2:  {
                      name: 'John Doe',
                      age: 30,
                      address: { city: 'New York', state: 'NY', zipcode: { pincode: '123456' } }
                    }

      */
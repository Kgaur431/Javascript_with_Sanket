/**
 *    Object Destructuring
 * 
 *  Syntax:-
 *      const { } = object ==> object that we want to destructure. 
 * 
 */


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
  // Simple way of accessing the properties of an object

      const firstName = person.name
      const ages = person.age
      console.log(firstName, ages)   // John Doe 30
  
 */


/**
   // Destructuring the object
          
          const {personnames, personages} = person
          console.log(personnames, personages)   // undefined undefined     ==> this will give undefined undefined because In Person, there is no key which is personname & personage.
  
 */


/**
   //signle object destructuring
        const { name } = person
        console.log(name)   // John Doe
 */


/**
          const {name, age} = person                          // this is the way to access the properties of an object using destructuring.         
          console.log(name, age)   // John Doe 30
//               ||
          const {name : personname, age : personage} = person
          console.log(personname, personage)   // John Doe 30   ==> this is the way to rename the properties of an object while destructuring.

          // Explanation:-
          // The following code is doing, creating personname var & assiging it name property. create a personage var and assign it to age property.   
  */


/**
  // destructuring nested object
        const { address } = person
        console.log(address)   // { city: 'New York', state: 'NY' }
  
  */


/**
  // if we want to access the city & state of an address object
  // first descrtucture the address object 
                                                                       const { address } = person
  // then descrtucture the city & state of an address object
                                                                      const { city, state } = address
                                                                      console.log(city, state)   // New York  NY
  */
 
//        ||

/**
 *          Two Layer of Destructuring 
              1. to get the address object
              2. to get the city & state of the address object
                           it will keep going on & on
                           2.1. to get the zipcode object
                           

 // destructure the address object inside the destructure
                                                                  const { address : { city, state } } = person    
                                                                  console.log(city, state)   // New York  NY      
 */
   
                                                                  

  /**
     const { address : { zipcode :{ pincode } } } = person
       console.log(pincode)   // 123456

   */

/**
   sector is not available in the zipcode object but while destructuring we add a new field sector with the default value. 
             const { address : { zipcode :{ pincode, sector = "5" } } } = person
              console.log(sector)   // 123456
 */
     
/** *********************************USECASE 1******************************************
   USECASE of Object Descrtucturing
      when we have object with tons of different properties & instead of taking them into one variable & then accessing them, 
      we can just destructure them & access them directly.


const {
  name: fname,
  age,
  address: {
    city,
    state,
  }
} = person
console.log(fname, age, city, state)   // John Doe 30  New York  NY
*/

/** *********************************USECASE 2******************************************

function addANDmultiply(a,b){
  return {sum : a+b, product : a*b}
}

const result = addANDmultiply(3,4)                      // not des
console.log(result)   // {sum : 7, product : 12}

//        ||

const { sum, product } = addANDmultiply(3,4)
console.log(sum, product)   // 7 12

*/

/**
      EXERCISES:- 
                  STRING TO ARRAY 

          function nameTOFirstANDLast(fullname){
              const [fristName, lastName] = fullname.split(" ");
    
              return [fristName, lastName];
          }

            const [fristName, lastName] = nameTOFirstANDLast("kartik gour")
                console.log(fristName, lastName)   // kartik gour


                    STRING TO OBJECT   

          function nameTOFirstANDLast(fullname){
                const [fname, lname] = fullname.split("_");
                return {
                  fn : fname,
                  ln : lname
                }
              }

              const {fn, ln} = nameTOFirstANDLast("k_gour")
                    console.log(fn, ln)   // k gour

      // for converting I have to make an key for the value. 
 */

/** *********************************FINAL USECASE******************************************
EXERCISES:-
            passing an Obj to the FUNCTION 

                          Obj not destructured.

            function addANDmultiply(obj) {
                const a = obj.a;
                const b = obj.b;
                return [a+b, a*b]
            }
            const [sum, product] = addANDmultiply({ a: 3, b: 4 })
            console.log(sum, product)   // 7 12

            //        ||

                          Obj destructured. 
            function addANDmultiply(obj) {
                const { a, b } = obj
                return [a+b, a*b]
            }
            const [sum, product] = addANDmultiply({ a: 3, b: 4 })
            console.log(sum, product)   // 7 12

*/

/** *********************************FAST WAY OF DESTRUCTURING******************************************
            
            function addANDmultiply({ a, b }) {
                  return [a+b, a*b]
                }
                
                   const [sum, product] = addANDmultiply({ a: 3, b: 4 })
                      onsole.log(sum, product)   // 7 12

      EXAMPLE WITH OBJECT:-
      
                      function addANDmultiply({ a, b }) {
                        return {
                          sum : a+b,
                          product : a*b
                        }
                        
                      }
                      
                         const {sum, product} = addANDmultiply({ a: 7, b: 12 })
                            console.log(sum, product)   // 7 12

 */



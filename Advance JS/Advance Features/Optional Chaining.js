   

   /**
      Optional Chaining
           - Optional chaining is a newer syntax that can help with this problem in general (not necessarily intended to be used only for null coalescing), 
              by allowing us to safely access nested properties.
           - it will check only null or undefined properties. 
           - The ?. operator is used to read the value of a property 
              located deep within a chain of connected objects without having to check that each reference in the chain is valid.
               means, if the left operand is null or undefined, the expression stops evaluation and returns undefined.

               Example :- 
                 person?.address?.zipcode?.pincode
                    what is left operand in the aboe ?
                      - if person is null or undefined then the expression stops evaluation and returns undefined.
                      - if person.address is null or undefined then the expression stops evaluation and returns undefined.
                      - if person.address.zipcode is null or undefined then the expression stops evaluation and returns undefined.
                      - if person.address.zipcode.pincode is null or undefined then the expression stops evaluation and returns undefined.
    */


      const John  = {
        name: "John Doe",
        age: 30,
        address: {
          city: "New York",
          state: "NY",
          zipcode :{
            pincode:"123",
          }
          }
        }

        function print(person) {
          console.log(person.address.zipcode.pincode);
        }

      // print(John); // 123456
        // if suppose the value of pincode is undefined then we will get error message like undefined. 

        const Johnn  = {
          name: "John Doe",
          age: 30,
          address: {
            city: "New York",
            state: "NY",
            zipcode :{
              pincode:undefined,
            }
            },
           // sayHii: true,
            sayHii(){
              console.log("hi");
            },
            hobby: ["music", "dance"],
          }
      function print1(person) {
        console.log(person.address.zipcode.pincode);
      }

    // print1(Johnn); // 123456

    // for preventing this from happening 

    function print2(person) {
      if ( person && person.address.zipcode.pincode) {
      console.log(person.address.zipcode.pincode);
      }
      console.log("pincode not available");
    }

  print2(Johnn); // 123456

  // ***********************************

  // Optional Chaining

      function print2(person) {
        console.log(person?.address?.zipcode?.pincode);
      }

     // print2(John); // 123
    //  print2(Johnn); // undefined

      // if person is null or undefined then it will be returned as undefined, if not then it will continue & check next address property. so on...

      function callHii(person) {
        console.log(person?.sayHii());  // this will check whether the object has not defined or not.      
       console.log(person?.sayHii?.()); // this will check whether the object has not defined or not. if it has then it will check whether the sayHii is an function or not. 
        // it means if person object then its check "do we have a sayHii on the object ?" if yes then it will check "is it a function ?"
        }

       // callHii(Johnn); // hi

       function checkHobby(person) {
         console.log(person?.hobby[0]); // music
        console.log(person?.hobby?.[0]); // music
       }

       checkHobby(undefined)
        // we pass undefine so it will check whether the object has not defined or not. if undefined then it will return undefined.
        // if we comment the hobby property & call below fun. 
       checkHobby(Johnn);
       // if the object defined then it will check whether the hobby property is defined or not on this object
          // if hobby property is defined then it will check whether it will check the first index of the array.


  
  // Conclusion :- first check if the object has defined or not, then check if it has the property or not and then execute the property. 
                  // if we have access anything which might get null or undefined then use ?. operator before accessing it. 
      

/**
       courseDto.domain?.entitytype:- 

          the code you shared is checking whether the domain section exists within the courseDto object. 
          If it does, then the code will try to access the entitytype information inside that section.

          However, suppose for some reason the domain section doesn't exist (maybe it wasn't included in the data passed to the courseDto object).
          In that case, rather than throwing an error, the code will simply return null.

          So basically, this code is just checking if a particular piece of information exists within an object, and if it does, it tries to retrieve it.
          But if it doesn't exist, it doesn't cause any errors and just returns null.
 
*/
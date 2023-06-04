
/**
 *    What is object Literals
 *      - it is a way to create an object.
 *      - we can write properties & behaviors to the object 
 *          like:- 
 *            const firstName = "John";
                  const age = 30; 
                  const sayHi = function(a) {
                      return a;
                    };

                    const persons = {
                      firstName: firstName,
                      age: age,
                      sayHi: sayHi,
                    }

                    console.log("person: " +  persons.sayHi(3));
 *       
 */
                      // both are same. 


    /**
     * 
          ShortHand 
              - it does take the above variable name like firstname, age..., if the variable name is exactly same as the property name // key name
                      then we can just use the property name in the person object 
      */
const firstName = "John";
const age = 30; 
const sayHi = function(a) {
    return a;
  };

  const persons = {                             // Enhanced  version of writing object.
    firstName,
    age,
    sayHi,
  }

  // console.log("person: " +  persons.sayHi(3));

  // we can define a function in the object.
    const person1 = {
      firstName,
      age,
      sayHello : function () {
        console.log("Hello " + "Kartik!");
      }
    }

   // console.log("person: " + person1.sayHello());

    //           ||      

    const person2 = {
      firstName,
      age,
      sayHello() {                           // enchnced version of writing function in object.
        console.log("Hello " + "Gour!");
      }
    }
    
   // console.log("person: " + person2.sayHello());


    // writing custom Js code & Dynamic Property Name for the person object. 
    const index = 1;
    const age1 = 41
    const personName = "name"
    
    const person3 = {
      sayHi() {
        console.log("Hi " + "Kartik!");
    },
    [personName] : firstName,   // here, string value will be used as actual property name. 
    [`age ${index}`] : age1,     
  }

  console.log("person3: ", person3);

 



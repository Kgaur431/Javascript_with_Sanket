


const array = ["A", "B", "C", "D"]  
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
    Case Study:- what happen if we want to pass n number of elements as a parameter in below function ?

          function sum(a,b) {
                return a + b;
                    }
          console.log(sum(1,2));

          Sol:- 1, one way is to pass an array of elements & do some map/reduce on the array. 
                    function sum(arr) {
                        return arr.reduce((sum, array) => {
                          return sum + array;
                        })
                            }

                    console.log(sum([3,2,3,4]));


          Sol:- 2 Rest Operator
                        function sum(...arr) {
                              return arr.reduce((sum, array) => {
                                return sum + array;
                              })
                                  }

                          console.log(sum(3,2,3,4,5,6,7,8,9,10));
                  
                        Explanation:-
                                    1. ...numbers is a rest operator which will take all the arguments & convert it into an array.  **************
                                    2. all the parameters are come in the end of the function. 
          
                        Ques:-      if  what if some var in the beginning of the function ?
                                            function sum(var1, ...arr) 
                                                  &
                                            console.log(sum(10,2,3));
                                        then
                                            first number that we are passing is going to be a var1. & everything else is going into ...arr array. 
                                        so,
                                            var1 = 10 & arr = 2,3
                                             means all of the things are passed in the ...arr array & predefined variable is var1. 

                        Example:-      function sum(var1,...arr) {
                                            return var1 * arr.reduce((sum, array) => {
                                              return sum + array;
                                            })
                                                }

                                          console.log(sum(10,2,3));
                        Explanation:-
                                        If we have multiple parameters like var1, var2 ... many paramters, it does not matters. we can put many params 
                                          as we want. but at the end we need to put ...arr parameter. 
                                        Like:- 
                                                function sum(var1, var2,...arr) 
                                               
 */

    function sum(var1,...arr) {
       console.log("var1: ", var1);
       console.log("arr: ", arr);

      return var1 * arr.reduce((sum, array) => {
        return sum + array;
      })
          }

    console.log(sum(10,2,3));   // 50



/**
          Usecase:-
            while destructuring the person object we can use rest operator to get the rest of the properties. 
 */

  const {name, age, ...rest} = person;
  console.log(name, age, rest);

/**
 
          Usecase:- 
              copying the object to the another object, it is distinct from the original object. 
                so it will not modify the original object if we change the value of original object.

              which operator we are using here is
              spread operator.

              why not rest 
                because, rest operator is used to get the rest of the properties.
              
              why spread
                because, spread operator is used to spread the properties of the object.
              
              what does spread means
                it means it will take all the properties of the object & spread it into the new object.

              
              
 */

  const personCopy = {...person};
  person.name = "Michael"
  console.log("personCopy", personCopy);
  console.log("person", person);

  // we can add new properties to the personCopy object.
  const personCopy2 = {...person, email: "john.doe@gmail.com"};
  console.log("personCopy2", personCopy2);


  // combining two objects into one object.
  const personCopy3 = {...person, ...personCopy2};
  console.log("personCopy3", personCopy3);

     // here name property is overriden by the personCopy2 object. because it is the last object in the spread operator. 
     // so it will override the previous object.

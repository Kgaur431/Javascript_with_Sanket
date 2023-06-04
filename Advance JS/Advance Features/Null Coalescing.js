
/**
 * 
 *        Null Coalescing
 *              -- Null Coalescing is a new operator in JS which is used to check if the value is null or undefined. 
 *              -- It is represented by ??
 *              -- it will comapare only for null or undefined. 
 *               
 */

function greet1(greets = "Good Morning", firstname, lastname){
  lastname = lastname || "Gour"; // if lastname is undefined then it will take the value of "Gour"
  console.log(`${greets} ${firstname} ${lastname}`);
}

greet1(undefined ,"Kartik");  // 1. if i am not passing any value for lastname then it will take the default value of lastname

greet1("Good Evening", "Kartik", undefined); // 2. if i am passing undefined for lastname then it will take the default value of lastname

greet1(undefined , "Kartik", null); // 3. if i am passing null for lastname then it will take the value of null

// If we pass undefined or null for lastname then it will take the default value of lastname 

greet1("Good Evening", "Kartik", ""); // 4. if i am passing any false value. it should print "" instead of "Gour" but it is printing "Gour" because of || operator

greet1("Good Evening", "Kartik", 0); // 5. if i am passing any false value. it should print 0 instead of "Gour" but it is printing "Gour" because of || operator


/**   
    Problem :- when we are passing any false value for lastname then it is taking the default value of lastname 
      This is not we want  so we can use Null Coalescing operator to solve this problem
        so we can use ?? operator instead of || operator 
           now if we pass undefined or null then only the default value will be taken otherwise the value which we are passing will be taken  ********** 
 */


function greet2(greets = "Good Morning", firstname, lastname){
  lastname = lastname ?? "Gour"; // if lastname is undefined then it will take the value of "Gour"
  console.log(`${greets} ${firstname} ${lastname}`);
}

greet2(undefined ,"Karishna", undefined);  // if lastname is undefined then it will take the value of "Gour"

greet2(undefined, "Karishna", 1999) // 1999 it is not null or undefined so lastname will take the value of 1999

greet2(undefined, "Karishna", null)

greet2(undefined, "Karishna", "")   // "" it is not null or undefined so lastname will take the value of ""  

greet2(undefined, "Karishna") // if we not pass anything then it will pass undefined by default. 
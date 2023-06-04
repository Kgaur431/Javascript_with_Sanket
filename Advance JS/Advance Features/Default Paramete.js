function greet1(greets = "Good Morning", firstname, lastname){
  console.log(`${greets} ${firstname} ${lastname}`);
}

greet1(undefined ,"Kartik", "Gour"); // Good Morning Kartik Gour

//          ||

function greet2(firstname, lastname,greets = "Good Morning"){
  console.log(`${greets} ${firstname} ${lastname}`);
}

greet2("Kartik", "Gour"); // Good Morning Kartik Gour

// object **********************************************

function greet3(firstname, lastname,{ greets = "Good Morning", age }){   // descructuring the object in the function arguments. 
  console.log(`${greets} ${firstname} ${lastname} ${age}`);
}

greet3("Kartik", "Gour", { age : 26}); // Good Morning Kartik Gour, if we will not pass the {} then in the function arguments what it will be destructured 
//                              it will be undefined & how can we destructure undefined. 

//        ||                
function greet4(firstname, lastname,{ greets = "Good Morning" } = {}){   // descructuring the object in the function arguments. 
  console.log(`${greets} ${firstname} ${lastname}`);
}

greet4("Kartik", "Gour");// Good Morning Kartik Gour. 
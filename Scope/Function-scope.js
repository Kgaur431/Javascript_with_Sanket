var name = 'Kartik'; // this variable is not defined in the function scope or block scope, so it is a global variable
function greet() {

    var x = 10; // everywhere inside the greet function, x is available
  console.log('Hello', name);

  function fun1 (){
    console.log('fun1', x);
  }
  fun1();
}

function fun() {
  console.log('fun', name);
}

greet();
fun();

// console.log(x); // x is not defined outside the greet function

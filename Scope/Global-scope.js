var name = 'Kartik'; // this variable is not defined in the function scope or block scope, so it is a global variable
function greet() {
  console.log('Hello', name);
}

function fun() {
  console.log('fun', name);
}

greet();
fun();

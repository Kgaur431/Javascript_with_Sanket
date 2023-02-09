function fun(x, y){ // here args will be given function scope of fun in the phase of parsing
    //implement this function
}

/************************************************************************************ */

console.log(a); // undefined
var a = 10;

/************************************************************************************ */
console.log(b); // we will get the error, because b is not defined
let b = 10;

 /*
    Notes
    1. whenever we have a variable declared/initialised using var, it is available anywhere inside the function scope.
    2. whenever we have a variable declared/initialised using let, it is available below the line where it is declared. || Below the block scope.
      --> blocked scoping.
*/ 
{ // block scope weather if or for or while  ... etc 
    var a = 10; // Formal declaration of a variable using var, let & const // becomes global due to var. 
    console.log(a);
}

console.log(a); // a is available outside the block scope, because var does not care about the blocks. if var not inside in function. then var get global scope.



/********************************************************************************************** */

function fun() {
    var a = 10;
    console.log(a);
}

fun();
// now a is not accessible outside the function scope, because var is inside the function scope.
console.log(a); // we will get the error.

/********************************************************************************************** */

function fun() {
    console.log(a); // a is not defined, but it is not throwing an error, because of lexical scoping.
    var a = 10; 
    console.log(a);
}

fun();






/* Notes
    1. whenever we have a variable declared/initialised using var, it is available anywhere inside the function scope.

    */

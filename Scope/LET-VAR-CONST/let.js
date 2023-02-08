// wherever we have {} curly braces, it will be a block. 

{
    let a = 1;
    console.log(a); //accessible
}

console.log(a); // not accessible



/**************************************************************************************************** */

// Re-declaration of variables using var, let. 

var a = 10;
var a = 19; // we will not get the error, because var allows re-declaration of variables.

let b = 10;
let b = 19; // we will get the error, because let does not allow re-declaration of variables.


/**************************************************************************************************** */

console.log(d); // we will not get the error, because var have global scope & it accessible anywhere in the file. 

function fun() {
    let c = 10;
    console.log(c);
}

var d = 10;
fun();
console.log(a); // we will get the error, because x is only accessible inside the function scope


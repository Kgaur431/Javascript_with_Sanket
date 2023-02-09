function fun() {
    console.log("I am fun");
}
/*
    * the fun variable get the scope of global scope.
*/

var x =  function gun() {
    console.log("I am gun");
}

x(); 
gun(); // it will throw an error because the gun variable is not in the global scope. it is in the local scope of the x variable.

/*
    * the gun variable get the scope of the variable x. not the global scope. so we can't access the gun variable in the global scope.
    * In parsing phase
    *   we ask to scope manager that do you know about the variable x ?
    *       it will say no, then we will create a new variable x in the global scope.
    *    the next formal decalaration is function gun() { ... } so before doing this we are inside scope of x variable.
    * 
    *  we ask to scope manager that do you know about the variable gun in the scope of x ?
    *   it will say no, then we will create a new variable gun in the scope of x.
    *       so we not call gun function directly. we have to call it through x variable.
    * 
*/

y(); // x is not an function, x is getting assigned a function. if x would be an function then hoisting will work. 
var y = function run() {
    console.log("I am run");
}
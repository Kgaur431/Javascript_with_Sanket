function fun() {
    console.log("I am fun");
}

function gun(fn) {
    console.log("function inside");
    fn();
    console.log("function outside");
}

gun(function () {
    console.trace(); // it will show the call stack, 
    console.log("I am new function");
}
);

gun(fun);

/*
    In JS we can pass function as an argument to another function
        at line no. 11 --> it is an function expression. because if we don't start the first piece of code with function keyword then it is function expression
    
*/



/**
 * 
 * IFFE - Immediately Invoked Function Expression
 *   inside IFFE the process function will  immediately got executed. 
 *  & exec function will create the counter & return the process function.
 *  so exec function got executed only once so counter varialbe was created only once.
 *   after that every time we executing process function. 
 *  when process function is executing then it is accessing same counter variable. 
 */


const add = (function exec() {
    let counter = 0;
    return function process() { counter += 1; 
        //console.log(counter); 
        return counter; }
}
)(); // this is IFFE. it will execute immediately. () is used to execute the process function immediately.

let x = add();
//console.log(add());
add();
add();
console.log("x",x);

/**
 * if we define counter variable using var 0r let then it does not matter because it is defined inside the exec function. 
 * & here there is not happening like for loop. so it will not create a new block every time.
 */
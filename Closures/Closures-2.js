
/**
 *  Closures are remember the variable not the value. means remember the lexical scope.  
 *
 */

function todos(task){
    console.log("start todo");
    setTimeout(function fun(){
        console.log(task,"done");
    }, 4000);
    task = "task2"; // we are not copy pasting the value of task in closure. so if task value is changed later then after sometime whatever the value of task is, it will print that value.
    console.log("end todo");
}

console.log("start");
todos("task1");
console.log("end");
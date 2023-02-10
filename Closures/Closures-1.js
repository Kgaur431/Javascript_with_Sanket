/**
 *  every function will remember his lexical scope.
 * 
 * Closure
 *      is when a function is remember its lexical scope even when the function is executed outside that lexical scope. (outside the lexical scope means todos fun end but fun is still running.)
 * 
 * Rmemeber its lexical scope, means
 *      so whatever things are accessible to a function in its lexical scope. like some variables, functions etc.
 *
 *  line no. 37
 *      because every variable that we passed in the function that will get the scope of that function. 
 * 
 *  Rules of closure
 *      every function untill or unless it is executed, function will remember from what scopes the variables are coming (variable that is getting used.)
 *          like:- function fun() will remember from what scope the task was accessed. --> task was accessed from todos function. fun will remember it. 
 */

function todos(task){
    console.log("start todo");
    setTimeout(function fun(){
        console.log(task,"done");
    }, 4000);
    console.log("end todo");
}

console.log("start");
todos("task1");
console.log("end");

/**
 * when compiler reach at line no. 8 then it start the timer and move to line no. 11 & end the function todos. 
 * after 4 sec it will print the task1 done. but if the function has completed then how its prints the task1 done. 
 *       means, at the time instance where function fun will be called. then todo function is already over. 
 * if fun is called after the completion of todos & todos has ended, how fun is able to access the task variable. 
 * 
 

 *  this happen due to closure.
        read line no. 3
    function fun() is having the scpoe of todos function.
    task variable is in the scope of todos function.
        & the scope resoulution is occur in the phase 1 called parsing. 
            in the lexical parsing, 
                we ask to scope manager that do you know about variable todos in the scope of global scope.
                    it will say no, then the todos function will be get the scope of global scope. becuase todos function is formally declared. 
                        now are inside todos fun.. then we will ask the scope manager that do you know about variable task in the scope of todos function. 
                            it will say no, then the task variable will be get the scope of todos function.
                            & also the fun function will get the scope of todos function.
                        so when we at line console.log(task,"done"); now we ask to scope manager that do you know about variable task. 
                                it will say no. then scope manager will find the task variable outside the scope of fun function. means in the scope of todos function.
                            
    so when fun will be executed, doesent matter it has been execute outside the corresponding scope of todos, it will remember the variable task 
    & this task variable remain in the memory, if it is getting used by any of the function due to which lexical scoping.  

    conslusion:
        that task argument  & function fun is having the scope of todos function.
            & every function remember its lexical scope due to closure,even when the function is executed outside that lexical scope.
                like function fun. 

 */
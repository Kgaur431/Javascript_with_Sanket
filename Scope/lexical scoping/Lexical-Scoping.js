/* Lexical Scoping
    in this mechanism the js first read the code & allocates scope to every thing (variable & function)
    then again execute the code.
    before the execution all the scoping || resolution has done it called lexical scoping. 
    

*/

var teacher = 'Kartik'; // formal declaration. 
function fun() {
    var teacher = "Gour";
    console.log(teacher);
}
fun();

/*
    when we try to execute the above code there will be a two phase of execution.
        1. parsing phase --> during this phase js looks for formal declaration of variables in particular scope. it starts from global scope.
            in this phase we will not execute the code, we will just read the code & allocate scope to every thing.
            in this phase JS looks for formal declaration of variables. 
            in this pharsing phase we only allocate scope, not values. 
                How it looks for formal declaration of variables?
                    line no. 8 parsing lets assume JS will ask to the scope manager  like hey scope manager do you know about teacher variable which formally declared here?
                        scope manager will say no, this is the first time that we are looking for teacher variable.
                            ohh! u are looking for teacher variable for the first time,
                                --> it is a formal declaration of variable. let see
                                --> teacher variable is declare with var.
                                --> it is not inside in any function || block.
                                --> it is present a global variable.
                            lets assign the teacher variable to the global scope. {we are just assigining the scope to the variable, not the value.}
                    line no. 9. parsing lets assume JS will ask to the scope manager  like hey scope manager do you know about variable fun?
                        scope manager will say no, this is the first time that we are looking for fun variable.
                            ohh! u are looking for fun variable for the first time, let see
                                --> is fun function inside in any function ?
                                    ==> no, it is not inside in any function.
                                --> is fun function inside in any block ?
                                    ==> no, it is not inside in any block.
                            lets assign the fun variable to the global scope. {we are just assigining the scope to the variable.}
                                {but the moment, it goes inside in the function scope, it starting maintaining the scope of the function also.}
                    line no. 10. parsing lets assume but before parsing line no. 10 now we are inside in the function scope. means now we are no more in global scope. 
                    line no. 10. parsing lets assume now again formal declaration of variable teacher.
                        scope manager will say no, this is the first time that we are looking for teacher variable in the function scope. 
                            ohh! u are looking for teacher variable for the first time in the function scope,
                                --> it is a formal declaration of variable. let see
                                --> teacher variable is declare with var.
                                --> var means whatever is the enclosing function allocate the scope to the variable.
                                --> it is inside in the function scope.
                                    ==> teacher will get the scope of the function scope fun.
                    line no. 11. parsing lets assume is it a formal declaration of variable?
                                    no, it is not a formal declaration of variable.
                                    console.log(teacher) --> teacher is an source here, it also an scope of function fun. 
                    line no. 13 now we are back to the global scope. & we are using the variable fun here, it is an source here. because we are using the variable fun here.
                        means we are not assign a variable like formal declaration.                            
                  
            The Pharsing phase is done. after pharsing phase every variable & function has the scope.
        2. execution phase
            in this phase we will execute the code.
                now, line no. 8. execution lets assume JS will ask to the scope manager  like hey scope manager do you know about teacher variable which formally declared here?
                    scope manager will say yes, this has the scope of the global scope.
                        now we will assign the value to the teacher variable called Kartik.
                line no. 9. execution lets assume JS will ask to the scope manager  like hey scope manager do you know about variable fun?
                    but we will not go through now untill & unless we call the function fun.
                line no. 13.  we can see a source value here. means we are using the variable fun here.
                    now we ask to scope manager like hey scope manager do you know about variable fun?
                        scope manager will say yes, this has the scope of the global scope.
                            now we are at line no. 10. we are inside fun function scope so we will take the scope of the function fun.
                                now we will ask to scope manager like hey scope manager do you know about teacher?
                                    scope manager will say yes, this has the scope of the function fun.
                                        now we will assign the value to the teacher variable called Gour.
                            now we are at line no. 11. the console.log(teacher) is an source here. means we are using the variable teacher here.
                                so we will print the value of the teacher variable is Gour.
            The execution phase is done. after execution phase every variable & function has the value. 
    the above process is called lexical scoping.
*/ 

var teacher = 'Kartik'; // formal declaration.
function fun() {
    var teacher = "Gour";
    sir = "Krishna"; // informal declaration. means we are not using var || let || const keyword.
    console.log(teacher);
    console.log(sir);
}
fun();
console.log(teacher);
console.log(sir);

/*
    when we try to execute the above code there will be a two phase of execution.
        1. parsing phase -- In Phase 1, we will discuss about the formal declaration of variables only. 
           line no. 75. parsing lets assume JS will ask to the scope manager  like hey scope manager do you know about teacher variable which formally declared here?
                scope manager will say no, this is the first time that we are looking for teacher variable.
                    ohh! u are looking for teacher variable for the first time,
                        --> it is a formal declaration of variable. let see
                        --> teacher variable is declare with var.
                        --> it is not inside in any function || block.
                        --> it is present a global variable.
                    lets assign the teacher variable to the global scope. {we are just assigining the scope to the variable, not the value.}
            line no. 76. parsing lets assume JS will ask to the scope manager  like hey scope manager do you know about variable fun?
                scope manager will say no, this is the first time that we are looking for fun variable.
                    ohh! u are looking for fun variable for the first time, let see
                        --> is fun function inside in any function ?
                            ==> no, it is not inside in any function.
                        --> is fun function inside in any block ?
                            ==> no, it is not inside in any block.
                    lets assign the fun variable to the global scope. {we are just assigining the scope to the variable.}
                        {but the moment, it goes inside in the function scope, it starting maintaining the scope of the function also.}
            line no. 77. parsing lets assume but before parsing line no. 77 now we are inside in the function scope. means now we are no more in global scope. 
            line no. 77. parsing lets assume now again formal declaration of variable teacher.
                scope manager will say no, this is the first time that we are looking for teacher variable in the function scope. 
                    ohh! u are looking for teacher variable for the first time in the function scope,
                        --> it is a formal declaration of variable. let see
                        --> teacher variable is declare with var.
                        --> var means whatever is the enclosing function allocate the scope to the variable.
                        --> it is inside in the function scope.
                            ==> teacher will get the scope of the function scope fun.
            line no. 78. parsing lets assume is it a formal declaration of variable?
                            no, it is not a formal declaration of variable.
                            sir = "Krishna"; --> sir is an source here. so we leave it.  
            line no. 79. parsing lets assume is it a formal declaration of variable?
                            no, it is not a formal declaration of variable.
                            console.log(teacher) --> teacher is an source here. so we leave it.
            line no. 80. parsing lets assume is it a formal declaration of variable?
                            no, it is not a formal declaration of variable.
                            console.log(sir) --> sir is an source here. so we leave it.
            line no. 81. parsing lets assume is it a formal declaration of variable?
                            no, it is not a formal declaration of variable.
                            console.log(teacher) --> teacher is an source here. so we leave it.
            line no. 82. parsing lets assume is it a formal declaration of variable?
                            no, it is not a formal declaration of variable.
                            console.log(sir) --> sir is an source here. so we leave it.
            line no. 83. parsing lets assume is it a formal declaration of variable?
                            no, it is not a formal declaration of variable.
                            console.log(teacher) --> teacher is an source here. so we leave it.
            line no. 84. parsing lets assume is it a formal declaration of variable?
                            no, it is not a formal declaration of variable.
                            console.log(sir) --> sir is an source here. so we leave it.
            Now parsing phase is done. after parsing phase every variable & function has the scope.
        2. execution phase -- in phase 2, we will discuss about the value of the variable & function.
            in this phase we will execute the code.
                now, line no. 75. execution lets assume JS will ask to the scope manager  like hey scope manager do you know about teacher variable which formally declared here?
                    scope manager will say yes, this has the scope of the global scope.
                        now we will assign the value to the teacher variable called Kartik.
                line no. 76. execution lets assume JS will ask to the scope manager  like hey scope manager do you know about variable fun?
                    scope manager will say yes, this has the scope of the global scope.
                        now we are at line no. 77. we are inside fun function scope so we will take the scope of the function fun.
                            now we will ask to scope manager like hey scope manager do you know about teacher?
                                scope manager will say yes, this has the scope of the function fun.
                                    now we will assign the value to the teacher variable called Gour.
                        now we are at line no. 78. the sir = "Krishna"; is an source here. means we are using the variable sir here. 
                            so we will assign the value to the sir variable called Krishna.
                                but we will ask to scope manager that do you know about sir variable inside in the function fun?
                                    scope manager will say no, this is the first time that we are looking for sir variable. because sir variable is not a formal declaration of variable.
                                    { so once inside a scope we don't know about any variable which is not a formal declaration then we can check the outer scopes also. 
                                        means we will check sir in the global scope. because we don't have it in the function scope. }
                                        so we will ask to scope manager like hey scope manager do you know about sir variable in the global scope?
                                            scope manager will say no, because it was never formally declared in the global scope.
                                                there will be two case happen 
                                                    1. sir variable was not declared in the global scope.
                                                        this sir variable not inside in function scope & it also keep on searching in the global scope.
                                                            so sir variable made a global variable. now sir variable will get the scope of the global scope.
                                                                now we will assign the value to the sir variable called Krishna.
                                                    2. sir variable was declared in the global scope. 
                        now we are at line no. 79. the console.log(teacher) is an source here. means we are using the variable teacher here. 
                            so we will ask to scope manager that do you know about teacher variable inside in the scope of  function fun?
                                scope manager will say yes, this has the scope of the function fun.
                                    now we will print the value of the teacher variable called Gour.
                        now we are at line no. 80. the console.log(sir) is an source here. means we are using the variable sir here.
                            so we will ask to scope manager that do you know about sir variable inside in the scope of  function fun?
                                scope manager will say no, because it was never formally declared in the function fun.
                                    so we will check sir in the global scope. because we don't have in the function scope. 
                                        so we will ask to scope manager like hey scope manager do you know about sir variable in the global scope?
                                            scope manager will say yes, this has the scope of the global scope.
                                                now we will print the value of the sir variable called Krishna.
                                    now function fun is done. so we will come back to the global scope.
                        now we are at line no. 83. the console.log(teacher) is an source here. means we are using the variable teacher here.
                            so we will ask to scope manager that do you know about teacher variable inside in the scope of  function fun?
                                scope manager will say yes, this has the scope of the global scope.
                                    now we will print the value of the teacher variable called Kartik.
                        now we are at line no. 84. the console.log(sir) is an source here. means we are using the variable sir here.
                            so we will ask to scope manager that do you know about sir variable inside in the scope of  function fun?
                               scope manager will say yes, this has the scope of the global scope.
                                    now we will print the value of the sir variable called Krishna.
            Now execution phase is done. after execution phase every variable & function has the value.
*/

var teacher = "Kartik"; // teacher is an formal declaration of variable.
function fun() {
    console.log(subject); // subject is as an source here. so we leave it in the parsing phase. but in the execution phase we will get undefined because still we don't have the value of the subject variable.
    var teacher = "Gour";
    var subject = "Javascript";
    sir = "Krishna";
    console.log(teacher);
    console.log(sir);
}
fun();
console.log(teacher);
console.log(sir);


var teacher = "Kartik"; // teacher is an formal declaration of variable.
function fun() {
    console.log(subject); // subject is as an source here. so we leave it in the parsing phase. but in the execution phase we will get undefined because still we don't have the value of the subject variable.
    var teacher = "Gour";
    var subject = "Javascript";
    console.log(sir); // it will give error because autoglobal only works with target reference not with source reference.
    sir = "Krishna";
    console.log(teacher);
}
fun();
console.log(teacher);
console.log(sir);

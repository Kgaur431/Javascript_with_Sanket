  //  "use strict";      // whatever socpe we want to inforce it on, we have to use strict mode in that scope only.

function fun() {
    teachingAssistant = "Gour"; // this is a global variable, because we have not declared it using var, let or const
    console.log('fun', teachingAssistant);
}

fun();

/*
    If we as a developer wants that there should not be automatic creation of autogloblas in our code, then we should use strict mode.
    & intead where any situation there we have not fomally declared a variable (doesn't matter if its an source & target), & we want an error to be thrown, then we should use strict mode.

    teachingAssistant = "Gour"; // this is a global variable, because we have not declared it using var, let or const
        it is an autogloblas. 
*/


function fun2() {
    //"use strict"
    subject = "Javascript";
    console.log('fun2', subject);
}

fun2();

/*
    If we as a developer wants that there should not be automatic creation of autogloblas in our code, then we should use strict mode.
    for the scope of fun autoglobals are fine but for the scope of fun2 we don't want any autoglobals.
*/

var teacher = "Kartik";
function fun3() {
    teacher = "Gour";
    console.log('fun', teacher);
}
 fun3();
    console.log(teacher);

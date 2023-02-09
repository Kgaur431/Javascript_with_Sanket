gun();
function gun() {
    console.log("Bang Bang");
}

/* 
    in the parsing phase
        line no. 1: this is an source here so it will be ignored
        line no. 2: function gun is fomally declared in the global scope.
            remaining lines are ignored. 
    in the execution phase
        line no. 1 is executed. because variable gun is already known by the scope manager. 
            so  it will get execute. 
*/



    
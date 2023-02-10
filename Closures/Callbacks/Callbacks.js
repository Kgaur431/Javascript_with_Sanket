function fun(x, fn){ // fn is an consuming the callback function
    /**
     * x --> number
     * fn --> callback function
     * 
     */

    for(let i = 0; i < x; i++){
       console.log(i);
    }

    fn(); // calling the callback function passed
    // some logic here if needed
}

fun(5, function log(){  // log() is an callback function.  passing a callback function
    console.log("Hello World");
});  


/**************************************************************************************************** */

// we can also do like this:-

function fuck(x, fn){ // fn is an consuming the callback function
console.log("shoot",x);
fn(); // calling the callback function passed
}


    function gun(){
        console.log("shoot end");
    }

    //        ||

    let g = function(){
        console.log("shoot will end");
      //  return (function(){console.log("shoot will end now")});
    }


    fuck(5, gun);  // passing a callback function
    fuck(5, g);  // passing a callback function

    // if we put the paranthesis after the function name that means we are immediately calling the function. 
  //  fuck(5, gun());  // immediately calling the function, means before going inside the function fuck, we are calling the function gun now. & whatever the return type of function g will set into the args like below
                    //      fuck(5, undefined);  --> this is the reason we are getting undefined in the output because we are not returning anything from the function gun. like other fun or any value. 
                     fuck(5, g);  // if we pass function as the name that means this is now pointing to the function (at line no. 27) & it is going to get called. 


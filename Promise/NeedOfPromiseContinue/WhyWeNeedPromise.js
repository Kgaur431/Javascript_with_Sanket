/***
 * How to create a promise
 * 
 * 
 * Three Task:-
 *  1. Write a function to download data from a url.
 *  2. Write a function to save that downloaded data in a file & retunr the fileName (dumy file)
 *  3. Write a function to upload the file written in previous step to newUrl 
 * 
 * 
 * fetchCustom function take args url
 *  it downlad the data from the url. once the data is downloaded it will return the data.
 *      this downloading of data can take some time like 3 second. 
 * 
 *      downloading the data is an async operation. we will not get immediately.
 *          so we have to pass an callback function to the fetchCustom function.
 */

function fetchCustom(url)
{


}


// writing fetchCustom function 

function fetchCustom1(url){

    console.log("downlading started");
    setTimeout(function exec() {
        console.log("downloading completed");
        let result = "some data"; 
       // return result                  // how to return the result to the user. 
     }, 3000);

}

// user is calling the function
let response = fetchCustom1("https://www.google.com");

/**
 *  JS is synchronous in nature.  
 * 
 * explaination of the above code
 *      calling the function fetchCustom1
 *      print "downloading started"
 *      setTimeout will wait for 3 second & then function end.
 *          now, in the response we are getting undefined.
 *              because we are not returning anything from the function fetchCustom1
 * 
 *  how can we do this?
 *      using callback function
*/



/**************************************____Task 1 finished___********************************************/


// writing fetchCustom2 function using callback function

function fetchCustom2(url, fn){                                    // formal declaration of fn

    console.log("downlading started");
  let res = setTimeout(function exec() {
        console.log("downloading completed");
        let result = "some data";
        fn(result);                                                     // fn function calling           
          console.log("downlading finished")              
     }, 3000);
}

// user is calling the function
 fetchCustom2("https://www.google.com", function downloadData( response) {      // fn function defination
        console.log(response);
});



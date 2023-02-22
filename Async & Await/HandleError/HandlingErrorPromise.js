/**
 *  .then() will take two arguments
 *      1. success callback
 *              in success callback we will get the value whatever we resolved in the promise
 *      2. failure callback
 *              in failure callback we will get the error whatever we rejected in the promise
 */



function fetchCustom2(url) {
    return new Promise(function (resolve,reject){
        console.log("downlading started",url);
        setTimeout(function exec() {
            console.log("downloading completed");
            let result = "some data";
            //resolve(result);   
            reject(result);                                                  // fn function calling
        }, 4000);
    });
}

// let x = fetchCustom2("https://www.google.com");
// x.then(function success(data) {
//     console.log("success",data);
// },function failure(err) {    //  here we are handling the error in the then() method itself (passing the error callback )
//     console.log("failure1",err);
// });
// .then(function success(data) {
//     console.log("success_2",data);
//     return 10;
// })

/**
 *      
 * 
 */

//                   OR

// let y = fetchCustom2("https://www.google.com");
// y.then(function success(data) {
//     console.log("success",data);
// })
// .then(function success(data) {
//     console.log("success_2",data);
//     return 10;
// })
// .catch(function failure(err) {
//     console.log("failure2",err);
// }); 

/**
 *  at any point of time in a promise chain if we get an error then the control will go to the catch block & the remaining promises will not be executed
 * 
 *      here, if we don't want that chain will execute eventually then we can use catch block 
 */


// let y = fetchCustom2("https://www.google.com");
// y.then(function success(data) {
//     console.log("success",data);
// },
// function failure(err) {    //  here we are handling particular promise error in the then() method itself, so .catch will not be executed & the remaining promises will be executed
//         console.log("failure1",err);
//      })
// .then(function success(data) {
//     console.log("success_2",data);
//     return 10;
// })
// .catch(function failure(err) {
//     console.log("failure2",err);
// }); 


/**                     Throw Error                 */


let z = fetchCustom2("https://www.google.com");
z.then(function success(data) {
    console.log("success",data);
})
.then(function success(data) {
    console.log("success_2",data);
    throw new Error("some error occured");  //  here we are throwing an error   
})
.catch(function failure(err) {
    console.log("failure2",err);
}); 





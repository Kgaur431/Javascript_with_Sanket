/**
 * 
 * PROMISE.ALL()
 *      it will take (iterable of promise means) an array of promises as input and return a single promise
 */

 function fetchCustom2(url) {
    return new Promise(function (resolve,reject){
        console.log("downlading started",url);
        setTimeout(function exec() {
            console.log("downloading completed");
            let result = "some data";
            resolve(result);                                                     // fn function calling
        }, 4000);
    });
}


function saveData(data){
return new Promise(function (resolve,reject){
    console.log("saving data in file");
    setTimeout(function exec() {
        console.log("data saved in file", data);
        let fileName = "file1.txt";
        resolve(fileName);
    }, 3000);
});
}

function uploadFile(fileName,newurl){
return new Promise(function (resolve,reject){
    console.log("uploading file started");
    setTimeout(function exec() {
        console.log("file uploaded",newurl);
        let uploadResponse = "file uploaded successfully",fileName;
        resolve(uploadResponse);
        console.log("uploading file finished");
    }, 2000);
});
}

let downloadData = fetchCustom2("https://www.google.com");
let saveDataInFile = saveData("some data");
let uploadFileInServer = uploadFile("file1.txt","https://www.google.com");
console.log("start");
Promise.all([downloadData,saveDataInFile,uploadFileInServer])

        /** 
         *         Promise.all([downloadData,saveDataInFile,uploadFileInServer])
         *          What Promise.all does?
         *              it wraps all the promises in a single promise (means it wraps their response in a another promise) 
         *              that we can catch using then() method
         *                  &  the value is an array of all the values of the promises
        *               
        *           each promise is executed parallely in the array.  but final response we will get when all the promises are resolved
        */

.then(function (values) {
    console.log(values);
}
);
console.log("all promises resolved");

        /**
         * 
         *     what is happeng in output?
         *         1. all three functions are started at the same time (parallelly)
         *            1.1  but some function called first & some takes time to execute
         *         2. when all the function are finished 
         *         3. then their response is wrapped in an array & return to us. 
         *         4. the responses are stored in the same order in which we have passed the promises in the array
         *         5. then we can use the values of the promises using then() method
         *         
         *          
         */

/**
 * 
 * Promise.all vs Promise.any
 *    Promise.all() will wait for all the promises to be resolved & return the response
 *   Promise.any() will wait for any one of the promises to be resolved & return the response
 */


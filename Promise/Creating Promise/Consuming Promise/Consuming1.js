/**
 * 
 *Three Task:-
 *  1. Write a function to download data from a url.
 *  2. Write a function to save that downloaded data in a file & retunr the fileName (dumy file)
 *  3. Write a function to upload the file written in previous step to newUrl 
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


let result = fetchCustom2("https://www.google.com");
let filename = saveData(result);
let uploadResponse = uploadFile(filename, "https://www.facebook.com");
console.log("uploadResponse",uploadResponse);

/***
 *  the code will not run like first it will wait for fetchCustom2() to complete & then saveData() & then uploadFile()
 * 
 * Here, the code will not wait because we don't have blocking piece of code. 
 *  so promise obj will create immediately & initally it will be pending. 
 * 
 * Now technically, when promise gets resolved we have to execute some funciton. 
 * 
 *  so whatever fun we have to execute after the promise is resolved we can write that function in .then function.
 *      read readme.md file for more info.
 */

   
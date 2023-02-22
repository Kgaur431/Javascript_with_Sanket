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



async function processing() {

   // try{
    let data = await fetchCustom2("https://www.google.com");
    console.log("downloaded data");
    let fileName = await saveData(data);
    console.log("saved data in file");
    let uploadResponse = await uploadFile(fileName,"https://www.google.com");
    console.log("uploadResponse",uploadResponse);

    return "kartik";
    // }
    // catch(err){
    //     console.log("error",err);
    // }

}

let x = processing();

console.log("x",x); // run this program in broser console then you will see the output of x that it is a promise object 
                    // async function always converts the return value into a promise object.

/**
 * 
 *      usecase of await is to consume promises
 *      await actually returns the resolved promise value.
 * 
 *  we mark processing function as async
 */


/**
 * 
 *  continue to consume1.js
 *    hide these lines. because the code is not working as required.
 *      let result = fetchCustom2("https://www.google.com");
l       et filename = saveData(result);
        let uploadResponse = uploadFile(filename, "https://www.facebook.com");
        console.log("uploadResponse",uploadResponse);

 */


        function fetchCustom2(url) {
            return new Promise(function (resolve,reject){
                console.log("downlading started",url);
                setTimeout(function exec() {
                    console.log("downloading completed");
                    let result = "some data";
                    resolve(result);    
                    resolve("result");                                                   // fn function calling
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


    /**
     * 
     * downloadData is a promise object. so we can call .then() on it. & .then() takes a function as an argument.
     *      & this function (process) takes (only single parameter called) value as an argument.
     */
    

    let downloadData = fetchCustom2("https://www.google.com");
    downloadData.then(function process(value) {
        console.log("downloadData",value);
        let fileName = saveData(value);
        fileName.then(function process(value) {
            console.log("fileName",value);
            let uploadResponse = uploadFile(value, "https://www.facebook.com");
            uploadResponse.then(function process(value) {
                console.log("uploadResponse",value);
            });
        }
        );
    });

    // this above code is called as promise hell. because we are nesting the .then() function.



    /**
     * difference between callback instead of promise.
     *  1. I am not passing the control of my function  to (fetchCustom2) someone else has written.
     *      1.1 In fetchCustom2() we are not giving the control of process() 
     *          How process() will be called?
     *              1.1.1. the logic of calling process() is written in calling side. it is not in fetchCustom2(). means not passing process() to fetchCustom2()
     *      1.2 where the callback process() is stored?
     *           this callback process() is stored in onFulfilled() function array of Promise object.
     *  2. if we try to resolve multiple times then it will only resolve once. means the first resolve will be executed.
     */

    let downloadData1 = fetchCustom2("https://www.google.com");
    let x = downloadData1.then(function process(value) {
        console.log("downloadData",value);
           // return ("kartik"); 

    
            // if we not return anything then it will return undefined. at line 106.
            // so if we return value then it will return the value.
            return value;
        
    });

    /**
     *  IMP
     *      the .then function itself returns a new promise object.
     *          like if we do console.log(downloadData1) then it will print the some data.
     *                  but if we do console.log(x) then it will print the kartik.
     *                     because the x is the new promise object. 
     *
     */
    
        x.then(function process(value) {
            console.log("x",value);
        });



        /*
         let downloadData = fetchCustom2("https://www.google.com");
    downloadData.then(function process(value) {
        console.log("downloadData",value);
        let fileName = saveData(value);
        fileName.then(function process(value) {
            console.log("fileName",value);
            let uploadResponse = uploadFile(value, "https://www.facebook.com");
            uploadResponse.then(function process(value) {
                console.log("uploadResponse",value);
            });
        }
        );
    });

                solve this promise hell using promise chaining.
    */

    let downloadData2 = fetchCustom2("https://www.google.com");
    downloadData2.then(function processD(value) {
        console.log("downloadData",value);
        return value;
    }) //.then() returns a new promise object. so we can call again .then() on it.
    .then(function processu(value) {
        let filename =  saveData(value);
        return filename;
    })
    .then(function process(value) {
        let uploadResponse = uploadFile(value, "https://www.facebook.com");
        return uploadResponse;
    })

    // this above flow of .then will be continue. 
    console.log("done");


    /**
     * 
     *  Working that above code
     *      fetchCustom2() will return a promise object. (once state is update from pending to resolved or rejected) 
     *      then we will call processD() function.
     */

    /**
     * 
     *  .then() is not giving async behaviour. 
     *      it will just register the callback function  (processD()) in onFulfilled() array. so registering the function is taking micro second & moven to next line. 
     *      when there is nothing in call stack. & nothing in global code. 
     *         then it will call processD() function. so we are just registering the function in onFulfilled() array. we are not 
     *          calling the function. it will call after setTimeout() function is executed. 
     */


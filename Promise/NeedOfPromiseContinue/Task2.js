/**************************************____Task 2 & 3 start___********************************************/


/**
 * 
 *   Write a function to save that downloaded data in a file & retunr the fileName (dumy file)
 */


function fetchCustom2(url, fn){                                    // formal declaration of fn

    console.log("downlading started",url);
        setTimeout(function exec() {
            console.log("downloading completed");
            let result = "some data";
            fn(result);                                                     // fn function calling           
           // console.log("downlading finished")              
     }, 3000);
}


function saveData(result, fn){
    console.log("saving data in file");
    setTimeout(function exec() {
        console.log("data saved in file", result);
        let fileName = "file1.txt";
    fn(fileName);
    //console.log("saving data in file finished");
    }, 3000);
}

function uploadFile(fileName,newurl, fn){
    console.log("uploading file started");
    setTimeout(function exec() {
        console.log("file uploaded",newurl);
        let uploadResponse = "file uploaded successfully",fileName;
        fn(uploadResponse);
        console.log("uploading file finished");
    }, 4000);
}


// user is calling the function
 fetchCustom2("https://www.google.com", function downloadData( response) {      // fn function defination
        console.log(response);

        saveData(response, function saveFile(fileName){
            console.log("file saved in ", fileName);

            uploadFile(fileName, "https://www.facebook.com", function uploadResponse(uploadResponse){
                console.log("file uploaded successfully", uploadResponse);
            }
            );

        });
       
});



   



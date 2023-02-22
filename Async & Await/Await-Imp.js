/**
 *          Notice:- 
                    the moment we have used await does not matter weather the promise object is yet to be resolve or already resolved.   await does not matter. 
                        await will always wait for at initially instance of time assume that its an unresolved promise. 
                        although we have resolved promise but still await will wait for the promise to be resolved. 
*/

   async function fun() {
   console.log("entered fun");
    let x = await 20;
    console.log("exited fun");
    return x;
    }

console.log("start");
let val = fun();
val.then(function exec(data) {
    console.log("data1",data);
})
console.log("end");
/** 
 *  here, the fun has resolved but still await will wait for the promise to be resolved. & throw the code pointer to outside of the function.
 */

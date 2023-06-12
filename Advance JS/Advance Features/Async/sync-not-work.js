
console.log('Starting app');
setTimeout(function exec(){
    console.log('Inside of callback');
}, 2000);
console.log('Finishing app');

/**
 * if it is following the synchronous way. 
 *  it execute the first line of code. 
 *  then it execute the second line of code. so it should be 2 seconds.
 *  then go to line no. 6. 
 * 
 * but it is not following the synchronous way.
 *  because setTimeout is not an part of ecma script so it no need to follow the synchronous way.
 */


/**
 * setInterval() & setTimeout() are not JS functions
 * task is done again & again
 */

let id = setInterval( function () {
    console.log( 'task done again & again' );
}, 1000 );

setTimeout( function () {
    clearInterval( id );
}, 5000 );

/**
 *  How it works?
 *  1. setInterval() will execute the task after every 1 second
 * 2. setTimeout() will stop the execution of setInterval() after 5 seconds
 */
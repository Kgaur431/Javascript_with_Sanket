
/**
 * 
 * let --> block scope, so every time for will create new block. 
 *  for i =0 for will create new block  so, when we print i it will print 0. 
 * for i =1 for will create new block so, when we print i it will print 1.
 * for i =2 for will create new block  so, when we print i it will print 2.
 * 
 *      & exec will remember the block scope of for loop. because i is in the block scope of for loop u
 */
function test()
{
    for (let i = 0; i < 3; i++)
    {
        setTimeout(function exec() { console.log(`i: ${i}`); }, i * 1000 );
    }
}
//test();

// this is same as above.

function test_()
{
    for (var i = 0; i < 3; i++)
    {
        let j = i;
        setTimeout(function exec() { console.log(`j: ${j}`); }, j * 1000 );
    }
}

//test_();


/**
 *  
 * var is defined inside in block of for & var is only get function scope when it is defined inside the function. otherwise it will get global scope.
 * 
 * so when we print i it will print 5.
 * 
 * for will create a new block every time. but var is not block scoped. so it will get the scope of global scope. & value of i will be updated 
 * so whatever the last value of i is, it will print that value & that is 5.
 * 
 */

function tes2()
{
    for (var i = 0; i < 5; i++)
    {
        setTimeout(function exec() { console.log(`i: ${i}`); }, i * 1000 );
    }
}

tes2();
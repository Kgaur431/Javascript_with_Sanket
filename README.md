Javascript 
    Scopes:-
        1. In simple words, scope is simply where to look for things in your code.
           like ==> what are we looking for in our code.
                      we are looking for a variable or a function.
                          weather a function is defined or not/ declared or not.
                          weather a variable is defined or not/ declared or not.
        2. we have three types of scopes in javascript.
            1. Global Scope
                1.1 Global Scope is the default scope in javascript.
                1.2 Global Scope is the scope which is available to all the code in your program.
                    like--> few variables & function are available to all the code in your program.
                1.3 if we define a variable & function in a global scope then we can access it anywhere in our program.
                    how to define a variable & function in a global scope?
                        there are many ways to define a variable & function in a global scope.
                          
            2. Function Scope
                2.1 Function Scope is the scope which is available to the code which is inside a function.
                    like--> few variables & function are available to the code which is inside a function.
                2.2 in a function scope, the visibility of a variable/ function is just inside the outer function.
                        function fun() {
                            var x = 10; // x is a variable which is accessible inside the function fun only.
                        }
            3. Block Scope
                3.1 Block Scope is the scope which is available to the code which is inside a block.
                    like--> few variables & function are available to the code which is inside a block.
                    like--> if, for, while, switch, try, catch, etc.
                3.2 in JS we can use a pair of curly braces to create a block.
                    like--> {
                                // code
                            }
                3.3 in a block scope, the visibility of a variable/ function is just inside the block. 
        3. let, var & const
            whenever we declare a variable using var/ let/ const, it is a formal declaration. || initialising a fun also formal declaration --> imp. 
            3.1 Var --> whenever we use a var anywhere inside a function, the variable is gets functional scope. 
                if we use it outside a function, then no matter if it is enclosed in a block or not the variable will get global scope.4
            3.2 Let --> whenever we initialize a variable with let keywrod, it always gets block scope, it will not get global scope.
                        let will not allows us to redeclare a variable.
                        if we declare let outside any block then it does not get complete global scope. but if we do with var then it will get complete global scope.
            3.3 Const --> it also has block scope, same as let but the only difference is it does not allows us to reassign a variable.

     
        4. Difference function scope & block scope
            In function scope if a variable having function scope then it is accessing anywhere inside the function.
                like before initializing a variable (using var) we can access it weatther we will get undefined but we will not get any error. because of lexical scoping.
                function scope means we can everywhere inside the function.
            In block scope once we declare a variable after that variable only we can access it.
                like before initializing a variable (using let) we can not access it we will get error. because of lexical scoping.
                block scope means we can access it only inside the block.
        
        5. How JS parses the code ?
            so we know that JS is not a interpreted language, it definitely is a hybrid 
                compiled + interpreted language.
            so whenever we try to execute a JS code, it first parse the whole code, in this parsing phase it will assigns scope to variables/ functions (its do scope resolution for every variable & function). once done then it reads the code line by line & executes it. 
                Every variable in our code will be used in one of the following ways:
                    1. either variable will be getting a value assigned to it. i.e it is a declaration / target. --> x =10;
                    2. or it will be used to access the value of the variable. i.e it is a reference / source. --> y = 10+ x;

                what JS does is, it will start the parsing phase. Outside every thing it maintain global scope. 
                    but the moment it goes inside a function, it starting maintaing scope of that function. 
        6. Autoglobals
            in Js if we keep on searching for a scope of a variable in outer scope & no where find it, then we automatically consider it in a global scope.
            this happen only during execution phase, not during parsing phase.
            Autoglobals will only works with target references. not with source references.
                target references means we are assigning a value to a variable.
        
        7. Undefined vs Undeclared 
            visit the docs.google.com 

        8. Hoisting
            the phenomenon to call the function before declaring it is called hoisting.
                it is direct result of lexical scoping that happens in JS, due to which we are able to access some function & variable before declaring it. which gives us a notion that they are moved up in the file. 
        9. Strict Mode
                in strict mode autoglobals will BE prehibited.
        10. Function Defination vs Function Expression
            10.1 Function Defination
                function fun() {
                    // code
                }
                   In execution phase we don't do any evaluation. means we just declaring a function
            10.2 Function Expression
                var fun = function() {
                    // code
                }
                    In execution phase we do evaluation. means we are assigning a function to a variable. 
                10.2.1 Function exrpression are of two types.
                    1. Named Function Expression
                        var x = function fun() {
                            // code
                        }
                    2. Anonymous Function Expression
                                        In production level code we will get the stack trace & last function is one where the error happened. if we put anonymous function then we will not able to trace which fun called or which not. 

                        var x = function() {
                            // code
                        }
                                ||
                        gun(function() {
                            // code
                        })
        12. Trace
                console.trace(); // it will show the call stack, 
                    Trace will give us the code pointer from which the function called.
                
        


          
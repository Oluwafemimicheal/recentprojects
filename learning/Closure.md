Studing Date - 02-1-2025
Tutor - Codesmith
Topic - javaScript the hard parts CLOSURE
Time - Almost 2hr class

-JavaScript principles in closure are:
Functions, tread of Excution, Memory

const num = 3
function multiplyBy2 (inputNumber){
    const result = inputNumber*2
    return result
}
const output = multiplyby2(num)
const result = multiplyby2(10)


Function can be returned from other functions in javaScript
function createFunction(){
    function multiplyBy2(num){
        return num*2
    }
    return multiplyBy2;
}

const secondLabel = createFunction;
const generateFunc = createFunction();
const result = generateFunc(3);


Calling a function outside of the function call in which it was defined
function outer(){
    let counter = 0;
    function increamentCounter(){
        counter ++;
    }
    return increamentCounter;
}

const myFunction = outer();
myNewFunction();
myNewFunction();   //backpack 

individual backpack
const anotherFunction = outer()
anotherFunction();
anotherFunction();

Closure gives our functions presistent memories
-Helper Function, iterators and generator, Module Pattern, Asynchronous JavaScript

What next?
Career Workshop, javaScript Workshops, Bulid a web App Workshops, CSX
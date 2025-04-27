// calling of these functions


// console.log(value1);
//ConsumingScript.js:4 Uncaught ReferenceError: value1 is not defined at ConsumingScript.js: 4: 13
//because value1 is local value

console.log(printVariables());
//will work correctly

console.log(printVariables(1, 2, 3)); //[1,2,3]

console.log(printVariables(1, 2)); //[1,2,undefined]
// to solve it , i will make a default parameter
console.log(printVariables(1, 2)); //[1,2,0]

console.log(printVariables(1, 2, 3, 4, 5, 6)); //[1,2,3]

// funex
console.log(funex(11, 12, 13)); //[11,12,13]

console.log(funex(11)); //[11,undefined,0]
// to solve it , i will make a default parameter
console.log(funex(11)); //[11,99,0]
console.log(funex(11,12,13,14,15,16)); //[11,12,13]
    


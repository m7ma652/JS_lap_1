// (all functions have an input and return value)

// console.log(localVar);
//undefined

// console.log(testingVar); 
//undefined

function printVariables(value1, value2, value3 = 0) {
    var localVar = 3;
    testingVar = 5;
    return [value1, value2, value3];
}

// console.log(localVar);
// undefined ; because it is in the function's scop

// console.log(testingVar);
// should return 5
// because it became a global value


let funex = (value1, value2=99, value3 = 0) => {
    var localVar_2 = 3;
    testingVar_2 = 5;
    return [value1, value2, value3];
}
console.log(funex(22, 23, 25)); //[22,23,25]
// console.log(localVar_2);
// undefined ; because it is in the function's scop

// console.log(testingVar_2);
// should return 5
// because it became a global value

 
function sum(num1, num2 = 0) {
    if (isNaN(num1)||isNaN(num2)){
        return "error";
    }
    return num1 + num2;
}
console.log(sum(1)); //NaN
// i will use default value to solve this problem

console.log(sum("mohamed")); //mohamed0

// after i make if isNaN
console.log(sum("mohamed")); //error


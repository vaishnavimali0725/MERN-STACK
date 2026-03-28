//
//some other code snippet
// 


//Annoymous function/function expression
// let summation = function( num1, num2){
//     const Result = num1 + num2;
//     return Result;
// }

// const a = 10;
// const b = 20;
// const aPlusB = a + b;
// console.log("Result:", aPlusB);
// console.log(summation(a, b)); //function call

//
//some other code snippet
//
// const resultAandB = summation(a, b); //function call
// console.log(resultAandB);

//
//some other code snippet
//
// const x = 10;
// const y = 20;
// const xPlusY = x+y;
// console.log("Result:", xPlusY);
// console.log(summation(12,20)); //function call

//
//some other code snippet
//
// const l = 20;
// const k = 40;
// const lPlusK = l + k;
// console.log("Result:", lPlusK);
// console.log(summation(l,k));

//func def
// function summation1(num1, num2){
//     const sum = num1 + num2;
//     // console.log("Result",sum);
//     return sum;
// }


//fun call
// console.log(summation1(1, 2));

// function greet(){
//     console.log("hey welcome to our appln:-");
// }
// greet();

// function greet(usernme){
//     console.log("hey welcome to our appln:-", usernme);
// }
// greet("John");

let mul=1;
//nested function
function addSquares(x,y){
    
   const a = square(x);
   const b = square(y) 
    function square(num){
        return num*num;
    }
    return a + b
    // console.log(res);
    // console.log(square(2));

}

console.log(addSquares(1,2));

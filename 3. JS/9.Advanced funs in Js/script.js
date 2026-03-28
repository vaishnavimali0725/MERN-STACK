//Named functions
// function greet(){
//     console.log("hey everyone!");    
// }
// greet()

//Anonymons function/ function expression
// let greet2=function (){
//     console.log("hey everyone!");    
// }
// greet2();

//Arrow functio
// let greet3= ()=>{
//     console.log("hey everyone!");    
// }
// greet3();


// const greet= (count) =>{
//     console.log("hello all",count); 
// }
// greet(2);

// const square=(num)=> num * num

// console.log(square(2));


//callback function 
// operation=method 
// const calculte=(a, b, operation) => {
//     return operation(a, b)
// }

//anonymous-method 1
// const summatoin=calculte(2,3, function(n1, n2){
//     return n1 + n2
// });
// console.log(summatoin);

//named func-method 2
// function sub(a, b){
//     return a-b
// }
// const subturaction=calculte(2,3, sub)
// console.log(subturaction);

//arrow function
// const mul= (a, b) => a * b
// const multipation=calculte(2,3,mul)
// console.log(multipation);

// console.log(calculte(2,3, function(n1, n2){
//     return n1 + n2
// }));

const arr = [2, 5, 6, 8, 9, 0, -3, -5, -2];

// method 1
const printFirstNegativeNumber =(num) =>num<0;

// method 2
// const printFirstNegativeNumber =(num) =>{
//     return num<0;
// }

// method 3
// const printFirstNegativeNumber =(num) =>{
//     if(num<0){
//         return num
//     }
// }

// const result=arr.find(printFirstNegativeNumber)
// const result=arr.findIndex(printFirstNegativeNumber)
// console.log(result);

arr.forEach((num,index) =>{
    console.log("Element: ",num,"Index: ",index);
    
})
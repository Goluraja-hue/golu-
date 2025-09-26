const prompt = require('prompt-sync')() ;
// for (i=1;i<=10;i++){
//     for (j=1;j<=10;j++){
//         console.log(`${i}x${j}=${i*j}`);
//     }
//     console.log("-----");
// }/

// let arr=[10,12,3,4,15,16,17];
// let index = arr.findIndex((e)=> e === 3
// );
// console.log(index);
// arr [index] = 22 ;
// console.log(arr)

// arr1 = [1, 2, 3, 4, 5, 6, 7, 8];
// arr2 = [2, 34, 4, 56, 10, 16, 9, 8];
// Q 1. interchange their elements of position like all even positions ? like, and positions = are , 2,4,6,8



// Q 2. create a function which will take  this array as parameter and and element and returns elements position?

// Q3. Now create a function which will take and element as params and change its value to another number from params in arr2.


// Q4. a function which takes an element as params and checks if it is in arr1 or not .

// Q5. create a function which will take an array as params and returns the sum of all elements of that array.

/* ------------------------------------ */


// 1. Create an array of user to add numbers to this array.
let arr = [];
for (let i=0;i<10;i++){
    let input = parseInt(prompt("Enter a number:\t"));
    arr.push(input);
}
console.log(arr);


// 2. Keep adding numbers to the array in until o is added to the array the the array A



// 3 filter for numbers divisible by lo from va given array
// let arr1 = [10,20,30,4,50,60,70,80,9];
// let result = arr1.filter((e)=>{
//     return e % 10 == 0
// })
// console.log(arr1);
// console.log(result);


// 4 Create an array of square of given numbers.
// let arr2 = [10,15,12,13,14,16,17,18,19,20];
// let array = []
// arr2.forEach((e)=>{
//     array.push (e*e)
    
// })
// console.log(array);


// 5 Use reduce to calculate factorial of a gin number from an array of first numbers. In being the number whose factorial needs. to be calculated
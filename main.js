const prompt = require("prompt-sync")({sigint:true});

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


arr1 = [1, 2, 3, 4, 5, 6, 7, 8];
arr2 = [2, 34, 4, 56, 10, 16, 9, 8];
// Q 1. interchange their elements of position like all even positions ? like, and positions = are , 2,4,6,8

// for (let i = 2; i < arr1.length; i+=2) {
//     let arr3 = arr1;
//     arr1[i] = arr2[i];
//     arr2[i] = arr3[i]
    
// }
// console.log(arr1);
// console.log(arr2);





// Q 2. create a function which will take  this array as parameter and and element and returns elements position?



// Q3. Now create a function which will take and element as params and change its value to another number from params in arr2.
// let num = prompt("Enter a number:\t");
// let temp;
// arr2.forEach((element,index) => {
//     if (element == num){
//         console.log(index);
//         let change = parseInt(prompt("Enter the number:\t"));
    
//         arr2[index]= change;
//     }

// });
// console.log(arr2);





// Q4. a function which takes an element as params and checks if it is in arr1 or not .
// let guess = prompt("Enter a number:\t");
// arr1.forEach(el => {
//     if (guess == el){
//         console.log(`present  `);

//     }
    
//     else {
//         console.log(`not present`);
//     }
    
// });


// Q5. create a function which will take an array as params and returns the sum of all elements of that array.
// let sum = 0;
// arr1.forEach((e)=>{
//     sum+=e
// })
// console.log(`sum of ${arr1} is ${sum}`);
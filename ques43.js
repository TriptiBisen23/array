const input = require("readline-sync");

let n = input.questionInt("Enter the length of array:");

let arr = []
let str;


for(let i = 0; i<n; i++)
{
    
    arr[i]= input.questionInt("enter the element num:");
}
let j=0
while (j<arr.length) 
{
    console.log("<".repeat(arr[j]));
    j++
}   

 









const input = require("readline-sync");

let n = input.questionInt("Enter the length of array:");

let a = [];
let i = 0;

while(i<n)
{
    
    a[i] = input.questionInt("enter the element num:")
    i++
} 
   
 console.log(a);

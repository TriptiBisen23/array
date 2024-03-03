const input = require("readline-sync");

let n = input.questionInt("Enter the length of array:");

let arr = []
let i = 0;

while(i<n)
{

    arr[i]= [i+1]
    
    i++;
} console.log(arr);





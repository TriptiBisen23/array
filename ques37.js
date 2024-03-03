



const input = require("readline-sync");

let n = input.questionInt("Enter the length of array:");

let arr = [];

for(let i = 0; i<n; i++)
{
        arr[i] = input.questionInt("enter the element no.:")

}
for(let i = n-1; i>=0; i--)
{
        console.log((arr[i]));

}
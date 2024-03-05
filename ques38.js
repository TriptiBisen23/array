
const input = require("readline-sync");

let n = input.questionInt("Enter the length of array:");

let arr = [];
let c = 0;
let t = input.questionInt("enter the target number:")

for(let i = 0; i<n; i++)
{
    arr[i] = input.questionInt("enter the element no.:")

  
    if(arr[i]==t)
   { 
        c++;
        n=i;
        
        console.log("yes");
   } else
   {
        console.log("no");
   }
  } 
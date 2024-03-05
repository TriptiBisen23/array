
const input = require("readline-sync");

let n = input.questionInt("Enter the length of array:");

let arr = [];
let es = 0
let os = 0;


for(let i = 0; i<n; i++ )
{

    arr[i] = input.questionInt("enter the element num:");
    
} 
  for(i = 0; i<n; i++)
  {
    if(arr[i]%2!=0)
    {
       os = os+arr[i];
    }
     else
    { 
         es = es+arr[i];
    }
  }
     console.log(es);
     console.log(os);
 

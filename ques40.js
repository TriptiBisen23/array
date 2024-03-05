
const input = require("readline-sync");

let n = input.questionInt("Enter the length of array:");

let arr = [];


for(let i=0; i<n; i++)
{
    arr[i] = input.questionInt("enter the element no.:")
}
for(i=0; i<n; i++)
{
    let c=1;
    for(let j=i+1; j<n; j++)
    {
        if(arr[i]==arr[j])
        {
            c++;
            let m=j;

            for(m=j; m<n; m++)
            {
                arr[m]=arr[m+1];
            
            }
            n=n-1;
        }
        c=c;
    }
    if(c>1)
    {
        console.log((arr[i]),"duplicate ");
    }
    
}
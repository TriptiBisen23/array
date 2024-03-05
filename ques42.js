const input = require("readline-sync");

let n = input.questionInt("Enter the length of array:");
let m = input.questionInt("Enter the length of array:");


let a = [];
let b = [];
let d=[]
for(let i=0; i<n; i++)
{
    a[i] = input.questionInt(`enter the  aaray element :`);
}

for(let j=0; j<m; j++)
{
    b[j] = input.questionInt(`enter the secand aaray element : `);
}
let i=0;
let j=0;
let k=0;
while(k<n+m)
{
    while(i<n)
    {
        while(j<m)
        {
            if(a[i]<b[j])
            {
                console.log(a[i])
                i++;
                k++;
            }
            else
            {
                console.log(b[j])
                j++;
                k++;
            }
        }
    }
}





// console.log("Fisrt Array",a);
// console.log("Second Array",b);

// let c = n + m;

// for(let i=0; i<c; i++)
// {
//     d[i] = 0;
// }

// let f=0
// while (f<n)
// {
//     d[f] = a[f];
//     f++
// }
// let k=0
// while(f<c){
//     d[f]=b[k]
//     k++
//     f++
// }
// console.log("marge Array",d);










































//Reverse your name

const myName = "Aiswarya";

let reversedName = " ";

for(let i=myName.length -1; i>=0; i--)
{
    reversedName = reversedName + myName[i];
}
console.log(reversedName);
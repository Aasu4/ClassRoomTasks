//Basic For Loop
for(let i=0; i<=10; i++)
{
    console.log("Print Numbers:" + " "+ i);
}

//Skip & Stop using continue 
const numbers = [10, 20, 30, 40, 50];

for(i=0; i<numbers.length; i++)
{
    if(numbers[i] === 30)
    {
        continue;
    }
    console.log("Print with Skip Numbers:" + " " + numbers[i]);
}

//Stop using break
const num = [10, 20, 30, 40, 50];

for(i=0; i<num.length; i++)
{
    if(num[i] === 40)
    {
        break;
    }
    console.log("Print with Stop Numbers:" + " " + num[i]);
}


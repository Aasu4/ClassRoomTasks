//Classroom Assignment: Arrays in JS 
//Q1: Write a program to find the count of a given number in an array.

const nums = [2,4,5,2,1,2];
let k =2;
let count =0;
for (let i=0; i<nums.length; i++) {
    if (nums[i] === k) {
        count++;
    }
    }

    console.log("The count of k is:" + count);



    
//Home Assignment: String

const input="Hello world";
console.log(input.length); //length of string

//Given a string s consisting of words and spaces, return the length of the last word in the string

const word = "Hello world";
const splitword = word.split(" ").filter(Boolean);
console.log(splitword[1].length); // 5

const word1 = " fly me to the moon ";
const splitword1 =word1.trim().split(" ").filter(Boolean);
console.log(splitword1[4].length); //4


//Check if two strings are anagram or not
function isAnagram(name1, name2){

    const alignName1 =name1.toLowerCase().replace(/\s/g, '');
    const alignName2 =name2.toLowerCase().replace(/\s/g, '');

    const sortName1 =alignName1.split('').sort().join('');
    const sortName2 =alignName2.split('').sort().join('');
    return sortName1 === sortName2;

}

console.log(isAnagram("Listen", "Silent")); //true
console.log(isAnagram("Hello", "World")); //false

//Example:1
//1. Split the string into an array of words.
//2. Find the last word in the array.
//3. Calculate the length of this word.
    const newName="Aiswarya";
    const splitnewName = newName.split("");
    console.log(splitnewName);
    console.log(splitnewName.reverse());
    console.log(splitnewName.join(""));
    console.log(splitnewName.length);
//Example:2
  // 1. Trim the String
//2. Split the String into Words
//3. Identify the Last Word
//4. Calculate the Length of the Last Word
//5. Return the length

    const newName1=" Aiswarya ";
    const trimnewName1 = newName1.trim();
    const splitnewName1 = trimnewName1.split(" ");
    const lastWord = splitnewName1[splitnewName1.length - 1];
    console.log(lastWord.length); //8

//Example:3 
//1. Remove spaces and convert all letters to the same case
//2. Sort the Characters
//3. Compare Sorted Strings
//4. Return the Result

const user="Listen";
const user1="Silent";

const alignUser = user.toLowerCase().replace(/\s/g, '');
const alignUser1 = user1.toLowerCase().replace(/\s/g, '');

const sortUser = alignUser.split('').sort().join('');
const sortUser1 = alignUser1.split('').sort().join('');

console.log(sortUser === sortUser1); //true





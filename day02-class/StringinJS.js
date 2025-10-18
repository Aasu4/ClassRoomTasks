let browserName = "Chromekk Browskker";
console.log(browserName.length); //14


console.log(browserName.charAt(4)); //m---> starts from 0

console.log(browserName.indexOf("o")); //3

console.log(`This is my browser ${browserName}`);

console.log(browserName.toUpperCase());
console.log(browserName.toLowerCase());
console.log(browserName); //original value is not changed
console.log(browserName.trim()); //removes extra spaces
console.log(browserName.includes("yes")); //false
console.log(browserName.includes("Chrome")); //true

console.log(browserName.startsWith("Ch")); //true
console.log(browserName.endsWith("ssss")); //false

console.log(browserName.concat(" - This is my browser")); //Chrome Browser - This is my browser
console.log(browserName.split(" ")); //["Chrome","Browser"]

console.log(browserName.split("o")); //["Chr","me Br","wser"]   
console.log(browserName.replace("Chrome","Firefox")); //Firefox Browser

console.log(browserName); //original value is not changed   
console.log(browserName.replace("h","kk")); //Chrkkme Brkkwser

console.log(browserName.replaceAll("kk","h")); //Chrome Browser

//First Task
let sentence = "I love JS and JS is fun";
console.log(sentence.toUpperCase());

console.log(sentence.replaceAll("JS", "JavaScript"));

console.log(sentence.length);

console.log(sentence.replace(/[^a-zA-Z]/g, "").length); //count only letters

















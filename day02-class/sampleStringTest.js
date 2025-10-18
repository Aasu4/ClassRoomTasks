
let password="Test@123"

const eightCharcters=password.length;
const upperCase=/[A-Z]/.test(password);
const oneNumber=/[0-9]/.test(password);

if (eightCharcters && upperCase && oneNumber) {
console.log("Password is strong");
}
else{
console.log("Password is weak");
}







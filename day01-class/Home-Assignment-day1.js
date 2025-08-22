
// Session : Primitive DataTypes
//String - Create a variable city and print "I live in <city>".
let city = "Coimbatore";
console.log("i Live in " + " " + city);

//Number → Example: Store marks = 85 and print marks + 10.
let marks = 85 ;
c= marks + 10 ;
console.log("Total Marks: " + " " + c );

//Boolean → Example: Create isWeekend and print "Relax" if true, "Work" if false
let isWeekend = false;
if (isWeekend) {
    console.log("Relax");
} else {
    console.log("Work");
}

//Undefined → Example: Declare futureGoal without assigning and print its type.
let futureGoal;
console.log(typeof futureGoal);

//Diff btw var and let functional scoping
var MaximumBalance = 2000;
var minimumBalance = true;
let lowBalance = 0; 
if (minimumBalance) {
    const MaximumBalance = 5000; //const is block scoped
    var balance = 1000; //(var ignores block scope)
   // let lowBalance = 0;   //let is block-scoped
    console.log("Account minimum balance is: " + " " + balance);
    console.log("Account Maximum balance is: " + " " + MaximumBalance);

}else
{
    console.log("Suspend the User account, Because the Balance is:" + lowBalance );
}

console.log("Account balance is Maintained" + " " + balance); //(var ignores block scope)
console.log("Account balance is not maintained" + " " + lowBalance); //let is block-scoped
console.log("Account Maximum balance is: " + " " + MaximumBalance);




const obj = {

name: "bemila",
age: 45
}

obj.name  = "bemi"


// obj = {
//  name: "Priya",
//  age: 33
//  }

// console.log(obj);













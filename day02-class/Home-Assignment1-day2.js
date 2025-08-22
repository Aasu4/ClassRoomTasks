//Classroom Assignment: Conditional Statements 

//Task-1
function launchBrowser(browserName){
    if (browserName === "Chrome"){

        console.log("Browser Launched Successfully");
    } else{
       console.log("Browser Not Found"); 
    }
}

launchBrowser("Chrome");
launchBrowser("Firefox");

console.log("-------------------------------------------------");

//Task-2
runTest("smoke");
function runTest(testType) {
switch(testType) {
case "smoke":
console.log("Running smoke tests...");
break;

case "sanity":
    console.log("Running sanity tests...");
    break;

case "regression":
console.log("Running regression tests...");
break;

default:
console.log("Unknown test type.");
}
}






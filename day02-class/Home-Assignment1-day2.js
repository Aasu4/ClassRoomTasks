//launchBrowser function
function launchBrowser(browserName){

if (browserName="chrome")
{
console.log("success");
}else
{
console.log("fail");
}
}
launchBrowser("chrome");

//b) runTests function
function runTests(testType){

switch(testType){

case "sanityCheck":
console.log("san");
break;

case "smoke":
console.log("smoke");
break;

default:
console.log("no");
}
}
runTests("sanityCheck");
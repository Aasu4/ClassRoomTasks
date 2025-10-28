function greet(name) {
    console.log("Hi" + " " +name);
}

function entername(callback) {
    const name = "Aiswarya";
    callback(name);
}

entername(greet);
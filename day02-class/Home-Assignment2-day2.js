

//c) students function
function students(score) {
    switch (score) {
        case 100:
            return "Grade A";
        case 90:
            return "Grade B";
        case 80:
            return "Grade C";
        case 70:
            return "Grade D";
        default:
            return "No Grade";
    }
}

// Calling the function
let result = students(80);
console.log("Student Grade:", result);





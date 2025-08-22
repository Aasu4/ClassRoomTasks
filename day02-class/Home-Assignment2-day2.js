
//let studentScore = 90;
function students(studentScore){
    let grade ;
    switch(true) {

            case studentScore > 80 :
            grade = "Grade A";
            break;

            case studentScore > 70 :
            grade = "Grade B";
            break;

            case studentScore > 60 :
            grade = "Grade C";
            break;

            default :
            grade = "No Grade";
            break;

    }   

    console.log("The Student grade is : "+ grade)
    return grade;   

    }
students(85);
students(75);
students(55);

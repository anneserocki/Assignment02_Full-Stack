// DEFINE VARIABLES
let score = parseFloat(prompt("Please enter the score between 1 to 100: ")).toFixed(2);

// Approach one
// According to the standards to get the corresponding grade
// if (score >= 0 && score <= 100)
//     if (score >=60 && score <= 69){
//         console.log("D")
//     } else if (score >=70 && score <= 79) {
//         console.log("C")
//     } else if (score >=80 && score <= 89) {
//         console.log("B")
//     } else if (score >=90 && score <= 100) {
//         console.log("A")
//     } else {
//         console.log("F")
//     }
// else {
//     alert("Please re-enter the score!")
// };

// Approach two
if (isNaN(score) || score < 0 || score > 100) {
    alert("Please enter a number between 1 to 100.")
} else {
    switch (score >= 0 && score <= 100){
        case score >=60 && score <= 69:
            console.log("D");
            break;
        case score >=70 && score <= 79:
            console.log("C");
            break;
        case score >=80 && score <= 89:
            console.log("B");
            break;    
        case score >=90 && score <= 100:
            console.log("A");
            break;
        case score >= 0 && score <= 59:
            console.log("F");
            break;
        default:
            alert("The score is a number.")
    };
};

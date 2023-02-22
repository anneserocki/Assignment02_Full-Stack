// DEFINE VARIABLES
let score = parseFloat(prompt("Please enter the score between 1 to 100: ")).toFixed(2);

// According to the standards to get the corresponding grade
if (score >= 1 && score <= 100)
    if (score >=60 && score <= 69){
        console.log("D")
    } else if (score >=70 && score <= 79) {
        console.log("C")
    } else if (score >=80 && score <= 89) {
        console.log("B")
    } else if (score >=90 && score <= 100) {
        console.log("A")
    } else {
        console.log("F")
    }
else {
    alert("Please re-enter the score!")
};


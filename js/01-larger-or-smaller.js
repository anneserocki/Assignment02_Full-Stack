// DEFINE TWO VARIABLES
let number1 = parseInt(prompt("Please enter the first integer number: "));
let number2 = parseInt(prompt("Please enter the second integer number: "));
// COMPARE THE TWO NUMBERS
// APPROACH 1
if (number1 > number2){
    window.alert(`The larger of the two number is ${number1}`)
} else if (number1 < number2){
    alert(`The larger of the two number is ${number2}`)
} else if (number1 === number2){
    alert("The two numbers are equal, no larger number.")
};
// APPROACH 2
if (number1 === number2){ 
    alert("The two numbers are equal, no larger number.")
} else if (number1 > number2){
    alert(`The larger of the two number is ${number1}`)
} else {
    alert(`The larger of the two number is ${number2}`)
};
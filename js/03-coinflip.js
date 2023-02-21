// DEFINE VARIABLES
let coinFlip, choice;
let randomNum = Math.round(Math.random()); // produce a random number and use round() to get a integer number
console.log(randomNum);

choice = prompt("Please choose \"Heads\" or \"Tails\": ").toLowerCase();
console.log(choice)

// Approach one
// COMPARISON AND GET THE RESULT "Heads" or "Tails" 
if (choice === "heads" || choice === "tails") {
    if (randomNum === 1){
        coinFlip = "heads"
        console.log(coinFlip)
        if (coinFlip === choice){
            alert("The flip was heads and you chose heads...you win!")
        } else {
            alert("The flip was heads but you chose tails...you lose!")
        }   
    } else {
        coinFlip = "tails"
        console.log(coinFlip)
        if (coinFlip !== choice){
            alert("The flip was tails but you chose heads...you lose!")
        } else {
            alert("The flip was tails and you chose tails...you win!")
        } 
    };
} else {
    alert("Please re-enter!")
};  

// APPROACH TWO
// DEFINE VARIABLES
// let coinFlip, choice;
// let randomNum = Math.random(); // produce a random number and use round() to get a integer number
// console.log(randomNum);

// COMPARISON AND GET THE RESULTS
// choice = prompt("Please enter \"Heads\" or \"Tails\": ").toLowerCase();
// console.log(choice)

// if (choice === "heads" || choice === "tails") {
//     if (randomNum >= 0.5){
//         coinFlip = "heads"
//         console.log(`coinFlip is ${coinFlip}`)
//         if (choice === coinFlip){
//             alert("The flip was heads and you chose heads...you win!")
//         } else {
//             alert("The flip was heads but you chose tails...you lose!")
//         }
//     } else {
//         coinFlip = "tails"
//         console.log(`coinFlip is ${coinFlip}`)
//         if (choice === coinFlip){
//             alert("The flip was tails but you chose heads...you lose!")
//         } else {
//             alert("The flip was heads but you chose tails...you lose!")
//         }

//     }
// } else {
//     alert("Please re-enter!")
// };


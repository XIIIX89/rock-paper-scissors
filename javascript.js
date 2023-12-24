let playerWins = 0;
let computerWins = 0;

for (let i = 0; i <= 4; i++) {
    let winner = game();
    if (winner === "Player")  {playerWins++;}
    else if (winner === "Computer") {computerWins++;}
    console.log(`Player: ${playerWins}`);
    console.log(`Computer: ${computerWins}`);
}

if (playerWins > computerWins) {alert("You Win!");}
else if (computerWins > playerWins) {alert("You lose!");}
else {alert("Draw");}

function game() {
    let userHand = player(); //gets the user's play from the player function
    console.log(`Player: ${userHand}`);
    let pcHand = pc(); //gets the computer's play from pc function
    console.log(`Computer: ${pcHand}`);
    let winner = compare(userHand, pcHand); //compares the user's and computer's hands and assigns the victor to the winner variable
    return winner;
}

function player() {
    let play = prompt("Enter rock, paper, or scissors."); //gets player's play
    return play.toLowerCase(); //returns the lowercase version of player input
}

function pc() {
    let play = Math.floor(Math.random() * 90); //sets play equal to an integer from 0 to 90
    if (play >= 0 && play < 30) {return "rock";}
    else if (play >=30 && play < 60) {return "paper";}
    else if (play >= 60 && play < 90) {return "scissors";}
}

function compare(userHand, pcHand) {
    if (userHand === pcHand) {return "draw";}
    else if (userHand === "rock" && pcHand === "paper") {return "Computer";}
    else if (userHand === "rock" && pcHand === "scissors") {return "Player"}
    else if (userHand === "paper" && pcHand === "rock") {return "Player";}
    else if (userHand === "paper" && pcHand === "scissors") {return "Computer";}
    else if (userHand === "scissors" && pcHand === "rock") {return "Computer";}
    else if (userHand === "scissors" && pcHand === "paper") {return "Player";}
}

//this is a test. AddUI branch
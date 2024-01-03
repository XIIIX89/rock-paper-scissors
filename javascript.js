let playerWins = 0;
let computerWins = 0;
let counter = 0;

let userHand = ' ';
let pcHand = ' ';
let winner = ' ';

const playerScore = document.querySelector('#playerScore');
const computerScore = document.querySelector('#computerScore');
const playerPlayed = document.getElementById('playerPlayed');
const computerPlayed = document.getElementById('computerPlayed');
const playerWinCount = document.querySelector('#playerScore');
const computerWinCount = document.querySelector('#computerScore');
const roundCounter = document.querySelector('#round');
const roundWinner = document.querySelector('#winner');


document.addEventListener('click', (e) => {
    let target = e.target.id;

    switch (target) {
        case 'rock': 
            userHand = 'rock';
            playerPlayed.textContent = `You Played: ${userHand.toUpperCase()}`;
            game(userHand);
        break;

        case 'paper': 
            userHand = 'paper';
            playerPlayed.textContent = `You Played: ${userHand.toUpperCase()}`;
            game(userHand);
        break;

        case 'scissors': 
            userHand = 'scissors';
            playerPlayed.textContent = `You Played: ${userHand.toUpperCase()}`;
            game(userHand);
        break;

        default: break;
    }
});

function game(userHand) {
    pcHand = pc(); 
    computerPlayed.textContent = `Computer Played: ${pcHand.toUpperCase()}`;
    winner = compare(userHand, pcHand);
    console.log(`Player: ${userHand}`);
    console.log(`Computer: ${pcHand}`);
    console.log("Winner: " + winner);
    counter++;
    
    // check to see if either player has won 3 games (Best 3 out of 5)
    if(winner === "Computer" && counter < 5) {
        computerWins++;
        computerWinCount.textContent = `Computer: ${computerWins}`;
        roundWinner.textContent = `Winner: ${winner}`;
        roundCounter.textContent = `Round: ${counter}`;
        // if(computerWins === 3) {
        //     alert("You Lose!");
        //     location.reload();
        //     }
    }
    else if(winner === "Player" && counter < 5) {
        playerWins++; 
        playerWinCount.textContent = `Player: ${playerWins}`;
        roundWinner.textContent = `Winner: ${winner}`;
        roundCounter.textContent = `Round: ${counter}`;
        // if(playerWins === 3) {
        //     alert("You Win!");
        //     location.reload();
        // }
    }
    // check to see if the total games played is 5
    else if (counter === 5) {
        if(playerWins > computerWins) {alert("You Win!");}
        else if(computerWins > playerWins) {alert("You Lose!");}
        else {
            roundWinner.textContent = `Winner: ${winner}`;
            roundCounter.textContent = `Round: ${counter}`;
            alert("Draw!");}
        location.reload();
    }
    // else if(winner === "Draw") {
    //     roundWinner.textContent = `Winner: ${winner}`;
    //     roundCounter.textContent = `Round: ${counter}`;
    // }
    // else if(winner === "Player" && playerWins === 2)  {
    //     alert("You Win!");
    //     location.reload();
    // }
    // else if (winner === "Computer" && computerWins === 2) {
    //     alert("You Lose!");
    //     location.reload();
    // }
    


}

function pc() {
    let play = Math.floor(Math.random() * 90); //sets play equal to an integer from 0 to 90
    if (play >= 0 && play < 30) {return "rock";}
    else if (play >=30 && play < 60) {return "paper";}
    else if (play >= 60 && play < 90) {return "scissors";}
}

function compare(userHand, pcHand) {
    if (userHand === pcHand) {return "Draw";}
    else if (userHand === "rock" && pcHand === "paper") {return "Computer";}
    else if (userHand === "rock" && pcHand === "scissors") {return "Player"}
    else if (userHand === "paper" && pcHand === "rock") {return "Player";}
    else if (userHand === "paper" && pcHand === "scissors") {return "Computer";}
    else if (userHand === "scissors" && pcHand === "rock") {return "Computer";}
    else if (userHand === "scissors" && pcHand === "paper") {return "Player";}
}


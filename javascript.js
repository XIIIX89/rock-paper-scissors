let playerWins = 0;
let computerWins = 0;
let counter = 0;

let userHand = ' ';
let pcHand = ' ';
let winner = ' ';


document.addEventListener('click', (e) => {
    let target = e.target.id;

    switch (target) {
        case 'rock': 
            userHand = 'rock';
            game(userHand);
        break;

        case 'paper': 
            userHand = 'paper';
            game(userHand);
        break;

        case 'scissors': 
            userHand = 'scissors';
            game(userHand);
        break;

        default: break;
    }
});

function game(userHand) {
    pcHand = pc(); 
    console.log(`Player: ${userHand}`);
    console.log(`Computer: ${pcHand}`);
    counter++;
    winner = compare(userHand, pcHand);
    console.log(winner);

    // check to see if either player has won 3 games (Best 3 out of 5)
    if(winner === "Computer") {
        computerWins++; 
        if(computerWins === 3) 
            {alert("You Lose!");
            location.reload();}
        }
    else if(winner === "Player") {
        playerWins++; 
        if(playerWins === 3) 
            {alert("You Win!");
            location.reload();}
        }

    // check to see if the total games played is 5
    if (counter === 5) {
        if(playerWins > computerWins) {alert("You Win!");}
        else if(computerWins > playerWins) {alert("You Lose!");}
        else {alert("Draw!");}
        location.reload();
    }
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


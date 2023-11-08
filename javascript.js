let playerWins = 0;
let computerWins = 0;

for (let i = 0; i <= 4; i++) {
    let winner = game();
    if (winner === player)  {playerWins++;}
    else if (winner === computerWins) {computerWins++;}
    console.log(`Player: ${playerWins}`);
    console.log(`Computer: ${computerWins}`);
}

if (playerWins > computerWins) {alert("You Win!");}
else if (computerWins > playerWins) {alert("You lose!");}
else {alert("Draw");}

function game() {
    let userWins = 0;
    let pcWins = 0;
    let userHand = player();
    let pcHand = pc();

    let winner = compare(userHand, pcHand);
    return winner;
}

function player() {

}

function pc() {
    
}
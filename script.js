

 function computerPlay(){


    let result =  Math.floor(Math.random() * (3 - 1 + 1)) + 1;
    if (result === 1) {
        return ("rock");
    } else if (result === 2) {
        return ("scissor");

    } else  {
        return ("paper");

    }

    
}



let computerWins = 0;
let userWins = 0; 
let totalRounds = 0; 
let draws = 0;
let playerSelection = prompt("What's your selection");;


function game(playerSelection, computerSelection) {

        if (playerSelection == "rock") {

            if (computerSelection == "rock"){
                return "draw";
            } else if (computerSelection == "paper") {
                return "computer wins";
            } else {
                return "user wins";
            }

        }

        if (playerSelection == "paper") {
            if (computerSelection == "paper") {
                return "draw";
            } else if (computerSelection == "scissor") {
                return "computer wins";

            } else {
                return "user wins";
            }
        }

        if (playerSelection == "scissor") {
            if (computerSelection == "paper") {
                return "user wins";
            
            } else if (computerSelection == "scissor") {
                return "draw";
                
            } else {
                return "computer wins"
            }
        }



}





function completeGame() {
    let winner = game(playerSelection.toLowerCase(), computerPlay());
    if (winner === "user wins") {
        userWins = ++userWins;

    } else if (winner === "computer wins") {
        computerWins = ++computerWins;
        console.log("computer wins!!")
    } else {
        draws = ++draws;
    }
    totalRounds++;
}





// playerselectoin , computerselecton


completeGame();
completeGame();
completeGame();
completeGame();
completeGame();


console.log("user Wins: " + userWins);
console.log("computer Wins: " + computerWins);
console.log("Draws: " + draws);
console.log("total Rounds: " + totalRounds);



    



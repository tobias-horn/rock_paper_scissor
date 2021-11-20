
// initializing vars to keep track of score

let playerScore = 0;
let computerScore = 0;
let draw = 0;
let currentRound = 0;


// randomly selects and returns rock / paper / scissor
function computerSelection() {
    let computerRandomChoices = ['rock', 'paper', 'scissor'];
    let getRandomChoices = Math.floor(Math.random() * computerRandomChoices.length)

    return computerRandomChoices[getRandomChoices];
    
};
 

// button nodes to constants
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissor');
const resetBtn = document.getElementById("reset");


// evaluates winner based on computer selection and player selection 
// -> displays either "computer wins", "user wins", or "tie" into #game-result 
// and adjusts the scoreboard accordingly

function playRound(playerSelection, computerSelection) {

    currentRound ++;

    document.getElementById("current-round").innerHTML = currentRound;

    document.getElementById("player-choice").innerHTML = playerSelection;
    
    document.getElementById("computer-choice").innerHTML = computerSelection;

    if (playerSelection === computerSelection){
    draw++;
    document.getElementById("game-result").innerHTML ="Both chose " + playerSelection + ". It's a tie.";
    document.getElementById("draws").innerHTML = draw;
    }


    else if (playerSelection === "rock") {

            if (computerSelection === "paper") {
                computerScore++;
                document.getElementById("game-result").innerHTML = computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1) + " beats " + playerSelection + ". Computer wins.";
                
            } else {
                playerScore++;
                document.getElementById("game-result").innerHTML = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1) + " beats " + computerSelection + ". Player wins.";
            }

        }

    else if (playerSelection === "paper") {
            if (computerSelection === "scissor") {
                computerScore++;
                document.getElementById("game-result").innerHTML = computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1) + " beats " + playerSelection + ". Computer wins.";


            } else {
                playerScore++;
                document.getElementById("game-result").innerHTML = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1) + " beats " + computerSelection + ". Player wins.";

            }
        }

    else if (playerSelection === "scissor") {
            if (computerSelection === "paper") {
                playerScore++;
                document.getElementById("game-result").innerHTML = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1) + " beats " + computerSelection + ". Player wins.";
                
            
            } else {
                computerScore++;
                document.getElementById("game-result").innerHTML = computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1) + " beats " + playerSelection + ". Computer wins.";
            }
        }


        
}


// displays winner after five rounds

function game(playerChoice) {

let player = playerChoice; 
let computer = computerSelection();

playRound(player, computer);

document.getElementById("winner").innerHTML = ""
if (playerScore === 5) {
    document.getElementById("winner").innerHTML = "Player won 5 rounds";
} else if (computerScore === 5) {
    document.getElementById("winner").innerHTML = "Computer won 5 rounds";
}
document.getElementById("player-score").innerHTML = playerScore;
document.getElementById("computer-score").innerHTML = computerScore;

};


// calls the game function

rock.addEventListener('click', () => {
    game("rock");
});
paper.addEventListener('click', () => {
    game("paper");
});
scissors.addEventListener('click', () => {
    game("scissor");
});
resetBtn.addEventListener('click', function () {
    location.reload();
});















    



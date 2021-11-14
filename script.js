
let playerScore = 0;
let computerScore = 0;
let draw = 0;

// randomly selects and returns rock / paper / scissor
function computerSelection() {
    let computerRandomChoices = ['rock', 'paper', 'scissor'];
    let getRandomChoices = Math.floor(Math.random() * computerRandomChoices.length)

    return computerRandomChoices[getRandomChoices];
    
}


// connecting nodes to constant
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissor');
const resetBtn = document.getElementById("reset");




// evaluates winner based on computer selection and player selection 
// -> displays either "computer wins", "user wins", or "tie" into #game-result

function playRound(playerSelection, computerSelection) {

    document.getElementById("player-choice").innerHTML = "Player chose " + playerSelection;
    
    document.getElementById("computer-choice").innerHTML = "Computer chose " + computerSelection;

    if (playerSelection === computerSelection){
    draw++;
    document.getElementById("game-result").innerHTML ="Both chose " + playerSelection + ". It's a tie.";
    console.log("draw");
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

function game(playerChoice) {

let player = playerChoice; 
let computer = computerSelection();

playRound(player, computer);

if (playerScore === 5) {
    document.getElementById("winner").innerHTML = "Player won 5 rounds";
} else if (computerScore === 5) {
    document.getElementById("winner").innerHTML = "Computer won 5 rounds";
}
document.getElementById("player-score").innerHTML = "Player Score: " + playerScore;
document.getElementById("computer-score").innerHTML = "Computer Score: " + computerScore;

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














    



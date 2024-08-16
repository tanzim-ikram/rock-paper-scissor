document.addEventListener('DOMContentLoaded', function() {
    function getComputerChoice() {
        const randomInt = function (max) {
            return Math.floor(Math.random() * max);
        };

        let computerChoice = randomInt(3);
        return computerChoice;
    }

    function getHumanChoice() {
        let humanChoice = prompt("What do you choose? Rock, Paper or Scissors?");
        return humanChoice.toLowerCase();
    }

    function result(humanScore, computerScore) {
        if (humanScore > computerScore) {
            return "Game Over!" + "\n" + "You win! Your total score: " + humanScore;
        }
        else if (humanScore === computerScore) {
            return "Game Over!" + "\n" + "It's a draw!" + " Human Score: " + humanScore + " | " + "Computer Score: " + computerScore;
        }
        else {
            return "Game Over!" + "\n" + "You lose! Computer's total score: " + computerScore;
        }
    }

    function playGame(round) {
        let humanScore = 0;
        let computerScore = 0;

        function playRound(humanChoice, computerChoice) {
            let selectionValue;
            let result;

            if (humanChoice === "rock") {
                selectionValue = 0;
            }
            else if (humanChoice === "paper") {
                selectionValue = 1;
            }
            else if (humanChoice === "scissors") {
                selectionValue = 2;
            }
            else {
                selectionValue = NaN;
            }

            if (selectionValue === computerChoice) {
                result = "It's a draw!";
            }
            else if ((selectionValue === 0) && (computerChoice === 1)) {
                result = "You lose! Paper beats Rock.";
                computerScore++;
            }
            else if ((selectionValue === 0) && (computerChoice === 2)) {
                result = "You win! Rock beats Scissors.";
                humanScore++;
            }
            else if ((selectionValue === 1) && (computerChoice === 0)) {
                result = "You win! Paper beats Rock.";
                humanScore++;
            }
            else if ((selectionValue === 1) && (computerChoice === 2)) {
                result = "You lose! Scissors beats Paper.";
                computerScore++;
            }
            else if ((selectionValue === 2) && (computerChoice === 0)) {
                result = "You lose! Rock beats Scissors.";
                computerScore++;
            }
            else if ((selectionValue === 2) && (computerChoice === 1)) {
                result = "You win! Scissors beats Paper.";
                humanScore++;
            }
            return result + "\n" + "Human Score: " + humanScore + " | " + "Computer Score: " + computerScore;
        }

        for (let i = 0; i < round; i++) {
            const humanSelection = getHumanChoice();
            const computerSelection = getComputerChoice();

            console.log(playRound(humanSelection, computerSelection));
        }

        console.log(result(humanScore, computerScore));
    }

    document.getElementById('play-btn').addEventListener('click', function() {
        playGame(5);
    });
});

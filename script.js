document.addEventListener('DOMContentLoaded', function () {
    const options = ['rock', 'paper', 'scissors'];
    const numOfTurnsDisplay = document.querySelector("#numOfTurns");
    const humanChoiceDisplay = document.querySelector("#human-choice");
    const computerChoiceDisplay = document.querySelector("#computer-choice");
    const humanScoreDisplay = document.querySelector("#human-score");
    const computerScoreDisplay = document.querySelector("#computer-score");
    const roundResultDisplay = document.querySelector(".round-update");

    const startButton = document.querySelector(".start-btn");
    const rockButton = document.querySelector("#rock");
    const paperButton = document.querySelector("#paper");
    const scissorsButton = document.querySelector("#scissors");

    rockButton.disabled = true;
    paperButton.disabled = true;
    scissorsButton.disabled = true;

    let turns = 5;
    let humanScore = 0;
    let computerScore = 0;

    function startGame() {
        rockButton.disabled = false;
        paperButton.disabled = false;
        scissorsButton.disabled = false;

        startButton.textContent = 'Reset';
        startButton.classList.add('reset-button');

        startButton.removeEventListener('click', startGame);
        startButton.addEventListener('click', resetGame);
    }

    function playRound(humanChoice) {
        const computerChoice = options[Math.floor(Math.random() * 3)];
        let result = "";

        if (turns != 1) {
            if (humanChoice === computerChoice) {
                result = "IT'S A TIE!";
                turns--;
            } else if (humanChoice === 'rock' && computerChoice === 'scissors' ||
                       humanChoice === 'paper' && computerChoice === 'rock' ||
                       humanChoice === 'scissors' && computerChoice === 'paper') {
                result = "YOU WIN!";
                humanScore++;
                turns--;
            } else {
                result = "YOU LOSE!";
                computerScore++;
                turns--;
            }

            humanChoiceDisplay.textContent = humanChoice.toUpperCase();
            computerChoiceDisplay.textContent = computerChoice.toUpperCase();
            computerScoreDisplay.textContent = computerScore;
            humanScoreDisplay.textContent = humanScore;
            numOfTurnsDisplay.textContent = turns;
            roundResultDisplay.textContent = result;
        } else {
            turns--;
            if (humanScore === computerScore) {
                alert("NOBODY WON. IT'S A TIE!");
                resetGame();
            } else if (humanScore > computerScore) {
                alert(`YAY! YOU WON!!\nHuman: ${humanScore}, Computer: ${computerScore}`);
                resetGame();
            } else {
                alert(`YOU LOST! BETTER LUCK NEXT TIME.\nSCORE:- Human: ${humanScore}, Computer: ${computerScore}`);
                resetGame();
            }
        }
    }

    function resetGame() {
        rockButton.disabled = true;
        paperButton.disabled = true;
        scissorsButton.disabled = true;

        startButton.textContent = 'Start Game';
        startButton.classList.remove('reset-button');

        startButton.removeEventListener('click', resetGame);
        startButton.addEventListener('click', startGame);

        turns = 5;
        humanScore = 0;
        computerScore = 0;
        humanChoiceDisplay.textContent = "";
        computerChoiceDisplay.textContent = "";
        computerScoreDisplay.textContent = 0;
        humanScoreDisplay.textContent = 0;
        numOfTurnsDisplay.textContent = "5";
        roundResultDisplay.textContent = "...";
    }

    startButton.addEventListener('click', startGame);

    rockButton.addEventListener('click', () => playRound('rock'));
    paperButton.addEventListener('click', () => playRound('paper'));
    scissorsButton.addEventListener('click', () => playRound('scissors'));
});

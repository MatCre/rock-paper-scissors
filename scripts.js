function game() {
    
    let playerScore = 0;
    let compScore = 0;
    let finalScore;
    
    for(let i = 0; i < 5; i++) {
        const playerInput = prompt(`Round ${i}: Enter: Rock, Paper or Scissors`);
        if(validateInput(playerInput)) {
            const result = playRound(playerInput, computerPlay());
            console.log(result);
            if(result.includes('Win')) {
                playerScore++;
            } else if (result.includes('Lose')) {
                compScore++;
            }
            console.log(playerScore);
            console.log(compScore);
        } else {
            alert("Invalid Entry Try Again")
            if(i >= 0) {
                i--;
            }
        }
    }
    
    finalScore = (playerScore > compScore) ? `${playerScore} : ${compScore} You Win!` 
                : playerScore === compScore ? `${playerScore} : ${compScore} Draw!` 
                : `${playerScore} : ${compScore} You Lose!`;

    console.log(finalScore);
    return finalScore;

    function computerPlay() {
        const rndm = Math.random() * 100;
        return rndm < 33.33 ? 'Rock' : (rndm < 66.66) ? 'Paper' : 'Scissors'
    };
    
    function playRound(playerSelection, computerSelection) {
        let result;
        const playerChoice = playerSelection.toLowerCase();
        switch(playerChoice) {
            case ("rock"):
                if (computerSelection === "Paper") {
                    result = "You Lose! Paper beats Rock"
                } else if(computerSelection === "Scissors"){
                    result = "You Win! Rock beats Scissors";
                } else {
                    result = "Draw! Rock Against Rock"
                }
                break;
                case "paper":
                if(computerSelection === "Rock"){
                    result = "You Win! Paper against Rock"
                } else if(computerSelection === "Scissors"){
                    result = "You Lose! Scissors beats Paper";
                } else {
                    result = "Draw! Paper Against Paper"
                }
                break;
                case "scissors":
                if(computerSelection === "Rock"){
                    result = "You Lose! Rock beats Scissors"
                } else if (computerSelection === "Paper") {
                    result = "You Win! Scissors beats Paper"
                } else {
                    result = "Draw! Scissor Against Scissors"
                }
                break;
        }
        return result;
    }

    function validateInput(input) {
        const validInputs = ["rock","paper","scissors"]
        if(validInputs.includes(input.toLowerCase())) {
            return true;
        } else {
            return false;
        }
    }
}

game();
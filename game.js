const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));

const computerPlay = () => {
    let computerHandValue = getRandomInt(3);
    if (computerHandValue === 0) {
        return 'Rock';
    } else if (computerHandValue === 1) {
        return 'Paper';
    } else if (computerHandValue === 2) {
        return 'Scissors';
    } else {
        return 'computerPlay Error';
    };
};

const playRound = (playerSelection) => {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerPlay().toLowerCase();
    if (playerSelection === 'rock' && computerSelection === 'paper') {
        return 2; //'You lose! His paper beats your rock';;
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return 1; //'You win! Your rock beats his scissors';
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return 1; //'You win! Your paper beats his rock';
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        return 2; //'You lose! His scissors beats your paper';
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        return 2; //'You lose! His rock beats your scissors';
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return 1; //'You win! Your scissors beats his paper';
    } else {
        return 0; //'Draw!';
    }
}

const game = () => {
    let gameScores = {
        playerScore: 0,
        computerScore: 0,
    };

    const printCurrentScore = () => {
        console.log(`Current score is ${gameScores.playerScore} : ${gameScores.computerScore}.`);
    };

    const printFinalScore = () => {
        console.log(`Final score is ${gameScores.playerScore} : ${gameScores.computerScore},`);
    };

    for (let roundNumber = 1; roundNumber <= 5; roundNumber += 1) {
        let playerHand = prompt(`[ROUND ${roundNumber}]
        Type Rock, Paper or Scissors to choose your hand!`);
        let roundResult = playRound(playerHand, computerHand);

        if (roundResult === 1) {
            gameScores.playerScore += 1;
            console.log('You win this round!');
            printCurrentScore();
        } else if (roundResult === 2) {
            gameScores.computerScore += 1;
            console.log('You lose this round...');
            printCurrentScore();
        } else {
            console.log('Draw!');
            printCurrentScore();
        };
    };
    
    if (gameScores.playerScore > gameScores.computerScore) {
        printFinalScore();
        console.log('You have won the game!');
    } else if (gameScores.playerScore < gameScores.computerScore) {
        printFinalScore();
        console.log('You have lost the game...');
    } else {
        printFinalScore();
        console.log(`It's a tie!`);
    }
};

const buttons = document.querySelectorAll('.select-hand');
buttons.forEach( button => {
    button.addEventListener('click', playRound())
})
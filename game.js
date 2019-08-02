let roundNumber = 0;

let roundInfoMessage = '';

let gameScores = {
    playerScore: 0,
    computerScore: 0
};

let winner = '';

const currentRound = document.querySelector('.round-number');
const scores = document.querySelector('.scores');
const finalResult = document.querySelector('.final-result');
const roundInfo = document.querySelector('.round-info');
const resetButton = document.querySelector('.reset-button');

const printCurrentRound = () => {
    currentRound.classList.remove('hidden');
    currentRound.textContent = `Round ${roundNumber}`;
}

const printRoundInfo = () => {
    roundInfo.classList.remove('hidden');
    roundInfo.textContent = roundInfoMessage;
}

const printScores = () => {
    scores.classList.remove('hidden');
    scores.textContent = `You ${gameScores.playerScore} : ${gameScores.computerScore} CPU`;
}

const printFinalResult =  () => {
    finalResult.classList.remove('hidden');
    finalResult.textContent = `${winner} Wins!`;
}

const showResetButton = () => {
    resetButton.classList.remove('hidden');
}

const resetGame = () => {
    roundNumber = 0;
    gameScores.computerScore = 0;
    gameScores.playerScore = 0;
    winner = '';
    currentRound.classList.add('hidden');
    roundInfo.classList.add('hidden');
    scores.classList.add('hidden');
    finalResult.classList.add('hidden');
    resetButton.classList.add('hidden');
}

const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));

const computerPlay = () => {
    let computerHandValue = getRandomInt(3);
    if (computerHandValue === 0) {
        return 'rock';
    } else if (computerHandValue === 1) {
        return 'paper';
    } else if (computerHandValue === 2) {
        return 'scissors';
    } else {
        return 'computerPlay Error';
    };
};

const playRound = (playerSelection) => {
    computerSelection = computerPlay();
    if (playerSelection === 'rock' && computerSelection === 'paper') {
        roundInfoMessage = 'You lose! His paper beats your rock';
        return 2;
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        roundInfoMessage = 'You win! Your rock beats his scissors';
        return 1;
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        roundInfoMessage = 'You win! Your paper beats his rock';
        return 1;
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        roundInfoMessage = 'You lose! His scissors beats your paper';
        return 2;
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        roundInfoMessage = 'You lose! His rock beats your scissors';
        return 2;
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        roundInfoMessage = 'You win! Your scissors beats his paper';
        return 1;
    } else {
        roundInfoMessage = 'Draw!';
        return 0;
    }
}

const startRound = (event) => {
    roundNumber += 1;
    showResetButton();
    if (winner !== '') {
        resetGame();
        return;
    }
    let roundResult = playRound(event.target.id);
    if (roundResult === 1) {
        gameScores.playerScore += 1;
        printCurrentRound();
        printRoundInfo();
        printScores();
    } else if (roundResult === 2) {
        gameScores.computerScore += 1;
        printCurrentRound();
        printRoundInfo();
        printScores();
    } else {
        printCurrentRound();
        printRoundInfo();
        printScores();
    };
    if (gameScores.playerScore == 5 && gameScores.computerScore < 5) {
        winner = "Player";
        printFinalResult();
    } else if (gameScores.computerScore == 5 && gameScores.playerScore < 5) {
        winner = "CPU";
        printFinalResult();
    } else if (gameScores.computerScore == 5 && gameScores.playerScore == 5) {
        winner = "Nobody"
        printFinalResult();
    }
};

const buttons = document.querySelectorAll('.select-hand');
buttons.forEach( button => {
    button.addEventListener('click', startRound);
});

resetButton.addEventListener('click', resetGame);
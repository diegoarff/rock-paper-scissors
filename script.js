const possibleChoices = {
	rock: { beats: 'scissors' },
	paper: { beats: 'rock' },
	scissors: { beats: 'paper' },
};

let userWins = 0;
let computerWins = 0;

function getComputerChoice() {
	const choices = Object.keys(possibleChoices);
	return choices[Math.floor(Math.random() * choices.length)];
}

function getUserChoice() {
	const userInput = prompt('Rock, Paper or Scissors?');
	if (userInput === null) {
		return null;
	}
	return userInput.toLowerCase();
}

function getRoundResult(userChoice, computerChoice) {
	if (userChoice === computerChoice) {
		return {
			message: "It's a tie!",
			color: 'orange',
		};
	}

	if (possibleChoices[userChoice].beats === computerChoice) {
		userWins++;
		return {
			message: `User wins. ${userChoice} beats ${computerChoice}.`,
			color: 'green',
		};
	}

	computerWins++;
	return {
		message: `Computer wins. ${userChoice} is defeated by ${computerChoice}.`,
		color: 'red',
	};
}

function displayChoices(userChoice, computerChoice) {
	console.log(
		`User choice: ${userChoice}\nComputer choice: ${computerChoice}`
	);
}

function displayResult(result) {
	const { message, color } = result;
	console.log(`%c${message}`, `color: ${color}; font-style: italic;`);
}

function playRound() {
	const userChoice = getUserChoice();
	const computerChoice = getComputerChoice();

	if (userChoice === null) {
		return;
	}

	const result = getRoundResult(userChoice, computerChoice);

	displayChoices(userChoice, computerChoice);
	displayResult(result);
}

function declareWinner() {
	if (userWins === computerWins) {
		return "It's a tie!";
	}

	if (userWins > computerWins) {
		return 'User wins the game!';
	}

	return 'Computer wins the game!';
}

function getWins() {
	return `User wins: ${userWins} | Computer wins: ${computerWins}`;
}

function game() {
	for (let i = 0; i < 5; i++) {
		console.log(
			`%cRound ${i + 1} of 5`,
			'font-size: 1.125em; font-weight: bold'
		);
		console.log(getWins());
		playRound();
	}

	console.log(`%c${getWins()}`, 'font-size: 1.25em; font-weight: bold;');
	console.log(`%c${declareWinner()}`, 'font-size: 1.5em; font-weight: bold;');
}

game();

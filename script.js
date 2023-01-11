const possibleChoices = {
	rock: { beats: 'scissors' },
	paper: { beats: 'rock' },
	scissors: { beats: 'paper' },
};

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

function getResult(userChoice, computerChoice) {
	if (userChoice === computerChoice) {
		return {
			message: "It's a tie!",
			color: 'orange',
		};
	}

	if (possibleChoices[userChoice].beats === computerChoice) {
		return {
			message: `User wins. ${userChoice} beats ${computerChoice}.`,
			color: 'green',
		};
	}

	return {
		message: `Computer wins. ${userChoice} is defeated by ${computerChoice}.`,
		color: 'red',
	};
}

function displayChoices(userChoice, computerChoice) {
	console.log('CHOICES:');
	console.log('%cYou chose: ' + userChoice, 'color: cyan');
	console.log('%cComputer chose: ' + computerChoice, 'color: pink');
}

function displayResult(result) {
	const { message, color } = result;
	console.log(
		`%c${message}`,
		`color: ${color}; background: white; font-style: italic;`
	);
}

function playRound() {
	const userChoice = getUserChoice();
	const computerChoice = getComputerChoice();

	if (userChoice === null) {
		return;
	}

	const result = getResult(userChoice, computerChoice);

	displayChoices(userChoice, computerChoice);
	displayResult(result);
}

playRound();

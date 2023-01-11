const possibleChoices = {
	rock: { weakTo: 'paper', strongTo: 'scissors' },
	paper: { weakTo: 'scissors', strongTo: 'rock' },
	scissors: { weakTo: 'rock', strongTo: 'paper' },
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

function displayChoices(userChoice, computerChoice) {
	console.log('%cYou chose: ' + userChoice, 'color: cyan');
	console.log('%cComputer chose: ' + computerChoice, 'color: pink');
}

var guesses = 10;
var wins = 0;
var losses = 0;
var lettersGuessed;
var choices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

// When user presses any button, trigger computer event
document.onkeyup = function(event) {
//Computer selects letter
	var userGuess = event.key;
	var chances = document.getElementById("chances");
	var guessed = document.getElementById("guessedLetters");
	
	var computerGuess = choices[Math.floor(Math.random() * choices.length)].toLocaleLowerCase();
	console.log(computerGuess);

//If user guesses correct letter, display "YOU GOT IT!"
	if (userGuess === computerGuess) {
		wins++;
		document.getElementById("wins").innerText = wins;
		alert("You won!");
	}
//If user guesses incorrect, take a life
	else {
		guesses--;
		chances.innerText = guesses;
		guessed.innerText += userGuess + ", ";
		if (guesses === 0) {
			alert("You lost!");
			losses++;
			document.getElementById("losses").innerText = losses;
			guesses = 10;
			chances.innerText = guesses;
		guessed.innerText = "";
		}
	}

}

//Creating an array that lists out the letters of the English alphabet.
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//Creating variables to hold the number of wins and losses. They start at 0.
var wins = 0;
var losses = 0;

//Creating a variable to hold the number of guesses at the start of the game. This will decrease each time the user guesses.
var guessesLeft = 14; 

//Creating variables that hold references to the places in the HTML where we want to display things.
var userPickText = document.getElementById("user-pick");
var computerPickText = document.getElementById("computer-pick");
var winsText = document.getElementById("wins-txt");
var lossesText = document.getElementById("losses-txt");
var guessesLeftText = document.getElementById("guesses-left-txt");

//This function is run whenever the user presses a key.
document.onkeyup = function(event) {
    //Determines which key was pressed.
    var userGuess = event.key;
    // console.log("your guess: " + userGuess);
    //Randomly chooses a choice from the computerChoices array. This is the computer's guess.
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    // console.log("computer's guess: " + computerGuess);
    //This logic determines the outcome of the game (win/loss), and incremments the appropriate number.
    if(userGuess === computerGuess){
        wins++;
        guessesLeft--;
    } else {
        losses++;
        guessesLeft--;
    } 

    if(guessesLeft == 0){
        guessesLeft = 14;
        wins = 0;
        losses = 0;
        computerGuess = "???";
        userGuess = " ";
    }

    //Display the user and computer guesses, wins/losses, and the number of guesses left.
    userPickText.textContent = userGuess;
    computerPickText.textContent = computerGuess;
    winsText.textContent = wins;
    lossesText.textContent = losses;
    guessesLeftText.textContent = guessesLeft;
}
// Generate a random number between 1 and 10
var rand = Math.floor((Math.random() * 10) + 1);

// Flag to control the game loop
var correctGuess = false;

// Use a while loop to keep prompting the user until they guess correctly
while (!correctGuess) {
    // Prompt the user for input
    var userInput = prompt("Guess a number between 1 and 10:");

    // Convert the user input to a number
    var userGuess = parseInt(userInput);

    // Check if the user's guess is correct
    if (userGuess === rand) {
        alert("Congratulations! You guessed the correct number.");
        correctGuess = true; // Set the flag to true to exit the loop
    } else {
        alert("Try again!"); // Notify the user that the guess was incorrect
    }
}

// End of the game

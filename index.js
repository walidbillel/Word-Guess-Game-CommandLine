// Using inquirer npm and the word.js file to build the game
var inquirer = require('inquirer')
var Word = require('./Word.js');

// Creating an array for our words
var hangManWordChoices = ["javascript", "node", "html", "css", "mysql", "jquery"];
// This is where the word object will be constructed from word.js
var wordConstructed;
// store the math random word in a variable
var wordUsedForGame;




// Function To Start The Game
function startGame() {
    // Randomly selecting a word from our array
    wordUsedForGame = hangManWordChoices[Math.floor(Math.random() * hangManWordChoices.length)];
    // creating a new word object with the random word
    wordConstructed = new Word(wordUsedForGame);
    // calling the renderWord function to push the letters into the word
    wordConstructed.renderWord();

    console.log("\n");
    console.log("Guess The Word. You have 7 chances to get it Right!!!");
    console.log(" Hint: The Words are computer Languages \n");

    // Displaying the dashes based on the word selected using the Word display function 
    // they will be dashes because the guessed is set to false
    console.log(wordConstructed.display());
    console.log("\n");

    // calling askLetters to run the game
    askLetters();


}



// Function To Ask The Letter from The user using inquirer.prompt
function askLetters() {


    inquirer.prompt([
        {
            type: "input",
            name: "userInputGuess",
            message: "What letter do you guess???"
        }
    ]).then(function (UserData) {


        // Passing in the user input as a parameter for the Word updateLetter Function to check if it's wrong or right
        wordConstructed.updateLetter(UserData.userInputGuess);

        // running display to switch whatever was guessed each time
        console.log(wordConstructed.display());

        // Guessed Wrong when the array length is not empty
        if (wordConstructed.wrongLetters.length > 0) {

            // logging the array of wrong letters
            console.log("wrong letters: " + wordConstructed.wrongLetters);
            console.log(" ");
            // logging the remainning guesses
            console.log("Remaining Guesses:  " + (7 - wordConstructed.wrongLetters.length));
        }

        // If the wrong letters array reaches 7 that means the 7 guesses are finish so the game is over
        if (wordConstructed.wrongLetters.length === 7) {

            console.log("You lost - the correct word was " + wordUsedForGame + ".");


        // If the wrong letters array reaches is less than 7 and the dashes in the word are still there we keep asking the letters
        } else if (wordConstructed.wrongLetters.length < 7 && wordConstructed.display().indexOf("_") != -1) {
            askLetters();
            // If the dashes are finished in the word that means the user guessed all letters So Winnn!!
        } else if (wordConstructed.display().indexOf("_") === -1){
            console.log("Great Job!!!! You Rock");
        }
    });


}

// Call our startGame function to start playing
startGame();
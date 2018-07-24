// Using inquirer npm and the word.js file to build the game
var inquirer = require('inquirer')
var Word = require('./Word.js');

// Creating an array for our words
var hangManWordChoices = ["javascript", "node", "html", "css", "mysql", "jquery"];
// This is where the word object will be constructed from word.js
var wordConstructed;
// store the math random word in a variable
var wordUsedForGame;



// function to start the game
function startGame() {
    // Randomly selecting a word from our array
    wordUsedForGame = hangManWordChoices[Math.floor(Math.random() * hangManWordChoices.length)];
    // creating a new word object with the random word
    wordConstructed = new Word(wordUsedForGame);
    // calling the renderWord function to push the letters into the word
    wordConstructed.renderWord();

    console.log(".....................");
    console.log("Guess The Word. You have 7 chances to get it Right!!!");
    console.log(" Hint: The Words are computer Languages \n");

    console.log(wordConstructed.display());
    askLetters();
    // console.log(wordConstructed);
}



function askLetters() {



    inquirer.prompt([
        {
            type: "input",
            name: "userInputGuess",
            message: "What letter do you guess???"
        }
    ]).then(function (UserData) {

        wordConstructed.updateLetter(UserData.userInputGuess);
    
        console.log(wordConstructed.display());

        if (wordConstructed.wrongLetters.length > 0) {
            console.log("wrong letters: " + wordConstructed.wrongLetters);
            console.log(" ");
        }


        if (wordConstructed.wrongLetters.length == 7) {
            console.log("You lost - the correct word was " + wordUsedForGame + ".");
        } else {
            if (wordConstructed.display().indexOf("_") != -1) {
                askLetters();
            } else {
                console.log("Great Job!!!! You Rock");
            }
        }
    });
}

startGame();
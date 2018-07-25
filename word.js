
// Letter Constrictor imported
var Letter = require("./letter.js");




// Word Constructor 
function Word(wordUsed) {

    // the word passed in 
    this.wordUsed = wordUsed;
    // Array That will hold the letters of the word
    this.lettersOfWordUsed = [];
    // Array that will hold the wrong letters guessed
    this.wrongLetters = [];

    // Function that will create the letters in the word using the Letter Constructor then push it to where it belongs
    this.renderWord = function () {
        for (var i = 0; i < this.wordUsed.length; i++) {
            var wordLetters = new Letter(this.wordUsed[i]);
            this.lettersOfWordUsed.push(wordLetters);
            
        
        }
    }

    // Function that will return a string containing either _ or the letter itself depending on what the user guessed and didnt guess
    this.display = function(){

        var stringWord = "";

        // We loop over the array then run the display function from the Letter Constructor
        for (var i=0; i < this.lettersOfWordUsed.length; i++){
            stringWord += this.lettersOfWordUsed[i].display();
        }
        return stringWord;
        
    }

    // Function that will check the user guesses
    this.updateLetter = function(userGuess) {
        // Set up wrongGuess to true
        var wrongGuess = true;

        // loop over the Array then check each character of letter with the user guess
        for (var i = 0; i < this.lettersOfWordUsed.length; i++) {
            // if it's a match set guess to true which will swap the dash with the letter guessed
            if(this.lettersOfWordUsed[i].character === userGuess) {
                this.lettersOfWordUsed[i].guessed = true;
                wrongGuess = false;
            }
        }
        // If the guess is wrong push it to where it belongs
        if (wrongGuess) {
            this.wrongLetters.push(userGuess);
        }
    }

};

// Import for main game index.js
module.exports = Word;
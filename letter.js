// Creating a Letter constructor 
function Letter(character) {

    // the paramter passed (character) 
    this.character = character;
    // We set guessed to false so we can change it later when it's guessed
    this.guessed = false;

    // Function that will display the character or _ based on the guessed
    this.display = function () {
        if (this.guessed) {
            return " " + this.character;
        } else {
            return " _ ";
        }
    }

}

// Importing the Letter so we can use it in building the Word constructor
module.exports = Letter;


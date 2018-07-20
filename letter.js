function Letter(keyEntered) {

    this.keyEntered = keyEntered;
    this.guessed = false;

    this.display = function () {
        if (this.guessed) {
            return this.letter;
        } else if (this.keyEntered === " ") {
            this.guessed = true;
        } else {
            return " _ ";
        }
    }
}





module.exports = Letter;


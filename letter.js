function Letter(character) {

    this.character = character;
    this.guessed = false;

    this.display = function () {
        if (this.guessed) {
            return " " + this.character;
        } else {
            return " _ ";
        }
    }

}

// var lettero = new Letter("s");

// console.log(lettero.display());




module.exports = Letter;


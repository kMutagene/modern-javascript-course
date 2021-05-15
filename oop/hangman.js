const Hangman = function (word, allowedGuesses, guesses) {
    this.word = word.split(""),
    this.allowedGuesses = allowedGuesses,
    this.guesses = guesses
}

Hangman.prototype.getPuzzle = function() {
    return this.word
        .map((character) => {
            if (this.guesses.includes(character)) {
                return character
            } else {
                return '*'
            }
        })
        .join("")
}

let game1 = new Hangman("soos", 2, ['s'])

console.log(game1.getPuzzle())

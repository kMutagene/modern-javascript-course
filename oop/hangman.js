const Hangman = function (word, allowedGuesses) {
    this.word = word,
    this.allowedGuesses = allowedGuesses
}

console.log(new Hangman("soos", 2))
console.log(new Hangman("saas", 2))
enum GameState {
    Lost,
    Won,
    InProgress
}

class HangmanGame {
    Word: string [];
    AllowedGuesses: number;
    UsedGuesses: number;
    RemainingGuesses: number;
    Guesses: string [];
    GameState: GameState;
    LastInput: string;

    constructor (word: string, allowedGuesses: number, guesses: string [] = []) {
        this.Word = word.toLowerCase().split(""),
        this.AllowedGuesses = allowedGuesses,
        this.UsedGuesses = 0
        this.RemainingGuesses = allowedGuesses
        this.Guesses = guesses
        this.GameState = GameState.InProgress
        this.LastInput = null
    }

    isUniqueGuess(character:string) {
        return !this.Guesses.includes(character.toLowerCase())
    }

    isBadGuess(character:string) {
        return !this.Word.includes(character.toLowerCase())
    }

    guess(character:string) {

        let isUniqueGuess = this.isUniqueGuess(character) 
        let isBadGuess = this.isBadGuess(character)
        if (this.RemainingGuesses > 0) {
            if (character.length === 1)  {
                if (isUniqueGuess && isBadGuess) {
                    this.UsedGuesses++
                    this.RemainingGuesses = this.AllowedGuesses - this.UsedGuesses
                    this.Guesses.push(character.toLowerCase())
                    this.LastInput = character
                    this.updateGameState()
                } else if (this.isUniqueGuess(character) && !this.isBadGuess(character)) {
                    this.Guesses.push(character.toLowerCase())
                    this.LastInput = character
                    this.updateGameState()
                } 
            } else {
                throw new Error("single character guesses only")
            }
        }
    }

    get puzzle() {
        return this.Word
            .map((character) => {
                if (this.Guesses.includes(character)) {
                    return character
                } else {
                    return '*'
                }
            })
    }

    updateGameState() {

        let isSolved = 
            this.Word
                .filter((character) => {
                    return !this.Guesses.includes(character)
                })
                .length === 0

        if (!(this.GameState === GameState.Lost)) {
            if (isSolved) {
                this.GameState = GameState.Won
            } else if (this.RemainingGuesses > 0) {
                this.GameState = GameState.InProgress
            } else {
                this.GameState = GameState.Lost
            }
        }
    }


}

export {
    GameState,
    HangmanGame
}
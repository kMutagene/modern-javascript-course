import { gameField,context } from "./app-components";

enum GameState {
    Lost,
    Won,
    InProgress
}

type Puzzle = {
    puzzle: string
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
                if (this.Guesses.includes(character) || character === " ") {
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
                    if (character === " ") {
                        return false
                    } else {
                        return !this.Guesses.includes(character)
                    }
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


const renderGame = (game:HangmanGame) => {

    gameField.innerHTML = ""
        game.Word
            .map((character) => {
                let span = document.createElement("span")
                span.className = "gameCharacter"
            
                if (game.Guesses.includes(character) || character === " ") {
                    span.innerHTML = character
                } else {
                    span.innerHTML = "*"
                }
                gameField.appendChild(span)
            })
    
        context.innerHTML = ""

    if (game.GameState === GameState.InProgress) {
        
        let guessesLeft = document.createElement("h1")
        guessesLeft.innerHTML = `${game.RemainingGuesses} guesses left.`
        context.appendChild(guessesLeft)

        let guesses = document.createElement("h2")
        guesses.className = "subtitle"
        guesses.innerHTML = "Your guesses so far:"
        context.appendChild(guesses)
    
        let guessList = document.createElement("ol")
        game.Guesses
            .map((guess) => {
                let li = document.createElement("li")
                if (game.isBadGuess(guess)) {
                    li.className = "guess is-bad-guess"
                } else {
                    li.className = "guess is-correct-guess"
                }
                li.innerHTML = guess
                guessList.appendChild(li)
            })
    
        context.appendChild(guessList)
    } else if (game.GameState === GameState.Won) {
        context.innerHTML = "You Win!"
        context.className = "game-win"
    } else {
        context.innerHTML = `You Loose =(. The word was: ${game.Word.join("")}`
        context.className = "game-loss"
    }
}

export {
    GameState,
    HangmanGame,
    Puzzle,
    renderGame
}
// primitive values: number, string, number, boolean, null, undefined

// Object prototype chain: myObject -> Object.prototype -> null
// Array: myArray -> Array.prototype -> Object.prototype -> null
// Function: myFunction -> Function.prototype -> Object.prototype -> null

// String: myString -> String{myString} -> String.prototype -> Object.prototype -> null
// Number: myNumber -> Number{myNumber} -> Number.prototype -> Object.prototype -> null
// Boolean: myBoolean -> Boolean{myBoolean} -> Boolean.prototype -> Object.prototype -> null

import { gameField,context } from "./app-components";
import { GameState, Puzzle, HangmanGame } from "./domain";

const request = new XMLHttpRequest()
request.open("GET", "http://puzzle.mead.io/puzzle")
request.send()
request.addEventListener("readystatechange", (e) => {
    let t = <XMLHttpRequest>(e.target)
    if (t.readyState === 4) {
        const data : Puzzle = JSON.parse(t.responseText)
        console.log(data)
    }
})

const game = new HangmanGame("hallo bruh", 10)

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

renderGame(game)
console.log(game.puzzle)
console.log(`Remaining guesses: ${game.RemainingGuesses}`)
console.log("Enter guess:")

window.addEventListener("keypress",(e) => {
    if (game.GameState === GameState.InProgress) {
        game.guess(e.key)
        renderGame(game)
    } else {
        renderGame(game)
    }
})
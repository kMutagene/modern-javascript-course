import { gameField,context } from "./app-components";
import { GameState, Puzzle, HangmanGame, renderGame } from "./domain";
import {getPuzzle} from "./requests"

getPuzzle((error, puzzle) => 
    error
    ? console.log(error)
    : console.log(puzzle)
)

const game = new HangmanGame("puzzle", 10)

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
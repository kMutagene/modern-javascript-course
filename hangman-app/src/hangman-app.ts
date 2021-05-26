import * as AppComponents from "./app-components" ;
import { GameState, Puzzle, HangmanGame, renderGame, newGame } from "./domain";
import { getPuzzle, getCountryDetails, whereAmI, getCurrentCountry} from "./requests"

let game: HangmanGame

const startNewGame = async () => {
    game = await newGame()
    renderGame(game)
}

AppComponents.resetBtn.addEventListener("click",startNewGame)

startNewGame()

window.addEventListener("keypress",(e) => {
    if (game.GameState === GameState.InProgress) {
        game.guess(e.key)
        renderGame(game)
    } else {
        renderGame(game)
    }
})

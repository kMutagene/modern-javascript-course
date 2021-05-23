import { gameField,context } from "./app-components";
import { GameState, Puzzle, HangmanGame, renderGame } from "./domain";

const getPuzzle = (callback: (error:string, puzzle: string) => any) => {
    const request = new XMLHttpRequest()
    request.open("GET", "http://puzzle.mead.io/puzzle?wordCount=3")
    request.send()
    request.addEventListener("readystatechange", (e) => {
        let t = <XMLHttpRequest>(e.target)
        if (t.readyState === 4 && t.status === 200) {
            const data : Puzzle = JSON.parse(t.responseText)
            callback(undefined, data.puzzle)
        } else if (t.readyState === 4) {
            callback("An error has occured.", undefined)
        }
    })
} 

export {
    getPuzzle
}
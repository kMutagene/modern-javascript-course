import { resolve } from "../webpack.config";
import { gameField,context } from "./app-components";
import { GameState, Puzzle, HangmanGame, renderGame } from "./domain";

const getPuzzle = (wordCount:number) => new Promise((resolve, reject) => {
    const request = new XMLHttpRequest()
    request.open("GET", `http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
    request.send()
    request.addEventListener("readystatechange", (e) => {
        let t = <XMLHttpRequest>(e.target)
        if (t.readyState === 4 && t.status === 200) {
            const data : Puzzle = JSON.parse(t.responseText)
            resolve(data.puzzle)
        } else if (t.readyState === 4) {
            reject("An error has occured.")
        }
    })
})
    


const getCountryDetails = (countryCode:string) => new Promise((resolve, reject) => {
    const request = new XMLHttpRequest()
    request.open("GET", "http://restcountries.eu/rest/v2/all")
    request.send()
    request.addEventListener("readystatechange", (e) => {
        let t = <XMLHttpRequest>(e.target)
        if (t.readyState === 4 && t.status === 200) {
            let data = JSON.parse(t.responseText)
            let myCountry = data.find((country:any) => {return country.alpha2Code === countryCode})
            resolve(myCountry)
        } else if (t.readyState === 4) {
            reject("An error has occured.")
        }
    })
}) 

export {
    getPuzzle,
    getCountryDetails
}
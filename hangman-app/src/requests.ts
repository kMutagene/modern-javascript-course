import { gameField,context } from "./app-components";
import { GameState, Puzzle, HangmanGame, renderGame } from "./domain";

const getPuzzle = (wordCount:number) => 
    fetch(`http://puzzle.mead.io/puzzle/?wordCount=${wordCount}`, {})
        .then((response) => {
            if (response.status === 200) {
                return response.json()
            } else {
                throw new Error("error fetching puzzle")
            }
        })
        .then((data) => data.puzzle)

const getCountryDetails = (countryCode:string) => 
    fetch("http://restcountries.eu/rest/v2/all")
        .then((response) => {
            if (response.status === 200) {
                return response.json()
            } else {
                throw new Error("error fetching puzzle")
            }
        })
        .then((data) => 
            data.find((country:any) => {return country.alpha2Code === countryCode})
        )

const whereAmI = (token:string) => 
    fetch(`http://ipinfo.io/json/?token=token`)
        .then((response) => {
            if (response.status === 200) {
                return response.json()
            } else {
                throw new Error("error fetching puzzle")
            }
        })
        .then((location) => 
            `you are (kinda) in ${location.city}, ${location.region}, ${location.country}`
        )

export {
    getPuzzle,
    getCountryDetails,
    whereAmI
}
import { gameField,context } from "./app-components";
import { GameState, Puzzle, HangmanGame, renderGame } from "./domain";

const getPuzzle = async (wordCount:number) => {
    const response = await fetch(`http://puzzle.mead.io/puzzle/?wordCount=${wordCount}`, {})
    if (response.status === 200) {
        const data = await response.json()
        return data.puzzle
    } else {
        throw new Error("error fetching puzzle")
    }
}

const getCountryDetails = async (countryCode:string) => {
    const response = await fetch("http://restcountries.eu/rest/v2/all")
    if (response.status === 200) {
        let data = await response.json()
        return data.find((country:any) => {return country.alpha2Code === countryCode})
    } else {
        throw new Error("error country info")
    }
}

const whereAmI = async (token:string) => {
    const response = await fetch(`http://ipinfo.io/json/?token=${token}`)
    if (response.status === 200) {
        let location = await response.json()
        console.log(`you are (kinda) in ${location.city}, ${location.region}, ${location.country}`)
        return location
    } else {
        throw new Error("error fetching ip info")
    }
}

const getCurrentCountry = async () => {
    let loc = await whereAmI("tokenPlox")
    let country = await getCountryDetails(loc.country)
    return country.name
}


export {
    getPuzzle,
    getCountryDetails,
    whereAmI,
    getCurrentCountry
}
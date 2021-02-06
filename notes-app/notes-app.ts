// DOM - Document Object Model

import {Note} from "./domain"

const myNotes : Note [] = [{
    Title: "My next trip",
    Body: "I would like to go to spain"
}, {
    Title: "habits to work on",
    Body: "excercise, eating a bit better"
}, {
    Title: "office modifications",
    Body: "Get a new seat"
}]

const ps = document.querySelectorAll("p")

ps.forEach((p) => p.textContent = "lel")

const newP = document.createElement("p")

newP.textContent = "sup b?"

document.querySelector("body")?.appendChild(newP)
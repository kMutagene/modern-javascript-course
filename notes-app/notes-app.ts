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

document.querySelector("button")?.addEventListener("click", (event) => {
    console.log(event)
    console.log("clicked")
})
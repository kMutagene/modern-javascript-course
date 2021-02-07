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

const addNoteBtn = document.querySelector("#add-note-btn")

addNoteBtn?.addEventListener("click",(event) => {
    console.log("adding note ...")
})

const removeAllNotesBtn = document.querySelector("#remove-all-notes-btn")

removeAllNotesBtn?.addEventListener("click", (event) => {
    document.querySelectorAll(".note").forEach((note) => {
        note.remove()
    })
})

const searchNoteText = document.querySelector("#search-note-text")

searchNoteText?.addEventListener("input",(event) => {
    console.log((<HTMLInputElement>event.currentTarget).value)
})
// DOM - Document Object Model

import {Note, Filters} from "./domain"

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

const filters : Filters = {
    SearchText: ""
}

const notesList = document.querySelector("#notes-list")

const renderNotes = (notes:Note[], filters:Filters) => {
    const filteredNotes = notes.filter((note) => {
        return note.Title.toLowerCase().includes(filters.SearchText.toLowerCase())
    })

    if (notesList) notesList.innerHTML = ""

    filteredNotes.map((note) =>{
        const noteElement = document.createElement("li")
        noteElement.className = "note"
        noteElement.textContent = note.Title
        notesList?.appendChild(noteElement)
    })
}

renderNotes(myNotes, filters)

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
    filters.SearchText = (<HTMLInputElement>event.currentTarget).value
    renderNotes(myNotes, filters)
})
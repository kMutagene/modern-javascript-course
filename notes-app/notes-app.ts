type Note = {
    Title: string,
    Body: string
}

type NoteFilters = {
    SearchText: string
}

const userJSON = (<string>localStorage.getItem("user"))

const user = JSON.parse(userJSON)

console.log(user)

type Sorting = | "edited" | "created" | "alphabetically"

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

const notefilters : NoteFilters = {
    SearchText: ""
}

const notesList = document.querySelector("#notes-list")

const renderNotes = (notes:Note[], notefilters:NoteFilters) => {
    const filteredNotes = notes.filter((note) => {
        return note.Title.toLowerCase().includes(notefilters.SearchText.toLowerCase())
    })

    if (notesList) notesList.innerHTML = ""

    filteredNotes.map((note) =>{
        const noteElement = document.createElement("li")
        noteElement.className = "note"
        noteElement.textContent = note.Title
        notesList?.appendChild(noteElement)
    })
}

renderNotes(myNotes, notefilters)

const addNoteBtn = document.querySelector("#add-note-btn")

addNoteBtn?.addEventListener("click",(event) => {
    console.log("adding note ...")
})

const searchNoteText = document.querySelector("#search-note-text")

searchNoteText?.addEventListener("input",(event) => {
    notefilters.SearchText = (<HTMLInputElement>event.currentTarget).value
    renderNotes(myNotes, notefilters)
})

const sortNotesSelect = document.querySelector("#sort-notes-select")

sortNotesSelect?.addEventListener("change", (e) => {
    let select = (<HTMLSelectElement>e.currentTarget)
    console.log(select.value)
})
type Note = {
    Title: string,
    Body: string
}

const createNote = (title:string,body:string) : Note => {
    return {
        Title: title,
        Body: body
    }
}

type NoteFilters = {
    SearchText: string
}

type Sorting = | "edited" | "created" | "alphabetically"

let myNotes : Note [] = []

const notesJSON = localStorage.getItem("myNotes")

if (notesJSON) {
    myNotes = JSON.parse(notesJSON)
}

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
        if (note.Title.length === 0) {note.Title = "unnamed note"}
        const noteElement = document.createElement("li")
        noteElement.className = "note"
        noteElement.textContent = note.Title
        notesList?.appendChild(noteElement)
    })
}


const addNoteBtn = document.querySelector("#add-note-btn")

addNoteBtn?.addEventListener("click",(event) => {
    let newNote = createNote("","")
    myNotes.push(newNote)
    localStorage.setItem("myNotes", (JSON.stringify(myNotes)))
    renderNotes(myNotes, notefilters)
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

renderNotes(myNotes, notefilters)
const myNotes : Note [] = getNotesFromLocalStorage()

const notefilters : NoteFilters = {
    SearchText: ""
}

const notesList = document.querySelector("#notes-list")

const addNoteBtn = document.querySelector("#add-note-btn")

addNoteBtn?.addEventListener("click",(event) => {
    let newNote = createNote("","")
    myNotes.push(newNote)
    saveNotesInLocalStorage(myNotes)
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
import * as Components from "./components"

type Note = {
    Title: string,
    Body: string
}
//create a note
const createNote = (title:string,body:string) : Note => {
    return {
        Title: title,
        Body: body
    }
}
// get saved notes from local storage or empty note array
const getNotesFromLocalStorage = () : Note [] => {
    const notesJSON = localStorage.getItem("myNotes")
    if (notesJSON) {
        return JSON.parse(notesJSON)
    } else {
        return []
    }
}
const saveNotesInLocalStorage = (notes:Note[]) => {
    localStorage.setItem("myNotes", (JSON.stringify(notes)))
}
// generate the DOM structure for a note
const generateNoteDOM = (note: Note) => {

    let block = document.createElement("div")
    block.className = "block"

    let card = document.createElement("div")
    card.className = "card note"

    let cardHeader = document.createElement("div")
    cardHeader.className = "card-header"
    
    let cardTitle = document.createElement("p")
    cardTitle.className = "card-header-title note-title"
    
    let cardFooter = document.createElement("footer")
    cardFooter.className = "card-footer"

    let deleteBtn = document.createElement("button")
    deleteBtn.className = "button is-inverted is-danger card-footer-item"
    deleteBtn.textContent = "Delete note"


    if (note.Title.length === 0) {
        cardTitle.textContent = "Unnamed Note"
    } else {
        cardTitle.textContent = note.Title
    }


    let cardContent = document.createElement("div")
    cardContent.className = "card-content"

    let content = document.createElement("div")
    content.className = "content"
    
    if (note.Body.length === 0) {
        content.textContent = "<no text found in note>"
    } else {
        content.textContent = note.Body
    }

    cardContent.appendChild(content)
    cardHeader.appendChild(cardTitle)
    cardFooter.appendChild(deleteBtn)
    card.appendChild(cardHeader)
    card.appendChild(cardContent)
    card.append(cardFooter)
    block.appendChild(card)

    return block
} 
// render application notes
const renderNotes = (notes:Note[], notefilters:NoteFilters) => {
    const filteredNotes = notes.filter((note) => {
        return note.Title.toLowerCase().includes(notefilters.SearchText.toLowerCase())
    })

    if (Components.notesList) Components.notesList.innerHTML = ""

    filteredNotes.map((note) =>{
        let noteCard = generateNoteDOM(note)
        Components.notesList?.appendChild(noteCard)
    })
}
type NoteFilters = {
    SearchText: string
}
type Sorting = | "edited" | "created" | "alphabetically"

export {
    Note,
    NoteFilters,
    Sorting,
    createNote,
    getNotesFromLocalStorage,
    saveNotesInLocalStorage,
    renderNotes
}
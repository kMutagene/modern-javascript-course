import * as Components from "./components"

type Note = {
    Id: string,
    Title: string,
    Body: string
}

type NoteFilters = {
    SearchText: string
}

type Sorting = | "edited" | "created" | "alphabetically"

//create a note
const createNote = (id:string,title:string,body:string) : Note => {
    return {
        Id: id,
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
const removeNote = (noteId: string, notes: Note []) => {
    let noteIndex = notes.findIndex((note) => {
        return note.Id = noteId
    })
    if (noteIndex > -1) {
        notes.splice(noteIndex, 1)
    }
}

// generate the DOM structure for a note
const generateNoteDOM = (note: Note, notes: Note [], filters: NoteFilters) => {

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
    deleteBtn.addEventListener("click",(e) => {
        removeNote(note.Id,notes)
        saveNotesInLocalStorage(notes)
        renderNotes(notes,filters)
    })


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
        let noteCard = generateNoteDOM(note, notes, notefilters)
        Components.notesList?.appendChild(noteCard)
    })
}

export {
    Note,
    NoteFilters,
    Sorting,
    createNote,
    getNotesFromLocalStorage,
    saveNotesInLocalStorage,
    renderNotes
}
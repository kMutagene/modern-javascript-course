import * as AppComponents from "./app-components"
import * as moment from 'moment'

type Note = {
    Id: string,
    Title: string,
    Body: string,
    CreatedAt: number,
    UpdatedAt: number
}

type NoteFilters = {
    SearchText: string
}

type Sorting = | "edited" | "created" | "alphabetically"

//create a note
const createNote = (
    id: string,
    title: string,
    body: string,
    created: number, 
    updated: number) : Note => {
        return {
            Id: id,
            Title: title,
            Body: body,
            CreatedAt: created,
            UpdatedAt: updated
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

const getNoteIndexById = (noteId: string, notes: Note []) => {
    let index = notes.findIndex((note) => {
        return note.Id === noteId
    })
    return index
}

const removeNoteById = (noteId: string, notes: Note []) => {
    let noteIndex = getNoteIndexById(noteId,notes)
    if (noteIndex > -1) {
        notes.splice(noteIndex, 1)
    }
}

const getNoteById = (noteId: string, notes: Note []) => {
    let noteIndex = getNoteIndexById(noteId,notes)
    if (noteIndex > -1) {
        return notes[noteIndex]
    } else {
        return undefined
    }
}

const getLastEditedText = (note:Note) => {
    return `Last edited ${moment(note.UpdatedAt).fromNow()}`
}

// generate the DOM structure for a note
const generateNoteDOM = (note: Note, notes: Note [], filters: NoteFilters) => {

    let block = document.createElement("div")
    block.className = "block pt-4"

    let card = document.createElement("div")
    card.className = "card note"

    let cardHeader = document.createElement("div")
    cardHeader.className = "card-header"
    
    let cardTitle = document.createElement("a")
    cardTitle.className = "card-header-title note-title"
    cardTitle.href = `/edit-note.html#${note.Id}`

    let cardFooter = document.createElement("footer")
    cardFooter.className = "card-footer"

    let updatedSpan = document.createElement("span")
    updatedSpan.className = "is-size-7 has-text-weight-light is-italic"
    updatedSpan.textContent = getLastEditedText(note) 

    let deleteBtn = document.createElement("button")
    deleteBtn.className = "button is-inverted is-danger card-footer-item"
    deleteBtn.textContent = "Delete note"
    deleteBtn.addEventListener("click",(e) => {
        removeNoteById(note.Id,notes)
        saveNotesInLocalStorage(notes)
        renderNotes(notes,filters)
    })

    let editBtn = document.createElement("a")
    editBtn.className = "button is-inverted is-info card-footer-item"
    editBtn.textContent = "Edit note"
    editBtn.href = `/edit-note.html#${note.Id}`

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
    cardContent.appendChild(updatedSpan)
    cardHeader.appendChild(cardTitle)
    cardFooter.appendChild(deleteBtn)
    cardFooter.appendChild(editBtn)
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

    if (AppComponents.notesList) AppComponents.notesList.innerHTML = ""

    filteredNotes.map((note) =>{
        let noteCard = generateNoteDOM(note, notes, notefilters)
        AppComponents.notesList?.appendChild(noteCard)
    })
}

export {
    Note,
    NoteFilters,
    Sorting,
    createNote,
    getNotesFromLocalStorage,
    saveNotesInLocalStorage,
    renderNotes,
    removeNoteById,
    getNoteById,
    getNoteIndexById,
    getLastEditedText
}
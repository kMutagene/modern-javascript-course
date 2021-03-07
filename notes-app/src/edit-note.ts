import * as Domain from "./domain"
import type {Note, NoteFilters, Sorting} from "./domain"
import {v4} from "uuid"
import * as EditNoteComponents from "./edit-note-components"

const noteID = (location.hash.substring(1))

const allNotes = Domain.getNotesFromLocalStorage()

const noteOfInterest = Domain.getNoteById(noteID,allNotes)

const populateInputs = (note:Note) => {
    let titleElem =  <HTMLTextAreaElement>(EditNoteComponents.editNoteTitleTextarea) 
    let bodyElem = <HTMLTextAreaElement>(EditNoteComponents.editNoteBodyTextarea)

    titleElem.value = note.Title
    bodyElem.value = note.Body
}

let updateNoteOfInterest = (note:Note, allNotes:Note []) => {
    let noteIndex = Domain.getNoteIndexById(note.Id, allNotes)
    if (noteIndex > -1) {
        console.log ("performing update")
        allNotes[noteIndex] = note
    } else {
        console.log("note not found")
    }
}

const renderEditNotePage = (noteOfInterest:Note) => {
    if (noteOfInterest) {
        console.log(noteOfInterest)
        populateInputs(noteOfInterest)
    } else {
        location.assign("/index.html")
    }
} 

EditNoteComponents.editNoteTitleTextarea?.addEventListener("change",(e) => {
    let titleElem =  <HTMLTextAreaElement>(e.currentTarget) 
    noteOfInterest.Title = titleElem.value
})

EditNoteComponents.editNoteBodyTextarea?.addEventListener("change",(e) => {
    let bodyElem =  <HTMLTextAreaElement>(e.currentTarget) 
    noteOfInterest.Body = bodyElem.value
})

EditNoteComponents.UpdateNoteBtn?.addEventListener("click",(e) => {
    console.log(noteOfInterest)
    updateNoteOfInterest(noteOfInterest, allNotes)
    Domain.saveNotesInLocalStorage(allNotes)
    location.assign("/index.html")
})

EditNoteComponents.DeleteNoteBtn?.addEventListener("click",(e) => {
    Domain.removeNoteById(noteOfInterest.Id, allNotes)
    Domain.saveNotesInLocalStorage(allNotes)
    location.assign("/index.html")
})

renderEditNotePage(noteOfInterest)
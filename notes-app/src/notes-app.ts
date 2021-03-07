import * as Domain from "./domain"
import type {Note, NoteFilters, Sorting} from "./domain"

import {v4} from "uuid"

import * as AppComponents from "./app-components"

const myNotes : Note [] = Domain.getNotesFromLocalStorage()

const notefilters : NoteFilters = {
    SearchText: ""
}

AppComponents.addNoteBtn?.addEventListener("click",(event) => {
    let newNote = Domain.createNote(v4(),"","")
    myNotes.push(newNote)
    Domain.saveNotesInLocalStorage(myNotes)
    location.assign(`/edit-note.html#${newNote.Id}`)
})


AppComponents.searchNoteText?.addEventListener("input",(event) => {
    notefilters.SearchText = (<HTMLInputElement>event.currentTarget).value
    Domain.renderNotes(myNotes, notefilters)
})

AppComponents.sortNotesSelect?.addEventListener("change", (e) => {
    let select = (<HTMLSelectElement>e.currentTarget)
    console.log(select.value)
})

Domain.renderNotes(myNotes, notefilters)
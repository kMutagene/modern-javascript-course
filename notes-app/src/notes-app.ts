import * as Domain from "./domain"
import type {Note, NoteFilters, Sorting} from "./domain"

import {v4} from "uuid"

import * as AppComponents from "./app-components"
import * as moment from "moment"

let allNotes : Note [] = Domain.getNotesFromLocalStorage()

const notefilters : NoteFilters = {
    SearchText: ""
}

AppComponents.addNoteBtn?.addEventListener("click",(event) => {
    let timestamp = moment().valueOf()
    let newNote = Domain.createNote(v4(),"","",timestamp,timestamp)
    allNotes.push(newNote)
    Domain.saveNotesInLocalStorage(allNotes)
    location.assign(`/edit-note.html#${newNote.Id}`)
})


AppComponents.searchNoteText?.addEventListener("input",(event) => {
    notefilters.SearchText = (<HTMLInputElement>event.currentTarget).value
    Domain.renderNotes(allNotes, notefilters)
})

AppComponents.sortNotesSelect?.addEventListener("change", (e) => {
    let select = (<HTMLSelectElement>e.currentTarget)
    console.log(select.value)
})

window.addEventListener("storage", (e) => {
    if (e.key === "myNotes") {
        allNotes = JSON.parse(e.newValue)
        Domain.renderNotes(allNotes, notefilters)
    }
})

Domain.renderNotes(allNotes, notefilters)
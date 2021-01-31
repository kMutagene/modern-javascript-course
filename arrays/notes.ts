type Note = {
    Title: string,
    Body:string
}

const notes : Note []= [{
    Title: "My next trip",
    Body: "I would like to go to spain"
}, {
    Title: "habits to work on",
    Body: "excercise, eating a bit better"
}, {
    Title: "office modifications",
    Body: "Get a new seat"
}]

const findNote = function (notes:Note[], title:string) {
    return notes.find(function(note, _) {
        return note.Title.toLowerCase() === title.toLowerCase()
    })
}

console.log(findNote(notes,"My next trip"))

const findNotes = function(notes:Note[], query:string) {
    return notes.filter(function(note,index) {
        const isTitleMatch =
            note.Title
                .toLowerCase()
                .includes(query)
        const isBodyMatch =
            note.Body
                .toLowerCase()
                .includes(query)
        return isTitleMatch || isBodyMatch
    })
}

console.log(findNotes(notes,"work"))


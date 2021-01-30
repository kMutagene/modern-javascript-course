const notes = [{
    title: "My next trip",
    body: "I would like to go to spain"
}, {
    title: "habits to work on",
    body: "excercise, eating a bit better"
}, {
    title: "office modifications",
    body: "Get a new seat"
}]

const findNote = function (notes, title) {
    return notes.find(function(note, _) {
        return note.title.toLowerCase() === title.toLowerCase()
    })
}

console.log(findNote(notes,"My next trip"))

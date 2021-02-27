"use strict";
// type Note = {
//     Title: string,
//     Body:string
// }
// const myNotes : Note [] = [{
//     Title: "My next trip",
//     Body: "I would like to go to spain"
// }, {
//     Title: "habits to work on",
//     Body: "excercise, eating a bit better"
// }, {
//     Title: "office modifications",
//     Body: "Get a new seat"
// }]
// const sortNotes = function (notes:Note[]) {
//     notes.sort(function (note1, note2) {
//         if (note1.Title.toLowerCase() < note2.Title.toLowerCase() ) {
//             return -1
//         } else if (note2.Title.toLowerCase() < note1.Title.toLowerCase()) {
//             return 1
//         } else {
//             return 0
//         }
//     })
// }
// const findNote = function (notes:Note[], title:string) {
//     return notes.find(function(note, _) {
//         return note.Title.toLowerCase() === title.toLowerCase()
//     })
// }
// const findNotes = function(notes:Note[], query:string) {
//     return notes.filter(function(note,index) {
//         const isTitleMatch =
//             note.Title
//                 .toLowerCase()
//                 .includes(query)
//         const isBodyMatch =
//             note.Body
//                 .toLowerCase()
//                 .includes(query)
//         return isTitleMatch || isBodyMatch
//     })
// }
// sortNotes(myNotes)
// console.log(myNotes)

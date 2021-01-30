// 1. convert to object array with text and completed properties
// create function to remove todo by text

type ToDo = {
    Text:       string,
    Completed:  boolean
}

const myToDos : ToDo [] = [{
    Text: "Learn some JS fundamentals",
    Completed: false
},{
    Text: "ALWAYS use the commas for JS arrays",
    Completed: false
},{
    Text: "Remember that JS does not seem to have meaningfull whitespace",
    Completed: false
},{
    Text: "use const more",
    Completed: false
},{
    Text: "Forget F# for learning JS fundamentals",
    Completed: false
}]

const deleteToDoByText = function (text: string, toDos: ToDo [] ) {
    let index = toDos.findIndex(function(toDo,_){
        return toDo.Text.toLowerCase() === text.toLowerCase()
    })
    if (index >= 0) {
        toDos.splice(index,1)
    }
}

console.log(myToDos)

deleteToDoByText("Forget F# for learning JS fundamentals",myToDos)

console.log(myToDos)
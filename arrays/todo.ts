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
    Completed: true
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

const getThingsToDo = function (toDos:ToDo[]) {
    return toDos.filter((todo,_) => {
        return todo.Completed
    })
}

console.log(getThingsToDo(myToDos))
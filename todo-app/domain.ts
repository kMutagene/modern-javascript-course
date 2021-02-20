type ToDo = {
    Text:       string,
    Completed:  boolean
}

const createToDo = (text:string) : ToDo => {
    return {
        Text: text,
        Completed: false
    }
}

// return locally saved ToDo array if present, else return an empty array
let getToDosFromLocalStorage = () : ToDo [] => {
    let toDosJSON = localStorage.getItem("myToDos")
    if (toDosJSON) {
        return JSON.parse(toDosJSON)
    } else {
        return []
    }
}

// Save ToDo array in local storage
let saveToDosInLocalStorage = (toDos: ToDo[]) => {
    let toDosJSON = JSON.stringify(toDos)
    localStorage.setItem("myToDos", toDosJSON)
}

// Returns the amount of uncompleted todos in the given ToDo array
const getAmountOfTodosLeft = (toDos: ToDo[]) => {
    const filteredTodos =
        toDos.filter((todo) => {
            return !todo.Completed
        })
    return filteredTodos.length
}

const createToDoDOM = (toDo:ToDo) => {
    let row = document.createElement("tr")

    let text = document.createElement("td")
    text.textContent = toDo.Text

    let completed = document.createElement("td")

    let toDoCheckBox = document.createElement("input")
    toDoCheckBox.type = "checkbox"
    toDoCheckBox.checked = toDo.Completed

    completed.appendChild(toDoCheckBox)
    row.appendChild(completed)
    row.appendChild(text)

    return row
} 

const generateSummaryDOM = (toDos:ToDo[]) => {
    let amnt = getAmountOfTodosLeft(toDos);
    let header = document.createElement("h2")
    header.textContent = `you have ${amnt} things left to do.`
    return header
}


// render application ToDos based on current filters
const renderTodos = (toDos: ToDo[], toDoFilters: ToDoFilters) => {

    const filteredTodos =
        toDos
            .filter((todo) => {
                debugger
                return todo.Text.toLowerCase().includes(toDoFilters.SearchText.toLowerCase())
            })
            .filter((toDo) => {
                debugger
                if (toDo.Completed) {
                    return (toDo.Completed && toDoFilters.ShowCompleted) 
                } else {
                    return true
                }
            })
    
    console.log(filteredTodos)

    // clear current display data
    if (toDosTable) toDosTable.innerHTML = ""
    if (tableInfo) tableInfo.innerHTML = ""
        
    tableInfo?.appendChild(generateSummaryDOM(toDos))

    filteredTodos.map((toDo) => {
        let newToDo = createToDoDOM(toDo)
        console.log(newToDo)
        toDosTable?.appendChild(newToDo)
    })
}

const initApp = (toDos: ToDo[], filters: ToDoFilters) => {
    getToDosFromLocalStorage()
    renderTodos(toDos,filters)
}


type ToDoFilters = {
    SearchText: string,
    ShowCompleted: boolean
}
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

const updateSummaryDOM = (toDos:ToDo[]) => {
    let amnt = getAmountOfTodosLeft(toDos);
    (<Element>todoAmountDisplay).textContent = `you have ${amnt} things left to do.`
}


// render application ToDos based on current filters
const renderTodos = (toDos: ToDo[], toDoFilters: ToDoFilters) => {
    
    updateSummaryDOM(toDos)
    
    const filteredTodos =
        toDos
            .filter((todo) => {
                return todo.Text.toLowerCase().includes(toDoFilters.SearchText.toLowerCase())
            })
            .filter((toDo) => {
                if (toDo.Completed) {
                    return (toDo.Completed && toDoFilters.ShowCompleted) 
                } else {
                    return true
                }
            })
    
    console.log(filteredTodos)

    // clear current dispaly
    if (toDosTable) toDosTable.innerHTML = ""
        

    filteredTodos.map((toDo) => {
        let newToDo = createToDoDOM(toDo)
        console.log(newToDo)
        toDosTable?.appendChild(newToDo)
    })
}

const initApp = (toDos: ToDo[], filters: ToDoFilters) => {
    getToDosFromLocalStorage()
    updateSummaryDOM(toDos)
    renderTodos(toDos,filters)
}


type ToDoFilters = {
    SearchText: string,
    ShowCompleted: boolean
}
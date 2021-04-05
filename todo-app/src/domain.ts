import {tableInfo, toDosTable} from "./components"

type ToDo = {
    Id:         string,
    Text:       string,
    Completed:  boolean
}

const createToDo = (id:string,text:string) : ToDo => {
    return {
        Id: id,
        Text: text,
        Completed: false
    }
}

// return locally saved ToDo array if present, else return an empty array
const getToDosFromLocalStorage = () : ToDo [] => {
    let toDosJSON = localStorage.getItem("myToDos")
    return toDosJSON 
        ? JSON.parse(toDosJSON) 
        : []
}


// Save ToDo array in local storage
const saveToDosInLocalStorage = (toDos: ToDo[]) => {
    let toDosJSON = JSON.stringify(toDos)
    localStorage.setItem("myToDos", toDosJSON)
}

const deleteToDo = (toDo: ToDo, toDos: ToDo []) => {
    let deleteIndex = toDos.findIndex((t) => t.Id = toDo.Id)
    if (deleteIndex > -1) {
        toDos.splice(deleteIndex,1)
    }
}

const changeTodoCompletedState = (toDo: ToDo, completedState:boolean, allToDos:ToDo[]) => {
    toDo.Completed = completedState
    let toDoIndex = allToDos.findIndex((t) => t.Id = toDo.Id)
    if (toDoIndex > -1) {allToDos[toDoIndex] = toDo}
}

// Returns the amount of uncompleted todos in the given ToDo array
const getAmountOfTodosLeft = (toDos: ToDo[]) => {
    const filteredTodos = toDos.filter((todo) => !todo.Completed)
    return filteredTodos.length
}

const createToDoDOM = (toDo:ToDo, allToDos: ToDo [], filters: ToDoFilters) => {
    let row = document.createElement("tr")

    let textTd = document.createElement("td")
    textTd.textContent = toDo.Text

    let completedTd = document.createElement("td")

    let toDoCheckBox = document.createElement("input")
    toDoCheckBox.type = "checkbox"
    toDoCheckBox.checked = toDo.Completed
    toDoCheckBox.addEventListener("change", (e) => {
        let checkbox = (<HTMLInputElement>(e.currentTarget))
        let checkedState = checkbox.checked
        changeTodoCompletedState(toDo,checkedState,allToDos)
        saveToDosInLocalStorage(allToDos)
        renderTodos(allToDos, filters)
    })

    let deleteTd = document.createElement("td")

    let deleteBtn = document.createElement("button")
    deleteBtn.textContent = "Delete"
    deleteBtn.className = "button is-danger is-inverted"
    deleteBtn.addEventListener("click",(e) => {
        deleteToDo(toDo, allToDos)
        saveToDosInLocalStorage(allToDos)
        renderTodos(allToDos, filters)
    })

    
    completedTd.appendChild(toDoCheckBox)
    row.appendChild(completedTd)
    row.appendChild(textTd)
    deleteTd.appendChild(deleteBtn)
    row.appendChild(deleteTd)

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
                return todo.Text.toLowerCase().includes(toDoFilters.SearchText.toLowerCase())
            })
            .filter((toDo) => {
                return toDo.Completed
                    ? (toDo.Completed && toDoFilters.ShowCompleted) 
                    : true
            })
    
    console.log(filteredTodos)

    // clear current display data
    if (toDosTable) toDosTable.innerHTML = ""
    if (tableInfo) tableInfo.innerHTML = ""
        
    tableInfo?.appendChild(generateSummaryDOM(toDos))

    filteredTodos.map((toDo) => {
        let newToDo = createToDoDOM(toDo, toDos, toDoFilters)
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

export {
    ToDo,
    ToDoFilters,
    createToDo,
    createToDoDOM,
    generateSummaryDOM,
    getAmountOfTodosLeft,
    getToDosFromLocalStorage,
    initApp,
    renderTodos,
    saveToDosInLocalStorage
}
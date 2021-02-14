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

type ToDoFilters = {
    SearchText: string,
    ShowCompleted: boolean
}

let myToDos : ToDo [] = []

let getToDosFromLocalStorage = () => {
    let toDosJSON = localStorage.getItem("myToDos")
    if (toDosJSON) {
        myToDos = JSON.parse(toDosJSON)
    }
}

let setToDosInLocalStorage = () => {
    let toDosJSON = JSON.stringify(myToDos)
    localStorage.setItem("myToDos", toDosJSON)
}

const toDoFilters : ToDoFilters= {
    SearchText: "",
    ShowCompleted: true
}

const todosList = document.querySelector("#todos-list")
const todoAmountDisplay = document.querySelector("#todo-amount-display")
const todoFilterInput = document.querySelector("#todo-filter-input")
const todoForm = document.querySelector("#todo-form")
const newToDoInput = document.querySelector("#new-todo-input")
const completedFilterCheckbox = document.querySelector("#completed-filter-checkbox")

const getAmountOfTodosLeft = (toDos: ToDo[]) => {
    const filteredTodos =
        toDos.filter((todo) => {
            return !todo.Completed
        })
    return filteredTodos.length
}

const renderTodos = (toDos: ToDo[], toDoFilters: ToDoFilters) => {
    
    (<Element>todoAmountDisplay).textContent = `you have ${getAmountOfTodosLeft(myToDos)} things left to do.`
    
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
    
    if (todosList) todosList.innerHTML = ""

    filteredTodos.map((todo) => {
        const newToDo = document.createElement("li")
        newToDo.className = "ToDoItem"
        newToDo.textContent = todo.Text
        todosList?.appendChild(newToDo)
    })
}

// ToDo filter based on todo text
todoFilterInput?.addEventListener("input", (e) => {
    toDoFilters.SearchText = (<HTMLInputElement>e.target).value
    renderTodos(myToDos, toDoFilters)
})

// Add a new todo
todoForm?.addEventListener("submit", (e) => {
    e.preventDefault()
    let form = (<HTMLFormElement>e.currentTarget)
    let input = (<HTMLInputElement>newToDoInput)
    let newToDo = createToDo(form.todoText.value)
    myToDos.push(newToDo)
    setToDosInLocalStorage()
    renderTodos(myToDos,toDoFilters)
    input.value = ""
})

completedFilterCheckbox?.addEventListener("change", (e) =>{
    let checkbox = (<HTMLInputElement>(e.currentTarget))
    toDoFilters.ShowCompleted = checkbox.checked
    renderTodos(myToDos,toDoFilters)
})

const initApp = () => {
    getToDosFromLocalStorage()
    renderTodos(myToDos,toDoFilters)
}

initApp()
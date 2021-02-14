const myToDos : ToDo [] = getToDosFromLocalStorage()

const toDoFilters : ToDoFilters= {
    SearchText: "",
    ShowCompleted: true
}

const toDosTable = document.querySelector("#todos-table")
const tableInfo = document.querySelector("#table-info")
const todoFilterInput = document.querySelector("#todo-filter-input")
const todoForm = document.querySelector("#todo-form")
const newToDoInput = document.querySelector("#new-todo-input")
const completedFilterCheckbox = document.querySelector("#completed-filter-checkbox")

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
    saveToDosInLocalStorage(myToDos)
    renderTodos(myToDos,toDoFilters)
    input.value = ""
})

completedFilterCheckbox?.addEventListener("change", (e) =>{
    let checkbox = (<HTMLInputElement>(e.currentTarget))
    toDoFilters.ShowCompleted = checkbox.checked
    renderTodos(myToDos,toDoFilters)
})

initApp(myToDos,toDoFilters)
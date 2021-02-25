import * as Domain from "./domain"
import * as Components from "./components"
import type {ToDo, ToDoFilters} from "./domain"

const myToDos : ToDo [] = Domain.getToDosFromLocalStorage()

const toDoFilters : ToDoFilters= {
    SearchText: "",
    ShowCompleted: true
}

// ToDo filter based on todo text
Components.todoFilterInput?.addEventListener("input", (e) => {
    toDoFilters.SearchText = (<HTMLInputElement>e.target).value
    renderTodos(myToDos, toDoFilters)
})

// Add a new todo
Components.todoForm?.addEventListener("submit", (e) => {
    e.preventDefault()
    let form = (<HTMLFormElement>e.currentTarget)
    let input = (<HTMLInputElement>Components.newToDoInput)
    let newToDo = Domain.createToDo(form.todoText.value)
    myToDos.push(newToDo)
    Domain.saveToDosInLocalStorage(myToDos)
    Domain.renderTodos(myToDos,toDoFilters)
    input.value = ""
})

Components.completedFilterCheckbox?.addEventListener("change", (e) =>{
    let checkbox = (<HTMLInputElement>(e.currentTarget))
    toDoFilters.ShowCompleted = checkbox.checked
    Domain.renderTodos(myToDos,toDoFilters)
})

Domain.initApp(myToDos,toDoFilters)
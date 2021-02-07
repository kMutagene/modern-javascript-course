import {ToDo, Filters} from "./domain"

const myToDos : ToDo [] = [{
    Text: "Learn some JS fundamentals",
    Completed: false
},{
    Text: "ALWAYS use the commas for JS arrays",
    Completed: false
},{
    Text: "Remember that JS does not seem to have meaningfull whitespace",
    Completed: true
},{
    Text: "use const more",
    Completed: true
},{
    Text: "Forget F# for learning JS fundamentals",
    Completed: false
}]

const filters : Filters= {
    SearchText: ""
}

const todosList = document.querySelector("#todos-list")
const todoAmountDisplay = document.querySelector("#todo-amount-display")
const addTodoBtn = document.querySelector("#add-todo-btn")
const todoFilterInput = document.querySelector("#todo-filter-input")
const newTodoInput = document.querySelector("#new-todo-input")

const getAmountOfTodosLeft = (toDos: ToDo[]) => {
    const filteredTodos =
        toDos.filter((todo) => {
            return !todo.Completed
        })
    return filteredTodos.length
}

const renderTodos = (toDos: ToDo[], filters: Filters) => {
    
    (<Element>todoAmountDisplay).textContent = `you have ${getAmountOfTodosLeft(myToDos)} things left to do.`
    
    const filteredTodos =
        toDos.filter((todo) => {
            return todo.Text.toLowerCase().includes(filters.SearchText.toLowerCase())
        })
    
    if (todosList) todosList.innerHTML = ""

    filteredTodos.map((todo) => {
        const newToDo = document.createElement("li")
        newToDo.className = "ToDoItem"
        newToDo.textContent = todo.Text
        todosList?.appendChild(newToDo)
    })
}

addTodoBtn?.addEventListener("click",(event) => {
    console.log ("Adding to do ...")
})

newTodoInput?.addEventListener("input",(event) => {
    console.log((<HTMLInputElement>event.target).value)
})

todoFilterInput?.addEventListener("input", (e) => {
    filters.SearchText = (<HTMLInputElement>e.target).value
    renderTodos(myToDos, filters)
})

renderTodos(myToDos,filters)
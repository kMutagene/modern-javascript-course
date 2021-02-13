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
    SearchText: string
}

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

const toDoFilters : ToDoFilters= {
    SearchText: ""
}

const todosList = document.querySelector("#todos-list")
const todoAmountDisplay = document.querySelector("#todo-amount-display")
const todoFilterInput = document.querySelector("#todo-filter-input")
const todoForm = document.querySelector("#todo-form")
const newToDoInput = document.querySelector("#new-todo-input")

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
        toDos.filter((todo) => {
            return todo.Text.toLowerCase().includes(toDoFilters.SearchText.toLowerCase())
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
    renderTodos(myToDos,toDoFilters)
    input.value = ""
})

//first render step with preset todos and no filters
renderTodos(myToDos,toDoFilters)


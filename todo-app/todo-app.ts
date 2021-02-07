import {ToDo} from "./domain"

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

// todos left (p element)

// add p for each todo above (from text property)

const todosSection = document.getElementById("todos")

const toDosLeft =
    myToDos
    .filter((toDo) => {
        return !toDo.Completed
    })

const h = document.createElement("h2")
h.className = "subtitle"
h.textContent = `You have ${toDosLeft.length} things to do`
todosSection?.appendChild(h)

myToDos.map((toDo) => {
    const p = document.createElement("p")
    p.textContent = toDo.Text
    todosSection?.appendChild(p)
})

const addTodoBtn = document.querySelector("#add-todo-btn")

addTodoBtn?.addEventListener("click",(event) => {
    console.log ("Adding to do ...")
})

const newTodoInput = document.querySelector("#new-todo-input")

newTodoInput?.addEventListener("input",(event) => {
    console.log((<HTMLInputElement>event.target).value)
})
// create an array with 5 todos
// print msg with length
// print first and second to last

const todos = [
    "Learn some JS fundamentals",
    "ALWAYS use the commas for JS arrays",
    "Remember that JS does not seem to have meaningfull whitespace",
    "use const more",
    "Forget F# for learning JS fundamentals"
]

todos.forEach(todo =>
    console.log(`You have to: ${todo}`)
)

console.log(todos)

// delete third item
// add new item to the end
// remove first item

todos.splice(2,1)

todos.push("remember: array.push adds an element to the end.")

todos.shift()

console.log(todos)

todos.forEach(todo =>
    console.log(`You have to: ${todo}`)
)
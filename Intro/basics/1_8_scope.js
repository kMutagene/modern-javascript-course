// Lexical scope (static scope)
// Global scope - defined outside all code blocks {}
// Local scope- defined inside the respective code blocks {}

// In a scope you can access variables in the same scope or any parent/ancestor scopes

let var1 = 'var1' // var1 is global

if (true) {
    console.log(var1)
    let var2 = 'var2'// var2 is local
    console.log(var2)

    if (true) {
        let var4 = 'var4'
    }
}

if (true) {
    let var3 = 'var3'
}

console.log(var2) // var2 is not defined in the global scope.
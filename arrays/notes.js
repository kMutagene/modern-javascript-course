const notes = [
    "note1",
    "note2",
    "note3"
]

// notes.push("note4")

// console.log(notes.pop())

// console.log(notes.shift())

// notes.unshift("newFirstNote")

// notes.splice(1,1,"splicedNote")

notes[0] = "lele"

console.log(notes)

notes.forEach((item, index) => {
    console.log(`${index}. ${item}`)
})

// Counting... 

for (let i=0; i<=2; i++) {
    console.log (`Counting... ${i}`)
}

for (let count = 0; count < notes.length; count++) {
    console.log(notes[count])
}

const fib = (n) => {
    if (n === 1 | n === 2) {
        return 1
    } else {
        return fib(n-1) + fib(n-2)
    }
} 

console.log(fib(10))
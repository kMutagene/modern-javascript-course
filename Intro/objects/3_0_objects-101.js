let myBook = {
    title: "1984",
    author: "George Orwell",
    pageCount: 326
}

console.log(`${myBook.title} by ${myBook.author}`)

myBook.title = "Animal Farm" // object properties are mutable

console.log(`${myBook.title} by ${myBook.author}`)
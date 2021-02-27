let myName = 'Kevin'

//Global
if (true) {
    //local 1
    let myName = 'Meem' // myName is defined in a new scope -> shadowing is possible
    if (true) {
        //local 1+2
        myName = 'newName' // only re-assigns the first parent -> global variable stays unaffected
        console.log(myName)
    }
}
if (true) {
    //local 3
    iNeverExisted = 'lol?' // new assignment leaks to global scope as it didnt exist beforehand
    console.log(myName)
}

console.log(iNeverExisted) // leaked global
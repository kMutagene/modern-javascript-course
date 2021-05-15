const Person = function (fn, ln, age) {
    this.firstName = fn,
    this.lastName = ln,
    this.age = age
}

const me = new Person("kev", "schne", 26)

console.log(me) 
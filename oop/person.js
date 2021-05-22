class Person {
    constructor (fn, ln, age, likes) {
        this.firstName = fn,
        this.lastName = ln,
        this.age = age,
        this.likes = likes
    }

    getBio () {
        let bio = `${this.firstName} ${this.lastName} is ${this.age}`
    
        this.likes.forEach(element => {
            bio += `\r\n\t${this.firstName} likes ${element}` // arrow functions do not bind `this` -> this is the person from the above scope.
        })
    
        return bio
        
    }
    
    setName(fullName) {
        let names = fullName.split(" ")
        this.firstName = names[0]
        this.lastName = names[1]
    }

}


class Employee extends Person {
    constructor(fn, ln, age, position, likes) {
        super(fn, ln, age, likes)
        this.position = position
    }

    getBio(){
        return `${this.firstName} ${this.lastName} is a ${this.position}`
    }

    getYearsLeft() {
        return 65 - this.age
    }
}


class Student extends Person {
    constructor(fn, ln, age, points, likes) {
        super(fn, ln, age, likes)
        this.points = points
    }
    getBio() {
        if (this.points < 60) {
            return `${this.firstName} ${this.lastName} has ${this.points} points and is failing the class`
        } else {
            return `${this.firstName} ${this.lastName} has ${this.points} points and is passing the class`
        }
    }
    updateGrade(additionalPoints){
        this.points = this.points + additionalPoints
    }
}

const stud = new Student("so","os", 42, 69, ["sose"])
console.log(stud.getBio())
stud.updateGrade(-27)
console.log(stud.getBio())
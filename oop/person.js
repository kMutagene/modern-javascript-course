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

const me = new Person("kev", "schne", 26)

console.log(me) 

// prototypal inheritance

const mew = new Person("kev", "schne", 26, ["sose", "meem"])


console.log(mew.getBio()) 
mew.setName("soos saAS")
console.log(mew.getBio()) 
let myAccount = {
    name: "Kev",
    expenses: 0,
    income:0
}

let otherAccount = myAccount
otherAccount.income = 1000

let addExpense = (account, amount) => {
    account.expenses = account.expenses + amount
    console.log (account)
}

addExpense(myAccount, 2.50)

console.log(otherAccount)
console.log(myAccount)

//object references are not equal!
console.log({} === {})

let a = {}

let b = a

console.log(b === a) // same reference -> true
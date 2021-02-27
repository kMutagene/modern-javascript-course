let myAccount = {
    name: "Kev",
    expenses: 0,
    income:0
}

let addExpense = (account, amount) => {
    account.expenses = account.expenses + amount
}

let addIncome = (account, amount) => {
    account.income = account.income + amount
}

let resetAccount = (account) => {
    account.expenses = 0
    account.income = 0
}

let getAccountSummary = (account) => {

    let balance = account.income - account.expenses

    console.log("\r\n")
    console.log(`Account for ${account.name}`)
    console.log("----------------------------")
    console.log(`Income: ${account.income}`)
    console.log(`Expenses: ${account.expenses}`)
    console.log("----------------------------")
    console.log(`Balance: ${balance} €`)
    console.log("----------------------------")
}

addExpense(myAccount, 1337)
addIncome(myAccount, 1338)
getAccountSummary(myAccount)
resetAccount(myAccount)
getAccountSummary(myAccount)
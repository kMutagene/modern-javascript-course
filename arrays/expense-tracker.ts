type Expense = {
    Description: string,
    Amount: number
}

type Income = {
    Description: string,
    Amount: number
}

type ExpenseAccount = {
    Name: string,
    Expenses: Expense []
    Income: Income []
}

const createExpense = (description: string, amount: number) : Expense => {
    return {Description : description, Amount: amount}
}

const createIncome = (description: string, amount: number) : Income => {
    return {Description : description, Amount: amount}
}

const addExpense = (account: ExpenseAccount, expense: Expense) => {
    account.Expenses.push(expense)
}

const addIncome = (account: ExpenseAccount, expense: Income) => {
    account.Income.push(expense)
}

const getAccountSummary = (account: ExpenseAccount) => {
    let accountExpenses = 
        account.Expenses
            .map((expense) =>
                expense.Amount
            )
            .reduce((acc,elem) => 
                acc + elem
            )
    let accountIncome = 
        account.Income
            .map((income) =>
                income.Amount
            )
            .reduce((acc,elem) => 
                acc + elem
            )
    let accountTotal = accountIncome - accountExpenses
    return `${account.Name} has a balance of ${accountTotal}€. Income: ${accountIncome}€ Expenses: -${accountExpenses}€`
}

let myAccount : ExpenseAccount= {
    Name: "Kevin",
    Expenses: [],
    Income: []
}

addIncome(myAccount,(createIncome("pHD of blazeitology",4200)))

addExpense(myAccount,(createExpense("being leet",1337)))
addExpense(myAccount,(createExpense("being woke",420)))

console.log(getAccountSummary(myAccount))
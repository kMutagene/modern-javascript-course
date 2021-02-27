"use strict";
const createExpense = (description, amount) => {
    return { Description: description, Amount: amount };
};
const createIncome = (description, amount) => {
    return { Description: description, Amount: amount };
};
const addExpense = (account, expense) => {
    account.Expenses.push(expense);
};
const addIncome = (account, expense) => {
    account.Income.push(expense);
};
const getAccountSummary = (account) => {
    let accountExpenses = account.Expenses
        .map((expense) => expense.Amount)
        .reduce((acc, elem) => acc + elem);
    let accountIncome = account.Income
        .map((income) => income.Amount)
        .reduce((acc, elem) => acc + elem);
    let accountTotal = accountIncome - accountExpenses;
    return `${account.Name} has a balance of ${accountTotal}€. Income: ${accountIncome}€ Expenses: -${accountExpenses}€`;
};
let myAccount = {
    Name: "Kevin",
    Expenses: [],
    Income: []
};
addIncome(myAccount, (createIncome("pHD of blazeitology", 4200)));
addExpense(myAccount, (createExpense("being leet", 1337)));
addExpense(myAccount, (createExpense("being woke", 420)));
console.log(getAccountSummary(myAccount));

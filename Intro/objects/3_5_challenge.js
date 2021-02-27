let isValidPassword = function (password) {
    //length > 8
    //does not contain the word "password"
    return (password.length > 8) && !(password.includes("password"))
}

console.log(isValidPassword("asdfp"))
console.log(isValidPassword("wieofhjwiogjwp"))
console.log(isValidPassword("lsefnosegnpasswordAFa"))
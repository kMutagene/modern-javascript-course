// A tip of X on Y would be Z
let getTip = (total, tipPercentage = 0.2) => {
    let result = total * tipPercentage
    console.log(`A tip of ${tipPercentage * 100}% of ${total}€ would be ${result}€`)
    return result
}

getTip(104)
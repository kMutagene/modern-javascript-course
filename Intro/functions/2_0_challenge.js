// convertFahrenheitToCelcius
let convertFahrenheitToCelcius = function (fahrenheit) {
    return (fahrenheit - 32) * (5 / 9)
}

// call for some values
let first = convertFahrenheitToCelcius(0)
let second = convertFahrenheitToCelcius(50)
let third = convertFahrenheitToCelcius(100)

// print converted values
let printConversion = function (fahrenheit) {
    let result = convertFahrenheitToCelcius(fahrenheit)
    console.log(`${fahrenheit}°F is ${result}°C`)
}

printConversion(0)
printConversion(50)
printConversion(100)
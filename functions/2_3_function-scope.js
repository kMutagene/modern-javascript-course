// Global scope : convertFtoC
    // Local scope (fahrenheit, result)
        // Local scope (isFreezing)

let convertFtoC = function (fahrenheit) {
    let result = convertFahrenheitToCelcius(fahrenheit)
    console.log(`${fahrenheit}°F is ${result}°C`)

    if (result <= 0) {
        let isFreezing = true
    }

    return result
}
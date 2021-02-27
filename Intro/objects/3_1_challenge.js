// convertFahrenheitToCelcius
let convertTemperature = function (inputTemp, tempType) {
    if (tempType === "fahrenheit" | tempType === "°F") {
        return {
            fahrenheit: inputTemp,
            celsius : (inputTemp - 32) * (5 / 9),
            kelvin : (inputTemp + 459.67) * (5 / 9)
        }
    } else if (tempType === "kelvin" | tempType === "K") {
        return {
            fahrenheit: inputTemp * (9/5) - 459.67,
            celsius : inputTemp - 273.15,
            kelvin : inputTemp
        }
    } else if (tempType === "celsius" | tempType === "°C") {
        return {
            fahrenheit: inputTemp * 1.8 + 32,
            celsius : inputTemp,
            kelvin : inputTemp + 273.15
        }
    }
    else {
        console.log("invalid temperature type. Allowed: fahrenheit, kelvin, celsius")
    }
}

console.log(convertTemperature(0, "°C"))
console.log(convertTemperature(32, "°F"))
console.log(convertTemperature(273.15, "K"))
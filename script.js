function convertTemperature() {
    const inputTemperature = parseFloat(document.getElementById("inputTemperature").value);
    const inputUnit = document.getElementById("inputUnit").value;
    let result = " ";

    if (isNaN(inputTemperature)) {
        alert("Please enter a valid number.");
        return;
    }

    if (inputUnit === "celsius") {
        // Convert Celsius to Fahrenheit and Kelvin
        const fahrenheit = (inputTemperature * 9/5) + 32;
        const kelvin = inputTemperature + 273.15;
        result = `${inputTemperature}°C is equal to ${fahrenheit.toFixed(2)}°F and ${kelvin.toFixed(2)}K`;
    } else if (inputUnit === "fahrenheit") {
        // Convert Fahrenheit to Celsius and Kelvin
        const celsius = (inputTemperature - 32) * 5/9;
        const kelvin = (inputTemperature - 32) * 5/9 + 273.15;
        result = `${inputTemperature}°F is equal to ${celsius.toFixed(2)}°C and ${kelvin.toFixed(2)}K`;
    } else if (inputUnit === "kelvin") {
        // Convert Kelvin to Celsius and Fahrenheit
        const celsius = inputTemperature - 273.15;
        const fahrenheit = (inputTemperature - 273.15) * 9/5 + 32;
        result = `${inputTemperature}K is equal to ${celsius.toFixed(2)}°C and ${fahrenheit.toFixed(2)}°F`;
    }

    document.getElementById("resultText").textContent = result;
}

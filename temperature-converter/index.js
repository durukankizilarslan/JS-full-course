// TEMPERATURE CONVERSION
const textBox = document.getElementById("text-box");
const toFahrenheit = document.getElementById("to-fahrenheit");
const toCelsius = document.getElementById("to-celcius");
const result = document.getElementById("result");

let temp;

function convert() {
  if (toCelsius.checked) {
    temp = Number(textBox.value);
    temp = (temp - 32) * (5 / 9);
    result.textContent = temp.toFixed(1) + " C";
  } else if (toFahrenheit.checked) {
    temp = Number(textBox.value);
    temp = (temp * 9) / 5 + 32;
    result.textContent = temp.toFixed(1) + " F";
  } else {
    result.textContent = "You must select a conversion";
  }
}

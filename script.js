// Get display element
const display = document.getElementById("display");

// Function to clear the display
function clearDisplay() {
    display.innerText = "0";
}

// Function to append numbers/operators to the display
function appendToDisplay(value) {
    if (display.innerText === "0") {
        display.innerText = value;
    } else {
        display.innerText += value;
    }
}

// Function to calculate the result
function calculate() {
    try {
        display.innerText = eval(display.innerText);
    } catch {
        display.innerText = "Error";
    }
}

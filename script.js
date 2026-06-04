const display = document.getElementById('display');
let currentInput = '0';
let justCalculated = false;
function appendToDisplay(value) {
    if (justCalculated && !isNaN(value)) {
        currentInput = value;
    }
    else if (currentInput === '0' && !isNaN(value)) {
        currentInput = value;
    }
    else {
        currentInput += value;
    }
    justCalculated = false;
    display.textContent = currentInput;
}
function clearDisplay() {
    currentInput = '0';
    justCalculated = false;
    display.textContent = '0';
}
function calculate() {
    try {
        currentInput = String(eval(currentInput));
        display.textContent = currentInput;
        justCalculated = true;
    }
    catch (e) {
        display.textContent = 'Error';
        currentInput = '0';
    }
}
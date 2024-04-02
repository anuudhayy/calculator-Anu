let display = document.getElementById('display');

document.addEventListener('keydown', function(event) {
    const key = event.key;
    if (!isNaN(key)) {
        appendToDisplay(key);
    } else if (key === '+' || key === '-' || key === '*' || key === '/' || key === '.') {
        appendToDisplay(key);
    } else if (key === 'Enter') {
        calculate();
    } else {
        alert("Only numbers and operators are allowed.");
    }
});

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function calculate() {
    try {
        const result = eval(display.value);
        display.value = result;
    } catch (error) {
        display.value = 'Error';
    }
}

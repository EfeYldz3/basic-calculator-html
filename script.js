const display = document.getElementById("display");

var clickTime = 0;

function appendToDisplay(input) {
    if(display.value == 0 && clickTime < 15) {
        clickTime += 1;
        display.value = input;
    }
    else if(display.value != 0 && clickTime < 15) {
        clickTime += 1;
        display.value += input;
    }
}

function clearDisplay() {
    display.value = "0";
    clickTime = 0;
}

function calculate() {
    try {
        display.value = eval(display.value);
        clickTime = 0;
    }
    catch {
        display.value = "Missing Input";
    }
}

function appendToScreen(value) {
    document.getElementById("screen").value += value;
}

function clearScreen() {
    document.getElementById("screen").value = "";
}

function deleteLast() {
    let current = document.getElementById("screen").value;
    document.getElementById("screen").value = current.slice(0, -1);
}

function calculateResult() {
    let screenValue = document.getElementById("screen").value;
    try {
        document.getElementById("screen").value = eval(screenValue);
    } catch (error) {
        alert("Invalid Expression");
    }
}

// Math calculations for special operators
function squareNumber() {
    let screenValue = document.getElementById("screen").value;
    try {
        document.getElementById("screen").value = eval(screenValue) * eval(screenValue);
    } catch (error) {
        alert("Invalid Expression");
    }
}

function squareRoot() {
    let screenValue = document.getElementById("screen").value;
    try {
        document.getElementById("screen").value = Math.pow(eval(screenValue), 1/2);
    } catch (error) {
        alert("Invalid Expression");
    }
}

function randomNo() {
    let screenValue = document.getElementById("screen").value;
    try {
        document.getElementById("screen").value = Math.random();
    } catch (error) {
        alert("Invalid Expression");
    }
}
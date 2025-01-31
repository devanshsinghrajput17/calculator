
function clearDisplay() {
    document.getElementById('display').value = '';
}

function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function calculate() {

    let display = document.getElementById('display').value;
    console.log(display);
    document.getElementById('display').value = eval(display);
}

// store output 
let answer;

function operate() {
    // get user input
    let x = float(prompt("x"));
    let operator = prompt("operation?");
    let y = float(prompt("y"));

    if (operator == "add") {
        add(x,y);
    } else if (operator == "subtract") {
        subtract(x,y);
    } else if (operator == "multiply") {
        multiply(x,y);
    } else if (operator == "divide") {
        divide(x,y);
    }
}

function add(x,y) {
    answer = x + y;
    return answer;
}

function subtract(x,y) {
    answer = x - y;
    return answer;
}

function multiply(x,y) {
    answer = x * y;
    return answer;
}

function divide(x,y) {
    answer = x / y;
    return answer;
}
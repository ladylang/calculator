
// call display output
const display = document.getElementById('display');

// call buttons 
const numbers = Array.from(document.querySelectorAll('.numBtn'));
const equals = document.getElementById('equals');
const clear = document.getElementById('clear');
const add = document.getElementById('opAdd');
const subtract = document.getElementById('opSub');
const multiply = document.getElementById('opMultiply');
const divide = document.getElementById('opDivide');
const period = document.getElementById('period');
const del = document.getElementById('delete');

// initialize values
let displayValue = "";
let operator = "";
let number1;

/* add eventlistener to each number button using for loop 
const numbers = document.querySelectorAll('.numBtn');
for (let i = 0, numLength = numbers.length; i < numLength; i++) {
    numbers[i].addEventListener('click', function () {
        console.log(this.value);
        display.innerHTML = this.value;
})};
*/

// delete the saved displayValue
clear.addEventListener('click', clears);

// eventlistener for number buttons to updated display
numbers.forEach(number => number.addEventListener('click', function() {
    let nextDigit = this.value;
    displayNumber(nextDigit);
    console.log(displayValue, typeof(displayValue));
}));

function displayNumber(number) {
    // updates display when number is entered
    displayValue = displayValue + number; 
    
    // check integer numbers which are accurate to max 15 digits
    intCheck = (parseInt(Number(displayValue))).toString;
    if (intCheck.length > 14) {
        display.innerHTML = "ERROR" // not working yet

    // convert to exponential display if too long 
    } else if (displayValue.length > 9) {
        display.innerHTML = Number(displayValue).toExponential(4);
    } else {
        display.innerHTML = displayValue;
    }
}
 
function saveNumber() {
    let saved = displayValue;
    displayValue = "";
    console.log(saved, typeof(saved));
    return saved;
}

add.addEventListener('click', function() {
    // save first number and reset displayValue
    number1 = saveNumber(displayValue);
    operator = "add"    
})

subtract.addEventListener('click', function() {
    // save first number and reset displayValue
    number1 = saveNumber(displayValue);
    operator = "subtract"    
})

multiply.addEventListener('click', function() {
    // save first number and reset displayValue
    number1 = saveNumber(displayValue);
    operator = "multiply"    
})

divide.addEventListener('click', function() {
    // save first number and reset displayValue
    number1 = saveNumber(displayValue);
    operator = "divide"    
})

equals.addEventListener('click', function() {
    // check numbers being passed in
    
    
    console.log(number1, displayValue, operator);

    // get answer and store into number1 
    displayValue = operate(number1, displayValue);

    // reset operator
    operator = ""; 

    // save answer to number1
    number1 = displayValue;

    // display answer
    display.innerHTML = displayValue;
});

function operate(x, y) {
    let answer;
    if (operator == "add") {
        answer = Number(x) + Number(y);
    } else if (operator == "subtract") {
        answer = Number(x) - Number(y);
    } else if (operator == "multiply") {
        answer = Number(x) * Number(y);
    } else if (operator == "divide") {
        answer = Number(x) / Number(y);
    }
    return answer;
}

// reset all variables 
function clears() {
    displayValue = ""; 
    answer = "";
    operator = "";
    display.innerHTML = displayValue;
}

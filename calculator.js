
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
del.disabled = true;

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
    del.disabled = false;
    displayNumber(nextDigit);
    //console.log(displayValue, typeof(displayValue));
}));

del.addEventListener('click', function() {
    // check length 
    if (displayValue.length > 1) {
        // take out last digit from string
        displayValue = displayValue.slice(0, -1); 
    
    // disable delete button if number length is 0 after this slice
    } else if (displayValue.length = 1) {
        displayValue = displayValue.slice(0, -1);
        del.disabled = true;
    }

    // check if decimal
    if (displayValue.includes(".") == true) {
        // if number is decimal, disable button
        period.disabled = true;
    } else {
        // else keep decimal button active
        period.disabled = false;
    }

    display.innerHTML = displayValue;
});

period.addEventListener('click', function() {
    displayNumber(".");
});

function displayNumber(number) {
    // updates display when number is entered
    displayValue = displayValue + number; 
    display.innerHTML = checkNumber(displayValue);
};
 
function saveNumber() {
    let saved = checkNumber(displayValue);
    displayValue = "";
    period.disabled = false;
    return saved;
};

function checkNumber(displayValue) {
    let actualNumber = parseFloat(displayValue);
    let intNumber = parseInt(displayValue);
    let numAsString = displayValue.toString();

    // check displayValue is a number
    if (isNaN(intNumber) == true) {
        return "ERROR";
    } 

    // check integer numbers which are accurate to max 15 digits
    if (intNumber.length > 14) {
        return "ERROR"; 

    // convert to exponential display if too long 
    } else if (intNumber.length > 9) {
        return actualNumber.toExponential(4);

    // if decimal, display decimals up to total length of 9
    } else if (numAsString.includes(".") == true) {
        period.disabled = true;
        let decimalNum = numAsString.split(".");
        decimalNum = decimalNum[1];
        let decimal = decimalNum.length;
        let totalLength = numAsString.length;
        if (totalLength > 8) {
            return actualNumber.toExponential(4);
        } else if (decimal > 5) {
            return actualNumber.toFixed(5);
        } else {
            return actualNumber.toFixed(decimal); 
        }
    } else {
        return intNumber;
    }
}

add.addEventListener('click', function() {
    // save first number and reset displayValue
    number1 = saveNumber(displayValue);
    operator = "add";
})

subtract.addEventListener('click', function() {
    // save first number and reset displayValue
    number1 = saveNumber(displayValue);
    operator = "subtract";
})

multiply.addEventListener('click', function() {
    // save first number and reset displayValue
    number1 = saveNumber(displayValue);
    operator = "multiply";  
})

divide.addEventListener('click', function() {
    // save first number and reset displayValue
    number1 = saveNumber(displayValue);
    operator = "divide";
})

equals.addEventListener('click', function() {
    // error check for dividing by 0
    if (operator == "divide" & displayValue == "0") {
        display.innerHTML = "NOPE";
        displayValue = "";
    } else if (operator == "") {
        number1 = saveNumber(displayValue)
    } else if (number1 == "") {
        number1 = saveNumber(displayValue)
    } else {
        // get answer and store into display    
        displayValue = operate(number1, displayValue);
        displayValue = checkNumber(displayValue);
        // save answer to number1
        number1 = displayValue; 
    
        // reset operator and period
        operator = "";
        period.disabled = false;

        // display answer
        display.innerHTML = displayValue;
    }
});

function operate(x, y) {
    let answer;
    // operate to get answer
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
    operator = "";
    number1 = "";
    display.innerHTML = displayValue;
    period.disabled = false;
}

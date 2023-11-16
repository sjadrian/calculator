const clearButton = document.querySelector('.clear');
const deleteButton = document.querySelector('.delete');
const equalButton = document.querySelector('.equal');

const displayLineOne = document.querySelector('.line-one');
const displayLineTwo = document.querySelector('.line-two');

const buttons = document.querySelectorAll('.digit');
const operators = document.querySelectorAll('.operator');

const maxDisplayDigit = 15;

let currentNumber = "";
let displayNumber = "";
let lastOperation = "";

buttons.forEach(btn => {
    btn.addEventListener('click', ()=> {
        updateDisplay(btn.getAttribute("data-value"));
    })
})

operators.forEach(btn => {
    btn.addEventListener('click', ()=> {
        operatorUpdate(btn.getAttribute('data-value'));
    })
})

clearButton.addEventListener('click', ()=> {
    currentNumber = "";
    displayNumber = "0";
    lastOperation = "";

    displayLineOne.textContent = currentNumber;
    displayLineTwo.textContent = displayNumber;
});

deleteButton.addEventListener('click', ()=> {
    displayNumber = displayNumber.slice(0, -1);
    displayLineTwo.textContent = displayNumber;
});

equalButton.addEventListener('click', ()=> {
    if (currentNumber && displayNumber) {
        if (lastOperation === "/" && displayNumber === "0") {
            alert("Cannot divide by 0");
            return;
        }
        displayLineOne.textContent = `${currentNumber} ${lastOperation} ${displayNumber} =`;
        displayNumber = operate(lastOperation, currentNumber, displayNumber);
        displayLineTwo.textContent = displayNumber;
        currentNumber = ""
    }
});

function updateDisplay(number) {
    if (displayNumber === "0" && number !== ".") {
        displayNumber = "";
    }

    if (displayNumber.length < maxDisplayDigit && number !== ".") {
        displayNumber += number;
    } else if (displayNumber.length < maxDisplayDigit && !displayNumber.includes(".")) {
        displayNumber += number;
    }
    displayLineTwo.textContent = displayNumber;
}

function operatorUpdate(operator) {
    lastOperation = operator;

    if (displayNumber && currentNumber) {
        if (lastOperation === "/" && displayNumber === "0") {
            alert("Cannot divide by 0");
            return;
        }
        currentNumber = operate(lastOperation, currentNumber, displayNumber);
        displayLineTwo.textContent = currentNumber;
    } else if (displayNumber) {
        currentNumber = displayNumber;
    }
    displayLineOne.textContent = `${currentNumber} ${lastOperation}`;
    displayNumber = "";
}

function operate(operator, a, b) {
    let returnString = "";

    switch (operator) {
        case "+": 
            returnString = String(Number(a) + Number(b));
            break;
        case "-":
            returnString = String(Number(a) - Number(b));
            break;
        case "*":
            returnString = String(Number(a) * Number(b));
            break;
        case "/":
            returnString = String(Number(a) / Number(b));
            break;
    }
    return returnString.slice(0,maxDisplayDigit);
}

function handleKeyPress(e) {
    const key = e.key;

    if ((key >= '0' && key <= '9') || key === '.') {
        updateDisplay(key);
    }
    else if (['+', '-', '*', '/'].includes(key)) {
        operatorUpdate(key);
    }
    else if (key === 'Enter') {
        equalButton.click();
    } else if (key === 'Backspace') {
        deleteButton.click();
    } else if (key === 'Escape') {
        clearButton.click();
    }
}

document.addEventListener('keydown', handleKeyPress);
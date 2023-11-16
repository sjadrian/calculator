const clearButton = document.querySelector('.clear')
const displayLineOne = document.querySelector('.line-one')
const displayLineTwo = document.querySelector('.line-two')

const addButton = document.querySelector('.add')
const deleteButton = document.querySelector('.delete')
const equalButton = document.querySelector('.equal')


const oneButton = document.querySelector('.one')
const twoButton = document.querySelector('.two')

let currentNumber = "";
let displayNumber = "";
let lastOperation = "";

clearButton.addEventListener('click', ()=> {
    console.log("clear button clicked")

    currentNumber = "";
    displayNumber = "0";
    lastOperation = "";

    displayLineOne.textContent = currentNumber;
    displayLineTwo.textContent = displayNumber;
});

deleteButton.addEventListener('click', ()=> {
    console.log("clear button clicked")
    console.log(displayNumber);
    displayNumber = displayNumber.slice(0, -1);
    console.log(displayNumber);
    displayLineTwo.textContent = displayNumber;
});

oneButton.addEventListener('click', ()=> {
    console.log("one button clicked")
    displayNumber = displayNumber + 1;
    displayLineTwo.textContent = displayNumber;
    
});

twoButton.addEventListener('click', ()=> {
    console.log("two button clicked")

    currentNumber = currentNumber + 2;
    displayLineTwo.textContent = currentNumber;
});


addButton.addEventListener('click', ()=> {
    console.log("add button clicked")

    
    lastOperation = "+";
    displayLineOne.textContent = currentNumber + " " + lastOperation;
    currentNumber = "";
    
});

equalButton.addEventListener('click', ()=> {
    console.log("equal button clicked")

    
    lastOperation = "+";
    displayLineOne.textContent = currentNumber + " " + lastOperation;
    currentNumber = "";
    
});
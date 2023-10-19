let screen = document.getElementById("screen");
screen.textContent = ""
let dispValue = screen.textContent;

// basic functions
const add = (x, y) => x + y;  
const subtract = (x, y) => x - y;
const multiply = (x, y) => x * y;
const divide = (x, y) => x / y;

// function operate
function operate(fNum, op, sNum){
    switch (op) {
        case "+":
            return add(fNum, sNum);    
        case "-":
            return subtract(fNum, sNum);  
        case "X":
            return multiply(fNum, sNum);  
        case "/":
            return divide(fNum, sNum);  
    }
} 

// variables for operate function
let firstNum = 0;
let operator = "";
let secondNum = 0;
let result = 0;

// variables for getting the number
let currNum = "";

//variable for current status
let firstNumIn = false;
let secondNumIn = false;
let equalPressed = false;

// button behaviour
let numButtons = document.querySelectorAll(".numButton");
numButtons.forEach(button => button.addEventListener("click", () => {
    // if there's already a result and we press a new button restart all calcualtions
    if(equalPressed){
        result = 0;
        screen.textContent = "";
    }
    equalPressed = false;
    currNum += button.textContent;
    screen.textContent += button.textContent;
    currNum = currNum*1;
    console.log("number Pressed = " + currNum);
}))

let opButtons = document.querySelectorAll(".opButton");
opButtons.forEach(button => button.addEventListener("click", () => {
    // if an expression has already been entered it gets solved and it becomes the first number
    if(firstNumIn){
        secondNum = currNum;
        result = operate(firstNum, operator, secondNum);
        screen.textContent = result;
        firstNum = result;
        console.log("result = " + result)
    } else {
        firstNum = currNum;
    }
    currNum = 0;
    operator = button.textContent;
    screen.textContent += operator;
    firstNumIn = true;
    console.log("firstNum = " + firstNum);
    console.log("currNum = " + currNum);
}))

let equal = document.getElementById("equal");
equal.addEventListener("click", () => {
    secondNum = currNum;
    currNum = 0;
    result = operate(firstNum, operator, secondNum);
    screen.textContent = result;
    firstNumIn = false;
    equalPressed = true;
    console.log("result = " + result);
})

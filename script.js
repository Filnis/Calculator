let screen = document.getElementById("screen");
screen.textContent = ""
let dispValue = screen.textContent;
const buttonList = document.querySelectorAll("button");

// basic functions
const add = (x, y) => Math.round((x + y)*1000)/1000;  
const subtract = (x, y) => Math.round((x - y)*1000)/1000;
const multiply = (x, y) => Math.round((x * y)*1000)/1000;
const divide = (x, y) => Math.round((x / y)*1000)/1000;

// function operate
function operate(fNum, op, sNum){
    switch (op) {
        case "+":
            return add(fNum, sNum);    
        case "-":
            return subtract(fNum, sNum);  
        case "X":
            return multiply(fNum, sNum);  
        case "÷":
            return divide(fNum, sNum);  
    }
} 

// use keyboard instead of buttons
window.addEventListener('keydown', function(e){
    console.log(e.code);
    buttonList.forEach(button => {if(button.dataset.key == e.code){button.click()}});
})

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

let deleteBt = document.getElementById("delete");
deleteBt.addEventListener("click", () => {
    currNum = `${currNum}`
    console.log(`currnum dopo delete = ${currNum}`)
    currNum = currNum.slice(0, -1);
    screen.textContent = screen.textContent.slice(0, -1);
    console.log(`currnum dopo delete trim = ${currNum}`)
    currNum = currNum*1;
    
})

let clearBt = document.getElementById("clear");
clearBt.addEventListener("click", () => {
    currNum = 0;
    screen.textContent = "";
    firstNumIn = false;
    firstNum = 0;
    operator = "";
    secondNum = 0;
    result = 0;
})
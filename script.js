let screen = document.getElementById("screen");
screen.textContent = ""
let dispValue = screen.textContent;
const buttonList = document.querySelectorAll("button");

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
        case "x":
            return multiply(fNum, sNum);  
        case "÷":
            return divide(fNum, sNum);  
    }
} 

// use keyboard instead of buttons
window.addEventListener('keydown', function(e){
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

// button behaviour
let numButtons = document.querySelectorAll(".numButton");
numButtons.forEach(button => button.addEventListener("click", () => {
    currNum += button.textContent;
    screen.textContent += button.textContent;
    currNum = currNum*1;
}))

let opButtons = document.querySelectorAll(".opButton");
opButtons.forEach(button => button.addEventListener("click", () => {
    // if an expression has already been entered it gets solved and it becomes the first number
    console.log(`currNum = ${currNum}`)

    if(firstNumIn){
        console.log(`secondNum = ${secondNum}`)
        secondNum = currNum;
        // result = operate(firstNum, operator, currNum);
        result = operate(firstNum, operator, currNum);
        console.log(`result = ${result}`)

        screen.textContent = Math.round(result*1000)/1000;
        firstNum = result;
    } else {
        firstNum = currNum;
    }
    currNum = 0;
    operator = button.textContent;
    screen.textContent += " " + operator + " ";
    firstNumIn = true;
    console.log(`firstnum = ${firstNum}`)
    console.log(`secondNum = ${secondNum}`)
}))

let equal = document.getElementById("equal");
equal.addEventListener("click", () => {
    secondNum = currNum;
    result = operate(firstNum, operator, secondNum);
    currNum = result;
    screen.textContent = Math.round(result*1000)/1000;
    firstNum = result;
    firstNumIn = false;
    console.log(`firstnum = ${firstNum}`)
    console.log(`result = ${result}`)

})

let deleteBt = document.getElementById("delete");
deleteBt.addEventListener("click", () => {
    currNum = `${currNum}`
    currNum = currNum.slice(0, -1);
    screen.textContent = screen.textContent.slice(0, -1);
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
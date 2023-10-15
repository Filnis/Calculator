let screen = document.getElementById("screen");
screen.textContent = "---"
let dispValue = screen.textContent;

let buttons = document.querySelectorAll("button");
buttons.forEach(button => button.addEventListener("click", () => {
    screen.textContent = button.textContent;
    dispValue = button.textContent;
}))

// basic functions
const add = (x, y) => x + y;
const subtract = (x, y) => x - y;
const multiply = (x, y) => x * y;
const divide = (x, y) => x / y;

//  variable creation
let firstNum = 0;
let operator = "";
let secondNum = 0;

// function operate
function operate(fNum, op, sNum){
    switch (op) {
        case "+":
            return add(fNum, sNum);    
        case "-":
            return subtract(fNum, sNum);  
        case "*":
            return multiply(fNum, sNum);  
        case "/":
            return divide(fNum, sNum);  
    }
}

  
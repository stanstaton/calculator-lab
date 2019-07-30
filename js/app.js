/*--- constants ---*/

/*--- app's state ---*/
var displayText;
var currentNum;
var prevNum;
var currentOperation;

/*--- cached element references ---*/
const calculatorEl = document.querySelector('#calculator');
const displayEl = document.querySelector('#display');

/*--- event listeners ---*/
document.addEventListener('DOMContentLoaded', function(event) {
    console.log("Hello World!");
    initialize();
    registerEventListeners();
})

/*--- functions ---*/
function initialize() { 
    console.log("Clearing state variables!");
    displayText = "";
    currentNum = "";
    prevNum = "";
    currentOperation = null;
    render();
}

function registerEventListeners() {
    calculatorEl.addEventListener('click', handleClick);
}

function render() {
    console.log(currentNum, prevNum, currentOperation);
    displayEl.textContent = displayText;
}

function handleClick(event) {
    if(event.target === this || event.target.id === 'display' ) {
        return;
    }
  
    let inputCode = event.target.id;
    switch(inputCode) {
        case "clear":
            initialize();
            break;
        case "0": case "1": case "2": case "3": case "4":
        case "5": case "6": case "7": case "8": case "9":
            displayText += inputCode;
            currentNum += inputCode;
            break;
        case "addition":
            prevNum = currentNum;
            currentNum = "";
            currentOperation = "+";
            displayText += "+";
            break;
        case "subtract":
            prevNum = currentNum;
            currentNum = "";
            currentOperation = "-";
            displayText += "-";
            break;
        case "equals":
            displayText = calculate();
            break;
        default:
            break;

    }

    render();
}

function calculate() {
    console.log("current", currentNum)
    console.log("prev", prevNum)
    if(currentOperation === "-") {
        return parseInt(prevNum) - parseInt(currentNum);
    }
    else if (currentOperation === "+") {
        return parseInt(currentNum) + parseInt(prevNum);
    }
}
function add(num1, num2) { 

}
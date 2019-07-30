/*--- constants ---*/

/*--- app's state ---*/
var displayText; 
// var displayEl = document.getElementById.textContent;
// document.getElementById("solutions").textContent = displayText;
// var inputValue = [];
var currentOperation;
var currentNumber;
var prevNumber;

// console.log(displayText);
// console.log(inputValue);


/*--- cached element references ---*/
const calculatorEl = document.querySelector(".display");
var displayEl = document.getElementById("solutions");

/*--- event listeners ---*/
document.addEventListener("DOMContentLoaded", () => {
	// console.log("Locked and loaded");
	initialize();
})

calculatorEl.addEventListener("click", handleClick);

/*--- functions ---*/
function handleClick(event) {
	if(event.target.id === "solutions"){
		return
	}
	// console.log(event.target.textContent, "was clicked");
	let inputCode = event.target.textContent;
	switch(inputCode) {
		case "0":
		case "1":
		case "2":
		case "3":
		case "4":
		case "5":
		case "6":
		case "7":
		case "8":
		case "9":
		case "0":
			displayText+=inputCode;
			currentNumber += inputCode;
			// console.log(displayText);
			break;
		case "+":
			prevNumber = currentNumber;
			currentNumber = " ";
			currentOperation = "+";
			displayText += "+";
			break;
		case "-":
			prevNumber = currentNumber;
			currentNumber = " ";
			currentOperation = "-";
			displayText += "-";
			break;
		case "x":
			prevNumber = currentNumber;
			currentNumber = " ";
			currentOperation = "x";
			displayText += "x";
			break;
		case "/":
			prevNumber = currentNumber;
			currentNumber = " ";
			currentOperation = "/";
			displayText += "/";
			break;
		case "=":
			calculate();
			break;
		case "AC":
			prevNumber = " ";
			currentNumber = " ";
			currentOperation = " ";
			displayText = " ";
			break;
		default:
			break;

	}
	render();
	// console.log(`Input code is: ${inputCode}, Current number is ${currentNumber}, Previous number is ${prevNumber} and currentOperation is ${currentOperation}`)
}
function initialize() {
	// console.log("Clearing state variables!");
	displayText = " ";
	currentNumber = " ";
	prevNumber = " ";
	currentOperation = null;

}

function render() {
	// document.getElementById("solutions").textContent = displayText;
	displayEl.textContent = displayText;
}

function calculate() {
	var result = 0;
	var currInteger = parseInt(currentNumber);
	// console.log(currInteger);
	var prevInt = parseInt(prevNumber);
	// console.log(prevInt);
	if (currentOperation == "+") {
		result = currInteger + prevInt;
	} else if (currentOperation == "-") {
		result = prevInt - currInteger;
	}
	else if (currentOperation == "x") {
		result = currInteger*prevInt;
	} else {
		result = prevInt/currInteger;
	}
	displayText = result;

}


// function addToDisplay(event) {
// 	displayText = event.target.textContent;
// 	console.log(displayText);

// }

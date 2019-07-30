# calculator lab
Time to get some reps in with our usual suspects: HTML, CSS, and JavaScript!

## What We'll Do:
1. Create the calculator's structure in markup with HTML
2. Style the calculator to resemble our wireframe with CSS
3. Hook up the DOM to our JS with eventListeners  
3. Design and write the behavior with JS functions 


## UI Wireframe
Courtesy of the actual calculator app itself...

<img src="https://i.imgur.com/ikXg3dk.png" width="250">

## Suggested steps to get started

### 1. Analyze the app's functionality
* To start off, let's only concern ourselves with only addition and subtraction.
* What should happen when we click on a number button or operation button?

### 2. Psuedocode
Lay out calculator's logic in clear English.

Start by pseudocoding the calculator's overall functionality first. Then you can add more detailed pseudocode if necessary.

Remember to include different branches of logic as needed, for example:
```
- When the user clicks the plus button:
	- and there is an input number   
		- Append the '+' to the number text and wait for the 2nd number
	- otherwise
		- ignore the click
```
### 3. Identify the state (data) for the application
What data does the calculator need to "remember" as it's being used?

Use the wireframe and pseudocode as a guide to identify necessary state.

For example, you will certainly need a variable to hold the current number being entered, something like input. Then you'll need a variable to hold the current operator.

When an operator is clicked, won't you have to "remember" the first number entered? Etc., etc...

### 4. Set up the project
`index.html`

`css/style.css`

`js/app.js`

### 5. Organize `app.js` into sections
Example:
```
/*--- constants ---*/
const state = {};

/*--- app's state ---*/
var inputValue = 0;
var currentOperation = null;

/*--- cached element references ---*/
const calculatorEl = document.querySelector(...)

/*--- event listeners ---*/
function onClick() { ... }

/*--- functions ---*/
function initialize() { ... }
function add(num1, num2) { ... }
```

## Key Principles:
* State is the single-source of truth within our app! Make sure every time the user interacts with the calculator, app's state is updated.

* User interaction is what triggers Events to fire. The event listeners are where we'll call our functions from.

## Hints:
* The datatype of the "number" being entered is perhaps best stored as a string instead of a number. This will make it easier to add or remove additional digits. When it comes time to calculate, use `parseInt` or `parseFloat`.

* You can get away with only adding a single event listener to the parent container. Event Delegation is the concept where the parent element listens for all the events that happen inside of it.  

* This is a good opportunity to practice your CSS Grid chops. Otherwise, if you feel fine on Grid, a `<table>` for the calculator works out nicely. Look into the `colspan` attribute as a way to make a `<td>` span multiple columns. 

* Create a main `render` function that is responsible for rendering the state of the app to the DOM.

* **Data (state) is the single source of truth of the app** - when implementing an app's logic, the DOM is secondary to data manipulation. **Get used to thinking about how to your app's data changes vs. the display.**

* As the user interacts with the application, code the app such that it:
    * Updates state, then...
    * Calls `render()`

// import functions and grab DOM elements
const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalsButton = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-delete]');
const allClearButton = document.querySelector('[data-all-clear]');
const previousOperandTextElement = document.querySelector('[data-previous-operand]');
const currentOperandTextElement = document.querySelector('[data-current-operand]');




// let state

// set event listeners 

class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement;
        this.currentOperandTextElement = currentOperandTextElement;
        this.clear();
    }

    clear() {
        this.currentOperand = '';
        this.previousOperand = '';
        this.operation = undefined;
    }

    delete() {

    }
//when the user clicks on the number, it is shown on the screen and multiple numbers can be added
    appendNumber(number) {
      //to stop the period from repeating and allow the user to only add one period
        if (number === '.' && this.currentOperand.includes('.')) return;
        this.currentOperand = this.currentOperand.toString() + number.toString();

    }
//This is called anytime the user clicks on the operations
    chooseOperation(operation) {
        this.operation = operation;
        this.previousOperand = this.currentOperand;
        this.currentOperand = '';

    }
    compute() {

    }

    updateDisplay() {
//test if it works
        this.currentOperandTextElement.innerText = this.currentOperand;
        this.previousOperandTextElement.innerText = this.previousOperand;
    }

}
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement);

numberButtons.forEach(button => { button.addEventListener('click', () => {calculator.appendNumber(button.innerText);
 
    calculator.updateDisplay();
});
});
//choose operation to append
operationButtons.forEach(button => { button.addEventListener('click', () => {calculator.chooseOperation(button.innerText);
 
    calculator.updateDisplay();
});
});
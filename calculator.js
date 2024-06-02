// Functions for basic math operations
const add = (num1, num2) => num1 + num2;
const subtract = (num1, num2) => num1 - num2;
const multiply = (num1, num2) => num1 * num2;
const divide = (num1, num2) => num1 / num2;

const operate = (operator, num1, num2) => {
  switch (operator) {
    case '+':
      return add(num1, num2);
    case '-':
      return subtract(num1, num2);
    case '*':
      return multiply(num1, num2);
    case '/':
      return divide(num1, num2);
    default:
      return NaN; // Return NaN if operator is invalid
  }
};

let firstOperand = '';
let operator = '';
let secondOperand = '';
let displayValue = '';

// Function to update display
const updateDisplay = () => {
  document.getElementById('display').textContent = displayValue;
};

// Event listeners for digit buttons
document.querySelectorAll('.digit').forEach(button => {
  button.addEventListener('click', () => {
    displayValue += button.textContent;
    updateDisplay();
  });
});

// Event listeners for operator buttons
document.querySelectorAll('.operator').forEach(button => {
  button.addEventListener('click', () => {
    if (displayValue !== '') {
      if (firstOperand === '') {
        firstOperand = displayValue;
        displayValue += ` ${button.textContent} `;
        operator = button.textContent;
      } else {
        secondOperand = displayValue;
        console.log('First Operand:', firstOperand);
        console.log('Operator:', operator);
        console.log('Second Operand:', secondOperand);
        const result = operate(operator, parseFloat(firstOperand), parseFloat(secondOperand));
        displayValue = result.toString() + ` ${button.textContent} `;
        firstOperand = displayValue;
        secondOperand = '';
        operator = button.textContent;
      }
    }
    updateDisplay();
  });
});

// Event listener for equals button
document.getElementById('equals').addEventListener('click', () => {
  if (firstOperand !== '' && secondOperand === '' && operator !== '') {
    secondOperand = displayValue.split(' ')[2];
    console.log('First Operand:', firstOperand);
    console.log('Operator:', operator);
    console.log('Second Operand:', secondOperand);
    const result = operate(operator, parseFloat(firstOperand), parseFloat(secondOperand));
    displayValue = result.toString();
    firstOperand = '';
    secondOperand = '';
    operator = '';
    updateDisplay();
  }
});

// Event listener for clear button
document.getElementById('clear').addEventListener('click', () => {
  firstOperand = '';
  operator = '';
  secondOperand = '';
  displayValue = '';
  updateDisplay();
});

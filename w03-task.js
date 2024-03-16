/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */

/* Function Definition - Add Numbers */
function add(number1, number2) {
    return number1 + number2;
}

function addNumbers() {
    const num1 = parseFloat(document.getElementById("add1").value);
    const num2 = parseFloat(document.getElementById("add2").value);

    const sumResult = add(num1, num2);

    document.getElementById("sum").value = sumResult;
}

document.getElementById("addNumbers").addEventListener("click", addNumbers);

/* Function Expression - Subtract Numbers */
const subtract = function(number1, number2) {
    return number1 - number2;
};

const subtractNumbers = function() {
    const number1 = parseFloat(document.getElementById('subtract1').value);
    const number2 = parseFloat(document.getElementById('subtract2').value);

    const difference = subtract(number1, number2);

    document.getElementById('difference').textContent = difference;
};

document.getElementById('subtractNumbers').addEventListener('click', subtractNumbers);

// Arrow Function - Multiply Numbers
const multiply = (number1, number2) => number1 * number2;

const multiplyNumbers = () => {
    const num1 = parseFloat(document.getElementById("factor1").value);
    const num2 = parseFloat(document.getElementById("factor2").value);
    const productResult = multiply(num1, num2);
    document.getElementById("product").value = productResult;
};

document.getElementById("multiplyNumbers").addEventListener("click", multiplyNumbers);

// Function Declaration - Divide Numbers
function divide(number1, number2) {
    return number1 / number2;
}

function divideNumbers() {
    const num1 = parseFloat(document.getElementById("dividend").value);
    const num2 = parseFloat(document.getElementById("divisor").value);
    
    if (num2 === 0) {
        alert("Cannot divide by zero!");
        return;
    }

    const quotientResult = divide(num1, num2);
    document.getElementById("quotient").value = quotientResult;
}

document.getElementById("divideNumbers").addEventListener("click", divideNumbers);

/* DECISION STRUCTURE */

document.getElementById("getTotal").addEventListener("click", function() {
    const subtotal = parseFloat(document.getElementById("subtotal").value);
    const isMember = document.getElementById("member").checked;

    let totalDue;
    if (isMember) {
        totalDue = subtotal * 0.8;
    } else {
        totalDue = subtotal;
    }

    document.getElementById("total").innerText = `$ ${totalDue.toFixed(2)}`;
});

/* ARRAY METHODS - Functional Programming */
const numbersArray = Array.from({ length: 13 }, (_, index) => index + 1);

/* Output Source Array */
document.getElementById("array").textContent = numbersArray.join(", ");

/* Output Odds Only Array */
const oddNumbers = numbersArray.filter(number => number % 2 !== 0);
document.getElementById("odds").textContent = oddNumbers.join(", ");

/* Output Evens Only Array */
const evenNumbers = numbersArray.filter(number => number % 2 === 0);
document.getElementById("evens").textContent = evenNumbers.join(", ");

/* Output Sum of Org. Array */
const sumOfArray = numbersArray.reduce((acc, curr) => acc + curr, 0);
document.getElementById("sumOfArray").textContent = sumOfArray;

/* Output Multiplied by 2 Array */
const multipliedNumbers = numbersArray.map(number => number * 2);
document.getElementById("multiplied").textContent = multipliedNumbers.join(", ");

/* Output Sum of Multiplied by 2 Array */
const sumOfMultiplied = multipliedNumbers.reduce((acc, curr) => acc + curr, 0);
document.getElementById("sumOfMultiplied").textContent = sumOfMultiplied;

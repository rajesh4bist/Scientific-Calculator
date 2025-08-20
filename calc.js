const divsionbtn = document.getElementById("division-button");
const multiplybtn = document.getElementById("multiplication-button");
const subtractionbtn = document.getElementById("subtraction-button");
const additionbtn = document.getElementById("addition-button");
const equalbtn = document.getElementById("calculate-button");
const decimalbtn = document.getElementById("point-button");
const display = document.getElementById("display-container");
const clearbtn = document.getElementById("Clear-button");

let array = [];

additionbtn.addEventListener("click", (e) => {
    display.innerText = display.innerText + e.target.innerText;
    array.push(e.target.innerText);
})

multiplybtn.addEventListener("click", (e) => {
    display.innerText = display.innerText + e.target.innerText;
    array.push(e.target.innerText);
})

divsionbtn.addEventListener("click", (e) => {
    display.innerText = display.innerText + e.target.innerText;
    array.push(e.target.innerText);
})

subtractionbtn.addEventListener("click", (e) => {
    display.innerText = display.innerText + e.target.innerText;
    array.push(e.target.innerText);
})

clearbtn.addEventListener("click", () => {
    display.innerText = "0";
    console.clear();
    array = [];
})

equalbtn.addEventListener("click", () => {
    let x = calculate();
    display.innerText = x;
    array = [];
    array.push(x);
})

//Event Listeners for numbers
Array.from(document.getElementsByClassName("numeric-keys")).forEach((NumericKeys) => {
    NumericKeys.addEventListener("click", (e) => {
        if (display.innerText == "0") {
            display.innerText = e.target.innerText;
        }
        else {
            display.innerText = display.innerText + e.target.innerText;
        }

        if (array.length === 0 || /[+\-×÷]/.test(array[array.length - 1])) {
            console.log(e.target.innerText)
            array.push(e.target.innerText)
        }
        else {
            array.push(e.target.innerText);
            array[array.length - 2] = array[array.length - 2] + array[array.length - 1];
            array.pop();
        }
        console.log(array)
    })
})


const calculate = () => {
    let stack = [];
    let output = [];

    const precedence = {
        '+': 1,
        '-': 1,
        '×': 2,
        '÷': 2,
        "(": 0,
        ")": 0,
        "^": 3
    }

    function getPrecedence(operator) {
        return precedence[operator] || 0;
    }

    console.log(stack[stack.length - 1]);

    array.forEach((element) => {

        if (element === "(") {
            stack.push("(");
        }

        if (element === ")") {
            while (stack[stack.length - 1] !== "(") {
                output.push(stack[stack.length - 1]);
                stack.pop();
            }
            stack.pop();
        }

        if (/^\d+(\.\d+)?$/i.test(element)) {
            output.push(element);
        }

        if (["+", "-", "×", "÷"].includes(element)) {
            if (stack.length === 0) {
                stack.push(element);
            }

            else if (getPrecedence(element) > getPrecedence(stack[stack.length - 1])) {
                stack.push(element);
            }

            else if (getPrecedence(element) === getPrecedence(stack[stack.length - 1])) {
                output.push(stack[stack.length - 1]);
                stack.pop();
                stack.push(element);
            }

            else {
                while (getPrecedence(element) <= getPrecedence(stack[stack.length - 1])) {
                    output.push(stack[stack.length - 1]);
                    stack.pop();
                }
                stack.push(element);
            }
        }

        if (element == "^") {
            if (stack.length === 0 || getPrecedence(element) === getPrecedence(stack[stack.length - 1])) {
                stack.push(element)
            }
            else if (getPrecedence(element) > getPrecedence(stack[stack.length - 1])) {
                stack.push(element)
            }

            else if (getPrecedence(element) < getPrecedence(stack[stack.length - 1])) {
                output.push(stack[stack.length - 1]);
                stack.pop();
            }
        }
    })

    while (stack.length != 0) {
        output.push(stack[stack.length - 1]);
        stack.pop();
    }

    console.log(stack)
    let a = "";
    output.forEach((elem) => {
        a = a + " " + elem;
    })
    console.log(a)


    function isNumeric(value) {
        return !isNaN(Number(value));
    }

    let res;

    const operators = {
        "×": (a, b) => a * b,
        "+": (a, b) => a + b,
        "-": (a, b) => a - b,
        "÷": (a, b) => a / b,
        "^": (a, b) => Math.pow(a, b)
    };

    if (output.length>1) {
        for (let i = 0; i < output.length; i++) {
            const op = operators[output[i]];
            if (op && isNumeric(output[i - 2]) && isNumeric(output[i - 1])) {
                const a = parseInt(output[i - 2]);
                const b = parseInt(output[i - 1]);
                res = op(a, b);
                output.splice(i - 2, 3, res);
                i = i - 2;
            }
        }
    }
    else {
        res = output[output.length - 1]
    }

    console.log(res)

    return res;
}
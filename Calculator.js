const divsionbtn = document.getElementById("division-button");
const multiplybtn = document.getElementById("multiplication-button");
const subtractionbtn = document.getElementById("subtraction-button");
const additionbtn = document.getElementById("addition-button");
const equalbtn = document.getElementById("calculate-button");
const decimalbtn = document.getElementById("point-button");
const display = document.getElementById("display-container");
const clearbtn = document.getElementById("Clear-button");
const parenthesis1 = document.getElementById("parenthesis-open-button");
const parenthesis2 = document.getElementById("parenthesis-close-button");

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

document.addEventListener("keydown", (e) => {
    let key = e.key;

    if (!/[\d]/.test(key)) {
        return;
    }
    if (display.innerText == "0") {
        display.innerText = key;
    }
    else {
        display.innerText = display.innerText + key;
    }

    if (array.length === 0 || /[+\-×÷()]/.test(array[array.length - 1])) {
        console.log(key)
        array.push(key)
    }
    else {
        array.push(key);
        array[array.length - 2] = array[array.length - 2] + array[array.length - 1];
        array.pop();
    }
    console.log(array)
})

document.addEventListener("keydown", (e) => {

    let key = e.key

    if (!/^[+\-*/()]$/.test(key)) {
        return;
    }
    if (e.key == "*") {
        key = "×";
    }
    if (e.key == "/") {
        key = "÷";
    }
    else {
        if (display.innerText == "0") {
            display.innerText = key;
        }
        else {
            display.innerText = display.innerText + key;
        }
        array.push(key)
    }
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
        "^": 3,
        "tan": 4,
        "sin": 4,
        "cos": 4,
        "√": 4
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
                stack.push(element)
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

        if (["sin", "cos", "tan", "√"].includes(element)) {
            if (stack.length === 0) {
                stack.push(element);
            }
            // else if (getPrecedence(element) === getPrecedence(stack[stack.length - 1])) {
            //     stack.push(element)
            // }
            //  else if (getPrecedence(element) < getPrecedence(stack[stack.length - 1])) {
            //     stack.push(element)
            // }
            else if (getPrecedence(element) > getPrecedence(stack[stack.length - 1])) {
                stack.push(element);
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

    const torad = (deg) => {
        rad = deg * (Math.PI / 180)
        return rad;
    }

    function cleanTrig(val) {
        const epsilon = 1e-10;

        if (Math.abs(val - 1) < epsilon) return 1;
        if (Math.abs(val - 0.5) < epsilon) return 0.5;
        if (Math.abs(val - 0) < epsilon) return 0;

        return Number(val.toFixed(6));
    }

    let res;

    if (output.length > 1) {
        for (let i = 0; i < output.length; i++) {
            if (output[i] == "×" && isNumeric(output[(i - 2)]) && isNumeric(output[(i - 1)])) {
                res = parseInt(output[i - 1]) * parseInt(output[i - 2]);
                output.splice(i - 2, 3, res);
                i = i - 2;
            }
            else if (output[i] == "+" && isNumeric(output[(i - 2)]) && isNumeric(output[(i - 1)])) {
                res = parseInt(output[i - 1]) + parseInt(output[i - 2]);
                output.splice(i - 2, 3, res);
                i = i - 2;
            }
            else if (output[i] == "-" && isNumeric(output[(i - 2)]) && isNumeric(output[(i - 1)])) {
                res = parseInt(output[i - 2]) - parseInt(output[i - 1]);
                output.splice(i - 2, 3, res);
                i = i - 2;
            }
            else if (output[i] == "÷" && isNumeric(output[(i - 2)]) && isNumeric(output[(i - 1)])) {
                res = parseInt(output[i - 2]) / parseInt(output[i - 1]);
                output.splice(i - 2, 3, res);
                i = i - 2;
            }
            else if (output[i] == "^" && isNumeric(output[(i - 2)]) && isNumeric(output[(i - 1)])) {
                res = Math.pow(parseInt(output[i - 2]), parseInt(output[i - 1]));
                output.splice(i - 2, 3, res);
                i = i - 2;
            }
            else if (output[i] == "√" && isNumeric(output[(i - 1)])) {
                res = Math.sqrt(parseInt(output[i - 1]));
                output.splice(i - 1, 2, res);
                i = i - 1;
            }
            else if (output[i] == "tan" && isNumeric(output[(i - 1)])) {
                if (parseInt(output[(i - 1)]) == 90) {
                    res = Infinity;
                    output.splice(i - 1, 2, res);
                    i = i - 1;
                }
                else {
                    res = cleanTrig(Math.tan(torad((parseInt(output[i - 1])))));
                    output.splice(i - 1, 2, res);
                    i = i - 1;
                }
            }
            else if (output[i] == "sin" && isNumeric(output[(i - 1)])) {
                res = cleanTrig(Math.sin(torad((parseInt(output[i - 1])))));
                output.splice(i - 1, 2, res);
                i = i - 1;
            }
            else if (output[i] == "cos" && isNumeric(output[(i - 1)])) {
                res = cleanTrig(Math.cos(torad((parseInt(output[i - 1])))));
                output.splice(i - 1, 2, res);
                i = i - 1;
            }
        }
    }

    else {
        res = output[output.length - 1]
    }

    console.log(res)

    return res;
}
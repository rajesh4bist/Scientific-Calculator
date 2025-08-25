const divsionbtn = document.getElementById("division-button");
const multiplybtn = document.getElementById("multiplication-button");
const subtractionbtn = document.getElementById("subtraction-button");
const additionbtn = document.getElementById("addition-button");
const equalbtn = document.getElementById("calculate-button");
const decimalbtn = document.getElementById("point-button");
const display = document.getElementById("display-container");
const clearbtn = document.getElementById("Clear-button");
const sqrtbtn = document.getElementById("square-root-button");
const parenthesis1 = document.getElementById("parenthesis-open-button");
const parenthesis2 = document.getElementById("parenthesis-close-button");
const tanbtn = document.getElementById("tan-button");
const sinbtn = document.getElementById("sin-button");
const cosbtn = document.getElementById("cos-button");
const topower = document.getElementById("topower-button");
const cuberoot = document.getElementById("cube-root-button");
const fractionbtn = document.getElementById("fraction-button");

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
    if (display.innerText == "0") {
        display.innerText = e.target.innerText;
        array.push(e.target.innerText);
    }
    else {
        display.innerText = display.innerText + e.target.innerText;
        array.push(e.target.innerText);
    }
})

clearbtn.addEventListener("click", () => {
    display.innerText = "0";
    console.clear();
    array = [];
})

parenthesis1.addEventListener("click", (e) => {
    if (display.innerText == "0") {
        display.innerText = e.target.innerText;
        array.push(e.target.innerText);
    }
    else {
        display.innerText = display.innerText + e.target.innerText;
        array.push(e.target.innerText);
    }
})
parenthesis2.addEventListener("click", (e) => {
    if (display.innerText == "0") {
        display.innerText = e.target.innerText;
        array.push(e.target.innerText);
    }
    else {
        display.innerText = display.innerText + e.target.innerText;
        array.push(e.target.innerText);
    }
})

topower.addEventListener("click", () => {
    display.innerText = display.innerText + "^";
    array.push("^");
})

tanbtn.addEventListener("click", (e) => {
    if (display.innerText == "0") {
        display.innerText = "tan(";
        array.push(e.target.innerText);
        array.push("(");
    }
    else {
        display.innerText = display.innerText + "tan(";
        array.push(e.target.innerText);
        array.push("(")
    }
})

sinbtn.addEventListener("click", (e) => {
    if (display.innerText == "0") {
        display.innerText = "sin(";
        array.push(e.target.innerText);
        array.push("(");
    }
    else {
        display.innerText = display.innerText + "sin(";
        array.push(e.target.innerText);
        array.push("(")
    }
})

cosbtn.addEventListener("click", (e) => {
    if (display.innerText == "0") {
        display.innerText = "cos(";
        array.push(e.target.innerText);
        array.push("(");
    }
    else {
        display.innerText = display.innerText + "cos(";
        array.push(e.target.innerText);
        array.push("(")
    }
})

sqrtbtn.addEventListener("click", (e) => {
    if (display.innerText == "0") {
        display.innerText = "√(";
    }
    else {
        display.innerText = display.innerText + "√(";
    }
    array.push("√");
    array.push("(");
})

cuberoot.addEventListener("click", (e) => {
    if (display.innerText == "0") {
        display.innerText = "3√(";
    }
    else {
        display.innerText = display.innerText + "3√(";
    }
    array.push("3√");
    array.push("(");
})

fractionbtn.addEventListener("click", (e) => {
    if (display.innerText == "0") {
        display.innerText = "1÷(";
    }
    else {
        display.innerText = display.innerText + "1÷(";
    }
    array.push("1");
    array.push("÷");
    array.push("(");
})


equalbtn.addEventListener("click", () => {
    let x = calculate();
    display.innerText = x;
    array = [];
    array.push(x);
})

document.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        e.preventDefault();
        e.stopPropagation();
        let x = calculate();
        display.innerText = x;
        array = [];
        array.push(x);
    }
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

        if (array.length === 0 || /[+\-×÷()^]/.test(array[array.length - 1])) {
            console.log(e.target.innerText)
            array.push(e.target.innerText)
        }
        else {
            array.push(e.target.innerText);
            array[array.length - 2] = array[array.length - 2] + array[array.length - 1];
            array.pop();
        }
        console.log(array)
        // NumericKeys.blur();
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

    if (array.length === 0 || /[+\-×÷()^]/.test(array[array.length - 1])) {
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
    else if (e.key == "/") {
        key = "÷";
    }

    if (display.innerText == "0") {
        display.innerText = key;
    }
    else {
        display.innerText = display.innerText + key;
    }
    array.push(key)
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
        "√(": 0,
        "^": 3,
        "tan": 4,
        "sin": 4,
        "cos": 4,
        "√": 4,
        "3√": 4
    }

    function getPrecedence(operator) {
        return precedence[operator] || 0;
    }

    console.log(stack[stack.length - 1]);

    array.forEach((element) => {

        if (element === "(") {
            stack.push("(");
        }

        if (element == ")") {
            while (stack[stack.length - 1] !== "(") {
                output.push(stack[stack.length - 1]);
                stack.pop();
            }
            stack.pop();
        }

        if (/^\d+(\.\d+)?$/i.test(element) || element == Infinity) {
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
            while (getPrecedence(element) < getPrecedence(stack[stack.length - 1])) {
                output.push(stack[stack.length - 1]);
                stack.pop();
                stack.push(element);
            }
        }
        if (["sin", "cos", "tan", "√", "3√"].includes(element)) {
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

    while (stack.length !== 0) {
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
                res = parseFloat(output[i - 1]) * parseFloat(output[i - 2]);
                output.splice(i - 2, 3, res);
                i = i - 2;
            }
            else if (output[i] == "+" && isNumeric(output[(i - 2)]) && isNumeric(output[(i - 1)])) {
                res = parseFloat(output[i - 1]) + parseFloat(output[i - 2]);
                output.splice(i - 2, 3, res);
                i = i - 2;
            }
            else if (output[i] == "-" && isNumeric(output[(i - 2)]) && isNumeric(output[(i - 1)])) {
                res = parseFloat(output[i - 2]) - parseFloat(output[i - 1]);
                output.splice(i - 2, 3, res);
                i = i - 2;
            }
            else if (output[i] == "÷" && isNumeric(output[(i - 2)]) && isNumeric(output[(i - 1)])) {
                res = parseFloat(output[i - 2]) / parseFloat(output[i - 1]);
                output.splice(i - 2, 3, res);
                i = i - 2;
            }
            else if (output[i] == "^" && isNumeric(output[(i - 2)]) && isNumeric(output[(i - 1)])) {
                res = Math.pow(parseFloat(output[i - 2]), parseFloat(output[i - 1]));
                output.splice(i - 2, 3, res);
                i = i - 2;
            }
            else if (output[i] == "√" && isNumeric(output[(i - 1)])) {
                res = Math.sqrt(parseFloat(output[i - 1]));
                output.splice(i - 1, 2, res);
                i = i - 1;
            }
            else if (output[i] == "3√" && isNumeric(output[(i - 1)])) {
                res = Math.cbrt(parseFloat(output[i - 1]));
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
                    res = cleanTrig(Math.tan(torad((parseFloat(output[i - 1])))));
                    output.splice(i - 1, 2, res);
                    i = i - 1;
                }
            }
            else if (output[i] == "sin" && isNumeric(output[(i - 1)])) {
                res = cleanTrig(Math.sin(torad((parseFloat(output[i - 1])))));
                output.splice(i - 1, 2, res);
                i = i - 1;
                console.log(res)
            }
            else if (output[i] == "cos" && isNumeric(output[(i - 1)])) {
                res = cleanTrig(Math.cos(torad((parseFloat(output[i - 1])))));
                output.splice(i - 1, 2, res);
                i = i - 1;
                console.log(res)
            }
        }
    }

    else {
        res = output[output.length - 1]
    }

    console.log(res)
    return res;
} 

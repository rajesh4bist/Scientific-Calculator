const divsionbtn = document.getElementById("division-button");
const multiplybtn = document.getElementById("multiplication-button");
const subtractionbtn = document.getElementById("subtraction-button");
const additionbtn = document.getElementById("addition-button");
const equalbtn = document.getElementById("calculate-button");
const decimalbtn = document.getElementById("point-button");
const display = document.getElementById("display-container");
const clearbtn = document.getElementById("Clear-button");
const sqrtbtn = document.getElementById("square-root-button");
const sqrbtn = document.getElementById("square-button");
const cubebtn = document.getElementById("cube-button");
const parenthesis1 = document.getElementById("parenthesis-open-button");
const parenthesis2 = document.getElementById("parenthesis-close-button");
const tanbtn = document.getElementById("tan-button");
const sinbtn = document.getElementById("sin-button");
const cosbtn = document.getElementById("cos-button");
const topower = document.getElementById("topower-button");
const cuberoot = document.getElementById("cube-root-button");
const fractionbtn = document.getElementById("fraction-button");
const pibtn = document.getElementById("pi-button");
const ebtn = document.getElementById("e-button");
const factbtn = document.getElementById("factorial-button");
const randbtn = document.getElementById("random-button");
const lnbtn = document.getElementById("ln-button");
const sinhbtn = document.getElementById("sinh-button");
const coshbtn = document.getElementById("cosh-button");
const tanhbtn = document.getElementById("tanh-button");
const secondbtn = document.getElementById("second-button");
const logbtn = document.getElementById("log-button");
const percentbtn = document.getElementById("percentage-button");
const pointbtn = document.getElementById("point-button");

let array = [];

additionbtn.addEventListener("click", (e) => {
    if (["+", "-", "×", "÷"].includes(array[array.length - 1])) {
        display.innerText = display.innerText.slice(0, -1) + e.target.innerText;
        array.pop();
        array.push(e.target.innerText)
        console.log(array);
        return;
    }

    if (display.innerText == "0") {
        display.innerText = display.innerText + e.target.innerText;
        array.push(0)
    }
    else {
        display.innerText = display.innerText + e.target.innerText;
    }
    array.push(e.target.innerText);
})

multiplybtn.addEventListener("click", (e) => {
    if (["+", "-", "×", "÷"].includes(array[array.length - 1])) {
        display.innerText = display.innerText.slice(0, -1) + e.target.innerText;
        array.pop();
        array.push(e.target.innerText)
        console.log(array);
        return;
    }

    if (display.innerText == "0") {
        display.innerText = display.innerText + e.target.innerText;
        array.push(0)
    }
    else {
        display.innerText = display.innerText + e.target.innerText;
    }
    array.push(e.target.innerText);
})

divsionbtn.addEventListener("click", (e) => {
    if (["+", "-", "×", "÷"].includes(array[array.length - 1])) {
        display.innerText = display.innerText.slice(0, -1) + e.target.innerText;
        array.pop();
        array.push(e.target.innerText)
        console.log(array);
        return;
    }

    if (display.innerText == "0") {
        display.innerText = display.innerText + e.target.innerText;
        array.push(0)
    }
    else {
        display.innerText = display.innerText + e.target.innerText;
    }
    array.push(e.target.innerText);
})

subtractionbtn.addEventListener("click", (e) => {
    if (["+", "-", "×", "÷"].includes(array[array.length - 1])) {
        display.innerText = display.innerText.slice(0, -1) + e.target.innerText;
        array.pop();
        array.push(e.target.innerText)
        console.log(array);
        return;
    }

    if (display.innerText == "0") {
        display.innerText = e.target.innerText;
        array.push(e.target.innerText);
    }
    else {
        display.innerText = display.innerText + e.target.innerText;
        array.push(e.target.innerText);
    }
})

percentbtn.addEventListener("click", (e) => {
    display.innerText = display.innerText + e.target.innerText;
    array.push("÷");
    array.push("100");
})

pointbtn.addEventListener("click", (e) => {
    if (array.length > 0 && array[array.length - 1].includes(".")) {
        return;
    }

    if (display.innerText == "0") {
        display.innerText = display.innerText + e.target.innerText;
        array.push(`0${e.target.innerText}`)
    }
    else {

        display.innerText = display.innerText + e.target.innerText;
        array.push(e.target.innerText);
        array[array.length - 2] = array[array.length - 2] + array[array.length - 1];
        array.pop();
    }
})

document.addEventListener("keydown", (e) => {
    key = e.key;
    if (key !== ".") {
        return;
    }
    if (array.length > 0 && array[array.length - 1].includes(".")) {
        return;
    }
    if (display.innerText == "0") {
        display.innerText = display.innerText + ".";
        array.push(`0.`)
    }
    else {
        display.innerText = display.innerText + ".";
        array.push(".");
        array[array.length - 2] = array[array.length - 2] + array[array.length - 1];
        array.pop();
    }
})

let timer;
clearbtn.addEventListener("mousedown", () => {
    if (clearbtn.innerText !== "C") {
        return;
    };
    timer = setTimeout(() => {
        while (array.length > 0) {
            array.pop();
        }

        display.innerText = "0"
    }, 500);
})
clearbtn.addEventListener("mouseup", () => {
    clearTimeout(timer);
})
clearbtn.addEventListener("mouseleave", () => {
    clearTimeout(timer); 
});

clearbtn.addEventListener("click", () => {

    if (clearbtn.innerText == "AC") {
        display.innerText = "0";
        console.clear();
        array = [];
        return;
    }

    let str = array[array.length - 1];

    const funcs = ["sin", "cos", "tan", "√", "∛", "!", "ln", "log", "sinh", "cosh", "tanh", "asinh", "acosh", "atanh", "asin", "acos", "atan"];

    if (str == "(" && funcs.includes(array[array.length - 2])) {
        let funcname = (array[array.length - 2])
        array.pop();
        array.pop();
        display.innerText = display.innerText.slice(0, -(funcname.length + 1));
        return;
    }

    if (str.length == 1) {
        array.pop();
        display.innerText = display.innerText.slice(0, -1);
    }
    else if (str.length > 1) {
        array[array.length - 1] = array[array.length - 1].slice(0, -1);
        display.innerText = display.innerText.slice(0, -1);
    }
});

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

sqrbtn.addEventListener("click", () => {
    display.innerHTML = display.innerHTML + "\u00B2";
    array.push("^");
    array.push("2");
})

cubebtn.addEventListener("click", () => {
    display.innerHTML = display.innerHTML + "\u00B3";
    array.push("^");
    array.push("3");
})

topower.addEventListener("click", () => {
    display.innerText = display.innerText + "^";
    array.push("^");
})

pibtn.addEventListener("click", (e) => {
    if (display.innerText == "0") {
        display.innerText = e.target.innerText;
        array.push(Math.PI);
    }
    else {
        display.innerText = display.innerText + e.target.innerText;
        array.push(Math.PI);
    }
})

ebtn.addEventListener("click", (e) => {
    if (display.innerText == "0") {
        display.innerHTML = e.target.innerText;
        array.push(Math.E);
    }
    else {
        display.innerHTML = display.innerHTML + e.target.innerText;
        array.push(Math.E);
    }
})

randbtn.addEventListener("click", (e) => {
    const randnum = Math.random().toFixed(10);
    if (display.innerText == "0") {
        display.innerText = randnum;
        array.push(randnum);
    }
    else {
        display.innerText = display.innerText + randnum;
        array.push(randnum);
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
        display.innerText = "∛(";
    }
    else {
        display.innerText = display.innerText + "∛(";
    }
    array.push("∛");
    array.push("(");
})

factbtn.addEventListener("click", (e) => {
    display.innerText = display.innerText + "!";
    array.push("!");
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

lnbtn.addEventListener("click", (e) => {
    if (display.innerText == "0") {
        display.innerText = "ln(";
    }
    else {
        display.innerText = display.innerText + "ln(";
    }
    array.push("ln");
    array.push("(");
})

logbtn.addEventListener("click", (e) => {
    if (display.innerText == "0") {
        display.innerText = "log\u2081\u2080(";
    }
    else {
        display.innerText = display.innerText + "log\u2081\u2080(";
    }
    array.push("log");
    array.push("(");
})



let istoggled = false;

secondbtn.addEventListener("click", () => {
    istoggled = !istoggled;
    console.log(istoggled)

    if (istoggled) {
        sinbtn.innerHTML = "sin<sup>-1<sup>"
        cosbtn.innerHTML = "cos<sup>-1<sup>"
        tanbtn.innerHTML = "tan<sup>-1<sup>"
        sinhbtn.innerHTML = "sinh<sup>-1<sup>"
        coshbtn.innerHTML = "cosh<sup>-1<sup>"
        tanhbtn.innerHTML = "tanh<sup>-1<sup>"

    }
    else {
        sinbtn.innerText = "sin";
        cosbtn.innerText = "cos";
        tanbtn.innerText = "tan";
        sinhbtn.innerText = "sinh";
        coshbtn.innerText = "cosh";
        tanhbtn.innerText = "tanh";

    }
})

// Trigonometric functions
const trigButtons = [
    { btn: tanbtn, normal: "tan", inverse: "atan" },
    { btn: sinbtn, normal: "sin", inverse: "asin" },
    { btn: cosbtn, normal: "cos", inverse: "acos" },
    { btn: sinhbtn, normal: "sinh", inverse: "asinh" },
    { btn: coshbtn, normal: "cosh", inverse: "acosh" },
    { btn: tanhbtn, normal: "tanh", inverse: "atanh" }
];

trigButtons.forEach(({ btn, normal, inverse }) => {
    btn.addEventListener("click", () => {
        const func = !istoggled ? normal : inverse;
        if (display.innerText === "0") {
            display.innerHTML = `${func}(`;
        }
        else {
            display.innerHTML += `${func}(`;
        }
        array.push(func);
        array.push("(");
    });
});


equalbtn.addEventListener("click", () => {
    let x = calculate();
    display.innerText = x;
    array = [];
    let str = String(x)
    array.push(str);
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

    if (!/^[+\-*/()!]$/.test(key)) {
        return;
    }
    if (e.key == "*") {
        key = "×";
    }
    else if (e.key == "/") {
        key = "÷";
    }

    if (["+", "-", "×", "÷"].includes(array[array.length - 1])) {
        display.innerText = display.innerText.slice(0, -1) + key;
        array.pop();
        array.push(key)
        console.log(array);
        return;
    }


    if (display.innerText == "0") {
        display.innerText = key;
    }
    else {
        display.innerText = display.innerText + key;
    }
    array.push(key)
})


const factorial = (fact) => {
    let facto = 1;
    if (fact < 0) {
        return undefined;
    }
    else if (fact == 0) {
        return 1;
    }
    else {
        for (let i = fact; i >= 1; i--) {
            facto = facto * i;
        }
        return facto;
    }
}

Array.from(document.getElementsByTagName("button")).forEach((elem) => {
    elem.addEventListener("click", () => {
        if (elem == equalbtn) {
            clearbtn.innerText = "AC";
            return;
        }
        else if (array.length > 0) {
            clear();
        }
        else if (array.length == 0) {
            display.innerText = "0";
            clearbtn.innerText = "AC";
        }

    })
})

const clear = () => {
    clearbtn.innerText = "C";
}


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
        "∛": 4,
        "!": 4,
        "ln": 4,
        "sinh": 4,
        "cosh": 4,
        "tanh": 4,
        "asin": 4,
        "acos": 4,
        "atan": 4,
        "sinh": 4,
        "cosh": 4,
        "tanh": 4,
        "asinh": 4,
        "acosh": 4,
        "atanh": 4,
        "log": 4
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
        if (["sin", "cos", "tan", "√", "∛", "!", "ln", "log", "sinh", "cosh", "tanh", "asinh", "acosh", "atanh", "asin", "acos", "atan"].includes(element)) {
            if (stack.length === 0) {
                stack.push(element);
                // console.log(stack);
            }
            else if (getPrecedence(element) === getPrecedence(stack[stack.length - 1])) {
                stack.push(element)
            }
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
        rad = deg * (Math.PI / 180);
        return rad;
    }

    const todeg = (rad) => {
        deg = rad * (180 / Math.PI);
        return deg;
    }

    function cleanTrig(val) {
        const epsilon = 1e-10;

        if (Math.abs(val - 1) < epsilon) return 1;
        if (Math.abs(val - 0.5) < epsilon) return 0.5;
        if (Math.abs(val - 0) < epsilon) return 0;

        return Number(val.toFixed(10));
    }

    let res;

    const binaryop = {
        "×": (a, b) => a * b,
        "+": (a, b) => a + b,
        "-": (a, b) => a - b,
        "÷": (a, b) => a / b,
        "^": (a, b) => Math.pow(a, b),
    }

    const unaryop = {
        "√": (x) => Math.sqrt(x),
        "∛": (x) => Math.cbrt(x),
        "tan": (x) => (x == 90) ? Infinity : cleanTrig(Math.tan(torad(x))),
        "sin": (x) => cleanTrig(Math.sin(torad(x))),
        "cos": x => cleanTrig(Math.cos(torad(x))),
        "!": x => factorial(x),
        "ln": x => Math.log(x),
        "log": x => Math.log10(x),
        "asin": x => todeg(Math.asin(x)),
        "acos": x => todeg(Math.acos(x)),
        "atan": x => todeg(Math.atan(x)),
        "sinh": x => cleanTrig(Math.sinh(torad(x))),
        "cosh": x => cleanTrig(Math.cosh(torad(x))),
        "tanh": x => cleanTrig(Math.tanh(torad(x))),
        "asinh": x => Math.asinh(x),
        "acosh": x => Math.acosh(x),
        "atanh": x => Math.atanh(x)
    }

    if (output.length > 1) {
        for (let i = 0; i < output.length; i++) {

            let a = parseFloat(output[(i - 1)]);
            let b = parseFloat(output[(i - 2)]);

            if (binaryop[output[i]] && isNumeric(a) && isNumeric(b)) {
                res = binaryop[output[i]](b, a);
                output.splice(i - 2, 3, res);
                i = i - 2;
            }
            else if (unaryop[output[i]] && isNumeric(a)) {
                res = unaryop[output[i]](a);
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

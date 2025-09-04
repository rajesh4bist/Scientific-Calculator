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
        display.innerHTML = display.innerHTML.slice(0, -1) + e.target.innerHTML;
        array.pop();
        array.push(e.target.innerHTML)
        console.log(array);
        return;
    }

    if (display.innerText == "0") {
        display.innerHTML = display.innerHTML + e.target.innerHTML;
        array.push(0)
    }
    else {
        display.innerHTML = display.innerHTML + e.target.innerHTML;
    }
    array.push(e.target.innerHTML);
})

multiplybtn.addEventListener("click", (e) => {
    if (["+", "-", "×", "÷"].includes(array[array.length - 1])) {
        display.innerHTML = display.innerHTML.slice(0, -1) + e.target.innerHTML;
        array.pop();
        array.push(e.target.innerHTML)
        console.log(array);
        return;
    }

    if (display.innerText == "0") {
        display.innerHTML = display.innerHTML + e.target.innerHTML;
        array.push(0)
    }
    else {
        display.innerHTML = display.innerHTML + e.target.innerHTML;
    }
    array.push(e.target.innerHTML);
})

divsionbtn.addEventListener("click", (e) => {
    if (["+", "-", "×", "÷"].includes(array[array.length - 1])) {
        display.innerHTML = display.innerHTML.slice(0, -1) + e.target.innerHTML;
        array.pop();
        array.push(e.target.innerHTML)
        console.log(array);
        return;
    }

    if (display.innerText == "0") {
        display.innerHTML = display.innerHTML + e.target.innerHTML;
        array.push(0)
    }
    else {
        display.innerHTML = display.innerHTML + e.target.innerHTML;
    }
    array.push(e.target.innerHTML);
})

subtractionbtn.addEventListener("click", (e) => {
    if (["+", "-", "×", "÷"].includes(array[array.length - 1])) {
        display.innerHTML = display.innerHTML.slice(0, -1) + e.target.innerHTML;
        array.pop();
        array.push(e.target.innerHTML)
        console.log(array);
        return;
    }

    if (display.innerText == "0") {
        display.innerHTML = e.target.innerHTML;
        array.push(e.target.innerHTML);
    }
    else {
        display.innerHTML = display.innerHTML + e.target.innerHTML;
        array.push(e.target.innerHTML);
    }
})

percentbtn.addEventListener("click", (e) => {
    display.innerHTML = display.innerHTML + e.target.innerHTML;
    array.push("÷");
    array.push("100");
})

pointbtn.addEventListener("click", (e) => {
    if (array.length > 0 && array[array.length - 1].includes(".")) {
        return;
    }

    if (display.innerText == "0") {
        display.innerHTML = display.innerHTML + e.target.innerHTML;
        array.push(`0${e.target.innerHTML}`)
    }
    else {
        display.innerHTML = display.innerHTML + e.target.innerHTML;
        array.push(e.target.innerHTML);
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
        display.innerHTML = display.innerHTML + ".";
        array.push(`0.`)
    }
    else {
        display.innerText = display.innerHTML + ".";
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
        display.innerHTML = "0"
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
        display.innerHTML = "0";
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
        display.innerHTML = display.innerHTML.slice(0, -(funcname.length + 1));
        return;
    }

    if (str.length == 1) {
        array.pop();
        display.innerHTML = display.innerHTML.slice(0, -1);
    }
    else if (str.length > 1) {
        array[array.length - 1] = array[array.length - 1].slice(0, -1);
        display.innerHTML = display.innerHTML.slice(0, -1);
    }
});

parenthesis1.addEventListener("click", (e) => {
    if (display.innerText == "0") {
        display.innerHTML = "("
        array.push("(");
    }
    else {
        display.innerHTML = display.innerHTML + "(";
        array.push("(");
    }
})
parenthesis2.addEventListener("click", (e) => {
    if (display.innerHTML == "0") {
        display.innerHTML = ")";
        array.push(")");
    }
    else {
        display.innerHTML = display.innerHTML + ")";
        array.push(")");
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
    display.innerHTML = display.innerHTML + "^";
    array.push("^");
})

pibtn.addEventListener("click", (e) => {
    if (display.innerHTML == "0") {
        display.innerHTML = "<span style='font-family:lib;'>π</span>";
        array.push(Math.PI);
    }
    else {
        display.innerHTML = display.innerHTML + "<span style='font-family:lib;'>π</span>";
        array.push(Math.PI);
    }
})

ebtn.addEventListener("click", (e) => {
    if (display.innerText == "0") {
        display.innerHTML = "<span style='font-family:Euphoria Script;'>e</span>";
        array.push(Math.E);
    }
    else {
        display.innerHTML = display.innerHTML + "<span style='font-family:Euphoria Script;'>e</span>";
        array.push(Math.E);
    }
})

randbtn.addEventListener("click", (e) => {
    const randnum = Math.random().toFixed(10);
    if (display.innerText == "0") {
        display.innerHTML = randnum;
        array.push(randnum);
    }
    else {
        display.innerHTML = display.innerHTML + randnum;
        array.push(randnum);
    }
})

sqrtbtn.addEventListener("click", (e) => {
    if (display.innerText == "0") {
        display.innerHTML = "√(";
    }
    else {
        display.innerHTML = display.innerHTML + "√(";
    }
    array.push("√");
    array.push("(");
})

cuberoot.addEventListener("click", (e) => {
    if (display.innerText == "0") {
        display.innerHTML = "∛(";
    }
    else {
        display.innerHTML = display.innerHTML + "∛(";
    }
    array.push("∛");
    array.push("(");
})

factbtn.addEventListener("click", (e) => {
    display.innerHTML = display.innerHTML + "!";
    array.push("!");
})

fractionbtn.addEventListener("click", (e) => {
    if (display.innerText == "0") {
        display.innerHTML = "1÷(";
    }
    else {
        display.innerHTML = display.innerHTML + "1÷(";
    }
    array.push("1");
    array.push("÷");
    array.push("(");
})

lnbtn.addEventListener("click", (e) => {
    if (display.innerText == "0") {
        display.innerHTML = "ln(";
    }
    else {
        display.innerHTML = display.innerHTML + "ln(";
    }
    array.push("ln");
    array.push("(");
});

logbtn.addEventListener("click", (e) => {
    if (display.innerText == "0") {
        display.innerHTML = "log<sub style='font-size:30px;'>10</sub>(";
    }
    else {
        display.innerHTML = display.innerHTML + "log<sub style='font-size:30px;'>10</sub>(";
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
        sinbtn.innerHTML = "sin";
        cosbtn.innerHTML = "cos";
        tanbtn.innerHTML = "tan";
        sinhbtn.innerHTML = "sinh";
        coshbtn.innerHTML = "cosh";
        tanhbtn.innerHTML = "tanh";

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
    display.innerHTML = x;
    array = [];
    let str = String(x)
    array.push(str);
})

document.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        e.preventDefault();
        e.stopPropagation();
        let x = calculate();
        display.innerHTML = x;
        array = [];
        let str = String(x)
        array.push(str);
    }
})


//Event Listeners for numbers
Array.from(document.getElementsByClassName("numeric-keys")).forEach((NumericKeys) => {
    NumericKeys.addEventListener("click", (e) => {
        if (display.innerText == "0") {
            display.innerHTML = e.target.innerHTML;
        }
        else {
            display.innerHTML = display.innerHTML + e.target.innerHTML;
        }

        if (array.length === 0 || /[+\-×÷()^]/.test(array[array.length - 1])) {
            console.log(e.target.innerHTML)
            array.push(e.target.innerHTML)
        }
        else {
            array.push(e.target.innerHTML);
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
        display.innerHTML = key;
    }
    else {
        display.innerHTML = display.innerHTML + key;
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

    if (["+", "-", "×", "÷"].includes(key)) {
        if (["+", "-", "×", "÷"].includes(array[array.length - 1])) {
            display.innerHTML = display.innerHTML.slice(0, -1) + key;
            array.pop();
            array.push(key)
            console.log(array);
            return;
        }
    }

    if (display.innerText == "0" && ["+", "×", "÷"].includes(key)) {
        display.innerHTML += key;
        array.push("0")
        array.push(key)
    }
    else if (display.innerText == "0" && ["-", "(", ")"].includes(key)) {
        display.innerHTML = key;
        array.push(key);
    }
    else {
        display.innerHTML = display.innerHTML + key;
        array.push(key)
    }
})

const powerfunc = () => {
    //Needs fixing
    let superscript = false;
    let SupArray = [];
    Array.from(document.getElementsByTagName("button")).forEach((elem) => {
        elem.addEventListener("click", (e) => {
            let val = e.target.innerHTML;
            if (superscript) {
                display.innerHTML += `<sup class="superscript">${val}</sup>`;
                SupArray.push(val);
            }
        });
    });
}

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
            clearbtn.innerHTML = "AC";
            return;
        }
        else if (array.length > 0) {
            clear();
        }
        else if (array.length == 0) {
            display.innerHTML = "0";
            clearbtn.innerHTML = "AC";
        }

    });
});

document.addEventListener("keydown", (e) => {
    if (e.key === "Backspace") {
        clearbtn.click();
    }
    else {
        const btn = Array.from(document.getElementsByTagName("button")).find(b => b.innerText == e.key);
        if (e.key == "Enter") {
            clearbtn.innerHTML = "AC";
            return;
        }
        if (btn) {
            if (array.length > 0) {
                clear();
            }
            else if (array.length == 0) {
                display.innerHTML = "0";
                clearbtn.innerHTML = "AC";
            }
        }
    }
});

const clear = () => {
    clearbtn.innerHTML = "C";
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

    const tan = (val) => {
        let value = ((val % 360) + 360) % 360;

        if (value % 180 == 90) {
            return Infinity;
        }

        return cleanTrig(Math.tan(torad(value)));
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
        "tan": (x) => tan(x),
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

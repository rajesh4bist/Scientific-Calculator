// let array = ["a","+","b","*","(","c","^","d","-","e",")","^","(","f","+","g","*","h",")","-","i"];
let array = ["8","/","8","*","8"];

let stack = [];
let output = [];

const precedence = {
    '+': 1,
    '-': 1,
    '*': 2,
    '/': 2,
    "(": 0,
    ")": 0,
    "^": 3
};

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

    if (/^[0-9]$/i.test(element)) {
        output.push(element);
    }

    if (["+", "-", "*", "/"].includes(element)) {
        if (stack.length === 0) {
            stack.push(element);
        }

        else if (getPrecedence(element) > getPrecedence(stack[stack.length - 1])) {
            stack.push(element);
        }

        else if (getPrecedence(element) === getPrecedence(stack[stack.length - 1])) {
            output.push(stack[stack.length - 1])
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
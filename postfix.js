// let array = ["(", "A", "+", "B", ")", "*", "(", "C", "-", "D", ")"];
let array = [ "A", "/", "(","B", "*", "C",")"];
//A*(B+C)/D
//ABC+*D/
// console.log(array);
let stack = [];
let output = [];

const precedence = {
    '+': 1,
    '-': 1,
    '*': 2,
    '/': 2,
    "(": 0,
    ")": 0
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

    if (/^[a-z]$/i.test(element)) {
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
            output.push(stack[stack.length - 1]);
            stack.pop();
        }
    }
})

while (stack.length != 0) {
    output.push(stack[stack.length - 1]);
    stack.pop();
}

// Else, pop all operators from the stack that have precedence higher than or equal to that of the current operator. After that push the current operator onto the stack.

// If the precedence of the current scanned operator is higher than the precedence of the operator on top of the stack, or if the stack is empty, or if the stack contains a ‘(‘, then push the current operator onto the stack.



console.log(stack)
let a = "";
output.forEach((elem) => {
    a = a + " " + elem;
})


console.log(a)
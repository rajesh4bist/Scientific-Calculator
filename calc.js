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


clearbtn.addEventListener("click", () => {
    display.innerText = "0";
    console.clear();
})
equalbtn.addEventListener("click", () => {
    calculate();
    display.innerText = result;
})

let result;

const calculate = () => {
    for (let i=0; i < array.length; i++) {
        const element = array[i];
        if (element == "×") {
            console.log(i);
            let num1 = array[i - 1];
            let num2 = array[i + 1];
            result = num1 * num2;
            console.log(num1, num2, result)
            array.splice(i - 1, 3, result);
            console.log(array);
            if (i != array.length - 1) {
                calculate();
            }
        }

         if (element == "+") {
            console.log(i);
            let num1 = parseInt(array[i - 1]);
            let num2 = parseInt(array[i + 1]);
            result = num1 + num2;
            console.log(num1, num2, result)
            array.splice(i - 1, 3, result);
            console.log(array);
            if (i != array.length - 1) {
                calculate();
            }
        }
    }
    


    clearbtn.addEventListener("click", () => {
        array = [];
    })
}

//Event Listeners for numbers
Array.from(document.getElementsByClassName("numeric-keys")).forEach((NumericKeys) => {
    NumericKeys.addEventListener("click", (e) => {
        if (display.innerText == "0") {
            display.innerText = e.target.innerText;
        }
        else {
            display.innerText = display.innerText + e.target.innerText;
        }

        if (array[array.length - 1] == "+" || array.length == 0 || array[array.length - 1] == "×") {
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









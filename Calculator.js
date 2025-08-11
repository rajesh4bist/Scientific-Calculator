const divsionbtn = document.getElementById("division-button");
const multiplybtn = document.getElementById("multiplication-button");
const subtractionbtn = document.getElementById("subtraction-button");
const additionbtn = document.getElementById("addition-button");
const equalbtn = document.getElementById("calculate-button");
const decimalbtn = document.getElementById("point-button")
const display = document.getElementById("display-container")

let result = "";
let operation = "";
let previousOperand = 0;

const DisplayValue = (value) => {

    if (value === "." && result.includes(".")) {
        return;
    }
    result += value;
    UpdateDisplay();

    if (value == "") {
        display.innerText = 0;
        result = "";
    }
}

const UpdateDisplay = () => {
    if (operation) {
        display.innerText = previousOperand + "" + operation + "" + result;
    }
    else{
        display.innerText = result
    }
}


document.getElementById("Clear-button").addEventListener("click", () => {
    DisplayValue("");
    console.clear();
})

//selecting number
Array.from(document.getElementsByClassName("numeric-keys")).forEach((NumericKeys) => {
    NumericKeys.addEventListener("click", (e) => {
        console.log(e.target)
        DisplayValue(e.target.innerText);
    })
})

//selecting operator
const selectoperator = (operatorvalue) => {
    if (previousOperand !== "" && operation != "") {
        calculateResult(); 
    }
    operation=operatorvalue;
    previousOperand = parseInt(result);
    result = "";
    UpdateDisplay();
}

decimalbtn.addEventListener("click", () => {
    DisplayValue(".")
})
additionbtn.addEventListener("click", () => {
    selectoperator("+")
});
subtractionbtn.addEventListener("click", () => {
    selectoperator("-")
});
multiplybtn.addEventListener("click", () =>{
    selectoperator("×")
});
divsionbtn.addEventListener("click", () =>{
    selectoperator("÷")
});

equalbtn.addEventListener("click", ()=>{

})

function updateresult(){
    
}












let operatorlength = document.getElementsByClassName("operators");
Array.from(operatorlength).forEach((value) => {
    value.style.fontSize = "23px"
});
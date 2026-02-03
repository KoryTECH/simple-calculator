const displayInput = document.querySelector("#display");

const buttons = document.querySelectorAll("button");

let currentOperand = '';
let previousOperand = '';
let operator = '';

buttons.forEach(button =>{
    button.addEventListener('click', ()=>{
        const buttonValue = button.innerText;
        
        if(!isNaN(buttonValue)){
            currentOperand += buttonValue;
            displayInput.value = currentOperand;
        }
        else if(buttonValue === "+" || buttonValue === "-"|| buttonValue === "/"|| buttonValue === "*"){
            previousOperand = currentOperand;
            operator = buttonValue;
            displayInput.value  = operator
            currentOperand = '';
        }
        else if (buttonValue === "="){
            let result = calculate(previousOperand,operator,currentOperand);
            displayInput.value = result;
            currentOperand = result;
            previousOperand = '';
            operator = '';
        }
        else if (buttonValue === "C") {
            currentOperand = '';
            previousOperand = '';
            operator = '';
            displayInput.value = '';
        }
        else if (buttonValue === "Del"){
            currentOperand = currentOperand.slice(0,currentOperand.length-1);
            displayInput.value = currentOperand;  
        }
    })
})

const calculate = function(previousOperand,operator,currentOperand){
    let num1 = parseInt(previousOperand);
    let num2 = parseInt(currentOperand);

    if(operator === "+"){
        return num1 + num2;
    }
    else if(operator === "-"){
        return num1 - num2;
    }
    else if (operator === "*"){
        return(num1 * num2) ;
    }
    else if (operator === "/"){
        if(num2 !==0){
            return num1 / num2;
        }
        else {
            return "Error: Division by zero"
        }
    }
    else {
        return 'Error: Invalid operator'
    }
    
}

const displayInput = document.querySelector("#display");

const buttons = document.querySelectorAll("button");

let currentOperand = parseInt('');
let previousOperand = parseInt('');
let operator = '';

buttons.forEach(button =>{
    button.addEventListener('click', ()=>{
        const buttonValue = button.innerText;
        
        if(!isNaN(buttonValue)){
            currentOperand += buttonValue;
            displayInput.value = currentOperand;
        }
        else if(buttonValue ==="+" || buttonValue === "-"|| buttonValue ==="/"|| buttonValue === "*"){
            previousOperand = currentOperand;
            operator = buttonValue;
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
        else if (buttonValue = "DEL"){
            currentOperand = currentOperand.slice(0, 1);
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
    
    // switch(operator) {
    //     case '+':
    //         return num1 + num2;
    //     case '-':
    //         return num1 - num2;
    //     case '/':
    //         return num1 / num2;
    //     case '*':
    //         return num1 * num2; 
    //     default:
    //         return 0;
    // }
}
// displayInput.value = buttonValue;
//         console.log(displayInput)
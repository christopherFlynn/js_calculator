function add(num1, num2) {
    return parseInt(num1,10) + parseInt(num2,10);
}
function sub(num1, num2) {
    return parseInt(num1,10) - parseInt(num2,10);
}
function mult(num1, num2) {
    return parseInt(num1,10) * parseInt(num2,10);
}
function div(num1, num2) {
    return parseInt(num1,10) / parseInt(num2,10);
}
function operate(num1, num2, op) {
    switch(op) {
        case '+':
            return add(num1, num2);
        case '-':
            return sub(num1, num2);
        case '*':
            return mult(num1, num2);
        case '/':
            if(num2 == 0) {
                return "Get bent!";
            }
            return div(num1, num2); 
    }
}
function solve(equation) {
    let numsAndOps = equation.split(" ");
    if(numsAndOps[numsAndOps.length-1] == "") {
        return "ERROR: Please enter a solvable equation";
    }
    let answer = numsAndOps[0];
    console.log(numsAndOps);
    for(let i = 0; i < numsAndOps.length-2; i+=2) {
       answer = operate(answer, numsAndOps[i+2], numsAndOps[i+1]);
    }
    console.log(answer);
    return answer;
}
const displayDiv = document.querySelector('#display');
let dispText = "";
const numContainer = document.querySelector("#numbers");
for(let id = 0; id < 10; ++id) {
    const numBtn = document.createElement('button');
    numBtn.classList.toggle(id);
    numBtn.textContent = id;
    numBtn.style.margin = '7px';
    numBtn.addEventListener("click", () => {
        //alert(id);
        dispText += `${id}`;
        displayDiv.textContent = dispText;
    });
    numContainer.appendChild(numBtn);
}
const opContainer = document.querySelector("#operators");
const operators = ["+", "-", "*", "/"];
operators.forEach(element => {
    const opBtn = document.createElement('button');
    opBtn.classList.toggle(element);
    opBtn.textContent = element;
    opBtn.style.margin = '7px';
    opBtn.addEventListener("click", () => {
        //alert(element);
        dispText += " " + element + " ";
        displayDiv.textContent = dispText;
    });
    opContainer.appendChild(opBtn);
});
//setup for calculator buttons
document.querySelector('#calculate-btn').addEventListener("click", () => {
    dispText = solve(dispText);
    displayDiv.textContent = dispText;
})
document.querySelector('#clear-btn').addEventListener("click", () => {
    dispText = "";
    displayDiv.textContent = dispText;
})

//console.log(numContainer);

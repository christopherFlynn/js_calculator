function add(num1, num2) {
    return num1 + num2;
}
function sub(num1, num2) {
    return num1 - num2;
}
function mult(num1, num2) {
    return num1 * num2;
}
function div(num1, num2) {
    return num1 / num2;
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
            return div(num1, num2); 
    }
}
const numContainer = document.querySelector("#numbers");
for(let id = 0; id < 10; ++id) {
    const numBtn = document.createElement('button');
    numBtn.classList.toggle(id);
    numBtn.textContent = id;
    numBtn.style.margin = '7px';
    numBtn.addEventListener("click", () => {
        alert(id);
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
        alert(element);
    });
    opContainer.appendChild(opBtn);
});



//console.log(numContainer);

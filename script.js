let buttons = document.querySelector('.keys');
let btn = document.querySelectorAll('span');
let value = document.getElementById('value');

let hasCleared = false; // flag to indicate if the user has cleared the input

for (let index = 0; index < btn.length; index++) {
    btn[index].addEventListener("click", (event) => {
        const clickedButton = event.target;
        if (clickedButton.innerHTML === "=") {
            value.innerHTML = calculate(value.innerHTML);
        } else if (clickedButton.innerHTML === "Clear") {
            value.innerHTML = "0"; // set value to "0" instead of ""
            hasCleared = true; // set flag to indicate input has been cleared
        } else {
            if (hasCleared) { // check if input has been cleared
                value.innerHTML = ""; // clear the "0" before adding new input
                hasCleared = false; // reset the flag
            }
            value.innerHTML += clickedButton.innerHTML;
        }
    })
}

function calculate(expression) {
    return eval(expression);
}

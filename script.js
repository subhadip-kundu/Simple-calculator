// select the container element that holds the buttons
let buttons = document.querySelector('.keys');

// select all the buttons inside the container element
let btn = document.querySelectorAll('span');

// select the element that displays the input and output
let value = document.getElementsByClassName('value');

// initialize a flag to keep track of whether the input has been cleared or not
let hasCleared = true;

// loop through all the buttons and add a click event listener to each one
for (let index = 0; index < btn.length; index++) {
    btn[index].addEventListener("click", (event) => {
        // get the clicked button from the event object
        const clickedButton = event.target;
        if (clickedButton.innerHTML === "=") {
            // if the "=" button is clicked, calculate the result and display it in the value element
            const result = calculate(value[0].innerHTML);
            if (result.toString().length > 14) {
                // if the result has more than 15 digits, convert it to exponential notation
                value[0].innerHTML = parseFloat(result).toExponential(10);
            } else {
                // otherwise, round the result to 5 decimal places and display it as a regular number
                value[0].innerHTML = parseFloat(result.toFixed(5));
            }
        } else if (clickedButton.innerHTML === "Clear") {
            // if the "Clear" button is clicked, clear the input and set the flag
            value[0].innerHTML = "0";
            hasCleared = true;
        } else {
            // if any other button is clicked, add its value to the input and clear the "0" if necessary
            if (hasCleared) {
                value[0].innerHTML = "";
                hasCleared = false;
            }
            value[0].innerHTML += clickedButton.innerHTML;
        }
    })
}

// function to calculate the result of the input expression
function calculate(expression) {
    return eval(expression);
}


// Night

const checkbox = document.querySelector('.toggle-state');
const body = document.querySelector('body');
const container = document.querySelector('.container')
const toggle = document.querySelector('.toggle')


checkbox.addEventListener('click', function() {
  if (this.checked) {
    body.style.backgroundColor = '#023529';
    container.classList.add('container-dark');
    toggle.classList.add('toggle-night')
} else {
    body.style.backgroundColor = '#fff';
    container.classList.remove('container-dark');
    toggle.classList.remove('toggle-night')
  }
});




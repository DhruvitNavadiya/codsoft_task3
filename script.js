


let input = document.getElementById('inp');
let buttons = document.querySelectorAll('button');

let string = '';
let decimalAdded = false;

function buttonClickHandler(e) {
    if (e.target.innerHTML === '=') {
        string = eval(string);
        input.value = string;
    } else if (e.target.innerHTML === 'AC') {
        string = '';
        input.value = string;
        decimalAdded = false;
    } else if (e.target.innerHTML === 'DEL') {
        string = string.substring(0, string.length - 1);
        input.value = string;
    } else if (e.target.innerHTML === '.') {
        if (!decimalAdded) {
            string += e.target.innerHTML;
            input.value = string;
            decimalAdded = true;
        }
    } else {
        string += e.target.innerHTML;
        input.value = string;
        decimalAdded = false; // Reset the decimalAdded flag for new number entry
    }
}

buttons.forEach(button => {
    button.addEventListener('click', buttonClickHandler);
});

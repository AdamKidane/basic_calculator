/*basic calculator, will be adding other functions later. 
(sq roots, exponents, etc...) */
// script.js


function appendToDisplay(value) {
    // Get the display element by its ID
    const display = document.getElementById('display');

    // Append the value to the current content of the display
    display.value += value;
}

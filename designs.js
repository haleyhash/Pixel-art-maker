// Select color input
const color = document.querySelector('#colorPicker');

// Select size input
const canvas = document.getElementById('pixelCanvas');
const height = document.getElementById("inputHeight");
const width = document.getElementById("inputWidth");

// When size is submitted by the user, call makeGrid()

function makeGrid(height, width) {

// Your code goes here!
for (let y = 0; y < height; y++) {
    let row = canvas.insertRow(y);
    for (let x = 0; x < width; x++) {
        let cell = row.insertCell(x);
        cell.addEventListener("click", function(event) {
            event.target.style.backgroundColor = color.value;
        });
    }
}
}

// Create grid and remove old grid when clicking submit again
const grid = document.querySelector('#sizePicker');
grid.addEventListener("submit", submitForm);
function submitForm(event) {
  event.preventDefault();
  while (canvas.hasChildNodes()) {
    canvas.removeChild(canvas.lastChild);
  }
  makeGrid(height.value, width.value);
}
// Select color input
var colorInput = $("#colorPicker");
console.log(colorInput.val());

// Select size input
var height = $("#inputHeight");
var width = $("#inputWeight");
console.log(height.val(), width.val());

// When size is submitted by the user, call makeGrid()

function makeGrid() {
  console.log("Making a " + width.val() + "x" + height.val() + " grid.");
}

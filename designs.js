var pixelCanvas = $("#pixelCanvas");

// Select color input
var colorInput = $("#colorPicker");
console.log(colorInput.val());

colorInput.change(function() {
  console.log("Color changed to " + colorInput.val());
  pixelCanvas.css("background-color", colorInput.val());
});

$("#pixelCanvas").on("click", "td", function() {
  var clickedElement = $(this)[0];
  var columnID = '#' + clickedElement.id;
  var rowID = '#' + clickedElement.parentElement.id;
  console.log(columnID);
  console.log(rowID);
  console.log($(rowID).find(columnID).css('background-color', colorInput.val()));
});

// Select size input
var height = $("#inputHeight");
var width = $("#inputWeight");
console.log(height.val(), width.val());

// When size is submitted by the user, call makeGrid()

function makeGrid() {
  var rows = width.val();
  var columns = height.val();

  pixelCanvas.empty();
  console.log("Making a " + width.val() + "x" + height.val() + " grid.");

  for (var i = 1; i <= rows; i++) {
    console.log("Making row " + i);
    var rowId = "row" + i;
    var rowIDAttr = "id='" + rowId + "'";
    var tr = $("<tr " + rowIDAttr + "></tr>");
    pixelCanvas.append(tr);
    for (var j = 1; j <= columns; j++) {
      console.log("Making column " + j);
      var colID = "col" + j;
      var colIDAttr = "id='" + colID + "'";
      var td = $("<td " + colIDAttr + "></td>");
      $("#" + rowId).append(td);
    }
  }
}

var pixelCanvas = $("#pixelCanvas");

// Event Listener to get the clicked cell and color it
pixelCanvas.on("click", "td", function() {
  // Select color input value
  var pickedColor = $("#colorPicker").val();

  // Get clicked element and their respective ids
  var clickedElement = $(this)[0];
  var columnID = "#" + clickedElement.id;
  var rowID = "#" + clickedElement.parentElement.id;
  var element = $(rowID).find(columnID);

  // Color clicked cell
  element.css("background-color", pickedColor);
});

// Function to create the cell grid
function makeGrid() {
  // Fetching rows and columns from input
  var totalColumns = $("#inputHeight").val();
  var totalRows = $("#inputWeight").val();

  // Clearing the canvas
  pixelCanvas.empty();

  // Generating grid rows and appending to table in DOM
  for (var i = 1; i <= totalRows; i++) {
    var rowId = "row" + i;
    var rowIDAttr = "id='" + rowId + "'";
    var tr = $("<tr " + rowIDAttr + "></tr>");
    pixelCanvas.append(tr);

    // Generating columns and appending to row in DOM
    for (var j = 1; j <= totalColumns; j++) {
      var colID = "col" + j;
      var colIDAttr = "id='" + colID + "'";
      var td = $("<td " + colIDAttr + "></td>");
      $("#" + rowId).append(td);
    }
  }
}

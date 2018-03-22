const PIXEL_GRID = $('#pixelCanvas');

// Event Listener to get the clicked cell and color it
PIXEL_GRID.on('click', 'td', function() {
  // Select color input value
  const PICKED_COLOR = $('#colorPicker').val();

  // Get ID of clicked cell
  const CLICKED_ELEMENT = $(this)[0];
  const COLUMN_ID = '#' + CLICKED_ELEMENT.id;
  const ROW_ID = '#' + CLICKED_ELEMENT.parentElement.id;
  const CELL = $(ROW_ID).find(COLUMN_ID);

  // Color clicked cell
  CELL.css('background-color', PICKED_COLOR);
});

// Function to create the cell grid
function makeGrid() {
  // Fetching rows and columns from input
  const TOTAL_COLUMNS = $('#inputHeight').val();
  const TOTAL_ROWS = $('#inputWeight').val();

  // Clearing the canvas
  PIXEL_GRID.empty();

  // Generating grid rows and appending to table in DOM
  for (let i = 1; i <= TOTAL_ROWS; i++) {
    let rowId = 'row' + i;
    let rowIDAttr = 'id="' + rowId + '"';
    let tableRow = $('<tr ' + rowIDAttr + '></tr>');
    PIXEL_GRID.append(tableRow);

    // Generating columns and appending to row in DOM
    for (let j = 1; j <= TOTAL_COLUMNS; j++) {
      let colID = 'col' + j;
      let colIDAttr = 'id="' + colID + '"';
      let td = $('<td ' + colIDAttr + '></td>');
      $('#' + rowId).append(td);
    }
  }
}

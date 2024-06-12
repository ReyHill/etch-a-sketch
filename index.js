// 1) get input via a function that prompts for columns & rows 
// 2) store the values in seperate variables 
// 3) IF these values are both numbers
    // IF less than or equal to 100, pass these values as arguments into functions 
      // IF columns and rows are both equal to 0, log an error message. 
      // IF columns or rows are greater than 100, log an errror message. 
      // IF columns and rows are less than 100,  
        // createColumns(columns)
        // createRows(rows)

const grid = document.querySelector('.grid');

const button = document.createElement('button');
button.textContent = 'Generate New Grid';
document.body.appendChild(button);

button.addEventListener('click', () => {
  grid.textContent = '';
  const columns = Number(prompt('How many columns?', ''));
  const rows = Number(prompt('How many rows?', ''));
  if (!isNaN(columns) && !isNaN(rows)) {
    if (columns === 0 && rows === 0) {
      console.log('No tiles generated.');
    } else if (columns > 100 || rows > 100) {
      console.log('Cannot generate more than 100 tiles in any direction.')
    } else if (columns <= 100 && rows <= 100) {
      createGrid(columns, rows); 
    }
  } else {
    console.log('Invalid input');
  }
}); 

function createGrid(columns, rows) {
  // use the inputted values to create a grid. 
    // for as long as i is less than columns, create tile-class divs
        // for as long as j is less than rows, create row-class divs.
        for(let i = 0; i < rows; i++) {
          // create row-class divs amd append them to the grid div
          const rowDiv = document.createElement('div');
          rowDiv.setAttribute('class', 'row');
          grid.appendChild(rowDiv);
          for(j = 0; j < columns; j++) {
            // create tiles-class divs and append them to the row divs
            const columnDiv = document.createElement('div'); 
            columnDiv.setAttribute('class', 'tile');
            rowDiv.appendChild(columnDiv);
          }
        }
        const tiles = document.querySelectorAll('.tile');
        tiles.forEach(element => {
          element.addEventListener('mouseover', () => {
            element.style.backgroundColor = `rgb(${rgbNum()}, ${rgbNum()}, ${rgbNum()})`;
          })
        })
        tiles.forEach(element => {
          element.addEventListener('mouseout', () => {
            element.style.backgroundColor = '';
          })
        })
}

function rgbNum() {
  return Math.floor(Math.random() * 256); 
}
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

const tile = document.createElement('div'); 
tile.setAttribute('class', 'tile');

const button = document.createElement('button');
button.textContent = 'Click';
document.body.appendChild(button);

button.addEventListener('click', () => {
  const columns = Number(prompt('How many columns?', ''));
  const rows = Number(prompt('How many rows?', ''));
  if (!isNaN(columns) && !isNaN(rows)) {
    if (columns === 0 && rows === 0) {
      console.log('No tiles generated.');
    } else if (columns > 100 || rows > 100) {
      console.log('Cannot generate more than 100 tiles in any direction.')
    } else if (columns <= 100 && rows <= 100) {
      createColumns(columns);
      createRows(rows); 
    }
  }
}); 

function createColumns(x) {
    console.log(x); 
}

function createRows(y) {
    console.log(y);
}
const grid = document.querySelector('.grid');

// 1) get input via a function that prompts for columns & rows 
// 2) store the values in seperate variables 
// 3) IF these values are both numbers
    // 3A) IF less than or equal to 100, pass these values as arguments into functions 
      // createColumns(columns)
      // createRows(rows)

const button = document.createElement('button');
button.textContent = 'Click';
grid.appendChild(button);

button.addEventListener('click', () => {
  const columns = Number(prompt('How many columns?', ''));
  const rows = Number(prompt('How many rows?', ''));
  if (!isNaN(columns) &&!isNaN(rows)) {
    if (columns <= 100 && rows <= 100) {
      createColumns(columns);
      createRows(rows); 
    }
  }
}); 

/* 

createColumns(x) {
// create x number of columns
}

createRows(y) {
// create y number of rows
}

*/
const initialState = [
  false,
  false,
  true,
  false,
  true,
  true,
  false,
  true,
  false,
];

const getCellsBoard = (rows, columns, cells) => {
  let cellIndex = 0;
  const result = [];

  for (let rowIndex = 0; rowIndex < columns; rowIndex += 1) {
    result[rowIndex] = [];
    for (let columnIndex = 0; columnIndex < rows; columnIndex += 1) {
      result[rowIndex][columnIndex] = cells[cellIndex];
      cellIndex += 1;
    }
  }

  return result;
};

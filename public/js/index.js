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

const checkHorizontally = (board, row, column) => {
  const lastColumn = board[0].length - 1;
  let leftCell;
  let rightCell;

  if (column !== 0) {
    leftCell = board[row][column - 1];
  }

  if (column !== lastColumn) {
    rightCell = board[row][column + 1];
  }

  return [leftCell, rightCell];
};

const checkVertically = (board, row, column) => {
  const lastRow = board.length - 1;
  let topCell;
  let bottomCell;

  if (row !== 0) {
    topCell = board[row - 1][column];
  }

  if (row !== lastRow) {
    bottomCell = board[row + 1][column];
  }

  return [topCell, bottomCell];
};

const checkBackslash = (board, row, column) => {
  const lastRow = board.length - 1;
  const lastColumn = board[0].length - 1;
  let upperLeftCell;
  let lowerRightCell;

  if (column !== 0) {
    if (row !== 0) {
      upperLeftCell = board[row - 1][column - 1];
    }
  }

  if (column !== lastColumn) {
    if (row !== lastRow) {
      lowerRightCell = board[row + 1][column + 1];
    }
  }

  return [upperLeftCell, lowerRightCell];
};

const checkSlash = (board, row, column) => {
  const lastRow = board.length - 1;
  const lastColumn = board[0].length - 1;
  let upperRightCell;
  let lowerLeftCell;

  if (column !== lastColumn) {
    if (row !== 0) {
      upperRightCell = board[row - 1][column + 1];
    }
  }

  if (column !== 0) {
    if (row !== lastRow) {
      lowerLeftCell = board[row + 1][column - 1];
    }
  }

  return [upperRightCell, lowerLeftCell];
};

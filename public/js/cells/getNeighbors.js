export const getNeighborsCellsHorizontally = (
  cellsBoard,
  cellRow,
  cellColumn
) => {
  const lastColumn = cellsBoard[0].length - 1;
  let leftCell;
  let rightCell;

  if (cellColumn !== 0) {
    leftCell = cellsBoard[cellRow][cellColumn - 1];
  }

  if (cellColumn !== lastColumn) {
    rightCell = cellsBoard[cellRow][cellColumn + 1];
  }

  return [leftCell, rightCell];
};

export const getNeighborsCellsVertically = (
  cellsBoard,
  cellRow,
  cellColumn
) => {
  const lastRow = cellsBoard.length - 1;
  let topCell;
  let bottomCell;

  if (cellRow !== 0) {
    topCell = cellsBoard[cellRow - 1][cellColumn];
  }

  if (cellRow !== lastRow) {
    bottomCell = cellsBoard[cellRow + 1][cellColumn];
  }

  return [topCell, bottomCell];
};

export const getNeighborsCellsBackslash = (cellsBoard, cellRow, cellColumn) => {
  const lastRow = cellsBoard.length - 1;
  const lastColumn = cellsBoard[0].length - 1;
  let upperLeftCell;
  let lowerRightCell;

  if (cellColumn !== 0 && cellRow !== 0) {
    upperLeftCell = cellsBoard[cellRow - 1][cellColumn - 1];
  }

  if (cellColumn !== lastColumn && cellRow !== lastRow) {
    lowerRightCell = cellsBoard[cellRow + 1][cellColumn + 1];
  }

  return [upperLeftCell, lowerRightCell];
};

export const getNeighborsCellsSlash = (cellsBoard, cellRow, cellColumn) => {
  const lastRow = cellsBoard.length - 1;
  const lastColumn = cellsBoard[0].length - 1;
  let upperRightCell;
  let lowerLeftCell;

  if (cellColumn !== lastColumn) {
    if (cellRow !== 0) {
      upperRightCell = cellsBoard[cellRow - 1][cellColumn + 1];
    }
  }

  if (cellColumn !== 0) {
    if (cellRow !== lastRow) {
      lowerLeftCell = cellsBoard[cellRow + 1][cellColumn - 1];
    }
  }

  return [upperRightCell, lowerLeftCell];
};

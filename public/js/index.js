let currentCellStatus = [
  false,
  false,
  false,
  true,
  true,
  true,
  false,
  false,
  true,
];

const cellsBoardRows = 3;
const cellsBoardColumns = currentCellStatus.length / cellsBoardRows;

const getCellsBoard = (rows, columns, cellsStatus) => {
  let cellIndex = 0;
  const result = [];

  for (let rowIndex = 0; rowIndex < columns; rowIndex += 1) {
    result[rowIndex] = [];
    for (let columnIndex = 0; columnIndex < rows; columnIndex += 1) {
      result[rowIndex][columnIndex] = cellsStatus[cellIndex];
      cellIndex += 1;
    }
  }

  return result;
};

const getNeighborsCellsHorizontally = (cellsBoard, cellRow, cellColumn) => {
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

const getNeighborsCellsVertically = (cellsBoard, cellRow, cellColumn) => {
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

const getNeighborsCellsBackslash = (cellsBoard, cellRow, cellColumn) => {
  const lastRow = cellsBoard.length - 1;
  const lastColumn = cellsBoard[0].length - 1;
  let upperLeftCell;
  let lowerRightCell;

  if (cellColumn !== 0) {
    if (cellRow !== 0) {
      upperLeftCell = cellsBoard[cellRow - 1][cellColumn - 1];
    }
  }

  if (cellColumn !== lastColumn) {
    if (cellRow !== lastRow) {
      lowerRightCell = cellsBoard[cellRow + 1][cellColumn + 1];
    }
  }

  return [upperLeftCell, lowerRightCell];
};

const getNeighborsCellsSlash = (cellsBoard, cellRow, cellColumn) => {
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

const getNumberOfLivingCells = (...neighborsCellsStatus) =>
  [].concat(...neighborsCellsStatus).filter((status) => status === true).length;

const isAlive = (cellStatus, livingNeighborsCells) => {
  if (cellStatus === false && livingNeighborsCells === 3) {
    return true;
  }

  if (
    (cellStatus === true && livingNeighborsCells === 2) ||
    livingNeighborsCells === 3
  ) {
    return true;
  }

  return false;
};

const getCellNextStatus = (cellsBoard, cellRow, cellColumn) => {
  const cellsHorizontal = getNeighborsCellsHorizontally(
    cellsBoard,
    cellRow,
    cellColumn
  );
  const cellsVertical = getNeighborsCellsVertically(
    cellsBoard,
    cellRow,
    cellColumn
  );
  const cellsSlash = getNeighborsCellsSlash(cellsBoard, cellRow, cellColumn);
  const cellsBackslash = getNeighborsCellsBackslash(
    cellsBoard,
    cellRow,
    cellColumn
  );

  const cellStatus = cellsBoard[cellRow][cellColumn];

  const livingCells = getNumberOfLivingCells(
    cellsHorizontal,
    cellsVertical,
    cellsSlash,
    cellsBackslash
  );

  return isAlive(cellStatus, livingCells);
};

const getNextCellsStatus = (currentCellsBoard) => {
  const nextCellsStatus = [];

  currentCellsBoard.forEach((row, rowIndex) =>
    row.forEach((cell, columnIndex) => {
      nextCellsStatus.push(
        getCellNextStatus(currentCellsBoard, rowIndex, columnIndex)
      );
    })
  );

  return nextCellsStatus;
};

const areAllDead = (cellsStatus) =>
  !cellsStatus.find((cellStatus) => cellStatus === true);

const game = () => {
  const timedLoop = setInterval(() => {
    if (areAllDead(currentCellStatus)) {
      clearInterval(timedLoop);
    }

    const currentCellsBoard = getCellsBoard(
      cellsBoardRows,
      cellsBoardColumns,
      currentCellStatus
    );

    console.log(currentCellsBoard);
    currentCellStatus = getNextCellsStatus(currentCellsBoard);
  }, 500);
};

game();

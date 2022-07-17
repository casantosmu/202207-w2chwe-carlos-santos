import {
  getNeighborsCellsHorizontally,
  getNeighborsCellsVertically,
  getNeighborsCellsSlash,
  getNeighborsCellsBackslash,
} from "./getNeighbors.js";

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

const getNumberOfLivingCells = (...neighborsCellsStatus) =>
  [].concat(...neighborsCellsStatus).filter((status) => status === true).length;

export const getCellNextStatus = (cellsBoard, cellRow, cellColumn) => {
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

export default getCellNextStatus;

import { getCellNextStatus } from "./cell.js";

export const get2DCellsArray = (rows, columns, cellsStatus) => {
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

export const getNextCellsStatus = (currentCellsBoard) => {
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

export const areAllDead = (cellsStatus) =>
  !cellsStatus.find((cellStatus) => cellStatus === true);

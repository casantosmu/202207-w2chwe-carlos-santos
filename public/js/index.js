import {
  areAllDead,
  getCellsBoard,
  getNextCellsStatus,
} from "./cells/cells-board.js";

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

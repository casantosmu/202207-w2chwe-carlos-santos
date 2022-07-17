import { printBoard, getBoardInnerElements } from "./html/printBoard.js";
import { boardClickHandler, boardKeyHandler } from "./html/eventListeners.js";
import { getStatusFromCellsElements } from "./html/getElements.js";
import {
  areAllDead,
  getCellsBoard,
  getNextCellsStatus,
} from "./cells/cellsBoard.js";

const cellsBoardRows = 16;
const cellsBoardColumns = 16;

const gameEvolution = () => {
  let currentCellsStatus = getStatusFromCellsElements();
  const timedLoop = setInterval(() => {
    if (areAllDead(currentCellsStatus)) {
      clearInterval(timedLoop);
    }
    const currentCellsBoard = getCellsBoard(
      cellsBoardRows,
      cellsBoardColumns,
      currentCellsStatus
    );
    currentCellsStatus = getNextCellsStatus(currentCellsBoard);
    printBoard(
      getBoardInnerElements(
        cellsBoardRows,
        cellsBoardColumns,
        currentCellsStatus
      )
    );
  }, 500);
};

const starButtonElement = document.querySelector(".js-play-button");

printBoard(getBoardInnerElements(cellsBoardRows, cellsBoardColumns));

starButtonElement.addEventListener("click", gameEvolution);

import { printBoard, getBoardInnerElements } from "./html/printBoard.js";
import { boardClickHandler, boardKeyHandler } from "./html/eventListeners.js";
import { getStatusFromCellsElements } from "./html/getElements.js";
import {
  areAllDead,
  getCellsBoard,
  getNextCellsStatus,
} from "./cells/cellsBoard.js";

const cellsBoardRows = 12;
const cellsBoardColumns = 12;
let isStopped;

const gameEvolution = () => {
  let currentCellsStatus = getStatusFromCellsElements();
  isStopped = false;

  const timedLoop = setInterval(() => {
    if (areAllDead(currentCellsStatus) || isStopped) {
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

printBoard(getBoardInnerElements(cellsBoardRows, cellsBoardColumns));

const starButtonElement = document.querySelector(".js-play-button");
const stopButtonElement = document.querySelector(".js-stop-button");

starButtonElement.addEventListener("click", gameEvolution);
stopButtonElement.addEventListener("click", () => {
  isStopped = true;
});

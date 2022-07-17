import { printBoard, getBoardInnerElements } from "./html/printBoard.js";
import { boardClickHandler, boardKeyHandler } from "./html/eventListeners.js";
import { getStatusFromCellsElements } from "./html/getElements.js";
import {
  areAllDead,
  getCellsBoard,
  getNextCellsStatus,
} from "./cells/cellsBoard.js";

const cellsBoardRows = 32;
const cellsBoardColumns = 32;

let isStopped = false;

const gameEvolution = () => {
  let currentCellsStatus = getStatusFromCellsElements();

  const timedLoop = setInterval(() => {
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

    if (areAllDead(currentCellsStatus) || isStopped) {
      console.log("Stopedd");
      clearInterval(timedLoop);
    }
  }, 1000);
};

printBoard(getBoardInnerElements(cellsBoardRows, cellsBoardColumns));

const starButtonElement = document.querySelector(".js-play-button");
const stopButtonElement = document.querySelector(".js-stop-button");

starButtonElement.addEventListener("click", gameEvolution);
stopButtonElement.addEventListener("click", () => {
  isStopped = true;
});

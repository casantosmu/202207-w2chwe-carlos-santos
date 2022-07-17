import { printBoard, getBoardInnerHTML } from "./html/printBoard.js";
import { boardClickHandler, boardKeyHandler } from "./html/eventListeners.js";
import { getStatusFromCellsElements } from "./html/getElements.js";
import {
  areAllDead,
  get2DCellsArray,
  getNextCellsStatus,
} from "./cells/cellsBoard.js";

const cellsBoardRows = 12;
const cellsBoardColumns = 12;
const timerSpeed = 500;
let isStopped;

const gameEvolution = () => {
  let currentCellsStatus = getStatusFromCellsElements();
  isStopped = false;

  const timedLoop = setInterval(() => {
    if (areAllDead(currentCellsStatus) || isStopped) {
      clearInterval(timedLoop);
    }

    const current2DCellsArray = get2DCellsArray(
      cellsBoardRows,
      cellsBoardColumns,
      currentCellsStatus
    );

    currentCellsStatus = getNextCellsStatus(current2DCellsArray);

    printBoard(
      getBoardInnerHTML(cellsBoardRows, cellsBoardColumns, currentCellsStatus)
    );
  }, timerSpeed);
};

printBoard(getBoardInnerHTML(cellsBoardRows, cellsBoardColumns));

const starButtonElement = document.querySelector(".js-play-button");
const stopButtonElement = document.querySelector(".js-stop-button");

starButtonElement.addEventListener("click", gameEvolution);
stopButtonElement.addEventListener("click", () => {
  isStopped = true;
});

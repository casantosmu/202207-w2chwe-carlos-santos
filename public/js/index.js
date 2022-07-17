import { printBoard, getBoardInnerHTML } from "./html/printBoard.js";
import { boardClickHandler, boardKeyHandler } from "./html/eventListeners.js";
import { getStatusFromCellsElements } from "./html/getElements.js";
import {
  areAllDead,
  get2DCellsArray,
  getNextCellsStatus,
} from "./cells/cellsBoard.js";

let cellsBoardRows = 12;
let cellsBoardColumns = 12;
let timerSpeed = 1000;
let isStopped;
let currentCellsStatus;

const selectSizeElement = document.querySelector(".js-select-size");
const selectSpeedElement = document.querySelector(".js-select-speed");

selectSizeElement.addEventListener("click", () => {
  cellsBoardRows = selectSizeElement.value;
  cellsBoardColumns = selectSizeElement.value;

  printBoard(
    getBoardInnerHTML(cellsBoardRows, cellsBoardColumns, currentCellsStatus)
  );
});

selectSpeedElement.addEventListener("click", () => {
  timerSpeed = 1000 * selectSpeedElement.value;
});

const gameEvolution = () => {
  currentCellsStatus = getStatusFromCellsElements();
  isStopped = false;
  selectSizeElement.disabled = true;
  selectSpeedElement.disabled = true;

  const timedLoop = setInterval(() => {
    if (areAllDead(currentCellsStatus) || isStopped) {
      clearInterval(timedLoop);
      selectSizeElement.disabled = false;
      selectSpeedElement.disabled = false;
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

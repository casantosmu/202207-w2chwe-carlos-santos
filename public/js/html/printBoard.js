const getCellTemplateHTML = (id, status) =>
  `<div class="board__cell" data-id="${id}" data-status="${status}" tabindex="${id}"></div>`;

const getRowTemplateHTML = (innerHTML) =>
  `<div class="board__row">${innerHTML}</div>`;

export const getStarterBoardInnerElements = (rows, columns) => {
  let loopCounter = 0;
  let boardHTML = "";
  for (let rowIndex = 0; rowIndex < rows; rowIndex += 1) {
    let generatedCellsHTML = "";
    for (let columnsIndex = 0; columnsIndex < columns; columnsIndex += 1) {
      generatedCellsHTML += getCellTemplateHTML(loopCounter, false);
      loopCounter += 1;
    }
    boardHTML += getRowTemplateHTML(generatedCellsHTML);
  }
  return boardHTML;
};

export const printBoard = (callback) => {
  const boardElement = document.querySelector(".js-board");
  boardElement.innerHTML = callback;
};

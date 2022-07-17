const getCellTemplateHTML = (id, status) => {
  if (status === true) {
    return `<div class="board__cell board__cell--accent" data-id="${id}" data-status="true" tabindex="${id}"></div>`;
  }
  return `<div class="board__cell" data-id="${id}" data-status="false" tabindex="${id}"></div>`;
};

const getRowTemplateHTML = (innerHTML) =>
  `<div class="board__row">${innerHTML}</div>`;

export const getBoardInnerHTML = (rows, columns, cellsStatus = undefined) => {
  let loopCounter = 0;
  let boardHTML = "";
  for (let rowIndex = 0; rowIndex < rows; rowIndex += 1) {
    let generatedCellsHTML = "";
    for (let columnsIndex = 0; columnsIndex < columns; columnsIndex += 1) {
      if (cellsStatus === undefined) {
        generatedCellsHTML += getCellTemplateHTML(loopCounter, false);
      } else {
        generatedCellsHTML += getCellTemplateHTML(
          loopCounter,
          cellsStatus[loopCounter]
        );
      }
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

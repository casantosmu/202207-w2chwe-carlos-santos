const getCellTemplateHTML = (id) =>
  `<div class="board__cell" data-id="${id}" tabindex="${id}"></div>`;

const getRowTemplateHTML = (innerHTML) =>
  `<div class="board__row">${innerHTML}</div>`;

const getGridInnerElements = (rows, columns) => {
  let loopCounter = 0;
  let gridHTML = "";
  for (let rowIndex = 0; rowIndex < rows; rowIndex += 1) {
    let generatedCellsHTML = "";
    for (let columnsIndex = 0; columnsIndex < columns; columnsIndex += 1) {
      generatedCellsHTML += getCellTemplateHTML(loopCounter);
      loopCounter += 1;
    }
    gridHTML += getRowTemplateHTML(generatedCellsHTML);
  }
  return gridHTML;
};

export const printStarterGrid = (rows, columns) => {
  const gridElement = document.querySelector(".js-board");
  gridElement.innerHTML = getGridInnerElements(rows, columns);
};

export default printStarterGrid;

export const getStatusFromCellsElements = () => {
  const cellsStatus = [];
  const cellsElements = document.querySelectorAll("[data-id]");

  for (let cellId = 0; cellId < cellsElements.length; cellId += 1) {
    cellsStatus.push(JSON.parse(cellsElements[cellId].dataset.status));
  }
  return cellsStatus;
};

export default getStatusFromCellsElements;

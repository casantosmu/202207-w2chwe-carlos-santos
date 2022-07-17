const boardElement = document.querySelector(".js-board");

const toggleElement = (element) => {
  element.classList.toggle("board__cell--accent");
  if (element.dataset.status === "false") {
    element.dataset.status = "true";
  } else {
    element.dataset.status = "false";
  }
};

export const boardClickHandler = boardElement.addEventListener(
  "click",
  (element) => {
    if (element.target.dataset.id !== undefined) {
      toggleElement(element.target);
    }
  }
);

export const boardKeyHandler = boardElement.addEventListener(
  "keypress",
  (element) => {
    if (element.key === "Enter") {
      toggleElement(element.target);
    }
  }
);

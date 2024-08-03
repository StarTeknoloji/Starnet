const items = document.querySelector(".grid");

function addItem() {
  items.innerHTML += `
  <div></div>
  `;
}

function removeItem() {
  items.querySelector(".grid div:last-of-type").remove();
}
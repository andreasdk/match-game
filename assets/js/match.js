// Create 12 block grid
function createGrid() {
  const columns = 3;
  const rows = 4;

  const grid = document.createElement("div");
  grid.className = "game__board__wrapper";
  for (let i = 0; i < columns; ++i) {
    let column = document.createElement("div"); // create column
    column.className = "game__board__column";
    for (let j = 0; j < rows; ++j) {
      let row = document.createElement("div"); // create row
      row.className = "game__board__box";
      column.appendChild(row); // append row in column
    }
    grid.appendChild(column); // append column inside grid
  }
  document.body.appendChild(grid);
}

addEventListener("DOMContentLoaded", (event) => {
  createGrid();
});

// Array of image names from assets/images
const fruitName = [
  "banana",
  "blackberry-light",
  "black-cherry",
  "green-grape",
  "lime",
  "orange",
  "raspberry",
  "red-apple",
  "red-cherry",
  "red-grape",
  "strawberry",
];

// Iterate over image array and assign to image src variable in HTML

// onclick make image visible with limit of 2 images visible at a time

// if image name matches, images stay visible

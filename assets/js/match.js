const selectors = {
  boardContainer: document.querySelector(".game__board_container"),
  board: document.querySelector(".game__board"),
  win: document.querySelector(".win"),
};

const pickRandom = (array, items) => {
  const clonedArray = [...array];
  const randomPicks = [];

  for (let i = 0; i < items; i++) {
    const randomIndex = Math.floor(Math.random() * clonedArray.length);
    randomPicks.push(clonedArray[randomIndex]);
    clonedArray.splice(randomIndex, 1);
  }
  return randomPicks;
};

const shuffle = (array) => {
  const clonedArray = [...array];

  for (let index = clonedArray.length - 1; index > 0; index--) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    const original = clonedArray[index];

    clonedArray[index] = clonedArray[randomIndex];
    clonedArray[randomIndex] = original;
  }

  return clonedArray;
};

// Create game grid
function createGrid() {
  const dimensions = selectors.board.getAttribute("data-dimension");
  // Array of image names from assets/images
  const fruitNames = [
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

  const imgArray = pickRandom(fruitNames, (dimensions * dimensions) / 2);
  console.log(imgArray);
  const imgUrls = shuffle([...imgArray, ...imgArray]);
  const imgBaseSrc = "assets/images/";
  const imgExtension = ".png";

  const gameCards = `
        <div class="game__board" style="grid-template-columns: repeat(${dimensions}, auto)">
            ${imgUrls
              .map(
                (imgUrl) => `
                <div class="game__board__column">
                    <div class="game__board__box"><img class="game__board__image" src="${imgBaseSrc}${imgUrl}${imgExtension}" /></div>


                </div>
            `
              )
              .join("")}
       </div>
    `;

  const parser = new DOMParser().parseFromString(gameCards, "text/html");
  console.log(parser);

  selectors.board.replaceWith(parser.querySelector(".game__board"));
}

// onclick make image visible with limit of 2 images visible at a time

// if image name matches, images stay visible

addEventListener("DOMContentLoaded", (event) => {
  createGrid();
});

const gameContainer = document.getElementById("game");

const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple"
];

// counter to track how many cards have been clicked and their colors
let colorsClicked = [];

// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(COLORS);

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    // create a new div
    const newDiv = document.createElement("div");

    // give it a class attribute for the value we are looping over
    newDiv.classList.add(color);

    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick);

    // append the div to the element with an id of game
    gameContainer.append(newDiv);
  }
}

// TODO: Implement this function!
function handleCardClick(event) {
  // you can use event.target to see which element was clicked
  // console.log("you just clicked", event.target);

  // make sure no more than 2 cards show at a time
  if (colorsClicked.length < 2) {
    colorsClicked.push(event.target);  //store color
    event.target.style.backgroundColor = event.target.className;
  }

  // matching logic
  if (colorsClicked.length === 2) {
    // check if colors match and the same card isnt clicked twice
    if ((colorsClicked[0].className !== colorsClicked[1].className) || (colorsClicked[0] === colorsClicked[1])) {
      setTimeout(function() {
        for (let i=0; i<colorsClicked.length; i++) {
          colorsClicked[i].style.backgroundColor = "";
        }
        colorsClicked.splice(0, 2);
      }, 1000);
    } else {
      // if they do match, clear the array
      colorsClicked.splice(0, colorsClicked.length);
    }
  }

}

// when the DOM loads
createDivsForColors(shuffledColors);

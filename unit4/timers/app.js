// countdown
function countDown(delay) {
  const intervalId = setInterval(function() {
    delay--;
    console.log(delay);

    if (delay === 0) {
      console.log("DONE!");
      clearInterval(intervalId);
    }
  }, 1000)
}

// random game
function randomGame() {
  let counter = 0;

  const intervalId = setInterval(function() {
    randomNum = Math.random();
    counter += 1;

    console.log("Random number selected: ", randomNum);

    if (randomNum >= 0.75) {
      clearInterval(intervalId);
      console.log("amount of tries: ", counter);
    }
    
  }, 1000);
}


// running functions to test

countDown(10);
// randomGame();
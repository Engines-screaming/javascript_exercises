function guessingGame() {
    // let game = guessingGame();
    // game(50); // "50 is too low!"
    // game(90); // "90 is too high!"
    // game(70); // "You win! You found 70 in 3 guesses."
    // game(70); // "The game is over, you already won!"

    const number = Math.floor(Math.random() * 100);
    let tries = 0;
    let gameActive = true;
    return function(guess) {
        if (gameActive === false) {
            console.log('The game is over, you already won!');
        } else if (guess === number) {
            gameActive = false;
            console.log(`You win! You found ${number} in ${tries}`);
        } else if (guess > number) {
            console.log(`${guess} is too high!`);
        } else if (guess < number) {
            console.log(`${guess} is too low!`);
        }
    }
}

module.exports = { guessingGame };

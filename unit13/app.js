// When the DOM is ready, console.log the message “Let’s get ready to party with jQuery!”
$(function() {
    console.log("Let's get ready to party with jQuery");
  }); 

// Give all images inside of an article tag the class of image-center (this class is defined inside of the style tag in the head).
$('article img').addClass('image-center')

// Remove the last paragraph in the article.
$allPTags = $('p');
$allPTags[$allPTags.length - 1].remove();

// Set the font size of the title to be a random pixel size from 0 to 100.
pxSize = Number(Math.random() * 100);
$("#title").css('font-size', `${pxSize}px`);

// Add an item to the list; it can say whatever you want.
$('ol').append('<li>Eat your vegetables</li>');

// Scratch that; the list is silly. Empty the aside and put a paragraph in it apologizing for the list’s existence.
$('aside')
    .empty()
    .append($("<p>", {text: "Sorry about the list"}));

// When you change the numbers in the three inputs on the bottom, the background color of the body should change to match whatever the three values in the inputs are.

$body = $('body');
$inputs = $('input');

$inputs.on("change", () => {
    let inputVals = [];
    
    for (let i of $inputs) {
        inputVals.push(i.value);
    }

    console.log(inputVals);
    console.log(`rgb(${inputVals[0]},${inputVals[1]},${inputVals[2]})`);

    $body.css('background-color', `rgb(${inputVals[0]}, ${inputVals[1]}, ${inputVals[2]})`);
})    

// Add an event listener so that when you click on the image, it is removed from the DOM.
$('img').on('click', (evt) => (evt.target.remove()));

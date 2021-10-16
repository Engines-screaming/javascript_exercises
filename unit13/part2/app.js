// Part Two - Movies App!
// Build an application that uses jQuery to do the following:

// Contains a form with two inputs for a title and rating along with a button to submit the form.
// When the form is submitted, capture the values for each of the inputs and 
// append them to the DOM along with a button to remove each title and rating from the DOM.
// When the button to remove is clicked, remove each title and rating from the DOM.
$('form').on('submit', (evt) => {
    evt.preventDefault();

    // movie title and rating
    let title = $('title').val;
    let rating = $('rating').val;
    let $d = $('<div>')
        .append($('<p>', {text: `${title} - Rating: ${rating}}`}))
        .append($('<button>', {text: 'X'}))
        .on("click", "button", (evt) => evt.target.parentElement.remove());

    $('body').append($d);
});
// Select the section with an id of container without using querySelector.
let containerElementId = document.getElementById("container");

// Select the section with an id of container using querySelector.
let containerSelectorId = document.querySelector("#container");

// Select all of the list items with a class of “second”.
const listItems = document.querySelector("li[class='second']");

// Select a list item with a class of third, but only the list item inside of the ol tag.
const complicatedListItem = document.querySelector("ol li[class='second']");

// Give the section with an id of container the text “Hello!”.
let container = document.querySelector("#container")
// container.textContent = "Hello!";

// Add the class main to the div with a class of footer.
const footer = document.querySelector('.footer');
footer.classList.add('main');

// Remove the class main on the div with a class of footer.
footer.classList.remove('main');

// Create a new li element.
newLiElement = document.createElement("li");

// Give the li the text “four”.
newLiElement.textContent = "four"

// Append the li to the ul element.
ulElement = document.querySelector("ul");
ulElement.append(newLiElement);

// Loop over all of the lis inside the ol tag and give them a background color of “green”.
allListElements = document.querySelectorAll('ol li');

for (let li of allListElements) {
    li.style.backgroundColor = 'green';
}

// Remove the div with a class of footer
footer.remove();

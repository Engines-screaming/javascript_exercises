const form = document.querySelector("#logoform");
const brandNameInput = document.querySelector("input[name='brandname']");
const colorInput = document.querySelector("input[name='color']");
const fontSizeInput = document.querySelector("input[name='fontsize']");
const section = document.querySelector('#results');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    createLogo(brandNameInput.value,
        colorInput.value,
        fontSizeInput.value);

})

function createLogo(brandname, color, fontsize) {
    const logo = document.createElement("h2");
    logo.innerText = brandname;
    logo.style.color = color;
    logo.style.fontSize = fontsize + 'px';

    section.appendChild(logo);
}
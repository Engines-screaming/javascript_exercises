function randomColor() {
    r = Math.floor(Math.random() * 256);
    g = Math.floor(Math.random() * 256);
    b = Math.floor(Math.random() * 256);
    
    return `rgb(${r},${g},${b})`
}

const letters = document.querySelectorAll('.letter')

setInterval(function(){
    for (const letter of letters) {
        letter.style.color = randomColor();
    }
}, 1000)
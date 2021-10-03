// function to convert position to rgb vals
function convert2Color(pos, maxPos) {
    return Math.floor(pos * 255 / maxPos)
} 

document.addEventListener("mousemove", function(e) {
    xPos = convert2Color(e.pageX, window.innerWidth);
    yPos = convert2Color(e.pageY, window.innerHeight);

    console.log(xPos, yPos)
    document.body.style.backgroundColor = `rgb(${xPos},0,${yPos})`;
})
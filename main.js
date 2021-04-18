canvas = document.getElementById("canvas");
ctx = canvas.getContext("2d");

color = "blue";
lineWidth = 3;
radius = 30;
var mouseEvent = "empty";
var lastPOX, lastPOY;

canvas.addEventListener("mousedown", my_mousedown)

function my_mousedown(a) {
    color = document.getElementById("inputcolor").value;
    lineWidth = document.getElementById("inputwidth").value;
    radius = document.getElementById("inputradius").value;
    mouseEvent = "mousedown";
}

canvas.addEventListener("mouseup", my_mouseup)

function my_mouseup(a) {
    mouseEvent = "mouseup";
}

canvas.addEventListener("mouseleave", my_mouseleave)

function my_mouseleave(a) {
    mouseEvent = "mouseleave";
}

canvas.addEventListener("mousemove", my_mousemove)

function my_mousemove(a) {

    currentPosMouseX = a.clientX - canvas.offsetLeft;
    currentPosMouseY = a.clientY - canvas.offsetTop;

    if (mouseEvent == "mousedown") {

        console.log("Current position of X and Y Coordinates = ");
        console.log("X = " + currentPosMouseX + "Y = " + currentPosMouseY);

        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = lineWidth;
        ctx.arc(currentPosMouseX, currentPosMouseY, radius, 0, 2 * Math.PI);
        ctx.stroke();
    }

    lastPOX = currentPosMouseX;
    lastPOY = currentPosMouseY;
}

function clearcanvas() {

    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}
"Use strict"

let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext("2d");

drawLine();

function drawLine() {
//Red cross
    context.beginPath();
    context.moveTo(50, 50);
    context.lineTo(200, 200);
    context.moveTo(200, 50);
    context.lineTo(50, 200);
    context.lineWidth = 5
    context.strokeStyle = "red";
    context.stroke();

//Black square
    context.beginPath();
    context.moveTo(50, 50);
    context.lineTo(200, 50);
    context.lineTo(200, 200);
    context.lineTo(50, 200);
    context.lineTo(50, 50);
    context.lineWidth = 5;
    context.strokeStyle = "black";
    context.stroke();
}
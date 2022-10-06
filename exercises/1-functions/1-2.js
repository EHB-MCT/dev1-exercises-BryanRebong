"Use strict"

let canvas = document.querySelector("canvas");
   canvas.width = window.innerWidth;
   canvas.height = window.innerHeight;
   let context = canvas.getContext("2d");

drawRect();

function drawLine() {
    context.lineWidth = 5;
    context.strokeStyle = 'black';
    context.beginPath();
    context.moveTo(50, 50);
    context.lineTo(150, 50);
    context.lineTo(150, 150);
    context.lineTo(100, 150);
    context.lineTo(175, 150);
    context.lineTo(175, 250);
    context.lineTo(50, 250);
    context.lineTo(50, 50);
    context.stroke();

}
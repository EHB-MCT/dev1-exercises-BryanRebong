"use Strict"

let canvas = document.querySelector("canvas");
   canvas.width = window.innerWidth;
   canvas.height = window.innerHeight;
   let context = canvas.getContext("2d");

drawRect();

function drawRect() {

    context.lineWidth = 3;
    context.strokeStyle = "red";
    context.beginPath();
    context.moveTo(50, 50);
    context.lineTo(50, 175);
    context.stroke;
    
}
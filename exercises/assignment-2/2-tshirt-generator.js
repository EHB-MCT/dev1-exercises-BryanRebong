"use strict";

let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext("2d");

function drawLine(x1, y1, x2, y2) {
   context.lineWidth = 3;
   context.strokeStyle = 'blue';
   context.beginPath();
   context.moveTo(x1, y1);
   context.lineTo(x2, y2);
   context.stroke();
}

drawLine(50, 50, 50, 150);




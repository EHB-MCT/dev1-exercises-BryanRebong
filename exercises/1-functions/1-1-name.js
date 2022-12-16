"use strict";

let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext("2d");

drawLine();

function drawLine() {
   context.lineWidth = 5;
   context.strokeStyle = 'blue';
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

   context.lineWidth = 5;
   context.strokeStyle = 'red';
   context.beginPath();
   context.moveTo(200, 50);
   context.lineTo(300, 50);
   context.lineTo(300, 150);
   context.lineTo(250, 150);
   context.lineTo(300, 250);
   context.lineTo(250, 150);
   context.lineTo(200, 150);
   context.lineTo(200, 50);
   context.lineTo(200, 250);
   context.stroke();

   context.lineWidth = 5;
   context.strokeStyle = 'yellow';
   context.beginPath();
   context.moveTo(350, 50);
   context.lineTo(400, 150);
   context.lineTo(400, 250);
   context.lineTo(400, 150);
   context.lineTo(450, 50);
   context.stroke();

   context.lineWidth = 5;
   context.strokeStyle = 'green';
   context.beginPath();
   context.moveTo(500, 50);
   context.lineTo(550, 250);
   context.lineTo(500, 50);
   context.lineTo(450, 250);
   context.lineTo(481, 125);
   context.lineTo(520, 125);
   context.stroke();

   context.lineWidth = 5;
   context.strokeStyle = 'orange';
   context.beginPath();
   context.moveTo(575, 50);
   context.lineTo(575, 250);
   context.lineTo(575, 50);
   context.lineTo(650, 250);
   context.lineTo(650, 40);
   context.stroke();


}


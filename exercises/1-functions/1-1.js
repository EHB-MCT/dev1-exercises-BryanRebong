"use strict";

let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext("2d");

drawLine();

function drawLine() {
   //Letter "B"
   context.beginPath();
   context.moveTo(50, 50);
   context.lineTo(50, 250);
   context.moveTo(50, 50);
   context.lineTo(150, 50);
   context.lineTo(150, 125);
   context.lineTo(175, 125);
   context.lineTo(175, 250);
   context.lineTo(50, 250);
   context.stroke();

   //Letter "R"
   context.beginPath();
   context.moveTo(200, 125);
   context.lineTo(200, 250);
   context.moveTo(200, 150);
   context.lineTo(250, 150);
   context.lineTo(265, 165);
   context.stroke();

   //Letter "Y"
   context.beginPath();
   context.moveTo(300, 175);
   context.lineTo(300, 250);
   context.moveTo(300, 175);
   context.lineTo(275, 150);
   context.moveTo(300, 175);
   context.lineTo(325, 150);
   context.stroke();

   //Letter "A"
   context.beginPath();
   context.moveTo(375, 150);
   context.lineTo(325, 250);
   context.moveTo(375, 150);
   context.lineTo(425, 250);
   context.stroke();

   //Letter "N"
   context.beginPath();
   context.moveTo(450, 150);
   context.lineTo(450, 250);
   context.moveTo(450, 150);
   context.lineTo(500, 250);
   context.lineTo(500, 150);
   context.stroke();
}


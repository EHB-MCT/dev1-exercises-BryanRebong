"use Strict"

let canvas = document.querySelector("canvas");
   canvas.width = window.innerWidth;
   canvas.height = window.innerHeight;
   let context = canvas.getContext("2d");

drawSunrise();

function drawSunrise() {
//Orange sky
context.beginPath();
context.rect(50, 50, 350, 350);
context.fillStyle = "orange";
context.fill();

//Blue ocean
context.beginPath();
context.rect(50, 275, 350, 125);
context.fillStyle = "blue";
context.fill();

//Yellow sun
context.beginPath();
context.fillStyle = "yellow";
context.arc(225, 275, 100, 0, Math.PI, true);
context.fill();
}
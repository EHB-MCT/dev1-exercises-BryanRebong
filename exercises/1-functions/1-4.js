"use Strict"

let canvas = document.querySelector("canvas");
   canvas.width = window.innerWidth;
   canvas.height = window.innerHeight;
   let context = canvas.getContext("2d");

drawRect();

function drawRect() {
//First square
context.beginPath();
context.rect(50, 50, 350, 350);
context.fillStyle = "lightblue";
context.strokeStyle = "black";
context.fill();
context.stroke();

//Second square
context.beginPath();
context.rect(50, 50, 300, 300);
context.fillStyle = "lightblue";
context.strokeStyle = "black";
context.fill();
context.stroke();

//Third square
context.beginPath();
context.rect(100, 50, 250, 250);
context.fillStyle = "lightblue";
context.strokeStyle = "black";
context.fill();
context.stroke();

//Fourth square
context.beginPath();
context.rect(150, 100, 200, 200);
context.fillStyle = "lightblue";
context.strokeStyle = "black";
context.fill();
context.stroke();

//Fifth square
context.beginPath();
context.rect(150, 150, 150, 150);
context.fillStyle = "lightblue";
context.strokeStyle = "black";
context.fill();
context.stroke();
}
"use Strict"

let canvas = document.querySelector("canvas");
   canvas.width = window.innerWidth;
   canvas.height = window.innerHeight;
   let context = canvas.getContext("2d");

drawRect();

function drawRect() {

    context.lineWidth = 1;
    context.strokeStyle = 'red';
    context.beginPath();
    context.rect(50, 50, 175, 175);
    context.stroke();

    context.lineWidth = 1;
    context.strokeStyle = 'red';
    context.beginPath();
    context.rect(225, 225, 175, 175);
    context.stroke();

    context.lineWidth = 1;
    context.fillStyle = "black";
    context.beginPath();
    context.rect(135, 135, 175, 175);
    context.fill();
    context.stroke();

    context.lineWidth = 1;
    context.strokeStyle = 'red';
    context.beginPath();
    context.rect(310, 85, 50, 50);
    context.stroke();

    context.lineWidth = 1;
    context.strokeStyle = 'red';
    context.beginPath();
    context.rect(85, 310, 50, 50);
    context.stroke();

    context.lineWidth = 1;
    context.fillStyle = "black";
    context.beginPath();
    context.rect(360, 50, 35, 35);
    context.fill();

    context.lineWidth = 1;
    context.fillStyle = "black";
    context.beginPath();
    context.rect(50, 360, 35, 35);
    context.fill();
    
    
    }
"use Strict"

let canvas = document.querySelector("canvas");
   canvas.width = window.innerWidth;
   canvas.height = window.innerHeight;
   let context = canvas.getContext("2d");

drawRect();

function drawRect() {

// Top left white square
    context.lineWidth = 1;
    context.strokeStyle = 'red';
    context.beginPath();
    context.rect(50, 50, 150, 150);
    context.stroke();

// Bottom right white square
    context.lineWidth = 1;
    context.strokeStyle = 'red';
    context.beginPath();
    context.rect(200, 200, 150, 150);
    context.stroke();

// Middle black square
    context.lineWidth = 1;
    context.fillStyle = "black";
    context.beginPath();
    context.rect(125, 125, 150, 150);
    context.fill();
    context.stroke();

// Top right white square
    context.lineWidth = 1;
    context.strokeStyle = 'red';
    context.beginPath();
    context.rect(275, 75, 50, 50);
    context.stroke();

// Bottom left white square
    context.lineWidth = 1;
    context.strokeStyle = 'red';
    context.beginPath();
    context.rect(75, 275, 50, 50);
    context.stroke();

// Top right black square
    context.lineWidth = 1;
    context.fillStyle = "black";
    context.beginPath();
    context.rect(325, 50, 25, 25);
    context.fill();

// Bottom left black square
    context.lineWidth = 1;
    context.fillStyle = "black";
    context.beginPath();
    context.rect(50, 325, 25, 25);
    context.fill();
    
    
    }
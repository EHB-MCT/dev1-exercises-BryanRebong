"use strict"

let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext("2d");

drawRect();

function drawRect() {

    context.lineWidth = 1;
    context.fillStyle = '#D3D3D3';
    context.beginPath();
    context.rect(50, 50, 300, 300);
    context.fill();

    context.lineWidth = 1;
    context.fillStyle = '#152238';
    context.beginPath();
    context.rect(50, 50, 100, 200);
    context.fill();

    context.lineWidth = 1;
    context.fillStyle = '#152238';
    context.beginPath();
    context.rect(250, 50, 100, 200);
    context.fill();

    context.lineWidth = 1;
    context.fillStyle = 'red';
    context.beginPath();
    context.rect(50, 100, 300, 100);
    context.fill();

    context.lineWidth = 1;
    context.fillStyle = '#03a9f4';
    context.beginPath();
    context.rect(50, 250, 100, 100);
    context.fill();

    context.lineWidth = 1;
    context.fillStyle = '#03a9f4';
    context.beginPath();
    context.rect(250, 250, 100, 100);
    context.fill();

  

}
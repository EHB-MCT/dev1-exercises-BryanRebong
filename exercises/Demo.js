"use strict";

let canvas = document.querySelector("canvas");
   canvas.width = window.innerWidth;
   canvas.height = window.innerHeight;
   let context = canvas.getContext("2d");

draw();

function draw() {
    let i = 0;
    let step = 200
    let margin = 100
    while (i < 5){
        context.beginPath();
        context.ellipse (300 + margin + (i * step), 100, 100, 0, 0, Math.PI*2);
        context.fill;

        console.log ("loop", i);
        i++;
    }

    console.log ("after loop");
}
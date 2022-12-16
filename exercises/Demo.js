"use strict";

import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

let bubblePosX = [0];
let bubblePosY = [0];
let counter = 0;

draw();

function draw() {
    drawBubbles();
}

function drawBubbles() {
    context.beginPath();
    context.arc(100, 75, 50, 0, 2 * Math.PI);
    context.fillStyle = '#00bfff';
    context.fill();
    counter++;
    
    if(counter==7) {
    bubblePosX = append(bubblePosX, Math.random(0, width));
    bubblePosY = append(bubblePosY, -10);
    counter %= 7;
}
    
    for (let i=0; i < bubblePosX.length; i++) {
    circle(bubblePosX[i],bubblePosY[i],20);
}

    for (let i=0; i<bubblePosX.length;i++) {
    bubblePosY[i]+= 1;
}

}



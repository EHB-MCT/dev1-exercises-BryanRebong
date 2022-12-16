'use strict';

import context from "../../scripts/context.js";
import * as utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

let xPos = [];
let yPos; [];
let sizes; [];

let ySpeed = 5;

/*Setup();

function Setup() {
    for(let 1 = 0; i < bubblesAmount; i++); {
        xPos[i] = width / 2;
        yPos[i] = height;
        sizes[i] = utils.randomNumber(25, 50);
    }
    

    update(); 
}

function update() {
    context.fillStyle= 'white';
    context.fillRect(0, 0, width, height);
    
    for(let i : 0; i < bubblesAmount; i++) { 
    yPos[i] -= ySpeed[i];
    xPos[i] -= 
    drawBubble(xPos[i], yPos[i], sizes[i], 100);


    requestAnimationFrame(update);
}



function drawBubble(x, y, size, hue) {
    context.fillStyle = utils.hsl(hue, 50, 50);
    utils.fillCircle(x, y, size);
    context.fillStyle = utils.hsl(hue, 50, 75);
    utils.fillCircle(x + size / 3, y - size / 3, size / 4);
}

}
*/
"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

draw();

function draw() {
    context.lineWidth = 2;
    context.strokeStyle = "white";
    context.fillStyle = "#3498DB";
    context.fillRect(50, 50, 300, 300);
    drawCross();
}

function drawCross() {
    let i = 5;
    while (150>i<250) { 
        let step = 5 * i;
        Utils.drawLine(50, step, 350, step);
        Utils.drawLine(step, 50, step, 350);
        i = i + 1;
    }
}
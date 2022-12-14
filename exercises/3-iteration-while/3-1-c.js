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
    while (i<11) { 
        let step = 50 + (20 * i);
        Utils.drawLine(50, step, 350, step);
        Utils.drawLine(step, 50, step, 350);
        i = i + 1;
    }
}
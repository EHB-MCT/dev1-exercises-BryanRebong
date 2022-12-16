"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";


let horizontalLines = 60;
let verticalLines = 30;

let width = 600;
let height = 300;

drawRect();

function drawRect () {
    context.fillStyle = "orange";
    context.beginPath();
    context.rect(0, 0, 600, 300);
    context.fill();

}


drawLine();

function drawLine () {
    context.strokeStyle = "white";
    let step = width / horizontalLines;
    for (let i = 0; i < horizontalLines; i++) {
        Utils.drawLine(0 + (step * i), 0, width - (step * i), height );
    }
    for (let i = 0; i <= verticalLines; i++) {
        Utils.drawLine(0, 0 + (step * i), width , height - (step * i));
    }
}








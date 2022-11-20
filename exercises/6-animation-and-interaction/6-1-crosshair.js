'use strict';

import context from "../../scripts/context.js";
import * as utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

window.onmousemove = drawCrosshair;

function drawCrosshair(eventData) {
    console.log("Moving mouse!");
    console.log(eventData.pageX, eventData.pageY);
    Utils.drawLine(eventData.x, 0, eventData.x, height);
    Utils.drawLine(0, eventData.y, width, eventData.y);
}
'use strict';

import context from "../../scripts/context.js";
import * as utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

drawBubble(100, 300, 50, 180);

function drawBubble(x, y, size, hue) {
    context.fillStyle = utils.hsla(hue, 50, 50);
    utils.fillCircle(x, y, size);
    context.fillStyle = utils.hsla(hue, 50, 75);
    utils.fillCircle(x + size / 3, y - size / 3, size / 4);
}

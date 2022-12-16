"use Strict"

import context from "../../scripts/context.js"
import * as Utils from "../../scripts/utils.js"

let width = window.innerWidth;
let height = window.innerHeight;
let margin = 200;

drawBubbles()

function drawBubbles () {
    let bubblesAmount = 200;

    context. fillRect(0, 0, width, height);

    for (let i = 0; i < bubblesAmount; i++) {
        let randomx = 200 + Math.random() * width - margin * 2;
        let randomy = 200 + Math.random() * height - margin * 2;
        let randomHue = Math.random() * 360;
        let randomSize = 10 + Math.random()*40;
        context.fillStyle = Utils.hsla
    }
}


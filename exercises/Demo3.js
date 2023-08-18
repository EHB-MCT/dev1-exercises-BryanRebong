"use strict";
import context from "./scripts/context.js";
import * as Utils from "./scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

window.onkeydown = keyPressed;

let diamonds = [];
var arrowWidth = 75;
let arrowSize = height;
let u = 1;

setup();
update();

function setup() {
	for (let i = 0; i < 1000; i++) {
		let r = Utils.randomNumber(1, 2);
		if (r == 2) {
			r = 3;
		}
		let diamond = {
			x: Utils.randomNumber(0, width),
			y: Utils.randomNumber(0, height),
			size: Utils.randomNumber(2, 50),
			color: Utils.hsl(0, 0, r * 25),
		};
		diamonds[i] = diamond;
	}
}

function update() {
	//background
	context.fillStyle = Utils.hsl(0, 0, 75);
	context.fillRect(0, 0, width, height);
	for (let i = -10000; i < 10000; i += 200) {
		for (let j = 0; j < 100; j++) {
			drawArrow(i, j * arrowSize, arrowSize, arrowWidth);
		}
	}
	for (let i = 0; i < diamonds.length; i++) {
		drawDiamond(diamonds[i]);
	}
	requestAnimationFrame(update);
}

function drawArrow(x, y, size, width) {
	context.strokeStyle = Utils.hsl(0, 0, 25);
	context.lineWidth = width;
	context.lineCap = "square";
	Utils.drawLine(x, y, x + size / 2, y + size / 2);
	Utils.drawLine(x + size / 2, y + size / 2, x, y + size);
}

function drawDiamond(diamond) {
	context.strokeStyle = diamond.color;
	context.lineWidth = 2;
	Utils.drawLine(diamond.x, diamond.y - diamond.size / 2, diamond.x + diamond.size / 2, diamond.y);
	Utils.drawLine(diamond.x + diamond.size / 2, diamond.y, diamond.x, diamond.y + diamond.size / 2);
	Utils.drawLine(diamond.x, diamond.y + diamond.size / 2, diamond.x - diamond.size / 2, diamond.y);
	Utils.drawLine(diamond.x - diamond.size / 2, diamond.y, diamond.x, diamond.y - diamond.size / 2);
}

/**
 *
 * @param {KeyboardEvent} e
 */

function keyPressed(e) {
	if (e.key == "ArrowRight" && arrowWidth < 75) {
		arrowWidth++;
	} else if (e.key == "ArrowLeft" && arrowWidth > 1) {
		arrowWidth--;
	} else if (e.key == "ArrowUp" && arrowSize > height / 10) {
		console.log("up");
		u++;
		arrowSize = height / u;
	} else if (e.key == "ArrowDown" && arrowSize < height) {
		console.log("down");
		u--;
		arrowSize = height / u;
	}
}
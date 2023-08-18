"use strict";


import context from "../../scripts/context.js"
import * as Utils from "../../scripts/utils.js"


let width = context.canvas.width;
let height = context.canvas.height;

window.onmousemove = changeSpeed;


let ballsX = [];

let ballsY = [];

let frameCount = 0;

let bubbleSpeed = 2;


drawBall();


function drawBall() {
  context.clearRect(0, 0, canvas.width, 300);
  for (let i = 0; i < ballsY.length; i++) {
    context.fillStyle = 'blue';
    Utils.fillAndStrokeCircle(ballsX[i], ballsY[i], 20);
  }
  addNewBall();
  animate();
  requestAnimationFrame(drawBall);
  context.clearRect(0, 300, canvas.width, 300);
}


function animate() {
  for (let i = 0; i < ballsY.length; i++) {
    ballsY[i] += bubbleSpeed;
    if (ballsY[i] > 330) {
      ballsY[i] = null;
    }
  } 
}

function addNewBall() {
  if (frameCount % 10 == 0) {
    let x = Utils.randomNumber(0, width);

    ballsX.push(x);
    console.log(ballsX);

    ballsY.push(-20);
    console.log(ballsY);
  }
  frameCount++;
}

/**
 * 
 * @param {MouseEvent} eventData 
 */
function changeSpeed(eventData) {
  bubbleSpeed = eventData.pageX / width + 5;
}






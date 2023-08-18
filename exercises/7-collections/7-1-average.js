"use strict"

import context from "../../scripts/context.js"
import * as Utils from "../../scripts/utils.js"



setup();


function setup() {
    let numbers = [];


    for (let i = 0; i<1000; i++){
        numbers[i]= Utils.randomNumber(0,100);
    }


    console.log(calculateAverage(numbers));
}



function calculateAverage(listOfNumbers){
    let sum = 0;

    for(let i = 0; i < listOfNumbers.length; i++){
        sum +=listOfNumbers[i];
  }

  return sum / listOfNumbers.length;

}


@param  {MouseEvent} eventData 

function changeSpeed(eventData) {
   mouseHue = eventData.pageX / width * 360;

}

//CHATGPT//
let speedFactor = event.clientX / canvas.width;
for (let i = 0; i < balls.length; i++) {
let ball = balls[i];
ball.speed = ball.speed + speedFactor;
}






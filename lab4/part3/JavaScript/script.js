/*
    Name: Nashifah Ahmed
    File: script.js
    Date: 10 April 2026
    Description: This is the code for INFT1206 Lab 4 Part 3 - Object building practice
*/

// setup canvas

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);

// function to generate random number

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// function to generate random color

function randomRGB() {
    return `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
}

// Ball class
class Ball {
    // Constructor (param = x y coordinates, velocity, color, size)
    constructor(x, y, velX, velY, color, size){
        this.x = x;
        this.y = y;
        this.velX = velX;
        this.velY = velY;
        this.color = color;
        this.size = size;
    }

    // Draw Method
    draw() {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
        ctx.fill();
    }

    // Update Method
    update(){

        // If the ball is going off the right edge
        if(this.x + this.size >= width){
            this.velX = -this.velX;
        }

        // If the ball is going off the left edge
        if (this.x - this.size <= 0) {
            this.velX = -this.velX;
        }

        // If the ball is going off the bottom edge
        if(this.y + this.size >= height){
            this.velY = -this.velY;
        }

        // If the ball is going off the top edge
        if(this.y - this.size <= 0){
            this.velY = -this.velY;
        }

        this.x += this.velX;
        this.y += this.velY;
    }
}

const testBall = new Ball(50, 100, 4, 4, "blue", 10);
testBall.x;
testBall.size;
testBall.color;
testBall.draw();

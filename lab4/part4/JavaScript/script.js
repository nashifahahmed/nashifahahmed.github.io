/*
    Name: Nashifah Ahmed
    File: script.js
    Date: 10 April 2026
    Description: This is the code for INFT1206 Lab 4 Part 4 - Adding features to our bouncing balls demo
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

// Shape class
class Shape{
    // Constructor (param = ball position, velocity)
    constructor(x, y, velX, velY){
        this.x = x;
        this.y = y;
        this.velX = velX;
        this.velY = velY;
    }
}

// Ball class (extends class Shape)
class Ball extends Shape{
    // Constructor (param = x y coordinates, velocity, color, size)
    constructor(x, y, velX, velY, color, size){
        super(x, y, velX, velY);
        this.color = color;
        this.size = size;
        this.exists = true;
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

    // Collision detection for balls
    collisionDetect(){
        for(const ball of balls){
            if(!(this === ball) && ball.exists){
                const dx = this.x - ball.x;
                const dy = this.y - ball.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                // If collision is detected
                if(distance < this.size + ball.size){
                    ball.color = this.color = randomRGB();
                }
            }
        }
    }
}

// EvilCircle class (extends class Shape)
class EvilCircle extends Shape{
    // Constructor (param = circle position inherits from parent Shape)
    constructor(x, y){
        super(x, y, 20, 20);
        this.color = "white";
        this.size = 10;

        window.addEventListener("keydown", (e) => {
            switch (e.key) {
                case "a":
                    this.x -= this.velX;
                    break;
                case "d":
                    this.x += this.velX;
                    break;
                case "w":
                    this.y -= this.velY;
                    break;
                case "s":
                    this.y += this.velY;
                    break;
            }
        });
    }

    // Draw Method
    draw(){
        ctx.beginPath();
        ctx.lineWidth = 3;
        ctx.strokeStyle = this.color;
        ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
        ctx.stroke();
    }

    // Check Bounds Method (like update method in Ball class)
    checkBounds(){
        // If the ball is going off the right edge
        if(this.x + this.size >= width){
            this.x -= this.size;
        }

        // If the ball is going off the left edge
        if (this.x - this.size <= 0) {
            this.x += this.size;
        }

        // If the ball is going off the bottom edge
        if(this.y + this.size >= height){
            this.y -= this.size;
        }

        // If the ball is going off the top edge
        if(this.y - this.size <= 0){
            this.y += this.size;
        }    
    }

    // Collision Detect Method
    collisionDetect(){
        for(const ball of balls){
            if(ball.exists){
                const dx = this.x - ball.x;
                const dy = this.y - ball.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                // If collision is detected
                if(distance < this.size + ball.size){
                    ball.exists = false;
                }
            }
        }        
    }
}

// Array to hold every ball
const balls = [];

// Evil Circle Creation
const evilBall = new EvilCircle(random(0, width), random(0, height));

// Creates the random balls
while (balls.length < 25){
    // Randomize ball size
    const size = random(10, 20);
    // Randomize ball position, colour, and size
    const ball = new Ball(
        random(0 + size, width - size),
        random(0 + size, height - size),
        random(-7, 7),
        random(-7, 7),
        randomRGB(),
        size     
    );

    balls.push(ball);
}

// Loop function (keeps the animation looping)
function loop(){
    ctx.fillStyle = "rgb(0 0 0 / 25%)";
    ctx.fillRect(0, 0, width, height);

    for(const ball of balls){
        ball.draw();
        ball.update();
        ball.collisionDetect();
    }

    // Evil Circle Method calls
    evilBall.draw();
    evilBall.checkBounds();
    evilBall.collisionDetect();

    requestAnimationFrame(loop);
}
loop();



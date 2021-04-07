'use strict';

var canvas = document.getElementById('gameCanvas');
var ctx = canvas.getContext('2d');
var inertia = 0.98;

// Changing Global Variables
var x = 4 * canvas.height / 5;
var y = canvas.height - 75;
var dx = 0;
var dy = 0;
var angle = 0;
var cloudPos = [500 * Math.random() + 50, 10 * Math.random(), 5 * Math.random(), 8 * Math.random(), 500 * Math.random() + 50, 0.5 * Math.random() + 0.4, 0.5 * Math.random() + 0.4];
var keys = {
  left: false,
  right: false,
  up: false
};
var screenX = 0;
var lives = 3;
var dead = false;
var pause = false;

function restart() {
  x = 4 * canvas.height / 5;
  y = canvas.height - 75;
  dx = 0;
  dy = 0;
  angle = 0;
  cloudPos = [500 * Math.random() + 50, 10 * Math.random(), 5 * Math.random(), 8 * Math.random(), 500 * Math.random() + 50, 0.5 * Math.random() + 0.4, 0.5 * Math.random() + 0.4];
  keys = {
    left: false,
    right: false,
    up: false
  };
  screenX = 0;
}

// Function to draw a platform
function drawPlatform(xcor, ycor, width) {
  var height = 10;
  xcor += height / 2;
  xcor += screenX;
  ctx.beginPath();
  ctx.fillStyle = '#369';
  ctx.fillRect(xcor, ycor, width, height);
  drawCircle(xcor, ycor + height / 2, height / 2);
  drawCircle(xcor + width, ycor + height / 2, height / 2);
  ctx.closePath();
  if (x >= xcor - 10 && x <= xcor + width + 10 && y <= ycor - 11 && y >= ycor - 15 && dy >= 0) {
    dy = 0;
  }
}

function drawFloor(xcor, width) {
  var height = 60;
  var ycor = canvas.height - 60;
  xcor += screenX;
  ctx.beginPath();
  ctx.fillStyle = '#093';
  ctx.fillRect(xcor, ycor, width, height);
  ctx.closePath();
  if (x >= xcor && x <= xcor + width && y <= ycor - 11 && y >= ycor - 15 && dy >= 0) {
    dy = 0;
  }
}

// draw background
function drawBack() {
  ctx.fillStyle = '#5df';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  //sun
  ctx.fillStyle = '#ffff00';
  drawCircle(70, 90, 28);
  for (var i = 0; i < 8; i++) {
    ctx.beginPath();
    ctx.moveTo(70 + 35 * Math.cos(angle + i * Math.PI / 4 - 0.2), 90 + 35 * Math.sin(angle + i * Math.PI / 4 - 0.2));
    ctx.lineTo(70 + 65 * Math.cos(angle + i * Math.PI / 4), 90 + 65 * Math.sin(angle + i * Math.PI / 4));
    ctx.lineTo(70 + 35 * Math.cos(angle + i * Math.PI / 4 + 0.2), 90 + 35 * Math.sin(angle + i * Math.PI / 4 + 0.2));
    ctx.fill();
  }
  //clouds
  drawCloud(cloudPos[0], 80);
  drawCloud(cloudPos[4], 200);

  // hills
  ctx.fillStyle = '#082';
  drawCircle(screenX + 300, 450, 100);
  ctx.beginPath();
  ctx.moveTo(screenX + 150, 450);
  ctx.lineTo(screenX + 229, 380);
  ctx.lineTo(screenX + 372, 380);
  ctx.lineTo(screenX + 450, 450);
  ctx.fill();

  ctx.fillStyle = '#666';
  ctx.fillRect(0, 0, canvas.width, 25);
  ctx.fillStyle = '#eee';
  ctx.font = '20px Roboto, sans-serif';
  ctx.fillText('Lives: ' + lives, 720, 20);
}

function drawLevel() {
  drawFloor(0, 700);
  drawFloor(950, 500);
  drawFloor(2050, 500);

  drawPlatform(785, 350, 80);
  drawPlatform(1485, 350, 80);
  drawPlatform(1685, 300, 80);
  drawPlatform(1885, 350, 80);
  drawPlatform(2585, 350, 80);
  drawPlatform(2785, 275, 80);
  drawPlatform(2585, 175, 80);
  drawPlatform(2785, 100, 80);

  ctx.fillStyle = '#ddd';
  ctx.fillRect(screenX + 3600, 100, 20, 500);
  ctx.fillStyle = '#bbb';
  drawCircle(screenX + 3610, 95, 15);
  ctx.fillStyle = '#fff';
  ctx.beginPath();
  ctx.moveTo(screenX + 3600, 110);
  ctx.lineTo(screenX + 3550, 135);
  ctx.lineTo(screenX + 3600, 160);
  ctx.fill();
  drawFloor(3200, 500);
}

function drawCharacter() {
  ctx.fillStyle = '#f90';
  drawCircle(x, y, 15);
}

function moveCharacter() {
  if (keys.right && !keys.left) {
    dx = 3;
  }
  if (keys.left && !keys.right) {
    dx = -3;
  }
  if (keys.up && dy === 0) {
    dy = -6;
  }
  x += dx;
  y += dy;
}

function keydown(e) {
  // 65 is the code for a
  if (e.keyCode === 65) {
    keys.left = true;
  }
  // 68 is the code for d
  if (e.keyCode === 68) {
    keys.right = true;
  }
  // 87 is the code for w and 32 is the code for the spacebad
  if (e.keyCode === 87 || e.keyCode === 32) {
    keys.up = true;
  }

  if (e.keyCode === 13) {
    restart();
    lives = 3;
    dead = false;
  }

  if (e.keyCode) {
    pause = false;
  }
}

function keyup(e) {
  if (e.keyCode === 65) {
    keys.left = false;
  }
  if (e.keyCode === 68) {
    keys.right = false;
  }
  if (e.keyCode === 87 || e.keyCode === 32) {
    keys.up = false;
  }
}

// make a circle
function drawCircle(xcor, ycor, radius) {
  ctx.beginPath();
  ctx.arc(xcor, ycor, radius, 0, Math.PI * 2);
  ctx.fill();
  ctx.closePath();
}

// make a cloud
function drawCloud(xcor, ycor) {
  ctx.beginPath();
  ctx.fillStyle = '#fff';
  ctx.fillRect(xcor, ycor, 100, 30);
  drawCircle(xcor, ycor + 15, 15);
  drawCircle(xcor + 100, ycor + 15, 15);
  drawCircle(xcor + 20 + cloudPos[1], ycor, 25 + cloudPos[2]);
  drawCircle(xcor + 60 + cloudPos[1], ycor - 2, 25 + cloudPos[3]);
  ctx.closePath();
}

function lifeLost() {
  restart();
  lives--;
  ctx.fillStyle = '#eee';
  ctx.fillRect(canvas.width / 2 - 200, canvas.height / 2 - 125, 400, 250);
  ctx.fillRect(canvas.width / 2 - 225, canvas.height / 2 - 100, 450, 200);
  drawCircle(canvas.width / 2 - 200, canvas.height / 2 - 100, 25);
  drawCircle(canvas.width / 2 - 200, canvas.height / 2 + 100, 25);
  drawCircle(canvas.width / 2 + 200, canvas.height / 2 - 100, 25);
  drawCircle(canvas.width / 2 + 200, canvas.height / 2 + 100, 25);
  ctx.fillStyle = '#333';
  ctx.fillRect(canvas.width / 2 - 200, canvas.height / 2 - 100, 400, 200);
  ctx.font = '50px Roboto, sans-serif';
  ctx.fillStyle = '#eee';
  ctx.fillText('You lost a Life!', canvas.width / 2 - 160, canvas.height / 2 + 20);
  ctx.font = '20px Roboto, sans-serif';
  ctx.fillText('Press Any Key to Continue', canvas.width / 2 - 110, canvas.height / 2 + 60);
  pause = true;
  document.addEventListener("keydown", keydown);
}

function died() {
  ctx.fillStyle = '#eee';
  ctx.fillRect(canvas.width / 2 - 200, canvas.height / 2 - 125, 400, 250);
  ctx.fillRect(canvas.width / 2 - 225, canvas.height / 2 - 100, 450, 200);
  drawCircle(canvas.width / 2 - 200, canvas.height / 2 - 100, 25);
  drawCircle(canvas.width / 2 - 200, canvas.height / 2 + 100, 25);
  drawCircle(canvas.width / 2 + 200, canvas.height / 2 - 100, 25);
  drawCircle(canvas.width / 2 + 200, canvas.height / 2 + 100, 25);
  ctx.fillStyle = '#333';
  ctx.fillRect(canvas.width / 2 - 200, canvas.height / 2 - 100, 400, 200);
  ctx.font = '50px Roboto, sans-serif';
  ctx.fillStyle = '#eee';
  ctx.fillText('You Died!', canvas.width / 2 - 110, canvas.height / 2 + 20);
  ctx.font = '20px Roboto, sans-serif';
  ctx.fillText('Press Enter to Restart', canvas.width / 2 - 100, canvas.height / 2 + 60);
  dead = true;

  document.addEventListener("keydown", keydown);
}

function win() {
  ctx.fillStyle = '#eee';
  ctx.fillRect(canvas.width / 2 - 200, canvas.height / 2 - 125, 400, 250);
  ctx.fillRect(canvas.width / 2 - 225, canvas.height / 2 - 100, 450, 200);
  drawCircle(canvas.width / 2 - 200, canvas.height / 2 - 100, 25);
  drawCircle(canvas.width / 2 - 200, canvas.height / 2 + 100, 25);
  drawCircle(canvas.width / 2 + 200, canvas.height / 2 - 100, 25);
  drawCircle(canvas.width / 2 + 200, canvas.height / 2 + 100, 25);
  ctx.fillStyle = '#333';
  ctx.fillRect(canvas.width / 2 - 200, canvas.height / 2 - 100, 400, 200);
  ctx.font = '50px Roboto, sans-serif';
  ctx.fillStyle = '#eee';
  ctx.fillText('You Won!', canvas.width / 2 - 110, canvas.height / 2 + 20);
  ctx.font = '20px Roboto, sans-serif';
  ctx.fillText('Press Enter to Restart', canvas.width / 2 - 100, canvas.height / 2 + 60);
  dead = true;

  document.addEventListener("keydown", keydown);
}

// Main draw function
function draw() {
  window.requestAnimationFrame(draw);
  if (!dead && !pause) {
    angle += 0.01;
    cloudPos[0] -= cloudPos[5];
    cloudPos[4] -= cloudPos[6];
    if (cloudPos[0] < -150) {
      cloudPos[0] = canvas.width + 90;
    }

    if (cloudPos[4] < -150) {
      cloudPos[4] = canvas.width + 90;
    }
    drawBack();
    drawLevel();
    drawCharacter();
    moveCharacter();
    dx *= inertia - 0.15;
    dy *= inertia;
    dy += 0.1;

    if (x >= 500) {
      x = 500;
      screenX -= dx;
    }

    if (x <= 100) {
      x = 100;
      screenX -= dx;
    }

    if (screenX >= 0) {
      screenX = 0;
    }

    if (y >= canvas.height) {
      lifeLost();
    }
  }
  if (lives <= 0) {
    died();
  }
  if (x > screenX + 3600) {
    win();
  }

  document.addEventListener("keydown", keydown);
  document.addEventListener("keyup", keyup);
}

draw();

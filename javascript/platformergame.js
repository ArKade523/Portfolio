'use strict';

const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const inertia = 0.98;

// Changing Global Variables
let x = canvas.width / 5;
let y = canvas.height - 75;
let dx = 0;
let dy = 0;
let angle = 0;
let cloudPos = [500 * Math.random() + 50, 10 * Math.random(), 5 * Math.random(), 8 * Math.random(), 500 * Math.random() + 50, 0.5 * Math.random() + 0.4, 0.5 * Math.random() + 0.4];
let keys = {
  left: false,
  right: false,
  up: false
};
let screenX = 0;
let lives = 3;
let dead = false;
let pause = false;
let splash = true;
let level = 1;

function startScreen() {
  ctx.fillStyle = '#444';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = '#eee';
  ctx.font = '75px Roboto, sans-serif';
  ctx.fillText('Untitled Platformer', canvas.width / 2 - 300, canvas.height / 3);
  ctx.font = '20px Roboto, sans-serif';
  ctx.fillText("Use 'w' or the spacebar to jump, 'd' to go right, and 'a' to go left", canvas.width / 2 - 265, 2 * canvas.height / 3);
  ctx.fillText("Press any key to start", canvas.width / 2 - 80, 2 * canvas.height / 3 + 50);
}

function restart() {
  x = canvas.height / 5;
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
  let height = 10;
  xcor += height / 2;
  xcor += screenX;
  ctx.beginPath();
  ctx.fillStyle = '#369';
  ctx.fillRect(xcor, ycor, width, height);
  drawCircle(xcor, ycor + height / 2, height / 2);
  drawCircle(xcor + width, ycor + height / 2, height / 2);
  ctx.closePath();
  if (x >= xcor - 10 && x <= xcor + width + 10 && y <= ycor - 5 && y >= ycor - 15 && dy >= 0) {
    dy = 0;
    y = ycor - 15;
  }
}

function drawBouncingPlatform(xcor, ycor, width) {
  let height = 10;
  xcor += height / 2;
  xcor += screenX;
  ctx.beginPath();
  ctx.fillStyle = '#963';
  ctx.fillRect(xcor, ycor, width, height);
  drawCircle(xcor, ycor + height / 2, height / 2);
  drawCircle(xcor + width, ycor + height / 2, height / 2);
  ctx.closePath();
  if (x >= xcor - 10 && x <= xcor + width + 10 && y <= ycor - 5 && y >= ycor - 15 && dy >= 0) {
    dy = -13;
    y = ycor - 15;
  }
}


function drawFloor(xcor, width) {
  let height = 60;
  let ycor = canvas.height - 60;
  xcor += screenX;
  ctx.beginPath();
  ctx.fillStyle = '#093';
  ctx.fillRect(xcor, ycor, width, height);
  ctx.closePath();
  if (x >= xcor && x <= xcor + width && y <= ycor + 8 && y >= ycor - 15 && dy >= 0) {
    dy = 0;
    y = ycor - 15;
  }
}

// draw background
function drawBack() {
  ctx.fillStyle = '#5df';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  //sun
  ctx.fillStyle = '#ffff00';
  drawCircle(70, 90, 28);
  for (let i = 0; i < 8; i++) {
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
  drawCircle(screenX + 300, 650, 100);
  ctx.beginPath();
  ctx.moveTo(screenX + 150, 650);
  ctx.lineTo(screenX + 229, 580);
  ctx.lineTo(screenX + 372, 580);
  ctx.lineTo(screenX + 450, 650);
  ctx.fill();

  ctx.fillStyle = '#666';
  ctx.fillRect(0, 0, canvas.width, 25);
  ctx.fillStyle = '#eee';
  ctx.font = '20px Roboto, sans-serif';
  ctx.fillText('Lives: ' + lives, canvas.width - 80, 20);
  ctx.fillText('Level: ' + level, canvas.width - 160, 20);
}

function drawLevel() {
  if (level === 1) {
    levelOne();
  }

  if (level === 2) {
    levelTwo();
  }
  
  if (level === 3 || level === 4) {
  	drawHouse(-300);
    levelThree();
  }
}

function levelOne() {
  drawFloor(0, 700);
  drawFloor(950, 500);
  drawFloor(2050, 500);

  drawPlatform(785, 550, 80);
  drawPlatform(1485, 550, 80);
  drawPlatform(1685, 500, 80);
  drawPlatform(1885, 550, 80);
  drawPlatform(2585, 550, 80);
  drawPlatform(2785, 475, 80);
  drawPlatform(2585, 375, 80);
  drawPlatform(2785, 300, 80);

  drawFlag(3600);
  drawFloor(3200, 500);
  
  if (x > screenX + 3600) {
    win();
    level = 2;
  }
}

function levelTwo() {
  drawFloor(0, 700);
  drawFloor(1725, 225);
  drawFloor(2500, 450);

  drawPlatform(800, 550, 80);
  drawPlatform(1050, 480, 100);
  drawPlatform(1400, 550, 80);
  drawPlatform(2050, 550, 80);
  drawPlatform(2050, 450, 80);
  drawPlatform(2050, 350, 80);
  drawPlatform(2050, 250, 80);
  drawPlatform(3100, 550, 20);

  drawFlag(3700);
  drawFloor(3300, 500);
  
  if (x > screenX + 3700) {
    win();
    level = 3;
  }
}

function levelThree () {
	drawFloor(-500, 1200);
  drawFloor(1700, 600);
  
  drawPlatform(800, 550, 60);
  drawPlatform(1000, 650, 60);
  drawPlatform(1250, 650, 60);
  drawPlatform(1450, 550, 60);
  drawBouncingPlatform(2400, 550, 80);
  drawBouncingPlatform(2700, 550, 80);
  
  drawFlag(3600);
  drawFloor(3100, 700);
  
  if (x >= screenX + 3600) {
  	win();
    level = 4;
  }
}

function drawFlag(xcor) {
  ctx.fillStyle = '#ddd';
  ctx.fillRect(screenX + xcor, 200, 20, canvas.height);
  ctx.fillStyle = '#999';
  drawCircle(screenX + xcor + 10, 195, 12);
  ctx.fillStyle = '#fff';
  ctx.beginPath();
  ctx.moveTo(screenX + xcor, 210);
  ctx.lineTo(screenX + xcor - 50, 235);
  ctx.lineTo(screenX + xcor, 260);
  ctx.fill();
}

function drawCharacter() {
  ctx.fillStyle = '#f90';
  drawCircle(x, y, 15);
}

function moveCharacter() {
  if (keys.right && !keys.left) {
    dx = 1;
    while (dx <= 5) {
      dx *= (inertia + 0.04);
    }
  }
  if (keys.left && !keys.right) {
    dx = -1;
    while (dx >= -5) {
      dx *= (inertia + 0.04);
    }
  }
  if (keys.up && dy === 0) {
    dy = -10;
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
  // 87 is the code for w and 32 is the code for the spacebar
  if (e.keyCode === 87 || e.keyCode === 32) {
    keys.up = true;
  }

  if (e.keyCode === 13) {
    restart();
    splash = true;
  }
  if (e.keyCode === 13 && dead === true) {
    dead = false;
    lives = 3;
  }

  if (e.keyCode) {
    pause = false;
    splash = false;
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

function drawHouse(xcor) {
  ctx.fillStyle = '#fec'
  ctx.fillRect(screenX + xcor, canvas.height - 210, 200, 150);
  ctx.fillStyle = '#655';
  ctx.beginPath();
  ctx.moveTo(screenX + xcor - 25, canvas.height - 210);
  ctx.lineTo(screenX + xcor + 100, canvas.height - 280);
  ctx.lineTo(screenX + xcor + 225, canvas.height - 210);
  ctx.fill();
  ctx.fillStyle = '#222'
  ctx.fillRect(screenX + xcor + 60, canvas.height - 160, 80, 100);
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
  ctx.fillText('You Died!', canvas.width / 2 - 110, canvas.height / 2 + 20);
  ctx.font = '20px Roboto, sans-serif';
  ctx.fillText('Press Any Key to Continue', canvas.width / 2 - 110, canvas.height / 2 + 60);
  pause = true;
  setTimeout(document.addEventListener("keydown", keydown), 500);
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
  ctx.fillText('Game Over!', canvas.width / 2 - 130, canvas.height / 2 + 20);
  ctx.font = '20px Roboto, sans-serif';
  ctx.fillText('Press Enter to Restart', canvas.width / 2 - 100, canvas.height / 2 + 60);
  dead = true;
  level = 1;
  setTimeout(document.addEventListener("keydown", keydown), 1000);
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
  ctx.fillText('Press Any Key to Continue', canvas.width / 2 - 105, canvas.height / 2 + 60);
  pause = true;
  setTimeout(document.addEventListener("keydown", keydown), 1000);
  restart();
}

// Main draw function
function draw() {
  window.requestAnimationFrame(draw);
  if (!dead && !pause && !splash) {
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
    dx *= (inertia - 0.15);
    dy *= (inertia);
    dy += 0.3;

    if (x >= 500) {
      x = 500;
      screenX -= dx;
    }

    if (x <= 100) {
      x = 100;
      screenX -= dx;
    }

    if (screenX >= 0 && level !== 3) {
      screenX = 0;
    }
    if (screenX >= 500) {
      screenX = 500;
    }

    if (y >= canvas.height) {
      lifeLost();
    }
  }
  if (lives <= 0) {
    died();
  }
  if (splash) {
    startScreen();
  }

  document.addEventListener("keydown", keydown);
  document.addEventListener("keyup", keyup);
}

draw();

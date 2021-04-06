const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const inertia = 0.98;
const jumpSpeed = 2;

// Changing Global Variables
let x = 4 * canvas.height / 5;
let y = canvas.height - 75;
let dx = 0;
let dy = 0;
let angle = 0;
let cloudPos = [500 * Math.random() + 50, 10 * Math.random(), 5 * Math.random(), 8 * Math.random(), 500 * Math.random() + 50, 0.5 * Math.random() + 0.4, 0.5 * Math.random() + 0.4];
let keys = {
  left: false,
  right: false,
  up: false
}

// Function to draw a platform
function drawPlatform (xcor, ycor, width) {
  let height = 10;
  xcor += height / 2;
  ctx.beginPath();
  ctx.fillStyle = '#369';
  ctx.fillRect(xcor, ycor, width, height);
  drawCircle(xcor, ycor + height / 2, height / 2);
  drawCircle(xcor + width, ycor + height / 2, height / 2);
  ctx.closePath();
    if (x >= xcor && x <= xcor + width && y <= ycor - 12 && y >= ycor - 15) {
      dy = 0;
    }
}
// draw background
function drawBack () {
  ctx.fillStyle = '#5df';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  //sun
  ctx.fillStyle = '#ffff00';
  drawCircle(70, 70, 28);
  for (let i = 0; i<8; i++) {
  ctx.beginPath();
    ctx.moveTo(70 + 35 * Math.cos(angle + i * Math.PI / 4 - .2), 70 + 35 * Math.sin(angle + i * Math.PI / 4 - .2));
    ctx.lineTo(70 + 65 * Math.cos(angle + i * Math.PI / 4), 70 + 65 * Math.sin(angle + i * Math.PI / 4));
    ctx.lineTo(70 + 35 * Math.cos(angle + i * Math.PI / 4 + .2), 70 + 35 * Math.sin(angle + i * Math.PI / 4 + .2));
    ctx.fill();
  }
  //clouds
  drawCloud(cloudPos[0], 80);
  drawCloud(cloudPos[4], 200);

  // hills
  ctx.fillStyle = '#082'
  drawCircle(300, 450, 100);
  ctx.beginPath();
  ctx.moveTo(150, 450);
  ctx.lineTo(229, 380);
  ctx.lineTo(372, 380);
  ctx.lineTo(450, 450);
  ctx.fill();
}

function drawLevel () {
  ctx.fillStyle = '#093';
  ctx.fillRect(0, canvas.height - 60, canvas.width, 60);

  drawPlatform(500, 350, 100);
  drawPlatform(300, 250, 150);
}

function drawCharacter () {
  drawCircle(x, y, 15);
}

function moveCharacter () {
  if (keys.right && !keys.left) {
    dx = 2;
  }
  if (keys.left && !keys.right) {
    dx = -2;
  }
  if (keys.up && dy === 0) {
    dy = -5;
  }
  x += dx;
  y += dy;
}

function keydown(e) {
        // 65 is the code for a
        if(e.keyCode === 65) {
            keys.left = true;
        }
        // 68 is the code for d
        if(e.keyCode === 68) {
            keys.right = true;
        }
        // 87 is the code for w
        if (e.keyCode === 87) {
          keys.up = true;
        }
    }

function keyup(e) {
        if(e.keyCode === 65) {
            keys.left = false;
        }
        if(e.keyCode === 68) {
            keys.right = false;
        }
        if (e.keyCode === 87) {
          keys.up = false;
        }
    }

// make a circle
function drawCircle (xcor, ycor, radius) {
  ctx.beginPath();
  ctx.arc(xcor, ycor, radius, 0, Math.PI * 2);
  ctx.fill();
  ctx.closePath();
}

// make a cloud
function drawCloud (xcor, ycor) {
  ctx.beginPath();
  ctx.fillStyle = '#fff';
  ctx.fillRect(xcor, ycor, 100, 30);
  drawCircle(xcor, ycor + 15, 15);
  drawCircle(xcor + 100, ycor + 15, 15);
  drawCircle(xcor + 20 + cloudPos[1], ycor, 25 + cloudPos[2]);
  drawCircle(xcor + 60 + cloudPos[1], ycor - 2, 25 + cloudPos[3]);
  ctx.closePath();
}

// Main draw function
function draw() {
  window.requestAnimationFrame(draw);
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
    dx *= (inertia- 0.05);
    dy *= inertia;
    dy += 0.05;
  if (y >= canvas.height - 75) {
    dy = 0;
  }

  document.addEventListener("keydown", keydown);
   document.addEventListener("keyup", keyup);
}

draw();

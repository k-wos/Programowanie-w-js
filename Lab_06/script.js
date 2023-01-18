const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

let ball = {x:150, y: 150, radius: 10, velX: 5, velY:5};
let hole = {x:250, y: 250, radius: 20};

const maxX = canvas.clientWidth - ball.clientWidth;
const maxY = canvas.clientHeight - ball.clientHeight;

window.addEventListener("deviceorientation", DeviceMove);

function DeviceMove(event){
    ball.velX = event.gamma / 90;
    ball.velY = event.beta / 90;
}

function drawBallAndHole(){
    ctx.clearRect(0,0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.arc(ball.x,ball.y,ball.radius,0,2*Math.PI);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(hole.x,hole.y,hole.radius,0,2*Math.PI);
    ctx.stroke();
    ball.x += ball.velX;
    ball.y += ball.velY;
    requestAnimationFrame(drawBallAndHole);
    
}
drawBallAndHole();

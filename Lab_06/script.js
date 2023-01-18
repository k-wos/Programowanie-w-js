const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let x =50;
let y=50;
const radius = 20;
const holeX = 200;
const holeY = 200;
const holeRadius = 30;

window.addEventListener('deviceorientation', handleOrientation);

function handleOrientation(event){
    x+=event.gamma/30;
    y-=event.beta/30;

    if (x - radius < 0) {
        x = radius;
      }
      if (x + radius > canvas.width) {
        x = canvas.width - radius;
      }
      if (y - radius < 0) {
        y = radius;
      }
      if (y + radius > canvas.height) {
        y = canvas.height - radius;
      }
    checkforCollision();
    draw();
}

function checkforCollision(){
    const distance = Math.sqrt(Math.pow(x-holeX,2)+Math.pow(y-holeY,2));

    if(distance<radius+holeRadius){
        alert("Wygrałeś");
        ctx.clearRect(0,0,canvas.width, canvas.height);
        
    }
}

    function draw(){
        ctx.clearRect(0,0,canvas.width, canvas.height);
        ctx.beginPath();
        ctx.arc(x,y,radius,0,2*Math.PI);
        ctx.fillStyle = "red";
        ctx.fill();
        ctx.closePath();
        ctx.beginPath();
        ctx.arc(holeX, holeY, holeRadius, 0, 2 * Math.PI);
        ctx.fillStyle = "green";
        ctx.fill();
        ctx.closePath();
    }

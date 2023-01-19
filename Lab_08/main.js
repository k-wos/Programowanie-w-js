const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");
let X = document.getElementById("xValue");
let numOfBalls;
let dis = document.getElementById("yValue");
let distanceValue;

const startButton = document.querySelector("#start-button");

let circles = [];



startButton.addEventListener("click", begin);

 function begin(){
     numOfBalls = parseInt(X.value);
     distanceValue = parseInt(dis.value)


for (let i = 0; i<numOfBalls; i++ ){
    const circle ={
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        directionX: Math.random() *2-1,
        directionY: Math.random() *2-1,
        speed: Math.random() * 3+1
    };
    circles.push(circle)
}
animate();

};

function animate( ){
    ctx.clearRect(0,0,canvas.width, canvas.height);

    for(let i =0; i<numOfBalls;i++){
        const circle = circles[i];
        ctx.fillStyle = "#0000ff";
        ctx.beginPath();
        ctx.arc(circle.x, circle.y, 10, 0, Math.PI * 2);
        ctx.fill();

        circle.x += circle.directionX * circle.speed;
        circle.y += circle.directionY * circle.speed;

        if(circle.x > canvas.width || circle.x < 0){
            circle.directionX = -circle.directionX;
        }
        if(circle.y > canvas.height || circle.y < 0){
            circle.directionY = -circle.directionY;
        }

        for(let j = i + 1; j<numOfBalls; j++){
            const circleToCompare = circles[j];
            const distance = Math.sqrt(Math.pow(circle.x - circleToCompare.x,2) + Math.pow(circle.y - circleToCompare.y,2));
            if(distance < distanceValue){
                ctx.strokeStyle = "#000"; 
                ctx.beginPath();
                ctx.moveTo(circle.x, circle.y);
                ctx.lineTo(circleToCompare.x, circleToCompare.y);
                ctx.stroke();
            }
        }
        
    }
    requestAnimationFrame(animate);
}

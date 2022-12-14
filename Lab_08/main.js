const canvas = document.querySelector('#myCanvas');
const ctx = canvas.getContext('2d');
const canvasWidhth = canvas.width;
const canvasHeight = canvas.height;

const rnd = (max, min) => {
    if (min)
        return Math.random() * (max - min) + min;
    else
        return Math.random() * max;
}

const map = (value, start1, stop1, start2, stop2, withinBounds = false) => {
    const newVal = (value - start1) / (stop1 - start1) * (stop2 - start2) + start2;
    if(!withinBounds)
        return newVal;
    if(start2 < stop2)
        return constrain(newVal, start2, stop2);
    else
        return constrain(newVal, stop2, start2);
}

 class Ball {
    constructor() {
        this.xPosition = rnd(canvasWidhth - 10, 10);
        this.yPosition = rnd(canvasHeight - 10, 10);
        this.radius = 10;
        this.xSpeed = rnd(1, -1) / 10;
        this.ySpeed = rnd(1, -1) / 10;
    }

    moveBall = () => {
        this.xPosition += this.xSpeed;
        this.yPosition += this.ySpeed;
    }

    checkEdges = () => {
        if (this.xPosition > canvasWidhth - 10 || this.xPosition - 10 < 0)
            this.xSpeed = this.xSpeed * (-1);
        if (this.yPosition > canvasHeight - 10 || this.yPosition - 10 < 0)
            this.ySpeed = this.ySpeed * (-1);
    }

    drawBall = () => {
        ctx.beginPath();
        ctx.strokeStyle = 'rgb(118, 200, 66)';
        const startAngle = 0;
        const endAngle = 2 * Math.PI;
        ctx.arc(this.xPosition, this.yPosition, this.radius, startAngle, endAngle);
        ctx.stroke();
    }

    connectBall = (otherBall) => {
        const x1 = this.xPosition
        const y1 = this.yPosition
        const x2 = otherBall.xPosition
        const y2 = otherBall.yPosition
        const a = x2 - x1;
        const b = y2 - y1;
        const c = Math.sqrt(a ** 2 + b ** 2);

        if (c <= canvasWidhth * 0.2) {
            const lineSize = map(c, 0, canvasWidhth * 0.2, 1, false) //FIXME: here too
            ctx.beginPath();
            ctx.moveTo(x1, y1);
            ctx.strokeStyle = `rgba(101, 130, 76, ${lineSize})`;
            ctx.lineTo(x2, y2);
            ctx.stroke();
        }
    }
}
const generateBalls = (number) => {
    const array = [];
    for (let i = 0; i < number; i++) {
        const newBall = new Ball();
        array.push(newBall);
    }
    return array;
}

let ballArray = generateBalls(30)
const draw = () => {
    ctx.clearRect(0, 0, canvasWidhth, canvasHeight);

    for (let i = 0; i < ballArray.length; i++) {
        for (let j = 1; j < ballArray.length; j++) {
            ballArray[i].drawBall();
            ballArray[i].moveBall();
            ballArray[i].checkEdges();
            if (ballArray[i] !== ballArray[j])
                ballArray[j].connectBall(ballArray[i]);
        }
    }

    stopDraw = requestAnimationFrame(draw);
}
draw();
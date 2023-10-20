var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var ballRadius = 50;
var x = canvas.width/2;
var y = canvas.height/2;
var dx = 5;
var dy = -5;
console.log("width: "+x);
console.log("height: "+y);

function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI*2);
    //ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    
    if(x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
        dx = -dx;
        ctx.fillStyle = "Pink"
        ctx.fill();
    }
    if(y + dy > canvas.height-ballRadius || y + dy < ballRadius) {
        dy = -dy;
        ctx.fillStyle = "green"
        ctx.fill();
    }
    
    x += dx;
    y += dy;
    
}

setInterval(draw, 10);
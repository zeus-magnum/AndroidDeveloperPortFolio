// var vid = document.getElementById("project1");
// vid.playbackRate = 2.0

const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;


if(576> canvas.width){
    canvas.height = 600;
}else{
    canvas.height = 600;
}

let particleArray = [];
let adjustX;
let adjustY;


//handle mouse
const mouse = {
    x: null,
    y: null,
    radius: 50
}


window.addEventListener('mousemove', function (event) {
    mouse.x = event.x;
    mouse.y = event.y;
    //console.log(mouse.x, mouse.y);
});


if(576 < canvas.width){
    adjustX = (canvas.width*0.20)/25;
    adjustY = 12;
    ctx.fillStyle = 'white';
    ctx.font = "25px Verdana";
    ctx.fillText('{|| || ||}', 0, 25);

}else{
    // adjustX = (canvas.width*0.8)/25;
    adjustX = 5;
    adjustY = 15;
    ctx.fillStyle = 'white';
    ctx.font = "15px Verdana";
    // ctx.fillText('||||||', 0, 25);
}

const textCoordinates = ctx.getImageData(0, 0, 300, 100);

class Particle {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = 1;
        this.baseX = this.x;
        this.baseY = this.y;
        this.density = (Math.random() * 40) + 5;
    }

    draw() {
        ctx.fillStyle = 'white';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
    }

    update() {
        let dx = mouse.x - this.x;
        let dy = mouse.y - this.y;
        let distance = Math.sqrt(dx * dx + dy * dy);
        let forceDirectionX = dx / distance;
        let forceDirectionY = dy / distance;
        let maxDistance = mouse.radius;
        let force = (maxDistance - distance) / maxDistance;
        let directionX = forceDirectionX * force * this.density;
        let directionY = forceDirectionY * force * this.density;

        if (distance < mouse.radius) {
            this.x -= directionX;
            this.y -= directionY;
            //this.size = 30;
        } else {
            if (this.x !== this.baseX) {
                let dx = this.x - this.baseX;
                this.x -= dx / 10;
            }
            if (this.y !== this.baseY) {
                let dy = this.y - this.baseY;
                this.y -= dy / 10;
            }
        }
    }
}

console.log(textCoordinates);
// function init(){
//     particleArray = [];

//     for (let i = 0; i < 1000; i++){
//        let x = Math.random() * canvas.width;
//        let y = Math.random() * canvas.height; 
//        particleArray.push(new Particle(x, y));
//     }

// }

function init() {
    particleArray = [];
    for (let y = 0, y2 = textCoordinates.height; y < y2; y++) {
        for (let x = 0, x2 = textCoordinates.width; x < x2; x++) {
            if (textCoordinates.data[(y * 4 * textCoordinates.width) + (x * 4) + 3] > 128) {
                let positionX = x + adjustX;
                let positionY = y + adjustY;
                particleArray.push(new Particle(positionX * 10, positionY * 10));
            }
        }
    }
}


init();
//console.log(particleArray);

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < particleArray.length; i++) {
        particleArray[i].draw();
        particleArray[i].update();
    }
    connect();
    requestAnimationFrame(animate);
}

animate();

function connect() {
    for (let a = 0; a < particleArray.length; a++) {
        for (let b = a; b < particleArray.length; b++) {
            let dx = particleArray[a].x - particleArray[b].x;
            let dy = particleArray[a].y - particleArray[b].y;
            let distance = Math.sqrt(dx * dx + dy * dy);
            opacityValue = 1 - (distance / 30);
            if (distance < 30) {
                //opacityValue = 1- (distance/50);
                ctx.strokeStyle = 'rgba(63,114,175, ' + opacityValue + ')';
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.moveTo(particleArray[a].x, particleArray[a].y);
                ctx.lineTo(particleArray[b].x, particleArray[b].y);
                ctx.stroke();
            }
        }
    }
}




var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
const play = document.getElementById("start");
const pause = document.getElementById("pause");

var raf;

let theme = new Audio("Simpsons.mp3");
let audio = new Audio("Homer1.mp3");
let audio1 = new Audio("Homer2.mp3");
let audio2 = new Audio("Homer3.mp3");

let audioPlay = () => {
	let randomed = Math.random() * 2;
	randomed = Math.round(randomed);
	if (randomed === 0) {
		audio.currentTime = 0;
		audio.play();
	} else if (randomed === 1) {
		audio1.currentTime = 0;
		audio1.play();
	} else {
		audio2.currentTime = 0;
		audio2.play();
	}
	return randomed;
};
var ball = {
	x: 250,
	y: 120,
	vx: 5,
	vy: 2,
	radius: 25,
	color: "red",
	draw: function () {
		ctx.beginPath();
		ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2, true);
		ctx.closePath();
		ctx.fillStyle = this.color;
		ctx.fill();
	},
};

const playMusic = () => {};

const changeColor = (numer) => {
	if (numer === 0) {
		ball.color = "green";
	} else if (numer === 1) {
		ball.color = "grey";
	} else {
		ball.color === "red";
	}
};



function draw() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	ball.draw();
	ball.x += ball.vx;
	ball.y += ball.vy;
	if (ball.y + ball.vy > canvas.height || ball.y + ball.vy < 0) {
		ball.vy = -ball.vy;
		let value = audioPlay();
		changeColor(value);
	}
	if (ball.x + ball.vx > canvas.width || ball.x + ball.vx < 0) {
		ball.vx = -ball.vx;
		let value = audioPlay();
		changeColor(value);
	}
	raf = window.requestAnimationFrame(draw);
}

play.addEventListener("click", function (e) {
	raf = window.requestAnimationFrame(draw);
	theme.play();
});

pause.addEventListener("click", function (e) {
	window.cancelAnimationFrame(raf);
	theme.pause();
});

canvas.addEventListener("click", function (e) {
	ball.x=e.offsetX; 
	ball.y=e.offsetY;
	ctx.clearRect(0, 0, canvas.width, canvas.height);

	ball.draw();
});

ball.draw();

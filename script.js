var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var raf;

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
};
var ball = {
	x: 100,
	y: 120,
	vx: 5,
	vy: 2,
	radius: 25,
	color: "blue",
	draw: function () {
		ctx.beginPath();
		ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
		ctx.closePath();
		ctx.fillStyle = this.color;
		ctx.fill();
	},
};

const playMusic = () => {};

function draw() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	ball.draw();
	ball.x += ball.vx;
	ball.y += ball.vy;
	if (ball.y + ball.vy > canvas.height || ball.y + ball.vy < 0) {
		ball.vy = -ball.vy;

		audioPlay();
	}
	if (ball.x + ball.vx > canvas.width || ball.x + ball.vx < 0) {
		ball.vx = -ball.vx;
		audioPlay();
	}
	raf = window.requestAnimationFrame(draw);
}

canvas.addEventListener("mouseenter", function (e) {
	raf = window.requestAnimationFrame(draw);
});

canvas.addEventListener("mouseleave", function (e) {
	window.cancelAnimationFrame(raf);
});

ball.draw();
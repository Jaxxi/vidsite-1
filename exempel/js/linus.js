var canvas = document.getElementById("modalAnimation");
canvas.width = 640;
canvas.height = 480;
canvas.style.width = canvas.width;
canvas.style.height = canvas.height;

var ctx = canvas.getContext("2d");
var frame = 0;
var status = null;
var slider = document.getElementById("slider");
slider.max = 180;

var stop = document.getElementById("stop");
var play = document.getElementById("play");
var pause = document.getElementById("pause");
var start, ms;

clearCanvas();
renderTime(frame, 0);

slider.addEventListener("change", function() {
	frame = slider.value;
	clearCanvas();
	renderTime(frame, 0);
}, true);

stop.addEventListener("click", function() {
	clearInterval(status);
	frame = 0;
	slider.value = frame;
	status = null;
	clearCanvas();
	renderTime(frame, 0);
	boll.reset();
    boll2.reset();
    boll3.reset();
    boll4.reset();
    boll5.reset();
    boll6.reset();
	play.textContent = "Play";
}, true);

play.addEventListener("click", function() {
	if (status === "null") {
		start = Date.now();
		status = setInterval(timeline, 33.333333333333336);
		play.textContent = "Pause";
	} else {
		clearInterval(status);
		status = null;
		play.textContent = "Play";
	}
}, true);

function timeline() {

	slider.value = frame;
	ms = Date.now() - start;
	//console.log("Seconds elapsed = " + ms/1000);

	clearCanvas();
	boll.animate(frame);
    boll2.animate(frame);
    boll3.animate(frame);
    boll4.animate(frame);
    boll5.animate(frame);
    boll6.animate(frame);
	renderTime(frame, ms);

	if (frame == 320) {
		clearInterval(status);
		status = null;
	}
	frame++;
}

function clearCanvas() {
	ctx.fillStyle = "rgb(250,250,230)";
	ctx.fillRect(0, 0, canvas.width, canvas.height);
} 

function renderTime(f, time) {
	ctx.font = "16px Encode Sans";
	ctx.fillStyle = "black";
	ctx.fillText("Frame: " + f + ", Time elapsed: " + time/1000 + "s", 4, 20);
}


/* Example rendered object */
var boll = {
	color: "rgb(30,140,120)",
	x: 0,
	y: 110,
	size: 30,
	delta: 1,
	speed: 8,
	start: 20,
	end: 160,
	animate: function(f) {
		if (f >= this.start && f <= this.end) {
			ctx.beginPath();
		    ctx.arc(this.x, this.y, this.size, 0, 2*Math.PI);
		    ctx.fillStyle = this.color;
		    ctx.fill();

			this.x += this.delta * this.speed;

			if(this.x > canvas.width || this.x < 0)
				this.delta *= -1;
		}
	},
	reset: function() {
		this.x = 0;
	}
}
var boll2 = {
	color: "rgb(30,140,120)",
	x: 0,
	y: 110,
	size: 30,
	delta: 1,
	speed: 8,
	start: 30,
	end: 160,
	animate: function(f) {
		if (f >= this.start && f <= this.end) {
			ctx.beginPath();
		    ctx.arc(this.x, this.y, this.size, 0, 2*Math.PI);
		    ctx.fillStyle = this.color;
		    ctx.fill();

			this.x += this.delta * this.speed;

			if(this.x > canvas.width || this.x < 0)
				this.delta *= -1;
		}
	},
	reset: function() {
		this.x = 0;
	}
}
var boll3 = {
	color: "rgb(30,140,120)",
	x: 220,
	y: 250,
    dx:3,
    dy:3,
	size: 30,
	delta: 3,
	speed: 8,
	start: 40,
	end: 300,
	animate: function(f) {
		if (f >= this.start && f <= this.end) {
			ctx.beginPath();
		    ctx.arc(this.x, this.y, this.size, 3, 3*Math.PI);
		    ctx.fillStyle = this.color;
		    ctx.fill();

			this.x += this.delta * this.speed;

            
            if(this.x > canvas.width || this.x < 0)
				this.delta *= -1;
			if( this.x<0 || this.x>480) this.dx=-this.dx; 
            if( this.y<0 || this.y>500) this.dy=-this.dy; 
                this.x+=this.dx; 
                this.y+=this.dy;
		}
	},
	reset: function() {
		this.x = 0;
	}
}
var boll4 = {
	color: "rgb(30,140,120)",
	x: 420,
	y: 250,
    dx:3,
    dy:3,
	size: 30,
	delta: 3,
	speed: 8,
	start: 40,
	end: 300,
	animate: function(f) {
		if (f >= this.start && f <= this.end) {
			ctx.beginPath();
		    ctx.arc(this.x, this.y, this.size, 3, 3*Math.PI);
		    ctx.fillStyle = this.color;
		    ctx.fill();

			this.x += this.delta * this.speed;

            
            if(this.x > canvas.width || this.x < 0)
				this.delta *= -1;
			if( this.y<0 || this.y>480) this.dy=-this.dy; 
            if( this.y<0 || this.x>500) this.dx=-this.dx; 
                this.y+=this.dy; 
                this.y+=this.dx;
		}
	},
	reset: function() {
		this.x = 0;
	}
}
var boll5 = {
	color: "rgb(30,140,120)",
	x: 20,
	y: 50,
    dx:3,
    dy:3,
	size: 30,
	delta: 3,
	speed: 8,
	start: 40,
	end: 300,
	animate: function(f) {
		if (f >= this.start && f <= this.end) {
			ctx.beginPath();
		    ctx.arc(this.x, this.y, this.size, 2, 2*Math.PI);
		    ctx.fillStyle = this.color;
		    ctx.fill();

			this.x += this.delta * this.speed;

            
            if(this.x > canvas.width || this.x < 0)
				this.delta *= -1;
			if( this.y<0 || this.y>480) this.dy=-this.dx; 
            if( this.y<0 || this.x>500) this.dx=-this.dy; 
                this.y+=this.dy; 
                this.y+=this.dx;
		}
	},
	reset: function() {
		this.x = 0;
	}
}
var boll6 = {
	color: "rgb(30,140,120)",
	x: 50,
	y: 150,
    dx:3,
    dy:3,
	size: 30,
	delta: 3,
	speed: 8,
	start: 40,
	end: 300,
	animate: function(f) {
		if (f >= this.start && f <= this.end) {
			ctx.beginPath();
		    ctx.arc(this.x, this.y, this.size, 3, 3*Math.PI);
		    ctx.fillStyle = this.color;
		    ctx.fill();

			this.x += this.delta * this.speed;

            
            if(this.x > canvas.width || this.x < 0)
				this.delta *= -1;
			if( this.y<0 || this.y>480) this.dx=-this.dy; 
            if( this.y<0 || this.x>500) this.dx=-this.dx; 
                this.y+=this.dy; 
                this.x+=this.dx;
		}
	},
	reset: function() {
		this.x = 0;
	}
}





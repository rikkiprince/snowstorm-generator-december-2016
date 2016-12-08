var ONE_FRAME_TIME = 1000 / 60 ;
var snowflakes = [];
var width = 500;
var fractionOfWidth = 0.25;

function generateNewSnowflakes() {
	for(var i=0; i<(width*fractionOfWidth); i++) {
		snowflakes.push(new Particle(Math.random()*width,0));
	}
}

function main_loop() {
	
	for(var i=0; i<snowflakes.length; i++) {
		snowflakes[i].update();
	}
	for(var i=0; i<snowflakes.length; i++) {
		draw(snowflake);
	}
	generateNewSnowflakes();

	setInterval( main_loop, ONE_FRAME_TIME );
}

function start_loop() {
	setInterval( main_loop, ONE_FRAME_TIME );
}
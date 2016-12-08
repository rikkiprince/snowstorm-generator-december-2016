var ONE_FRAME_TIME = 1000 / 60 ;
var snowflakes = [];
var width = 500;
var fractionOfWidth = 0.01;
var howManyNew = 1;

function generateNewSnowflakes() {
	for(var i=0; i<(howManyNew); i++) {
		snowflakes.push(new Particle(Math.random()*width,0));
	}
}

var loopCount = 0;
function main_loop() {
	//console.log("main loop");
	// update
	for(var i=0; i<snowflakes.length; i++) {
		snowflakes[i].update();
	}

	// draw
	draw(snowflakes);
	generateNewSnowflakes();

	if(loopCount < 600) {
		setTimeout( main_loop, ONE_FRAME_TIME );
		loopCount++;
		console.log(loopCount);
	}
}

function start_loop() {
	//console.log("start");
	setTimeout( main_loop, ONE_FRAME_TIME );
}

var ONE_FRAME_TIME = 1000 / 60 ;
var snowflakes = [];
var width = 500;
var fractionOfWidth = 0.01;
var howManyNew = 2;
var wind = 0;

function generateNewSnowflakes() {
	for(var i=0; i<(howManyNew); i++) {
		snowflakes.push(new Particle(-500+Math.random()*(width+1000),0));
	}
}

var loopCount = 0;
function main_loop() {
	//console.log("main loop");
	// update
	for(var i=snowflakes.length-1; i>=0; i--) {
		if(snowflakes[i].update(wind)) {
			snowflakes.splice(i, 1);
		}
	}

	// draw
	draw(snowflakes);
	generateNewSnowflakes();

	if((loopCount%(60*0.5)) == 0) {
		wind += -0.25 + Math.random()*0.5;
		document.getElementById("wind").innerHTML = (wind*25).toFixed(0) + "mph";
	}

	//if(loopCount < 300) {
		setTimeout( main_loop, ONE_FRAME_TIME );
		loopCount++;
		//console.log(loopCount);
	//}
}

function start_loop() {
	//console.log("start");
	setTimeout( main_loop, ONE_FRAME_TIME );
}

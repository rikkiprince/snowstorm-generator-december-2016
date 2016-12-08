
function Particle(x, y) {
    this.x = x;
    this.y = y;

    this.update = function(wind) {
        this.y += 1;
        this.x += wind;
    };
}

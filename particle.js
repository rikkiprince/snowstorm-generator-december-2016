
function Particle(x, y) {
    this.x = x;
    this.y = y;

    this.update = function(wind) {
        if (wind === undefined) { wind = 0; }
        this.y += 1;
        this.x += wind + _.random(-1, 1);

        if (hit(this.x, this.y-1)) {
            burn(this);
            return true;
        }
        return false;
    };
}

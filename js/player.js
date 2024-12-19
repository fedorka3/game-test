function Player(x, y) {
    this.x = x;
    this.y = y;
    
    this.width = 50;
    this.height = 55;
    
    this.step = function() {
        this.x ++
    }

    this.draw = function() {
        ctx.fillStyle = "green"
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}
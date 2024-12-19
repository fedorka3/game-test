function Player(x, y) {
    //Player variables
    this.x = x;
    this.y = y;
    
    this.xSpeed = 0;
    this.ySpeed = 0;
    this.friction = 0.6;
    this.maxSpeed = 18;
    
    this.width = 50;
    this.height = 55;

    this.active = true;
    
    this.step = function() {
      //Movement
      if (this.active) {
        //Horizontal Movement
        if (!leftKey && !rightKey || leftKey && rightKey) {
            //Slow down
            this.xSpeed *= this.friction
        } else if (rightKey) {
            this.xSpeed ++;
        } else if (leftKey) {
            //Move left
            this.xSpeed --;
        }
        
        //Vertical Movement
        

        //Apply gravity

        //Correct Speed
        if (this.xSpeed > this.maxSpeed) {
            this.xSpeed = this.maxSpeed;
        } else if (this.xSpeed < -this.maxSpeed) {
            this.xSpeed = -this.maxSpeed;
        }

        this.x += this.xSpeed;
        this.y += this.ySpeed;
      }
    }

    this.draw = function() {
        ctx.fillStyle = "green"
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}
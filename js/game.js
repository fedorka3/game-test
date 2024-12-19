//Create drawing variables

let canvas;
let ctx;

let gameLoop;
let player;

//Runs once page has loaded
window.onload = function() {
    // assign canvas and context variables
    canvas = document.getElementById("game-canvas");
    ctx = canvas.getContext("2d");

    //Setup key listeners

    //Create player
    player = new Player(100, 400);
    player.step();

    //Start game loop
    gameLoop = setInterval(step, 1000/30);

}

function step() {
    //Step player
    player.step();

    //Draw everything
    draw();
}

function draw() {
    //Clear the canvas
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, 1280, 720);

    //Draw the player
    player.draw();
}
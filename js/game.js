//Create drawing variables

let canvas;
let ctx;

//Create input variables

let upKey;
let rightKey;
let downKey;
let leftKey;

let gameLoop;
let player;

//Runs once page has loaded
window.onload = function() {
    // assign canvas and context variables
    canvas = document.getElementById("game-canvas");
    ctx = canvas.getContext("2d");

    //Setup key listeners
    setupInputs();

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

function setupInputs() {
    document.addEventListener("keydown", function(event) {
        if (event.key === '"w"' || event.key === "ArrowUp") {
            upKey = true;
        } else if (event.key === "a" || event.key === "ArrowLeft") {
            leftKey = true;
        } else if (event.key === "s" || event.key === "ArrowDown") {
            downKey = true;
        } else if (event.key === "d" || event.key === "ArrowRight") {
            rightKey = true;
        }
    });

    document.addEventListener("keyup", function(event) {
        if (event.key === '"w"' || event.key === "ArrowUp") {
            upKey = false;
        } else if (event.key === "a" || event.key === "ArrowLeft") {
            leftKey = false;
        } else if (event.key === "s" || event.key === "ArrowDown") {
            downKey = false;
        } else if (event.key === "d" || event.key === "ArrowRight") {
            rightKey = false;
        }
    });
}
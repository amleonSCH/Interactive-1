// alert("this is a text!")
// this creates a pop up

// DECLARING MY VARIABLE!!
const STEP_SIZE = 25;
const START_X = 200; // left and right
const START_Y = 200; // top and down

const box = document.querySelector(".box");
const story = document.querySelector(".story");
// this is creating short hand elements 
// to be able to connect with shorter code
const xPosText = document.querySelector("#x-pos");
const yPosText = document.querySelector("#y-pos");

let xPos = START_X;
let yPos = START_Y;
let hasMoved = false;
// let allows you to change the information, changeable.

xPosText.textContent = xPos;
yPosText.textContent = yPos;
//references the label of X and connect to the pixel positioning

function movePlayer(){
    box.style.left = `${xPos}px`;
    xPosText.textContent = xPos;
    box.style.top = `${yPos}px`;
    yPosText.textContent = yPos;
}
// ${xPos} this allows for the X Position to change


function updateScene() {
    box.style.backgroundColor = "black";
if (!hasMoved) {
    return;
}
story.textContent = "";

    const topLeftBoundryX = window.innerWidth / 2;
    const topLeftBoundryY = window.innerHeight / 2;

    if (xPos <= topLeftBoundryX && yPos <= topLeftBoundryY) {
story.innerHTML = 
    "Chapter 1:<br /><i>Of the Nature of Flatland</i><br /><br />I call our world Flatland…Imagine a vast sheet of paper on which straight lines, triangles, squares, pentagons, hexagons, and other figures move freely about, yet without the power of rising above or sinking below the surface. Such is the condition of the inhabitants of Flatland.";
}

if(xPos >= 950 && xPos <= 1050 && yPos >= 350 && yPos <= 450) {
    box.style.backgroundColor = "yellow";
    story.innerHTML = 
"Chapter 3:<br /><i>Concerning the Inhabitants of Flatland</i><br /><br />A true Circle in Flatland is not really a circle, but a Polygon with so many sides and angles that it cannot be distinguished from a circle by the eye.";
}
// gives a radius toward the circle and changes background based off proximity

if(xPos >= 400 && xPos <= 550 && yPos >= 400 && yPos <= 550) {
    box.style.backgroundColor = "yellow";
    story.innerHTML = "Chapter Two:<br /><i>Of the Climate and Houses in Flatland</i><br /><br />At this period, square houses were still everywhere permitted, though discouraged by a special tax. But, about three centuries afterwards, the Law decided that in all towns containing a population above ten thousand, the angle of a Pentagon was the smallest house-angle that could be allowed consistently with the public safety.";

}
}
// CONTROLS!!

//on line 18 => means action take into effect immedietly
document.addEventListener("keydown", (event) => {
let key = event.key;

// forces single letters to be lowercase
if (event.key.length === 1) {
    key = event.key.toLowerCase();
}

// X KEYS
if (key === "ArrowLeft" || key === "a" ) {
    xPos -= STEP_SIZE;
}

if (key === "ArrowRight" || key === "d" ) {
    xPos += STEP_SIZE;
}

// Y KEYS
if(key=== "ArrowDown" || key === "s") {
    yPos += STEP_SIZE;
}
if(key=== "ArrowUp" || key === "w") {
    yPos -= STEP_SIZE;
}
console.log(key);
hasMoved = true;
movePlayer();
updateScene();

});

movePlayer();
updateScene();


// this || means or
// === is comparing, and = is assigning 
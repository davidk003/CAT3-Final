const poem7 = document.getElementById('poem-scene-7');
const canvas7 = document.getElementById('seven');
const ctx7 = canvas7.getContext('2d');
const cloud = document.getElementById('cloud');
function startScene7()
{
    // poem7.textContent = SCENE7TEXT;
    poem7.textContent = SCENE7TEXT;
    // Start animation loop
    // Event listener for click to toggle lightning visibility
    document.addEventListener('click', function(event) {
        if(currentScene==="scene-7")
        {
            toggleLightning(event);
        }
    });

    update();
    document.getElementsByTagName("body")[0].style.cursor = "pointer";

}

function cleanupScene7()
{
    document.getElementsByTagName("body")[0].style.cursor = "default";

}

// Event listener for mousemove to update cloud position and rain positions
document.addEventListener('mousemove', function(e) {
    cloud.style.left = e.pageX -40 + 'px';
    cloud.style.top = e.pageY  +10 + 'px';
    
});

canvas7.width = window.innerWidth;
canvas7.height = window.innerHeight;

window.onresize = function()
{
      centerSVG();
    console.log("canvas resized");
    W = window.innerWidth;
    H = window.innerHeight;
    canvas7.width = window.innerWidth;
    canvas7.height = window.innerHeight;
};

const raindrops = [];
const radius = 100; // Radius around the mouse cursor to generate raindrops
const xOffset = 50; // X offset range from cursor
const yOffset = 20; // Y offset range from cursor

let cloudX = 0;
let cloudY = 0;

// Function to calculate distance between two points
function distance(x1, y1, x2, y2) {
    return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
}

// Function to generate raindrop originating from mouse position
function createRaindrop(x, y) {
    const length = Math.random() * 30 + 10; // Random length between 10 and 40
    const speed = Math.random() * 5 + 2; // Random speed between 2 and 7
    if(raindrops.length < 70)
    {
      raindrops.push({ x, y, length, speed });
    }
}

// Function to draw raindrops
function drawRaindrops() {
    ctx7.clearRect(0, 0, canvas7.width, canvas7.height);
    ctx7.fillStyle = 'red';
    raindrops.forEach(raindrop => {
        ctx7.beginPath();
        ctx7.moveTo(raindrop.x, raindrop.y);
        ctx7.lineTo(raindrop.x, raindrop.y + raindrop.length);
        ctx7.stroke();
        raindrop.y += raindrop.speed;
        // Reset raindrop if it goes below the canvas
        if (raindrop.y > canvas7.height) {
            raindrop.y = cloudY;
            raindrop.x = cloudX + Math.random() * xOffset * 2 - xOffset;
        }
    });
}

// Event listener for mousemove to create raindrops near the mouse position
document.addEventListener('mousemove', function(e) {
    for (let i = 0; i < 10; i++) { // Create multiple raindrops per mouse movement
        let x = e.pageX + Math.random() * (2 * radius) - radius;
        let y = e.pageY + Math.random() * (2 * radius) - radius;
        // Restrict raindrop spawn within specified x and y ranges
        if (
            distance(x, y, e.pageX, e.pageY) <= radius &&
            x >= e.pageX - xOffset &&
            x <= e.pageX + xOffset &&
            y >= e.pageY - yOffset &&
            y <= e.pageY + yOffset
        ) {
            createRaindrop(x, y);
        }
    }
});

// Function to update raindrops
function update() {
    if(currentScene === "scene-7")
    {
        drawRaindrops();
        requestAnimationFrame(update);
    }
}


// Function to update cloud position
function updateCloudPosition(x, y) {
    cloudX = x;
    cloudY = y;
}

// Event listener for mousemove to update cloud position
document.addEventListener('mousemove', function(e) {
    updateCloudPosition(e.pageX, e.pageY);
});

let lightningVisible = false;
const lightning = document.createElement('div');
lightning.classList.add('lightning');

function toggleLightning(event) {
    lightningVisible = !lightningVisible;
    if (lightningVisible) {
        lightning.style.setProperty("visibility", "visible")
        document.body.appendChild(lightning);
        lightning.style.left = (event.pageX-20) + 'px';
        lightning.style.top = event.pageY + 'px';
        setTimeout(() => {
            lightning.remove();
            lightningVisible=false;
        }, 350);
    }
}

document.addEventListener('mousemove', function(e) {
    let light = document.getElementById("lighting");
    if(light != null)
    {
        light.style.left = e.pageX -20 + 'px';
        light.style.top = e.pageY + 'px';
    }
    
});

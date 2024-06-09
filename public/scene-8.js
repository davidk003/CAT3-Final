function startScene8()
{

}   

function cleanupScene8()
{

}

// const container = document.getElementById('poem-scene-8-container');

// // const poem8_1= document.getElementById('1');
// // const poem8_2 = document.getElementById('2');
// const poem8_control = document.getElementById('control');
// poem8_control.textContent = "control"
// var control = poem8_control;
// poem8_control.addEventListener("click", ()=>{
//   control.style.position="static";
//   control.style.color="black";
//   control = poem8_control;
//   control.style.color="red";
//   control.style.position="absolute";
// });
// // poem8_1.textContent = SCENE8TEXT1;
// // poem8_control.textContent = "control";
// // poem8_2.textContent = SCENE8TEXT2;


// function tokenizeAndInsertString(inputString) {
//     container.innerHTML = ''; // Clear any existing content in the container

//     // Split the string by newline characters to handle line breaks
//     const lines = inputString.split('\n');

//     lines.forEach(line => {
//         // Split each line into words
//         const tokens = line.split(/\s+/);

//         tokens.forEach(token => {
//             // Create a span element for each word
//           if(token == "control")
//           {
//               container.appendChild(poem8_control);
//           }
//           else{
//             const span = document.createElement('span');
//             span.className = 'poem-scene-8';
//             span.textContent = token;
//             span.style.marginRight = '10px'; // Add some spacing between tokens
//             span.addEventListener("click", ()=>{
//               control.style.position="static";
//               control.style.color="black";
//               control = span;
//               control.style.color="red";
//               control.style.position="absolute";
//             });
//             // // Add click event listener to the span
//             // span.addEventListener('click', () => {
//             //     // Set control element's position to the clicked span's position
//             //     const rect = span.getBoundingClientRect();
//             //     control.style.top = rect.top + window.scrollY + 'px';
//             //     control.style.left = rect.left + window.scrollX + 'px';
//             // });

//             // Append the span to the container
//             container.appendChild(span);}
//         });

//         // Add a line break after each line except the last one
//         if (line !== lines[lines.length - 1]) {
//             const br = document.createElement('br');
//             container.appendChild(br);
//         }
//     });
// }

// tokenizeAndInsertString(SCENE8TEXT);
// // [...document.getElementsByClassName("poem-scene-8")].forEach(function(tag) {console.log("tried changing");tag.className="poem-scene-8-abs";});
// // poem8_1.addEventListener("click", ()=>{control.style.color="black";control = poem8_1;control.style.color="red";});
// // poem8_2.addEventListener("click", ()=>{control.style.color="black";control = poem8_2;control.style.color="red";});

// let keysPressed = {}; // Object to keep track of pressed keys
// let animationFrameId; // ID of the animation frame

// // Function to handle keydown event
// function handleKeyDown(event) {
//     keysPressed[event.key] = true; // Store the pressed key in the keysPressed object
//     requestAnimationFrame(updatePosition); // Request animation frame for smoother movement
// }

// // Function to handle keyup event
// function handleKeyUp(event) {
//     keysPressed[event.key] = false; // Remove the released key from the keysPressed object
// }

// // Function to update the position of the control element
// function updatePosition() {
//     const currentPositionTop = control.offsetTop;
//     const currentPositionLeft = control.offsetLeft;
//     const movementStep = 1; // Adjust this value as needed

//     let movementX = 0;
//     let movementY = 0;

//     // Calculate movement based on pressed keys
//     if (keysPressed['w']) {
//         movementY = -movementStep;
//     } else if (keysPressed['s']) {
//         movementY = movementStep;
//     }

//     if (keysPressed['a']) {
//         movementX = -movementStep;
//     } else if (keysPressed['d']) {
//         movementX = movementStep;
//     }

//     // Calculate the new position
//     let newTop = currentPositionTop + movementY;
//     let newLeft = currentPositionLeft + movementX;

//     // Get the dimensions of the browser window
//     let windowWidth = window.innerWidth;
//     let windowHeight = window.innerHeight;

//     // Clamp the new position to keep it within the window bounds
//     if(newTop < 0)
//     {
//        newTop = 0; 
//     }
//     if(newTop > windowHeight-50)
//     {
//        newTop = windowHeight-50; 
//     }
//     if(newLeft < 0)
//     {
//        newLeft = 0; 
//     }
//     if(newLeft > windowWidth-(control.textContent.length*20))
//     {
//        newLeft = windowWidth-(control.textContent.length*20); 
//     }

//     // Apply the clamped position
//     control.style.top = newTop + 'px';
//     control.style.left = newLeft + 'px';
//     console.log(newTop + "," +  newLeft);
//     // Request next animation frame if any key is still pressed
//     if (Object.values(keysPressed).some(key => key)) {
//         animationFrameId = requestAnimationFrame(updatePosition);
//     }
// }

// // Add event listeners for keydown and keyup events
// document.addEventListener('keydown', handleKeyDown);
// document.addEventListener('keyup', handleKeyUp);
var currentScene = "scene-1";
const SCENE1TEXT = "";
const SCENE2TEXT =
  "Strong as steel\nMeant to shield\nBlocking out what’s real\nAs those inside yield";
const SCENE3TEXT =
  "Laying rest\nOut of time and air\nYet dying not depressed\nOnly you feel despair";
const SCENE4TEXT =
  "All are at peace\nTill a loud roar\nAllows the pain to release\nIs that what you intended for?\nTrapped to hear agony and disjoy\nEscaping is as hard as it to destroy";
const SCENE5TEXT =
  "one can remain on their course\nunless there is an imbalance\nfor in every action, a reaction unfolds";
const SCENE6TEXT =
  "a force that shapes\neach night and day\nthe sun and moon\nand the friction in one's life";
const SCENE7TEXT =
  "every disappointment\nevery mistake\nall the moments of sadness\ndespair\nmakes one wonder";
const SCENE8TEXT =
  "makes one wonder\nthe control they truly have\nover their own lives\nif it's up to fate\nor the unseeable forces\ncontrolling the motion\nof the world";
const SCENE9TEXT =
  "Sorrows of reflect\nLessons fade in friction grip\nVillage in stillness";
const SCENES = [
  { text: SCENE1TEXT },
  { text: SCENE2TEXT },
  { text: SCENE3TEXT },
  { text: SCENE4TEXT },
  { text: SCENE5TEXT },
  { text: SCENE6TEXT },
  { text: SCENE7TEXT },
  { text: SCENE8TEXT },
  { text: SCENE9TEXT },
];

startScene1();

function hideScene(className) {
  console.log("Hiding Scene: " + className);
  let sceneElements = document.getElementsByClassName(className);
  [...sceneElements].forEach((element) => {
    element.style.visibility = "hidden";
  });
}

function showScene(className) {
  console.log("Showing Scene: " + className);
  let sceneElements = document.getElementsByClassName(className);
  [...sceneElements].forEach((element) => {
    element.style.visibility = "visible";
  });
}

function transitionAnimation() {
  // let navbar = document.getElementsByClassName("navbar");
  // console.log("set unclickable");
  // [...navbar].forEach(element => {
  //   element.setAttribute("pointer-events", "none");
  // });
  // [...navbar].forEach(element => {
  //   setTimeout(() => {
  //     console.log("set clickable")
  //     element.setAttribute("pointer-events", "auto");
  //   }, 5000);
  // });
}

//ONCLICK->Transition animation->Hide Current Scene->Set current scene->Show current scene->Run scene functions
function transitionScene(sceneToStart) {
  if (!transitioning) {
    let sceneNumber = currentScene.replace(/[^0-9]/g, "");
    let storeScene = currentScene;
    transitionAnimation(); //Play transition animation
    setTimeout(() => {
      hideScene(storeScene);
    }, 500); //Hide scene
    let clean = "cleanupScene" + sceneNumber;
    window["cleanupScene" + sceneNumber];
    currentScene = sceneToStart; //Set scene state
    setTimeout(() => {
      showScene(currentScene);
    }, 500); //Show scene
    let thing = "startScene" + sceneToStart.replace(/[^0-9]/g, "") + "()";
    eval(thing);
    // window["startScene"+sceneToStart.replace(/[^0-9]/g, '')];//Call Scene runner
  }
}

//Setup navbar:
let navbar = document.getElementsByClassName("navbar")[0];
SCENES.forEach(function (element, i) {
  let link = document.createElement("a");
  link.innerHTML = "Scene " + (i + 1);
  link.setAttribute("id", "scene-" + (i + 1));
  link.setAttribute("class", "navbar");
  link.setAttribute("href", "#scene" + (i + 1));
  navbar.appendChild(link);
});

let fullTranslation = document.createElement("a");
fullTranslation.textContent = "Full Translation";
fullTranslation.setAttribute("href", "final-translation.html");
fullTranslation.setAttribute("class", "navbar");
fullTranslation.style.float = "right";
fullTranslation.onclick = (e) => {
  e.preventDefault();
  window.open(fullTranslation.href);
};
navbar.appendChild(fullTranslation);

let translatorIntro = document.createElement("a");
translatorIntro.textContent = "Translator's Introduction";
translatorIntro.setAttribute("href", "translators-introduction.html");
translatorIntro.style.float = "right";
translatorIntro.setAttribute("class", "navbar");
translatorIntro.onclick = (e) => {
  e.preventDefault();
  window.open(translatorIntro.href);
};
navbar.appendChild(translatorIntro);

let bib = document.createElement("a");
bib.textContent = "Bibliography";
bib.setAttribute("href", "bibliography.html");
bib.style.float = "right";
bib.setAttribute("class", "navbar");
bib.onclick = (e) => {
  e.preventDefault();
  window.open(bib.href);
};
navbar.appendChild(bib);

let github = document.createElement("a");
github.textContent = "github";
github.setAttribute("href", "https://github.com/davidk003/CAT3-Final");
github.style.display = "flex";
github.style.justifyContent = "center";
github.style.alignItems = "center";
github.setAttribute("class", "navbar");
github.style.fontSize = "10px";
github.onclick = (e) => {
  e.preventDefault();
  window.open(github.href);
};
navbar.appendChild(github);

document.getElementById("planet").addEventListener("click", () => {
  setTimeout(() => {
    document.getElementById("scene-2").click();
  }, 10);
});

document.getElementById("scene-1").addEventListener("click", () => {
  location.reload();
});
document.getElementById("scene-2").addEventListener("click", () => {
  leaveStart();
  setTimeout(() => {
    hideScene(currentScene);
    currentScene = "scene-2";
    startScene2();
    showScene(currentScene);
  }, 1000);
});

// document.getElementById('scene-2').addEventListener('click', ()=>{leaveStart();setTimeout(()=>{hideScene(currentScene); currentScene="scene-2";startScene2();showScene(currentScene);},1000)});
document.getElementById("scene-3").addEventListener("click", () => {
  transitionScene("scene-3");
});
document.getElementById("scene-4").addEventListener("click", () => {
  transitionScene("scene-4");
});
document.getElementById("scene-5").addEventListener("click", () => {
  transitionScene("scene-5");
});
document.getElementById("scene-6").addEventListener("click", () => {
  transitionScene("scene-6");
});
document.getElementById("scene-7").addEventListener("click", () => {
  transitionScene("scene-7");
});
document.getElementById("scene-8").addEventListener("click", () => {
  transitionScene("scene-8");
});
document.getElementById("scene-9").addEventListener("click", () => {
  transitionScene("scene-9");
});

navbar.addEventListener("click", function () {
  for (let i = 1; i < 10; ++i) {
    if (currentScene[currentScene.length - 1] == i) {
      document.getElementById("scene-" + i).style.color = "var(--Flame)";
    } else {
      document.getElementById("scene-" + i).style.color = "white";
    }
  }
});

document.addEventListener("keydown", onHKeyPress);
function onHKeyPress(event) {
  if (event.key === "H" || event.key === "h") {
    // alert(
    //   "Press the H key to get a hint on what visual element/effect is hidden on each scene!"
    // );
    switch (currentScene) {
      case "scene-1":
        alert("Either click any scene or click the planet in the middle of the screen!");
        break;
      case "scene-2":
        alert("Hover your mouse around the center of your screen!");
        break;
      case "scene-3":
        alert("Hover your mouse around!");
        break;
      case "scene-4":
        alert("Click the background!");
        break;
      case "scene-5":
        alert("Automatic effect, the poem ends with the following lines, \n\"for in every action\na reaction unfolds\" ");
        break;
      case "scene-6":
        alert("No effect here, this took way too long to make on its own. This is actually rendered in real time, not a video.");
        break;
      case "scene-7":
        alert("Your mouse is a stormcloud, try clicking!");
        break;
      case "scene-8":
        alert("Start by clicking any word, that word now becomes controllable with the following keyboard input :\nW - UP\nS - DOWN\nA - LEFT\nD - RIGHT");
        break;
      case "scene-9":
        alert("Left click on the background to draw on the chalkboard, or Right click to erase!");
        break;
    }
  }
}

window.addEventListener('load', ()=>{setTimeout(() => {  alert(
  "NOTE THAT THIS WEBSITE IS NOT MEANT FOR MOBILE DEVICES\n\nHi, welcome to our project, this is supposed to be a visual representation of a poem, use the scene buttons on the top left to progress!\nPress the 'H' key to get help/hint on what visual element/effect is hidden on each scene!"
);
  
}, 200);})

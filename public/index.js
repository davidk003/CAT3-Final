var currentScene = "scene-1";
const SCENE1TEXT = "";
const SCENE2TEXT = "Strong as steel\nMeant to shield\nBlocking out what’s real\nAs those inside yield";
const SCENE3TEXT = "Laying rest\nOut of time and air\nYet dying not depressed\nOnly you feel despair";
const SCENE4TEXT = "All are at peace\nTill a loud roar\nAllows the pain to release\nIs that what you intended for?\nTrapped to hear agony and disjoy\nEscaping is as hard as it to destroy";
const SCENE5TEXT = "one can remain on their course\nunless there is an imbalance\nfor in every action, a reaction unfolds";
const SCENE6TEXT = "a force that shapes\neach night and day\nthe sun and moon\nand the friction in one's life";
const SCENE7TEXT = "every disappointment\nevery mistake\nall the moments of sadness\ndespair\nmakes one wonder";
const SCENE8TEXT = "makes one wonder\nthe control they truly have\nover their own lives\nif it's up to fate\nor the unseeable forces\ncontrolling the motion\nof the world";
const SCENE9TEXT = "Sorrows of reflect\nLessons fade in friction grip\nVillage in stillness";
const SCENES = [
  {text:SCENE1TEXT},
  {text:SCENE2TEXT},
  {text:SCENE3TEXT},
  {text:SCENE4TEXT},
  {text:SCENE5TEXT},
  {text:SCENE6TEXT},
  {text:SCENE7TEXT},
  {text:SCENE8TEXT},
  {text:SCENE9TEXT},
]

startScene1();

function hideScene(className)
{
  console.log("Hiding Scene: " + className);
  let sceneElements = document.getElementsByClassName(className);
  [...sceneElements].forEach(element => {element.style.visibility="hidden"});
}

function showScene(className)
{
  console.log("Showing Scene: " + className);
  let sceneElements = document.getElementsByClassName(className);
  [...sceneElements].forEach(element => {element.style.visibility="visible"});
}

function transitionAnimation()
{
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
function transitionScene(sceneToStart)
{
  if(!transitioning)
  {
    let sceneNumber = currentScene.replace(/[^0-9]/g, '');
  let storeScene = currentScene;
  transitionAnimation();            //Play transition animation
  setTimeout(() => {hideScene(storeScene);}, 500);          //Hide scene 
  window["cleanupScene"+sceneNumber];
  currentScene = sceneToStart;      //Set scene state
  setTimeout(() => {showScene(currentScene);  
    
  }, 500);        //Show scene
  let thing = "startScene"+sceneToStart.replace(/[^0-9]/g, '')+"()";
  eval(thing)
  // window["startScene"+sceneToStart.replace(/[^0-9]/g, '')];//Call Scene runner
  }
  
}

//Setup navbar:
let navbar = document.getElementsByClassName("navbar")[0];
SCENES.forEach(function (element, i)
{
  let link = document.createElement("a");
  link.innerHTML = "Scene " + (i+1)
  link.setAttribute("id", "scene-"+(i+1));
  link.setAttribute("class", "navbar");
  navbar.appendChild(link);
});
let fullTranslation = document.createElement("a");
fullTranslation.textContent ="Full Translation";
fullTranslation.setAttribute('href', "final-translation.html")
fullTranslation.setAttribute('class', "navbar")
navbar.appendChild(fullTranslation);


document.getElementById('planet').addEventListener('click', ()=>{setTimeout(() => {document.getElementById('scene-2').click();}, 10);});


document.getElementById('scene-1').addEventListener('click', ()=>{location.reload()});
document.getElementById('scene-2').addEventListener('click', ()=>{leaveStart();setTimeout(()=>{hideScene(currentScene); currentScene="scene-2";startScene2();showScene(currentScene);},1000)});

// document.getElementById('scene-2').addEventListener('click', ()=>{leaveStart();setTimeout(()=>{hideScene(currentScene); currentScene="scene-2";startScene2();showScene(currentScene);},1000)});
document.getElementById('scene-3').addEventListener('click', ()=>{transitionScene('scene-3')});
document.getElementById('scene-4').addEventListener('click', ()=>{transitionScene('scene-4')});
document.getElementById('scene-5').addEventListener('click', ()=>{transitionScene('scene-5')});
document.getElementById('scene-6').addEventListener('click', ()=>{transitionScene('scene-6')});
document.getElementById('scene-7').addEventListener('click', ()=>{transitionScene('scene-7')});
document.getElementById('scene-8').addEventListener('click', ()=>{transitionScene('scene-8')});
document.getElementById('scene-9').addEventListener('click', ()=>{transitionScene('scene-9')});
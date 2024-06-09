const poem9 = document.getElementById("poem-scene-9");
const pat = document.getElementById("pattern");
function startScene9()
{
    chalkboard();
    poem9.textContent = SCENE9TEXT;
    pat.style.display = "default";
}

function cleanupScene9()
{
    pat.style.display = "none";
}
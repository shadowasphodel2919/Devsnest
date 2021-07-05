function OnLoad(){
    console.log("Loaded");
    debugWindow.innerHTML = "Loaded";
}
function OnResize(){
    console.log("Resized");
    debugWindow.innerHTML = "Resized";
}
function OnBeforePrint(){
    alert("Print");
}
function OnBlur(){
    //alert("Window out of focus");
}
var debugWindow = document.querySelector(".debug");

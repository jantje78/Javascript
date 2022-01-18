const homeBtn = document.querySelector("#home");
const greenBtn = document.querySelector("#green")
const redBtn = document.querySelector("#red")
const blueBtn = document.querySelector("#blue")
const yellowBtn = document.getElementById("yellow")
const toggleBtn = document.querySelector(".toggle-btn")
const tekstInput = document.getElementById("text")

/* Dit is de uitvouw van het menu*/
toggleBtn.addEventListener("mouseenter", mouseOverOn);
toggleClose.addEventListener("mouseleave", mouseOverOff);

function mouseOverOn() {
    let getNavToggle = document.querySelector(".btn-toggle-menu ");
    let getNavToggleUl = document.querySelector(".btn-toggle-menu ul ");
    getNavToggleUl.style.visibility = "visible";
    tekstInput.style.visibility = "visible"

}
function mouseOverOff() {
    let getNavToggle = document.querySelector(".btn-toggle-menu ");
    let getNavToggleUl = document.querySelector(".btn-toggle-menu ul ");
    getNavToggleUl.style.visibility = "hidden";
}
/* Dit is het veranderen van de achtergrondkleur*/


homeBtn.addEventListener('click', homeColor);
redBtn.addEventListener('click', redColor);
blueBtn.addEventListener('click', blueColor);
yellowBtn.addEventListener('click', yellowColor);
greenBtn.addEventListener('click', greenColor);


function homeColor() {
    document.body.style.backgroundColor = "#fbf4e4";
    tekstInput.innerHTML = 'Dit is een grijzige kleur';
    navToggle()
}
function greenColor() {
    document.body.style.backgroundColor = "#2cc45f";
    tekstInput.innerHTML = 'Dit is een groene kleur';
    navToggle()
}
function redColor() {
    document.body.style.backgroundColor = "#f05151";
    tekstInput.innerHTML = 'Dit is een rode kleur';
    navToggle()
}
function blueColor() {
    document.body.style.backgroundColor = "#526df2";
    tekstInput.innerHTML = 'Dit is een blauwe kleur';
    navToggle()
}
function yellowColor() {
    document.body.style.backgroundColor = "#d9f525";
    tekstInput.innerHTML = 'Dit is een gele kleur';
    navToggle()
}
/* Dit is het verandeen van de achtergrondkleur d.m.v toetsenbord*/
function handleKeyUp(evt) {
    var key = evt.keyCode;

    if (key === 49) {
        homeColor();
    }
    else if (key === 50) {
        greenColor();
    }
    else if (key === 51) {
        redColor();
    }
    else if (key === 52) {
        blueColor();
    }
    else if (key === 53) {
        yellowColor();
    }

}



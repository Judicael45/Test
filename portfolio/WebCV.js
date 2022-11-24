"use strict"

const black = document.querySelector("#blackTheme")
const white = document.querySelector("#whiteTheme")
black.addEventListener("input", changeTheme2);
white.addEventListener("input",changeTheme2);

function changeTheme2() {
    if (black.checked) {
        document.documentElement.style.setProperty("--font", "rgb(20, 20, 20)")//Thème Noir
        document.documentElement.style.setProperty("--text", "rgba(255, 255, 255, 0.788)")//Thème blanc
        localStorage.setItem("theme", "rgb(20, 20, 20)")
        black.checked = true
    }
    else if(white.checked){
        document.documentElement.style.setProperty("--font", "rgba(255, 255, 255, 0.788)")
        document.documentElement.style.setProperty("--text", "rgb(20, 20, 20)")
        localStorage.setItem("theme", "rgba(255, 255, 255, 0.788)")
        
    }
}

black.checked = localStorage.getItem("theme") === "rgb(20, 20, 20)"
white.checked = localStorage.getItem("theme") === "rgba(255, 255, 255, 0.788)"




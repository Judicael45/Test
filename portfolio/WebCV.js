"use strict"


const black = document.querySelector("#blackTheme")
const white = document.querySelector("#whiteTheme")
black.addEventListener("input", changeTheme2);
white.addEventListener("input",changeTheme2);

function changeTheme2() {
    if (black.checked) {
        document.documentElement.style.setProperty("--font", "black")
        document.documentElement.style.setProperty("--text", "white")
        localStorage.setItem("theme", "black")
        black.checked = true
    }
    else if(white.checked){
        document.documentElement.style.setProperty("--font", "white")
        document.documentElement.style.setProperty("--text", "black")
        localStorage.setItem("theme", "white")
        
    }
}

black.checked = localStorage.getItem("theme") === "black"
white.checked = localStorage.getItem("theme") === "white"
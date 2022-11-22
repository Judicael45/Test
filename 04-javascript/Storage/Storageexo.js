"use strict"

const red = document.querySelector("#redTheme")
const yellow = document.querySelector("#yellowTheme")
const green = document.querySelector("#greenTheme")
//red.addEventListener("input",changeTheme)

function changeTheme() {
    document.body.classList.toggle("red", red.checked);
}

red.addEventListener("input", changeTheme2);
yellow.addEventListener("input", changeTheme2);
green.addEventListener("input", changeTheme2);

function changeTheme2() {
    if (red.checked) {
        // documentElement représenter l'élément racine.
        document.documentElement.style.setProperty("--fond", "red")
        document.documentElement.style.setProperty("--text", "antiquewhite")
        // Je sauvegarde mon thème sombre
        localStorage.setItem("theme", "red")
        red.checked = true
    }
    else if(yellow.checked) {
        document.documentElement.style.setProperty("--fond", "yellow")
        document.documentElement.style.setProperty("--text", "antiquewhite")
        // Je retire mon thème sombre
        localStorage.setItem("theme", "yellow")
    }
    else if(green.checked){
        document.documentElement.style.setProperty("--fond", "green")
        document.documentElement.style.setProperty("--text", "antiquewhite")
        // Je retire mon thème sombre
        localStorage.setItem("theme", "green")
    }
}
red.checked = localStorage.getItem("theme") === "red"
yellow.checked = localStorage.getItem("theme") === "yellow"
green.checked = localStorage.getItem("theme") === "green"
changeTheme2()

"use strict"
// Changement de couleur body
const black = document.querySelector("#blackTheme")
const white = document.querySelector("#whiteTheme")
black.addEventListener("input", changeTheme2);
white.addEventListener("input",changeTheme2);

function changeTheme2() {
    if (black.checked) {
        document.documentElement.style.setProperty("--font", "rgb(20, 20, 20)")//Thème Noir
        document.documentElement.style.setProperty("--text", "#B3dee5")//Thème blanc
        localStorage.setItem("theme", "rgb(20, 20, 20)")
        black.checked = true
    }
    else if(white.checked){
        document.documentElement.style.setProperty("--font", "#B3dee5")
        document.documentElement.style.setProperty("--text", "rgb(20, 20, 20)")
        localStorage.setItem("theme", "#B3dee5")
        
    }
}

black.checked = localStorage.getItem("theme") === "rgb(20, 20, 20)"
white.checked = localStorage.getItem("theme") === "#B3dee5"

// fin de changement de coueur body 


//carousel
const items = document.querySelectorAll('.slider img');
const nbSlide = items.length;
const suivant = document.querySelector('.right');
const precedent = document.querySelector('.left');
let count = 0;

function slideSuivante(){
    items[count].classList.remove('active');

    if(count < nbSlide - 1){
        count++;
    } else {
        count = 0;
    }

    items[count].classList.add('active')
    console.log(count);
    
}
suivant.addEventListener('click', slideSuivante)


function slidePrecedente(){
    items[count].classList.remove('active');

    if(count > 0){
        count--;
    } else {
        count = nbSlide - 1;
    }

    items[count].classList.add('active')
    // console.log(count);
    
}
precedent.addEventListener('click', slidePrecedente)

function keyPress(e){
    console.log(e);
    
    if(e.keyCode === 37){
        slidePrecedente();
    } else if(e.keyCode === 39){
        slideSuivante();
    }
}
document.addEventListener('keydown', keyPress)
// Fin de carousel
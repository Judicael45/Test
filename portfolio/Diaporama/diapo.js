"use strict"

let img_slider = document.getElementsByClassName("imgslider")
let etape = 0

let nombre_img = img_slider.length

let precedent = document.querySelector(".precedent")
let suivant = document.querySelector(".suivant")

function enleverActiveImage() {
    for(let i = 0 ; i < nombre_img; i++) {
    img_slider[i].classList.remove(`active`)
    }
}

suivant.addEventListener("click",function(){
    etape++
    if (etape >= nombre_img) {
        etape = 0
    }
    enleverActiveImage()
    img_slider[etape].classList.add(`active`)
})

precedent.addEventListener("click",function(){
    etape--
    if (etape < 0 ) {
        etape = nombre_img -1
    }
    enleverActiveImage()
    img_slider[etape].classList.add(`active`)
})
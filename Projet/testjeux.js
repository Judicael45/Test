"use strict"

const world = document.querySelector('#gameBoard')
const c = world.getContext('2d')

world.width = world.clientWidth
world.height = world.clientHeight

let frame = 0


const missiles = []

const keys = {
    ArrowLeft: { pressed: false },
    ArrowRight: { pressed: false }
}

// Player sera le vaisseau
class Player {
    constructor() {
        this.width = 32 // Largeur du player
        this.height = 32 // Hauteur du player
        this.velocity = {
            x: 0, // Vitesse de déplacement sur l'axe des x
            y: 0 // Vitesse de déplacement sur l'axe des Y
        }
        this.position = {
            x: (world.width - this.width) / 2, // position du joueurs par défaut sur la largeur
            y: world.height - this.height // position du joueurs par défaut sur la hauteur
        }
    }

    draw() {
        // Le joueur sera un carré blanc
        c.fillStyle = 'white'
        c.fillRect(this.position.x, this.position.y, this.width, this.height)
    }
    shoot() {
        missiles.push (new Missile({
        position:{
            x:this.position.x + this.width/2,
            y:this.position.y
        },
    
    }))
}
    update() {
        // A chaque mise ç jour on dessine le joueur
        if (keys.ArrowLeft.pressed && this.position.x >= 0) {
            this.velocity.x = -5
        }
        else if (keys.ArrowRight.pressed && this.position.x <= world.width - this.width) {
            this.velocity.x = 5
        }
        else { this.velocity.x = 0 }
        this.position.x += this.velocity.x
        this.draw()


    }
}
// Missile serons les Missile envoyer par le vaisseau 
class Missile {
    constructor({ position }) {
        this.position = position
        this.velocity ={x:0,y:-5}
        this.width = 3
        this.height = 10
    }
    draw() {
        c.fillStyle = 'red'
        c.fillRect(this.position.x, this.position.y, this.width, this.height)
    }
    update() {
        this.position.y += this.velocity.y
        this.draw()
    }
}

const player = new Player()




// boucle d'animation
const animationLoop = () =>{
    requestAnimationFrame(animationLoop)
    c.clearRect(0,0,world.width, world.height)
    player.update();
    missiles.forEach((missile,index) => {
        if(missile.position.y + missile.height <=0) 
            setTimeout(() =>
                missiles.splice(index,1)
            ,0)}
            else{missile.update()}; 
            
    
    frame++
} 
animationLoop()

addEventListener('keydown', ({ key }) => {
    switch (key) {
        case "ArrowLeft":
            keys.ArrowLeft.pressed = true
            console.log("gauche");
            break
        case "ArrowRight":
            keys.ArrowRight.pressed = true
            console.log("droite");
            break
    }
})

addEventListener('keyup', ({ key }) => {
    switch (key) {
        case "ArrowLeft":
            keys.ArrowLeft.pressed = false
            console.log("gauche");
            break
        case "ArrowRight":
            keys.ArrowRight.pressed = false
            console.log("droite");
            break
        case '':
            player.shoot()
            console.log(missiles);
    }
})
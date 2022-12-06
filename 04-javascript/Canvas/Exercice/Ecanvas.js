window.addEventListener("load", () => {
// pour appeller les élément du HTML 
    const canvas = document.getElementById("myCanvas")
    const ctx = canvas.getContext("2d")
    let color = document.getElementById("myColor")
    let size = document.getElementById("myRange")


    canvas.height = window.innerHeight
    canvas.width = window.innerWidth
// pour changer la couleur
    let myColor = color.value
    ctx.strokeStyle = myColor
// pour changer la taille 
    let mySize = size.value
    ctx.lineWidth = mySize



    let painting = false
// pour la position de départ de la souris 
    function position(e) {
        painting = true
        Draw(e)
      
    }
// pour la position d'arret de fin de la souris 
    function endposition() {
        painting = false
        ctx.beginPath()
    }

    // pour la couleur
    function colorChange() {
        myColor = color.value
        ctx.strokeStyle = myColor
    }

    // pour la taille 
    function sizeChanger() {
        mySize = size.value
        ctx.lineWidth = mySize
    }
// pour que quand on clic cela commence a déssiner 
    function Draw(e) {
        if (!painting) return
        ctx.lineJoin = "round"
        
        ctx.lineTo(e.clientX, e.clientY)
        ctx.stroke()
    }

   

// pour écouter les evenements 
    canvas.addEventListener("mousedown", position)
    canvas.addEventListener("mouseup", endposition)
    canvas.addEventListener("mousemove", Draw)
    color.addEventListener("change", colorChange)
    size.addEventListener("change", sizeChanger)
})
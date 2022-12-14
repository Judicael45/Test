"use strict"

/*
On va chercher la méthode "floor" de l'objet "Math" qui nous permet d'arrondir à l'inférieur.
Math.random() nous permet d'obtenir un chiffre entre 0 et 1.
x contiendra donc un chiffre entre 0 et 20.
*/
let x=Math.floor(Math.random()*20)
// Un if permet de vérifier une condition,
// il attend un boolean pour savoir si il peut faire l'action entre accolade ou non.

if(x<10)
{
    console.log(x+"est plus petit que 10");
}
// à la suite d'un if,on peut optionnellement ajouter un else of pour vérifier une autre condition.
else if(x>10)
{
    console.log(x+"est plus grand que 10")
}
// à la suite d'un if ou d'un else if,on peut ajouter un else, qui senclenchera si toute les autres conditions sont fausse.
else
{
    console.log("x vaut 10")
}
// on peut mettre autant de else if que l'on veut.
/*
d'autre syntaxes existent,comme en ne mettant pas d'accolae,dans ce cas là,
 seule la première instruction qui suis sera dans le if. les autres seront considéré hors du if. 
*/
if(x<10)
console.log(x+"est plus petit que 10");
else if(x>10)
console.log(x+"est plus grand que 10");
else
console.log("x vaut 10");

let message=x<10?x+ "est plus petit que 10":x+"est plus grand ou égale à 10"
console.log(message);
// Je peux inbriquer une ternaire dans une autre.
message = x<10?x + "est plus petit que 10":x>10?x + "est plus grand que 10":"x vaut 10"
console.log(message);




//---------------------switch---------------------

let ville = prompt("De quelle ville venez-vous?")
console.log(ville);
switch(ville.toLowerCase())
{
    case"paris":
    alert("De la capital donc")
    break
    // Le mot clef "break" permet d'arrêter le cas ici et de ne pas lancer les prochaines actions.
    case"lille":
    alert("Moule,frite et bière")
    break
    // Le mot clef "default" permet de crée un cas par défaut qui se lance si les précédents ne correspondent pas
    default:
        alert("Je ne connais pas")
}

//------------------------??-------------------------
let a,b= undefined, c=null,d="chaussette",e=
{nom:"Bruno"},f=["test"]
// Le"??" permet de vérifier si la variable précédente est défini et dans le cas contraire, 
// ultiliser ce qui est donné après les "??"
console.log(
    a??"Coucou",
    b??"Coucou",
    c??"Coucou",
    d??"Coucou",
    e.nom ??"Coucou",
    e.prenom??"Coucou",
    f[0]??"Coucou",
    f[1]??"Coucou"
    );
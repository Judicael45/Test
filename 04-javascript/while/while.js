
//-----------------------for-------------------------------
for(let i = 0;i<10;i++)
{
    /* La boucle for prend 3 paramètres séârés de ";"
    -le premier est une déclaratoin et définition de variable 
    qui sera execté avant le début de la boucle.
    -le second est la condition qui sera vérifié avant chaque itération
    pour savoir si la boucle continue.
    -Le troisème est la modification de la variable qui aura lieu à la fin de chaque itération.
    */
    console.log("i vaut",i);
}
let arr= ["pizza","cannelé","gratin dauphinois"];
let person = {nom:"Maurice",age:55,yeux:"vert"};

 for(let food in arr)
 {
    // for in permet de récupérer les différents index d'un tableau.
    console.log(food,"->",arr[food]);
    // à chaque itération, la variable déclaré dans le for prendra la valeur de l'index suivant.
 }
 for(let carac in person)
 {
    //utilisé sur un objet, on obtien le nom des propriétés.
    console.log(carac,"->", person[carac]);
 }

 for(let f of arr)
 {
    // for of comme for in va parcourir mon tableau,
    // mais au lieu de selectionner les index, il selectionnera directement les valeurs.
    console.log(f);
    // for of ne fonctionne pas sur les objets.
 }

 //----------------------forEach et map---------------------------
 let al=[8, 42, 34, 13, 97]
 /* forEach et map sont des méthodes (fonction) appartenant aux tableaux
 Elles ne fonctionnent donc que sur les tableaux.
 avec la syntaxe suivante :
     tableau.forEach(fonction);
     tableau.map(fonction);

 */
al.forEach(chiffre=>console.log(chiffre));
/*
forEach crée une itteration pour chaque élément du tableau.
cet élément est récupéré dans la variable donné en paramètre
de forEach, et peut être utilisé comme on le souhaite dans la fonction callback.
 (plus de détail dans le cours sur les fonctions)
 */
let a2 = al.map(val => val*2)
console.log(a2);
/* Le fonctionnement de map se rapproche de celui de forEach, à la différence
qu'il permet de modifier les valeurs d'un tableau et nous retourne un nouveau tableau contenant
les valeurs retourné par la fonction callback.
*/

let a3 = arr.map(food=>food.toUpperCase())
console.log(a3);









//exercice 1

let x;
do{
   x=prompt ("Donne moi un chiffre entre 1 et 3")
}while(x<1 && x>3)

//exercice 2 

let y, n="Donne moi un chiffre entre 10 et 20."

do{
   y = prompt(m)
   m = y<20?"Plus grand !":"Plus petit"
   // deuxieme exemple
   if(y<10)
   {
      m="Plus grand !"
   }
   else
   {
      m="plus petit !"
   }
}while (y<10 && y>20)

//exercice 3

let z = parseInt(prompt("Sonne moi un nombre et je te répondrais les dix suivants"))

for(let q = z+1<=z+10;q++;)
{
   console.log(i);
}

//exercice 4

let w = ("Donne moi le nombre dont tu veux voir la able de multiplication")
for(let p=0;p<10;p++)
{
 console.log(w+"*"+p+"="+w*i);
}

//exercice 5 

let v = prompt("Donne moi un nombre !"),total= 1;
for(let i;i<=v;i++)
{
   total *=i;
}
console.log("La factoriel de " +v+"vaut"+ total);


//exercice 6

let nb, max, pos;
for(let i= 1; i<=5; i++)
{
   nb = parseInt(prompt("Donne moi un fichu nombre !"))
   if(i==1 && max<nb)
   {
      max = nb;
      pos = i
   }
}
console.log((`Le nombre le plus grand est ${max} et a été donné à la saisie numéro ${pos}`));


//exercice 7 

let i = 1;
do{
nb = parseInt(prompt("Donne moi un fichu nombre !"))
if (i==1 && max<nb) {
   
   max=nb;
   pos=i;
}

}while(nb !=0)
console.log(`Le nombre le plus grand est ${max} et a été donner à la saisie numéro ${pos}`);
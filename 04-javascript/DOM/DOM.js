"use script"
//----------------DOM------------------
//Document Object Model
const h = document.createElement("header");
/*
Je fait appelle à la méthode du dom createElement qui me permettra
de crée un élément HTML.
Celle ci prendra en paramètre, me nom de la balise que je souhaite créer.
 */
console.log(h);
const m = document.createElement("main")
const f = document.createElement("footer")
/*
   append est une méthode qui peut être utilisé sur tout élément html qui peut contenir d'autres éléments.
   Il insère à la fin de cet élément ce qui lui a été donné en paramètre.

   Il existe aussi la méthode "appendChild" qui est moins permissive.
   append peut recevoir autant de paramètre que l'on souhaite.
   appendChild qu'un seul.
   apprend peut recevoir des string.
   pas appendChild.
*/
b1 = document.createElement("button"),
b2 = document.createElement("button");
const d = document.createElement("div")
document.body.appendChild(d)
document.body.innerHTML += `<div>
<h2> Santé </h2>
<p> Manger 5 fruit et légume par jour</p>
<button>Tchin Tchin</button>
<button>Le gras c'est la vie</button>
</div>`
// permet de déplacer append
document.body.append(h, m, f)

h.innerHTML = "<h1>Super site en JS</h1>";
f.innerHTML = "<ul><li> MENU 1</li><li>MENU 2</li><li>MENU 3</li></ul>"

for(let i=0;i<5;i++)
{
    const p = document.createElement("p")
    p.textContent = "Cette balise <br> ne sera pas interprêté dans un textContent, alors qu'elle l'aurait été dans un innerHTML."
    m.appendChild(p)
}


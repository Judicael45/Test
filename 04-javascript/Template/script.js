"use strict"



const template = document.querySelector("#card")
console.log(template.content);
const content = template.content
const clone = content.cloneNode(true)
console.log(clone);
//document.body.append(clone)

async function getCards()
{
    const response = await fetch("json.json")
    if(!response.ok)return
    const data = await response.json()
    data.forEach(c => {
        const clone = content.cloneNode(true)
        clone.querySelector("h2").textContent = c.titre
        clone.querySelector("p").textContent = c.paragraphe
        const a = clone.querySelector("a")
        a.href = c.link
        a.textContent = "clique moi !"
        document.body.append(clone)
    });
}
getCards()

import SuperCard from"./Supercard.js"
"use strict"
const card = document.querySelector("card-wrapper")
const url = "./hero.json"

const xmlhttp = new XMLHttpRequest()


fetch(url).then(handleFetch)


function handleFetch(responseText) {
    responseText.json()
        .then(showResult)
        .catch(error => console.log(error))
}

function showResult(data) {
    console.log(data.members);
    document.body.innerHTML += `<h3>${data.members[0].name}
     ${data.members[0].age}
     ${data.members[0].secretIdentity}
     ${data.members[0].powers}</h3>`;

     document.body.innerHTML +=`<h3>${data.members[1].name}
     ${data.members[1].age}
     ${data.members[1].secretIdentity}
     ${data.members[1].powers}</h3>`

     document.body.innerHTML +=`<h3>${data.members[2].name}
     ${data.members[2].age}
     ${data.members[2].secretIdentity}
     ${data.members[2].powers}</h3>`
}
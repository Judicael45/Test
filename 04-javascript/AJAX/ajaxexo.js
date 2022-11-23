"use strict"

const url = "./hero.json"

const xmlhttp =  new XMLHttpRequest()


fetch(url).then(handleFetch)


function handleFetch(responseText)
{
responseText.json()
.then(showResult)
.catch(error=>console.log(error))
}

function showResult(data)
{
    console.log(data);
    document.body.innerHTML += `<h2>${data.members}</h2>`;

}
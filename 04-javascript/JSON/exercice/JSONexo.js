"use strict"

const form = document.querySelector("form")

form.addEventListener("submit",saveData)

function saveData(e){
    

    
    e.preventDefault()

  const data = new FormData(form)

    let user = {}

    data.forEach((value,name)=>{
        user[name]= value
        console.log(value);
    })
    const strUser = JSON.stringify(user);
    localStorage.setItem("user", strUser);
}

const userString = localStorage.getItem("user")
if(userString){
   console.log(userString);
    const user = JSON.parse(userString)
    console.log(user);
    
}
function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("Ajouter").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === 'Ajouter') {
      alert("Ajouter un texte!");
    } else {
      document.getElementById("$Ajouter").appendChild(li);
    }
    document.getElementById("#aj").value = ""
  
    var span = document.createElement("span");
    var txt = document.createTextNode(inputValue);
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
  
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
      }
    }
  }

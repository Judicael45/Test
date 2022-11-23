"use strict"

const ulTodo = document.querySelector("#list")
const btnTodo = document.querySelector('.addBtn')
const inputTodo = document.querySelector("#addTodo")
let listInfo = {}
btnTodo.addEventListener("pointerdown", addLi)

function addClose(div){
const span = document.createElement("span")
span.textContent = "\u00D7"
span.classList.add("close")
div.append(span)
span.addEventListener("pointerdown",closeLi)
div.addEventListener("click",checkLi)
}

function closeLi(e){
e.stopPropagation()
let div = e.target.parentElement
delete listInfo [div.dataset.time]
localStorage.setItem("todoList",JSON.stringify(listInfo))
div.parentElement.remove()

}

function checkLi(e){
this.classList.toggle("checked")
listInfo[this.dataset.time].checked = this.classList.contains("checked")
localStorage.setItem("todoList",JSON.stringify(listInfo))
}
function addLi(){
  if(inputTodo.value ==="")
  alert("Ne laisse pas ce champ vide !")
  return
}
const li = document.createElement("li")
const div = document.createElement("div")
div.textContent = inputTodo.value
div.dataset.time = Date.now()
li.append(div)
ulTodo.append(li)
addClose(div)
listInfo[div.dataset.time] = {value: inputTodo.value, checked:false}
localStorage.setItem("todoList",JSON.stringify(listInfo))
inputTodo.value = ""
inputTodo.focus()
//console.log(listInfo);

function firstLoad(){
listInfo = JSON.parse(localStorage.getItem("todoList"))??{}
for(let id in listInfo)
{
  const el = listInfo[id]
  const div = document.createElement("div")
  const li = document.createElement("li")
  div.textContent = el.value
  div.dataset.time = id
  div.classList.toggle("checked",el.checked)
  li.append(div)
  ulTodo.append(li)
  addClose(div)
  //bonus uniquement :
  addEventDragAndDrop(div)
}
}

firstLoad()
//Bonus : 
function dragStart(e){}
function dragEnter(e){}
function dragLeave(e){}
function dragOver(e){}
function dragDrop(e){}
function dragEnd(e){}
function addEventDragAndDrop(el){
el.draggable = true
}
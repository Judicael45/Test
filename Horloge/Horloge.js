function update() {
  var element = document.getElementById("myprogressBar");   
  var width = 0;
  var identity = setInterval(scene, 10);
  
  function scene() {
    if (width >= 100) {
      clearInterval(identity);
    } else {
      width++; 
      element.style.width = width + '%'; 
    }
  }
}



function clock() {
  const date = new Date();
  const hours = ((date.getHours() + 11) % 12 + 1);
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const hour = hours * 30;
  const minute = minutes * 6;
  const second = seconds * 6;
  
  document.querySelector('.heure').style.transform = `rotate(${hour}deg)`;
  document.querySelector('.minute').style.transform = `rotate(${minute}deg)`;
  document.querySelector('.seconde').style.transform = `rotate(${second}deg)`;
}

setInterval(clock, 1000);


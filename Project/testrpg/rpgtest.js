"use strict"

const startButton = document.getElementById('start-button');
const loadingMessage = document.getElementById('loading-message');

startButton.addEventListener('click', function() {
  loadingMessage.style.display = 'block';
  setTimeout(function() {
    loadingMessage.style.display = 'none';
  }, 2000);
});
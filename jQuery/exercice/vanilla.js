let idInterval;
window.addEventListener('load', function () {
  document.querySelectorAll('#slider ul li:nth-child(odd)').forEach(function(element) {
    element.style.background = '#aaa';
  });

  const checkbox = document.getElementById('checkbox');
  checkbox.addEventListener('change', function () {
    if(checkbox.checked) {
      idInterval = setInterval(moveRight, 1500);
    } else {
      clearInterval(idInterval);
    }
  });

  const slideCount = document.querySelectorAll('#slider ul li').length;
  const slideWidth = document.querySelector('#slider ul li').offsetWidth;
  const slideHeight = document.querySelector('#slider ul li').offsetHeight;
  const sliderUlWidth = slideCount * slideWidth

  const slider = document.getElementById('slider');
  slider.style.width = `${slideWidth}px`;
  slider.style.height = `${slideHeight}px`;

  const sliderUl = document.getElementById('slider ul');
  sliderUl.style.width = `${sliderUlWidth}px`;
  sliderUl.style.marginLeft = `-${slideWidth}px`;

  const lastChild = document.querySelector('#slider ul li:last-child');
  sliderUl.insertBefore(lastChild, sliderUl.firstChild);

  function moveLeft() {
    sliderUl.animate([{ left: '0' }, { left: `${slideWidth}px` }], {
      duration: 200,
      fill: 'forwards'
    }).addEventListener('finish', function () {
      const lastChild = document.querySelector('#slider ul li:last-child');
      sliderUl.insertBefore(lastChild, sliderUl.firstChild);
      sliderUl.style.left = '';
    });
  }

  function moveRight() {
    sliderUl.animate([{ left: '0' }, { left: `-${slideWidth}px` }], {
      duration: 200,
      fill: 'forwards'
    }).addEventListener('finish', function () {
      const firstChild = document.querySelector('#slider ul li:first-child');
      sliderUl.appendChild(firstChild);
      sliderUl.style.left = '';
    });
  }
  

  const prevButton = document.querySelector('a.control_prev');
  prevButton.addEventListener('click', moveLeft);

  const nextButton = document.querySelector('a.control_next');
  nextButton.addEventListener('click', moveRight);
});

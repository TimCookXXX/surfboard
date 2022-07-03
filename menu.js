const openButton = document.querySelector('.hamburger');
const closeButton = document.querySelector('.fullscreen-menu__close');
const menu = document.querySelector('.fullscreen-menu');


openButton.addEventListener('click', function(e) {
  menu.style.display = 'block';
});

closeButton.addEventListener('click', function(e) {
  menu.style.display = 'none'
});
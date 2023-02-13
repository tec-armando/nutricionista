window.addEventListener("scroll", positionX);

function positionX() {
  let scrollX = document.scrollingElement.scrollTop;

  if(scrollX > 1) {
  addClass();
  } else if(scrollX < 1) {
  removeClass();
  }
}

function addClass() {
  if(window.innerWidth > 768) return false;
  let image = document.querySelector(".header__image")
  let header = document.querySelector('.header');
  header.classList.add('header-fixed');
  image.classList.add('header__img-fixed'); 
}

function removeClass() {
  let image = document.querySelector(".header__image")
  let header = document.querySelector('.header');
  header.classList.remove('header-fixed');
  image.classList.remove('header__img-fixed');
}
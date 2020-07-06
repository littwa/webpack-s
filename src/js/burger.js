'use strict';
let burgerMenu = document.querySelector('.burger-menu');
let burgerBtn = document.querySelector('.nav__item--burger-link');
let closeBtn = document.querySelector('.exit');

let openModal = () => {
  burgerMenu.classList.add('burger-menu-active');
}

let closeModal = () => {
  burgerMenu.classList.remove('burger-menu-active');
}

burgerBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);

'use strict'

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const btnEl = document.querySelector('.change-color');
const colorValueEl = document.querySelector('.color');
const bodyEl = document.querySelector('body');

btnEl.addEventListener('click', () => {
  bodyEl.style.backgroundColor = `${getRandomHexColor()}`
  colorValueEl.textContent = bodyEl.style.backgroundColor
})


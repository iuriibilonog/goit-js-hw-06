'use strict'

const counterValue = document.querySelector('#value');
counterValue.textContent = 0;


const inkrBtn = document.querySelector('[data-action = increment]');
inkrBtn.addEventListener('click', e => {
  counterValue.textContent ++;
})

const decBtn = document.querySelector('[data-action = decrement]');
decBtn.addEventListener('click', e => {
  counterValue.textContent --;
})


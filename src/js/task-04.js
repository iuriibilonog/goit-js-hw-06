'use strict'

const counterValue = document.querySelector('#value');

let counter = 0;


const inkrBtn = document.querySelector('[data-action = increment]');
inkrBtn.addEventListener('click', () => {
counter += 1;
  counterValue.textContent = counter;
})

const decBtn = document.querySelector('[data-action = decrement]');
decBtn.addEventListener('click', () => {
  counter -= 1;
  counterValue.textContent = counter;
})


'use strict'

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputEl = document.querySelector('#controls input');
const createElBtn = document.querySelector('[data-create]');
const destroyElBtn = document.querySelector('[data-destroy]');
const boxEl = document.querySelector('#boxes');

createElBtn.addEventListener('click', () => {
   createBoxes(inputEl.value);
  
})

destroyElBtn.addEventListener('click', () => {
  boxEl.innerHTML = '';
})


function createBoxes(amount) {
  let boxArr = [];
  for (let i = 0; i < amount; i++) {
    const boxes = document.createElement('div');
    boxes.style.width = `${30 + i*10}px`;
    boxes.style.height = `${30 + i*10}px`;
    boxes.style.backgroundColor = getRandomHexColor();
    boxes.classList.add('box-item');
    

    
    boxArr.push(boxes);
  }
  boxEl.append(...boxArr);
}






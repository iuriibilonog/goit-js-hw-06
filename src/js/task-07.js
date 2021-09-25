'use strict'

const rangeEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');


rangeEl.addEventListener('input', e => {
 
  textEl.style.fontSize = `${e.target.value}px`;
})


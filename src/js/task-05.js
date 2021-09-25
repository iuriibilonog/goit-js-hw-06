'use strict'

const inputEl = document.querySelector('#name-input');

const outputEl = document.querySelector('#name-output');

inputEl.addEventListener('input', e => {
  if (e.target.value.length > 0)
    outputEl.textContent = e.currentTarget.value;
  else 
    outputEl.textContent = "Anonymous";
  
})




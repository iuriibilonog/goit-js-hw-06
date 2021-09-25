'use strict'

const inputEl = document.querySelector('#validation-input');


inputEl.addEventListener('blur', e => {
  inputEl.classList.remove('invalid', 'valid')

  if (e.target.value.length < +(inputEl.dataset.length)) inputEl.classList.add('invalid')
  else {
    inputEl.classList.add('valid')
   
  }
})
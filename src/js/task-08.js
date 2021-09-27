'use strict'

const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', e => {
  e.preventDefault();
  const mail = e.currentTarget.elements.email.value;
  const password = e.currentTarget.elements.password.value;


  if (mail === '' || password === '')  return alert('Заполните все поля');
  

  const formData = {
    mail,
    password
  }

  console.log(formData)

  e.currentTarget.reset();

})

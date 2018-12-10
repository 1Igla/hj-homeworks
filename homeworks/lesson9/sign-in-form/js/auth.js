'use strict';
const formSignin = document.querySelector('.sign-in-htm');
const formDataIn = new FormData(formSignin);


const formSignup = document.querySelector('.sign-up-htm');
const formDataUp = new FormData(formSignup);

const xhrSignin = new XMLHttpRequest();
const xhrSignup = new XMLHttpRequest();

const buttonSignin = formSignin.querySelector('.button');
const buttonSignup = formSignin.querySelector('.button');

xhrSignin.open('POST', 'https://neto-api.herokuapp.com/signin');
xhrSignup.open('POST', 'https://neto-api.herokuapp.com/signup');

buttonSignin.addEventListener('click', () => {
  xhrSignin.send(JSON.stringify(formDataIn));
  xhrSignin.addEventListener('load', () =>{
    let answer = JSON.parse(xhrSignin.responseText);
    let outMessage = formSignin.querySelector('.error-message');
    console.log(answer);
    console.log('error' in answer);
    if ('error' in answer) {
      outMessage.textContent = answer.message;
    }
    else{
      outMessage.textContent = `Пользователь ${answer.name} успешно авторизован`
    }
  })
})



buttonSignup.addEventListener('click', () => {
  xhrSignup.send(JSON.stringify(formDataUp));
  xhrSignup.addEventListener('load', () =>{
    let answer = JSON.parse(xhrSignup.responseText);
    let outMessage = formSignup.querySelector('.error-message');
    console.log(answer);
    console.log('error' in answer);
    if ('error' in answer) {
      outMessage.textContent = answer.message;
    }
    else{
      outMessage.textContent = `Пользователь ${answer.name} успешно зарегестрирован`
    }
  })
})

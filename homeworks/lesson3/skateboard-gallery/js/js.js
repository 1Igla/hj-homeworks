'use strict';

var vip = document.getElementById('view'); // верхний скейт
var gallery = document.getElementsByClassName('gallery-current');
var nav = document.getElementById('nav');
var links = nav.getElementsByTagName('a'); // коллекция картинок

function chooseHref(ev) { //присваивание ссылки
  ev.preventDefault();
  vip.src=this.href;
}


function chooseClass(ev) { //добавление класса
 this.classList.add('gallery-current');
}

function delet(ev) { //удаление класса
  for(var l of links) {
    l.classList.remove('gallery-current');
  }
}

Array.from(links).forEach(i => {
  i.addEventListener('click', chooseHref);
  i.addEventListener('click', delet);
  i.addEventListener('click', chooseClass);
})
